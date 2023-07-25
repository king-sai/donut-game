let donut = document.getElementById('donut');
let grandpa = document.getElementById('grandpa');
let guy = document.getElementById('guy');

// Initialize positions
donut.style.top = '50%';
donut.style.left = '50%';
grandpa.style.top = '25%';
grandpa.style.left = '25%';
guy.style.top = '75%';
guy.style.left = '75%';

let donutSpeed = 3;
let villianSpeed = 1;

// Listen for arrow keys to move Donut
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            donut.style.top = parseInt(donut.style.top) - donutSpeed + '%';
            break;
        case 'ArrowDown':
            donut.style.top = parseInt(donut.style.top) + donutSpeed + '%';
            break;
        case 'ArrowLeft':
            donut.style.left = parseInt(donut.style.left) - donutSpeed + '%';
            break;
        case 'ArrowRight':
            donut.style.left = parseInt(donut.style.left) + donutSpeed + '%';
            break;
    }
});

// Move villains toward Donut
setInterval(function() {
    if (parseInt(grandpa.style.top) < parseInt(donut.style.top)) {
        grandpa.style.top = parseInt(grandpa.style.top) + villianSpeed +'%';
    } else {
        grandpa.style.top = parseInt(grandpa.style.top) - villianSpeed + '%';
    }

    if (parseInt(grandpa.style.left) < parseInt(donut.style.left)) {
        grandpa.style.left = parseInt(grandpa.style.left) + villianSpeed + '%';
    } else {
        grandpa.style.left = parseInt(grandpa.style.left) - villianSpeed + '%';
    }

    if (parseInt(guy.style.top) < parseInt(donut.style.top)) {
        guy.style.top = parseInt(guy.style.top) + villianSpeed + '%';
    } else {
        guy.style.top = parseInt(guy.style.top) - villianSpeed + '%';
    }

    if (parseInt(guy.style.left) < parseInt(donut.style.left)) {
        guy.style.left = parseInt(guy.style.left) + villianSpeed + '%';
    } else {
        guy.style.left = parseInt(guy.style.left) - villianSpeed + '%';
    }
}, 100);

// Get the game board element
let gameBoard = document.getElementById('game-board');

// Listen for touch events on the game board
gameBoard.addEventListener('touchstart', handleTouchStart, false);
gameBoard.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

// Save the position when the touch starts
function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

// Determine the direction of the swipe and move Donut
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { // Most significant.
        if (xDiff > 0) {
            /* left swipe */
            donut.style.left = parseInt(donut.style.left) - donutSpeed + '%';
        } else {
            /* right swipe */
            donut.style.left = parseInt(donut.style.left) + donutSpeed + '%';
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            donut.style.top = parseInt(donut.style.top) - donutSpeed + '%';
        } else {
            /* down swipe */
            donut.style.top = parseInt(donut.style.top) + donutSpeed + '%';
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
