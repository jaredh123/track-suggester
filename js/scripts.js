$(document).ready(function() {
  $("#run").submit(function(event) {

//True false question to verify human
    var xxx = xxx;


    var answer1 = $("#answerOne").val();
    var answer2 = $("#answerTwo").val();
    var answer3 = $("#answerThree").val();
    var answer4 = $("#answerFour").val();
    var answer5 = $("#answerFive").val();

    var determination = function() {
      if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }
      else if (xxx) {
        return xxx;
      }

      else {
        return "Error";
      }
    };


    var result = determination();
    alert(result);
    event.preventDefault();
  });
});
