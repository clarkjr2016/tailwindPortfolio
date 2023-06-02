import "./style.css";
import initial from "./firstloader.js";
import menu from "./menu.js";
import about from "./about.js";

//select all of the buttons in index.html
const homeButton = document.querySelector("#Home");
const menuButton = document.querySelector("#Menu");
const aboutButton = document.querySelector("#About");

//add event listeners to each button
homeButton.addEventListener("click", initial);
menuButton.addEventListener("click", menu);
aboutButton.addEventListener("click", about);
