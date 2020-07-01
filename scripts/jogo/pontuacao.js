class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  show() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }

  addPoint() {
    this.pontos += 0.1;
  }

  setScore(value) {
    this.pontos = value;
  }

  getScore() {
    return this.pontos;
  }
}
