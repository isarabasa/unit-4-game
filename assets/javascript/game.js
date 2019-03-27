$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomNumber = getRandomNumber(19, 120);

    $("#randomNumber").text("Random number: " + randomNumber);
    
    function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
      var gem1 = getRandomNumber(1, 12);
      var gem2 = getRandomNumber(1, 12);
      var gem3 = getRandomNumber(1, 12);
      var gem4 = getRandomNumber(1, 12);
      
    
      $("#gem1").on("click", function() {
        score += gem1;
        $("#score").text("Your score so far: " + score);
        updateScore();
      });
    
      $("#gem2").on("click", function() {
        score += gem2;
        $("#score").text("Your score so far: " + score);
        updateScore();
      });

      $("#gem3").on("click", function() {
        score += gem3;
        $("#score").text("Your score so far: " + score);
        updateScore();
      });
    
      $("#gem4").on("click", function() {
        score += gem4;
        $("#score").text("Your score so far: " + score);
        updateScore();
      });
    
      var updateScore = function() {
        if (randomNumber === score) {
          wins++;
          $("#wins").text(wins);
          $("#randomNumber").empty();
          randomNumber = getRandomNumber(19,120);
          $("#randomNumber").text("Random number: " + randomNumber);
          score = 0;
          $("#score").text("Your score so far: " + score)
          newValues();
        }
        if (randomNumber < score) {
          losses++;
          $("#losses").text(losses);
          $("#randomNumber").empty();
          randomNumber = getRandomNumber(19,120);
          $("#randomNumber").text("Random number: " + randomNumber);
          score = 0;
          $("#score").text("Your score so far: " + score)
          newValues();
        }
    
      }
    
    });
    
    