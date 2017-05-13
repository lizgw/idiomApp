IdiomApp.Quiz = function (game) {};

var idiomText;
var idiomNum;

var choices = [];
var choiceStyle;

var frontProgressBar;
var percentage;
var incorrectStyle = {font: "42px Baloo", fill: "#de3939"};

IdiomApp.Quiz.prototype = {
	create: function() {
		var background = this.add.sprite(0, 0, "gradientBkgd");
		
		choiceStyle = { font: "42px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		var idiomStyle = { font: "72px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		
		idiomNum = 0;
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum], idiomStyle);
		idiomText.anchor.setTo(0.5);
		
		this.createChoices();
		this.generateChoices();
		
		var menuText = this.add.text(725, 20, "Quit to Menu", {font: "24px Baloo", fill: "#ffffff"});
		menuText.anchor.setTo(0.5);
		menuText.inputEnabled = true;
		menuText.events.onInputDown.add(this.gotoMenu, this);
		
		var backProgressBar = this.add.sprite(50, 550, "progressEmpty");
		frontProgressBar = this.add.sprite(50, 550, "progressFilled");
		frontProgressBar.width = 0;
		
		percentage = this.add.text(this.world.centerX, 530, "0%", {font: "32px Baloo", fill: "#53bbcd", align: "center"});
		percentage.anchor.setTo(0.5);
	},
	
	createChoices: function() {
		for (i = 0; i < 3; i++) {
			choices[i] = this.add.text(50, 200 + 50 * i, "", choiceStyle);
			choices[i].inputEnabled = true;
		}
	},
	
	generateQuestion: function() {
		idiomText.text = IdiomApp.idiomsList[idiomNum];
	},
	
	generateChoices: function() {	
		var randDef1 = this.rnd.pick(IdiomApp.defintionsList);
		var randDef2 = this.rnd.pick(IdiomApp.defintionsList);
		var correctDef = IdiomApp.defintionsList[idiomNum];
		
		var answerChoices = [randDef1, randDef2, correctDef];
		console.log(answerChoices);
		
		for (i = 0; i < 3; i++) {
			choices[i].text = answerChoices[i];
			choices[i].events.onInputDown.removeAll(this);
			choices[i].events.onInputDown.add(this.checkAnswer, this, 0, choices[i]);
			choices[i].setStyle(choiceStyle);
		}
	},
	
	checkAnswer: function(pointer, obj, textObj) {
		console.log("check " + textObj.text);
		if (textObj.text == IdiomApp.defintionsList[idiomNum]) {
			console.log("yes!");
			idiomNum++;
			if (idiomNum < IdiomApp.defintionsList.length) {
				frontProgressBar.width = 700 / IdiomApp.idiomsList.length * idiomNum;
				percentage.text = Math.round(idiomNum / IdiomApp.idiomsList.length * 100) + "%"
				this.generateQuestion();
				this.generateChoices();
			} else {
				frontProgressBar.width = 700;
				percentage.text = "100%"
				console.log("the end!");
			}
		} else {
			console.log("no!");
			textObj.setStyle(incorrectStyle);
		}
	},
	
	gotoMenu: function() {
		this.state.start("MainMenu");
	}
};