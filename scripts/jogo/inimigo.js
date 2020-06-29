class Inimigo extends Personagem {
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
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < -this.charWidth - this.delay) {
      this.x = width;
    }
  }
}
