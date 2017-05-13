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

IdiomApp.Boot = function (game) {

};

IdiomApp.Boot.prototype = {

    init: function () {
        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        //this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        //this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        //this.load.image('preloaderBar', 'images/preloadr_bar.png');

    },

    create: function () {

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};
