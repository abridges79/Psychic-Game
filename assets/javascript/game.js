

{/* <p id = "wins">Wins:</p>
    <p id = "losses">Losses:</p>
    <p id = "guessesLeft">Guesses Left:</p>
    <p id = "guessesSoFar">Your Guesses So Far:</p> */}

var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;
var computerGuess = letters[Math.floor(Math.random()*letters.length)];
console.log(computerGuess);
var totalGuess =[];

document.onkeyup = function(){
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);
    totalGuess.push(userguess);

if (letters.includes(userguess)){
    //true    
    } else {
    alert("Please Choose a Letter From a-z");
    
};

if ((userguess==computerGuess)){
    wins++;
}
if ((userguess!==computerGuess)){
    guessesLeft--;
}
if ((guessesLeft< 1)){
    losses++, guessesLeft=9, totalGuess = [],computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log(computerGuess);
}
if ((userguess==computerGuess)){
    guessesLeft=9, totalGuess = [],computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log(computerGuess);
}


    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses:" + losses + "</p>" +
    "<p>Guesses Left: "+ guessesLeft + "</p>" +
    "<p>Guesses So Far: " + totalGuess +"</p>";
    
    document.querySelector('#game').innerHTML = html;
    }

    // function myFunction() {
    //     var x = document.getElementById("guessedLetters");
    //     x.value = x.value.toUpperCase();
    


