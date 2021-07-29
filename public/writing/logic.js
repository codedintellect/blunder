var text = "Он шел в %с. День был %п и %п. Ничто не могло испортить его, разве что %с.";
var noun = [];
var adject = [];
var verb = [];
var adverb = [];
var c, adj, v, adv = 0;

$(document).ready(function a() {
   wordsInput();

   if (Notification.permission !== 'granted')
   Notification.requestPermission();
});
  /*function generate() {
    var $input = $("input"),
    $buffer = $(".input-buffer");

    $("input").on('input', function() {
      $("input").each(function(index) {
        $buffer.text($(this).val());
        $(this).width($buffer.width());
    });
  })
}*/


function messageOut() {
  $("#message").css({"transform":"translate(-50%, 0%)", "top": "10px", "visibility": "visible"});
  textConvert();
  saveInputs();

  setTimeout(messageIn, 4000);
}

function messageIn() {
  $("#message").css({"transform":"translate(-50%, -100%)", "top": "0px", "visibility": "hidden"});
}



function wordsInput() {
  c = (text.match(/\%с/g) || []).length;
  adj = (text.match(/\%п/g) || []).length;
  v = (text.match(/\%г/g) || []).length;
  adv = (text.match(/\%н/g) || []).length;

  if(c != 0) $(".wordsList").append("<p>Существительные:</p>")
  for (var i = 0; i < c; i++)
    $(".wordsList").append("<input></input>")

  if(adj != 0) $(".wordsList").append("<p>Прилагательные:</p>")
  for (var i = 0; i < adj; i++)
    $(".wordsList").append("<input></input>")

  if(v != 0) $(".wordsList").append("<p>Глаголы:</p>")
  for (var i = 0; i < v; i++)
    $(".wordsList").append("<input></input>")

  if(adv != 0) $(".wordsList").append("<p>Наречия:</p>")
  for (var i = 0; i < adv; i++)
    $(".wordsList").append("<input></input>")
}

function saveInputs() {
  $("input").each(function(index) {
      noun.push($(this).val());   // DOESN'T WORK NORMALLY!
    })
  alert(noun);
}

function textConvert() {
  var text = $(".textInput").val();
  var newtext = text.replaceAll("---", "<input></input>");
}

function sentencesClick() {
  $(".sentences").css("display", "flex");
  $(".start").css("display", "none");
}

function wordsClick() {
  $(".words").css("display", "flex");
  $(".start").css("display", "none");
}
