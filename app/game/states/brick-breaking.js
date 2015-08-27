import Brick from '../sprites/brick';
import Croissant from '../sprites/croissant';

/*global Phaser */
export default class {
  constructor(game) {
    this.game = game;
  }

  preload() {
    this.game.time.advancedTiming = true;
    this.game.load.image('brick', 'assets/images/brick.png');
    this.game.load.image('croissant', 'assets/images/croissant.png');
  }

  create() {
    this.addLevelText();
    this.addBricks();
    this.addCroissant();
  }

  addCroissant() {
    this.croissant = new Croissant(this.game);
  }

  addBricks() {
    let offset = 8,
    brickWidth = 16,
    brickHeight = 8,
    numBricksInRow = 9,
    numRows = 5;

    this.bricks = this.game.add.group();

    for (let i = 0; i < numRows * numBricksInRow; i++) {
      var row = Math.floor(i/numBricksInRow);
      var col = i % numBricksInRow;

      let brick = new Brick(this.game,
                            offset + col * brickWidth,
                            2 * offset + row * brickHeight);

      this.bricks.add(brick);
    }
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
    console.log(brick);
    brick.destroy();
  }

  update() {
    this.game.physics.arcade.collide(this.croissant, this.bricks, this.brickCollision);
  }
}

