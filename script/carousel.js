var prev = document.querySelector(".prevItem");
var next = document.querySelector(".nextItem");
var items = document.querySelector(".carousel-container ol");

var width = items.querySelector("li").getBoundingClientRect().width;

var left = 0;

window.addEventListener("resize",updateWidth);
prev.addEventListener("click",rollLeft);
next.addEventListener("click",rollRight);

function updateWidth() {
  width = items.querySelector("li").getBoundingClientRect().width;
  console.log("width changed");
  items.style.left = 0;
  left = 0;
}


console.log("width times 3 = " + width*3);

function rollLeft() {

  if (left == 0) {
    prev.style.display = "none";
    next.style.display = "inline-block";
    return;
  }

  if (Math.abs(left) <= width*3) {
    left = left + width;
    items.style.left = left + "px";
  }
}

function rollRight() {

  if (Math.abs(left) == (width*3)) {
    next.style.display = "none";
    prev.style.display = "inline-block";
    return;
  }

  if (Math.abs(left) < width*3 && left != width*3 ) {
    left = left - width;
    items.style.left = left + "px";
  }
  console.log(Math.abs(left));
}
