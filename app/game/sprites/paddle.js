/*global Phaser */
export default class extends Phaser.Sprite {
  constructor(game, x = 0, y = 0) {
    super(game, x, y, 'paddle');
    this.configurePosition();
    this.configurePhysics();
    game.add.existing(this);
    this.configureInput();
  }

  configurePosition() {
    this.anchor.setTo(0.5, 0.5);
    this.x = this.game.world.centerX;
    this.setYPosition();
  }

  setYPosition() {
    let bottomOffset = 48;
    this.y = this.game.world.height - bottomOffset;
  }

  configurePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(0.0, 0.0);
  }

  configureInput() {
    this.inputEnabled = true;
    this.input.allowVerticalDrag = false;
    this.input.enableDrag(true);
  }

  update() {
    this.setYPosition();
  }
}

