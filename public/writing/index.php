<!DOCTYPE html>
<?php include "../borrowed.php" ?>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>blunder.tk - Сочинение</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <div id="message">Теперь Ваш друг %DISPLAY_NAME% придумывает слова к Вашим предложениям! Подождите немного...</div>
    <div id="game">
      <div style="width: 50%; margin: 0 10px; position: relative; float: left;">
        <div class="task">Напишите несколько предложений с пропусками некоторых слов (на месте пропущенных слов пишите "...") и нажмите "Продолжить", когда будете готовы.</div>
        <div id="list">
          <div class="input-buffer" style="position: absolute; visibility: hidden; white-space: nowrap;"></div>
          <textarea class="textInput">Это был прекрасный ...! Ничто не могло его испортить. Разве что ... и ...</textarea>
        </div>
        <button onclick="messageOut()">ПРОДОЛЖИТЬ</button>
      </div>

      <div style="width: 50%; margin: 0 10px; position: relative; float: right;">
        <div class="task">И вот что у вас получилось:</div>
        <div id="list">
          <div class="input-buffer" style="position: absolute; visibility: hidden; white-space: nowrap;"></div>
          <p class="test">UwU</p>
        </div>
      </div>
    </div>
  </body>
  <script src="logic.js"></script>
</html>
