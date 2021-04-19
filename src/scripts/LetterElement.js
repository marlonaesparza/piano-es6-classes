export default class LetterButton {
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
    letterSpan.addEventListener('click', this.handleClick);
    letterContainer.appendChild(letterSpan);

    return letterContainer;
  };
};
