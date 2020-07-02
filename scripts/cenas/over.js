class EndScreen {
  constructor() {}

  draw() {
    if (restartButton == null) {
      restartButton = new Button("TRY AGAIN", width / 2, height / 2 + 80);
    }
    this._text();
    this._button();
    this._image();
    noLoop();
  }

  _image() {
    image(gameOver, width / 2 - 200, height / 3);
  }

  _text() {
    textAlign(CENTER, CENTER);
    textSize(50);
    text(
      "You scored " + floor(pontuacao.getScore()) + " points",
      width / 2,
      height / 2
    );
  }

  _button() {
    restartButton.y = height / 2 + 50;
    restartButton.draw();
  }

  keyPressed(key) {
    if (keyCode === ENTER) {
      gameState = "start";
      this.reset();
      redraw();
    }
  }

  reset() {
    main.setScore(0);
    protagonista.resetPosition();
    inimigos.forEach((inimigo) => {
      inimigo.resetPosition();
    });
    return;
  }
}
