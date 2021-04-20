import KeyboardOfLetters from "./KeyboardOfLetters.js";

export default class App {
  constructor (word, samples, colors) {
    this.state = {
      word,
      samples,
      colors
    };
  };

  render () {
    const appContainer = document.createElement("div");
    const keyboardContainer = KeyboardOfLetters(this.state);
    appContainer.appendChild(keyboardContainer);
    appContainer.className = "app-container";
    return appContainer;
  };
};
