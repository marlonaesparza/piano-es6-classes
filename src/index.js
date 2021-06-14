import App from "./scripts/App.js";
import { samples, colors } from "./config.js"

const root = document.getElementById("root");
const app = new App("marlon", samples, colors).render();

root.appendChild(app);

