// random value generated
  var y=Math.floor(Math.random() *1 10 + 1);

// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
var x=document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATULATIONS!" +playername+ "YOU GUESSED IT RIGHT"
    + guess + "GUESS")
    guess=1
}

else if (x,y) 
{
    guess++;
    alert("Whoaps!A greater number!Try less")
}
else
{
  guess++;
  alert("Whoaps!A smaller number!Try more")
}

function playAgain(){
    y=Math.floor(Math.random() * 10 +1);
}