import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['game-menu'],
  ballOptions: ['croissant', 'basketball'],

  actions: {
    toggleMenu: function() {
      this.sendAction('toggleMenu');
    },
    changeBall: function(selectedIndex) {
      let ball = this.get('ballOptions').objectAt(selectedIndex);
      this.sendAction('changeBall', ball);
    }
  }
});
