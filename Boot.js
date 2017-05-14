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
		"To hit the hay",
		"To talk face to face",
		"Barking up the wrong tree",
		"To cut corners",
		"To kill two birds with one stone",
		"Once in a blue moon",
		"The whole nine yards",
		"To cost an arm and a leg",
		"To add insult to injury",
		"To go the extra mile",
		"To dig in your heels",
		"To step up your game"
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
		"To go to sleep",
		"To talk in person",
		"Looking in the wrong place",
		"To do something poorly/quickly to save time/money",
		"To accomplish two tasks at once",
		"Something that happens rarely",
		"Everything",
		"Something very expensive",
		"To make a situation worse",
		"To put in extra effort",
		"To refuse to compromise",
		"To start working harder/better"
	]
};

IdiomApp.Boot = function (game) {};

IdiomApp.Boot.prototype = {
    init: function () {
        this.input.maxPointers = 1;

		this.scale.pageAlignHorizontally = true;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setMinMax(400, 300, 800, 600);
		//this.scale.forceLandscape = true;
		this.scale.pageAlignHorizontally = true;
    },

    preload: function () {
        this.load.image('preloaderBar', 'assets/progress_big.png');
    },

    create: function () {
        this.state.start('Preloader');
    }

};
