class Jogo {
  constructor() {
    this.index = 0;
    this.mapa = [
      { inimigo: 0, velocidade: 10 },
      { inimigo: 1, velocidade: 30 },
      { inimigo: 1, velocidade: 15 },
      { inimigo: 2, velocidade: 40 },
      { inimigo: 2, velocidade: 10 },
      { inimigo: 1, velocidade: 20 },
      { inimigo: 0, velocidade: 30 },
    ];
  }

  setup() {
    cenario = new Cenario(imagemCenario, 2);
    pontuacao = new Pontuacao();
    hp = new Vida(3, 3);

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

    hp.draw();
    pontuacao.show();
    pontuacao.addPoint();

    protagonista.aplicaGravidade();

    if (keyIsDown(LEFT_ARROW)) {
      protagonista.moveLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      protagonista.moveRight();
    }

    const linhaAtual = this.mapa[this.index];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.charWidth;
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.showMatriz(inimigo.matriz);
    inimigo.move();

    if (inimigoVisivel) {
      inimigo.appear();
      this.index++;
      if (this.index > this.mapa.length - 1) {
        this.index = 0;
      }
    }

    if (protagonista.estaColidindo(inimigo)) {
      hp.perdeVida();
      protagonista.tornarInvencivel();
      if (hp.vidas < 0) {
        gameState = "over";
      }
    }
  }

  setScore(value) {
    pontuacao.setScore(value);
  }
}
