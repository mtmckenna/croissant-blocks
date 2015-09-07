import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['game-menu'],
  ballOptions: ['croissant', 'basketball'],
  audioEnabled: false,
  selectedBall: 'croissant',

  audioText: Ember.computed('audioEnabled', {
    get: function() {
      return ((this.get('audioEnabled')) ? 'Disable Audio' : 'Enable Audio');
    }
  }),

  ballText: Ember.computed('selectedBall', {
    get: function() {
      return `Play as ${this.get('selectedBall')}`;
    }
  }),

  actions: {
    toggleMenu: function() {
      this.sendAction('toggleMenu');
    },

    toggleAudio: function() {
      this.set('audioEnabled', !this.get('audioEnabled'));
      this.sendAction('toggleAudio', this.get('audioEnabled'));
    },

    changeBall: function() {
      let options = this.get('ballOptions');
      let index = options.indexOf(this.get('selectedBall')) + 1;

      if (index >= options.length) { index = 0; }

      let ball = this.get('ballOptions')[index];

      this.set('selectedBall', ball);
      this.sendAction('changeBall', ball);
    }
  }
});
