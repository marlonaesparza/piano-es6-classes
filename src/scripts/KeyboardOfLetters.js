import LetterElement from "./LetterElement.js";

const KeyboardOfLetters = (props) => {
  const { word, samples, colors } = props;
  const keyboardContainer = document.createElement("div");

   for (let i = 0; i < word.length; i++) {
     let letter = word[i];
     let audio = new Audio();
     audio.src = samples[i];
     let color = colors[i] || "black";
     let letterContainer = new LetterElement(letter, audio, color).render();
     keyboardContainer.appendChild(letterContainer);
   };

  return keyboardContainer;
};

export default KeyboardOfLetters;
