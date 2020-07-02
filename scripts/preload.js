function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  gameOver = loadImage("imagens/assets/game-over.png");
  imgHP = loadImage("imagens/assets/coracao.png");
  imagemInicial = loadImage("imagens/cenario/telaInicial.png");
  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");

  Hipsta.sprite = loadImage("imagens/personagem/correndo.png");
  gotinha.sprite = loadImage("imagens/inimigos/gotinha.png");
  gotinhaVoadora.sprite = loadImage("imagens/inimigos/gotinha-voadora.png");
  troll.sprite = loadImage("imagens/inimigos/troll.png");
  trilhaSonora = loadSound("sons/trilha_jogo.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
}
