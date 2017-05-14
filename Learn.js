IdiomApp.Learn = function (game) {};

var idiomText;
var defText;
var idiomNum;

var nextBtn;
var frontProgressBar;
var percentage;

var emitter;

IdiomApp.Learn.prototype = {
	create: function () {
		var background = this.add.sprite(0, 0, "gradientBkgd");
		
		idiomNum = 0;
		
		var idiomStyle = { font: "72px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		var defStyle = { font: "56px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		
		var menuText = this.add.text(725, 20, "Quit to Menu", {font: "24px Baloo", fill: "#ffffff"});
		menuText.anchor.setTo(0.5);
		menuText.inputEnabled = true;
		menuText.events.onInputDown.add(this.gotoMenu, this);
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum], idiomStyle);
		idiomText.anchor.setTo(0.5);
		
		defText = this.add.text(this.world.centerX, 220, IdiomApp.defintionsList[idiomNum], defStyle);
		defText.anchor.setTo(0.5);
		
		nextBtn = this.add.button(this.world.centerX, 400, "nextBtn", this.nextIdiom, this);
		nextBtn.anchor.setTo(0.5);
		
		var backProgressBar = this.add.sprite(50, 550, "progressEmpty");
		frontProgressBar = this.add.sprite(50, 550, "progressFilled");
		frontProgressBar.width = 0;
		
		percentage = this.add.text(this.world.centerX, 530, "0%", {font: "32px Baloo", fill: "#53bbcd", align: "center"});
		percentage.anchor.setTo(0.5);
		
		emitter = this.add.emitter(this.world.centerX, -50, 100);
		emitter.makeParticles("star");
    },
	
	nextIdiom: function (pointer) {
		idiomNum++;
		if (idiomNum < IdiomApp.idiomsList.length) {
			idiomText.text = IdiomApp.idiomsList[idiomNum];
			defText.text = IdiomApp.defintionsList[idiomNum];
			frontProgressBar.width = 700 / IdiomApp.idiomsList.length * idiomNum;
			percentage.text = Math.round(idiomNum / IdiomApp.idiomsList.length * 100) + "%";
		} else {
			frontProgressBar.width = 700;
			percentage.text = "100%";
			var finishBtn = this.add.button(this.world.centerX, 400, "gotoQuizBtn", this.gotoQuiz, this);
			finishBtn.anchor.setTo(0.5);
			this.win();
		}
		
	},
	
	gotoQuiz: function (pointer) {
		this.state.start("Quiz");
	},

    gotoMenu: function (pointer) {
		this.state.start("MainMenu");
	},
	
	win: function() {
		console.log("yay");
		emitter.start(false, 5000, 20);
		var congratsText = this.add.text(this.world.centerX, this.world.centerY, "You did it!", {font: "86px Baloo", fill: "#007d93", align: "center"});
		congratsText.anchor.setTo(0.5);
	}

};
