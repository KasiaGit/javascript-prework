let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
let argButtonName, buttonTest;
const buttonRock    = document.getElementById('button-rock');
const buttonPaper   = document.getElementById('button-paper');
const buttonScissor = document.getElementById('button-scissors');

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  /**
 * Describe this function...
 */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nozyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!')
    }
    else if (argPlayerMove === argComputerMove) {
      printMessage('Remis!')
    }
    else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function () {
  buttonClicked('Guzik kamień');
});

buttonPaper.addEventListener('click', function () {
  buttonClicked('Guzik papier');
});
buttonScissor.addEventListener('click', function () {
  buttonClicked('Guzik kamień');
});
