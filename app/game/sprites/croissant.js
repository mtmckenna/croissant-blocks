/*global Phaser */
export default class extends Phaser.Sprite {
  constructor(game, initialBall='croissant') {
    super(game, game.world.centerX, game.world.centerY, initialBall);
    this.configurePhysics();
    game.add.existing(this);
  }

  configurePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.anchor.setTo(0.5, 0.5);
    this.position.y -= 2 * this.body.height;
    this.body.bounce.setTo(1.0, 1.0);
  }

  increaseSpeed(level) {
    let speedMultiplier = level / 100 + 1;
    this.body.velocity.x *= speedMultiplier;
    this.body.velocity.y *= speedMultiplier;
  }

  update() {
    super.update();
  }
}

