import Brick from '../sprites/brick';
import Paddle from '../sprites/paddle';
import Croissant from '../sprites/croissant';

/*global Phaser */
export default class {
  constructor(game, level, initialBall) {
    this.game = game;
    this.numBricksInRow = 8;
    this.numRows = 5;
    this.level = level;
    this.initialBall = initialBall;
  }

  preload() {
    this.game.time.advancedTiming = true;
    this.game.load.image('brick', 'assets/images/brick.png');
    this.game.load.image('paddle', 'assets/images/paddle.png');
    this.game.load.image('croissant', 'assets/images/croissant.png');
    this.game.load.image('basketball', 'assets/images/basketball.png');
  }

  create() {
    this.addLevelText();
    this.addCroissant();
    this.addBricks();
    this.addPaddle();
    this.game.scale.windowConstraints.bottom = "visual";
    this.addCountdown();
  }

  addCroissant() {
    this.croissant = new Croissant(this.game, this.initialBall);
  }

  releaseCroissant() {
    let maxInitSpeed = 75;
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    this.croissant.body.velocity.y = maxInitSpeed;
    this.croissant.body.velocity.x = plusOrMinus * Math.floor(Math.random() * maxInitSpeed) + 1;
  }

  addPaddle() {
    this.paddle = new Paddle(this.game);
  }

  addBricks() {
    let numBricks = this.numRows * this.numBricksInRow;

    this.bricks = this.game.add.group();

    for (let i = 0; i < numBricks; i++) {
      let row = this.rowForBrickIndex(i),
      col = this.colForBrickIndex(i),
      brick = new Brick(this.game, row, col);

      this.bricks.add(brick);
    }
  }

  rowForBrickIndex(i) {
    return Math.floor(i / this.numBricksInRow);
  }

  colForBrickIndex(i) {
    return i % this.numBricksInRow;
  }

  addCountdown() {
    let timer = this.game.time.create(false);
    var countdown = 3;
    this.addCountdownText(countdown);

    timer.repeat(1000, 3, function() {
      countdown -= 1;
      this.addCountdownText(countdown);
    }, this);

    timer.start();

    timer.onComplete.add(function() {
      this.addCountdownText('Croissant!');
      this.releaseCroissant();
    }, this);
  }

  addCountdownText(countdown) {
    if (countdown <= 0) { return; }

    let text = this.game.add.text(this.game.world.centerX,
                                  this.game.world.centerY,
                                  countdown,
                                  this.levelTextStyle());

      text.anchor.setTo(0.5, 0.5);

      this.game.add.tween(text.scale).from({ x: 0.0, y: 0.0 }, 500, Phaser.Easing.Quadratic.In, true);
      this.game.add.tween(text).from({ angle: 180 }, 500, Phaser.Easing.Quadratic.In, true);

      let timer = this.game.time.create(false);
      timer.add(1000, function() { text.destroy(); });
      timer.start();
  }

  addLevelText() {
    var text = this.game.add.text(this.game.world.centerX,
                                  this.game.world.height - 20,
                                  `Level ${this.level}`,
                                  this.levelTextStyle());

    text.anchor.setTo(0.5, 0.5);
    text.alpha = 0;
    this.game.add.tween(text).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
  }

  levelTextStyle() {
    return  {
      font: '25px VT323',
      fill: '#fff'
    };
  }

  brickCollision(croissant, brick) {
    brick.destroy();
    this.checkIfWon();
  }

  paddleCollision() {
    this.croissant.increaseSpeed(this.level);
  }

  changeBall(ballName) {
    this.croissant.loadTexture(ballName);
  }

  currentBall() {
    return this.croissant.key;
  }

  checkIfDead() {
    if (this.croissant.body.y >= this.game.world.height - this.croissant.body.height) {
      console.log('dead');
    }
  }

  checkIfWon() {
    if (this.bricks.length <= 0) {
      console.log('victory');
    }
  }

  update() {
    this.game.physics.arcade.collide(this.croissant, this.bricks, this.brickCollision, null, this);
    this.game.physics.arcade.collide(this.croissant, this.paddle, this.paddleCollision, null, this);
    this.checkIfDead();
  }

  /*render() {
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
  }*/
}

