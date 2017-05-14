IdiomApp.Quiz = function (game) {};

var idiomText;
var idiomNum;

var choices = [];
var choiceStyle;

var frontProgressBar;
var percentage;
var incorrectStyle = { font: "42px Baloo", fill: "#de3939", align: "left", wordWrap: "true", wordWrapWidth: "750" };

var emitter;

IdiomApp.Quiz.prototype = {
	create: function() {
		var background = this.add.sprite(0, 0, "gradientBkgd");
		
		choiceStyle = { font: "42px Baloo", fill: "#ffffff", align: "left", wordWrap: "true", wordWrapWidth: "750" };
		var idiomStyle = { font: "72px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		
		idiomNum = 0;
		
		var menuText = this.add.text(725, 20, "Quit to Menu", {font: "24px Baloo", fill: "#ffffff"});
		menuText.anchor.setTo(0.5);
		menuText.inputEnabled = true;
		menuText.events.onInputDown.add(this.gotoMenu, this);
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum], idiomStyle);
		idiomText.anchor.setTo(0.5);
		
		this.initChoices();
		this.generateChoices();
		
		var backProgressBar = this.add.sprite(50, 550, "progressEmpty");
		frontProgressBar = this.add.sprite(50, 550, "progressFilled");
		frontProgressBar.width = 0;
		
		percentage = this.add.text(this.world.centerX, 530, "0%", {font: "32px Baloo", fill: "#53bbcd", align: "center"});
		percentage.anchor.setTo(0.5);
		
		emitter = this.add.emitter(this.world.centerX, -10, 100);
		emitter.makeParticles("star");
	},
	
	initChoices: function() {
		for (i = 0; i < 3; i++) {
			choices[i] = this.add.text(50, 200 + 100 * i, "", choiceStyle);
			choices[i].inputEnabled = true;
		}
	},
	
	generateQuestion: function() {
		idiomText.text = IdiomApp.idiomsList[idiomNum];
	},
	
	generateChoices: function() {	
		var randDef1 = this.rnd.between(0, IdiomApp.idiomsList.length - 1);
		var randDef2 = this.rnd.between(0, IdiomApp.idiomsList.length - 1);
		
		// make sure the two random ones are different
		while (randDef2 == randDef1) {
			randDef2 = this.rnd.between(0, IdiomApp.idiomsList.length);
		}
		// make sure the random choices aren't the correct answer
		while (randDef1 == idiomNum) {
			   randDef1 = this.rnd.between(0, IdiomApp.idiomsList.length);
		}
		while (randDef2 == idiomNum) {
			   var randDef2 = this.rnd.between(0, IdiomApp.idiomsList.length);
		}
		
		var answerChoices = [randDef1, randDef2, idiomNum]; // 3 random indexes from the definitions array
		
		for (i = 0; i < 3; i++) {			
			var randIndex = this.rnd.integerInRange(0, answerChoices.length - 1);
			while (answerChoices[randIndex] == -1) {
				randIndex = this.rnd.integerInRange(0, answerChoices.length - 1); // make sure the index hasn't been used before
			}
			
			choices[i].text = IdiomApp.defintionsList[answerChoices[randIndex]];
			choices[i].events.onInputDown.removeAll(this);
			choices[i].events.onInputDown.add(this.checkAnswer, this, 0, choices[i]);
			choices[i].setStyle(choiceStyle);
			answerChoices[randIndex] = -1;
		}
	},
	
	checkAnswer: function(pointer, obj, textObj) {
		if (textObj.text == IdiomApp.defintionsList[idiomNum]) {
			idiomNum++;
			if (idiomNum < IdiomApp.defintionsList.length) {
				frontProgressBar.width = 700 / IdiomApp.idiomsList.length * idiomNum;
				percentage.text = Math.round(idiomNum / IdiomApp.idiomsList.length * 100) + "%"
				this.generateQuestion();
				this.generateChoices();
			} else {
				frontProgressBar.width = 700;
				percentage.text = "100%"
				this.disableInput();
				this.win();
			}
		} else {
			textObj.setStyle(incorrectStyle);
		}
	},
	
	disableInput: function() {
		for (i = 0; i < choices.length; i++) {
			choices[i].inputEnabled = false;
		}
	},
	
	gotoMenu: function() {
		this.state.start("MainMenu");
	},
	
	win: function() {
		emitter.start(false, 5000, 20);
		var congratsText = this.add.text(this.world.centerX, this.world.centerY, "You did it!", {font: "86px Baloo", fill: "#007d93", align: "center"});
		congratsText.anchor.setTo(0.5);
	}
};