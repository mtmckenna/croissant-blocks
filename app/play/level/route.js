import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return parseInt(params.level_id);
  },

  actions: {
    goToNextLevel: function() {
      let nextLevel = this.currentModel + 1;
      this.transitionTo('play.level', nextLevel);
    }
  }
});
