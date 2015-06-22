
var prev = document.querySelector(".prevItem");
var next = document.querySelector(".nextItem");
var items = document.querySelector(".carousel-container ol");

var width = items.querySelector("li").getBoundingClientRect().width;

var left = 0;

window.addEventListener("resize",updateWidth);
prev.addEventListener("click",rollLeft);
window.addEventListener("keydown",keyRoll);
next.addEventListener("click",rollRight);
window.addEventListener("keydown",keyRoll);


function keyRoll(e){
    var keyCode = e.keyCode;
    if(keyCode === 39){
      console.log("left");
      rollRight();
    }
    if(keyCode === 37){
      rollLeft();
      console.log("right");
    }
}

function updateWidth() {
  width = items.querySelector("li").getBoundingClientRect().width;
  console.log("width changed");
  items.style.left = 0;
  left = 0;
}


console.log("width times 3 = " + width*3);

function rollLeft() {

  if (Math.abs(left) <= width*3 && left != 0) {
    left = left + width;
    items.style.left = left + "px";
  }

  if (left === 0) {
    prev.style.display = "none";
  }
  else {
    next.style.display = "inline-block";
  }
}

function rollRight() {

  if (Math.abs(left) < width*3 && left != width*3 ) {
    left = left - width;
    items.style.left = left + "px";
  }

  if (Math.abs(left) === (width*3)) {
    next.style.display = "none";
  }
  else {
    prev.style.display = "inline-block";
  }
}

document.addEventListener('DOMContentLoaded', preRoll, false);

// function preRoll(){
//   rollRight();
//   rollLeft();
//   console.log("preroll done");
// }
