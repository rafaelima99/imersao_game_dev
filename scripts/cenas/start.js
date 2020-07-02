class StartScreen {
  constructor() {}

  draw() {
    if (startButton == null) {
      startButton = new Button("START", width / 2, height / 2 + 80);
    }
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
    fill("#000");
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

  keyPressed(key) {}
}
