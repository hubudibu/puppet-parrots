var prev = document.querySelector(".prevItem");
var next = document.querySelector(".nextItem");
var items = document.querySelector(".carousel-container ol");

var width = items.querySelector("li").getBoundingClientRect().width;

var left = 0;

/*
var clickCountLeft = 0;
var clickCountRight = 0;
var itemsCount = items.childNodes;
*/
/* divide itemsCount by two as it counts both <li> and <p> */

window.addEventListener("resize",updateWidth);
prev.addEventListener("click",rollLeft);
next.addEventListener("click",rollRight);

function updateWidth() {
  width = items.querySelector("li").getBoundingClientRect().width;
}

console.log("width times 3 = " + width*3);

function rollLeft() {

  if (left == 0) {
    prev.style.display = "none";
    next.style.display = "inline-block";
  }

  if ((Math.abs(left) < width*3) && left !=0 ) {
    left = left + width;
    items.style.left = left + "px";
  }
  console.log(Math.abs(left));
}

function rollRight() {

  if (Math.abs(left) == (width*3)) {
    left = 0;
    next.style.display = "none";
    prev.style.display = "inline-block";
  }

  if (Math.abs(left) < width*3 && left != width*3 ) {
    left = left - width;
    items.style.left = left + "px";
  }
  console.log(Math.abs(left));
}

/* Click count solution for The Hall of Fame

function rollLeft(){
  clickCountRight = 0;
  clickCountLeft += 2.5;
  if (clickCountLeft < (itemsCount.length)) {
    left = left + width;
    items.style.left = left + "px";
  }
  console.log(itemsCount.length);
  console.log(clickCountLeft);
  console.log(left);
}

function rollRight(){
  clickCountLeft = 0;
  clickCountRight += 2.5;
  if (clickCountRight < (itemsCount.length)) {
  left = left - width;
  items.style.left = left + "px";
  }
  console.log(itemsCount.length);
  console.log(clickCountRight);
  console.log(left);
}

*/
