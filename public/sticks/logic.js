var w, h, zoom = 0.9, lastX, lastY, posX, posY, clickTime, stX, stY, count = 0;
var c = document.getElementById('game');
var ctx = c.getContext('2d');
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var ph, pw, white, black, plr, t = 0;
var game = firebase.database().ref('sticks/nbvT2Rh3KGdqw86x');
game.child('h').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    h = snapshot.val();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
game.child('w').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    w = snapshot.val();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
game.child('p').get().then((snapshot) => {
  if (snapshot.exists()) {
    plr = parseInt(
      Object.keys(snapshot.val()).find(key => snapshot.val()[key] === usr.uid)
    );
    load();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

function load() {
  ph = new Array(w+1);
  for (var i = 0; i < w+1; i++) {
    ph[i] = new Array(h).fill(false);
  }
  pw = new Array(w);
  for (var i = 0; i < w; i++) {
    pw[i] = new Array(h+1).fill(false);
  }
  white = new Array(w);
  black = new Array(w);
  for (var i = 0; i < w; i++) {
    white[i] = new Array(h).fill(false);
    black[i] = new Array(h).fill(false);
  }

  game.child('m').on('child_added', (data) => {
    count = parseInt(data.key) + 1;
    var filledSquare = false;
    if (data.val() < h*(w+1)) {
      var x = Math.floor(data.val() / w);
      var y = data.val() % h;
      ph[x][y] = true;
      if (x < w)
        if (ph[x+1][y]&&pw[x][y]&&pw[x][y+1]) {
          filledSquare = true;
          if (t % 2 == 0) white[x][y] = true;
          else if (t % 2 == 1) black[x][y] = true;
        }
      if (x > 0)
        if (ph[x-1][y]&&pw[x-1][y]&&pw[x-1][y+1]) {
          filledSquare = true;
          if (t % 2 == 0) white[x-1][y] = true;
          else if (t % 2 == 1) black[x-1][y] = true;
        }
    }
    else {
      var x = Math.floor((data.val()-h*(w+1)) / (w+1));
      var y = (data.val()-h*(w+1)) % (h+1);
      pw[x][y] = true;
      if (y < h+1)
        if (pw[x][y+1]&&ph[x][y]&&ph[x+1][y]) {
          filledSquare = true;
          if (t % 2 == 0) white[x][y] = true;
          else if (t % 2 == 1) black[x][y] = true;
        }
      if (y > 0)
        if (pw[x][y-1]&&ph[x][y-1]&&ph[x+1][y-1]) {
          filledSquare = true;
          if (t % 2 == 0) white[x][y-1] = true;
          else if (t % 2 == 1) black[x][y-1] = true;
        }
    }

    if (!filledSquare) t += 1;

    draw();
  });
  draw();
}

function checkClick(clk) {
  var a = Math.ceil(c.clientWidth / (8*w));
  var b = Math.ceil(c.clientHeight / (8*h));
  var g = Math.min(a,b) * zoom;
  var vp = `l ${g} ${g} v ${5*g} l -${g} ${g} l -${g} -${g} v -${5*g} z`;
  var hp = `l ${g} -${g} h ${5*g} l ${g} ${g} l -${g} ${g} h -${5*g} z`;
  for (var x = 0; x < w+1; x++) {
    for (var y = 0; y < h; y++) {
      var startX = posX + 4*g*(2*x - w);
      var startY = posY + 4*g*(2*y - h);
      var shape = new Path2D(`M${startX} ${startY + g/2} ` + vp);
      if (ctx.isPointInPath(shape, clk[0], clk[1])) {
        if (!ph[x][y] && t % 2 == plr) game.child('m').child(count).set(x*h+y);
      }
    }
  }
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h+1; y++) {
      var startX = posX + 4*g*(2*x - w);
      var startY = posY + 4*g*(2*y - h);
      var shape = new Path2D(`M${startX + g/2} ${startY} ` + hp)
      if (ctx.isPointInPath(shape, clk[0], clk[1])) {
        if (!pw[x][y] && t % 2 == plr) game.child('m').child(count).set(h*w+h+x*h+x+y);
      }
    }
  }
}

function draw() {
  var a = Math.ceil(c.clientWidth / (8*w));
  var b = Math.ceil(c.clientHeight / (8*h));
  var g = Math.min(a,b);
  if (c.clientWidth <= c.clientHeight) {
    c.width = g * 8 * w;
    c.height = c.width * c.clientHeight / c.clientWidth;
  }
  else {
    c.height = g * 8 * h;
    c.width = c.height * c.clientWidth / c.clientHeight;
  }
  g *= zoom;
  posX = g < a ? c.width/2 : clamp(posX, c.width-4*g*w-18*g, 4*g*w+18*g);
  posY = g < b ? c.height/2 : clamp(posY, c.height-4*g*h-18*g, 4*g*h+18*g);

  var vp = `l ${g} ${g} v ${5*g} l -${g} ${g} l -${g} -${g} v -${5*g} z`;
  var hp = `l ${g} -${g} h ${5*g} l ${g} ${g} l -${g} ${g} h -${5*g} z`;
  for (var x = 0; x < w+1; x++) {
    for (var y = 0; y < h; y++) {
      var startX = posX + 4*g*(2*x - w);
      var startY = posY + 4*g*(2*y - h);
      if (startX <= c.width + g && startX >= -8*g) {
        if (startY <= c.height && startY >= -8*g) {
          if (x < w) {
            if (white[x][y]) {
              ctx.beginPath();
              ctx.rect(startX + g/2, startY + g/2,7*g, 7*g);
              ctx.fillStyle = "#a4b0be";
              ctx.fill();
            }
          }
          ctx.fillStyle = ph[x][y] ? '#a4b0be' : '#747d8c';
          ctx.fill(new Path2D(`M${startX} ${startY + g/2} ` + vp));
        }
      }
    }
  }
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h+1; y++) {
      var startX = posX + 4*g*(2*x - w);
      var startY = posY + 4*g*(2*y - h);
      if (startX <= c.width && startX >= -8*g) {
        if (startY <= c.height + g && startY >= -g) {
          ctx.beginPath();
          if (x > 0 && y > 0 && y < h && pw[x][y] && pw[x-1][y] && ph[x][y] && ph[x][y-1])
            ctx.moveTo(startX, startY);
          else ctx.moveTo(startX + g/2, startY);
          if (ph[x][y] && y < h && pw[x][y]) {
            ctx.lineTo(startX -1, startY + g/2 +1);
            ctx.lineTo(startX + g -1, startY + 1.5*g +1);
          }
          ctx.lineTo(startX + 1.5*g, startY + g);
          ctx.lineTo(startX + 6.5*g, startY + g);
          if (ph[x+1][y] && y < h && pw[x][y]) {
            ctx.lineTo(startX + 7*g +1, startY + 1.5*g +1);
            ctx.lineTo(startX + 8*g +1, startY + g/2 +1);
          }
          if (x < w-1 && pw[x][y] && pw[x+1][y] && ph[x+1][y] && ph[x+1][y-1])
            ctx.lineTo(startX + 8*g, startY);
          else ctx.lineTo(startX + 7.5*g, startY);
          if (y > 0 && ph[x+1][y-1] && pw[x][y]) {
            ctx.lineTo(startX + 8*g +1, startY - g/2 -1);
            ctx.lineTo(startX + 7*g +1, startY - 1.5*g -1);
          }
          ctx.lineTo(startX + 6.5*g, startY - g);
          ctx.lineTo(startX + 1.5*g, startY - g);
          if (y > 0 && ph[x][y-1] && pw[x][y]) {
            ctx.lineTo(startX + g -1, startY - 1.5*g -1);
            ctx.lineTo(startX -1, startY - g/2 -1);
          }
          ctx.fillStyle = pw[x][y] ? '#a4b0be' : '#747d8c';
          ctx.fill();
        }
      }
    }
  }
}

$("#control").bind('mousewheel', function(event) {
  var z = zoom;
  zoom += event.originalEvent.wheelDelta/720;
  zoom = clamp(zoom, 0.9, Math.min(h, w)/10);
  var mx = event.offsetX * c.width/c.clientWidth - posX;
  var my = event.offsetY * c.height/c.clientHeight - posY;
  posX -= mx * (zoom/z-1);
  posY -= my * (zoom/z-1);
  draw();
});

$("#control")
.mousedown(function(event) {
  lastX = event.clientX;
  lastY = event.clientY;
  stX = lastX;
  stY = lastY;
  clickTime = event.timeStamp;
})
.mousemove(function(event) {
  if (event.buttons == 1) {
    posX += (event.clientX - lastX) * c.width / c.clientWidth;
    posY += (event.clientY - lastY) * c.height / c.clientHeight;
    lastX = event.clientX;
    lastY = event.clientY;
    draw();
  }
})
.mouseup(function(event) {
  if (event.timeStamp - clickTime < 400) {
    if ((event.clientX - stX)**2 + (event.clientY - stY)**2 < 10) {
      checkClick([
        event.offsetX / c.clientWidth * c.width,
        event.offsetY / c.clientHeight * c.height
      ]);
      draw();
    }
  }
});

window.onresize = draw;
