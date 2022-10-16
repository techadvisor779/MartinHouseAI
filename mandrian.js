var canvas = document.querySelector(
    'canvas');
var c = canvas.getContext('2d');
var w = 550;
var h = 400;
var stepW = w / 3;
var stepH = h / 3;
var white = 'white';
var black = 'Black';
var colorsT = ['#D40920', '#1356A2', '#F7D842'];
var colorsP = ['#8BD3E6', '#FF6D6A', '#E9EC6B'];
var colors = colorsT;
var splitDirectionVert = true;
var rectangles = [];

const buttonL = document.getElementById("LineID");
const buttonH = document.getElementById("H_Line");
const buttonV = document.getElementById("V_Line");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");
var size = 550;
var squares = [{
    x: 0,
    y: 0,
    width: w,
    height: h
}];

canvas.width = w;
canvas.height = h;
c.scale(w, h);
c.lineWidth = 8;
var step = size / 6;

function splitSquaresWith(coordinates) {
    const { x, y } = coordinates;
    for (var i = squares.length - 1; i >= 0; i--) {
        const square = squares[i];
        if (x && x > square.x && x <
            square.x + square.width) {
            if (Math.random() > 0.5) {
                squares.splice(i, 1);
                splitOnX(square, x);
            }
        }
        if (y && y > square.y && y <
            square.y + square.height) {
            if (Math.random() > 0.5) {
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
        width: square.width - (
            square.width -
            splitAt + square.x),
        height: square.height
    };
    var squareB = {
        x: splitAt,
        y: square.y,
        width: square.width -
            splitAt + square.x,
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
        height: square.height - (
            square.height -
            splitAt + square.y)
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

function draw() {
    for (var i = 0; i < colors.length; i++) {
        squares[Math.floor(Math.random() * squares.length)].color = colors[i]
    };
    console.log(squares);
    for (var i = 0; i < squares.length; i++) {
        c.beginPath();
        c.rect(
            squares[i].x,
            squares[i].y,
            squares[i].width,
            squares[i].height
        )
    };
    c.stroke();
    for (var i = 0; i < size; i += step) {
        splitSquaresWith({ y: i });
        splitSquaresWith({ x: i });
    }
}

var lineClick() = function() {
    console.log(LineID);
    if (LineID.checked) {
        PaintID.checked = false;
        LineID.checked = true;
    }
}
var paintClick() = function() {
    console.log(LineID);
    if (LineID.checked) {
        PaintID.checked = false;
        LineID.checked = true;
    }
}
var HClick() = function() {
    if (H_Line.checked) {
        V_Line.checked = false;
        H_Line.checked = true;
    }
}
var VClick() = function() {
    if (V_Line.checked) {
        H_Line.checked = false;
        V_Line.checked = true;
    }
}
var TClick() = function() {
    if (Traditional.checked) {
        PaintID.checked = false;
        Traditional.checked = true;
    }
}
var PClick() = function() {
    if (Pastel.checked) {
        Traditional.checked = false;
        Pastel.checked = true;
    }
}

draw();
canvas.addEventListener('mousedown', draw);
