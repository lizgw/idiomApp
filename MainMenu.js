
IdiomApp.MainMenu = function (game) {
	this.playButton = null;
	this.quizButton = null;
	this.background = null;
};

IdiomApp.MainMenu.prototype = {

	create: function () {
		this.background = this.add.sprite(0, 0, "gradientBkgd");
		
		var style = { font: "65px Baloo", fill: "#ffffff", align: "center" };
		var text = this.add.text(Math.round(this.world.centerX), 100, "Idioms!", style);
		text.anchor.setTo(0.5);
		
		this.playButton = this.add.button(this.world.centerX, 300, 'learnBtn', this.gotoLearn, this);
		this.playButton.anchor.setTo(0.5);
		
		this.quizButton = this.add.button(this.world.centerX, 410, "gotoQuizBtn", this.gotoQuiz, this);
		this.quizButton.anchor.setTo(0.5);
	},
	
	gotoQuiz: function() {
		this.state.start("Quiz");
	},

	gotoLearn: function (pointer) {
		this.state.start('Learn');
	}

};
