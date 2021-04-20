import LetterElement from "./LetterElement.js";

const KeyboardOfLetters = (props) => {
  const { word, samples, colors } = props;
  const keyboardContainer = document.createElement("div");
  const keyboardStyle = keyboardContainer.style;

  keyboardContainer.className = "keyboard-container";
  keyboardStyle.marign = "auto";
  keyboardStyle.display = "grid";
  keyboardStyle.gridTemplateColumns = `repeat(${word.length || 1}, 1fr)`;
  keyboardStyle.placeContent = "center";

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let audio = new Audio();
    audio.src = samples[i];
    let randColorIdx = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0);
    let color = colors[randColorIdx] || "black";
    let letterContainer = new LetterElement(letter, audio, color).render();
    keyboardContainer.appendChild(letterContainer);
  };

  return keyboardContainer;
};

export default KeyboardOfLetters;
