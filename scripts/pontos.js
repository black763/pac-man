import Efeitos from './efeitos.js';
let pontoImg = new Image("assets/pontos/pontoS.png", VRAM);
let fruts = new Image("assets/pontos/frut.png", RAM)

export default class Pontos {
    constructor() {
        this.pontos = [
            // pontos normais
            { x: 380, y: 387, width: 4, height: 4 },
            { x: 203, y: 387, width: 4, height: 4 },
            { x: 170, y: 387, width: 4, height: 4 },
            { x: 187, y: 387, width: 4, height: 4 },
            { x: 203, y: 374, width: 4, height: 4 },
            { x: 203, y: 361, width: 4, height: 4 },
            { x: 203, y: 348, width: 4, height: 4 },
            { x: 219, y: 348, width: 4, height: 4 },
            { x: 235, y: 348, width: 4, height: 4 },
            { x: 251, y: 348, width: 4, height: 4 },
            { x: 251, y: 361, width: 4, height: 4 },
            { x: 251, y: 374, width: 4, height: 4 },
            { x: 251, y: 387, width: 4, height: 4 },
            { x: 267, y: 387, width: 4, height: 4 },
            { x: 283, y: 387, width: 4, height: 4 },
            { x: 299, y: 387, width: 4, height: 4 },
            { x: 299, y: 413, width: 4, height: 4 },
            { x: 299, y: 400, width: 4, height: 4 },
            { x: 267, y: 348, width: 4, height: 4 },
            { x: 283, y: 348, width: 4, height: 4 },
            { x: 299, y: 348, width: 4, height: 4 },
            { x: 476, y: 387, width: 4, height: 4 },
            { x: 460, y: 387, width: 4, height: 4 },
            { x: 444, y: 387, width: 4, height: 4 },
            { x: 444, y: 374, width: 4, height: 4 },
            { x: 444, y: 361, width: 4, height: 4 },
            { x: 428, y: 348, width: 4, height: 4 },
            { x: 412, y: 348, width: 4, height: 4 },
            { x: 396, y: 387, width: 4, height: 4 },
            { x: 396, y: 361, width: 4, height: 4 },
            { x: 396, y: 374, width: 4, height: 4 },
            { x: 348, y: 413, width: 4, height: 4 },
            { x: 122, y: 335, width: 4, height: 4 },
            { x: 122, y: 322, width: 4, height: 4 },
            { x: 122, y: 309, width: 4, height: 4 },
            { x: 138, y: 309, width: 4, height: 4 },
            { x: 154, y: 309, width: 4, height: 4 },
            { x: 170, y: 309, width: 4, height: 4 },
            { x: 187, y: 309, width: 4, height: 4 },
            { x: 219, y: 309, width: 4, height: 4 },
            { x: 299, y: 309, width: 4, height: 4 },
            { x: 525, y: 335, width: 4, height: 4 },
            { x: 525, y: 322, width: 4, height: 4 },
            { x: 525, y: 309, width: 4, height: 4 },
            { x: 509, y: 309, width: 4, height: 4 },
            { x: 493, y: 309, width: 4, height: 4 },
            { x: 476, y: 309, width: 4, height: 4 },
            { x: 460, y: 309, width: 4, height: 4 },
            { x: 444, y: 309, width: 4, height: 4 },
            { x: 444, y: 335, width: 4, height: 4 },
            { x: 412, y: 309, width: 4, height: 4 },
            { x: 396, y: 309, width: 4, height: 4 },
            { x: 380, y: 309, width: 4, height: 4 },
            { x: 364, y: 309, width: 4, height: 4 },
            { x: 348, y: 309, width: 4, height: 4 },
            { x: 348, y: 322, width: 4, height: 4 },
            { x: 348, y: 335, width: 4, height: 4 },
            { x: 444, y: 322, width: 4, height: 4 },
            { x: 428, y: 309, width: 4, height: 4 },
            { x: 299, y: 322, width: 4, height: 4 },
            { x: 299, y: 335, width: 4, height: 4 },
            { x: 235, y: 309, width: 4, height: 4 },
            { x: 251, y: 309, width: 4, height: 4 },
            { x: 267, y: 309, width: 4, height: 4 },
            { x: 283, y: 309, width: 4, height: 4 },
            { x: 203, y: 309, width: 4, height: 4 },
            { x: 203, y: 322, width: 4, height: 4 },
            { x: 203, y: 335, width: 4, height: 4 },
            { x: 348, y: 400, width: 4, height: 4 },
            { x: 348, y: 387, width: 4, height: 4 },
            { x: 364, y: 387, width: 4, height: 4 },
            { x: 396, y: 348, width: 4, height: 4 },
            { x: 380, y: 348, width: 4, height: 4 },
            { x: 364, y: 348, width: 4, height: 4 },
            { x: 348, y: 348, width: 4, height: 4 },
            { x: 154, y: 387, width: 4, height: 4 },
            { x: 154, y: 374, width: 4, height: 4 },
            { x: 138, y: 348, width: 4, height: 4 },
            { x: 154, y: 348, width: 4, height: 4 },
            { x: 154, y: 361, width: 4, height: 4 },
            { x: 348, y: 426, width: 4, height: 4 },
            { x: 364, y: 426, width: 4, height: 4 },
            { x: 380, y: 426, width: 4, height: 4 },
            { x: 332, y: 426, width: 4, height: 4 },
            { x: 396, y: 426, width: 4, height: 4 },
            { x: 412, y: 426, width: 4, height: 4 },
            { x: 444, y: 426, width: 4, height: 4 },
            { x: 460, y: 426, width: 4, height: 4 },
            { x: 428, y: 426, width: 4, height: 4 },
            { x: 476, y: 426, width: 4, height: 4 },
            { x: 493, y: 426, width: 4, height: 4 },
            { x: 509, y: 426, width: 4, height: 4 },
            { x: 525, y: 426, width: 4, height: 4 },
            { x: 299, y: 426, width: 4, height: 4 },
            { x: 283, y: 426, width: 4, height: 4 },
            { x: 267, y: 426, width: 4, height: 4 },
            { x: 251, y: 426, width: 4, height: 4 },
            { x: 235, y: 426, width: 4, height: 4 },
            { x: 219, y: 426, width: 4, height: 4 },
            { x: 203, y: 426, width: 4, height: 4 },
            { x: 187, y: 426, width: 4, height: 4 },
            { x: 170, y: 426, width: 4, height: 4 },
            { x: 154, y: 426, width: 4, height: 4 },
            { x: 138, y: 426, width: 4, height: 4 },
            { x: 122, y: 426, width: 4, height: 4 },
            { x: 315, y: 426, width: 4, height: 4 },
            { x: 122, y: 400, width: 4, height: 4 },
            { x: 122, y: 413, width: 4, height: 4 },
            { x: 122, y: 387, width: 4, height: 4 },
            { x: 138, y: 387, width: 4, height: 4 },
            { x: 493, y: 374, width: 4, height: 4 },
            { x: 493, y: 361, width: 4, height: 4 },
            { x: 493, y: 348, width: 4, height: 4 },
            { x: 493, y: 387, width: 4, height: 4 },
            { x: 509, y: 387, width: 4, height: 4 },
            { x: 525, y: 387, width: 4, height: 4 },
            { x: 525, y: 400, width: 4, height: 4 },
            { x: 525, y: 413, width: 4, height: 4 },
            { x: 509, y: 348, width: 4, height: 4 },
            { x: 444, y: 348, width: 4, height: 4 },
            { x: 203, y: 296, width: 4, height: 4 },
            { x: 203, y: 283, width: 4, height: 4 },
            { x: 203, y: 270, width: 4, height: 4 },
            { x: 203, y: 257, width: 4, height: 4 },
            { x: 203, y: 219, width: 4, height: 4 },
            { x: 203, y: 232, width: 4, height: 4 },
            { x: 203, y: 206, width: 4, height: 4 },
            { x: 203, y: 244, width: 4, height: 4 },
            { x: 203, y: 180, width: 4, height: 4 },
            { x: 203, y: 193, width: 4, height: 4 },
            { x: 203, y: 167, width: 4, height: 4 },
            { x: 203, y: 154, width: 4, height: 4 },
            { x: 444, y: 296, width: 4, height: 4 },
            { x: 444, y: 283, width: 4, height: 4 },
            { x: 444, y: 270, width: 4, height: 4 },
            { x: 444, y: 257, width: 4, height: 4 },
            { x: 444, y: 219, width: 4, height: 4 },
            { x: 444, y: 232, width: 4, height: 4 },
            { x: 444, y: 206, width: 4, height: 4 },
            { x: 444, y: 244, width: 4, height: 4 },
            { x: 444, y: 180, width: 4, height: 4 },
            { x: 444, y: 193, width: 4, height: 4 },
            { x: 444, y: 167, width: 4, height: 4 },
            { x: 444, y: 154, width: 4, height: 4 },
            { x: 444, y: 141, width: 4, height: 4 },
            { x: 460, y: 154, width: 4, height: 4 },
            { x: 493, y: 154, width: 4, height: 4 },
            { x: 477, y: 154, width: 4, height: 4 },
            { x: 509, y: 154, width: 4, height: 4 },
            { x: 525, y: 154, width: 4, height: 4 },
            { x: 525, y: 141, width: 4, height: 4 },
            { x: 525, y: 128, width: 4, height: 4 },
            { x: 525, y: 115, width: 4, height: 4 },
            { x: 509, y: 115, width: 4, height: 4 },
            { x: 444, y: 128, width: 4, height: 4 },
            { x: 444, y: 102, width: 4, height: 4 },
            { x: 444, y: 89, width: 4, height: 4 },
            { x: 444, y: 76, width: 4, height: 4 },
            { x: 444, y: 63, width: 4, height: 4 },
            { x: 428, y: 63, width: 4, height: 4 },
            { x: 412, y: 63, width: 4, height: 4 },
            { x: 396, y: 63, width: 4, height: 4 },
            { x: 380, y: 63, width: 4, height: 4 },
            { x: 364, y: 63, width: 4, height: 4 },
            { x: 347, y: 63, width: 4, height: 4 },
            { x: 347, y: 154, width: 4, height: 4 },
            { x: 380, y: 154, width: 4, height: 4 },
            { x: 396, y: 128, width: 4, height: 4 },
            { x: 396, y: 141, width: 4, height: 4 },
            { x: 525, y: 102, width: 4, height: 4 },
            { x: 396, y: 154, width: 4, height: 4 },
            { x: 364, y: 154, width: 4, height: 4 },
            { x: 347, y: 76, width: 4, height: 4 },
            { x: 347, y: 89, width: 4, height: 4 },
            { x: 347, y: 102, width: 4, height: 4 },
            { x: 347, y: 115, width: 4, height: 4 },
            { x: 364, y: 115, width: 4, height: 4 },
            { x: 380, y: 115, width: 4, height: 4 },
            { x: 396, y: 115, width: 4, height: 4 },
            { x: 380, y: 115, width: 4, height: 4 },
            { x: 396, y: 115, width: 4, height: 4 },
            { x: 412, y: 115, width: 4, height: 4 },
            { x: 428, y: 115, width: 4, height: 4 },
            { x: 460, y: 63, width: 4, height: 4 },
            { x: 477, y: 63, width: 4, height: 4 },
            { x: 493, y: 63, width: 4, height: 4 },
            { x: 509, y: 63, width: 4, height: 4 },
            { x: 525, y: 63, width: 4, height: 4 },
            { x: 525, y: 76, width: 4, height: 4 },
            { x: 493, y: 115, width: 4, height: 4 },
            { x: 477, y: 115, width: 4, height: 4 },
            { x: 460, y: 115, width: 4, height: 4 },
            { x: 444, y: 115, width: 4, height: 4 },
            { x: 332, y: 115, width: 4, height: 4 },
            { x: 315, y: 115, width: 4, height: 4 },
            { x: 122, y: 154, width: 4, height: 4 },
            { x: 154, y: 154, width: 4, height: 4 },
            { x: 203, y: 141, width: 4, height: 4 },
            { x: 122, y: 141, width: 4, height: 4 },
            { x: 138, y: 115, width: 4, height: 4 },
            { x: 154, y: 115, width: 4, height: 4 },
            { x: 171, y: 115, width: 4, height: 4 },
            { x: 187, y: 115, width: 4, height: 4 },
            { x: 203, y: 115, width: 4, height: 4 },
            { x: 122, y: 76, width: 4, height: 4 },
            { x: 203, y: 102, width: 4, height: 4 },
            { x: 219, y: 63, width: 4, height: 4 },
            { x: 235, y: 63, width: 4, height: 4 },
            { x: 251, y: 63, width: 4, height: 4 },
            { x: 267, y: 63, width: 4, height: 4 },
            { x: 283, y: 63, width: 4, height: 4 },
            { x: 299, y: 63, width: 4, height: 4 },
            { x: 219, y: 115, width: 4, height: 4 },
            { x: 235, y: 115, width: 4, height: 4 },
            { x: 251, y: 115, width: 4, height: 4 },
            { x: 299, y: 76, width: 4, height: 4 },
            { x: 299, y: 89, width: 4, height: 4 },
            { x: 299, y: 102, width: 4, height: 4 },
            { x: 267, y: 115, width: 4, height: 4 },
            { x: 283, y: 115, width: 4, height: 4 },
            { x: 299, y: 115, width: 4, height: 4 },
            { x: 251, y: 128, width: 4, height: 4 },
            { x: 251, y: 141, width: 4, height: 4 },
            { x: 251, y: 154, width: 4, height: 4 },
            { x: 267, y: 154, width: 4, height: 4 },
            { x: 283, y: 154, width: 4, height: 4 },
            { x: 299, y: 154, width: 4, height: 4 },
            { x: 203, y: 89, width: 4, height: 4 },
            { x: 203, y: 76, width: 4, height: 4 },
            { x: 203, y: 63, width: 4, height: 4 },
            { x: 122, y: 64, width: 4, height: 4 },
            { x: 138, y: 63, width: 4, height: 4 },
            { x: 154, y: 63, width: 4, height: 4 },
            { x: 170, y: 63, width: 4, height: 4 },
            { x: 187, y: 63, width: 4, height: 4 },
            { x: 203, y: 128, width: 4, height: 4 },
            { x: 122, y: 128, width: 4, height: 4 },
            { x: 122, y: 115, width: 4, height: 4 },
            { x: 122, y: 102, width: 4, height: 4 },
            { x: 187, y: 154, width: 4, height: 4 },
            { x: 170, y: 154, width: 4, height: 4 },
            { x: 138, y: 154, width: 4, height: 4 },
        ];

        this.pontosSuper = [
            // pontos super
            { x: 116, y: 84, width: 14, height: 13 },
            { x: 116, y: 343, width: 14, height: 13 },
            { x: 521, y: 343, width: 14, height: 13 },
            { x: 521, y: 84, width: 14, height: 13 }
        ];

        this.fruts = [{ x: 319, y: 267, width: 14, height: 14 }];
            

        this.efeitos = new Efeitos();
    }

    draw() {
        for (let ponto of this.pontos) {
            Draw.rect(ponto.x, ponto.y, ponto.width, ponto.height, Color.new(255, 255, 255));
        }

        for (let pontoS of this.pontosSuper) {
            if (pontoImg && pontoImg.ready()) {
                pontoImg.draw(pontoS.x, pontoS.y, pontoS.width, pontoS.height);
            }
        }

        for (let frut of this.fruts) {
            if (fruts && fruts.ready()) {
                fruts.draw(frut.x, frut.y, frut.width, frut.height);
            }
        }
    }

    checkCollision(playerX, playerY, playerWidth, playerHeight) {
        for (let i = 0; i < this.pontos.length; i++) {
            const ponto = this.pontos[i];
    
            const pontoLeft = ponto.x;
            const pontoRight = ponto.x + ponto.width;
            const pontoTop = ponto.y;
            const pontoBottom = ponto.y + ponto.height;
    
            const isColliding = 
                playerX < pontoRight &&
                playerX + playerWidth > pontoLeft &&
                playerY < pontoBottom &&
                playerY + playerHeight > pontoTop;
    
            if (isColliding && !ponto.comido) {
                ponto.comido = true;
                this.pontos.splice(i, 1);
                return true;
            }
        }
        return false;
    }    

    checkCollision(PlayerX, PlayerY, PlayerWidth, PlayerHeight) {
        for (let i = this.pontos.length - 1; i >= 0; i--) {
            let ponto = this.pontos[i];
            if (
                PlayerX < ponto.x + ponto.width &&
                PlayerX + PlayerWidth > ponto.x &&
                PlayerY < ponto.y + ponto.height &&
                PlayerY + PlayerHeight > ponto.y
            ) {
                this.pontos.splice(i, 1);
                this.efeitos.playEfeito();
                return 'normal';
            }
        }

        for (let i = this.pontosSuper.length - 1; i >= 0; i--) {
            let pontoS = this.pontosSuper[i];
            if (
                PlayerX < pontoS.x + pontoS.width &&
                PlayerX + PlayerWidth > pontoS.x &&
                PlayerY < pontoS.y + pontoS.height &&
                PlayerY + PlayerHeight > pontoS.y
            ) {
                this.pontosSuper.splice(i, 1);
                this.efeitos.playEfeito();
                return 'super';
            }
        }

        for (let i = this.fruts.length - 1; i >= 0; i--) {
            let frut = this.fruts[i];
            if (
                PlayerX < frut.x + frut.width &&
                PlayerX + PlayerWidth > frut.x &&
                PlayerY < frut.y + frut.height &&
                PlayerY + PlayerHeight > frut.y
            ) {
                this.fruts.splice(i, 1)
                return 'frut'; 
            }
        }

        return false;
    }

    allPontosComidos() {
        return this.pontos.length === 0 && this.pontosSuper.length === 0;
    }

    resetPontos() {
        this.pontos = [
            { x: 380, y: 387, width: 4, height: 4 },
            { x: 203, y: 387, width: 4, height: 4 },
            { x: 170, y: 387, width: 4, height: 4 },
            { x: 187, y: 387, width: 4, height: 4 },
            { x: 203, y: 374, width: 4, height: 4 },
            { x: 203, y: 361, width: 4, height: 4 },
            { x: 203, y: 348, width: 4, height: 4 },
            { x: 219, y: 348, width: 4, height: 4 },
            { x: 235, y: 348, width: 4, height: 4 },
            { x: 251, y: 348, width: 4, height: 4 },
            { x: 251, y: 361, width: 4, height: 4 },
            { x: 251, y: 374, width: 4, height: 4 },
            { x: 251, y: 387, width: 4, height: 4 },
            { x: 267, y: 387, width: 4, height: 4 },
            { x: 283, y: 387, width: 4, height: 4 },
            { x: 299, y: 387, width: 4, height: 4 },
            { x: 299, y: 413, width: 4, height: 4 },
            { x: 299, y: 400, width: 4, height: 4 },
            { x: 267, y: 348, width: 4, height: 4 },
            { x: 283, y: 348, width: 4, height: 4 },
            { x: 299, y: 348, width: 4, height: 4 },
            { x: 476, y: 387, width: 4, height: 4 },
            { x: 460, y: 387, width: 4, height: 4 },
            { x: 444, y: 387, width: 4, height: 4 },
            { x: 444, y: 374, width: 4, height: 4 },
            { x: 444, y: 361, width: 4, height: 4 },
            { x: 428, y: 348, width: 4, height: 4 },
            { x: 412, y: 348, width: 4, height: 4 },
            { x: 396, y: 387, width: 4, height: 4 },
            { x: 396, y: 361, width: 4, height: 4 },
            { x: 396, y: 374, width: 4, height: 4 },
            { x: 348, y: 413, width: 4, height: 4 },
            { x: 122, y: 335, width: 4, height: 4 },
            { x: 122, y: 322, width: 4, height: 4 },
            { x: 122, y: 309, width: 4, height: 4 },
            { x: 138, y: 309, width: 4, height: 4 },
            { x: 154, y: 309, width: 4, height: 4 },
            { x: 170, y: 309, width: 4, height: 4 },
            { x: 187, y: 309, width: 4, height: 4 },
            { x: 219, y: 309, width: 4, height: 4 },
            { x: 299, y: 309, width: 4, height: 4 },
            { x: 525, y: 335, width: 4, height: 4 },
            { x: 525, y: 322, width: 4, height: 4 },
            { x: 525, y: 309, width: 4, height: 4 },
            { x: 509, y: 309, width: 4, height: 4 },
            { x: 493, y: 309, width: 4, height: 4 },
            { x: 476, y: 309, width: 4, height: 4 },
            { x: 460, y: 309, width: 4, height: 4 },
            { x: 444, y: 309, width: 4, height: 4 },
            { x: 444, y: 335, width: 4, height: 4 },
            { x: 412, y: 309, width: 4, height: 4 },
            { x: 396, y: 309, width: 4, height: 4 },
            { x: 380, y: 309, width: 4, height: 4 },
            { x: 364, y: 309, width: 4, height: 4 },
            { x: 348, y: 309, width: 4, height: 4 },
            { x: 348, y: 322, width: 4, height: 4 },
            { x: 348, y: 335, width: 4, height: 4 },
            { x: 444, y: 322, width: 4, height: 4 },
            { x: 428, y: 309, width: 4, height: 4 },
            { x: 299, y: 322, width: 4, height: 4 },
            { x: 299, y: 335, width: 4, height: 4 },
            { x: 235, y: 309, width: 4, height: 4 },
            { x: 251, y: 309, width: 4, height: 4 },
            { x: 267, y: 309, width: 4, height: 4 },
            { x: 283, y: 309, width: 4, height: 4 },
            { x: 203, y: 309, width: 4, height: 4 },
            { x: 203, y: 322, width: 4, height: 4 },
            { x: 203, y: 335, width: 4, height: 4 },
            { x: 348, y: 400, width: 4, height: 4 },
            { x: 348, y: 387, width: 4, height: 4 },
            { x: 364, y: 387, width: 4, height: 4 },
            { x: 396, y: 348, width: 4, height: 4 },
            { x: 380, y: 348, width: 4, height: 4 },
            { x: 364, y: 348, width: 4, height: 4 },
            { x: 348, y: 348, width: 4, height: 4 },
            { x: 154, y: 387, width: 4, height: 4 },
            { x: 154, y: 374, width: 4, height: 4 },
            { x: 138, y: 348, width: 4, height: 4 },
            { x: 154, y: 348, width: 4, height: 4 },
            { x: 154, y: 361, width: 4, height: 4 },
            { x: 348, y: 426, width: 4, height: 4 },
            { x: 364, y: 426, width: 4, height: 4 },
            { x: 380, y: 426, width: 4, height: 4 },
            { x: 332, y: 426, width: 4, height: 4 },
            { x: 396, y: 426, width: 4, height: 4 },
            { x: 412, y: 426, width: 4, height: 4 },
            { x: 444, y: 426, width: 4, height: 4 },
            { x: 460, y: 426, width: 4, height: 4 },
            { x: 428, y: 426, width: 4, height: 4 },
            { x: 476, y: 426, width: 4, height: 4 },
            { x: 493, y: 426, width: 4, height: 4 },
            { x: 509, y: 426, width: 4, height: 4 },
            { x: 525, y: 426, width: 4, height: 4 },
            { x: 299, y: 426, width: 4, height: 4 },
            { x: 283, y: 426, width: 4, height: 4 },
            { x: 267, y: 426, width: 4, height: 4 },
            { x: 251, y: 426, width: 4, height: 4 },
            { x: 235, y: 426, width: 4, height: 4 },
            { x: 219, y: 426, width: 4, height: 4 },
            { x: 203, y: 426, width: 4, height: 4 },
            { x: 187, y: 426, width: 4, height: 4 },
            { x: 170, y: 426, width: 4, height: 4 },
            { x: 154, y: 426, width: 4, height: 4 },
            { x: 138, y: 426, width: 4, height: 4 },
            { x: 122, y: 426, width: 4, height: 4 },
            { x: 315, y: 426, width: 4, height: 4 },
            { x: 122, y: 400, width: 4, height: 4 },
            { x: 122, y: 413, width: 4, height: 4 },
            { x: 122, y: 387, width: 4, height: 4 },
            { x: 138, y: 387, width: 4, height: 4 },
            { x: 493, y: 374, width: 4, height: 4 },
            { x: 493, y: 361, width: 4, height: 4 },
            { x: 493, y: 348, width: 4, height: 4 },
            { x: 493, y: 387, width: 4, height: 4 },
            { x: 509, y: 387, width: 4, height: 4 },
            { x: 525, y: 387, width: 4, height: 4 },
            { x: 525, y: 400, width: 4, height: 4 },
            { x: 525, y: 413, width: 4, height: 4 },
            { x: 509, y: 348, width: 4, height: 4 },
            { x: 444, y: 348, width: 4, height: 4 },
            { x: 203, y: 296, width: 4, height: 4 },
            { x: 203, y: 283, width: 4, height: 4 },
            { x: 203, y: 270, width: 4, height: 4 },
            { x: 203, y: 257, width: 4, height: 4 },
            { x: 203, y: 219, width: 4, height: 4 },
            { x: 203, y: 232, width: 4, height: 4 },
            { x: 203, y: 206, width: 4, height: 4 },
            { x: 203, y: 244, width: 4, height: 4 },
            { x: 203, y: 180, width: 4, height: 4 },
            { x: 203, y: 193, width: 4, height: 4 },
            { x: 203, y: 167, width: 4, height: 4 },
            { x: 203, y: 154, width: 4, height: 4 },
            { x: 444, y: 296, width: 4, height: 4 },
            { x: 444, y: 283, width: 4, height: 4 },
            { x: 444, y: 270, width: 4, height: 4 },
            { x: 444, y: 257, width: 4, height: 4 },
            { x: 444, y: 219, width: 4, height: 4 },
            { x: 444, y: 232, width: 4, height: 4 },
            { x: 444, y: 206, width: 4, height: 4 },
            { x: 444, y: 244, width: 4, height: 4 },
            { x: 444, y: 180, width: 4, height: 4 },
            { x: 444, y: 193, width: 4, height: 4 },
            { x: 444, y: 167, width: 4, height: 4 },
            { x: 444, y: 154, width: 4, height: 4 },
            { x: 444, y: 141, width: 4, height: 4 },
            { x: 460, y: 154, width: 4, height: 4 },
            { x: 493, y: 154, width: 4, height: 4 },
            { x: 477, y: 154, width: 4, height: 4 },
            { x: 509, y: 154, width: 4, height: 4 },
            { x: 525, y: 154, width: 4, height: 4 },
            { x: 525, y: 141, width: 4, height: 4 },
            { x: 525, y: 128, width: 4, height: 4 },
            { x: 525, y: 115, width: 4, height: 4 },
            { x: 509, y: 115, width: 4, height: 4 },
            { x: 444, y: 128, width: 4, height: 4 },
            { x: 444, y: 102, width: 4, height: 4 },
            { x: 444, y: 89, width: 4, height: 4 },
            { x: 444, y: 76, width: 4, height: 4 },
            { x: 444, y: 63, width: 4, height: 4 },
            { x: 428, y: 63, width: 4, height: 4 },
            { x: 412, y: 63, width: 4, height: 4 },
            { x: 396, y: 63, width: 4, height: 4 },
            { x: 380, y: 63, width: 4, height: 4 },
            { x: 364, y: 63, width: 4, height: 4 },
            { x: 347, y: 63, width: 4, height: 4 },
            { x: 347, y: 154, width: 4, height: 4 },
            { x: 380, y: 154, width: 4, height: 4 },
            { x: 396, y: 128, width: 4, height: 4 },
            { x: 396, y: 141, width: 4, height: 4 },
            { x: 525, y: 102, width: 4, height: 4 },
            { x: 396, y: 154, width: 4, height: 4 },
            { x: 364, y: 154, width: 4, height: 4 },
            { x: 347, y: 76, width: 4, height: 4 },
            { x: 347, y: 89, width: 4, height: 4 },
            { x: 347, y: 102, width: 4, height: 4 },
            { x: 347, y: 115, width: 4, height: 4 },
            { x: 364, y: 115, width: 4, height: 4 },
            { x: 380, y: 115, width: 4, height: 4 },
            { x: 396, y: 115, width: 4, height: 4 },
            { x: 380, y: 115, width: 4, height: 4 },
            { x: 396, y: 115, width: 4, height: 4 },
            { x: 412, y: 115, width: 4, height: 4 },
            { x: 428, y: 115, width: 4, height: 4 },
            { x: 460, y: 63, width: 4, height: 4 },
            { x: 477, y: 63, width: 4, height: 4 },
            { x: 493, y: 63, width: 4, height: 4 },
            { x: 509, y: 63, width: 4, height: 4 },
            { x: 525, y: 63, width: 4, height: 4 },
            { x: 525, y: 76, width: 4, height: 4 },
            { x: 493, y: 115, width: 4, height: 4 },
            { x: 477, y: 115, width: 4, height: 4 },
            { x: 460, y: 115, width: 4, height: 4 },
            { x: 444, y: 115, width: 4, height: 4 },
            { x: 332, y: 115, width: 4, height: 4 },
            { x: 315, y: 115, width: 4, height: 4 },
            { x: 122, y: 154, width: 4, height: 4 },
            { x: 154, y: 154, width: 4, height: 4 },
            { x: 203, y: 141, width: 4, height: 4 },
            { x: 122, y: 141, width: 4, height: 4 },
            { x: 138, y: 115, width: 4, height: 4 },
            { x: 154, y: 115, width: 4, height: 4 },
            { x: 171, y: 115, width: 4, height: 4 },
            { x: 187, y: 115, width: 4, height: 4 },
            { x: 203, y: 115, width: 4, height: 4 },
            { x: 122, y: 76, width: 4, height: 4 },
            { x: 203, y: 102, width: 4, height: 4 },
            { x: 219, y: 63, width: 4, height: 4 },
            { x: 235, y: 63, width: 4, height: 4 },
            { x: 251, y: 63, width: 4, height: 4 },
            { x: 267, y: 63, width: 4, height: 4 },
            { x: 283, y: 63, width: 4, height: 4 },
            { x: 299, y: 63, width: 4, height: 4 },
            { x: 219, y: 115, width: 4, height: 4 },
            { x: 235, y: 115, width: 4, height: 4 },
            { x: 251, y: 115, width: 4, height: 4 },
            { x: 299, y: 76, width: 4, height: 4 },
            { x: 299, y: 89, width: 4, height: 4 },
            { x: 299, y: 102, width: 4, height: 4 },
            { x: 267, y: 115, width: 4, height: 4 },
            { x: 283, y: 115, width: 4, height: 4 },
            { x: 299, y: 115, width: 4, height: 4 },
            { x: 251, y: 128, width: 4, height: 4 },
            { x: 251, y: 141, width: 4, height: 4 },
            { x: 251, y: 154, width: 4, height: 4 },
            { x: 267, y: 154, width: 4, height: 4 },
            { x: 283, y: 154, width: 4, height: 4 },
            { x: 299, y: 154, width: 4, height: 4 },
            { x: 203, y: 89, width: 4, height: 4 },
            { x: 203, y: 76, width: 4, height: 4 },
            { x: 203, y: 63, width: 4, height: 4 },
            { x: 122, y: 64, width: 4, height: 4 },
            { x: 138, y: 63, width: 4, height: 4 },
            { x: 154, y: 63, width: 4, height: 4 },
            { x: 170, y: 63, width: 4, height: 4 },
            { x: 187, y: 63, width: 4, height: 4 },
            { x: 203, y: 128, width: 4, height: 4 },
            { x: 122, y: 128, width: 4, height: 4 },
            { x: 122, y: 115, width: 4, height: 4 },
            { x: 122, y: 102, width: 4, height: 4 },
            { x: 187, y: 154, width: 4, height: 4 },
            { x: 170, y: 154, width: 4, height: 4 },
            { x: 138, y: 154, width: 4, height: 4 },
        ];
        
        this.pontosSuper = [
            { x: 116, y: 84, width: 14, height: 13 },
            { x: 116, y: 343, width: 14, height: 13 },
            { x: 521, y: 343, width: 14, height: 13 },
            { x: 521, y: 84, width: 14, height: 13 }
        ];

        this.fruts = [{ x: 319, y: 267, width: 14, height: 14 }];
    }
}