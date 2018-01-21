var canvas = document.getElementById("monCanvas");
var ctx = canvas.getContext("2d");

//carre rouge
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
//
// //cercle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.strokeStyle = "yellow";
// ctx.stroke();
// ctx.closePath();
//
// //rectangle bord bleu transparent
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

// la balle
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
// la raquette
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2; //position
var rightPressed = false; //mvmt
var leftPressed = false;
// les briques
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 40;
var brickHeight = 10;
var brickPadding = 5;
var brickOffsetTop = 20;
var brickOffsetLeft = 30;
// surement un prob ac la condition de l edge et brique

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) { //droite
      rightPressed = true;
  }
  else if(e.keyCode == 37) { // gauche
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = false;
  }
  else if(e.keyCode == 37) {
      leftPressed = false;
  }
}

// fonction dessiner (draw)
function dessinBalle(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#E5989B";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#B5838D";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
      var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#FFB4A2"; // ou FFCDB2
      ctx.fill();
      ctx.closePath();
    }
  }
}

function dessiner() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  dessinBalle();
  drawPaddle();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if(y + dy < ballRadius) {
    dy = -dy;
  } else if(y + dy > canvas.height-ballRadius) { // si touche le fond alors
    if(x > paddleX && x < paddleX + paddleWidth) { // centre de balle entre extremite de raquette ok
      if(y= y-paddleHeight){
          dy = -dy  ;
			 }
    }
    else { // sinon pas ok
        alert("GAME OVER");
        document.location.reload();
    }
  }

// mvmt raquette
if(rightPressed && paddleX < canvas.width-paddleWidth) {
  paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
}

  x += dx;
  y += dy;

}

setInterval(dessiner, 15);
