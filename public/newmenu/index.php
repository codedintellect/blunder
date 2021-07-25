<!DOCTYPE html>
<?php include "../borrowed.php"; ?>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk</title>
    <meta name="description" content="Игровой веб-сайт.">
    <link rel="stylesheet" href="../colors.css"/>
    <link rel="stylesheet" href="style.css"/>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
    <script src="authHandler.js"></script>
  </head>
  <body>
    <?php // TODO: FIX ALL POSITIONS AND SIZES ?>
    <header id="header">
      <div class="logo" title="Какие же мучения...">blunder.tk</div>
      <button class="topbar_btn" id="user" onclick='$("#profile").show();$(".wbg").show()'>Fronddi</button>
    </header>

    <div class="wbg"></div>

    <div class="window" id="profile" style="display: none;">
      <div class="window_header">Профиль
        <div class="window_close" onclick='$("#profile").hide();$(".wbg").hide()'></div>
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
      <div class="profile_pic"></div>
      <div class="profile_name"></div>
      <div class="profile_level"></div>
      <div class="profile_level_bar"></div>
      <a class="profile_logout" onclick="">ВЫЙТИ</a>
    </div>

    <div class="window" id="register">
      <div class="window_header" style="text-align: center;">Регистрация</div>
      <div style="position: relative; top: 16px; display: grid; grid-gap: 18px; justify-content: center;">
        <input type="text" placeholder="Логин" maxlength="24" class="inputField" id="reg_username">
        <input type="email" placeholder="Email" class="inputField" id="reg_email">
        <input type="password" placeholder="Пароль" class="inputField" id="reg_pass">
        <input type="password" placeholder="Повторите пароль" class="inputField" id="reg_repeat">
    </div>
      <button id="send_reg">Зарегистрироваться!</button>
    </div>

    <div class="window" style="display: none; text-align: center;" id="login">
      <div class="window_header">Вход</div>
      <div style="position: relative; top: 16px; display: grid; grid-gap: 18px; justify-content: center;">
        <input type="text" placeholder="Логин" maxlength="24" class="inputField" id="login_username">
        <input type="password" placeholder="Пароль" class="inputField" id="login_pass">
      </div>
      <button id="send_reg">Войти</button>
    </div>
  </body>
</html>
