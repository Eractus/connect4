const canvas = document.getElementById("connect4Canvas");
const ctx = canvas.getContext("2d");

let player = document.getElementById("current-player");

let discDiameter = 80;
let column1 = 10;
let column2 = 20 + discDiameter;
let column3 = 30 + 2*discDiameter;
let column4 = 40 + 3*discDiameter;
let column5 = 50 + 4*discDiameter;
let column6 = 60 + 5*discDiameter;
let column7 = 70 + 6*discDiameter;
let onePressed = false;
let twoPressed = false;
let threePressed = false;
let fourPressed = false;
let fivePressed = false;
let sixPressed = false;
let sevenPressed = false;
let currentPlayer = 1;
let gameBoard = [];
for (let i=0; gameBoard.length < 7; i ++) {
  gameBoard.push([false, false, false, false, false, false]);
}

const draw = () => {
  gameOver();

  if (onePressed) {
    const currentColumn = gameBoard[0];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column1, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column1, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (twoPressed) {
    const currentColumn = gameBoard[1];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column2, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column2, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (threePressed) {
    const currentColumn = gameBoard[2];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column3, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column3, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (fourPressed) {
    const currentColumn = gameBoard[3];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column4, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column4, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (fivePressed) {
    const currentColumn = gameBoard[4];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column5, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column5, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (sixPressed) {
    const currentColumn = gameBoard[5];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column6, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column6, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }

  if (sevenPressed) {
    const currentColumn = gameBoard[6];
    for (let i=0; i<currentColumn.length; i++) {
      if (currentColumn[i] !== false) {
        continue;
      }
      if (currentColumn[i] === false && currentPlayer === 1) {
        let red = document.getElementById("red-disc");
        ctx.drawImage(red, column7, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "red";
        currentPlayer = 2;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      } else if (currentColumn[i] === false && currentPlayer === 2) {
        let yellow = document.getElementById("yellow-disc");
        ctx.drawImage(yellow, column7, (canvas.height - (i+1)*discDiameter), discDiameter, discDiameter);
        currentColumn[i] = "yellow";
        currentPlayer = 1;
        player.innerHTML = "Current Player: Player "+`${currentPlayer}`;
        break;
      }
    }
  }
};

function gameOver() {
  // check if game rack is filled up
  let allSpaces = [].concat.apply([], gameBoard);
  function isFilled(space) {
    return space !== false;
  }
  if (allSpaces.every(isFilled)) {
    alert("It's a draw!");
    document.location.reload();
  }

  // check if vertical four in a row
  for (let i=0; i < gameBoard.length; i++) {
    let column = gameBoard[i];
    let prev = null;
    let inARow = 0;
    for (let j=0; j < column.length; j++) {
      if (column[j] !== prev && column[j] !== false) {
        prev = column[j];
        inARow = 1;
      } else if (column[j] === prev && column[j] !== false) {
        inARow += 1;
      }
      if (inARow === 4 && prev === "red") {
        alert("Player 1 wins!");
        document.location.reload();
      } else if (inARow === 4 && prev === "yellow") {
        alert("Player 2 wins!");
        document.location.reload();
      }
    }
  }

  // check if horizontal four in a row (same as veritcal after a transpose on gameboard)
  function transpose(arr) {
    return Object.keys(arr[0]).map(function(col) {
        return arr.map(function(row) { return row[col]; });
    });
  }
  let transposedBoard = transpose(gameBoard);

  for (let i=0; i < transposedBoard.length; i++) {
    let column = transposedBoard[i];
    let prev = null;
    let inARow = 0;
    for (let j=0; j < column.length; j++) {
      if (column[j] !== prev && column[j] !== false) {
        prev = column[j];
        inARow = 1;
      } else if (column[j] === prev && column[j] !== false) {
        inARow += 1;
      }
      if (inARow === 4 && prev === "red") {
        alert("Player 1 wins!");
        document.location.reload();
      } else if (inARow === 4 && prev === "yellow") {
        alert("Player 2 wins!");
        document.location.reload();
      }
    }
  }
  // check for down right diagonal four in a row down the left
  for (let i=3; i < gameBoard.length; i++) {
    let x = 0;
    let y = i;
    let prev = null;
    let inARow = 0;
    while (y >= 0) {
      if (gameBoard[x][y] !== prev && gameBoard[x][y] !== false) {
        prev = gameBoard[x][y];
        inARow = 1;
      } else if (gameBoard[x][y] === prev && gameBoard[x][y] !== false ) {
        inARow += 1;
      }
      if (inARow === 4 && prev === "red") {
        alert("Player 1 wins!");
        document.location.reload();
      } else if (inARow === 4 && prev === "yellow") {
        alert("Player 2 wins!");
        document.location.reload();
      }
      x++;
      y--;
    }
  }
  // check for down left diagonal four in a row down the right

  // check for down right diagonal four in a row along the top

  // check for down left diagonal four in a row along the top

}

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

setInterval(draw, 150);
