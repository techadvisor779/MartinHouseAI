var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
c.scale(dpr, dpr);
c.lineWidth = 6;
var inputDiv = 7;
var step = size / inputDiv;
var white = '#F2F5F1';
var colorsP = ['#f6cdd2', '#cfddec', '#fdf7d9', '#f6cdd2', '#cfddec', '#fdf7d9', '#000000']
var colorsT = ['#D40920', '#1356A2', '#F7D842', '#D40920', '#1356A2', '#F7D842', '#000000']
var colors = colorsT;
const buttonL = document.getElementById("LineID");
const buttonH = document.getElementById("H_Line");
const buttonV = document.getElementById("V_Line");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");
var slider = document.getElementById("lineRange");
var stepVal = 0;
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

var draw = function(e) {
    if (LineID.checked) {
        inputDiv = document.getElementById("lineRange").value;
        step = size / inputDiv;
        squares = [{ x: 0, y: 0, width: size, height: size}];
        for (var i = 0; i < size; i += step) {
            splitSquaresWith({ y: i });
            splitSquaresWith({ x: i });
        }
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
            if (squares[i].color) {
                c.fillStyle = squares[i].color;
            } else {
                c.fillStyle = white
            }
            c.fill()
            c.stroke(); 
        }     
    } 
    if (PaintID.checked) {             
        for (var i = 0; i < squares.length; i++) {  
            console.log(e.clientX-350, e.clientY-200, squares[i].x, squares[i].y)
            if (e.clientX-350 > squares[i].x && e.clientX-350 < squares[i].x + squares[i].width && e.clientY-200 > squares[i].y && e.clientY-200 < squares[i].y + squares[i].height) {
                colorsChng = Math.random(6);
                squares[i].color = colors[colorsChng];
                c.fill();
            }
        }
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
var TClick = function() {
    if (Traditional.checked) {
        Pastel.checked = false;
        Traditional.checked = true;
        colors = colorsT;
    }
}
var PClick = function() {
    if (Pastel.checked) {
        Traditional.checked = false;
        Pastel.checked = true;
        colors = colorsP;
    }
}

draw();
canvas.addEventListener('mousedown', draw);

