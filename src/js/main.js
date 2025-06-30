import { toggleMode } from "../js/features/toggle-mode.js"
import { loadExtensionsList } from "./modules/load-extensions-list.js"

document.addEventListener("DOMContentLoaded", () => {
  toggleMode()
  loadExtensionsList()
})
