import { createExtensions } from "../modules/create-extensions.js"

const extensionsList = document.querySelector(".extensions");

export function filterExtensions(extensions){
  const buttonsFilter = document.querySelectorAll('.btn-filter')

  buttonsFilter.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      buttonsFilter.forEach((btn) => {
        btn.classList.remove("active")
      })
      
      btn.classList.add("active")
  
      const filter = event.target.dataset.filter

      if(filter === "all"){
        extensionsList.innerHTML = ""
        createExtensions(extensions)

      } else if(filter === "active"){
        extensionsList.innerHTML = ""

        const extensionsActive = extensions.filter((extension) => extension.isActive)
        createExtensions(extensionsActive)

      } else if(filter === "inactive"){
        extensionsList.innerHTML = ""

        const extensionsInactive = extensions.filter((extension) => !extension.isActive)
        createExtensions(extensionsInactive)
      }
    })
  })
}
