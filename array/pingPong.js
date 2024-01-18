const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const paddle1Color = "forestgreen";
const paddle2Color = "blue";
const paddleBorder = "black";
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
}
;

function initGame(){

};
function createBall(){

};
function moveBall(){

};
function drawPaddle(){
    ctx.strokeSyle = paddleBorder;// define the paddle color
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function movePaddle(){

};
function handleCollision(){

};
function checkGoal(){

};
function restartGame(){

};
