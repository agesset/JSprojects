const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const paddle1Color = "blue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const boardBackground = "green";
const paddleSpeed = 50;
ball = {
    x: gameWidth/2,
    y: gameHeight/2,
    xDirection : 0,
    yDirection : 0,
    radius : 0,


}
const paddle1 = {

    x : 0,
    y : 0,
    width : 20,
    height : 50
};
const paddle2 = {

    x : gameWidth - 20,
    y : gameHeight - 50,
    width : 20,
    height : 50
};
let playerScore1 = 0;
let playerScore2 = 0;

initGame();
window.addEventListener("keydown",movePaddle);
resetBtn.addEventListener("click",restartGame);
/**
 * 
 */
function initGame(){
    //createBall();
    clearBoard();
    drawPaddle();
};
/**
 * 
 */
function createBall(){
    ctx.fillStyle = ballColor;
};

/**
 * 
 */
function moveBall(){

};

function clearBoard(){
   ctx.fillStyle = boardBackground;
   ctx.fillRect(0, 0, gameWidth, gameHeight);
}
/**
 * 
 */
function drawPaddle(){
    ctx.strokeSyle = paddleBorder;// define the paddle color
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};

/**
 * 
 */
function movePaddle(event){
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;
    switch(keyPressed){
        case(paddle2Up):
            if(paddle2.y > 0){
                paddle2.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddle2.y > 0){
                paddle2.y += paddleSpeed;
            }
            break;
    }
    
};

/**
 * 
 */
function handleCollision(){

};

/**
 * 
 */
function checkGoal(){

};

/**
 * 
 */
function restartGame(){

};
