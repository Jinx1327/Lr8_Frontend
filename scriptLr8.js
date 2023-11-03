function startGame() {
    const userName = prompt("Введіть своє ім'я:");
    nameOfUser.innerHTML = userName;
}

let userScore = 0;
let computerScore = 0;

function playRound() {
    const outputUser = document.getElementById('outputUser');
    const scoreOutputUser = document.getElementById('scoreUser');
    const outputComputer = document.getElementById('outputComputer');
    const scoreOutputComputer = document.getElementById('scoreComputer');

    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    outputUser.innerHTML = userNumber;
    outputComputer.innerHTML = computerNumber;

    if (userNumber > computerNumber) {
        scoreOutputUser.innerHTML = ++userScore;
    } else if (userNumber < computerNumber) {
        scoreOutputComputer.innerHTML = ++computerScore;
    }

    // Перевірка на завершення гри
    if (userScore === 3 || computerScore === 3) {
        alert("Гра завершена! " + ( userScore === 3 ? nameOfUser.innerHTML : "Computer") + " переміг!");
        // Скидаємо рахунки
        userScore = 0;
        computerScore = 0;
        outputUser.innerHTML = "0";
        outputComputer.innerHTML = "0";
        scoreOutputUser.innerHTML = "0";
        scoreOutputComputer.innerHTML = "0";
    }
}
startGame();