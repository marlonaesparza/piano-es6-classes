import KeyboardOfLetters from "./KeyboardOfLetters.js";

export default class App {
  constructor ({notes, Tone}) {
    this.state = {
      notes,
      Tone
    };
  };

  render () {
    const appContainer = document.createElement("div");
    const keyboardContainer = KeyboardOfLetters(this.state);
    const containerStyle = appContainer.style;

    appContainer.appendChild(keyboardContainer);
    appContainer.className = "app-container";
    containerStyle.display = "flex";

    return appContainer;
  };
};
