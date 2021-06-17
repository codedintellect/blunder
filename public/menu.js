$(document).ready(function() {

  $(".user_tile").click(
    function menuOpen() {
    if(  $("#user_dropdown").css("display") == "none")
      $("#user_dropdown").css("display", "flex");
    else
      $("#user_dropdown").css("display", "none");
  });


  $("#settings").click(
    function a() {
      $("#settings_window").show();
      $(".settings_window_bg").show();
    }
  )

  $(".settings_window_close").click(
    function b() {
      $("#settings_window").hide();
      $(".settings_window_bg").hide();
    }
  )
});


$(document).click(function(event) {
  var $target = $(event.target);
  if(!$target.closest(".user_tile").length)
    $("#user_dropdown").css("display", "none");
});
