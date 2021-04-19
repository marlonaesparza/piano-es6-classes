import LetterElement from "./LetterElement.js";

export default class App {
  constructor (word, samples) {
    this.state = {
      word,
      samples
    };
  };

  render () {
    const appContainer = document.createElement("div");

    for (let i = 0; i < this.state.word.length; i++) {
      let letter = this.state.word[i];
      let audio = new Audio();
      console.log(this.state.samples[i]);
      audio.src = this.state.samples[i];
      let letterContainer = new LetterElement(letter, audio, "black").render();
      appContainer.appendChild(letterContainer);
    };

    return appContainer;
  };
};
