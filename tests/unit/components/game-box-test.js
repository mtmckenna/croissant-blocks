import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('game-box', 'Unit | Component | game box');

test('opening the menu pauses the game', function(assert) {

  var component = this.subject();
  component.didInsertElement();

  assert.equal(component.game.paused, false);

  component.send('toggleMenu');
  assert.equal(component.game.paused, true);
});
