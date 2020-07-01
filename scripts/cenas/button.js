class Button {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => {
      this._changeState();
    });
    this.button.addClass("botao-tela-inicial");
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center("horizontal");
  }

  _changeState() {
    this.button.remove();
    if (gameState == "start") {
      gameState = "main";
      loop();
    } else if (gameState == "over") {
      gameState = "start";
    }
  }
}
