import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro-screen', { path: '/' });
  this.route('play', function() {
    this.route('level', { path: ':level_id' });
  });
});

export default Router;
