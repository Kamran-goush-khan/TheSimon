// step 2 solution

var gamePattern = [];

var buttonColor = ["red", "blue","green","yellow"];

var userClickedPattern = [];

var isStart = 0;

var level =1;

// handler function to check that the key is type for the very first time when the game is Start

$("body").keypress(function(){
  if(isStart === 0){
    nextSequence();
      isStart++;
  }
});



// handler function for event listening what user type or click

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  // callin playSound function to play sound when user click particular button...

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});


// function for checking the answer of the user....

function checkAnswer(currentLevel){

  // checking the values if they are same then it is a succes other wise it is going to be wrong
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    // checking the lenght to be equal so that if it si right then we call nextSequence() function after a timeout of 1000ms
    if(gamePattern.length == userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }

  else {
    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}




function nextSequence(){

  // empty user array every they are calling
  userClickedPattern = [];

  // level up the level on the screen
  $("h1").text("Level " + (level++));

  // generating random number form 0 -4
  var randomNumber = Math.floor(Math.random()*4);

  // selecting index value that are generated from then random number
  var randomChoosenColor = buttonColor[randomNumber];

  // push the value into the array
  gamePattern.push(randomChoosenColor);

  // calling the play sound function
  playSound(randomChoosenColor);


}



// function for playing sound input coming from nextSequence and handler function

function playSound(name){

  $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  // Constructor for playing audio
  var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();

}

// function for adding animation to user input

function animatePress(currentColor) {

  $("#"+ currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);

}

function wrongSound() {
  var audio = new Audio(sounds/wrong.mp3);
  audio.play();
}


function startOver() {
  isStart = 0;
  level = 1;
  gamePattern = [];
}

// nextSequence();


// step 3 solution
