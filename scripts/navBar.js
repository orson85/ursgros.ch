
//Sources:
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// https://css-tricks.com/ease-out-in-ease-in-out/
// https://stackoverflow.com/questions/31223341/detecting-scroll-direction
var lastScrollTop = 0;
var navBar = document.getElementById("nav");
var navBurger = document.getElementById("navBurger");

function navBarScroll(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      console.log("dwn")
      navBar.classList.remove("appear")
      navBar.classList.add("disappear")
   } else {
    console.log("up")
    navBar.classList.add("appear")
    navBar.classList.remove("disappear")
   }
   lastScrollTop = st <= 0 ? 0 : st; 
};

function toggleBurger() {
   navBurger.classList.toggle("burger-close");
   navBurger.classList.toggle("burger-open");
   console.log("Wee!")
   
}

export { navBarScroll, toggleBurger };