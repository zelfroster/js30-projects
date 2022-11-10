const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')

ctx.strokeStyle = '#FF5588'
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = 5

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if(!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue > 359) {
    hue = 0
  };
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
    console.log(direction)
  };
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener("mouseup", () => {
  isDrawing = false
  ctx.lineWidth = '5'
})
canvas.addEventListener("mouseout", () => isDrawing = false)
