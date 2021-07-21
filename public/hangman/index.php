<!DOCTYPE html>
<?php include "../borrowed.php" ?>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk - Виселица</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <div id="board">
      <canvas class="state" width="720px" height="720px"></canvas>
      <input class="wordInput" type="text" maxlength="1"></input>
      <div class="result"></div>
    </div>
    <script src="logic.js"></script>
  </body>
</html>
