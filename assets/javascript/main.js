const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let running = true;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

function resetGame() {
    attempts = 0;
    running = true;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    message.textContent = '';
    attemptsDisplay.textContent = 'Attempts: 0';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.style.display = 'inline-block';
    resetButton.style.display = 'none';
}

function handleGuess() {
    if (!running) return;

    let guess = Number(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number";
    } 
    else if (guess < minNum || guess > maxNum) {
        message.textContent = "Please enter a valid number";
    } 
    else {
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        
        if (guess < answer) {
            message.textContent = 'TOO LOW! TRY AGAIN!';
        } 
        else if (guess > answer) {
            message.textContent = 'TOO HIGH! TRY AGAIN!';
        } 
        else {
            message.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            running = false;
            guessInput.disabled = true;
            guessButton.style.display = 'none';
            resetButton.style.display = 'inline-block';
        }
    }
    guessInput.value = '';
}

guessButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', resetGame);
guessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleGuess();
    }
});
