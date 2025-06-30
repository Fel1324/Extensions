const body = document.querySelector("body")
const toggleModeButton = document.querySelector("#toggle-mode")
const iconMode = document.querySelector("#icon-mode")

export function toggleMode(){
  toggleModeButton.addEventListener("click", () => {
    if(body.classList.contains("dark-mode")){
      body.classList.remove("dark-mode")
      body.classList.add("light-mode");
      iconMode.setAttribute("src", "./src/assets/icons/icon-moon.svg");
  
    } else {
      body.classList.remove("light-mode")
      body.classList.add("dark-mode");
      iconMode.setAttribute("src", "./src/assets/icons/icon-sun.svg");
    }
  })
}
