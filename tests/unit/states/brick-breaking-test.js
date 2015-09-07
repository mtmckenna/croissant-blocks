import { test } from 'ember-qunit';
import BrickBreaking from 'croissant-blocks/game/states/brick-breaking';

test('#rowForBrickIndex - first row', function(assert) {
  let brickBreaking = new BrickBreaking({});
  let row = brickBreaking.rowForBrickIndex(0);

  assert.equal(row, 0);
});

test('#rowForBrickIndex - second row', function(assert) {
  let brickBreaking = new BrickBreaking({});
  let row = brickBreaking.rowForBrickIndex(9);

  assert.equal(row, 1);
});

test('#colForBrickIndex - first col', function(assert) {
  let brickBreaking = new BrickBreaking({});
  let col = brickBreaking.colForBrickIndex(0);

  assert.equal(col, 0);
});

test('#colForBrickIndex - second col', function(assert) {
  let brickBreaking = new BrickBreaking({});
  let col = brickBreaking.colForBrickIndex(9);

  assert.equal(col, 1);
});
