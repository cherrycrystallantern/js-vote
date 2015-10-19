var questionData = {
  "mTitle": "This is main title",
  "mInfo": "This is main information",
  "mPic": "This is main title picturl url",
  "question": [ {
    "id":1,
    "qTitle": "Question1 title",
    "qInfo": "Question1 information",
    "qPic": "Question1 Picture URL",
    "qChoice": "s",
    "qOption":  {
      "1": "This is Question1 Option1",
      "2": "This is Question1 Option2",
      "3": "This is Question1 Option3"
    }
  }, {
    "id":2,
    "qTitle": "Question2 title",
    "qInfo": "Question2 information",
    "qPic": "Question2 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "1": "This is Question2 Option1",
      "2": "This is Question2 Option2",
      "3": "This is Question2 Option3"
    }
  }, {
    "id":3,
    "qTitle": "Question3 title",
    "qInfo": "Question3 information",
    "qPic": "Question3 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "1": "This is Question3 Option1",
      "2": "This is Question3 Option2",
      "3": "This is Question3 Option3"
    }
  }, {
    "id":4,
    "qTitle": "Question4 title",
    "qInfo": "Question4 information",
    "qPic": "Question4 Picture URL",
    "qChoice": "s",
    "qOption":  {
      "1": "This is Question4 Option1",
      "2": "This is Question4 Option2",
      "3": "This is Question4 Option3"
    }
  }, {
    "id":5,
    "qTitle": "Question5 title",
    "qInfo": "Question5 information",
    "qPic": "Question5 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "1": "This is Question5 Option1",
      "2": "This is Question5 Option2",
      "3": "This is Question5 Option3"
    }
  }
 ]
}
;

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
  formStr = formStr + '<label for="' + i + '">' + v + '</label><input type=' + inputType + ' name="' + questionIdNow + '" id="' + i + '" /><br>';
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
    //console.log(tmp3);
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

function voteTheAnswer(answerTree) {
  console.log("Vote the answer : ", answerTree);
}

$(document).ready(function() {
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
    console.log('you clicked the #button_vote');
    console.log(questionTree.question);
    var flag = 0;
    $.each(questionTree.question, function(k, v) {
      //console.log(answerTree[ v.id ]);
      if (typeof answerTree[ v.id ] == 'undefined' || answerTree[ v.id ].length == 0) {
        console.log('questions ' + v.id + ' have no answer');
        flag = 1;
      }
    });
    if (!flag) {
      voteTheAnswer(answerTree);
    }
  });

  $("#button_reset").click(function() {
    console.log('you clicked the #button_reset');
  });

  $("#button_test").click(function() {
    console.log('you clicked the #button_test');
    console.log(answerTree);
  });
});
