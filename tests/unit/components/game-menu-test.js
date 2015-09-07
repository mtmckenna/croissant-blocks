import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('game-menu', 'Unit | Component | game menu');

test('audioText', function(assert) {
  var component = this.subject();

  assert.equal(component.get('audioText'), 'Enable Audio');
  component.set('audioEnabled', true);
  assert.equal(component.get('audioText'), 'Disable Audio');
});

test('ballText', function(assert) {
  var component = this.subject();

  assert.equal(component.get('ballText'), 'Play as basketball');
  component.set('selectedBall', 'basketball');
  assert.equal(component.get('ballText'), 'Play as croissant');
});

test('nextBall', function(assert) {
  var component = this.subject();

  assert.equal(component.get('nextBall'), 'basketball');
  component.set('selectedBall', 'basketball');
  assert.equal(component.get('nextBall'), 'croissant');
});
