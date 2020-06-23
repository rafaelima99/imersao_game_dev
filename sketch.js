const Hipsta = {
  sprite: "",
  width: 110,
  height: 135,
  spriteWidth: 220,
  spriteHeight: 270,
  rows: 4,
  cols: 4,
};
const gotinha = {
  sprite: "",
};

let cenario;
let imagemCenario;
let protagonista;
let trilhaSonora;

function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  Hipsta.sprite = loadImage("imagens/personagem/correndo.png");
  trilhaSonora = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 2);

  personagem = new Personagem(
    Hipsta.sprite,
    Hipsta.spriteWidth,
    Hipsta.spriteHeight,
    Hipsta.width,
    Hipsta.height,
    Hipsta.rows,
    Hipsta.cols
  );

  frameRate(32);
  trilhaSonora.loop();
}

function draw() {
  cenario.show();
  cenario.move();

  personagem.show();
}
