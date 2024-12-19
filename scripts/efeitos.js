export default class Efeitos {
    constructor() {
        this.efeitoSom = Sound.load("assets/efeitos/efeitos.adp");
    }

    playEfeito() {
        if (this.efeitoSom) {
            Sound.play(this.efeitoSom);
        }
    }
}