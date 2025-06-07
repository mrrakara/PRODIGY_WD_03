let winnerContainer = document.getElementById("winner-box");
let winnerMessage = document.getElementById("winner-msg");
let boxes = document.querySelectorAll(".box");

// helps to identify the turn of X & Y
let turnX = true;

// Storing total(8) winning pattern
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Winner Box Display
winnerContainer.style.display = "none";
function winnerBoxToggle() {
  winnerContainer.style.display = "none";
}

// Show Winner
function showWinner(winner) {
  winnerContainer.style.display = "flex";
  winnerMessage.innerHTML = `Winner - ${winner}`;
}

function resetGame() {
  let turnX = true;
  // enable all buttons
  for (let x of boxes) {
    x.disabled = false;
    x.innerHTML = "";
  }
}

function restartGame() {
  let turnX = true;
  // hide message container
  winnerContainer.style.display = "none";
  // enable all buttons
  for (let x of boxes) {
    x.disabled = false;
    x.innerHTML = "";
  }
}

// Adding click event on each boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      box.style.color = "red";
      turnX = false;
      // Prevent updating value
      box.disabled = true;
    } else {
      box.innerHTML = "O";
      box.style.color = "green";
      turnX = true;
      // Prevent updating value
      box.disabled = true;
    }
    checkWinner();
  });
});

// Check for the winner
function checkWinner() {
  for (let x of winPattern) {
    let position1 = boxes[x[0]].innerHTML;
    let position2 = boxes[x[1]].innerHTML;
    let position3 = boxes[x[2]].innerHTML;

    // checking boxes are not empty
    if (position1 != "" && position2 != "" && position3 != "") {
      // all value is equal means winner
      if (position1 === position2 && position2 === position3) {
        // disable button after winner found
        for (let x of boxes) {
          x.disabled = true;
        }

        // person at postion1 will be winner
        showWinner(position1);
      }
    }
  }
}
