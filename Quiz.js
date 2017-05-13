IdiomApp.Quiz = function (game) {};

var idiomText;
var idiomNum;

var choices = [];

IdiomApp.Quiz.prototype = {
	create: function() {
		this.stage.backgroundColor = "#fff1f9";
		
		idiomNum = 0;
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum]);
		idiomText.anchor.setTo(0.5);
		
		this.createChoices();
		this.generateChoices();
		
		var menuBtn = this.add.button(this.world.centerX, 510, "gotoMenuBtn", this.gotoMenu, this);
		menuBtn.anchor.setTo(0.5);
	},
	
	createChoices: function() {
		for (i = 0; i < 3; i++) {
			choices[i] = this.add.text(50, 200 + 50 * i, "");
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
			choices[i].events.onInputDown.add(this.checkAnswer, this, 0, choices[i].text);
		}
	},
	
	checkAnswer: function(pointer, obj, defText) {
		console.log("check " + defText);
		if (defText == IdiomApp.defintionsList[idiomNum]) {
			console.log("yes!");
			idiomNum++;
			if (idiomNum < IdiomApp.defintionsList.length) {
				this.generateQuestion();
				this.generateChoices();
			} else {
				console.log("the end!");
				var menuButton = this.add.button(this.world.centerX, 500, "gotoMenuBtn", this.gotoMenu, this);
				menuButton.anchor.setTo(0.5);
			}
		} else {
			console.log("no!");
		}
	},
	
	gotoMenu: function() {
		this.state.start("MainMenu");
	}
};