
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

IdiomApp.Learn.prototype = {
	create: function () {
		this.stage.backgroundColor = "#eddaff";
		
		idiomNum = 0;
		
		var idiomStyle = { font: "65px Arial", fill: "#664bd8", align: "center" };
		var defStyle = { font: "42px Arial", fill: "#36218e", align: "center" };
		
		idiomText = this.add.text(this.world.centerX, 100, IdiomApp.idiomsList[idiomNum], idiomStyle);
		idiomText.anchor.setTo(0.5);
		
		defText = this.add.text(this.world.centerX, 300, IdiomApp.defintionsList[idiomNum], defStyle);
		defText.anchor.setTo(0.5);
		
		nextBtn = this.add.button(this.world.centerX, 400, "nextBtn", this.nextIdiom, this);
		nextBtn.anchor.setTo(0.5);
		
		var menuBtn = this.add.button(this.world.centerX, 510, "gotoMenuBtn", this.gotoMenu, this);
		menuBtn.anchor.setTo(0.5);
    },
	
	nextIdiom: function (pointer) {
		idiomNum++;
		if (idiomNum < IdiomApp.idiomsList.length) {
			idiomText.text = IdiomApp.idiomsList[idiomNum];
			defText.text = IdiomApp.defintionsList[idiomNum];
		} else {
			console.log("that's all!");
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
