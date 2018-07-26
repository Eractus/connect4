document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode === 49) {
    onePressed = true;
  } else if (e.keyCode === 50) {
    twoPressed = true;
  } else if (e.keyCode === 51) {
    threePressed = true;
  } else if (e.keyCode === 52) {
    fourPressed = true;
  } else if (e.keyCode === 53) {
    fivePressed = true;
  } else if (e.keyCode === 54) {
    sixPressed = true;
  } else if (e.keyCode === 55) {
    sevenPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 49) {
    onePressed = false;
  } else if (e.keyCode === 50) {
    twoPressed = false;
  } else if (e.keyCode === 51) {
    threePressed = false;
  } else if (e.keyCode === 52) {
    fourPressed = false;
  } else if (e.keyCode === 53) {
    fivePressed = false;
  } else if (e.keyCode === 54) {
    sixPressed = false;
  } else if (e.keyCode === 55) {
    sevenPressed = false;
  }
}
