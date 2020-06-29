class Personagem {
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
    matriz
  ) {
    this.sprite = sprite;

    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

    this.charWidth = charWidth;
    this.charHeight = charHeight;

    this.rows = rows;
    this.cols = cols;
    this.x = x;
    this.deltaY = deltaY;
    this.y = height - this.charHeight - this.deltaY;

    this.curSpriteX = 0;
    this.curSpriteY = 0;

    this.frameAtual = 0;
    this.matriz = matriz;

    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = 30;
    this.gravidade = 3;

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
  }

  show() {
    image(
      this.sprite,
      this.x,
      this.y,
      this.charWidth,
      this.charHeight,
      this.curSpriteX * this.spriteWidth,
      this.curSpriteY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight
    );

    this.animate();
  }

  animate() {
    this.curSpriteX++;
    if (this.curSpriteX >= this.cols) {
      this.curSpriteX = 0;
      this.curSpriteY++;
    }
    if (this.curSpriteY >= this.rows) {
      this.curSpriteY = 0;
    }
  }

  showMatriz(matriz) {
    image(
      this.sprite,
      this.x,
      this.y,
      this.charWidth,
      this.charHeight,
      matriz[this.frameAtual][0],
      matriz[this.frameAtual][1],
      this.spriteWidth,
      this.spriteHeight
    );

    this.animateMatriz();
  }

  animateMatriz() {
    this.frameAtual++;
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.charWidth * precisao,
      this.charHeight * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.charWidth * precisao,
      inimigo.charHeight * precisao
    );

    return colisao;
  }
}
