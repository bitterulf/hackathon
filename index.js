$ = require('jquery');

$( document ).ready(function() {
  $('head').append('<link rel="stylesheet" href="css/main.css" type="text/css" />')
    .append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" />')
    .append('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" type="text/css" />')
    .append('<script src="http://code.jquery.com/jquery-2.1.1.min.js" />')
    .append('<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" />');

  $( 'title' ).html('hackathon');
  $( 'body' ).html('<div class="container"><div class="col-md-12">hackathon</div></div>');
});
