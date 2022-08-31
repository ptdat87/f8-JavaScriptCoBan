import { showState } from "./store.js";

function addCar() {
    dispatch("ADD", `Porsche ${Math.floor(Math.random() * 1000)}`);
}

const btnAdd = document.getElementById("btnAdd");
const btnShow = document.getElementById("btnShow");

btnAdd.addEventListener("click", addCar, false);
btnShow.addEventListener("click", showState, false);
