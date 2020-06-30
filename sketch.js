function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 2);
  pontuacao = new Pontuacao();
  gameState = "start";

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
  const gotinha1 = new Inimigo(
    gotinha.sprite,
    gotinha.spriteWidth,
    gotinha.spriteHeight,
    gotinha.width,
    gotinha.height,
    gotinha.rows,
    gotinha.cols,
    gotinha.x,
    gotinha.y,
    gotinha.deltaY,
    gotinha.matriz,
    gotinha.velocidade,
    gotinha.delay
  );
  const troll1 = new Inimigo(
    troll.sprite,
    troll.spriteWidth,
    troll.spriteHeight,
    troll.width,
    troll.height,
    troll.rows,
    troll.cols,
    troll.x,
    troll.y,
    troll.deltaY,
    troll.matriz,
    troll.velocidade,
    troll.delay
  );
  const voador1 = new Inimigo(
    gotinhaVoadora.sprite,
    gotinhaVoadora.spriteWidth,
    gotinhaVoadora.spriteHeight,
    gotinhaVoadora.width,
    gotinhaVoadora.height,
    gotinhaVoadora.rows,
    gotinhaVoadora.cols,
    gotinhaVoadora.x,
    gotinhaVoadora.y,
    gotinhaVoadora.deltaY,
    gotinhaVoadora.matriz,
    gotinhaVoadora.velocidade,
    gotinhaVoadora.delay
  );

  inimigos.push(gotinha1);
  inimigos.push(troll1);
  inimigos.push(voador1);

  frameRate(40);

  noLoop();
  //trilhaSonora.loop();
}

function keyPressed() {
  if (key === "ArrowUp") {
    protagonista.pula();
    somPulo.play();
  }
  if (keyCode === ENTER) {
    switch (gameState) {
      case "start":
        gameState = "main";
        loop();
        break;
      case "main":
        gameState = "paused";
        noLoop();
        break;
      case "paused":
        gameState = "main";
        loop();
        break;
      case "over":
        gameState = "start";
        reset();
        redraw();
        break;
      default:
        gameState = "main";
        break;
    }
  }
}
function draw() {
  cenario.show();
  cenario.move();

  protagonista.show();

  if (gameState === "start") {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("#fff");
    text("Press ENTER to begin", width / 2, height / 2);
  }

  if (gameState === "paused") {
    textAlign(CENTER, CENTER);
    fill("#fff");
    textSize(50);
    text("PAUSED", width / 2, height / 2);
    textSize(30);
    text("Press ENTER to resume", width / 2, height / 2 + 50);
  }

  pontuacao.show();
  pontuacao.adicionarPonto();

  protagonista.aplicaGravidade();

  if (keyIsDown(LEFT_ARROW)) {
    protagonista.moveLeft();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    protagonista.moveRight();
  }

  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < -inimigo.charWidth;

  inimigo.showMatriz(inimigo.matriz);
  inimigo.move();

  if (inimigoVisivel) {
    console.log(inimigoAtual);
    inimigoAtual++;
    if (inimigoAtual >= inimigos.length) {
      inimigoAtual = 0;
    }
    inimigo.velocidade = floor(random(10, 30));
  }

  if (protagonista.estaColidindo(inimigo)) {
    image(gameOver, width / 2 - 200, height / 3);
    gameState = "over";
    textAlign(CENTER, CENTER);
    textSize(30);
    fill("#fff");
    text("Press ENTER to play again", width / 2, height / 3 + 150);
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function reset() {
  pontuacao.pontos = 0;
  protagonista.resetPosition();
  inimigos.forEach((inimigo) => {
    inimigo.resetPosition();
  });
  return;
}
