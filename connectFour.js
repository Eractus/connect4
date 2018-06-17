const canvas = document.getElementById("connect4Canvas");
const ctx = canvas.getContext("2d");

let discWidth = (canvas.width/7)/2;
let column1 = canvas.width/7 - discWidth;
let column2 = (2*column1) - discWidth;
let column3 = (3*column1) - discWidth;
let column4 = (4*column1) - discWidth;
let column5 = (5*column1) - discWidth;
let column6 = (6*column1) - discWidth;
let column7 = canvas.width - discWidth;
