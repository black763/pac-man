export default class Ilha1 {
    constructor() {
        this.background = new Image("assets/fundo/background.png", VRAM);

        this.collisionAreas = [
            //parte de baixo
            { x: 100, y: 46, width: 451, height: 7 },
            { x: 100, y: 439, width: 451, height: 7 },
            { x: 100, y: 46, width: 9, height: 129 },
            { x: 542, y: 46, width: 9, height: 129 },
            { x: 100, y: 168, width: 89, height: 7 },
            { x: 461, y: 168, width: 90, height: 7 },
            { x: 179, y: 168, width: 10, height: 52 },
            { x: 461, y: 168, width: 10, height: 53 },
            { x: 100, y: 213, width: 89, height: 7 },
            { x: 461, y: 213, width: 90, height: 7 },
            { x: 100, y: 245, width: 89, height: 8 },
            { x: 461, y: 245, width: 90, height: 8 },
            { x: 179, y: 245, width: 10, height: 53 },
            { x: 100, y: 290, width: 89, height: 8 },
            { x: 461, y: 245, width: 10, height: 53 },
            { x: 461, y: 290, width: 90, height: 8 },
            { x: 542, y: 299, width: 9, height: 147 },
            { x: 100, y: 300, width: 8, height: 146 },
            { x: 139, y: 77, width: 50, height: 27 },
            { x: 461, y: 77, width: 50, height: 27 },
            { x: 220, y: 77, width: 65, height: 27 },
            { x: 365, y: 77, width: 65, height: 27 },
            { x: 316, y: 52, width: 18, height: 52 },
            { x: 268, y: 129, width: 114, height: 14 },
            { x: 316, y: 141, width: 18, height: 41 },
            { x: 220, y: 129, width: 17, height: 91 },
            { x: 234, y: 168, width: 51, height: 14 },
            { x: 413, y: 129, width: 17, height: 91 },
            { x: 365, y: 168, width: 51, height: 14 },
            { x: 139, y: 129, width: 50, height: 14 },
            { x: 461, y: 129, width: 50, height: 14 },
            // parte de cima
            { x: 220, y: 245, width: 17, height: 53 },
            { x: 413, y: 245, width: 17, height: 53 },
            { x: 268, y: 284, width: 114, height: 14 },
            { x: 316, y: 295, width: 18, height: 42 },
            { x: 220, y: 323, width: 66, height: 14 },
            { x: 365, y: 323, width: 65, height: 14 },
            { x: 139, y: 323, width: 50, height: 14 },
            { x: 171, y: 334, width: 18, height: 41 },
            { x: 108, y: 361, width: 33, height: 14 },
            { x: 461, y: 323, width: 50, height: 14 },
            { x: 461, y: 335, width: 18, height: 40 },
            { x: 510, y: 361, width: 33, height: 14 },
            { x: 139, y: 400, width: 146, height: 14 },
            { x: 220, y: 361, width: 17, height: 41 },
            { x: 365, y: 400, width: 146, height: 14 },
            { x: 413, y: 361, width: 17, height: 40 },
            { x: 268, y: 361, width: 114, height: 14 },
            { x: 316, y: 373, width: 18, height: 41 },
            { x: 268, y: 207, width: 41, height: 7 },
            { x: 268, y: 214, width: 9, height: 38 },
            { x: 268, y: 252, width: 114, height: 7 },
            { x: 373, y: 214, width: 9, height: 38 },
            { x: 341, y: 207, width: 41, height: 7 },
            //colisães dos telepotes dos players
            { x: 551, y: 213, width: 5, height: 40 },
            { x: 95, y: 213, width: 5, height: 40 }

        ];
    }

    draw() {
        this.background.draw(0, 0);
    }

    checkCollision(playerX, playerY, playerWidth, playerHeight) {
        for (let area of this.collisionAreas) {
            if (playerX < area.x + area.width &&
                playerX + playerWidth > area.x &&
                playerY < area.y + area.height &&
                playerY + playerHeight > area.y) {
                return true;
            }
        }
        return false;
    }
}