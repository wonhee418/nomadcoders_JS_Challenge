const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const lineWidth = document.getElementById("line-width")
const color = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))
const modeChangeBtn = document.getElementById("fill-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraserBtn = document.getElementById("eraser-btn")
const fileInput = document.getElementById("file")
const saveBtn = document.getElementById("save")
console.dir(canvas)

const CANVAS_WIDTH = canvas.offsetWidth;
const CANVAS_HEIGHT = canvas.offsetHeight;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;


function onReSize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.lineWidth = lineWidth.value;
  ctx.lineCap = "round";
}

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return
  }
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false
}

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value
}

function onColorChange(e) {
  onChaneColor(e.target.value)
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color
  onChaneColor(e.target.dataset.color)
  color.value = colorValue
}

function onChaneColor(color) {
  ctx.strokeStyle = color
  ctx.fillStyle = color
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeChangeBtn.innerText = "Fill"
  } else {
    isFilling = true;
    modeChangeBtn.innerText = "Draw"
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function onEraserClick() {
  ctx.strokeStyle = "white"
  isFilling = false;
  modeChangeBtn.innerHTML = "fill"
}

function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file)
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  }
}

function onSaveClick() {
  const url = canvas.toDataURL()
  const a = document.createElement("a")
  a.href = url;
  a.download = "myDrawing.png"
  a.click();
}

window.addEventListener("resize", onReSize)
canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)

lineWidth.addEventListener("change", onLineWidthChange)

color.addEventListener("change", onColorChange)
colorOption.forEach(color => color.addEventListener("click", onColorClick));

modeChangeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick)
fileInput.addEventListener("change", onFileChange)
saveBtn.addEventListener("click", onSaveClick)