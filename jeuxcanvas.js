var canvas = document.getElementById("monCanvas");
var ctx = canvas.getContext("2d");

//carre rouge
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//cercle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.closePath();

//rectangle bord bleu transparent
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

// balle
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var balleRadius = 10;

// fonction dessiner (draw)

function dessinBalle(){
  ctx.beginPath();
  ctx.arc(x, y, balleRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function dessiner() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dessinBalle();
  x += dx;
  y += dy;
}

// setInterval(dessiner, 10);
