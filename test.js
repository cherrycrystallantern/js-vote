a = 0;
b = 0;
c = 0;
$( document ).ready( function() {

  $( "#button_test" ).click( function() {
    $( "input" ).each( function( k,v ) {

      alert( $( this ).attr( "id" ) + " " + $( this ).prop('checked'));

    } );
  $( "#b" ).text( b );
} );} );
