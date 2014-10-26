var $ = require('jQuery');

var template = require('./templates/hackathon.jade');

var start3d = function() {
  if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("", "/assets/3d/scene.babylon", engine, function (newScene) {
        // Wait for textures and shaders to be ready
        newScene.executeWhenReady(function () {
            // Attach camera to canvas inputs
            newScene.activeCamera.attachControl(canvas);

            // Once the scene is loaded, just register a render loop to render it
            engine.runRenderLoop(function() {
                newScene.render();
            });
        });
    }, function (progress) {
        // To do: give progress feedback to user
    });
  }
};

$( document ).ready(function() {
  $('head').append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" />')
    .append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" type="text/css" />')
    .append('<script src="http://code.jquery.com/jquery-2.1.1.min.js" />')
    .append('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" />')
    .append('<script src="/js/phaser.min.js" />')
    .append('<script src="/js/babylon.1.14.js" />')
    .append('<link rel="stylesheet" href="//vjs.zencdn.net/4.9/video-js.css" type="text/css" />')
    .append('<script src="//vjs.zencdn.net/4.9/video.js" />')
    .append('<script src="/js/game.js" />')
    .append('<link rel="stylesheet" href="css/main.css" type="text/css" />');

  $( 'title' ).html('hackathon');
  $( 'body' ).html(template());
  setTimeout(function(){
    videojs("example_video_1").ready(function(){
      var myPlayer = this;
      myPlayer.currentTime(30);
      // myPlayer.play();
    });
    start3d();
  }, 3000);
});
