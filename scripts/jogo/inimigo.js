class Inimigo extends Animacao {
  constructor(
    sprite,
    spriteWidth,
    spriteHeight,
    charWidth,
    charHeight,
    rows,
    cols,
    x,
    y,
    deltaY,
    matriz,
    velocidade,
    delay
  ) {
    super(
      sprite,
      spriteWidth,
      spriteHeight,
      charWidth,
      charHeight,
      rows,
      cols,
      x,
      y,
      deltaY,
      matriz
    );
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < -this.charWidth - this.delay) {
      this.x = width;
    }
  }

  resetPosition() {
    this.x = width + this.delay;
  }
}
