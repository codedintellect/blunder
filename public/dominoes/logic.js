var b = $("#board");
var ctx = b[0].getContext("2d")

var mouseX, mouseY, lastX, lastY;

b.mousemove(function(event) {
  lastX = mouseX;
  lastY = mouseY;
  mouseX = event.offsetX * b.attr("width") / b.width();
  mouseY = event.offsetY * b.attr("height") / b.height();
  drawer(event.buttons == 1);
});

function drawer(drag) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var p = new Path2D("M0 0 h 100 v 100 h -100 z");
  ctx.fillStyle = "#000000";
  ctx.fill(p);
  if (ctx.isPointInPath(p, lastX, lastY) && drag) {

  }
}
drawer(false);

document.getElementById('clickme').onclick = function clickEvent(e) {
      // e = Mouse click event.
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      console.log("Left? : " + x + " ; Top? : " + y + ".");
    }
