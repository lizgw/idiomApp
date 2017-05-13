
IdiomApp.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

};

IdiomApp.Preloader.prototype = {

	preload: function () {

		//	set assets for preloader
		//this.background = this.add.sprite(0, 0, 'preloaderBackground');
		//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite
		//this.load.setPreloadSprite(this.preloadBar);

		// load assets
		this.load.image('playBtn', 'assets/btn_play.png');
		this.load.image("nextBtn", "assets/btn_next.jpg");
		this.load.image("gotoQuizBtn", "assets/btn_gotoquiz.jpg");
	},

	create: function () {
		this.state.start('MainMenu');
	}
};
