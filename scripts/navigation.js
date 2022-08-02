//Sources:
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// https://css-tricks.com/ease-out-in-ease-in-out/
// https://stackoverflow.com/questions/31223341/detecting-scroll-direction
var lastScrollTop = 0;
var nav = document.getElementById("nav");
var navBurger = document.getElementById("navBurger");
var mediaBreakpoint = 640;

//Hides Navigation when Scrolling down,shows Navigation when scrolling up
function navBarScroll() {
   var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
   if (nav.classList.contains("navList") != true ) {
      if (scrollPos < lastScrollTop){
         nav.classList.remove("disappear")
         nav.classList.add("appear")
         nav.classList.remove("hidden")
      } 
      if (scrollPos - lastScrollTop > 40) {
         nav.classList.add("disappear")
         nav.classList.remove("appear")
         nav.classList.add("hidden")

      }
   }
   lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; 
};

// Toggle 
function toggleBurger() {
   //navBurger.classList.toggle("burger-close");
   //navBurger.classList.toggle("burger-open");
   //nav.classList.toggle("hidden");
   nav.classList.toggle("appear");
   nav.classList.toggle("disappear");
   console.log("Wee!")  
}

//Change from NavList to NavBar @mediaBreakpoint
function changeMenuStyle() {
   if (window.innerWidth > mediaBreakpoint) {
      nav.classList.remove("navList");
      nav.classList.add("navBar");
      navBurger.classList.add("hidden")
   } else {
      nav.classList.add("navList");
      nav.classList.remove("navBar");
      navBurger.classList.remove("hidden")
   }
}

export { navBarScroll, toggleBurger, changeMenuStyle };