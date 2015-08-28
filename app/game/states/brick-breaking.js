import Brick from '../sprites/brick';
import Paddle from '../sprites/paddle';
import Croissant from '../sprites/croissant';

/*global Phaser */
export default class {
  constructor(game) {
    this.game = game;
    this.numBricksInRow = 9;
    this.numRows = 5;
  }

  preload() {
    this.game.time.advancedTiming = true;
    this.game.load.image('brick', 'assets/images/brick.png');
    this.game.load.image('paddle', 'assets/images/paddle.png');
    this.game.load.image('croissant', 'assets/images/croissant.png');
  }

  create() {
    this.addLevelText();
    this.addBricks();
    this.addCroissant();
    this.addPaddle();
  }

  addCroissant() {
    this.croissant = new Croissant(this.game);
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

  addLevelText() {
    var text = this.game.add.text(this.game.world.centerX,
                                  this.game.world.centerY,
                                  '1',
                                  this.spaceTextStyle());

    text.anchor.setTo(0.5, 0.5);
    this.game.add.tween(text.scale).from({ x: 0.0, y: 0.0 }, 500, Phaser.Easing.Quadratic.In, true, 1000);
    this.game.add.tween(text).from({ angle: 180 }, 500, Phaser.Easing.Quadratic.In, true, 1000);
  }

  spaceTextStyle() {
    return  {
      font: '100px Sans-Serif',
      fill: '#d3d3d3'
    };
  }

  brickCollision(croissant, brick) {
    brick.destroy();
  }

  paddleCollision() {
    console.log('pong!');
  }

  update() {
    this.game.physics.arcade.collide(this.croissant, this.bricks, this.brickCollision);
    this.game.physics.arcade.collide(this.croissant, this.paddle, this.paddleCollision);
  }

  render() {
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
  }
}

