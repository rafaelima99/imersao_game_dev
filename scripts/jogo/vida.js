class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.width = 25;
    this.height = 25;
    this.xInicial = 20;
    this.yInicial = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (1 + i);
      image(imgHP, posicao + margem, this.yInicial, this.width, this.height);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
    console.log(this.vidas);
  }
}
