var canvas = document.querySelector('canvas');
var w = 750;
var h = 500;
canvas.width = w;
canvas.height = h;
var c = canvas.getContext('2d');
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

const buttonL = document.getElementById("LineID");
const buttonH = document.getElementById("H_Line");
const buttonV = document.getElementById("V_Line");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");

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

function splitOnY(e) {
    console.log("here Y")
    c.beginPath();  
    c.strokeStyle = 'Black';
    c.rect(0, e.clientY, c.width, c.height);
    c.fill(); 
}

function splitOnX(e) {
    console.log("here X")
    c.beginPath();  
    console.log(c.fillStyle,  e.clientX, c.width, c.height);
    c.strokeRect( e.clientX, 0, c.width, c.height);
    ranC = Math.round(Math.random() * 7);
    c.fillStyle = colors[ranC];
    c.strokeStyle = 'Black';
    c.lineWidth = 4;
    c.fill();
}

var draw = function (e) {
    console.log("here inside")
    if (buttonL.checked) {
        if (buttonH.checked) {
            splitOnX(e)
        }
        if (buttonV.checked) {
            splitOnY(e)
        }
    }    
}

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

canvas.addEventListener('mousedown', draw);

