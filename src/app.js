/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#la-excusa").innerHTML = generarExcusa();
  });
};
let generarExcusa = () => {
  let sujeto = ["El perro ", "Mi abuela ", "La tortuga ", "Mi pajaro "];
  let action = ["se comio ", " orinó ", "aplastó ", "rompió "];
  let what = ["mi tarea ", "las llaves ", "el auto ", "la casa "];
  let when = [
    "antes de clases",
    "justo ahora",
    "al acabar ",
    "durante el almuerzo",
    "mientras rezaba"
  ];
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    sujeto[sujetoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
