var ctx;
var canvas;

let objects = [
  {"name":"Bone", "draw":()=>{
    ctx.beginPath();
    ctx.rect(600, 0, 650, 100);
    ctx.fill();
    ctx.closePath();
  }},
];

let mouseX, mouseY;

$(document).ready(function() {
  $(".tilesBagArrow").click(function clicked() {
    $("#tilesBag").css("right", "0px");
  })})

function draw() {
    canvas = document.getElementById("board");
    ctx = canvas.getContext("2d");
    var x, y;
}

document.body.addEventListener("mousemove", (event)=>{
  mouseX = event.clientX;
  mouseY = event.clientY;
  drawer();
});


  function drawer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let noObjectFound = true;

  var mouseXFixed, mouseYFixed;
  mouseXFixed = mouseX - parseInt($("#board").css("left").substring(0, $("#board").css("left").length - 2));
  //alert(mouseXFixed);

  for (let object of objects) {

    object.draw();

    if (noObjectFound && ctx.isPointInPath(mouseX, mouseY)) {
      alert(object.name);
      noObjectFound = false;
    }
  }
}
document.addEventListener("DOMContentLoaded", draw);
document.addEventListener("DOMContentLoaded", drawer);
