var b = $(".state");
var ctx = b[0].getContext("2d");
var wrongs = 0;
var word = "DmitrievPlays";
var mistakes = ["M205 100v500", "M170 600h240", "M170 100h340", "M204 200L360 100", "M465 100v60", "M 465 160 A 1.42 1.42 0 0 1 465 240 A 1 1 0 0 1 465 160", "M465 240v180", "M465 250L420 320", "M465 250L510 320", "M465 420L425 520", "M465 420L505 520"];

function draw() {
  var path = new Path2D(mistakes[wrongs]);
  wrongs++;
  ctx.lineWidth = 6;
  ctx.stroke(path);
}

for (var i = 0; i < word.length; i++)
$('.result').append("<div class='wordTile' id="+ i +"></div>");

$('.wordInput').on('keypress', function (e) {
  if(e.which === 13) {
    if ((word.toLowerCase().indexOf($('.wordInput').val()) > -1) || (word.indexOf($('.wordInput').val()) > -1)) {
      for (var i = 0; i < word.length; i++) {
        if ($('.wordInput').val().toLowerCase() == word[i].toLowerCase())
        $('#'+ i).html(word[i]);
      }
    }
    else {
      draw();
    }
  }
})
