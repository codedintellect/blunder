var notifBox = $("#notif_box");

$(document).ready( function a() {
    var value_or_null = (document.cookie.match(/^(?:.*;)?\s*NotifAllow\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
    //checkNotifState();
    if (Notification.permission !== 'granted' && value_or_null != "False") {
      notifBox.append('<div class="notif" id="0"><img class="notif_img"></img><div class="notif_text">Хотите ли вы получать уведомления о приходящих Вам приглашениях в игры?</div><div style="width: 100%; float: left;"><button class="notif_btn" onclick="notifActivation()">ДА</button><button class="notif_btn" onclick="setCookie()">НЕТ, СПАСИБО</button></div></div>'
      )
    };
});

function notifActivation() {
  Notification.requestPermission();
  $("#0").remove();
}


function setCookie() {
  $("#0").remove();
  const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "NotifAllow" + "=" + "False" + ";" + 365 + ";path=/";
}
