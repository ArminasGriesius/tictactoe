function checkWinner() {
  for (const combination of winnerCombinations) {
    const [a, b, c] = combination;
    const divA = divBoxes[a];
    const divB = divBoxes[b];
    const divC = divBoxes[c];

    if (
      divA.classList.contains("x") &&
      divB.classList.contains("x") &&
      divC.classList.contains("x")
    ) {
      tictactoeWin.play();

      divA.classList.add("green");
      divB.classList.add("green");
      divC.classList.add("green");
      displayWinner("X Wins!");
      return;
    } else if (
      divA.classList.contains("o") &&
      divB.classList.contains("o") &&
      divC.classList.contains("o")
    ) {
      tictactoeWin.play();
      divA.classList.add("green");
      divB.classList.add("green");
      divC.classList.add("green");
      displayWinner("O Wins!");

      return;
    } else if (
      Array.from(divBoxes).every(
        (div) => div.classList.contains("x") || div.classList.contains("o")
      ) &&
      !winnerCombinations.some((combination) =>
        combination.every((index) => divBoxes[index].classList.contains("x"))
      ) &&
      !winnerCombinations.some((combination) =>
        combination.every((index) => divBoxes[index].classList.contains("o"))
      )
    ) {
      tictactoeDraw.play();
      displayWinner("It's a Draw!");
      return;
    }
  }
}
