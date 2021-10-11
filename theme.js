const theme = document.getElementById("theme");
const body = document.getElementById("body");

if (localStorage.getItem("theme") !== null) setTheme(localStorage.getItem("theme"));
//fix this: remove "theme" value & get value from localstorage if exists

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  body.removeAttribute("class");
  body.classList.add(theme);
}

theme.addEventListener("change", (e) => setTheme(e.target.value));
