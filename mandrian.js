var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
c.scale(dpr, dpr);
c.lineWidth = 6;
var step = size / 7;
var white = '#F2F5F1';
var colors = ['#D40920', '#1356A2', '#F7D842']
const buttonL = document.getElementById("LineID");
const buttonH = document.getElementById("H_Line");
const buttonV = document.getElementById("V_Line");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");
var squares = [{
    x: 0,
    y: 0,
    width: size,
    height: size
  }];

function splitSquaresWith(coordinates) {
  const { x, y } = coordinates;

  for (var i = squares.length - 1; i >= 0; i--) {
    const square = squares[i];

    if (x && x > square.x && x < square.x + square.width) {
      if(Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnX(square, x); 
      }
    }

    if (y && y > square.y && y < square.y + square.height) {
      if(Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnY(square, y); 
      }
    }
  }
}

function splitOnX(square, splitAt) {
  var squareA = {
    x: square.x,
    y: square.y,
    width: square.width - (square.width - splitAt + square.x),
    height: square.height
  };

  var squareB = {
  x: splitAt,
  y: square.y,
  width: square.width - splitAt + square.x,
  height: square.height
  };
  squares.push(squareA);
  squares.push(squareB);
}

function splitOnY(square, splitAt) {
    var squareA = {
        x: square.x,
        y: square.y,
        width: square.width,
        height: square.height - (square.height - splitAt + square.y)
    };
    var squareB = {
        x: square.x,
        y: splitAt,
        width: square.width,
        height: square.height - splitAt + square.y
    };
    squares.push(squareA);
    squares.push(squareB);
}

for (var i = 0; i < size; i += step) {
    splitSquaresWith({ y: i });
    splitSquaresWith({ x: i });
}

function draw() {
  for (var i = 0; i < colors.length; i++) {
    squares[Math.floor(Math.random() * squares.length)].color = colors[i];
  }
  for (var i = 0; i < squares.length; i++) {
    c.beginPath();
    c.rect(
      squares[i].x,
      squares[i].y,
      squares[i].width,
      squares[i].height
    );
    if(squares[i].color) {
      c.fillStyle = squares[i].color;
    } else {
      c.fillStyle = white
    }
    c.fill()
    c.stroke();
  }
}


var lineClick = function() {
    if (LineID.checked) {
        PaintID.checked = false;
        LineID.checked = true;
    }
}
var paintClick = function() {
    if (PaintID.checked) {
        LineID.checked = false;
        PaintID.checked = true;
    }
}
var HClick = function() {
    if (H_Line.checked) {
        V_Line.checked = false;
        H_Line.checked = true;
    }
}
var VClick = function() {
    if (V_Line.checked) {
        H_Line.checked = false;
        V_Line.checked = true;
    }
}
var TClick = function() {
    if (Traditional.checked) {
        PaintID.checked = false;
        Traditional.checked = true;
    }
}
var PClick = function() {
    if (Pastel.checked) {
        Traditional.checked = false;
        Pastel.checked = true;
    }
}

draw();
canvas.addEventListener('mousedown', draw());
