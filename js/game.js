
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

var emitter;

function preload() {

    game.load.image('diamond', 'assets/sprites/diamond.png');

}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = 0xffffff;

    emitter = game.add.emitter(0, 0, 100);

    emitter.makeParticles('diamond');
    emitter.gravity = 200;

    game.input.onDown.add(particleBurst, this);

}

function particleBurst(pointer) {
    emitter.x = pointer.x;
    emitter.y = pointer.y;

    emitter.start(true, 2000, null, 10);
}
