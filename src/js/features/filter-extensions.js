const buttonsFilter = document.querySelectorAll('.btn-filter')

buttonsFilter.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonsFilter.forEach((btn) => {
      btn.classList.remove("active")
    })
    
    btn.classList.add("active")

    console.log(event.target.dataset.filter)
  })
})
