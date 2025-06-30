const extensionsList = document.querySelector(".extensions");

export function createExtensions(extensions){
  extensions.forEach((extension) => {
    const extensionItem = document.createElement("li")
    extensionItem.classList.add("extension")

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

    extensionsList.appendChild(extensionItem)
  })
}