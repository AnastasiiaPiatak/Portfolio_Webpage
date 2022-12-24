let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", changeTheme);
let toggleImg = document.getElementById("toggleImg");


function changeTheme() {
  if (document.body.classList.contains("dark")) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
  
}

function setDarkTheme() {
  document.body.classList.add("dark");
  toggleImg.src = "img/sun.png";
  localStorage.theme = "dark";
  document.getElementById("navbar").classList.remove("bg-light");
  document.getElementById("navbar").classList.add("dark_navbar");
}

function setLightTheme() {
  document.body.classList.remove("dark");
  toggleImg.src = "img/moon.png";
  localStorage.theme = "light";
  document.getElementById("navbar").classList.remove("dark_navbar");
  document.getElementById("navbar").classList.add("bg-light");
}

if (localStorage.theme === "dark") {
  setDarkTheme();
}
