class Personagem {
  constructor(sprite, spriteWidth, spriteHeight, charWidth, charHeight, rows, cols) {
    this.sprite = sprite;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

    this.charWidth = charWidth;
    this.charHeight = charHeight;

    this.rows = rows;
    this.cols = cols;
    this.curX = 0;
    this.curY = 0;

    /*this.matriz = [
      [0,0],
      [2*this.charWidth,0],
      [4*this.charWidth,0],
      [6*this.charWidth,0],
      
      [0,2*this.charHeight],
      [2*this.charWidth,2*this.charHeight],
      [4*this.charWidth,2*this.charHeight],
      [6*this.charWidth,2*this.charHeight],
      
      [0,4*this.charHeight],
      [2*this.charWidth,4*this.charHeight],
      [4*this.charWidth,4*this.charHeight],
      [6*this.charWidth,4*this.charHeight],
      
      
      [0,6*this.charHeight],
      [2*this.charWidth,6*this.charHeight],
      [4*this.charWidth,6*this.charHeight],
      [6*this.charWidth,6*this.charHeight]
    ];*/

    this.frameAtual = 0;
  }

  show() {
    image(this.sprite, 0, height - this.charHeight, this.charWidth, this.charHeight, this.curX * this.spriteWidth, this.curY * this.spriteHeight, this.spriteWidth, this.spriteHeight);

    this.animate();
  }

  animate() {
    this.curX++;
    if (this.curX >= this.cols) {
      this.curX = 0;
      this.curY++;
    }
    if (this.curY >= this.rows) {
      this.curY = 0;
    }
  }
}