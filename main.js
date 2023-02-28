import { hamburger } from "./app.js";
import { renderizar } from "./renderizar.js";

const paginaActual = new URL(document.URL).pathname;

if (paginaActual === "/productos.html") {
  renderizar();
}

hamburger();
