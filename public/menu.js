$(document).ready(function() {

  $(".user_tile").click(
    function a() {
      $("#profile").show();
      $(".profile_bg").show();
  });

  $(".profile_close").click(
    function b() {
      $("#profile").hide();
      $(".profile_bg").hide();
    }
  )
});
