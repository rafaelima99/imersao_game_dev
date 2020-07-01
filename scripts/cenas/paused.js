class PausedScreen {
  constructor() {}
  draw() {
    textAlign(CENTER, CENTER);
    textSize(50);
    text("PAUSED", width / 2, height / 2);
    textSize(30);
    text("Press ENTER to resume", width / 2, height / 2 + 50);
  }
  keyPressed(key) {
    if (keyCode === ENTER) {
      gameState = "main";
      loop();
    }
  }
}
