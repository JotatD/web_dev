function throwDice(){
  var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
  var diceLeft = Math.floor(Math.random()*6);
  var diceRight = Math.floor(Math.random()*6);
  //alert(diceLeft + " " + diceRight);

  var img1 = "images/" + diceImages[diceLeft];
  console.log(img1);
  var img2 = "images/" + diceImages[diceRight];

  document.querySelector(".dice-left img").setAttribute("src", img1);
  document.querySelector(".dice-right img").setAttribute("src", img2);

  if (diceLeft > diceRight){
    document.querySelector(".header").textContent = "🚩Player 1 won!"
  }
  else if (diceLeft < diceRight){
    document.querySelector(".header").textContent = "Player 2 won!🚩"
  }
  else{
    document.querySelector(".header").textContent = "🚩Tie🚩"
  }
}

throwDice();
