var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var dpr = window.devicePixelRatio;
canvas.width = window.innerWidth*dpr*.35;
canvas.height = window.innerWidth*dpr*.22;
var size = canvas.width*.8;
//console.log( dpr, canvas.width, canvas.height);
//c.scale(dpr, dpr);
c.lineWidth = 6;
var inputDiv = 7;
var step = size / inputDiv;
var white = '#F2F5F1';
var colorsP = ['#f6cdd2', '#cfddec', '#fdf7d9', '#f6cdd2', '#cfddec', '#fdf7d9', '#000000', ]
var colorsT = ['#D40920', '#1356A2', '#F7D842', '#D40920', '#1356A2', '#F7D842', '#000000']
var colors = colorsT;
var colorIndex = 0;
const buttonL = document.getElementById("LineID");
const buttonP = document.getElementById("PaintID");
const buttonT = document.getElementById("Traditional");
const buttonPP = document.getElementById("Pastel");
var slider = document.getElementById("LineRange");
var stepVal = 0;
var squares = [{
    x: 0,
    y: 0,
    width: size,
    height: size,
    index: 0
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
        height: square.height - (square.height - splitAt + square.y),
        index: 0
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
        inputDiv = document.getElementById("LineRange").value;
        step = (size / inputDiv);
        squares = [{ x: 0, y: 0, width: size*dpr, height: size*dpr}];
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
            squares[i].height,
            squares[i].index
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
    c.beginPath();
    c.rect(0,0,canvas.width,canvas.height);
    c.stroke();   
}

function ColorChange(e) {
    if (PaintID.checked) {   
        var xAdj = canvas.getBoundingClientRect().left;  //344
        var yAdj = canvas.getBoundingClientRect().top-200;    //-212   
        var x = e.clientX-xAdj;
        var y = e.clientY-yAdj; 
        console.log(x,y);
        var xMaxLimit=x;
        var yMaxLimit=y+1;     
        var xMinLimit=x-1;
        var yMinLimit=y-1;          
        var step=1;
        myFlag = true;
        while (myFlag) {   
            imageData = c.getImageData(x+step, y, 1, 1); 
            pixelData = imageData.data;  
            if (pixelData[0] == 0 && pixelData[1] == 0 && pixelData[2] == 0) {
                xMaxLimit = x+step; 
                myFlag = false; 
                break;              
            }
            step++;
        }  
        step=1;
        myFlag = true;
        while (myFlag) {            
            imageData = c.getImageData(x-step, y, 1, 1);
            pixelData = imageData.data;              
            if (pixelData[0] == 0 && pixelData[1] == 0 && pixelData[2] == 0) {
                xMinLimit = xMinLimit-step;
                myFlag = false; 
                break;
            }
            step++;
        } 
        step=1;
        myFlag = true; 
        while (myFlag) {            
            imageData = c.getImageData(x, y+step, 1, 1);
            pixelData = imageData.data;              
            if (pixelData[0] == 0 && pixelData[1] == 0 && pixelData[2] == 0) {
                yMaxLimit = y+step;
                myFlag = false; 
                break;
            }
            step++;
        } 
        step=1;
        myFlag = true;   
        while (myFlag) {            
            imageData = c.getImageData(x, y-step, 1, 1);
            pixelData = imageData.data;              
            if (pixelData[0] == 0 && pixelData[1] == 0 && pixelData[2] == 0) {
                yMinLimit = y-step+1;
                myFlag = false; 
                break;
            }
            step++;
        }            
        c.beginPath();
        if (colorIndex <= 5) { 
            c.fillStyle = colors[colorIndex];
        }
        else {
            c.fillStyle = 'White';
        }
        c.fillRect(xMinLimit+2, yMinLimit, xMaxLimit-xMinLimit-2, yMaxLimit-yMinLimit);
        c.fill();
        step=1;   
        colorIndex++;
        if (colorIndex >= 7) {
            colorIndex = 0;     
        }
    
    }
}

function submitForm() {
     var val = document.getElementById('signIt').value;
     val = val + " '22" ;     
     c.fillStyle = 'Black';
     c.font = "10pt papyrus";
     c.textAlign = 'right';
     c.strokeStyle = 'Black';
     c.fillStyle = 'Black';
     c.fillText(val, canvas.width-30, canvas.height-30);
}

var LineClick = function() {
    if (LineID.checked) {
        PaintID.checked = false;
        LineID.checked = true;
    }
}
var PaintClick = function() {
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
canvas.addEventListener('mousedown', (e) => {
    draw();
    ColorChange(e);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth*dpr*.48;
    canvas.height = window.innerWidth;
    size = canvas.width*.7255;
    draw(canvas)
})
