/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Splits the phrase string into an array of characters and 
     * then creates the HTML according to the example in examples_phrase_html.txt
     * 
     */
    addPhraseToDisplay = () =>{
        const phraseChar = this.phrase.split("");
        const phraseUL = document.querySelector("#phrase ul");

        phraseChar.forEach(letter =>{
            const li = document.createElement("li");
            li.textContent = letter;

            if(letter !== " "){
                li.className = `hide letter ${letter}`;
            }
            else{
                li.className = "space";
            }

            phraseUL.appendChild(li);
        });


    }
    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     * 
     * @return {boolean || string} - The matched letter
     */
    checkLetter = (target) =>{
        const phraseLetters = document.querySelectorAll(".letter");
    
                for(let j = 0; j < phraseLetters.length; j++){
                    if(target.textContent === phraseLetters[j].textContent){
                        return true;
                        console.log(phraseLetters[j].textContent);
                    }
                }

        return false;
    }

    /**
     * Shows matched letters.NEEDS TO BE REDONE!!!!!!
     */
    showMatchedLetter = (target) =>{
        const letter = target.textContent;
        const phrase = document.querySelectorAll(`.${letter}`);

        if(phrase.length > 0){
            for(let i =0; i < phrase.length; i++){
                phrase[i].classList.remove("hide");
                phrase[i].classList.add("show");
            }
        }
      
    }
}