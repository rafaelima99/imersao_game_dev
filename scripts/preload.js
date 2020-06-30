function preload() {
  imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
  gameOver = loadImage("assets/imagens/assets/game-over.png");

  Hipsta.sprite = loadImage("assets/imagens/personagem/correndo.png");
  gotinha.sprite = loadImage("assets/imagens/inimigos/gotinha.png");
  gotinhaVoadora.sprite = loadImage(
    "assets/imagens/inimigos/gotinha-voadora.png"
  );
  troll.sprite = loadImage("assets/imagens/inimigos/troll.png");
  trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
  somPulo = loadSound("assets/sons/somPulo.mp3");
}
