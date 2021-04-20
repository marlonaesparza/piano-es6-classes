export default class LetterElement {
  constructor (letter, audio, color) {
    this.state = {
      audio,
      color,
      letter
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick (e) {
    console.log(this.state);
    console.log(this.state.audio);
    this.state.audio.play();
  };

  render () {
    const letterContainer = document.createElement("div");

    const letterSpan = document.createElement("span");
    const letterNode = document.createTextNode(this.state.letter);
    letterSpan.appendChild(letterNode);
    letterSpan.style.color = `${this.state.color}`;
    letterSpan.style.fontSize = "6em";
    letterSpan.style.cursor = "pointer";
    letterSpan.addEventListener('click', this.handleClick);
    letterContainer.appendChild(letterSpan);
    letterContainer.className = "letter-container";
    return letterContainer;
  };
};
