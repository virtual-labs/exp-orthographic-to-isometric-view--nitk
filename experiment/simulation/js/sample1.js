let nextButtonId;
//function to move to next canvas
function navNext() {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 800, 600);
  boom();
  document.getElementById("canvas0").style.visibility = "hidden";
  document.getElementById("canvas1").style.visibility = "visible";
  document.getElementById("nextButton").style.animation = "none";
  document.getElementById("a").style.visibility = "visible";
  document.getElementById("b").style.visibility = "hidden";
  document.getElementById("c").style.visibility = "hidden";
  document.getElementById("d").style.visibility = "hidden";
  document.getElementById("e").style.visibility = "hidden";
  document.getElementById("f").style.visibility = "hidden";
  document.getElementById("nextButton").style.visibility = "hidden";

  document.getElementById("pumptext").style.visibility = "visible";
  document.getElementById("text").style.left = "100px";
  document.getElementById("stepnumber").innerHTML = "&nbsp;1&nbsp;";
  document.getElementById("text").innerHTML = "Draw the Isometric Axes";
  document.getElementById("titlestep").innerText = "STEP";
  document.getElementById("text").style.left = "95px";
}

function boom() {
  var canvas = document.getElementById("can");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.setLineDash([]);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.font = "bold 14px Comic Sans MS";
  ctx.moveTo(0, 200 - 90);
  // ctx.fillText("VP", 250, 380);
  // ctx.fillText("HP", 250, 420);
  // ctx.fillText("X", 210, 405);
  // ctx.fillText("Y", 650, 405);
  ctx.fillText("Front view", 50, 102);
  ctx.fillText("Top view", 50, 222);
  ctx.fillText("Solid lines", 595, 25);
  ctx.fillText("Projection lines", 595, 45);
  ctx.lineTo(150, 200 - 90);
  ctx.lineTo(150, 296 - 90);
  ctx.lineTo(0, 296 - 90);
  ctx.lineTo(0, 200 - 90);
  ctx.lineTo(0, 264 - 90);
  ctx.lineTo(50, 264 - 90);
  ctx.lineTo(50, 232 - 90);
  ctx.lineTo(100, 232 - 90);
  ctx.lineTo(100, 200 - 90);
  ctx.stroke();
  ctx.moveTo(0, 210 + 20);
  ctx.lineTo(150, 210 + 20);
  ctx.lineTo(150, 410 + 20);
  ctx.lineTo(0, 410 + 20);
  ctx.lineTo(0, 282 + 20);
  ctx.lineTo(100, 282 + 20);
  ctx.lineTo(100, 410 + 20);
  ctx.lineTo(50, 410 + 20);
  ctx.lineTo(50, 282 + 20);
  ctx.lineTo(0, 282 + 20);
  ctx.lineTo(0, 210 + 20);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(200, 115);
  ctx.lineTo(200, 200);
  ctx.stroke();
  ctx.moveTo(180, 200);
  ctx.lineTo(180, 180);
  ctx.stroke();
  ctx.moveTo(200, 425);
  ctx.lineTo(200, 235);
  ctx.stroke();
  ctx.moveTo(180, 296);
  ctx.lineTo(180, 235);
  ctx.stroke();
  ctx.moveTo(45, 450);
  ctx.lineTo(5, 450);
  ctx.stroke();
  ctx.moveTo(45, 450);
  ctx.lineTo(95, 450);
  ctx.stroke();
  ctx.moveTo(145, 467);
  ctx.lineTo(5, 467);
  ctx.stroke();
  ctx.fillStyle = "orange";
  canvas_arrow(ctx, 200, 100, 200, 200, 5);
  canvas_arrow(ctx, 200, 200, 200, 115, 5);
  canvas_arrow(ctx, 180, 190, 180, 200, 5);
  canvas_arrow(ctx, 180, 190, 180, 180, 5);
  canvas_arrow(ctx, 200, 230, 200, 425, 5);
  canvas_arrow(ctx, 200, 410, 200, 235, 5);
  canvas_arrow(ctx, 180, 225, 180, 296, 5);
  canvas_arrow(ctx, 180, 255, 180, 235, 5);
  canvas_arrow(ctx, 10, 450, 45, 450, 5);
  canvas_arrow(ctx, 45, 450, 5, 450, 5);
  canvas_arrow(ctx, 45, 450, 95, 450, 5);
  canvas_arrow(ctx, 95, 450, 55, 450, 5);
  canvas_arrow(ctx, 5, 467, 145, 467, 5);
  canvas_arrow(ctx, 145, 467, 5, 467, 5);
  ctx.beginPath();
  ctx.moveTo(580, 20);
  ctx.arc(580, 20, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#3590ae";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(580, 40);
  ctx.arc(580, 40, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#ae8e6e";
  ctx.fill();
  ctx.closePath();
  ctx.font = "bold 12px Arial";
  ctx.fillText("50", 19, 445);
  ctx.fillText("50", 68, 445);
  ctx.fillText("150", 70, 464);

  ctx.save();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.translate(190, 164);
  ctx.rotate(Math.PI / 2);
  ctx.fillText("96", 0, 0);

  ctx.restore();
  ctx.save();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.translate(190, 330);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("200", 0, 0);

  ctx.restore();
  ctx.save();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.translate(170, 270);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("72", 0, 0);

  ctx.restore();
  ctx.save();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.translate(170, 190);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("32", 0, 0);

  ctx.restore();

  document.getElementById("nextButton").style.animation =
    "glowing 1000ms infinite";
}

function drawLine(x1, y1, x2, y2, ratio) {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  if (ratio > 1) {
    if (nextButtonId != "")
      document.getElementById(nextButtonId).style.visibility = "visible";
  }
}

function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

function a() {
  document.getElementById("a").style.visibility = "hidden";
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.fillStyle = "black";

  ctx.font = "bold 14px Comic Sans MS";
  ctx.fillText("VP", 250, 380);
  ctx.fillText("HP", 250, 420);
  ctx.fillText("X", 210, 405);
  ctx.fillText("Y", 660, 405);
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.moveTo(230, 400);
  ctx.lineTo(650, 400);
  ctx.stroke();
  ctx.moveTo(450, 400);
  ctx.font = "bold 12px Arial";

  ctx.fillText("30°", 500, 390);
  ctx.fillText("30°", 380, 390);
  ctx.arc(450, 400, 40, -Math.PI / 6, 0);
  ctx.stroke();
  ctx.arc(450, 400, 40, Math.PI, Math.PI + Math.PI / 6);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#3590ae";
  animate(
    450,
    400,
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6)
  );
  animate(
    450,
    400,
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6)
  );
  animate(450, 400, 450, 400 - 32);
  nextButtonId = "c";
  //   document.getElementById("c").style.visibility = "visible";
  ctx.closePath();

  document.getElementById("stepnumber").innerHTML = "&nbsp;2&nbsp;";
  document.getElementById("text").innerHTML =
    "Draw the desired outline of the object";
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
}

function b() {
  document.getElementById("c").style.visibility = "hidden";
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  //   document.getElementById("b").style.visibility = "visible";
  nextButtonId = "b";

  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = 1;
  animate(
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6),
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6) - 96
  );
  animate(
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6),
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96
  );
  animate(
    450 + 150 * Math.cos(Math.PI / 6),
    304 - 150 * Math.sin(Math.PI / 6),
    450 + 100 * Math.cos(Math.PI / 6),
    304 - 100 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 200 * Math.cos(Math.PI / 6),
    304 - 200 * Math.sin(Math.PI / 6),
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96,
    450 + 150 * Math.cos(Math.PI / 6) - 200 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96 - 200 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6) - 96,
    450 + 150 * Math.cos(Math.PI / 6) - 200 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96 - 200 * Math.sin(Math.PI / 6)
  );
  ctx.closePath();
  document.getElementById("stepnumber").innerHTML = "&nbsp;3&nbsp;";
  document.getElementById("text").innerHTML =
    "Transfer the front view to the isometric view";
  document.getElementById("c").style.visibility = "hidden";
}

function canvas_arrow(context, fromx, fromy, tox, toy, r) {
  var x_center = tox;
  var y_center = toy;

  var angle;
  var x;
  var y;

  context.beginPath();

  angle = Math.atan2(toy - fromy, tox - fromx);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.moveTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  context.closePath();

  context.fill();
}

function c() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  document.getElementById("b").style.visibility = "hidden";
  nextButtonId = "d";
  //   document.getElementById("d").style.visibility = "visible";
  document.getElementById("stepnumber").innerHTML = "&nbsp;4&nbsp;";
  document.getElementById("text").innerHTML =
    "Transfer the top view to the isometric view";
  document.getElementById("c").style.visibility = "hidden";
  ctx.beginPath();

  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = 1;
  animate(
    450,
    400 - 32,
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6),
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 50 * Math.sin(Math.PI / 6),
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 100 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 100 * Math.sin(Math.PI / 6),
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 32 - 100 * Math.sin(Math.PI / 6)
  );
  ctx.closePath();
}

function d() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  document.getElementById("d").style.visibility = "hidden";
  //   document.getElementById("e").style.visibility = "visible";
  nextButtonId = "e";
  document.getElementById("stepnumber").innerHTML = "&nbsp;5&nbsp;";
  document.getElementById("text").innerHTML =
    "Complete the Isometric view using Front and top views";
  ctx.beginPath();

  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = 2;
  animate(
    450 + 100 * Math.cos(Math.PI / 6),
    304 - 100 * Math.sin(Math.PI / 6),
    450 - 28 * Math.cos(Math.PI / 6),
    304 - 228 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6),
    450 - 28 * Math.cos(Math.PI / 6),
    304 - 228 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6),
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64,
    450,
    400 - 32
  );
  ctx.closePath();
}

function e() {
  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.beginPath();

  document.getElementById("stepnumber").innerHTML = "&nbsp;6&nbsp;";
  document.getElementById("text").innerHTML = "Highlight the Drawing";
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64,
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6),
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6) - 32
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6) - 32,
    450 - 128 * Math.cos(Math.PI / 6) + 100 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 100 * Math.sin(Math.PI / 6) - 32
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6) + 100 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 100 * Math.sin(Math.PI / 6) - 32,
    450 - 28 * Math.cos(Math.PI / 6),
    304 - 228 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6),
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6) - 32,
    450 - 128 * Math.cos(Math.PI / 6) + 50 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 50 * Math.sin(Math.PI / 6) - 32
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6) + 100 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64 - 100 * Math.sin(Math.PI / 6) - 32,
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 100 * Math.sin(Math.PI / 6)
  );
  ctx.closePath();
  document.getElementById("e").style.visibility = "hidden";
  nextButtonId = "f";
  //   document.getElementById("f").style.visibility = "visible";
  document.getElementById("titlestep").innerText = "STEP";
}
function f() {
  document.getElementById("f").style.visibility = "hidden";
  nextButtonId = "";

  var cvs = document.getElementsByTagName("canvas")[0];
  var ctx = cvs.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = 2.5;
  animate(
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6),
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6) - 96
  );
  animate(
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6),
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96
  );
  animate(
    450,
    400 - 32,
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6),
    450 - 200 * Math.cos(Math.PI / 6),
    304 - 200 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 100 * Math.cos(Math.PI / 6),
    304 - 100 * Math.sin(Math.PI / 6),
    450 + 150 * Math.cos(Math.PI / 6),
    304 - 150 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 50 * Math.sin(Math.PI / 6),
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 50 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 50 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 50 * Math.sin(Math.PI / 6),
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 100 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 100 * Math.sin(Math.PI / 6),
    450 + 100 * Math.cos(Math.PI / 6),
    400 - 32 - 32 - 32 - 100 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96,
    450 + 150 * Math.cos(Math.PI / 6) - 200 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96 - 200 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6) - 96,
    450 + 150 * Math.cos(Math.PI / 6) - 200 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6) - 96 - 200 * Math.sin(Math.PI / 6)
  );
  document.getElementById("f").style.animation = "none";
  animate(
    450,
    400,
    450 - 200 * Math.cos(Math.PI / 6),
    400 - 200 * Math.sin(Math.PI / 6)
  );
  animate(
    450,
    400,
    450 + 150 * Math.cos(Math.PI / 6),
    400 - 150 * Math.sin(Math.PI / 6)
  );
  animate(
    450 + 100 * Math.cos(Math.PI / 6),
    304 - 100 * Math.sin(Math.PI / 6),
    450 - 28 * Math.cos(Math.PI / 6),
    304 - 228 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6),
    450 - 28 * Math.cos(Math.PI / 6),
    304 - 228 * Math.sin(Math.PI / 6)
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6),
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64
  );
  animate(
    450 - 128 * Math.cos(Math.PI / 6),
    304 - 128 * Math.sin(Math.PI / 6) + 64,
    450,
    400 - 32
  );
  animate(450, 400, 450, 400 - 32);

  ctx.closePath();
  document.getElementById("stepnumber").innerHTML = "&nbsp;6&nbsp;";
  document.getElementById("text").innerHTML =
    "This is the final Isometric Projection";
}
