import App from "./scripts/App.js";
import { samples } from "./scripts/config.js"

const root = document.getElementById("root");
const app = new App("marlon", samples).render();

root.appendChild(app);

