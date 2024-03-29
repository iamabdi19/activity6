var gameButton = document.getElementById('gameButton');
var level = 1;
var clickCount = 0;
var delay = 500; // Initial delay in milliseconds

function moveButton() {
    var a = Math.random() * (window.innerWidth - gameButton.offsetWidth);
    var b = Math.random() * (window.innerHeight - gameButton.offsetHeight);
    gameButton.style.marginLeft = `${a}px`;
    gameButton.style.marginTop = `${b}px`;
}

function onButtonHover() {
    if (level <= 6) {
        setTimeout(moveButton, Math.max(0, delay - (level - 1) * 100)); 
    }
}

function onButtonClick() {
    clickCount++;
    if (clickCount >= 3) {
        if (level === 5) {
            alert("Be ready!! Level 6 is almost impossible to win!");
            delay = 0; // No delay for level 6
            level++;
        } else if (level === 6) {
            alert("Congratulations! You've successfully completed all levels and won the game!");
            // Ask the player if they want to restart the game
            if (confirm("Would you like to play again?")) {
                restartGame(); // Restart the game if the player agrees
            }
        } else {
            alert(`Great! You've moved to level ${level + 1}.`);
            level++;
        }
        clickCount = 0; // Reset click count for the next level
    }
}

function restartGame() {
    level = 1;
    clickCount = 0;
    delay = 500; // Reset delay to initial value for lvl 1
    moveButton(); 
}

gameButton.addEventListener('mouseover', onButtonHover);
gameButton.addEventListener('click', onButtonClick);
