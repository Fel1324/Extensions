const body = document.querySelector("body")
const toggleModeButton = document.querySelector("#toggle-mode")
const iconMode = document.querySelector("#icon-mode")

toggleModeButton.addEventListener("click", () => {
  body.classList.remove("dark-mode")
  body.classList.remove("light-mode")

  const { value: iconModeSrc } = iconMode.attributes.src

  if(iconModeSrc === "./src/assets/icons/icon-sun.svg"){
    body.classList.add("light-mode");
    iconMode.setAttribute("src", "./src/assets/icons/icon-moon.svg");

  } else {
    body.classList.add("dark-mode");
    iconMode.setAttribute("src", "./src/assets/icons/icon-sun.svg");
  }
})
