

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


document.onkeyup = function(){
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);
    


    if ((userguess== 'a') && (computerGuess== 'a')){
        wins++;
    }

    if ((userguess== 'b') && (computerGuess== 'b')){
            wins++;
    }
    if ((userguess== 'c') && (computerGuess== 'c')){
                wins++;  
    }
    if ((userguess== 'd') && (computerGuess== 'd')){
               wins++;  
    }
    if ((userguess== 'e') && (computerGuess== 'e')){
        wins++; 
}
if ((userguess== 'f') && (computerGuess== 'f')){
    wins++;  
}
if ((userguess== 'g') && (computerGuess== 'g')){
    wins++;  
}
if ((userguess== 'h') && (computerGuess== 'h')){
    wins++;  
}
if ((userguess== 'i') && (computerGuess== 'i')){
    wins++;  
}
if ((userguess== 'j') && (computerGuess== 'j')){
    wins++;  
}
if ((userguess== 'k') && (computerGuess== 'k')){
    wins++;  
}
if ((userguess== 'l') && (computerGuess== 'l')){
    wins++;  
}
if ((userguess== 'm') && (computerGuess== 'm')){
    wins++;  
}
if ((userguess== 'n') && (computerGuess== 'n')){
    wins++;  
}
if ((userguess== 'o') && (computerGuess== 'o')){
    wins++;  
}
if ((userguess== 'p') && (computerGuess== 'p')){
    wins++;  
}
if ((userguess== 'q') && (computerGuess== 'q')){
    wins++;  
}
if ((userguess== 'r') && (computerGuess== 'r')){
    wins++;  
}
if ((userguess== 's') && (computerGuess== 's')){
    wins++;  
}
if ((userguess== 't') && (computerGuess== 't')){
    wins++;  
}
if ((userguess== 'u') && (computerGuess== 'u')){
    wins++;  
}
if ((userguess== 'v') && (computerGuess== 'v')){
    wins++;  
}
if ((userguess== 'w') && (computerGuess== 'w')){
    wins++;  
}
if ((userguess== 'x') && (computerGuess== 'x')){
    wins++;  
}
if ((userguess== 'y') && (computerGuess== 'y')){
    wins++;  
}
if ((userguess== 'z') && (computerGuess== 'z')){
    wins++;  
}
// wrong answers 
if ((userguess== 'a') && (computerGuess!== 'a')){
    guessesLeft--;
}
if ((userguess== 'b') && (computerGuess!== 'b')){
    guessesLeft--;
}
if ((userguess== 'c') && (computerGuess!== 'c')){
    guessesLeft--;
}
if ((userguess== 'd') && (computerGuess!== 'd')){
    guessesLeft--;
}
if ((userguess== 'e') && (computerGuess!== 'e')){
    guessesLeft--;
}
if ((userguess== 'f') && (computerGuess!== 'f')){
    guessesLeft--;
}
if ((userguess== 'g') && (computerGuess!== 'g')){
    guessesLeft--;
}
if ((userguess== 'h') && (computerGuess!== 'h')){
    guessesLeft--;
}
if ((userguess== 'i') && (computerGuess!== 'i')){
    guessesLeft--;
}
if ((userguess== 'j') && (computerGuess!== 'j')){
    guessesLeft--;
}
if ((userguess== 'k') && (computerGuess!== 'k')){
    guessesLeft--;
}
if ((userguess== 'l') && (computerGuess!== 'l')){
    guessesLeft--;
}
if ((userguess== 'm') && (computerGuess!== 'm')){
    guessesLeft--;
}
if ((userguess== 'n') && (computerGuess!== 'n')){
    guessesLeft--;
}
if ((userguess== 'o') && (computerGuess!== 'o')){
    guessesLeft--;
}
if ((userguess== 'p') && (computerGuess!== 'p')){
    guessesLeft--;
}
if ((userguess== 'q') && (computerGuess!== 'q')){
    guessesLeft--;
}
if ((userguess== 'r') && (computerGuess!== 'r')){
    guessesLeft--;
}
if ((userguess== 's') && (computerGuess!== 's')){
    guessesLeft--;
}
if ((userguess== 't') && (computerGuess!== 't')){
    guessesLeft--;
}
if ((userguess== 'u') && (computerGuess!== 'u')){
    guessesLeft--;
}
if ((userguess== 'v') && (computerGuess!== 'v')){
    guessesLeft--;
}
if ((userguess== 'w') && (computerGuess!== 'w')){
    guessesLeft--;
}
if ((userguess== 'x') && (computerGuess!== 'x')){
    guessesLeft--;
}
if ((userguess== 'y') && (computerGuess!== 'y')){
    guessesLeft--;
}
if ((userguess== 'z') && (computerGuess!== 'z')){
    guessesLeft--;
}
if ((guessesLeft< 1)){
    losses++, guessesLeft=9, computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log(computerGuess);
}
if ((userguess==computerGuess)){
    guessesLeft=9, computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log(computerGuess);
}


    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses:" + losses + "</p>" +
    "<p>Guesses Left: "+ guessesLeft + "</p>" +
    "<p>Guesses So Far: " + userguess +"</p>";
    
    document.querySelector('#game').innerHTML = html;
    }

    // function myFunction() {
    //     var x = document.getElementById("guessedLetters");
    //     x.value = x.value.toUpperCase();
    


