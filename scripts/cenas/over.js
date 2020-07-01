class EndScreen {
  constructor() {}
  draw() {
    this._text();
    this._button();
  }

  _text() {
    textAlign(CENTER, CENTER);
    textSize(50);
    text("You scored" + pontuacao.getScore() + "points", width / 2, height / 2);
  }

  _button() {
    button.y = height / 2 + 50;
    button.draw();
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
