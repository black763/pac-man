export default class Ilha2 {
    constructor() {
        this.background = new Image("assets/fudo/background2.png", VRAM);
        this.transitionArea = { x: 0, y: 0, width: 0, height: 0 };

        this.collisionAreas = [
            { x: 0, y: 0, width: 0, height: 0 },
        ];
    }

    draw() {
        this.background.draw(0, 0);
    }

    checkTransition(playerX, playerY) {
        if (playerX > this.transitionArea.x &&
            playerX < this.transitionArea.x + this.transitionArea.width &&
            playerY > this.transitionArea.y &&
            playerY < this.transitionArea.y + this.transitionArea.height) {
            return true;
        }
        return false;
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