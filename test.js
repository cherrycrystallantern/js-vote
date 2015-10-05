a = 0;
b = 0;
c = 0;
$( document ).ready( function() {
  $( "#a" ).text( "aaa" );

  $( "#button" ).click( function() {
    $( "input" ).each( function( k,v ) {

      //alert( $( this ).attr( "id" ) + " " + $( this ).val(  ) );
       $( this ).removeattr( "checked" );
    } );
  $( "#b" ).text( b );
} );} );
