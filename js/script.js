let computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
}
else if (randomNumber == '2') {
    computerMove = 'papier';
} 
else if (randomNumber == '3') {
    computerMove = 'nozyce';
}
else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
let playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce.');
console.log('Wpisana odpowiedz to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} 
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nozyce';
}
else {
    playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);