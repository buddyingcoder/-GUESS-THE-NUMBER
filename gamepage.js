//random value generated
 var  y = Math.floor(Math.random() * 10 + 1);
// number guessed by user
playername = localStorage.getItem("player_name")
var guess = 1;
// until hit
 function submit(){
    var x = document.getElementById("guessField").value;
  if(x == y)
  {
    alert ("CONGRATULATION!!!"+playername+" YOU GUSSED IT RIGHT IN"+ guess + " GUESS ");
    guess= 1;
  }
 else if(x > y)/* if guessed number is greater than actual number*/
 {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
 }
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
 }
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
