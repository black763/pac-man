export default class StartScreen {
    constructor() {
        this.isActive = true; // A tela de início começa ativa
        this.background = new Image("assets/intro/background.png"); // Imagem de fundo
        this.startButton = new Image("assets/intro/start.png"); // Imagem do botão de Start
        this.logo = new Image("assets/intro/logo.png"); //imagem da logo
        this.logoX = 173;
        this.logoY = 29;
        this.logoWidth = 290;
        this.logoHeight = 142;
        this.buttonX = 320; // Posição X do botão
        this.buttonY = 300; // Posição Y do botão
        this.buttonWidth = 178; // Largura do botão (ajuste conforme necessário)
        this.buttonHeight = 26; // Altura do botão (ajuste conforme necessário)

    }

    draw() {
        // Desenha o fundo e o botão de Start na tela
        this.background.draw(0, 0); // Desenha o fundo na tela
        this.startButton.draw(this.buttonX, this.buttonY); // Desenha o botão "Start" no centro
        this.logo.draw(this.logoX, this.logoY); // desenha a logo
    }

    checkStart() {
        const pad = Pads.get(0); // Verifica o controle 0

        // Verifica se o botão "X" foi pressionado
        if (pad.justPressed(Pads.START)) {
            this.isActive = false; // Desativa a tela de início e começa o jogo
        }
    }
}