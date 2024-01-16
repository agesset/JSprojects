const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const paddle1Color = "forestgreen";
const paddle2Color = "blue";
const paddle1 = [
    x = 0,
    y = 0,
    width = 0,
    height = 0

];
const paddle2 = [
    x = 0,
    y = 0,
    width = 0,
    height = 0

];

function initGame(){

};
function createBall(){

};
function moveBall(){

};
function drawPaddle(){
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
};
function movePaddle(){

};
function handleCollision(){

};
function checkGoal(){

};
function restartGame(){

};
