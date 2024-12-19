import Ilha1 from 'scripts/ilha1.js';
import Player from './player.js';
import NPC from 'scripts/npc.js';
import NPC2 from 'scripts/npc2.js';
import Pontos from 'scripts/pontos.js';
import Fases from './leves.js';
import StartScreen from 'scripts/start.js';
import InstructionScreen from 'scripts/texto.js';

const ilha1 = new Ilha1();
let currentScenario = ilha1;

const pontos = new Pontos();
const startScreen = new StartScreen();
const instructionScreen = new InstructionScreen();

function resetGame() {
  player1.reset();
  pontos.resetPontos();
  npcs.forEach(npc => npc.reset());
  if (isPlayer2Active) {
    player2.reset();
    isPlayer2Active = false;
    player2 = null;
    npcs2.forEach(npc2 => npc2.reset());
  }
}

const teleportAreas = [
  { x: 100, y: 220, width: 24, height: 24, targetX: 526, targetY: 220 },
  { x: 526, y: 220, width: 24, height: 24, targetX: 100, targetY: 220 }
];

function checkTeleport(player) {
  for (let area of teleportAreas) {
    if (
      player.x > area.x && player.x < area.x + area.width &&
      player.y > area.y && player.y < area.y + area.height
    ) {
      player.x = area.targetX;
      player.y = area.targetY;
      break;
    }
  }
}

let font = new Font("fonts/LEMONMILK-Light.otf");
let ups = new Font("fonts/emulogic.ttf");
let continua = new Font("fonts/emulogic.ttf");
let gameOver = new Font("fonts/emulogic.ttf");
gameOver.scale = 0.4f;
gameOver.color = Color.new(252, 19, 3);

continua.scale = 0.4f;
continua.color = Color.new(252, 227, 3);

ups.scale = 0.5f;

let x = 313;
let y = 337;
const player1 = new Player(x, y, 20, currentScenario, 'leftStick', 0, pontos);
let player2 = null;
let isPlayer2Active = false;

// fanstamas do player 1
const npc1 = new NPC(285, 182, 20, currentScenario, 1);
const npc2 = new NPC(340, 182, 20, currentScenario, 2);

// fanstamas do player 2
const npc3 = new NPC2(285, 182, 20, currentScenario, 1);
const npc4 = new NPC2(285, 182, 20, currentScenario, 2);

const npcs = [npc1, npc2];
const npcs2 = [npc3, npc4];

const fases = new Fases(player1, npcs);

const faseCompletaImg = new Image("assets/mensagens/fase_completa.png", RAM);

let gameStarted = false;
let showInstructions = false;
let scores1 = 0;
let scores2 = 0;

os.setInterval(() => {
  Screen.clear();

  if (!gameStarted) {
    if (!showInstructions) {
      startScreen.draw();
      font.print(221, 266, "PRESS START");
      startScreen.checkStart();

      if (!startScreen.isActive) {
        showInstructions = true;
      }
    } else {
      instructionScreen.draw();
      instructionScreen.checkStart();

      if (!instructionScreen.isActive) {
        gameStarted = true;
      }
    }
  } else {
    currentScenario.draw();
    ups.print(126, 21, `${scores1}`);
    ups.print(114, 6, "1UP");

    const pad2 = Pads.get(1);
    if (pad2.justPressed(Pads.START) && !isPlayer2Active) {
      isPlayer2Active = true;
      player2 = new Player(313, 337, 20, currentScenario, 'leftStick', 1, pontos);
    }

    player1.scenario = currentScenario;
    player1.movePlayer();
    player1.draw();
    checkTeleport(player1);
    player1.drawLives();

    if (isPlayer2Active) {
      player2.scenario = currentScenario;
      player2.movePlayer();
      player2.draw();
      checkTeleport(player2);
      player2.drawLives();
      ups.print(275, 6, "2UP")
      ups.print(286, 21, `${scores2}`);
      if (player2.checkCollisionWithPoints()) {
        scores2 += 10;
      }
      npc3.moveNPC(player2.x, player2.y);
      npc3.draw();
      npc4.moveNPC(player2.x, player2.y);
      npc4.draw();
    }
    
    const pad1 = Pads.get(0);
    if (pad1.justPressed(Pads.SELECT)) {
      resetGame();
    }

    npc1.moveNPC(player1.x, player1.y);
    npc1.draw();
    npc2.moveNPC(player1.x, player1.y);
    npc2.draw();

    player1.checkCollisionWithGhost(npc1);
    player1.checkCollisionWithGhost(npc2);

    if (isPlayer2Active) {
      player2.checkCollisionWithGhost(npc3);
      player2.checkCollisionWithGhost(npc4);
    }

    if (player1.isAlive || player1.isRespawning) {
      player1.checkContinue();
    }

    if (isPlayer2Active && (player2.isAlive || player2.isRespawning)) {
      player2.checkContinue();
    }

    if (!player1.isAlive && (!player2 || !player2.isAlive)) {
      if (player1.lives > 0 || (isPlayer2Active && player2.lives > 0)) {
        continua.print(270, 260, "press-start");
      } else {
        gameOver.print(270, 260, "press-select");
      }
    }
    
    pontos.draw();

    if (player1.checkCollisionWithPoints()) {
      scores1 += 10;
    }

    if (pontos.allPontosComidos()) {
      faseCompletaImg.draw(100, 100);
      pontos.resetPontos();
      fases.updateLevel();
    }
  }

  Screen.flip();
}, 0);