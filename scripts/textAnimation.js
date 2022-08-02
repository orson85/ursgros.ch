
window.onbeforeunload = () => {  
    window.scrollTo(0, 0);  
  };

let p1 = document.getElementById("1");
let p2 = document.getElementById("2");
let p3 = document.getElementById("3");
let p4 = document.getElementById("4");
let p5 = document.getElementById("5");
let p6 = document.getElementById("6");

let p11 = document.getElementById("1.1");
let p21 = document.getElementById("2.1");
let p31 = document.getElementById("3.1");
let p41 = document.getElementById("4.1");
let p51 = document.getElementById("5.1");
let p61 = document.getElementById("6.1");


let arr = [p1,p2,p3,p4,p5,p6];
let arr2 = [p11,p21,p31,p41,p51,p61];

window.addEventListener("scroll", () => { 
    let currentScreenPos = window.scrollY;
    console.log(currentScreenPos);
    if (window.scrollY >= 0) {    p1.classList.add("appear");};
    if (window.scrollY >= 300) {  p2.classList.add("appear");};
    if (window.scrollY >= 700) {  p3.classList.add("appear");};
    if (window.scrollY >= 1200) { p4.classList.add("appear");};
    if (window.scrollY >= 1800) { p5.classList.add("appear");};
    if (window.scrollY >= 2000) { 
      document.getElementById("6").classList.add("appear");
      arr.forEach(element => {
        element.classList.add("shrink");    
        });
      };
    }
)
