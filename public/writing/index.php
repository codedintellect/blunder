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
    <div id="message">Ваш ответ принят. Теперь ждём ответ Вашего друга - %DISPLAY_NAME%</div>
    <div id="game" class="start" style="width: 400px; height: auto; display: block; background-color: #292e3a;">
      <div style="position: relative; padding: 0 0 10px 0; text-align: center; font-size: 36px; font-weight: bold; color: #ffffff;">Режим игры</div>
      <div style="position: relative; display: flex; flex-direction: column;">
        <button style="margin: 10px 0;" onclick="sentencesClick()">СОСТАВИТЬ ПРЕДЛОЖЕНИЯ</button>
        <button style="margin: 10px 0;" onclick="wordsClick()">ПОДОБРАТЬ СЛОВА</button>
      </div>
    </div>

    <div id="game" class="sentences" style="display: none;">
      <div style="width: 50%; margin: 0 10px; position: relative; float: left;">
        <div class="task">Напишите несколько предложений с пропусками некоторых слов (на месте пропущенных слов пишите "---") и нажмите "Продолжить", когда будете готовы.</div>
        <div id="list" class="sentencesList">
          <div class="input-buffer" style="position: absolute; visibility: hidden; white-space: nowrap;"></div>
          <textarea class="textInput">Это был прекрасный ---! Ничто не могло его испортить. Разве что --- и ---</textarea>
        </div>
        <button onclick="messageOut()" style="width: 100%; top: 10px;">ПРОДОЛЖИТЬ</button>
      </div>

      <div style="width: 50%; margin: 0 10px; position: relative; float: right;">
        <div class="task">И вот что у вас получилось:</div>
        <div id="list">
          <div class="input-buffer" style="position: absolute; visibility: hidden; white-space: nowrap;"></div>
          <p class="test">UwU</p>
        </div>
      </div>
    </div>

    <div id="game" class="words" style="display: none;">
      <div style="width: 50%; margin: 0 10px; position: relative; float: left;">
        <div class="task">Напишите несколько слов и нажмите "Продолжить", когда будете готовы.</div>
        <div id="list" class="wordsList">
          <div class="input-buffer" style="position: absolute; visibility: hidden; white-space: nowrap;"></div>
          <!--input class="d"style="background-color: #73756d; font-size: 28px; width: 500px;"></input-->
        </div>
        <button onclick="messageOut()" style="width: 100%; top: 10px;">ПРОДОЛЖИТЬ</button>
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
