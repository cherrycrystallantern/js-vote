title = "This it title";
question = new Array();
question[ 0 ] = new Array();
question[ 0 ][ "title" ] = "This is Q0";

question[ 0 ][ "option" ] = new Array();
question[ 0 ][ "vote" ] = new Array();
question[ 0 ][ "option" ][ 0 ] = "This is Q0 option0";
question[ 0 ][ "option" ][ 1 ] = "This is Q0 option1";
question[ 0 ][ "option" ][ 2 ] = "This is Q0 option2";
/*
question[1] = new Array();
//question[1]['title'] = "This is Q1";
question[1]['option0'] = "This is Q1 option0";
question[1]['option1'] = "This is Q1 option1";
question[1]['option2'] = "This is Q1 option2";

question[2] = new Array();
//question[2]['title'] = "This is Q2";
question[2]['option0'] = "This is Q2 option0";
question[2]['option1'] = "This is Q2 option1";
question[2]['option2'] = "This is Q2 option2";

question[3] = new Array();
//question[3]['title'] = "This is Q2";
question[3]['option0'] = "This is Q3 option0";
question[3]['option1'] = "This is Q3 option1";
question[3]['option2'] = "This is Q3 option2";
*/
questionNow = 0;
formStr = "";

$( document ).ready( function() {

  $( "#title" ).html( title );

for ( var i = 0; i < question[ 0 ][ "option" ].length; i++ ) {

  //formStr = formStr + '<label for="option' + i + '">'+question[0]['option'][i]+'</label><input type="radio" name="option' + i + '" id="option' + i + '" checked="unchecked" /><br>';
  formStr = formStr + '<label for="option' + i + '">' + question[ 0 ][ "option" ][ i ] + '</label><input type="radio" name="option' + i + '" id="option' + i + '" /><br>';
}
$( "#optionForm" ).html( formStr );

  $( "#button_vote" ).click( function() {

for ( var i = 0; i < question[ 0 ][ "option" ].length; i++ ) {
  optionId = "#option" + i;

  //alert( optionId + " " + $( optionId ).attr( "id" ) + " " + $( optionId ).prop("checked"));
if ( $( optionId ).prop( "checked" ) ) {
  question[ 0 ][ "vote" ][ i ] = 1;
} else {
  question[ 0 ][ "vote" ][ i ] = 0;
}
}

  } );

  $( "#button_test" ).click( function() {
    $( "input" ).each( function( key, value ) {

      //alert( $( this ).attr( "id" ) + " " + $( this ).prop("checked"));

    } );
    $( "#b" ).text( b );
  } )

;} );
