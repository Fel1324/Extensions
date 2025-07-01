export class ExtensionsList {
  constructor(extensions) {
    this.allExtensions = extensions
    this.extensions = extensions
    this.extensionListEl = document.querySelector(".extensions");
  }

  renderExtensions() {
    this.extensions.forEach((extension) => {
      const extensionItem = document.createElement("li")
      extensionItem.classList.add("extension")
      extensionItem.id = extension.id

      const extensionInfos = document.createElement("div")
      extensionInfos.classList.add("extension-infos")

      const extensionLogo = document.createElement("img")
      extensionLogo.src = extension.logo
      extensionLogo.alt = extension.name

      const extensionInfosWrapper = document.createElement("div")

      const extensionName = document.createElement("span")
      extensionName.classList.add("extension-name")
      extensionName.textContent = extension.name

      const extensionDesc = document.createElement("p")
      extensionDesc.classList.add("extension-desc")
      extensionDesc.textContent = extension.description

      const extensionActions = document.createElement("div")
      extensionActions.classList.add("extension-actions")

      const extensionBtnRemove = document.createElement("button")
      extensionBtnRemove.classList.add("btn-remove")
      extensionBtnRemove.textContent = "Remove"
      extensionBtnRemove.onclick = (event) => {
        const extensionItem = event.target.parentElement.parentElement
        const id = extensionItem.id

        if (id) {
          this.extensions = this.extensions.filter((extension) => extension.id !== id)
          this.allExtensions = this.allExtensions.filter((extension) => extension.id !== id)
          document.getElementById(id).remove()
        }
      }

      const extensionSwitchWrapper = document.createElement("div")
      extensionSwitchWrapper.classList.add("switch-wrapper")

      const extensionSwitchInput = document.createElement("input")
      extensionSwitchInput.type = "checkbox"
      extensionSwitchInput.name = "is-active"
      extensionSwitchInput.id = "is-active"
      extensionSwitchInput.checked = extension.isActive

      extensionSwitchInput.onchange = (event) => {
        extension.isActive = event.target.checked
        extensionSwitchInput.checked = extension.isActive
      }

      extensionInfosWrapper.append(extensionName, extensionDesc)
      extensionInfos.append(extensionLogo, extensionInfosWrapper)

      extensionSwitchWrapper.append(extensionSwitchInput)
      extensionActions.append(extensionBtnRemove, extensionSwitchWrapper)

      extensionItem.append(extensionInfos, extensionActions)

      this.extensionListEl.appendChild(extensionItem)
    })
  }

  filterExtensions() {
    const buttonsFilter = document.querySelectorAll('.btn-filter')

    buttonsFilter.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        buttonsFilter.forEach((btn) => {
          btn.classList.remove("active")
        })

        btn.classList.add("active")
        this.extensions = this.allExtensions

        const filter = event.target.dataset.filter

        if (filter === "all") {
          this.extensionListEl.innerHTML = ""

          this.renderExtensions()

        } else if (filter === "active") {
          this.extensionListEl.innerHTML = ""

          const extensionsActive = this.extensions.filter((extension) => extension.isActive)
          this.extensions = extensionsActive
          this.renderExtensions()

        } else if (filter === "inactive") {
          this.extensionListEl.innerHTML = ""

          const extensionsInactive = this.extensions.filter((extension) => !extension.isActive)
          this.extensions = extensionsInactive
          this.renderExtensions()
        }
      })
    })
  }
}
