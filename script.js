//step 1. define the name's characteristics in an object value saved in a variable to use later
let config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 300
      },
      debug: false
    }
  },
// tell phaser engine how to find the blocks of code (functions) I am providing for the game
scene: {
    preload: preload,
    create: create,
    update: update
  }
}
// step 2. define global variables that al functions can access to work with game objects
let player;
let arrows;
// step 3. PRELOAD the phaser library runs our function for preload to load all the images and audio for the game
 function preload () {
   // load a couple of image file assets to use during create
    // image() takes 2 args: string nickname for the asset, filepath to file
    this.load.image('sky', 'assets/sky.png' );
     // spritesheet() takes 3 args: string nickname for the asset, filepath to file, frame dimension
    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48})
 }
// step 4. CREATE the phaser library next runs our function for creating/laying out the game, bkgnd, create game objects, etc.
 function create () {// display a game object in the visible game stage
    // 3 args: x-coord, y-coord, asset nickname string
    this.add.image(400, 300, 'sky');
  // add another game object, this time a player-controlled object often called a sprite
    // to work with game objects in multiple stage of a scene, save a ref to obj in a global var
    // sprite() takes 3 args: x-coord, y-coord, asset nickname string
    player = this.physics.add.sprite(100, 400, "dude");
    // ask the physics sim in the engine to prevent a game object from falling off screen
    player.setCollideWorldBounds(true);
    // tell phaser we want it to monitor the arrow keys during the update loop
arrows = this.input.keyboard.createCursorKeys();
 }
// step 5. UPDATE the phaser runs itself in an endless loop calling our update function once each 1/60th of second
 function update () {//look at the global var that Phaser is saving the state of arrows inside
 // check left and right arrow keys
 if(arrows.left.isDown){
   player.setVelocityX(-160);}
else if (arrows.right.isDown){player.setVelocityX(160);}
 else {
   player.setVelocity(0);
 }
 // check up and down arrow keys
 if(arrows.up.isDown){
   player.setVelocityY(-160);}
else if (arrows.down.isDown){player.setVelocityY(160);}
 else {
  // could change vertical velocity but gravity would be messed up
 }

 }
 // step 6. create a new Phaser.Game object instance that represents our game in the browser. take variable from step 1

 let theGame = new Phaser.Game(config)