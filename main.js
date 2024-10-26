import Ilha1 from 'scripts/ilha1.js'; 
import Ilha2 from 'scripts/ilha2.js';
import Player from './player.js';
import NPC from 'scripts/npc.js';
import Pontos from 'scripts/pontos.js'; 
import Fases from './leves.js';
import StartScreen from 'scripts/start.js';
import InstructionScreen from 'scripts/texto.js';

const ilha1 = new Ilha1();
const ilha2 = new Ilha2();
let currentScenario = ilha1;

const pontos = new Pontos();
const startScreen = new StartScreen();
const instructionScreen = new InstructionScreen();

let font = new Font("fonts/LEMONMILK-Light.otf");

const player1 = new Player(309, 65, 20, currentScenario, 'leftStick', 0, pontos);
let player2 = null;

let isPlayer2Active = false;

const npc1 = new NPC(280, 153, 20, currentScenario, 1);
const npc2 = new NPC(336, 153, 20, currentScenario, 2);
const npcs = [npc1, npc2];

const fases = new Fases(player1, npcs);

const faseCompletaImg = new Image("assets/mensagens/fase_completa.png", RAM);

let gameStarted = false;
let showInstructions = false; 

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

      const pad2 = Pads.get(1);
      if (pad2.justPressed(Pads.START) && !isPlayer2Active) {
        isPlayer2Active = true;
        player2 = new Player(309, 241, 20, currentScenario, 'leftStick', 1, pontos);
      }

      player1.scenario = currentScenario; 
      player1.movePlayer();
      player1.draw();  
      player1.drawLives();

      if (isPlayer2Active) {
        player2.scenario = currentScenario; 
        player2.movePlayer();
        player2.draw();
        player2.drawLives();
      }

      npc1.moveNPC(player1.x, player1.y);
      npc1.draw();
      npc2.moveNPC(player1.x, player1.y);
      npc2.draw();

      player1.checkCollisionWithGhost(npc1);
      player1.checkCollisionWithGhost(npc2);

      if (isPlayer2Active) {
        player2.checkCollisionWithGhost(npc1);
        player2.checkCollisionWithGhost(npc2);
      }

      if (player1.isAlive || player1.isRespawning) {
        player1.checkContinue();
      }
      if (isPlayer2Active && (player2.isAlive || player2.isRespawning)) {
        player2.checkContinue();
      }

      pontos.draw();

      if (pontos.allPontosComidos()) {
        faseCompletaImg.draw(100, 100);
        pontos.resetPontos();
        fases.updateLevel();
      }

      const nextScenario = currentScenario.checkTransition(player1.x, player1.y);
      if (nextScenario) {
          switch (nextScenario) {
              case 'Ilha2':
                  currentScenario = ilha2;
                  break;
              default:
                  currentScenario = ilha1;
          }
      }

  }

  Screen.flip();
}, 0);