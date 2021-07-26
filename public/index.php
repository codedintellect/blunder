<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk</title>
    <?php include "borrowed.php"; ?>
    <meta name="description" content="Игровой веб-сайт.">
    <link rel="stylesheet" href="colors.css"/>
    <link rel="stylesheet" href="style.css"/>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
    <script src="authHandler.js"></script>
  </head>
  <body>
    <header id="header">
      <div class="logo" title="Какие же мучения...">blunder.tk</div>
      <button class="topbar_btn" id="user" onclick='$("#profile").show();$(".wbg").show()'>Fronddi</button>
    </header>

    <!--NOTIFICATIONS-->

    <div id="notif_box" style="display:none;">
      <div class="notif">
        <img class="notif_img"></img>
        <div class="notif_text">Test notification</div>
      </div>
      <div class="notif">
        <img class="notif_img"></img>
        <div class="notif_text">Test notification</div>
      </div>
      <div class="notif">
        <img class="notif_img"></img>
        <div class="notif_text">Test notification</div>
      </div>
      <div class="notif">
        <img class="notif_img"></img>
        <div class="notif_text">Test notification</div>
      </div>
    </div>

    <div id="content">
      <div class="games">
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
        <button class="game"></button>
      </div>
    </div>

    <div class="wbg"></div>

    <div class="window" id="profile">
      <div class="window_header">Профиль
        <div class="window_close" onclick='$("#profile").hide();$(".wbg").hide()'></div>
      </div>
      <div style="display: flex; flex-direction: row;">
        <div class="profile_pic"></div>
        <div style="display: flex; flex-direction: column; padding: 16px;">
          <div style="position: relative; width: 100%; display: flex;">
            <div class="profile_name">Fronddi</div>
            <div class="profile_level">1</div>
          </div>
          <div class="profile_level_bar"></div>
        </div>
      </div>
      <div class="profile_friends">
        <div class="profile_friends_topbar">ДРУЗЬЯ</div>
          <div>
            <div class="profile_friend_tile">
              <img class="profile_friend_icon" width="40px" height="40px"></img>
              <div style="padding-left: 10px; font-size: 24px; word-break: break-all;">The_Super_Duper_Mega_Longest</div>
              <button class="profile_del_friend"><img src="close.svg" width="24px" height="24px"></button>
            </div>
            <div class="profile_friend_tile">
              <img class="profile_friend_icon" width="40px" height="40px"></img>
              <div style="padding-left: 10px; font-size: 24px;">The_Super_Duper_Mega_Longest</div>
              <button class="profile_del_friend"><img src="close.svg" width="24px" height="24px"></button>
            </div>
          </div>
      </div>

      <a class="profile_logout" onclick="">ВЫЙТИ</a>
    </div>

    <div class="window" style="height:454px;" id="register">
      <div id="fields" style="position:absolute;height:100%;width:100%;top:0;transition:.3s;left:100%;">
        <div style="position:absolute;transform:translate(-500px,0);top:90px;margin:0 30px;">
          <input type="text" placeholder="Логин" maxlength="24" class="inputField" id="reg_username">
          <input type="email" placeholder="Email" class="inputField" id="reg_email">
          <input type="password" placeholder="Пароль" class="inputField" id="reg_pass">
          <input type="password" placeholder="Повторите пароль" class="inputField" id="reg_repeat">
          <input type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ!" id="send_reg"></input>
        </div>
        <div style="position:absolute;top:90px;margin:0 30px;">
          <input type="email" placeholder="Email" class="inputField" id="log_email">
          <input type="password" placeholder="Пароль" class="inputField" id="log_pass">
          <input type="submit" value="Продолжить" id="send_reg"></input>
        </div>
      </div>
      <div class="window_header" style="text-align: center;">
        <div class="head_title_reg" onclick="$('#log_anim').width('0');$('#reg_anim').width('100%');$('#fields').css('left','100%');">РЕГИСТРАЦИЯ</div>
        <div class="head_title_reg" id="reg_anim" dir="rtl" style="color:#fff;transition:.3s;overflow:hidden;">РЕГИСТРАЦИЯ</div>
        <div id="auth_head_sep"></div>
        <div class="head_title_log" onclick="$('#log_anim').width('100%');$('#reg_anim').width('0');$('#fields').css('left',0);">АВТОРИЗАЦИЯ</div>
        <div class="head_title_log" id="log_anim" style="color:#fff;transition:.3s;overflow:hidden;width:0;">АВТОРИЗАЦИЯ</div>
      </div>
    </div>
  </body>
</html>
