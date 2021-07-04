$(document).ready(function() {

  $("#user").click(
    function a() {
      $("#profile").show();
      $(".profile_bg").show();
  });

  $(".profile_close").click(
    function b() {
      $("#profile").hide();
      $(".profile_bg").hide();
    }
  );

  $("#leaderboard").click(
    function a() {
      $("#leaderboard_popup").show();
  });

  $(document).click(function(){
    var target = $(event.target);
    if ((target.is("#leaderboard")) || (target.is("#leaderboard_popup")))
      $('#leaderboard_popup').show();
    else
      $('#leaderboard_popup').hide();
});
});
