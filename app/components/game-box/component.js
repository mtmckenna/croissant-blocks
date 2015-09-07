import Ember from 'ember';
import BrickBreaking from '../../game/states/brick-breaking';

/*global Phaser */

export default Ember.Component.extend({

  currentBall: 'croissant',
  audioEnabled: false,

  actions: {
    toggleMenu: function() {
      this.toggleProperty('showingMenu');
      this.game.paused = this.get('showingMenu');
    },

    toggleAudio: function(enabled) {
      this.set('audioEnabled', enabled);
      this.brickBreaking.toggleAudio(enabled);
    },


    changeBall: function(ball) {
      this.set('currentBall', ball);
      this.brickBreaking.changeBall(ball);
    }
  },

  didInsertElement: function() {
    let game = new Phaser.Game(160,
                               284,
                               Phaser.AUTO,
                               'phaser-croissant-blocks',
                               {
                                 preload: this.preload.bind(this),
                                 create: this.create.bind(this)
                               },
                               null,
                               false,
                               false);

    this.set('game', game);
    this.addStates();
  },

  addStates: function() {
    this.brickBreaking = this.game.state.add('brick-breaking', new BrickBreaking(this.game, this.get('level'), this.get('currentBall')));
  },

  preload: function() {
    window.game = this.game;
    this.game.load.crossOrigin = 'Anonymous';
  },

  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVeritcally = true;
    this.game.state.start('brick-breaking');
  },

  showingMenu: false
});
