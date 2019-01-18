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
      if ((answer1 == 0) || (answer2 == 0) || (answer3 == 0)) {
        return "Please answer all questions to determine results";
      }

//Answers 1xx
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

//Answers 2xx
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

//Answers 3xx
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }
      else if ((answer1 == xxxxx) && (answer2 == xxxxx) && (answer3 == xxxxx)) {
        return "yyyyy";
      }

//Error message
      else {
        return "error";
      }
    };



    var result = determination();
    alert(result);
    event.preventDefault();
  });
});
