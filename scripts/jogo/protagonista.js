class Protagonista extends Animacao {
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

    this.yInitial = height - this.charHeight - this.deltaY;
    this.jumps = 0;
    this.maxJumps = 2;
  }

  pula() {
    if (this.jumps < this.maxJumps) {
      this.jumpSpeed -= this.jumpHeight;
      this.jumps++;
      return;
    }
  }

  aplicaGravidade() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.y > this.yInitial) {
      this.y = this.yInitial;
      this.jumpSpeed = 0;
      this.jumps = 0;
    }
  }

  moveLeft() {
    if (this.x > 3) this.x -= 5;
  }
  moveRight() {
    if (this.x < width - 3) this.x += 5;
  }

  resetPosition() {
    this.x = 10;
    this.y = this.yInitial;
  }
}
