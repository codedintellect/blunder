$(document).ready(
  function generate() {
    var $input = $("input"),
    $buffer = $(".input-buffer");

    $("input").on('input', function() {
      $("input").each(function(index) {
        $buffer.text($(this).val());
        $(this).width($buffer.width());
    });
  })
  }
)

function messageOut() {
  $("#message").css({"transform":"translateY(0%)", "top": "10px", "visibility": "visible"});
  textConvert();
}

function textConvert() {
  var text = $(".textInput").val();
  var newtext = text.replaceAll("...", "<input></input>");
  $(".test").html(newtext);
}
