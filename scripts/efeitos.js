export default class Efeitos {
    constructor() {
        // Carrega o som do efeito
        this.efeitoSom = Sound.load("assets/efeitos/efeitos.adp");
    }

    // Toca o som do efeito quando o ponto é comido
    playEfeito() {
        if (this.efeitoSom) {
            Sound.play(this.efeitoSom);
        }
    }
}