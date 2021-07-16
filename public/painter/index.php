<!DOCTYPE html>
<?php include "../borrowed.php" ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>blunder.tk - Рисовальный поединок</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <canvas id="board" width="800" height="800"></canvas>
    <div class="palette">
      <input type="color" class="pallete_color" name="body"></input>
      <div class="pallete_color_label">#000000</div>
      <div style="display: grid; grid-template-columns: repeat(2, 100px);">
        <button id="tool" onclick="gco = 'source-over'" style="margin-top: 20px;">PAINT</button>
        <button id="tool" onclick="gco = 'destination-out'" style="margin-top: 20px;">ERASER</button>
        <button id="tool" class="clear" style="margin-top: 20px;">CLEAR</button>
        <button id="tool" class="save" style="margin-top: 20px;">SAVE</button>
      </div>
      <input type="range" class="brush_width" value="10" step="5" min="5" max="150">
    </div>
  </body>
  <script src="logic.js"></script>
</html>
