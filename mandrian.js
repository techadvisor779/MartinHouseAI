var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 450;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
//console.log( dpr, canvas.width, canvas.height);
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
    if (lineID.checked) {
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
            //console.log( squares[i], squares[i], squares[i].width, squares[i].height);
            if (squares[i].color) {
                c.fillStyle = squares[i].color;
            } else {
                c.fillStyle = white
            }
            c.fill();
            c.stroke(); 
        }     
    } 
    if (paintID.checked) {       
        for (var i = 0; i < squares.length; i++) {  
            console.log("here", i);
            //if (1) {  //e.clientX * dpr -380 > squares[i].x && e.clientX * dpr -380 < squares[i].x + squares[i].width && e.clientY * dpr -50 > squares[i].y && e.clientY * dpr -50 < squares[i].y + squares[i].height) {                
            //squares[i].color + squares[i].color + 1; squares[Math.floor(Math.random() * squares.length)].color = colors[i];
            if (squares[i].color > 5) {
                squares[i].color = 0;
            }
            console.log(squares[i].color)
            c.fillStyle = squares[i].color;
            c.fill();
            c.stroke();
            //}
        }
    }
}

function submitForm() {
    if (h3) {
        h3.parentNode.removeChild(h3);
    }
    var val = document.getElementById('signIt').value;
    val = val + " '22" ;
    c.fillStyle = 'Black';
    c.font = "12pt papyrus";
    c.textAlign = 'right';
    var h3 = document.createElement('h3');          
    h3.style.transform = "translate( 840px, -150px) rotate( -10deg)";
    h3.textContent = val; 
    document.body.appendChild(h3);
}

var lineClick = function() {
    if (LineID.checked) {
        PaintID.checked = false;
        LineID.checked = true;
    }
}
var paintClick = function() {
    console.log("here paint")
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

