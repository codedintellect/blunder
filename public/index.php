<!DOCTYPE html>
<?php include "borrowed.php"; ?>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk</title>
    <meta name="description" content="Игровой веб-сайт.">
    <link rel="stylesheet" href="colors.css"/>
    <link rel="stylesheet" href="style.css"/>
    <script src="menu.js"></script>
    <script src="account.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
  </head>
  <body>
    <header id="header">
      <div class="logo" title="Какие же мучения...">blunder.tk</div>
      <button class="topbar_btn" id="user" style="border-radius: 0">Fronddi</button>
      <button class="topbar_btn" id="leaderboard">Таблица лидеров</button>
    </header>

    <div id="gameChoose">
      <button class="gameCard" style="margin-left: 0" aria-label="Sticks game"></button>
      <button class="gameCard" aria-label="Sticks game"></button>
      <button class="gameCard" aria-label="Sticks game"></button>
      <button class="gameCard" aria-label="Sticks game"></button>
      <button class="gameCard" aria-label="Sticks game"></button>
      <button class="gameCard" style="margin-right: 0" aria-label="Sticks game"></button>
    </div>
    <div class="gameChooseShadow"></div>

    <aside id="advert">
      <div class="ad"></div>
      <div class="ad"></div>
    </aside>

    <div id="leaderboard_popup"></div>

    <div id="profile">
      <div class="profile_header">Профиль
        <div class="profile_close"></div>
      </div>
      <div class="profile_pic"></div>
      <div class="profile_name">Fronddi</div>
      <div class="profile_level">99</div>
      <div class="profile_level_bar"></div>
      <a class="profile_logout" onclick="">ВЫЙТИ</a>
    </div>

    <div class="profile_bg"></div>
  </body>
  <script src="create.js"></script>
</html>
