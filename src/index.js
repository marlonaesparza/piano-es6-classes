import App from "./scripts/App.js";
// import * as Tone from 'tone';
import { notes } from "./config.js"

const root = document.getElementById("root");
const app = new App({notes}).render();

root.appendChild(app);
