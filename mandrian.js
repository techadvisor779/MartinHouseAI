var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var w = 750;
var h = 500;
var dpr = window.devicePixelRatio;
c.scale(dpr, dpr);
c.lineWidth = 4;
var stepW = w / 7;
var stepH = h / 7;
var white = '#F2F5F1';
var colors = ['#D40920', '#1356A2', '#F7D842']

var squares = [{
    x: 0,
    y: 0,
    width: w,
    height: h
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
        if(squares[i].color) {
            c.fillStyle = squares[i].color;
        } else {
            c.fillStyle = white
        }
        c.fill()
        c.stroke();
    }
}

canvas.addEventListener('mousedown', function() {    
    for (var i = 0; i < w; i += stepW) {
        splitSquaresWith({ x: i });
    }
    for (var i = 0; i < h; i += stepH) {
        splitSquaresWith({ y: i });
    }
    draw();
}); 
