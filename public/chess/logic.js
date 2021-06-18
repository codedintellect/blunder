function draw() {
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    var x, y, c = 0;

for (x = 0; x <= 8; x++)
{
  for (y = 0; y <= 8; y++)
  {
    c++;
    ctx.beginPath();
    ctx.rect(100*x, 100*y, 100 + 100*x, 100 + 100*y);
    if(c%2 == 0)
      ctx.fillStyle = "white";
    else
      ctx.fillStyle = "black";
    ctx.fill();
  }
}}
document.addEventListener("DOMContentLoaded", draw);
