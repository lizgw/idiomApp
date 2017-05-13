
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
		
		// webfont script
		this.load.script('webfont', 'http://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		// load assets
		this.load.image('learnBtn', 'assets/btn_learnMode.png');
		this.load.image("nextBtn", "assets/btn_next.png");
		this.load.image("gotoQuizBtn", "assets/btn_quizMode.png");
		this.load.image("gotoMenuBtn", "assets/btn_gotomenu.png");
		this.load.image("gradientBkgd", "assets/bkgd.jpg");
	},

	create: function () {
		this.state.start('MainMenu');
	}
};
