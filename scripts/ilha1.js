export default class Ilha1 {
    constructor() {
        this.background = new Image("assets/fudo/background.png", VRAM);

        // Áreas de transição para trocar de cenário
        this.transitionAreas = [
            { x: 0, y: 0, width: 0, height: 0, nextScenario: 'Ilha2' }, // Transição para Ilha2
        ];

        // Definindo as áreas de colisão para Ilha 1
        this.collisionAreas = [
            { x: 255, y: 95, width: 131, height: 14 },
            { x: 311, y: 109, width: 19, height: 45 },
            { x: 58, y: 1, width: 11, height: 447 },
            { x: 69, y: 0, width: 515, height: 6 },
            { x: 572, y: 5, width: 8, height: 443 },
            { x: 59, y: 444, width: 525, height: 4 },
            { x: 107, y: 36, width: 54, height: 29 },
            { x: 199, y: 36, width: 75, height: 30 },
            { x: 367, y: 36, width: 75, height: 29 },
            { x: 478, y: 36, width: 56, height: 29 },
            { x: 311, y: 6, width: 19, height: 59 },
            { x: 199, y: 95, width: 19, height: 103 },
            { x: 218, y: 138, width: 56, height: 16 },
            { x: 423, y: 95, width: 19, height: 103 },
            { x: 367, y: 138, width: 16, height: 4 },
            { x: 478, y: 95, width: 56, height: 14 },
            { x: 107, y: 95, width: 54, height: 14 },
            { x: 59, y: 138, width: 103, height: 8 },
            { x: 59, y: 189, width: 103, height: 9 },
            { x: 59, y: 226, width: 103, height: 8 },
            { x: 152, y: 146, width: 10, height: 43 },
            { x: 59, y: 278, width: 103, height: 7 },
            { x: 152, y: 234, width: 10, height: 51 },
            { x: 59, y: 357, width: 48, height: 16 },
            { x: 105, y: 314, width: 57, height: 15 },
            { x: 143, y: 318, width: 19, height: 55 },
            { x: 199, y: 226, width: 19, height: 59 },
            { x: 255, y: 270, width: 131, height: 15 },
            { x: 311, y: 285, width: 19, height: 44 },
            { x: 422, y: 226, width: 20, height: 59 },
            { x: 478, y: 138, width: 105, height: 8 },
            { x: 478, y: 146, width: 10, height: 52 },
            { x: 478, y: 189, width: 105, height: 9 },
            { x: 478, y: 226, width: 105, height: 8 },
            { x: 478, y: 278, width: 103, height: 7 },
            { x: 478, y: 234, width: 10, height: 44 },
            { x: 199, y: 314, width: 75, height: 15 },
            { x: 366, y: 314, width: 76, height: 15 },
            { x: 478, y: 314, width: 19, height: 59 },
            { x: 478, y: 314, width: 57, height: 15 },
            { x: 533, y: 357, width: 50, height: 16 },
            { x: 105, y: 401, width: 169, height: 16 },
            { x: 199, y: 357, width: 19, height: 47 },
            { x: 366, y: 401, width: 169, height: 16 },
            { x: 422, y: 357, width: 20, height: 47 },
            { x: 255, y: 357, width: 131, height: 15 },
            { x: 255, y: 182, width: 10, height: 59 },
            { x: 376, y: 182, width: 10, height: 59 },
            { x: 265, y: 233, width: 111, height: 8 },
            { x: 339, y: 182, width: 37, height: 8 },
            { x: 265, y: 182, width: 37, height: 8 },
            { x: 366, y: 138, width: 60, height: 16 },
            { x: 311, y: 370, width: 19, height: 47 },
        ];
    }

    draw() {
        this.background.draw(0, 0);
    }

    // Verifica qual transição deve ocorrer
    checkTransition(playerX, playerY) {
        for (let area of this.transitionAreas) {
            if (playerX > area.x &&
                playerX < area.x + area.width &&
                playerY > area.y &&
                playerY < area.y + area.height) {
                return area.nextScenario; // Retorna o próximo cenário
            }
        }
        return null; // Sem transição
    }

    checkCollision(playerX, playerY, playerWidth, playerHeight) {
        for (let area of this.collisionAreas) {
            if (playerX < area.x + area.width &&
                playerX + playerWidth > area.x &&
                playerY < area.y + area.height &&
                playerY + playerHeight > area.y) {
                return true; // Colisão detectada
            }
        }
        return false; // Sem colisão
    }
}