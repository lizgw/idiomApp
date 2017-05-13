
IdiomApp.Learn = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
	
	
};

var idiomText;
var defText;
var idiomNum;

var nextBtn;
var frontProgressBar;
var percentage;

IdiomApp.Learn.prototype = {
	create: function () {
	 	var background = this.add.sprite(0, 0, "gradientBkgd");
		
		idiomNum = 0;
		
		var idiomStyle = { font: "72px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		var defStyle = { font: "56px Baloo", fill: "#ffffff", align: "center", wordWrap: "true", wordWrapWidth: "800" };
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum], idiomStyle);
		idiomText.anchor.setTo(0.5);
		
		defText = this.add.text(this.world.centerX, 220, IdiomApp.defintionsList[idiomNum], defStyle);
		defText.anchor.setTo(0.5);
		
		nextBtn = this.add.button(this.world.centerX, 400, "nextBtn", this.nextIdiom, this);
		nextBtn.anchor.setTo(0.5);
		
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
	
	nextIdiom: function (pointer) {
		idiomNum++;
		if (idiomNum < IdiomApp.idiomsList.length) {
			idiomText.text = IdiomApp.idiomsList[idiomNum];
			defText.text = IdiomApp.defintionsList[idiomNum];
			frontProgressBar.width = 700 / IdiomApp.idiomsList.length * idiomNum;
			percentage.text = Math.round(idiomNum / IdiomApp.idiomsList.length * 100) + "%"
		} else {
			console.log("that's all!");
			frontProgressBar.width = 700;
			percentage.text = "100%"
			var finishBtn = this.add.button(this.world.centerX, 400, "gotoQuizBtn", this.gotoQuiz, this);
			finishBtn.anchor.setTo(0.5);
		}
		
	},
	
	gotoQuiz: function (pointer) {
		this.state.start("Quiz");
	},

    gotoMenu: function (pointer) {
		this.state.start("MainMenu");
	}

};
