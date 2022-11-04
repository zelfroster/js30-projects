const sec = document.querySelector(".sec")
const min = document.querySelector(".min")
const hour = document.querySelector(".hour")

function getTime() {
  const date = new Date()
  var seconds = date.getSeconds()
  var minutes = date.getMinutes()
  var hours = date.getHours()
  var secDeg = parseInt((seconds/60 * 360))
  var minDeg = parseInt((minutes/60 * 360))
  var hourDeg = parseInt((hours/12 * 360))
  sec.style.transform = `rotate(${secDeg}deg)`
  min.style.transform = `rotate(${minDeg}deg)`
  hour.style.transform = `rotate(${hourDeg}deg)`
  console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(getTime,1000)
