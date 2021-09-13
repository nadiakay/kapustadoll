const theme = document.getElementById("theme");
const body = document.getElementById("body");

theme.addEventListener("change", (e) => {
  let newTheme = e.target.value;
  console.log(body);
  body.removeAttribute("class");
  body.classList.add(newTheme);
});
