let imagemCenario;
const protagonista = {
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
let trilhaSonora;

function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  protagonista.sprite = loadImage("imagens/personagem/correndo.png");
  trilhaSonora = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 2);

  Hipsta = new Personagem(
    protagonista.sprite,
    protagonista.spriteWidth,
    protagonista.spriteHeight,
    protagonista.width,
    protagonista.height,
    protagonista.rows,
    protagonista.cols
  );

  frameRate(32);
  trilhaSonora.loop();
}

function draw() {
  cenario.show();
  cenario.move();

  Hipsta.show();
}
