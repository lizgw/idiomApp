IdiomApp.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
};

IdiomApp.Preloader.prototype = {

	preload: function () {
		this.stage.backgroundColor = "#ffffff";

		//	set assets for preloader
		this.preloadBar = this.add.sprite(50, this.world.centerY - 25, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		// webfont script
		this.load.script('webfont', 'http://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		// load assets
		this.load.image('learnBtn', 'assets/btn_learnMode.png');
		this.load.image("nextBtn", "assets/btn_next.png");
		this.load.image("gotoQuizBtn", "assets/btn_quizMode.png");
		this.load.image("gradientBkgd", "assets/bkgd.jpg");
		this.load.image("progressEmpty", "assets/progress_small_empty.jpg");
		this.load.image("progressFilled", "assets/progress_small_filled.jpg");
		this.load.image("star", "assets/star.png");
	},

	create: function () {
		this.state.start('MainMenu');
	}
};
