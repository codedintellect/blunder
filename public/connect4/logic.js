var b = $("#board");
var ctx = b[0].getContext("2d");
var moves = [];
var circles = new Array(7).fill(7);

function draw() {

  for (var x=0; x<7; x++)
  {
    for (var y=0; y<6; y++)
    {
      ctx.fillStyle = "#3b4352";
      ctx.fillRect(134*x, 134*y, 133, 133);
    }
  }

  for (var i = 0; i < moves.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = (i%2) ? "#0000ff" : "#ff0000";
    ctx.arc(66.5 + 134 * moves[i][0], 66.5 + 134 * moves[i][1], 50, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

b.mousedown(function(e) {
  var x = Math.floor(e.offsetX / 933 * 7);
  if(circles[x] > 0)
  {
    circles[x] -= 1;
    moves.push([x, circles[x]-1]);
  }
  console.log(x + "height: " + circles[x]);
  draw();
});
draw();
