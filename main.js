import { navBarScroll, toggleBurger } from "./scripts/navBar.js";

//Navigation
window.onscroll = () => { navBarScroll() }
document.getElementById("toggle").addEventListener("click", () => { toggleBurger() }) //FOR TESTING


