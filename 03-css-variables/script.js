const spacing = document.querySelector("#spacing")
const blur = document.querySelector("#blur")
const color = document.querySelector("#color")
const image = document.querySelector(".main-image")

spacing.addEventListener("mousemove",() => {
  console.log(spacing.value)
  image.style.setProperty('--border-thickness',`${spacing.value}px`)
})

blur.addEventListener("mousemove",() => {
  console.log(blur.value)
  image.style.setProperty('--blur-value',`${blur.value}px`)
})

spacing.addEventListener("change",() => {
  console.log(spacing.value)
  image.style.setProperty('--border-thickness',`${spacing.value}`)
})
