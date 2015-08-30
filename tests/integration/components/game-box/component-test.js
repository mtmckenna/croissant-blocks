import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('game-box', 'Integration | Component | game box', {
  integration: true
});

test('clicking on the hamburger opens the menu', function(assert) {
  this.render(hbs`{{game-box}}`);

  assert.equal(this.$().find('.game-menu').length, 0);

  this.$().find('.game-menu-button').click();

  assert.equal(this.$().find('.game-menu').length, 1);
});
