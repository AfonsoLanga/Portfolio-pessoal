function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assents/img/Cloves_ID.png")
  } else {
    img.setAttribute("src", "./assents/img/Cloves_ID_black.jpg")
  }
}

// Adiciona o event listener para o botão de alternância
document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.querySelector("#switch button")
  if (switchButton) {
    switchButton.addEventListener("click", toggleMode)
  }
})
