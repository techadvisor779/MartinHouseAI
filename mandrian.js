var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var w = 750;
var h = 500;
var dpr = window.devicePixelRatio;
c.scale(dpr, dpr);
c.lineWidth = 4;
var stepW = w / 3;
var stepH = h / 3;
var white = '#F2F5F1';
var colorsT = ['#D40920', '#1356A2', '#F7D842'];
var colorsP = ['#8BD3E6', '#FF6D6A', '#E9EC6B'];
var colors = colorsT;
var splitDirectionVert = true;
var rectangles = [];

var squares = [{
    x: 0,
    y: 0,
    width: w,
    height: h
}];

function createRectangles(x, y, width, height) {
    rectangles.push({ x, y, width, height })
}

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
        w: square.width - (square.width - splitAt + square.x),
        h: square.height
    };
    var squareB = {
        x: splitAt,
        y: square.y,
        w: square.width - splitAt + square.x,
        h: square.height
    };
    squares.push(squareA);
    squares.push(squareB);
}

function splitOnY(square, splitAt) {
    var squareA = {
        x: square.x,
        y: square.y,
        w: square.width,
        h: square.height - (square.height - splitAt + square.y)
    };

    var squareB = {
        x: square.x,
        y: splitAt,
        w: square.width,
        h: square.height - splitAt + square.y
    };
    squares.push(squareA);
    squares.push(squareB);
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
        if (squares[i].color) {
            c.fillStyle = squares[i].color;
        } else {
            c.fillStyle = white
        }
        c.fill()
        c.stroke();
    }
}

function drawRectangles() {
    rectangles.forEach((rectangle) => {
        c.beginPath();
        c.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        c.closePath();
        c.stroke();
    });
}

function onRectangleClick(e) {
    const onClickIndex = 0;
    const clickedRectangle = rectangles[0];

    rectangle.splice(clickedIndex, 1);
    splitRectangleAt(clickedRectangle);
}

function splitRectangleAt(rectangle, position) {
    if (splitDirectionVert) {
        rectangles.push({
            x: rectangle.x,
            y: rectangle.y,
            width: position.x,
            height: rectangle.height
        });
        rectangle.push({
            x: rectangle.x + position.x,
            y: rectangle.y,
        });
    } else {
        rectangles.push({
            x: rectangle.x,
            y: rectangle.y,
            width: rectangle.width,
            height: position.y
        });
        drawRectangles();
    }
}

canvas.addEventListener('mousedown', function () {
    draw();
    onRectangleClick();
    
    for (var i = 0; i < w; i += stepW) {
        splitSquaresWith({ x: i });
    }
    for (var i = 0; i < h; i += stepH) {
        splitSquaresWith({ y: i });
    }
}); 

const buttonL = document.getElementById("LineID");
const buttonH = document.getElementById("H_Line");
const buttonV = document.getElementById("V_Line");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");

buttonL.onclick = () => {
    if (buttonL.checked) {
        buttonP.checked = false;
    }
}

buttonH.onclick = () => {
    if (buttonH.checked) {
        buttonV.checked = false;
    }
}

buttonV.onclick = () => {
    if (buttonV.checked) {
        buttonH.checked = false;
    }
}

buttonP.onclick = () => {
    if (buttonP.checked) {
        buttonL.checked = false;
    }
}
buttonT.onclick = () => {
    if (buttonT.checked) {
        buttonPP.checked = false;
        colors = colorsT;
    }
}

buttonPP.onclick = () => {
    if (buttonP.checked) {
        buttonT.checked = false;
        colors = colorsP;
    }
}

