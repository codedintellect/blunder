var w = 20, h = 20, zoom = 0.9, lastX, lastY, posX, posY, clickTime, stX, stY;
var c = document.getElementById('game');
var ctx = c.getContext('2d');
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var ph, pw, red, blue;
var turn = 0;
function load() {
  firebase.database().ref('sticks/nbvT2Rh3KGdqw86x').get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      h = snapshot.val().h;
      w = snapshot.val().w;
      ph = new Array(h*(w+1)).fill(false);
      pw = new Array(w*(h+1)).fill(false);
      red = new Array(w*h).fill(false);
      blu = new Array(w*h).fill(false);
      firebase.database().ref('sticks/nbvT2Rh3KGdqw86x/m').on('value', (snapshot) => {
        turn += 1;
        var data = snapshot.val();
        console.log(data);
        if (data < h*(w+1)) ph[data] = true;
        else pw[data-h*(w+1)] = true;
        draw();
      });
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
load();

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
        if (ph[x*h+y] == false) {
          firebase.database().ref('sticks/nbvT2Rh3KGdqw86x/m').add({turn:x*h+y});
        }
        ph[x*h+y] = true;
      }
    }
  }
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h+1; y++) {
      var startX = posX + 4*g*(2*x - w);
      var startY = posY + 4*g*(2*y - h);
      var shape = new Path2D(`M${startX + g/2} ${startY} ` + hp)
      if (ctx.isPointInPath(shape, clk[0], clk[1])) {
        if (ph[x*(h+1)+y] == false) {
          firebase.database().ref('sticks/nbvT2Rh3KGdqw86x/m').add({turn:h*(w+1)+x*(h+1)+y});
        }
        pw[x*(h+1)+y] = true;
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
            if (red[x*h+y]) {
              ctx.beginPath();
              ctx.rect(startX + g/2, startY + g/2,7*g, 7*g);
              ctx.fillStyle = "#a4b0be";
              ctx.fill();
            }
          }
          ctx.fillStyle = ph[x*h+y] ? '#a4b0be' : '#747d8c';
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
          if (x != 0 && pw[x*(h+1)+y] && pw[x*(h+1)+y-h-1] && ph[x*h+y] && ph[x*h+y-1]) {
            ctx.moveTo(startX, startY);
          } else {
            ctx.moveTo(startX + g/2, startY);
          }
          if (ph[x*h+y] && y != h && pw[x*(h+1)+y]) {
            ctx.lineTo(startX -1, startY + g/2 +1);
            ctx.lineTo(startX + g -1, startY + 1.5*g +1);
          }
          ctx.lineTo(startX + 1.5*g, startY + g);
          ctx.lineTo(startX + 6.5*g, startY + g);
          if (ph[x*h+y+h] && y != h && pw[x*(h+1)+y]) {
            ctx.lineTo(startX + 7*g +1, startY + 1.5*g +1);
            ctx.lineTo(startX + 8*g +1, startY + g/2 +1);
          }
          if (x != w-1 && pw[x*(h+1)+y] && pw[x*(h+1)+y+h+1] && ph[x*h+y+h] && ph[x*h+y+h-1]) {
            ctx.lineTo(startX + 8*g, startY);
          } else {
            ctx.lineTo(startX + 7.5*g, startY);
          }
          if (ph[x*h+y+h-1] && y != 0 && pw[x*(h+1)+y]) {
            ctx.lineTo(startX + 8*g +1, startY - g/2 -1);
            ctx.lineTo(startX + 7*g +1, startY - 1.5*g -1);
          }
          ctx.lineTo(startX + 6.5*g, startY - g);
          ctx.lineTo(startX + 1.5*g, startY - g);
          if (ph[x*h+y-1] && y != 0 && pw[x*(h+1)+y]) {
            ctx.lineTo(startX + g -1, startY - 1.5*g -1);
            ctx.lineTo(startX -1, startY - g/2 -1);
          }
          ctx.fillStyle = pw[x*(h+1)+y] ? '#a4b0be' : '#747d8c';
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
