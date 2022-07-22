
//Sources:
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// https://css-tricks.com/ease-out-in-ease-in-out/
// https://stackoverflow.com/questions/31223341/detecting-scroll-direction
var lastScrollTop = 0;

function navBarScroll(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      console.log("dwn")
      document.querySelector("nav").classList.remove("appear")
      document.querySelector("nav").classList.add("disappear")
   } else {
    console.log("up")
    document.querySelector("nav").classList.add("appear")
    document.querySelector("nav").classList.remove("disappear")

   }
   lastScrollTop = st <= 0 ? 0 : st; 
};

export { navBarScroll };