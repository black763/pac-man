import Ilha1 from 'scripts/ilha1.js';
import Ilha2 from 'scripts/ilha2.js';
import Player from './player.js';
import NPC from 'scripts/npc.js';
import Pontos from 'scripts/pontos.js'; 
import Fases from './leves.js';
import StartScreen from 'scripts/start.js';

const ilha1 = new Ilha1();
const ilha2 = new Ilha2();
let currentScenario = ilha1;

const pontos = new Pontos();
const startScreen = new StartScreen();

let font = new Font("fonts/LEMONMILK-Light.otf");

const player1 = new Player(309, 65, 20, currentScenario, 'leftStick', 0, pontos);
let player2 = null; // Player 2 ainda não existe

let isPlayer2Active = false; // Flag para verificar se o Player 2 está ativo

// Instancia os NPCs (fantasmas)
const npc1 = new NPC(171, 62, 20, currentScenario, 1);
const npc2 = new NPC(447, 62, 20, currentScenario, 2);
const npcs = [npc1, npc2];

// Instancia o sistema de fases
const fases = new Fases(player1, npcs); // Passa o jogador e os NPCs

const faseCompletaImg = new Image("assets/mensagens/fase_completa.png", RAM);

let gameStarted = false; // Controla se o jogo já começou

os.setInterval(() => {
  Screen.clear();

  if (!gameStarted) {
      // Desenha a tela de início enquanto o jogo não começou
      startScreen.draw();
      font.print(221, 266, "PRESS START");
      startScreen.checkStart();

      if (!startScreen.isActive) {
        gameStarted = true; // Inicia o jogo se a tela de início for desativada
      }
  } else {
    //painel de dev
    const free_mem = System.getMemoryStats();
    const free_vram = Screen.getFreeVRAM();
    const ram_usage = System.getMemoryStats();
    const ramUse = (ram_usage.used / 1048576).toFixed(2);

    font.print(0, 50, "Using RAM: " + ramUse + " MB/32MB");
    font.print(0, 100, "Free RAM: " + (32 - ramUse) + " MB/32MB");
    font.print(0, 150, "Used RAM: " + ram_usage.used + " B");
    font.print(0, 200, "Free VRAM: " + free_vram + " KB");

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

    // Desenha os pontos restantes
    pontos.draw();

    // Verifica se todos os pontos foram comidos
    if (pontos.allPontosComidos()) {
      faseCompletaImg.draw(100, 100); // Desenha a mensagem de fase completa
      pontos.resetPontos(); // Reinicia os pontos
      fases.updateLevel(); // Atualiza a fase
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