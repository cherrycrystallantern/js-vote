var questionData;

function plantQuestionTree(questionData) {
  var questionTree = new Object;
  questionTree = questionData;
  questionTree.firstQuestionId = questionTree.question[ 0 ].id;
  questionTree.lastQuestionId = questionTree.question[ questionTree.question.length - 1 ].id;
  questionTree.theQuestion = function(id) {
    $.each(questionTree.question, function(k, v) {
      if (v.id == id) {
        tmp = v;
      }
    }
  );
    return tmp;
  };
  return questionTree;
}


function flushQuestion(questionIdNow) {
  $("#qTitle").text(questionTree.theQuestion(questionIdNow).qTitle);
  switch (questionTree.theQuestion(questionIdNow).qChoice) {
    case "s":
      inputType = 'radio';
      break;
    case "m":
      inputType = 'checkbox';
      break;
    default:
      alert("Check InputType Error");
  }
  formStr = "";
  $.each(questionTree.theQuestion(questionIdNow).qOption, function(i, v) {
    console.log(i, answerTree[ questionIdNow ]);
    console.log($.inArray(i, answerTree[ questionIdNow ]));
    if ($.inArray(i, answerTree[ questionIdNow ]) >= 0) {
      console.log('$.inArray(i, answerTree[ questionIdNow ])');
      ifchecked = 'checked="checked"';
    } else {
      ifchecked = '';
    }
    formStr = formStr + '<label for="' + i + '">' + v + '</label><input type=' + inputType + ' name="' + questionIdNow + '" id="' + i + '" ' + ifchecked + '/><br>';
  });
  $("#qForm").html(formStr);
  ableButton();

  $("input").click(function() {
    clickOption($(this).attr("name"));
  });
}

function clickOption(clickedOption) {
    var tmp = new Array();
    $.each($("input"), function(i, v) {
      if ($(this).prop("checked")) {
        tmp.push($(this).attr("id"));
      }
    });
    answerTree[ clickedOption ] = tmp ;
    console.log(clickedOption, answerTree[ clickedOption ]);
  }


function freezeNaviButton() {
  $("#button_next").prop("disabled", true);
  $("#button_last").prop("disabled", true);
  $("#button_first").prop("disabled", true);
  $("#button_prev").prop("disabled", true);
}

function ableButton() {
  freezeNaviButton();
  if (questionIdNow < questionTree.lastQuestionId) {
    $("#button_next").prop("disabled", false);
    $("#button_last").prop("disabled", false);
  };
  if (questionIdNow > questionTree.firstQuestionId) {
    $("#button_first").prop("disabled", false);
    $("#button_prev").prop("disabled", false);
  }
}

function optionSelectCheck() {
  var flag = true;
  $.each(questionTree.question, function(k, v) {
    if (typeof answerTree[ v.id ] == 'undefined' || answerTree[ v.id ].length == 0) {
      console.log('questions ' + v.id + ' have no answer');
      flag = false;
    }
  });
  return flag;
}

function getTheQuestion() {
  console.log("Let's get The Question");
  $.ajax({
    type:'GET',
    url:'test.json',
    dataType:"json",
    async:false,
    success:function(msg) {
      questionData = msg;
      console.log('get The Question Success !');
    },
    error:function() {
      console.log('get The Question Failed !');
    }
  });
}

function voteTheAnswer() {
  console.log("Vote the answer : ", answerTree);
  $.ajax({
    type:'POST',
    url:'test.php',
    data:{
      vote:answerTree
    },
    success:function(msg) {
      console.log(msg);
    },
    error:function() {
      alert('Vote Failed !');
    }
  });
}



$(document).ready(function() {
  getTheQuestion();
  questionTree = plantQuestionTree(questionData);
  questionIdNow = questionTree.firstQuestionId;
  answerTree = new Array();
  var jsVoteFrame = '<h3 id="mTitle">Loading title by js</h3><h5 id="qTitle">Loading Question by js</h5><form id="qForm">Loading Option by js</form>';
  $("#js-vote").html(jsVoteFrame);
  $("#mTitle").text(questionTree.mTitle);
  flushQuestion(questionIdNow);

  $("#button_first").click(function() {
    questionIdNow = questionTree.firstQuestionId ;
    flushQuestion(questionIdNow);
  });

  $("#button_prev").click(function() {
    questionIdNow = questionIdNow - 1;
    flushQuestion(questionIdNow);
  });

  $("#button_next").click(function() {
    questionIdNow = questionIdNow + 1;
    flushQuestion(questionIdNow);
  });

  $("#button_last").click(function() {
    questionIdNow = questionTree.lastQuestionId;
    flushQuestion(questionIdNow);
  });

  $("#button_vote").click(function() {
    if (optionSelectCheck()) {
      voteTheAnswer();
    }else {
      console.log('you should answer all the question before vote');
    }
  });

  $("#button_reset").click(function() {
    console.log('you clicked the #button_reset');
    answerTree = new Array();
    questionIdNow = questionTree.firstQuestionId;
    flushQuestion(questionIdNow);
  });

  $("#button_test").click(function() {
    console.log('you clicked the #button_vote');
    console.log(optionSelectCheck());
  });
});
