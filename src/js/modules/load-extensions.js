import { filterExtensions } from "../features/filter-extensions.js"
import { fetchExtensions } from "../services/fetch-extensions.js"
import { createExtensions } from "./create-extensions.js"

export async function loadExtensions(){
  const extensions = await fetchExtensions()

  createExtensions(extensions)
  filterExtensions(extensions)
}
