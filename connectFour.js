const canvas = document.getElementById("connect4Canvas");
const ctx = canvas.getContext("2d");

let discDiameter = 80;
let column1 = 10;
let column2 = 20 + discDiameter;
let column3 = 30 + 2*discDiameter;
let column4 = 40 + 3*discDiameter;
let column5 = 50 + 4*discDiameter;
let column6 = 60 + 5*discDiameter;
let column7 = 70 + 6*discDiameter;

const drawDiscs = window.onload = function() {
  let red = document.getElementById("red-disc");
  ctx.drawImage(red, column1, (canvas.height - discDiameter), discDiameter, discDiameter);
  let yellow = document.getElementById("yellow-disc");
  ctx.drawImage(yellow, column2, (canvas.height - discDiameter), discDiameter, discDiameter);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDiscs();
};

setInterval(draw, 8);
