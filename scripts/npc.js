export default class NPC {
    constructor(x, y, z, scenario, speed = 2) {
        this.x = x || 232;
        this.y = y || 319;
        this.z = z || 20;
        this.scenario = scenario;
        this.speed = speed;

        this.sprites = {
            left: [
                new Image("assets/npc/ghost_left_1.png", RAM),
                new Image("assets/npc/ghost_left_2.png", RAM)
            ],
            right: [
                new Image("assets/npc/ghost_right_1.png", RAM),
                new Image("assets/npc/ghost_right_2.png", RAM)
            ],
            up: [
                new Image("assets/npc/ghost_up_1.png", RAM),
                new Image("assets/npc/ghost_up_2.png", RAM)
            ],
            down: [
                new Image("assets/npc/ghost_down_1.png", RAM),
                new Image("assets/npc/ghost_down_2.png", RAM)
            ]
        };

        this.currentAnimation = this.sprites.left;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 10;

        this.lastDirection = null; // Última direção que tentou seguir
    }

    moveNPC(playerX, playerY) {
        // Possíveis direções e seus deslocamentos
        let directions = [
            { dir: 'left', dx: -this.speed, dy: 0 },
            { dir: 'right', dx: this.speed, dy: 0 },
            { dir: 'up', dx: 0, dy: -this.speed },
            { dir: 'down', dx: 0, dy: this.speed }
        ];

        // Ordena por menor distância até o jogador
        directions.sort((a, b) => {
            let distA = Math.hypot(playerX - (this.x + a.dx), playerY - (this.y + a.dy));
            let distB = Math.hypot(playerX - (this.x + b.dx), playerY - (this.y + b.dy));
            return distA - distB;
        });

        // Tenta se mover na melhor direção possível
        let moved = false;
        for (let { dir, dx, dy } of directions) {
            let newX = this.x + dx;
            let newY = this.y + dy;

            if (!this.scenario.checkCollision(newX, newY, this.z, this.z)) {
                this.x = newX;
                this.y = newY;
                this.currentAnimation = this.sprites[dir];
                this.lastDirection = { dx, dy }; // Armazena a última direção
                moved = true;
                break;
            }
        }

        // Se não conseguiu se mover, tenta uma movimentação aleatória
        if (!moved) {
            this.randomMove();
        }

        this.updateAnimationFrame();
    }

    randomMove() {
        const randomDirections = [
            { dx: -this.speed, dy: 0, sprite: this.sprites.left },
            { dx: this.speed, dy: 0, sprite: this.sprites.right },
            { dx: 0, dy: -this.speed, sprite: this.sprites.up },
            { dx: 0, dy: this.speed, sprite: this.sprites.down }
        ];

        // Escolhe uma direção aleatória
        const random = randomDirections[Math.floor(Math.random() * randomDirections.length)];
        const newX = this.x + random.dx;
        const newY = this.y + random.dy;

        // Verifica colisão antes de se mover
        if (!this.scenario.checkCollision(newX, newY, this.z, this.z)) {
            this.x = newX;
            this.y = newY;
            this.currentAnimation = random.sprite;
        }
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
    }
}