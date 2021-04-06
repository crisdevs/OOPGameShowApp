/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

    constructor(){
        this.missed = 0;
        this.phrases = ["Break a Leg", "Dig in", "Gotcha", "Hold your horses", "I declare"];
        this.activePhrase = null;
    }
    /**
     * Hides the start screen overlay and generates a new random phrase to be guessed.
     */
    startGame = () =>{
        document.querySelector("#overlay").style.display = "none";

        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Returns a random phrase from the phrases array.
     * 
     * @returns {String} - The random phrase to be guessed by the player.
     */
    getRandomPhrase = () =>{
        const randNum = Math.floor(Math.random() * this.phrases.length);
        console.log(this.phrases[randNum]);
        return this.phrases[randNum];
    }

    handleInteraction = (target) =>{
        target.disabled = true;

        if(this.activePhrase.checkLetter(target)){
            target.classList.add("chosen");
            this.activePhrase.showMatchedLetter(target);
            if(this.checkForWin()){
                this.gameOver();
            }
        }
        else{
            target.classList.add("wrong");
            this.removeLife();
        }

    }

    removeLife = () =>{
        const heartIMG = document.querySelectorAll(".tries img");
        
        heartIMG[this.missed].src = "images/lostHeart.png";
        this.missed++;

        if(this.missed === 5){
            this.gameOver("lose");
        }
    }

    checkForWin = () =>{
        const letterHTML = document.querySelectorAll("#phrase li");
        let counter = 0;

        for(let i =0; i < letterHTML.length; i++){
            if(letterHTML[i].classList.contains("show") || letterHTML[i].classList.contains("space")){
                counter++;
            }
        }

        if(counter === this.activePhrase.phrase.length){
            this.gameOver("win");
        }
    }


    gameOver = (outcome) =>{
        document.querySelector("#overlay").style.display = "flex";
        document.querySelector("#game-over-message").textContent = `You ${outcome}!`;
        document.querySelector("#overlay").classList.remove("start");
        document.querySelector("#overlay").classList.add(`${outcome}`);

    }
}
