export default class Player { 
    constructor(x, y, z, scenario, controlScheme = 'leftStick', controller = 0, pontos = null) {
        this.x = x || 232;
        this.y = y || 319;
        this.z = z || 20;
        this.scenario = scenario;
        this.controlScheme = controlScheme;
        this.controller = controller;

        this.pontos = pontos; // Referência aos pontos no cenário
        this.isAlive = true; // Define se o jogador está vivo
        this.lives = 3; // O jogador começa com 3 vidas

        // Carregar os sprites como arrays de frames
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
            life: new Image("assets/personagem/life.png", RAM) // Sprite de vida
        };

        this.currentAnimation = this.sprites.idle;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 4; // Controla a velocidade da animação

        // Controle de morte e reinício
        this.isAlive = true;
        this.isRespawning = false; // Verifica se o jogador está em processo de respawn
        this.continueText = new Image("assets/mensagens/continue.png", RAM); // Imagem "Continuar"
        this.gameOverText = new Image("assets/mensagens/gameover.png", RAM); // Imagem "Game Over"
    }

    movePlayer() {
        if (!this.isAlive || this.isRespawning) return; // Se o jogador está morto ou em respawn, ele não se move

        const Pad = Pads.get(this.controller);
        let newX = this.x;
        let newY = this.y;

        // Definindo a animação baseada na direção do movimento
        this.currentAnimation = this.sprites.idle;

        // Movimento para a esquerda
        if ((Pad.lx < -25 || Pad.left) && !this.scenario.checkCollision(newX - 5, this.y, this.z, this.z)) {
            newX -= 3;
            this.currentAnimation = this.sprites.left;
        }

        // Movimento para a direita
        if ((Pad.lx > 25 || Pad.right) && !this.scenario.checkCollision(newX + 5, this.y, this.z, this.z)) {
            newX += 3;
            this.currentAnimation = this.sprites.right;
        }

        // Movimento para cima
        if ((Pad.ly < -25 || Pad.up) && !this.scenario.checkCollision(this.x, newY - 5, this.z, this.z)) {
            newY -= 3;
            this.currentAnimation = this.sprites.up;
        }

        // Movimento para baixo
        if ((Pad.ly > 25 || Pad.down) && !this.scenario.checkCollision(this.x, newY + 5, this.z, this.z)) {
            newY += 3;
            this.currentAnimation = this.sprites.down;
        }

        // Atualiza a posição do jogador
        this.x = newX;
        this.y = newY;

        // Verifica a colisão com os pontos
        if (this.pontos) {
            this.checkCollisionWithPoints();
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

        // Desenha as vidas restantes
        this.drawLives();

        // Se o jogador estiver em respawn, desenha a tela de "Continuar"
        if (this.isRespawning) {
            this.continueText.draw(268, 249); // Desenha a mensagem "Continuar" no centro da tela
        }

        // Exibe a tela de "Game Over" se o jogador perder todas as vidas
        if (this.isGameOver) {
            this.gameOverText.draw(263, 246);
        }
    }

    drawLives() {
        // Desenha as vidas restantes no canto superior da tela
        for (let i = 0; i < this.lives; i++) {
            this.sprites.life.draw(1 + i * 27, 2); // Ajuste a posição conforme necessário
        }
    }

    checkCollisionWithPoints() {
        // Verifica se o jogador colidiu com algum ponto
        this.pontos.checkCollision(this.x, this.y, this.z, this.z);
    }

    checkCollisionWithGhost(ghost) {
        if (!this.isAlive) return; // Se o jogador já está morto, não verifica mais colisão

        // Verifica a colisão com o fantasma usando bounding box
        const playerLeft = this.x;
        const playerRight = this.x + this.z;
        const playerTop = this.y;
        const playerBottom = this.y + this.z;

        const ghostLeft = ghost.x;
        const ghostRight = ghost.x + ghost.z;
        const ghostTop = ghost.y;
        const ghostBottom = ghost.y + ghost.z;

        // Verifica se as caixas delimitadoras se sobrepõem (colisão)
        const isColliding = 
            playerRight > ghostLeft && 
            playerLeft < ghostRight && 
            playerBottom > ghostTop && 
            playerTop < ghostBottom;

        if (isColliding) {
            this.die(); // Se houve colisão, o jogador morre
        }
    }

    die() {
        this.isAlive = false; // Marca o jogador como morto
        this.currentAnimation = this.sprites.death; // Troca para a animação de morte
        this.currentFrame = 0; // Reinicia a animação de morte
        this.lives--; // Diminui uma vida

        if (this.lives > 0) {
            this.isRespawning = true; // Habilita o modo de respawn se ainda houver vidas
        } else {
            this.isGameOver = true; // Marca como fim de jogo se as vidas acabarem
        }
    }

    checkContinue() {
        if (this.isRespawning) {
            const pad = Pads.get(this.controller); // Verifica o controle do jogador
            if (pad.justPressed(Pads.START)) {
                this.respawn(); // Se o jogador apertar "Start", ele volta ao jogo
            }
        } else if (this.isGameOver) {
            // Exibe a tela de fim de jogo
            this.gameOverText.draw(226, 198); // Desenha "Game Over" no centro da tela
        }
    }

    respawn() {
        if (this.lives > 0) {
            this.isAlive = true; // Revive o jogador
            this.isRespawning = false; // Desativa o modo de respawn
            this.x = 309; // Posição inicial (ajuste conforme necessário)
            this.y = 65; // Posição inicial (ajuste conforme necessário)
            this.currentAnimation = this.sprites.idle; // Volta para a animação de idle
        }
    }
}