import { fetchExtensions } from "../services/fetch-extensions.js"
import { ExtensionsList } from "./extensions-list.js"

export async function loadExtensionsList(){
  try {
    const extensions = await fetchExtensions()

    const extensionList = new ExtensionsList(extensions)

    extensionList.renderExtensions()
    extensionList.filterExtensions()

  } catch (error) {
    console.log(error)
  }
}
