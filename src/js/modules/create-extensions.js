const extensionsList = document.querySelector(".extensions");

export function createExtensions(extension){
  const {id, logo, name, description, isActive} = extension

  extensionsList.innerHTML += `
    <li id="${id}" class="extension">
      <div class="extension-infos">
        <img src="${logo}" alt="${name}">

        <div>
          <span class="extension-name">${name}</span>
          <p class="extension-desc">
            ${description}
          </p>
        </div>
      </div>

      <div class="extension-actions">
        <button class="btn-remove">Remove</button>

        <div class="switch-wrapper">
          <input
            type="checkbox"
            name="is-active"
            id="is-active"
            value="active"
            ${isActive ? "checked" : ""}
          >
        </div>
      </div>
    </li>
  `
}
