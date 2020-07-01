class StartScreen {
  constructor() {}
  draw() {
    this._backgroundImg();
    this._text();
    this._button();
  }

  _backgroundImg() {
    image(imagemInicial, 0, 0, width, height);
  }

  _text() {
    textAlign(CENTER, CENTER);
    textFont(fonteTelaInicial);
    textSize(100);
    text("Hipsta", width / 2, height / 2 - 70);
    textSize(50);
    text("and the Cursed Woods", width / 2, height / 2);
    textSize(30);
  }

  _button() {
    startButton.y = (height / 7) * 5;
    startButton.draw();
  }
}
