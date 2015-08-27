/*global Phaser */
export default class extends Phaser.Sprite {
  constructor(game, x = 0, y = 0) {
    super(game, x, y, 'brick');
    this.configurePhysics();
    game.add.existing(this);
  }

  configurePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
  }
}

