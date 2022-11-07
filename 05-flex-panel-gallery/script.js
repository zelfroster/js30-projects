const images = document.querySelector(".panels")
const image = Array.from(images.querySelectorAll(".panel"))
image.forEach((item) => item.addEventListener("mouseenter",(e) => {
  e.target.classList.add("open")
  e.target.firstElementChild.style.transform = "translateY(-20vh)"
  e.target.lastElementChild.style.transform = "translateY(20vh)"
}))
image.forEach((item) => item.addEventListener("mouseleave",(e) => {
  e.target.classList.remove("open")
  e.target.firstElementChild.style.transform = "translateY(-50vh)"
  e.target.lastElementChild.style.transform = "translateY(50vh)"
}))
