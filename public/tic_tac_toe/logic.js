var b = $("#board");
var ctx = b[0].getContext("2d");
var moves = [];

function draw() {
  ctx.fillStyle = "#3b4352";
  ctx.fillRect(800/3-10, 0, 20, 800);
  ctx.fillRect(1600/3-10, 0, 20, 800);
  ctx.fillRect(0, 800/3-10, 800, 20);
  ctx.fillRect(0, 1600/3-10, 800, 20);

  for (var i = 0; i < moves.length; i++) {
    if (i%2 == 0) {
      ctx.strokeStyle = "#383f4e";
      ctx.lineWidth = 25;
      ctx.beginPath();
      ctx.moveTo(40 + (800/3) * moves[i][0], 40 + (800/3) * moves[i][1]);
      ctx.lineTo((800/3) * (moves[i][0]+1) - 40, (800/3) * (moves[i][1]+1) - 40);
      ctx.moveTo(40 + (800/3) * moves[i][0], (800/3) * (moves[i][1]+1) - 40);
      ctx.lineTo((800/3) * (moves[i][0]+1) - 40, 40 + (800/3) * moves[i][1]);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.strokeStyle = "#303744";
      ctx.lineWidth = 25;
      ctx.beginPath();
      ctx.arc(
        (800/3) * moves[i][0] + 800/6,
        (800/3) * moves[i][1] + 800/6,
        800/6-40, 0, 2 * Math.PI
      );
      ctx.closePath();
      ctx.stroke();
    }
  }
}

b.mousedown(function(e) {
  var x = Math.floor(e.offsetX / 800 * 3);
  var y = Math.floor(e.offsetY / 800 * 3);
  for (var i = 0; i < moves.length; i++) {
    if (moves[i][0] == x && moves[i][1] == y) break;
    if (i == moves.length - 1) moves.push([x, y]);
  }
  if (moves.length == 0) moves.push([x, y]);
  draw();
});

draw();
