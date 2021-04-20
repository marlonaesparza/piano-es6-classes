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
    const containerStyle = appContainer.style;

    appContainer.appendChild(keyboardContainer);
    appContainer.className = "app-container";
    containerStyle.margin = "auto";
    containerStyle.display = "grid";
    containerStyle.placeContent = "center";

    return appContainer;
  };
};
