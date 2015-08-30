import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params.level_id;
  }
});
