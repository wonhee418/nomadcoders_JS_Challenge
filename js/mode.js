const modeBtn = document.querySelector(".modeBtn");
const body = document.querySelector("body");
const darkMode = localStorage.getItem("mode");

function chanMode() {
  const darkMode = localStorage.getItem("mode");
  if (darkMode === null) {
    localStorage.setItem("mode", "dark");
    body.classList.add("dark");
  } else {
    localStorage.removeItem("mode", "dark");
    body.classList.remove("dark");
  }
}

if (darkMode !== null) {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

modeBtn.addEventListener("click", chanMode);
