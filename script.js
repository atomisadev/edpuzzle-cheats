var popup = null;

function init() {
  if (/edpuzzle\.com\/assignments\/.{1,30}\/watch/.test(window.location.href)) {
    getAssignment();
  }
}

function getAssignment() {
  var assignmentId = window.location.href.split("/")[4];

  var url = `https://edpuzzle.com/api/v3/assignments/${assignmentId}`;
  httpGet(url, function () {
    var assignment = JSON.parse(this.responseText);

    openPopup(assignment);
  });
}

function openPopup(assignment) {
  popup = window.open("", "", "width=600,height=400");
  getQuestions(assignment.medias[0].questions);
}

function getQuestions(questions) {
  questions.forEach((question) => {
    question.choices.forEach((choice) => {
      if (choice.isCorrect) {
        popup.document.write(`<li>${choice.body} &#10004;</li>`);
      }
    });
  });
}

init();
