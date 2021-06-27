var b = $("#board");
var ctx = b[0].getContext("2d");
var p;

var mouseX, mouseY, lastX, lastY;

b.mousemove(function(event) {
  lastX = mouseX;
  lastY = mouseY;
  mouseX = event.offsetX * b.attr("width") / b.width();
  mouseY = event.offsetY * b.attr("height") / b.height();
  drawer(event.buttons == 1);
});


function setup() {
  //p = new Path2D("M0 0 h 60 v 120 h -60 z");
  ctx.fillStyle = "#ffffff";
  //ctx.fill(p);
  p = new Path2D;
  p.beginPath
  p.lineTo(50, 0);
  p.bezierCurveTo(50, 0, 60, 0, 60, 10);
  p.lineTo(60, 110);
  p.bezierCurveTo(60, 110, 60, 120, 50, 120);
  p.lineTo(10, 120);
  p.bezierCurveTo(10, 120, 0, 120, 0, 110);
  p.lineTo(0, 10);
  p.bezierCurveTo(0, 10, 0, 0, 10, 0);
  p.closePath;

  ctx.fill(p);
}

function drawer(drag) {

  if (ctx.isPointInPath(p, lastX, lastY) && drag) {
    p = new Path2D;
    //p = new Path2D("M" + (mouseX-30) + " " + (mouseY-60) + " h 60 v 120 h -60 z");

    p.beginPath;
    p.moveTo(mouseX + 50, mouseY + 0);
    p.bezierCurveTo(mouseX + 50, mouseY + 0, mouseX + 60, mouseY + 0, mouseX + 60, mouseY + 10);
    p.lineTo(mouseX + 60, mouseY + 110);
    p.bezierCurveTo(mouseX + 60, mouseY + 110, mouseX + 60, mouseY + 120, mouseX + 50, mouseY + 120);
    p.lineTo(mouseX + 10, mouseY + 120);
    p.bezierCurveTo(mouseX + 10, mouseY + 120, mouseX + 0, mouseY + 120, mouseX + 0, mouseY + 110);
    p.lineTo(mouseX + 0, mouseY + 10);
    p.bezierCurveTo(mouseX + 0, mouseY + 10, mouseX + 0, mouseY + 0, mouseX + 10, mouseY + 0);
    p.closePath;

    ctx.clearRect(0, 0, b.width(), b.height());
    ctx.fill(p);
  }
}

document.getElementById('board').onclick = function clickEvent(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  console.log("Left? : " + x + " ; Top? : " + y + ".");
}

setup();
