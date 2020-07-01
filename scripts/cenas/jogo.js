class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 2);
    pontuacao = new Pontuacao();

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

    inimigos.push(gotinha1);
    inimigos.push(voador1);
    inimigos.push(troll1);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      protagonista.pula();
      somPulo.play();
    }
    if (keyCode === ENTER) {
      switch (gameState) {
        case "main":
          gameState = "paused";
          noLoop();
          break;
        default:
          gameState = "main";
      }
    }
  }

  draw() {
    cenario.show();
    cenario.move();

    protagonista.show();

    pontuacao.show();
    pontuacao.addPoint();

    protagonista.aplicaGravidade();

    if (keyIsDown(LEFT_ARROW)) {
      protagonista.moveLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      protagonista.moveRight();
    }

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.charWidth;

    inimigo.showMatriz(inimigo.matriz);
    inimigo.move();

    if (inimigoVisivel) {
      console.log(this.inimigoAtual);
      this.inimigoAtual++;
      if (this.inimigoAtual >= inimigos.length) {
        this.inimigoAtual = 0;
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

  setScore(value) {
    pontuacao.setScore(value);
  }
}
