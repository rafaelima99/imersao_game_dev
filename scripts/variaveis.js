const Hipsta = {
  sprite: "",
  width: 110,
  height: 135,
  spriteWidth: 220,
  spriteHeight: 270,
  rows: 4,
  cols: 4,
  x: 10,
  y: 0,
  deltaY: 30,
};
const gotinha = {
  sprite: "",
  width: 52,
  height: 52,
  spriteWidth: 105,
  spriteHeight: 104,
  rows: 7,
  cols: 4,
  x: 52,
  y: 0,
  deltaY: 30,
  matriz: [
    [0, 0],
    [105, 0],
    [210, 0],
    [315, 0],
    [0, 104],
    [105, 104],
    [210, 104],
    [315, 104],
    [0, 208],
    [105, 208],
    [210, 208],
    [315, 208],
    [0, 312],
    [105, 312],
    [210, 312],
    [315, 312],
    [0, 416],
    [105, 416],
    [210, 416],
    [315, 416],
    [0, 520],
    [105, 520],
    [210, 520],
    [315, 520],
    [0, 624],
    [105, 624],
    [210, 624],
    [315, 624],
  ],
  velocidade: 10,
};
const gotinhaVoadora = {
  sprite: "",
  width: 68,
  height: 54,
  spriteWidth: 200,
  spriteHeight: 150,
  rows: 6,
  cols: 5,
  x: 0,
  y: 0,
  deltaY: 200,
  matriz: [
    [0, 0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ],
  velocidade: 10,
};
const troll = {
  sprite: "",
  width: 200,
  height: 200,
  spriteWidth: 400,
  spriteHeight: 400,
  rows: 6,
  cols: 5,
  x: 0,
  y: 0,
  deltaY: 0,
  matriz: [
    [0, 0],
    [400, 0],
    [800, 0],
    [1200, 0],
    [1600, 0],
    [0, 400],
    [400, 400],
    [800, 400],
    [1200, 400],
    [1600, 400],
    [0, 800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200],
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ],
  velocidade: 10,
};

let jogo;
let gameState;
let states;
let start;
let main;
let paused;
let over;

let cenario;
let pontuacao;
let hp;
let startButton;
let restartButton;

let protagonista;
let gotinha1;
let troll1;
let voador1;
const inimigos = [];

let imagemCenario;
let imagemInicial;
let imgHP;
let fonteTelaInicial;
let gameOver;
let trilhaSonora;
let somPulo;
