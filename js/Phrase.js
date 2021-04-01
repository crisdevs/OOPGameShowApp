/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

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
}