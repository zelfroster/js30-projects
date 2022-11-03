const key = document.querySelectorAll('.key')
console.log(key)
function clicked() {
  
}
window.addEventListener("keydown", (e) => {
  key.forEach((item) => {
    if(item.id == e.keyCode) {
      const audio = document.getElementById(`a-${item.id}`)
      audio.play()
      audio.currentTime = 0
      item.classList.add("key-pressed")
      setTimeout(() => {
        item.classList.remove("key-pressed")
      }, 100)
    }
  })
})

