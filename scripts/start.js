export default class StartScreen {
    constructor() {
        this.isActive = true;
        this.background = new Image("assets/intro/background.png");
        this.startButton = new Image("assets/intro/start.png");
        this.buttonX = 222; 
        this.buttonY = 316; 
        this.buttonWidth = 168; 
        this.buttonHeight = 24; 

    }

    draw() {
        this.background.draw(0, 0);
        this.startButton.draw(this.buttonX, this.buttonY);
    }

    checkStart() {
        const pad = Pads.get(0);

        if (pad.justPressed(Pads.START)) {
            this.isActive = false;
        }
    }
}