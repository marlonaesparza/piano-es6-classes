export default class LetterElement {
  constructor ({ note, Tone }) {
    this.state = {
      note,
      Tone
    };

    this.handleClick = this.handleClick.bind(this);
  };

  async handleClick (e) {
    const {note, Tone} = this.state;
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
  };

  render () {
    const { note } = this.state;

    const noteContainer = document.createElement("div");
    const containerStyle = noteContainer.style;

    if (note.slice(1).slice(0, 1) === "#") {
      noteContainer.className = "note-container black";
    } else {
      noteContainer.className = "note-container white";
    };

    containerStyle.cursor = "pointer";

    noteContainer.addEventListener('click', this.handleClick);

    return noteContainer;
  };
};
