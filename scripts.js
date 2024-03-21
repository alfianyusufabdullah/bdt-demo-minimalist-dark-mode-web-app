function injectSwithThemeButton() {
  const button = document.createElement("button");
  button.textContent = "Ganti tema";
  button.id = "btn-ganti-tema";

  const header = document.querySelector("header");
  header.appendChild(button);
}

function checkCurrentThemeState() {
  const currentState = localStorage.getItem("theme-state");
  if (!currentState) return;

  document.body.setAttribute("data-theme", currentState);
}

window.addEventListener("load", () => {
  console.log("hallo");

  injectSwithThemeButton();
  checkCurrentThemeState();

  const btnGantiNama = document.getElementById("btn-ganti-tema");
  btnGantiNama.addEventListener("click", () => {
    // dapatkan tema saat ini
    const themeValue = document.body.getAttribute("data-theme");
    console.log(themeValue);
    // lakukan pengkondisian
    if (themeValue === "light") {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme-state", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme-state", "light");
    }
  });
});
