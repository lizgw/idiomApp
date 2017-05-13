
IdiomApp.MainMenu = function (game) {

	this.playButton = null;

};

IdiomApp.MainMenu.prototype = {

	create: function () {
		this.stage.backgroundColor = "#daebff";
		
		var style = { font: "65px Arial", fill: "#664bd8", align: "center" };
		var text = this.add.text(Math.round(this.world.centerX), 200, "Idiom App", style);
		text.anchor.setTo(0.5);
		
		this.playButton = this.add.button(this.world.centerX, 300, 'playBtn', this.startGame, this);
		this.playButton.anchor.setTo(0.5);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	And start the actual game
		this.state.start('Game');

	}

};
