
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
      "o1": "This is Question1 Option1",
      "o2": "This is Question1 Option2",
      "o3": "This is Question1 Option3"
    }
  }, {
    "id":2,
    "qTitle": "Question2 title",
    "qInfo": "Question2 information",
    "qPic": "Question2 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "o1": "This is Question2 Option1",
      "o2": "This is Question2 Option2",
      "o3": "This is Question2 Option3"
    }
  }, {
    "id":3,
    "qTitle": "Question3 title",
    "qInfo": "Question3 information",
    "qPic": "Question3 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "o1": "This is Question3 Option1",
      "o2": "This is Question3 Option2",
      "o3": "This is Question3 Option3"
    }
  }, {
    "id":4,
    "qTitle": "Question4 title",
    "qInfo": "Question4 information",
    "qPic": "Question4 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "o1": "This is Question4 Option1",
      "o2": "This is Question4 Option2",
      "o3": "This is Question4 Option3"
    }
  }, {
    "id":5,
    "qTitle": "Question5 title",
    "qInfo": "Question5 information",
    "qPic": "Question5 Picture URL",
    "qChoice": "m",
    "qOption":  {
      "o1": "This is Question5 Option1",
      "o2": "This is Question5 Option2",
      "o3": "This is Question5 Option3"
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
  formStr = "";
  $.each(questionTree.theQuestion(questionIdNow).qOption, function(i, v) {
  formStr = formStr + '<label for="option' + i + '">' + v + '</label><input type="radio" name="option' + i + '" id="option' + i + '" /><br>';
});
  $("#qForm").html(formStr);
  ableButton();
}

function freezeButton() {
  $(":button").prop("disabled", true);
}

function ableButton() {
  freezeButton();
  if (questionIdNow < questionTree.lastQuestionId) {
    $("#button_next").prop("disabled", false);
    $("#button_last").prop("disabled", false);
  };
  if (questionIdNow > questionTree.firstQuestionId) {
    $("#button_first").prop("disabled", false);
    $("#button_prev").prop("disabled", false);
  }
}

$(document).ready(function() {
  questionTree = plantQuestionTree(questionData);
  questionIdNow = questionTree.firstQuestionId;

  var jsVoteFrame = '<h3 id="mTitle">Loading title</h3><h5 id="qTitle">Loading Question to ask</h5><form id="qForm">Loading Form to select option</form>';
  $("#js-vote").html(jsVoteFrame);
  $("#mTitle").text(questionTree.mTitle);
  console.log(questionTree.theQuestion(questionIdNow));
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

});
