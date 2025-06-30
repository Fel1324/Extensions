export async function fetchExtensions() {
  try {
    const response = await fetch("./data.json")
    const data = await response.json()

    return data
    
  } catch (error) {
    console.error(error)
  }
}
