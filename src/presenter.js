import TennisGame from "./tenis.js";

const tenis = new TennisGame();

const mas1 = document.querySelector("#mas-1");
const mas2 = document.querySelector("#mas-2");
const div = document.querySelector("#tabla-puntuacion-div");
let ptj1 = 0;
let ptj2 = 0;

mas1.addEventListener("click", (event) => {
  event.preventDefault();
  ptj1 += 1;
  div.textContent = tenis.obtenerScore(ptj1, ptj2);
});

mas2.addEventListener("click", (event) => {
  event.preventDefault();
  ptj2 += 1;
  div.textContent = tenis.obtenerScore(ptj1, ptj2);
});

