const playBoard = document.querySelector('.play-board')

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver =  () => {
    alert("Game over my boy :)")
}

const changeDirection = (e) => {
    // Change velocity value based on key press
    if(e.key === 'ArrowUp'){
        velocityX = 0;
        velocityY = -1
    } else if(e.key === 'ArrowDown'){
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === 'ArrowLeft'){
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === 'ArrowRight'){
        velocityX = 1;
        velocityY = 0;
    }
    
}

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area : ${foodY} / ${foodX}"></div>`;

    // Check if snake ate the food
    if(snakeX === foodX && snakeY === foodY){
        // Change food position
        changeFoodPosition(); 
        // Add food to snake body;
        snakeBody.push([foodX, foodY])
        console.log(snakeBody);
    }

    for (let i = snakeBody.length - 1; i > 0; i--){
        // Shifting forward the value of the html elements in the snake body by one
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY] // Setting first element of snake body to current snake position

    snakeX += velocityX;
    snakeY += velocityY;

    // Check if snake head is out of the play-ground
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        // console.log('Game Over')
        gameOver = true;
    }

    for(i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area : ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
    } 
    playBoard.innerHTML = htmlMarkup; 

}

changeFoodPosition();
setInterval(initGame, 125);

document.addEventListener('keydown', changeDirection)