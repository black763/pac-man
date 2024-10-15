export default class NPC {
    constructor(x, y, z, scenario, speed = 2) { // Reduzida a velocidade padrão para 2
        this.x = x || 232;
        this.y = y || 319;
        this.z = z || 20;
        this.scenario = scenario;
        this.speed = speed;

        // Definindo os sprites dos fantasmas
        this.sprites = {
            idle: [
                new Image("assets/npc/ghost_idle_1.png", RAM),
                new Image("assets/npc/ghost_idle_2.png", RAM)
            ],
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

        this.currentAnimation = this.sprites.idle;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 10; // Controla a velocidade da animação

        // Direção inicial do movimento
        this.direction = 'left';
    }

    // Movimenta o NPC baseado em uma lógica simples
    moveNPC(playerX, playerY) {
        // A lógica segue o jogador
        let deltaX = playerX - this.x;
        let deltaY = playerY - this.y;

        // Calcula a distância
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Movimenta o NPC em direção ao jogador se estiver distante
        if (distance > 0) {
            let moveX = (deltaX / distance) * this.speed;
            let moveY = (deltaY / distance) * this.speed;

            let newX = this.x + moveX;
            let newY = this.y + moveY;

            // Verifica colisão antes de mover
            if (!this.scenario.checkCollision(newX, this.y, this.z, this.z)) {
                this.x = newX;
                this.currentAnimation = moveX < 0 ? this.sprites.left : this.sprites.right;
            }

            if (!this.scenario.checkCollision(this.x, newY, this.z, this.z)) {
                this.y = newY;
                this.currentAnimation = moveY < 0 ? this.sprites.up : this.sprites.down;
            }
        }

        // Atualiza o frame da animação
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
    }
}