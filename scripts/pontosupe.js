import Efeitos from './efeitos.js'; 

export default class PontoSuper {
    constructor() {
        this.pontoSuper = { x: 200, y: 200, width: 12, height: 12 }; // Coordenadas do ponto super
        this.pontoImg = new Image("assets/pontos/pontosupe.png", VRAM); // Imagem do ponto especial
        this.efeitos = new Efeitos(); // Sistema de efeitos sonoros
        this.ativo = true; // Controla se o ponto ainda está disponível
    }

    // Desenhar o ponto especial na tela, se estiver ativo
    draw() {
        if (this.ativo) {
            this.pontoImg.draw(this.pontoSuper.x, this.pontoSuper.y, this.pontoSuper.width, this.pontoSuper.height);
        }
    }

    // Verifica se o jogador colidiu com o ponto especial
    checkCollision(player) {
        const { x, y, width, height } = this.pontoSuper;
        if (
            player.x < x + width &&
            player.x + player.z > x &&
            player.y < y + height &&
            player.y + player.z > y &&
            this.ativo
        ) {
            this.efeitos.playEfeito(); // Toca efeito sonoro
            this.ativo = false; // Desativa o ponto
            this.aplicarEfeito(player); // Aplica o efeito ao jogador
        }
    }

    // Aplica o efeito especial ao jogador
    aplicarEfeito(player) {
        player.invencivel = true; // Deixa o jogador invencível
        player.teleportar(309, 65); // Teleporta para uma posição inicial

        // Remove a invencibilidade após 5 segundos
        setTimeout(() => {
            player.invencivel = false;
        }, 5000);
    }

    // Reinicia o ponto especial
    resetPonto() {
        this.ativo = true;
    }
}