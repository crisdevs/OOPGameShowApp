/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector("#btn__reset");
const keyboardButtons = document.querySelector("#qwerty");
let newGame = null;

startButton.addEventListener("click", () =>{
    newGame = new Game();
    newGame.startGame();
});

keyboardButtons.addEventListener("click", (e) =>{
    if(e.target.className === "key"){
    newGame.handleInteraction(e.target);
    }
});
