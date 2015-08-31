import { test } from 'ember-qunit';
import BrickBreaking from 'croissant-blocks/game/states/brick-breaking';

/*global Phaser */

let game = new Phaser.Game(160,
                            284,
                            Phaser.AUTO,
                            'phaser-test-croissant-blocks');


test('#rowForBrickIndex - first row', function(assert) {
  let brickBreaking = new BrickBreaking(game);
  let row = brickBreaking.rowForBrickIndex(0);

  assert.equal(row, 0);
});

test('#rowForBrickIndex - second row', function(assert) {
  let brickBreaking = new BrickBreaking(game);
  let row = brickBreaking.rowForBrickIndex(9);

  assert.equal(row, 1);
});

test('#colForBrickIndex - first col', function(assert) {
  let brickBreaking = new BrickBreaking(game);
  let col = brickBreaking.colForBrickIndex(0);

  assert.equal(col, 0);
});

test('#colForBrickIndex - second col', function(assert) {
  let brickBreaking = new BrickBreaking(game);
  let col = brickBreaking.colForBrickIndex(10);

  assert.equal(col, 1);
});
