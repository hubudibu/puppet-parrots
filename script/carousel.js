var prev = document.querySelector(".prevItem");
var next = document.querySelector(".nextItem");
var items = document.querySelector(".carousel-container ol");

var width = items.querySelector("li").getBoundingClientRect().width;

var left = 0;

prev.addEventListener("click",rollLeft);
next.addEventListener("click",rollRight);

function rollLeft(){
  left = left + width;
  items.style.left = left + "px";
}

function rollRight(){
  left = left - width;
  items.style.left = left + "px";
}

console.log(prev);
console.log(items);
console.log(width);
