const checkboxes = document.querySelectorAll("input")

function handleCheck(e) {
  console.log(e.shiftKey)
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck))
