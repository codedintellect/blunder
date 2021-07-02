<!DOCTYPE html>
<?php include "borrowed.php"; ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>blunder.tk</title>
    <link rel="stylesheet" href="style.css"/>
    <script src="menu.js"></script>
    <script src="account.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
  </head>
  <body>
    <div id="header">
      <div class="logo" title="Какие же мучения...">blunder.tk</div>
      <button class="user_tile">Fronddi</button>
    </div>

    <div id="gameChoose">
      <button class="gameCard" style="margin-left: 0"><img src="sticks.png" style="width: 300px; height: 400px; background: #4a5469"></img></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard"></button>
      <button class="gameCard" style="margin-right: 0"></button>
    </div>
    <div class="gameChooseShadow"></div>

    <div id="profile">
      <div class="profile_header">Профиль
        <div class="profile_close"></div>
      </div>
      <div class="profile_pic"></div>
      <div class="profile_name">Fronddi</div>
      <div class="profile_level">99</div>
      <div class="profile_level_bar"></div>
      <a class="profile_logout" href="">ВЫЙТИ</a>
    </div>

    <div class="profile_bg"></div>

    <aside id="advert">
      <div class="ad"></div>
      <div class="ad"></div>
    </aside>
  </body>
  <script src="create.js"></script>
</html>
