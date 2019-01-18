$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var answer1 = $("#answerOne").val();
    var answer2 = $("#answerTwo").val();
    var answer3 = $("#answerThree").val();
    var answer4 = $("#answerFour").val();
    var answer5 = $("#answerFive").val();

    var determination = function() {
      if ((answer1 == 0) || (answer2 == 0) || (answer3 == 0) || (answer4 == 0) || (answer5 == 0)) {
        return 0;
      }

//Answers 1xx
      else if ((answer1 == 1) && (answer2 == 1) && (answer3 == 1)) {
        return 1;
      }
      else if ((answer1 == 1) && (answer2 == 1) && (answer3 == 2)) {
        return 2;
      }
      else if ((answer1 == 1) && (answer2 == 1) && (answer3 == 3)) {
        return 4;
      }

      else if ((answer1 == 1) && (answer2 == 2) && (answer3 == 1)) {
        return 1;
      }
      else if ((answer1 == 1) && (answer2 == 2) && (answer3 == 2)) {
        return 1;
      }
      else if ((answer1 == 1) && (answer2 == 2) && (answer3 == 3)) {
        return 1;
      }

//Answers 2xx
      else if ((answer1 == 2) && (answer2 == 1) && (answer3 == 1)) {
        return 3;
      }
      else if ((answer1 == 2) && (answer2 == 1) && (answer3 == 2)) {
        return 2;
      }
      else if ((answer1 == 2) && (answer2 == 1) && (answer3 == 3)) {
        return 3;
      }

      else if ((answer1 == 2) && (answer2 == 2) && (answer3 == 1)) {
        return 1;
      }
      else if ((answer1 == 2) && (answer2 == 2) && (answer3 == 2)) {
        return 2;
      }
      else if ((answer1 == 2) && (answer2 == 2) && (answer3 == 3)) {
        return 1;
      }

//Answers 3xx
      else if ((answer1 == 3) && (answer2 == 1) && (answer3 == 1)) {
        return 3;
      }
      else if ((answer1 == 3) && (answer2 == 1) && (answer3 == 2)) {
        return 2;
      }
      else if ((answer1 == 3) && (answer2 == 1) && (answer3 == 3)) {
        return 5;
      }

      else if ((answer1 == 3) && (answer2 == 2) && (answer3 == 1)) {
        return 1;
      }
      else if ((answer1 == 3) && (answer2 == 2) && (answer3 == 2)) {
        return 2;
      }
      else if ((answer1 == 3) && (answer2 == 2) && (answer3 == 3)) {
        return 1;
      }

//Error message
      else {
        return "error";
      }
    };

    var codeType = determination();




    if (codeType === 0){
      alert("Please answer all questions to recieve an answer");
    }
    else if (codeType == 1) {
      $("#css-img").fadeIn();
    }
    else if (codeType == 2) {
      $("#ruby-img").fadeIn();
    }
    else if (codeType == 3) {
      $("#csharp-img").fadeIn();
    }
    else if (codeType == 4) {
      $("#java-img").fadeIn();
    }
    else if (codeType == 5) {
      $("#php-img").fadeIn();
    }
    else {
      alert("error");
    }
  });
  $("#clear").submit(function(event) {
    event.preventDefault();
    $("#ruby-img").fadeOut();
    $("#csharp-img").fadeOut();
    $("#java-img").fadeOut();
    $("#css-img").fadeOut();
    $("#php-img").fadeOut();


  });
});
