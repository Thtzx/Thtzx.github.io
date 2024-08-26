
const game = document.getElementById("game");
const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");
const ball = document.getElementById("ball");
const gameHeight = 600;
const gameWidth = 800;

let paddle1Y = 250;
let paddle2Y = 250;
const paddleHeight = 100;
const paddleSpeed = 60;
let ballX = 390;
let ballY = 290;
let ballSpeedX = 5.5;
let ballSpeedY = 5.5;



function movePaddles() {
    document.addEventListener('keydown', event => {
        switch(event.key) {
            case 'w':
                if (paddle1Y > 0) {
                    paddle1Y -= paddleSpeed;
                    paddle1.style.top = `${paddle1Y}px`;
                }
                break;
            case 's':
                if (paddle1Y < gameHeight - paddleHeight) {
                    paddle1Y += paddleSpeed;
                    paddle1.style.top = `${paddle1Y}px`;
                }
                break;
            case 'o':
                if (paddle2Y > 0) {
                    paddle2Y -= paddleSpeed;
                    paddle2.style.top = `${paddle2Y}px`;
                }
                break;
            case 'l':
                if (paddle2Y < gameHeight - paddleHeight) {
                    paddle2Y += paddleSpeed;
                    paddle2.style.top = `${paddle2Y}px`;
                }
                break;
        }
    });
}

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= gameHeight - 20) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX <= 20 && ballY + 10 >= paddle1Y && ballY <= paddle1Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX >= gameWidth - 30 && ballY + 10 >= paddle2Y && ballY <= paddle2Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX <= 0 || ballX >= gameWidth - 20) {
        resetBall();
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function resetBall() {
    ballX = 390;
    ballY = 290;
    ballSpeedX = -ballSpeedX;
}

function gameLoop() {
    moveBall();
    requestAnimationFrame(gameLoop);
}

movePaddles();
gameLoop();
