// import * as Tone from 'tone';

import { Tone } from "tone/build/esm/core/Tone";

export default class LetterElement {
  constructor ({ note, Tone }) {
    this.state = {
      note,
      synth: Tone.Synth().toDestination()
    };

    this.handleClick = this.handleClick.bind(this);
  };

  async handleClick (e) {
    const {note, synth} = this.state;

    await Tone.start();
    synth.triggerAttackRelease(note, "8n");
  };

  render () {
    const noteContainer = document.createElement("div");
    const containerStyle = noteContainer.style;

    if (note.slice(1) === '#') {
      noteContainer.className = "note-container black";
    } else {
      noteContainer.className = "note-container white";
    };

    containerStyle.margin = "auto";
    containerStyle.display = "grid";
    containerStyle.gridTemplateColumns = "1fr"
    containerStyle.placeContent = "center";
    containerStyle.cursor = "pointer";

    noteContainer.addEventListener('click', this.handleClick);

    return noteContainer;
  };
};
