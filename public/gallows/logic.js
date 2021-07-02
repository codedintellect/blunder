var b = $(".state");
var ctx = b[0].getContext("2d");
var wrongs = 0;
var word = "Fronddi";

function draw() {
  switch (wrongs) {
    case 1: alert("1 mistake");
    ctx.beginPath();
    ctx.rect(200, 100, 10, 500);
    ctx.closePath();
    ctx.fill();break;
    case 2: alert("2 mistake");
    ctx.beginPath();
    ctx.rect(140, 600, 240, 6);
    ctx.closePath();
    ctx.fill();break;
    case 3: alert("3 mistake");
    ctx.beginPath();
    ctx.rect(140, 100, 500, 6);
    ctx.closePath();
    ctx.fill();break;
    case 4: alert("4 mistake");
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineWidth = 6;
    ctx.lineTo(360, 103);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();break;
    case 5: alert("5 mistake");
    ctx.beginPath();
    ctx.rect(590, 100, 10, 60);
    ctx.closePath();
    ctx.fill();break;
  }
}


for (var i = 0; i < word.length; i++)
$('.result').append("<div class='wordTile' id="+ i +"></div>");

$('.wordInput').on('keypress', function (e) {
  if(e.which === 13){
    if ((word.toLowerCase().indexOf($('.wordInput').val()) > -1) || (word.indexOf($('.wordInput').val()) > -1))
    {
      for (var i = 0; i < word.length; i++)
      {
        if($('.wordInput').val().toLowerCase() == word[i].toLowerCase())
        $('#'+ i).html(word[i]);
      }
    }
    else {
      wrongs++;
      draw();
    }
  }
})
