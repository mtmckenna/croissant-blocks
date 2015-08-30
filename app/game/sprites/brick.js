/*global Phaser */
export default class extends Phaser.Sprite {
  constructor(game, row, col) {
    super(game, 0, 0, 'brick');
    this.configurePosition(row, col);
    this.configurePhysics();
    game.add.existing(this);
  }

  configurePosition(row, col) {
    let sideOffset = 16,
    topOffset = 16;

    this.x = sideOffset + col * this.width;
    this.y = topOffset + row * this.height;
  }

  configurePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
  }
}

