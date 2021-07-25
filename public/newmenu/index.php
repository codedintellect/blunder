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
      <div class="profile_pic"></div>
      <div class="profile_name"></div>
      <div class="profile_level"></div>
      <div class="profile_level_bar"></div>
      <a class="profile_logout" onclick="">ВЫЙТИ</a>
    </div>

    <div class="window" style="height: 425px;" id="register" >
      <div class="window_header" style="text-align: center;">Регистрация</div>
      <input type="text" class="inputField" id="reg_username">
      <input type="email" class="inputField" id="reg_email">
      <input type="password" class="inputField" id="reg_pass">
      <input type="password" class="inputField" id="reg_repeat">
      <button id="send_reg"></button>
    </div>

    <div class="window" id="login" style="text-align: center; display: none;">
      <div class="window_header">Вход</div>
    </div>
  </body>
</html>
