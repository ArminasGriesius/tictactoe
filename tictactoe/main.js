const move = new Audio("/files/tictactoeMove.mp3");
const startTictactoeSound = new Audio("/files/StartTictactoe.mp3");
const tictactoeWin = new Audio("/files/tictactoeWin.mp3");

const tictactoeDraw = new Audio("/files/tictactoeDraw.mp3");

const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameOngoing = false;
let isXTurn = null;
const ticTacToeBox = document.querySelector(".ticTacToeBox");
const divBoxes = document.querySelectorAll(".box");
let isOponentComputer = true;

function selectedOponent() {
  var selectedValue = document.getElementById("oponent").value;
  selectedValue == "computer"
    ? (isOponentComputer = true)
    : (isOponentComputer = false);
  return isOponentComputer;
}

function startGame() {
  startTictactoeSound.play();
  enableGameField();
  resetGame();
  document.getElementById("winningMessage").style.display = "none";
  ticTacToeBox.classList.add("x");
  gameOngoing = true;
  isXTurn = true;
  return;
}

function enableGameField() {
  divBoxes.forEach((div) => {
    div.addEventListener("click", () => {
      var divId = div.id;
      if (isXTurn) {
        printPlayerX(divId);
      } else if (!isXTurn) {
        printPlayerO(divId);
      }
    });
  });
}
