let input = document.querySelector("#input");
let wrng = document.querySelector(".wrng");
let btn = document.querySelector("#btn");
let guesses = document.querySelector('#guesses');
let numguesses=0;
var randomNumber = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Enter between 1 to 100";
        input.value=""
    } else {
        numguesses++;
        guesses.innerHTML ="No. of Guesses : "+ numguesses;
        if(input.value >randomNumber){
            wrng.innerHTML= "Too High! Try Again.";
            input.value=""
        }else if(input.value<randomNumber){
            wrng.innerHTML="Too Low! Try Again.";
            input.value=""
        }else{
            wrng.innerHTML="Congratulations! You've won!"
       
            setInterval(()=>{
                resetGame();
            },3000)
        }

    }
}


function resetGame(){
    numguesses =0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    input.value="";
    wrng.innerHTML=""
    guesses.innerHTML ="No. of Guess : 0"
}