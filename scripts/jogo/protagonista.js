class Protagonista extends Personagem {
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
    deltaY
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
      deltaY
    );

    this.yInicial = height - this.charHeight - this.deltaY;
  }

  pula() {
    this.velocidadeDoPulo -= this.alturaDoPulo;
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
    }
  }
}
