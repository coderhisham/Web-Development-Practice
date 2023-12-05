let maximum = parseInt(prompt("Enter the Maximum Number: "));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid Number: "));
}
const targetNum = Math.floor(Math.random()*maximum) +1;
let guess = prompt("Enter your first guess ('q' to quit): ");
let attempts = 1;
while(parseInt(guess)!== targetNum){
    if(guess==='q') break;
    guess = parseInt(guess);
    if(guess>targetNum){
        guess = prompt("Too High, Guess again..");
        attempts++;
    }
    else if(guess<targetNum){
        guess = prompt("Too Low, Guess again..");
        attempts++;
    }
    else{
        guess = prompt("Invalid Number, Enter a valid guess: ('q' to quit)");
    }
}
if (guess==='q'){
    console.log("OK You Quit")
}
else{
    console.log("Congrats")
    console.log(`You got it! it took you ${attempts} guesses`)
}