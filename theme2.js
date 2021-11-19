const theme = document.getElementById("theme");

if (localStorage.getItem("theme") !== null)
  setTheme(localStorage.getItem("theme"));
else setTheme("theme-dark");

function setTheme(newTheme) {
  localStorage.setItem("theme", newTheme);
  document.body.removeAttribute("class");
  document.body.classList.add(newTheme);
  theme.value = newTheme;
}

theme.addEventListener("change", e => setTheme(e.target.value));
