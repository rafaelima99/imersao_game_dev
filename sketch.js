function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //trilhaSonora.loop();

  start = new StartScreen();
  main = new Jogo();
  paused = new PausedScreen();
  over = new EndScreen();

  startButton = new Button("START", width / 2, height / 2 + 80);

  main.setup();

  states = {
    main,
    start,
    paused,
    over,
  };

  gameState = "start";

  noLoop();
}

function keyPressed() {
  states[gameState].keyPressed(key);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log(gameState);
  states[gameState].draw();
}
