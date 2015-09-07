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
      return `Play as ${this.get('nextBall')}`;
    }
  }),

  nextBall: Ember.computed('selectedBall', {
    get: function() {
      let options = this.get('ballOptions');
      let index = options.indexOf(this.get('selectedBall')) + 1;

      if (index >= options.length) { index = 0; }

      return this.get('ballOptions')[index];
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
      let ball = this.get('nextBall');
      this.set('selectedBall', ball);
      this.sendAction('changeBall', ball);
    }
  }
});
