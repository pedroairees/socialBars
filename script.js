function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const icon = document.querySelector("link[rel='icon']")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    //se tiver light mode, troca o alt e o icon
    img.setAttribute("alt", "Foto de Perfil, cartonizado, modo ligth")
    icon.setAttribute("href", "./assets/icon-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    //se tiver sem light mode, manter o msm alt e o icon
    img.setAttribute("alt", "Foto de Perfil, cartonizado, modo dark")
    icon.setAttribute("href", "./assets/icon-dark.png")
  }
}
