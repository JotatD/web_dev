var level = 0;
var clicks = [];
var target_clicks = [];

function registeredClicks(target){
  if ($(target).hasClass("green")){
      clicks.push(1);
      glow(1, 100);
      playSound("green");
    }
  else if($(target).hasClass("red")){
      clicks.push(2);
      glow(2, 100);
      playSound("red");
    }
  else if ($(target).hasClass("yellow")){
      clicks.push(3);
      glow(3, 100);
      playSound("yellow");
  }
  else if ($(target).hasClass("blue")){
      clicks.push(4);
      glow(4, 100);
      playSound("blue");
  }

  if (compare(clicks, target_clicks) === 1 && clicks.length === target_clicks.length){
    console.log("Succes");
    levelUp();
  }
  else if (compare(clicks, target_clicks) === 0 && clicks.length <= target_clicks.length){
    console.log("gameOver()");
    gameOver();
  }
}

function levelUp(){
  $(".bt").unbind("click", levelUp);
  clicks = [];
  level++;
  $(".title").text("Level " + level);
  target_clicks.push(Math.floor(Math.random()*4)+1);
  console.log(target_clicks);
  setTimeout(animateSequence,1000);
}


function animateSequence(){
  for (var j = 0; j < target_clicks.length; j++){
    setTimeout(glow, 1000*j, target_clicks[j], 500);
  }
}

function glow(number, delay){
  if (number === 1){
    playSound("green");
      $(".green").css("box-shadow","0 0 150px 10px green");
      setTimeout(function(){
        $(".green").css("box-shadow","");
      }, delay);
    }
  else if(number === 2){
    playSound("red");
      $(".red").css("box-shadow","0 0 150px 10px red");
      setTimeout(function(){
        $(".red").css("box-shadow","");
      }, delay);
    }
  else if (number === 3){
    playSound("yellow");
      $(".yellow").css("box-shadow","0 0 150px 10px yellow");
      setTimeout(function(){
        $(".yellow").css("box-shadow","");
      }, delay);
  }
  else if (number === 4){
      playSound("blue");
      $(".blue").css("box-shadow","0 0 150px 10px blue");
      setTimeout(function(){
        $(".blue").css("box-shadow","");
      }, delay);
  }
  else{
    console.log("cath");
  }
}


function gameOver(){
  target_clicks = [];
  clicks = [];
  $(".title").text("Game Over");
  setTimeout(titlePage, 2000);
  playSound("wrong");
}


function titlePage(){
  level = 0;
  $(".title").text("Press any button to play");
  $(".bt").on("click", levelUp);
}

function compare(clicks, target){
  for (var i = 0; i < clicks.length; i++){
    if (clicks[i] !== target[i]) {
      return 0;
    }
  }

  return 1;
}

$(".bt").click(function(event){
  registeredClicks(event.target);
});


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

titlePage();
//animateSequence();
