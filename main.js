import { navBarScroll, toggleBurger, changeMenuStyle } from "./scripts/navigation.js";

//Navigation

//Menu Visibility
window.onscroll = () => { navBarScroll() }
//Menu Media Query
window.addEventListener("resize",() => {changeMenuStyle()})

document.getElementById("navBurger").addEventListener("click", () => {
    toggleBurger();
})