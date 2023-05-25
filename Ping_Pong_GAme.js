// way-one 
// const ball = document.getElementById("ball");
// const rodTop = document.getElementById("rod-top");
// const rodBottom = document.getElementById("rod-bottom");

// const GAME_WIDTH = 400;
// const GAME_HEIGHT = 400;

// let ballX = 190;
// let ballY = 190;
// let ballSpeedX = 2;
// let ballSpeedY = 2;

// function updateBallPosition() {
//   ballX += ballSpeedX;
//   ballY += ballSpeedY;

//   // Check collision with walls
//   if (ballX <= 0 || ballX + 20 >= GAME_WIDTH) {
//     ballSpeedX *= -1; // Reverse horizontal direction
//   }

//   // Check collision with rods
//   if (ballY <= 20 && ballX + 20 >= rodTop.offsetLeft && ballX <= rodTop.offsetLeft + 100) {
//     ballSpeedY *= -1; // Reverse vertical direction
//   } else if (ballY + 20 >= GAME_HEIGHT - 20 && ballX + 20 >= rodBottom.offsetLeft && ballX <= rodBottom.offsetLeft + 100) {
//     ballSpeedY *= -1; // Reverse vertical direction
//   }

//   ball.style.left = ballX + "px";
//   ball.style.top = ballY + "px";
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "a") {
//     moveRod(-10); // Move left
//   } else if (event.key === "d") {
//     moveRod(10); // Move right
//   }
// });

// function moveRod(delta) {
//   const currentLeft = rodTop.offsetLeft;
//   const newLeft = currentLeft + delta;

//   if (newLeft >= 0 && newLeft + 100 <= GAME_WIDTH) {
//     rodTop.style.left = newLeft + "px";
//     rodBottom.style.left = newLeft + "px";
//   }
// }

// function gameLoop() {
//   updateBallPosition();
//   requestAnimationFrame(gameLoop);
// }

// gameLoop();



// way-two 


// const ball = document.getElementById("ball");
// const rodTop = document.getElementById("rod-top");
// const rodBottom = document.getElementById("rod-bottom");

// const GAME_WIDTH = 400;
// const GAME_HEIGHT = 400;

// let ballX = 190;
// let ballY = 190;
// let ballSpeedX = 2;
// let ballSpeedY = 2;

// let isGameStarted = false;

// function updateBallPosition() {
//   if (!isGameStarted) return;

//   ballX += ballSpeedX;
//   ballY += ballSpeedY;

//   // Check collision with walls
//   if (ballX <= 0 || ballX + 20 >= GAME_WIDTH) {
//     ballSpeedX *= -1; // Reverse horizontal direction
//   }

//   // Check collision with rods
//   if (ballY <= 20 && ballX + 20 >= rodTop.offsetLeft && ballX <= rodTop.offsetLeft + 100) {
//     ballSpeedY *= -1; // Reverse vertical direction
//   } else if (ballY + 20 >= GAME_HEIGHT - 20 && ballX + 20 >= rodBottom.offsetLeft && ballX <= rodBottom.offsetLeft + 100) {
//     ballSpeedY *= -1; // Reverse vertical direction
//   } else if (ballY <= 0 || ballY + 20 >= GAME_HEIGHT) {
//     isGameStarted = false;
//     alert("Ball missed the rod! Game over.");
//     resetGame();
//   }

//   ball.style.left = ballX + "px";
//   ball.style.top = ballY + "px";
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "a") {
//     moveRod(-10); // Move left
//   } else if (event.key === "d") {
//     moveRod(10); // Move right
//   } else if (event.key === "Enter") {
//     if (!isGameStarted) {
//       isGameStarted = true;
//       resetGame();
//     }
//   }
// });

// function moveRod(delta) {
//   const currentLeft = rodTop.offsetLeft;
//   const newLeft = currentLeft + delta;

//   if (newLeft >= 0 && newLeft + 100 <= GAME_WIDTH) {
//     rodTop.style.left = newLeft + "px";
//     rodBottom.style.left = newLeft + "px";
//   }
// }

// function resetGame() {
//   ballX = 190;
//   ballY = 190;
//   ball.style.left = ballX + "px";
//   ball.style.top = ballY + "px";
// }

// function gameLoop() {
//     if (isGameStarted) {
//       updateBallPosition();
//     }
    
//     requestAnimationFrame(gameLoop);
//   }
  

// gameLoop();
const ball = document.getElementById("ball");
const rodTop = document.getElementById("rod-top");
const rodBottom = document.getElementById("rod-bottom");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;

let ballX = 190;
let ballY = 190;
let ballSpeedX = 2;
let ballSpeedY = 2;

let isGameStarted = false;
let score = 0;

function updateBallPosition() {
  if (!isGameStarted) return;

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check collision with walls
  if (ballX <= 0 || ballX + 20 >= GAME_WIDTH) {
    ballSpeedX *= -1; // Reverse horizontal direction
  }

  // Check collision with rods
  if (ballY <= 20 && ballX + 20 >= rodTop.offsetLeft && ballX <= rodTop.offsetLeft + 100) {
    ballSpeedY *= -1; // Reverse vertical direction
    increaseScore();
  } else if (ballY + 20 >= GAME_HEIGHT - 20 && ballX + 20 >= rodBottom.offsetLeft && ballX <= rodBottom.offsetLeft + 100) {
    ballSpeedY *= -1; // Reverse vertical direction
    increaseScore();
  } else if (ballY <= 0 || ballY + 20 >= GAME_HEIGHT) {
    isGameStarted = false;
    alert("Game over! Your score: " + score);
    resetGame();
  }

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function increaseScore() {
  score++;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    moveRod(-10); // Move left
  } else if (event.key === "d") {
    moveRod(10); // Move right
  } else if (event.key === "Enter") {
    if (!isGameStarted) {
      isGameStarted = true;
      resetGame();
    }
  }
});

function moveRod(delta) {
  const currentLeft = rodTop.offsetLeft;
  const newLeft = currentLeft + delta;

  if (newLeft >= 0 && newLeft + 100 <= GAME_WIDTH) {
    rodTop.style.left = newLeft + "px";
    rodBottom.style.left = newLeft + "px";
  }
}

function resetGame() {
  score = 0;
  ballX = 190;
  ballY = 190;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function gameLoop() {
  if (isGameStarted) {
    updateBallPosition();
  }
  
  requestAnimationFrame(gameLoop);
}

gameLoop();
