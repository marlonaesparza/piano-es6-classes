import LetterElement from "./LetterElement.js";

const KeyboardOfLetters = (props) => {
  const { notes, Tone } = props;
  const keyboardContainer = document.createElement("div");
  const keyboardStyle = keyboardContainer.style;

  keyboardContainer.className = "keyboard-container";
  keyboardStyle.margin = "auto";
  keyboardStyle.display = "flex";
  keyboardStyle.justifyContent = `center`;

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    let noteContainer = new LetterElement({ note, Tone }).render();
    keyboardContainer.appendChild(noteContainer);
  };

  return keyboardContainer;
};

export default KeyboardOfLetters;
