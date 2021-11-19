const theme = document.getElementById("theme");

if (localStorage.getItem("theme") !== null)
  setTheme(localStorage.getItem("theme"));
else setTheme("theme-dark");
//fix this: remove "theme" value & get value from localstorage if exists

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.removeAttribute("class");
  document.body.classList.add(theme);
}

theme.addEventListener("change", e => setTheme(e.target.value));
