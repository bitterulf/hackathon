var $ = require('jQuery');

var template = require('./templates/hackathon.jade');

$( document ).ready(function() {
  $('head').append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" />')
    .append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" type="text/css" />')
    .append('<script src="http://code.jquery.com/jquery-2.1.1.min.js" />')
    .append('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" />')
    .append('<script src="/js/phaser.min.js" />')
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
      myPlayer.play();
    });
  }, 3000);
});
