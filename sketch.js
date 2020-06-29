const Hipsta = {
  sprite: "",
  width: 110,
  height: 135,
  spriteWidth: 220,
  spriteHeight: 270,
  rows: 4,
  cols: 4,
  x: 0,
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
  delay: 100,
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
  velocidade: 8,
  delay: 200,
};

let cenario;
let imagemCenario;
let protagonista;
let gotinha1;
let troll1;
let trilhaSonora;
let somPulo;

function preload() {
  imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
  Hipsta.sprite = loadImage("assets/imagens/personagem/correndo.png");
  gotinha.sprite = loadImage("assets/imagens/inimigos/gotinha.png");
  troll.sprite = loadImage("assets/imagens/inimigos/troll.png");
  trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
  somPulo = loadSound("assets/sons/somPulo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 2);

  protagonista = new Protagonista(
    Hipsta.sprite,
    Hipsta.spriteWidth,
    Hipsta.spriteHeight,
    Hipsta.width,
    Hipsta.height,
    Hipsta.rows,
    Hipsta.cols,
    Hipsta.x,
    Hipsta.y,
    Hipsta.deltaY
  );
  gotinha1 = new Inimigo(
    gotinha.sprite,
    gotinha.spriteWidth,
    gotinha.spriteHeight,
    gotinha.width,
    gotinha.height,
    gotinha.rows,
    gotinha.cols,
    width - gotinha.width,
    gotinha.y,
    gotinha.deltaY,
    gotinha.matriz,
    gotinha.velocidade,
    gotinha.delay
  );
  troll1 = new Inimigo(
    troll.sprite,
    troll.spriteWidth,
    troll.spriteHeight,
    troll.charWidth,
    troll.charHeight,
    troll.rows,
    troll.cols,
    width,
    troll.y,
    troll.deltaY,
    troll.matriz,
    troll.velocidade,
    troll.delay
  );

  frameRate(40);
  //trilhaSonora.loop();
}

function keyPressed() {
  if (key === "ArrowUp") {
    protagonista.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.show();
  cenario.move();

  protagonista.show();
  protagonista.aplicaGravidade();

  gotinha1.showMatriz(gotinha1.matriz);
  gotinha1.move();
  troll1.showMatriz(troll1.matriz);
  troll1.move();

  if (protagonista.estaColidindo(gotinha1)) {
    noLoop();
  }
}
