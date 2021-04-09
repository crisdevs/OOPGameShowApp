/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector("#btn__reset");
const keyboardButtons = document.querySelector("#qwerty");
let newGame = null;
//Event Listener for the start button.
startButton.addEventListener("click", () =>{
    newGame = new Game();
    newGame.reset();
    newGame.startGame();
});
//Event Listener for each key button the user can use to chose their guess
keyboardButtons.addEventListener("click", (e) =>{
    if(e.target.className === "key"){
    newGame.handleInteraction(e.target);
    }
});

document.addEventListener("keyup", (e) =>{
    const keyButtons = document.querySelectorAll(".key");

    for(let i =0; i < keyButtons.length; i++){
        if(e.key === keyButtons[i].textContent && keyButtons[i].disabled === false){
            newGame.handleInteraction(keyButtons[i]);
        }
    }
});
