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
