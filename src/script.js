let btn = document.getElementById("toggleBtn");
let body = document.querySelector("body");

console.log(btn);

btn.onclick = function () {
  this.classList.toggle("dark");
  body.classList.toggle("dark");
};
