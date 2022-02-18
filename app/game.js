class CharKeyboard {
    constructor(numberChar, stateChar) {
      this.numberChar = numberChar;
      this.stateChar = stateChar;
    }

    changeStateChar() {

    }
}

class Game {
    constructor({ lettersWrapper, categoryWrapper, wordGameWrapper, keyboardScheme, keyboard1, keyboard2, keyboard3, keyboard4 }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordGameWrapper = wordGameWrapper;
        this.keyboardScheme = keyboardScheme;
        this.keyboard1 = keyboard1;
        this.keyboard2 = keyboard2;
        this.keyboard3 = keyboard3;
        this.keyboard4 = keyboard4;
        this.numbersChar = [65,  66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,  77, 78, 79, 
                            80, 81, 82, 83,  84, 85, 86, 87, 88, 89, 90, 211, 260, 262, 
                            280, 321, 323, 346, 377, 379];
        this.charsObject = [];
        for (let i = 0; i < this.numbersChar.length; i++ ){
          this.charsObject.push(new CharKeyboard(this.numbersChar[i], "normal"));
        }
        this.alphabet = [this.charsObject[0],  this.charsObject[27], this.charsObject[1], this.charsObject[2], this.charsObject[28], this.charsObject[3], this.charsObject[4], this.charsObject[29], 
                    this.charsObject[5], this.charsObject[6], this.charsObject[7], this.charsObject[8], this.charsObject[9], this.charsObject[10], this.charsObject[11], this.charsObject[30], 
                    this.charsObject[12], this.charsObject[13], this.charsObject[31], this.charsObject[14], this.charsObject[26], this.charsObject[15], this.charsObject[16], this.charsObject[17], 
                    this.charsObject[18], this.charsObject[32], this.charsObject[19], this.charsObject[20], this.charsObject[21], this.charsObject[22], this.charsObject[23], this.charsObject[24], 
                    this.charsObject[25], this.charsObject[33], this.charsObject[34]]
        this.qwerty = [this.charsObject[16],  this.charsObject[22], this.charsObject[4], this.charsObject[17], this.charsObject[19], this.charsObject[24], this.charsObject[20], this.charsObject[8], 
                  this.charsObject[14], this.charsObject[15], this.charsObject[0], this.charsObject[18], this.charsObject[3], this.charsObject[5],this.charsObject[6], this.charsObject[7], 
                  this.charsObject[9], this.charsObject[10], this.charsObject[11], this.charsObject[25], this.charsObject[23], this.charsObject[2], this.charsObject[21], this.charsObject[1],
                  this.charsObject[13], this.charsObject[12], this.charsObject[27], this.charsObject[28], this.charsObject[29], this.charsObject[30], this.charsObject[31], this.charsObject[26],
                  this.charsObject[32], this.charsObject[33], this.charsObject[34]]
        this.currentlyKeyboard = this.alphabet;
  }
  
  writeLetter(letter) {
      console.log(letter);
  }

  run() {
    console.log("wystartowałem grę!!!");
    for (let i = 10; i < 36; i++) {
      const letter = i.toString(36);
      const button = document.createElement("button");
      button.innerHTML = letter.toUpperCase();
      button.addEventListener('click', () => this.writeLetter(letter));
      this.lettersWrapper.appendChild(button);
    }
  }
}
