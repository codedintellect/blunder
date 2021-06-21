function draw() {
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    var x, y;

for (x = 0; x <= 8; x++)
{
  for (y = 0; y <= 8; y++)
  {
    ctx.beginPath();
    ctx.rect(100*x, 100*y, 100 + 100*x, 100 + 100*y);
    if((x+y)%2 == 0)
      ctx.fillStyle = "white";
    else
      ctx.fillStyle = "black";
    ctx.fill();
  }
}}




function setup() {
  var fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

  fen = fen.split('/');

  for (var i = 0; i < 8; i++) {
    var x = 0;
    for (var j = 0; j < fen[i].length; j++) {
      if(isNaN(fen[i][j])) {
        $("#pieces").append("<div class='piece' style='top: " + i*12.5 + "%; left: "+ (x + j)*12.5+"%' id=" + fen[i][j] + ">" + fen[i][j] + "</div>");
      }
      else {
        x+= parseInt(fen[i][j]);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", draw);
document.addEventListener("DOMContentLoaded", setup);
