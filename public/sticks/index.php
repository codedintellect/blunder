<!DOCTYPE html>
<?php include "../borrowed.php"; ?>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk | Sticks</title>
    <link rel="stylesheet" href="style.css"/>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
    <script type="text/javascript">
    var usr;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usr = user;
      }
    });
    </script>
  </head>
  <body style="background-color: #2f3542; margin: 0; height: 100vh;">
    <canvas id="game" width="0" height="0" class="frame"></canvas>
    <div id="control" class="frame"></div>
    <script src="logic.js"></script>
  </body>
</html>
