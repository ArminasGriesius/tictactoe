function resetGame() {
  divBoxes.forEach((box) => {
    box.classList.remove("x");
    box.classList.remove("o");
    box.classList.remove("green");
  });
}

function printPlayerX(selectedDiv) {
  if (
    document.getElementById(selectedDiv).classList.contains("o") ||
    document.getElementById(selectedDiv).classList.contains("x")
  ) {
    return;
  } else if (isXTurn && gameOngoing) {
    move.play();
    isXTurn = false;
    ticTacToeBox.classList.remove("x");
    document.getElementById(selectedDiv).classList.add("x");
    checkWinner();
    if (!gameOngoing) {
      return;
    }
    isOponentComputer ? printComputer() : ticTacToeBox.classList.add("o");
  }
}

function printPlayerO(selectedDiv) {
  if (
    document.getElementById(selectedDiv).classList.contains("o") ||
    document.getElementById(selectedDiv).classList.contains("x")
  ) {
    return;
  } else if (!isXTurn && gameOngoing && !isOponentComputer) {
    move.play();
    isXTurn = true;
    ticTacToeBox.classList.remove("o");
    ticTacToeBox.classList.add("x");
    document.getElementById(selectedDiv).classList.add("o");
    checkWinner();
    if (!gameOngoing) {
      return;
    }
  }
}

function printComputer() {
  var emptyDivs = Array.from(divBoxes).filter(
    (div) => !div.classList.contains("x") && !div.classList.contains("o")
  );
  if (emptyDivs.length > 0) {
    setTimeout(() => {
      move.play();
      var randomEmptyDiv =
        emptyDivs[Math.floor(Math.random() * emptyDivs.length)];
      randomEmptyDiv.classList.add("o");
      checkWinner();
      if (!gameOngoing) {
        return;
      } else {
        isXTurn = true;
        ticTacToeBox.classList.add("x");
      }
      return;
    }, 1000);
  }
}

function displayWinner(winner) {
  gameOngoing = false;
  document.getElementById("winningMessage").style.display = "flex";
  document.getElementById("startButton").innerHTML = "Restart!";
  document.getElementById("playerWon").innerHTML = winner;
}
