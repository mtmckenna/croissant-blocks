import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'croissant-blocks/tests/helpers/start-app';

module('Acceptance | menu', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('menu pauses game', function(assert) {
  visit('/play/1');

  andThen(function() {
    assert.equal(find('.game-menu').length, 0);
    find('.game-menu-hamburger').click();
    assert.equal(find('.game-menu').length, 1);
  });
});
