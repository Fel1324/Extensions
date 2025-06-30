import { fetchExtensions } from "../services/fetch-extensions.js"
import { createExtensions } from "./create-extensions.js"

export async function loadExtensions() {
  const extensions = await fetchExtensions()
  
  extensions.forEach((extension) => {
    createExtensions(extension)
  })
}
