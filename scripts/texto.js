export default class InstructionScreen {
    constructor() {
        this.isActive = true;
        this.background = new Image("assets/texto/instructions.png");
    }

    draw() {
        this.background.draw(0, 0);
    }

    checkStart() {
        const pad = Pads.get(0);
        if (pad.justPressed(Pads.CROSS)) {
            this.isActive = false;
        }
    }
}