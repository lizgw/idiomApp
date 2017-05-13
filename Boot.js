var IdiomApp = {
	idiomsList: [
		"To kick the bucket",
		"To have a blast",
		"To sit tight",
		"To have a sweet tooth",
		"To pull the plug",
		"Ballpark figure",
		"It's raining cats and dogs!",
		"To feel under the weather",
		"A piece of cake",
		"Swamped",
		"To hit the hay"
	],
	defintionsList: [
		"To die",
		"To have fun",
		"To wait",
		"To want dessert/something sweet",
		"To stop something",
		"An estimate",
		"It's raining a lot!",
		"To feel sick",
		"A task that is easy to do",
		"Very busy",
		"To go to sleep"
	]
};

IdiomApp.Boot = function (game) {};

IdiomApp.Boot.prototype = {
    init: function () {
        this.input.maxPointers = 1;

        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(400, 300, 800, 600);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

    preload: function () {
        this.load.image('preloaderBar', 'assets/progress_big.png');
    },

    create: function () {
        this.state.start('Preloader');
    }

};
