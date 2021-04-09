/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Dig in"),
      new Phrase("Gotcha"),
      new Phrase("Hold your horses"),
      new Phrase("I declare"),
    ];
    this.activePhrase = null;
  }
  /**
   * Hides the start screen overlay and generates a new random phrase to be guessed.
   */
  startGame = () => {
    document.querySelector("#overlay").style.display = "none";

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
   * Returns a random phrase from the phrases array.
   *
   * @returns {String} - The random phrase to be guessed by the player.
   */
  getRandomPhrase = () => {
    const randNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randNum];
  };
  /**
   * Disables the button, checks the letter that was guessed and checks to see if a player has won or ran out of lives.
   *
   * @param {HTML} target - The button key that was clicked.
   */
  handleInteraction = (target) => {
    target.disabled = true;

    if (this.activePhrase.checkLetter(target)) {
      target.classList.add("chosen");
      this.activePhrase.showMatchedLetter(target);
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      target.classList.add("wrong");
      this.removeLife();
    }
  };

  /**
   * Removes a life from the user and updates the img src attribute to reflect the loss of chances.
   */
  removeLife = () => {
    const heartIMG = document.querySelectorAll(".tries img");

    heartIMG[this.missed].src = "images/lostHeart.png";
    this.missed++;

    if (this.missed === 5) {
      this.gameOver("lose");
    }
  };

  /**
   * Checks to see if all letters that were hidden are now visible which would indicate a win.
   */
  checkForWin = () => {
    const letterHTML = document.querySelectorAll("#phrase li");
    let counter = 0;

    for (let i = 0; i < letterHTML.length; i++) {
      if (
        letterHTML[i].classList.contains("show") ||
        letterHTML[i].classList.contains("space")
      ) {
        counter++;
      }
    }

    if (counter === this.activePhrase.phrase.length) {
      this.gameOver("win");
    }
  };

  /**
   * Ends the game and displays an overlay and gets a different message whether they win or lose.
   *
   * @param {string} outcome - The reason why the game is ending win/lose.
   */
  gameOver = (outcome) => {
    let startingMessage = "";
    const overlay = document.querySelector("#overlay");
    const keyButtons = document.querySelectorAll(".key");

    overlay.style.display = "flex";

    if (outcome === "lose") {
      startingMessage = "Sorry";
      overlay.classList.remove("win");
    } else {
      startingMessage = "Congrats ";
      overlay.classList.remove("lose");
    }
    document.querySelector(
      "#game-over-message"
    ).textContent = `${startingMessage} you ${outcome}!`;
    overlay.classList.remove("start");
    overlay.classList.add(`${outcome}`);

    //To make the game unplayable after game overlay screen is shown
    for (let i = 0; i < keyButtons.length; i++) {
      keyButtons[i].disabled = true;
    }
  };

  /**
   * Resets the game by removing the phrase letters. Removing the classes added to the buttons and reenabling the buttons.
   */
  reset = () => {
    document.querySelector("#phrase ul").innerHTML = "";
    const keys = document.querySelectorAll(".key");
    const heartIMG = document.querySelectorAll(".tries img");

    for (let i = 0; i < keys.length; i++) {
      if (keys[i].classList.contains("chosen")) {
        keys[i].classList.remove("chosen");
      } else if (keys[i].classList.contains("wrong")) {
        keys[i].classList.remove("wrong");
      }

      keys[i].disabled = false;
    }

    for (let j = 0; j < heartIMG.length; j++) {
      heartIMG[j].src = "images/liveHeart.png";
    }
  };
}
