// class fases.js
export default class Fases {
    constructor(player, npcs) {
        this.player = player;
        this.npcs = npcs;
        this.currentLevel = 1;
        this.maxLevels = 10;
        this.speedIncreaseFactor = 0.1; // Aumento da velocidade
        this.levelSpeed = 2; // Velocidade inicial
    }

    updateLevel() {
        if (this.currentLevel < this.maxLevels) {
            this.currentLevel++;
            this.increaseSpeed();
        }
    }

    // Aumenta a velocidade do jogador e dos NPCs
    increaseSpeed() {
        this.levelSpeed += this.speedIncreaseFactor;

        // Atualiza a velocidade do jogador
        this.player.speed += this.speedIncreaseFactor;

        // Atualiza a velocidade dos NPCs
        this.npcs.forEach(npc => {
            npc.speed += this.speedIncreaseFactor;
        });
    }

    getCurrentLevel() {
        return this.currentLevel;
    }

    isGameComplete() {
        return this.currentLevel >= this.maxLevels;
    }
}