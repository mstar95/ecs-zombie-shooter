import { canvas } from "./canvas";

const rect = canvas.getBoundingClientRect()
const scaleX = canvas.width / rect.width
const scaleY = canvas.height / rect.height

const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68

const keys = {
  [KEY_W]: false,
  [KEY_A]: false,
  [KEY_S]: false,
  [KEY_D]: false
}

export const mousePos = { x: 0, y: 0 }

function left () {
  return keys[KEY_A] ? -1 : 0
}
function right () {
  return keys[KEY_D] ? 1 : 0
}
function up () {
  return keys[KEY_W] ? -1 : 0
}

function down () {
  return keys[KEY_S] ? 1 : 0
}

window.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true
}, true)

window.addEventListener('keyup', function (e) {
  keys[e.keyCode] = false
}, true)

window.addEventListener('mousemove', function (e) {
  mousePos.x = (e.clientX - rect.left) * scaleX
  mousePos.y = (e.clientY - rect.top) * scaleY
}, true)

export function getX () {
  return left() + right()
}

export function getY () {
  return up() + down()
}
