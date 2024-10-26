export default class Player { 
    constructor(x, y, z, scenario, controlScheme = 'leftStick', controller = 0, pontos = null) {
        this.x = x || 232;
        this.y = y || 319;
        this.z = z || 20;
        this.scenario = scenario;
        this.controlScheme = controlScheme;
        this.controller = controller;

        this.pontos = pontos;
        this.isAlive = true;
        this.lives = 3;

        this.sprites = {
            idle: [
                new Image("assets/personagem/idle_1.png", RAM),
                new Image("assets/personagem/idle_2.png", RAM)
            ],
            left: [
                new Image("assets/personagem/left_1.png", RAM),
                new Image("assets/personagem/left_2.png", RAM),
                new Image("assets/personagem/left_3.png", RAM)
            ],
            right: [
                new Image("assets/personagem/right_1.png", RAM),
                new Image("assets/personagem/right_2.png", RAM),
                new Image("assets/personagem/right_3.png", RAM)
            ],
            up: [
                new Image("assets/personagem/up_1.png", RAM),
                new Image("assets/personagem/up_2.png", RAM),
                new Image("assets/personagem/up_3.png", RAM)
            ],
            down: [
                new Image("assets/personagem/down_1.png", RAM),
                new Image("assets/personagem/down_2.png", RAM),
                new Image("assets/personagem/down_3.png", RAM)
            ],
            death: [
                new Image("assets/personagem/death_1.png", RAM),
                new Image("assets/personagem/death_2.png", RAM)
            ],
            life: new Image("assets/personagem/life.png", RAM)
        };

        this.currentAnimation = this.sprites.idle;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 4;

        this.isAlive = true;
        this.isRespawning = false;
        this.continueText = new Image("assets/mensagens/continue.png", RAM);
        this.gameOverText = new Image("assets/mensagens/gameover.png", RAM);
    }

    movePlayer() {
        if (!this.isAlive || this.isRespawning) return;

        const Pad = Pads.get(this.controller);
        let newX = this.x;
        let newY = this.y;

        this.currentAnimation = this.sprites.idle;

        if ((Pad.lx < -25 || Pad.left) && !this.scenario.checkCollision(newX - 5, this.y, this.z, this.z)) {
            newX -= 3;
            this.currentAnimation = this.sprites.left;
        }

        if ((Pad.lx > 25 || Pad.right) && !this.scenario.checkCollision(newX + 5, this.y, this.z, this.z)) {
            newX += 3;
            this.currentAnimation = this.sprites.right;
        }

        if ((Pad.ly < -25 || Pad.up) && !this.scenario.checkCollision(this.x, newY - 5, this.z, this.z)) {
            newY -= 3;
            this.currentAnimation = this.sprites.up;
        }

        if ((Pad.ly > 25 || Pad.down) && !this.scenario.checkCollision(this.x, newY + 5, this.z, this.z)) {
            newY += 3;
            this.currentAnimation = this.sprites.down;
        }

        this.x = newX;
        this.y = newY;

        if (this.pontos) {
            this.checkCollisionWithPoints();
        }

        this.updateAnimationFrame();
    }

    updateAnimationFrame() {
        this.frameCounter++;
        if (this.frameCounter >= this.frameSpeed) {
            this.frameCounter = 0;
            this.currentFrame = (this.currentFrame + 1) % this.currentAnimation.length;
        }
    }

    draw() {
        if (this.currentAnimation && this.currentAnimation[this.currentFrame]) {
            this.currentAnimation[this.currentFrame].draw(this.x, this.y);
        }

        this.drawLives();

        if (this.isRespawning) {
            this.continueText.draw(268, 249);
        }

        if (this.isGameOver) {
            this.gameOverText.draw(263, 246);
        }
    }

    drawLives() {
        for (let i = 0; i < this.lives; i++) {
            this.sprites.life.draw(1 + i * 27, 2);
        }
    }

    checkCollisionWithPoints() {
        this.pontos.checkCollision(this.x, this.y, this.z, this.z);
    }

    checkCollisionWithGhost(ghost) {
        if (!this.isAlive) return;

        const playerLeft = this.x;
        const playerRight = this.x + this.z;
        const playerTop = this.y;
        const playerBottom = this.y + this.z;

        const ghostLeft = ghost.x;
        const ghostRight = ghost.x + ghost.z;
        const ghostTop = ghost.y;
        const ghostBottom = ghost.y + ghost.z;

        const isColliding = 
            playerRight > ghostLeft && 
            playerLeft < ghostRight && 
            playerBottom > ghostTop && 
            playerTop < ghostBottom;

        if (isColliding) {
            this.die();
        }
    }

    die() {
        this.isAlive = false;
        this.currentAnimation = this.sprites.death;
        this.currentFrame = 0;
        this.lives--;

        if (this.lives > 0) {
            this.isRespawning = true;
        } else {
            this.isGameOver = true;
        }
    }

    checkContinue() {
        if (this.isRespawning) {
            const pad = Pads.get(this.controller);
            if (pad.justPressed(Pads.START)) {
                this.respawn();
            }
        } else if (this.isGameOver) {
            this.gameOverText.draw(226, 198);
        }
    }

    respawn() {
        if (this.lives > 0) {
            this.isAlive = true;
            this.isRespawning = false;
            this.x = 309; 
            this.y = 65;
            this.currentAnimation = this.sprites.idle;
        }
    }
}