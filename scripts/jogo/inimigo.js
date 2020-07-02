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
    velocidade
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
    this.x = width;
  }

  move() {
    this.x -= this.velocidade;
  }

  appear() {
    this.x = width;
  }

  resetPosition() {
    this.x = width;
  }
}
