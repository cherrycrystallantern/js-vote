title = 'This it title';
question = new Array();
question[0] = new Array();
question[0]['title'] = "This is Q0";
question[0]['option0'] = "This is Q0 option0";
question[0]['option1'] = "This is Q0 option1";
question[0]['option2'] = "This is Q0 option2";

question[1] = new Array();
question[1]['title'] = "This is Q1";
question[1]['option0'] = "This is Q1 option0";
question[1]['option1'] = "This is Q1 option1";
question[1]['option2'] = "This is Q1 option2";

question[2] = new Array();
question[2]['title'] = "This is Q2";
question[2]['option0'] = "This is Q2 option0";
question[2]['option1'] = "This is Q2 option1";
question[2]['option2'] = "This is Q2 option2";

question[3] = new Array();
question[3]['title'] = "This is Q2";
question[3]['option0'] = "This is Q3 option0";
question[3]['option1'] = "This is Q3 option1";
question[3]['option2'] = "This is Q3 option2";

questionNow=0;

$( document ).ready( function() {

  $('#title').html(title);



  $( "#button_test" ).click( function() {
    $( "input" ).each( function( key,value ) {



      //alert( $( this ).attr( "id" ) + " " + $( this ).prop('checked'));

    } );
  $( "#b" ).text( b );
} );} );
