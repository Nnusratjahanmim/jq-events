$(document).ready(function(){

// .bind()
$( "p" ).bind( "click", function( event ) {
  var str = "( " + event.pageX + ", " + event.pageY + " )";
  $( "span" ).text( "Click happened! " + str );
});
$( "p" ).bind( "dblclick", function() {
  $( "span" ).text( "Double-click happened in " + this.nodeName );
});
$( "p" ).bind( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "over" );
});

// metakey

$( "#checkMetaKey" ).click(function( event ) {
  $( "#display" ).text( event.metaKey );
});
// event.data


var logDiv = $( "#log" );
 
for ( var i = 0; i < 5; i++ ) {
  $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
    var msgs = [
      "button = " + $( this ).index(),
      "event.data.value = " + event.data.value,
      "i = " + i
    ];
    logDiv.append( msgs.join( ", " ) + "<br>" );
  });
}

// .focus()

$( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});




// select
$( ":input" ).select(function() {
  $( "div" ).text( "Something was selected" ).show().fadeOut( 1000 );
});



});
