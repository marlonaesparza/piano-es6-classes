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
    const containerStyle = letterContainer.style;
    const spanStyle = letterSpan.style;

    letterContainer.appendChild(letterSpan);
    letterContainer.classname = "letter-container";
    containerStyle.margin = "auto";
    containerStyle.diplay = "grid";
    containerStyle.gridTemplateColumns = "1fr"
    containerStyle.placeContent = "center";

    letterSpan.appendChild(letterNode);
    spanStyle.color = `${this.state.color}`;
    spanStyle.fontSize = "6em";
    spanStyle.fontWeight = "bolder";
    spanStyle.cursor = "pointer";
    letterSpan.addEventListener('click', this.handleClick);

    return letterContainer;
  };
};
