import Ember from 'ember';
import BrickBreaking from '../../game/states/brick-breaking';

/*global Phaser */

export default Ember.Component.extend({

  currentBall: 'croissant',
  audioEnabled: false,
  showingMenu: false,

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
    },

    playerWon: function() {
      this.sendAction('goToNextLevel');
    },

    playerDied: function() {
      this.game.state.restart();
    }
  },

  didInsertElement() {
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

    window.game = game;

  },

  didRender: function() {
    if (!this.game.state.current) { return; }
    this.addStates();
  },

  addStates: function() {
    let levelName = `brick-breaking-level-${this.get('level')}`;

    if (this.game.state.current !== levelName) {
      this.clearCurrentLevel(levelName);
      this.startNewLevel(levelName);
    }

  },

  clearCurrentLevel(levelName) {
    this.game.state.clearCurrentState();
    this.game.state.remove(this.game.state.current);
  },

  startNewLevel(levelName) {
    this.brickBreaking = this.game.state.add(levelName, new BrickBreaking(this.game, this.get('level'), this.get('currentBall')));
    this.brickBreaking.targetObject = this;
    window.brickBreaking = this.brickBreaking;

    this.game.state.start(levelName);
  },

  preload: function() {
    this.game.load.crossOrigin = 'Anonymous';
    this.game.load.script('webfont', '/assets/js/webfontloader.js');
    this.configureWebFonts();
  },

  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVeritcally = true;
  },

  configureWebFonts() {
    window.WebFontConfig = {
      custom: {
        families: ['VT323'],
        urls: ['/assets/croissant-blocks.css']
      },
      active: () => {
        this.addStates();
      }
    };
  }
});
