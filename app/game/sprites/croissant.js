/*global Phaser */
export default class extends Phaser.Sprite {
  constructor(game) {
    super(game, game.world.centerX, game.world.centerY, 'croissant');
    this.configurePhysics();
    game.add.existing(this);
  }

  configurePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(1.0, 1.0);
    this.body.velocity.x = 50;
    this.body.velocity.y = 50;
  }

  update() {
    super.update();
  }
}

