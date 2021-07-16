var b = $("#board");
var ctx = b[0].getContext("2d");
var mouseX, mouseY, lastX, lastY, p;
var gco;

b.mousemove(function(event) {
  lastX = mouseX;
  lastY = mouseY;
  mouseX = event.offsetX * b.attr("width") / b.width();
  mouseY = event.offsetY * b.attr("height") / b.height();
  drawer(event.buttons == 1);
  ctx.lineWidth = $(".brush_width").val();
  ctx.strokeStyle = $(".pallete_color").val();
  $(".pallete_color_label").html($(".pallete_color").val());
  ctx.globalCompositeOperation = gco;
});


function drawer(drag) {
  if(drag) {
    p = new Path2D();
    ctx.lineJoin = 'round';
    ctx.lineCap = "round";
    p.moveTo(lastX, lastY);
    p.lineTo(mouseX,mouseY);
    ctx.stroke(p);
  }
}

  document.querySelector('.clear').onclick = function(){
    ctx.clearRect(0, 0, 800, 800);
    ctx.beginPath();
  }

  document.querySelector(".save").onclick = function(){
    var b = document.getElementById("board");
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = b.toDataURL();
    link.click();
    link.delete;
  };
