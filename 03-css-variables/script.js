const spacing = document.querySelector("#spacing")
const blur = document.querySelector("#blur")
const color = document.querySelector("#color")
const image = document.querySelector(".main-image")

spacing.addEventListener("mousemove",() => {
  image.style.setProperty('--border-thickness',`${spacing.value}px`)
})

blur.addEventListener("mousemove",() => {
  image.style.setProperty('--blur-value',`${blur.value}px`)
})

color.addEventListener("change",() => {
  image.style.setProperty('--border-color',color.value)
})
