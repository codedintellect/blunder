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
  a[0] = mouseX; a[1] = mouseY;
});

var a = [30, 10];

function setup() {
  ctx.fillStyle = "#ffffff";
  p = new Path2D;
  p.beginPath
  p.lineTo(a[0] + 50, a[1] + 0);
  p.bezierCurveTo(a[0] + 50, a[1] + 0, a[0] + 60, a[1] + 0, a[0] + 60, a[1] + 10);
  p.lineTo(a[0] + 60, a[1] + 110);
  p.bezierCurveTo(a[0] + 60, a[1] + 110, a[0] + 60, a[1] + 120, a[0] + 50, a[1] + 120);
  p.lineTo(a[0] + 10, a[1] + 120);
  p.bezierCurveTo(a[0] + 10, a[1] + 120, a[0] + 0, a[1] + 120, a[0] + 0, a[1] + 110);
  p.lineTo(a[0] + 0, a[1] + 10);
  p.bezierCurveTo(a[0] + 0, a[1] + 10, a[0] + 0, a[1] + 0, a[0] + 10, a[1] + 0);
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
