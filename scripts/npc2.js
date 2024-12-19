export default class NPC2 {
    constructor(x, y, z, scenario, speed = 2, personality = 'chase') {
        this.startX = x;
        this.startY = y; 
        this.x = x;
        this.y = y;
        this.z = z || 20;
        this.scenario = scenario;
        this.speed = speed;
        this.personality = personality;
        
        this.sprites = {
            idle: [
                new Image("assets/npcs/idle_1.png", RAM),
                new Image("assets/npcs/idle_2.png", RAM)
            ],
            left: [
                new Image("assets/npcs/left_1.png", RAM),
                new Image("assets/npcs/left_2.png", RAM)
            ],
            right: [
                new Image("assets/npcs/right_1.png", RAM),
                new Image("assets/npcs/right_2.png", RAM)
            ],
            up: [
                new Image("assets/npcs/up_1.png", RAM),
                new Image("assets/npcs/up_2.png", RAM)
            ],
            down: [
                new Image("assets/npcs/down_1.png", RAM),
                new Image("assets/npcs/down_2.png", RAM)
            ]
        };

        this.currentAnimation = this.sprites.idle;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 10;
        this.lastDirection = null;
    }

    tryToMove(directions) {
        let moved = false;
    
        for (let { dir, dx, dy } of directions) {
            const newX = this.x + dx;
            const newY = this.y + dy;
    
            if (!this.scenario.checkCollision(newX, newY, this.z, this.z)) {
                this.x = newX;
                this.y = newY;
                this.currentAnimation = this.sprites[dir];
                this.lastDirection = { dx, dy };
                moved = true;
                break;
            }
        }
    
        if (!moved) {
            this.currentAnimation = this.sprites.idle;
        }
    }
    
    moveNPC(playerX, playerY) {
        const prevX = this.x;
        const prevY = this.y;
    
        if (this.personality === 'chase') {
            this.moveTowardsPlayer(playerX, playerY);
        } else if (this.personality === 'ambush') {
            this.ambushPlayer(playerX, playerY);
        } else {
            this.randomMove();
        }
    
        if (this.x === prevX && this.y === prevY) {
            this.currentAnimation = this.sprites.idle;
        }
    
        this.updateAnimationFrame();
    }
    

    moveTowardsPlayer(playerX, playerY) {
        const directions = this.getSortedDirections(playerX, playerY);
        this.tryToMove(directions);
    }

    ambushPlayer(playerX, playerY) {
        const predictedX = playerX + 2 * this.speed * (playerX > this.x ? 1 : -1);
        const predictedY = playerY + 2 * this.speed * (playerY > this.y ? 1 : -1);
        this.moveTowardsPlayer(predictedX, predictedY);
    }

    getSortedDirections(playerX, playerY) {
        const directions = [
            { dir: 'left', dx: -this.speed, dy: 0 },
            { dir: 'right', dx: this.speed, dy: 0 },
            { dir: 'up', dx: 0, dy: -this.speed },
            { dir: 'down', dx: 0, dy: this.speed }
        ];

        return directions.sort((a, b) => 
            Math.hypot(playerX - (this.x + a.dx), playerY - (this.y + a.dy)) -
            Math.hypot(playerX - (this.x + b.dx), playerY - (this.y + b.dy))
        );
    }

    randomMove() {
        const randomDirections = [
            { dx: -this.speed, dy: 0, sprite: this.sprites.left },
            { dx: this.speed, dy: 0, sprite: this.sprites.right },
            { dx: 0, dy: -this.speed, sprite: this.sprites.up },
            { dx: 0, dy: this.speed, sprite: this.sprites.down }
        ];

        const random = randomDirections[Math.floor(Math.random() * randomDirections.length)];
        const newX = this.x + random.dx;
        const newY = this.y + random.dy;

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

    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.currentAnimation = this.sprites.idle;
        this.currentFrame = 0;
    }
}