const canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;
//var size = 1000;
var dpr = window.devicePixelRatio;
canvas.width = canvas.width * dpr * .671;
canvas.height = canvas.height * dpr * .62;
var c = canvas.getContext('2d');
var dataUrl = canvas.toDataURL("image/png");

var img = new Image();
img.crossOrigin = "Anonymous";
//img.data = c.getImageData(400, 0, 1000, 600);

//var img
//img = new Image();
//img.data = dataUrl; // c.createImageData(600, 600);

let img_pollock;
img_pollock = document.getElementById('img_pollock');
let img_pollock2;
img_pollock2 = document.getElementById('img_pollock2');
let img_pollock3;
img_pollock3 = document.getElementById('img_pollock3');
let btn_clear;
let btn_exit;

const pallet1 = [
  '#ffffff', // white 0
  '#d3d2c9', // DarkOliveGreen 1
  '#fcba0e', // SandyBrown 2
  '#fceb79', // PapayaWhip 3
  '#b30000', // FireBrick 4
  '#68674b', // SlateGrey 5
  '#559be8', // steel 6
  '#000000' // black 7
]

const pallet2 = [
  '#ffffff', // white 0
  '#808080', // grey 1
  '#a52a2a', // brown 2
  '#daa520', // GoldenRod 3
  '#d8bfd8', // Thistle 4
  '#696969', // DimGrey 5
  '#0000cd', // MediumBlue 6
  '#000000' // black 7
]

const pallet3 = [
  '#ffffff', // white 0
  '#800000', // Maroon 1
  '#ff4500', // OrangeRed 2
  '#cd853f', // Peru 3
  '#b8860b', // DarkGoldenRod 4
  '#2f4f4f', // DarkSlateGray 5
  '#00ffff', // Cyan 6
  '#000000' // black 7
]


const button = document.getElementById('button');

var bg_color = 'White';
var COLORS = [];
var current_pallet = pallet1;
var COLORS = current_pallet;
var dibble_COLORS = []
var dribble_COLORS = current_pallet;
var color_choice;
var radius = 10;
var dragging = false;
var oldX;
var oldY;
var delta;
var brush_num;
var oldX = 0;
var oldY = 0;
var delta = 0;
var dribble_count = 0;
var brush_num = 4;
var randColor_Opt = false;
var color_choice = 0;
const arr = new Uint8ClampedArray(40_000);
var initCanvas = true;
var a = 1;

var putPoint = function (e, dragging, dribble_COLORS, COLORS) {    ///  400, 0, 1000, 600);
    delta = (e.clientX * e.clientX) + (e.clientY * e.clientY);
    if (e.clientX > 425 - radius) {
        if (e.clientX < 1395) {
            if (e.clientY > 0) {
                if (e.clientY < 750 - radius) {
                    c.beginPath();
                    c.arc(e.clientX, e.clientY - 120, radius, 0, Math.PI * 2);
                    c.fill();
                    c.arc(1685 - e.clientX, 700 - e.clientY, radius, 0, Math.PI * 2);
                    c.fill();
                    dribble(e, dribble_COLORS);
                }
                else dragging = false;
            }
            else dragging = false;
        }
        else dragging = false;
    }
    else dragging = false;
    radius -= (delta / 30000000);
    if (radius <= 0) {
        radius = 0;
    }
    oldX = e.clientX;
    oldY = e.clientY;
    
}

var dribble = function (e) {
    temp = c.fillStyle;
    dribble_count += 1;
    if (dribble_count > 1) {
         ranX = (Math.random() * 160) - 80;
         ranY = (Math.random() * 160) - 80;
         ranR1 = Math.random() * 10;
         ranR2 = Math.random() * 10;
         c.beginPath();
         if (randColor_Opt) {
             ranC = Math.round(Math.random() * 7);
             c.fillStyle = dribble_COLORS[ranC];
         }
         c.arc(e.clientX + ranX, e.clientY + ranY - 95, ranR1, 0, Math.PI * 2);
         c.arc(1685 - e.clientX + ranX, 700 - e.clientY + ranY, ranR2, 0, Math.PI * 2);
         c.fill();
         dribble_count = 0;
    }
    c.fillStyle = temp;
}

var color_check = function (e) {
//brush click detect
    if (e.clientY > 177) {
        if (e.clientY < 201) {              
            if (e.clientX > 181) {
                if (e.clientX < 205) {
                    brush_num = 6;
                    c.fillStyle = current_pallet[0];
                }
                else if (e.clientX < 239) {
                    brush_num = 5;
                    c.fillStyle = current_pallet[1];
                }
                else if (e.clientX < 265) {
                    brush_num = 7;
                    c.fillStyle = current_pallet[2];
                }
                else if (e.clientX < 300) {
                    brush_num = 7;
                    c.fillStyle = current_pallet[3];
                }
            }
        }
    }
    if (e.clientY > 203) {
        if (e.clientY < 232) {                     
            if (e.clientX > 181) {
                if (e.clientX < 205) {
                    console.log("5");
                    brush_num = 1;
                    c.fillStyle = current_pallet[7];
                }
                else if (e.clientX < 239) {
                    console.log("6");
                    brush_num = 2;
                    c.fillStyle = current_pallet[4];
                }
                else if (e.clientX < 265) {
                    console.log("7");
                    brush_num = 3;
                    c.fillStyle = current_pallet[5];
                }
                else if (e.clientX < 300) {
                    console.log("8");
                    brush_num = 4;
                    c.fillStyle = current_pallet[6];
                }
            }
        }
    }    
 // bg click detect
    if (e.clientY > 277) {
        if (e.clientY < 299) {
            if (e.clientX > 181) {
                if (e.clientX < 205) {
                    bg_color = current_pallet[0];
                    change_bg();
                }
                else if (e.clientX < 239) {
                    bg_color = 5;
                    bg_color = current_pallet[1];
                    change_bg();
                }
                else if (e.clientX < 265) {
                    bg_color = 6;
                    bg_color = current_pallet[2];
                    change_bg();
                }
                else if (e.clientX < 300) {
                    bg_color = 7;
                    bg_color = current_pallet[3];
                    change_bg();
                }
            }
        }
    }
    if (e.clientY < 331) {
        if (e.clientY > 304) {        
            if (e.clientX > 181) {
                if (e.clientX < 205) {
                    bg_color = 1;
                    bg_color = current_pallet[7];
                    change_bg();
                }
                else if (e.clientX < 246) {
                    bg_color = 2;
                    bg_color = current_pallet[4];
                    change_bg();
                }
                else if (e.clientX < 277) {
                    bg_color = 3;
                    bg_color = current_pallet[5];
                    change_bg();
                }
                else if (e.clientX < 307) {
                    bg_color = 4;
                    bg_color = current_pallet[6];
                    change_bg();
                }
            }
        }
    }
 // pallet change click detect
    if (e.clientY > 345) {       //180, 240, 120, 60)
        if (e.clientY < 405) {
            if (e.clientX > 180) {
                if (e.clientX < 240) {
                    current_pallet = pallet1;
                    dribble_COLORS = pallet1;
                    change_pallet1();
                }
            }
        }
    }
    if (e.clientY > 425) {            
        if (e.clientY < 500) {     
            if (e.clientX > 180) {
                if (e.clientX < 298) {
                    current_pallet = pallet2;
                    dribble_COLORS = pallet2;
                    change_pallet2();
                }
            }
        }
    }
    if (e.clientY > 530) {         
        if (e.clientY < 590) {            
            if (e.clientX > 180) {
                if (e.clientX < 300) {
                    current_pallet = pallet3;
                    dribble_COLORS = pallet3;
                    change_pallet3();
                }
            }
        }
    }
    if (e.clientY > 620) {
        if (e.clientY < 642) {
            if (e.clientX > 235) {
                if (e.clientX < 255) {    
                    disengage();
                    if (randColor_Opt == true) {
                        randColor_Opt = false;
                    }
                    else {
                        randColor_Opt = true;
                    }  
                    RandomChk();
                }
            }
        }
    }    
}

var RandomChk = function () {     
     tempStroke = c.strokeStyle;
     tempFill = c.fillStyle;        
     if (randColor_Opt) {  
          c.beginPath(); 
          c.font = "16px Georgia";
          c.strokeStyle = 'Black';
          c.fillStyle = 'Black';  
          c.arc(245, 510, 8, 0, Math.PI * 2);
          c.fill();
     } else {
          c.beginPath();  
          c.arc(245, 510, 8, 0, Math.PI * 2);     
          c.arc(245, 510, 6, 0, Math.PI * 2); 
          c.font = "16px Georgia";
          c.strokeStyle = 'Black';          
          c.lineWidth = 3; 
          c.stroke();
          c.fillStyle = 'White';
          c.fill(); 
     }     
     c.strokeStyle = tempStroke;
     c.fillStyle = tempFill;
}

var change_pallet1 = function () {
     tempStroke = c.strokeStyle;
     tempFill = c.fillStyle;  
     c.beginPath();  
     if (initCanvas) {
          c.fillStyle = 'White';
          c.fillRect(100, 0, 280, 599);
          c.strokeStyle = 'Black';
          c.strokeRect(100, 0, 280, 599);
          c.fillStyle='White';
          c.fillRect(400, 0, 1000, 599);
          c.strokeStyle = 'Black';
          c.strokeRect(400, 0, 1000, 599);
          initCanvas = false;
    }
    c.fillStyle = pallet1[0]; // white
    c.strokeRect(181, 56, 28, 28);
    c.fillStyle = pallet1[1]; // grey
    c.fillRect(210, 55, 30, 30);
    c.fillStyle = pallet1[2]; // brown
    c.fillRect(240, 55, 30, 30);
    c.fillStyle = pallet1[3]; // GoldenRod
    c.fillRect(270, 55, 30, 30);
    c.fillStyle = pallet1[7]; // black
    c.fillRect(180, 85, 30, 30);
    c.fillStyle = pallet1[4]; // Thistle
    c.fillRect(210, 85, 30, 30);
    c.fillStyle = pallet1[5]; // DimGrey
    c.fillRect(240, 85, 30, 30);
    c.fillStyle = pallet1[6]; // MediumBlue
    c.fillRect(270, 85, 30, 30);
    
    c.fillStyle = pallet1[0]; // white
    c.strokeRect(181, 156, 28, 28)
    c.fillStyle = pallet1[1]; // grey
    c.fillRect(210, 155, 30, 30)
    c.fillStyle = pallet1[2]; // brown
    c.fillRect(240, 155, 30, 30)
    c.fillStyle = pallet1[3]; // GoldenRod
    c.fillRect(270, 155, 30, 30)
    c.fillStyle = pallet1[7]; // black
    c.fillRect(180, 185, 30, 30)
    c.fillStyle = pallet1[4]; // Thistle
    c.fillRect(210, 185, 30, 30)
    c.fillStyle = pallet1[5]; // DimGrey
    c.fillRect(240, 185, 30, 30)
    c.fillStyle = pallet1[6]; // MediumBlue
    c.fillRect(270, 185, 30, 30)
    c.fill();  
     
    c.drawImage(img_pollock, 180, 240, 120, 60)
    c.drawImage(img_pollock2, 180, 320, 120, 60)
    c.drawImage(img_pollock3, 180, 400, 120, 60)  
    c.strokeStyle = tempStroke;
    c.fillStyle = tempFill;
}

var change_pallet2 = function () {
    tempStroke = c.strokeStyle;
    tempFill = c.fillStyle;  
    c.strokeStyle = 'Black';
    c.strokeRect(100, 0, 280, 600);
    c.strokeRect(400, 0, 1000, 600);

    c.fillStyle = pallet2[0]; // white
    c.strokeRect(181, 56, 28, 28);
    c.fillStyle = pallet2[1]; // grey
    c.fillRect(210, 55, 30, 30);
    c.fillStyle = pallet2[2]; // brown
    c.fillRect(240, 55, 30, 30);
    c.fillStyle = pallet2[3]; // GoldenRod
    c.fillRect(270, 55, 30, 30);
    c.fillStyle = pallet2[7]; // black
    c.fillRect(180, 85, 30, 30);
    c.fillStyle = pallet2[4]; // Thistle
    c.fillRect(210, 85, 30, 30);
    c.fillStyle = pallet2[5]; // DimGrey
    c.fillRect(240, 85, 30, 30);
    c.fillStyle = pallet2[6]; // MediumBlue
    c.fillRect(270, 85, 30, 30);
    
    c.fillStyle = pallet2[0]; // white
    c.strokeRect(181, 156, 28, 28)
    c.fillStyle = pallet2[1]; // grey
    c.fillRect(210, 155, 30, 30)
    c.fillStyle = pallet2[2]; // brown
    c.fillRect(240, 155, 30, 30)
    c.fillStyle = pallet2[3]; // GoldenRod
    c.fillRect(270, 155, 30, 30)
    c.fillStyle = pallet2[7]; // black
    c.fillRect(180, 185, 30, 30)
    c.fillStyle = pallet2[4]; // Thistle
    c.fillRect(210, 185, 30, 30)
    c.fillStyle = pallet2[5]; // DimGrey
    c.fillRect(240, 185, 30, 30)
    c.fillStyle = pallet2[6]; // MediumBlue
    c.fillRect(270, 185, 30, 30)
    c.fill(); 
     
    c.drawImage(img_pollock, 180, 240, 120, 60);
    c.drawImage(img_pollock2, 180, 320, 120, 60);
    c.drawImage(img_pollock3, 180, 400, 120, 60);
    c.fill();  
    c.strokeStyle = tempStroke;
    c.fillStyle = tempFill;
}

var change_pallet3 = function () {
    tempStroke = c.strokeStyle;
    tempFill = c.fillStyle; 
    c.strokeStyle = 'Black'; 
    c.strokeRect(100, 0, 280, 600);
    c.strokeRect(400, 0, 1000, 600);

    c.fillStyle = pallet3[0]; // white
    c.strokeRect(181, 56, 28, 28);
    c.fillStyle = pallet3[1]; // grey
    c.fillRect(210, 55, 30, 30);
    c.fillStyle = pallet3[2]; // brown
    c.fillRect(240, 55, 30, 30);
    c.fillStyle = pallet3[3]; // GoldenRod
    c.fillRect(270, 55, 30, 30);
    c.fillStyle = pallet3[7]; // black
    c.fillRect(180, 85, 30, 30);
    c.fillStyle = pallet3[4]; // Thistle
    c.fillRect(210, 85, 30, 30);
    c.fillStyle = pallet3[5]; // DimGrey
    c.fillRect(240, 85, 30, 30);
    c.fillStyle = pallet3[6]; // MediumBlue
    c.fillRect(270, 85, 30, 30);
    
    c.fillStyle = pallet3[0]; // white
    c.strokeRect(181, 156, 28, 28)
    c.fillStyle = pallet3[1]; // grey
    c.fillRect(210, 155, 30, 30)
    c.fillStyle = pallet3[2]; // brown
    c.fillRect(240, 155, 30, 30)
    c.fillStyle = pallet3[3]; // GoldenRod
    c.fillRect(270, 155, 30, 30)
    c.fillStyle = pallet3[7]; // black
    c.fillRect(180, 185, 30, 30)
    c.fillStyle = pallet3[4]; // Thistle
    c.fillRect(210, 185, 30, 30)
    c.fillStyle = pallet3[5]; // DimGrey
    c.fillRect(240, 185, 30, 30)
    c.fillStyle = pallet3[6]; // MediumBlue
    c.fillRect(270, 185, 30, 30)
    c.fill(); 
     
    c.drawImage(img_pollock, 180, 240, 120, 60)
    c.drawImage(img_pollock2, 180, 320, 120, 60)
    c.drawImage(img_pollock3, 180, 400, 120, 60)  

    c.strokeStyle = tempStroke;
    c.fillStyle = tempFill;
}

var change_bg = function () {
    c.fillStyle = bg_color;
    c.fillRect(400, 1, 1000, 599);
    c.fill();
    assignColors(COLORS);
}

var engage = function (e) {
    console.log(e.clientX, e.clientY)
    color_check(e);
    dragging = true;
    radius = 14;
    putPoint(e);
}

var moving_clicked = function (e) {
    if (dragging) {
        if (radius > 0) {
            putPoint(e);
        }
    }
}

var disengage = function (e) {
  dragging = false;
  const canvas2 = document.getElementById('canvas1')
  var c2 = canvas.getContext('2d');
  //var imgData = c2.getImageData(400, 0, 1000, 600);
  //window.sessionStorage;
  //sessionStorage.setItem('imgData', JSON.stringify(imgData));
} 

function submitForm() {
     var val = document.getElementById('signIt').value;
     val = val + " '22" ;
     c.fillStyle = 'Black';
     c.font = "12pt papyrus";
     c.textAlign = 'right';
     c.strokeStyle = 'Black';
     console.log(bg_color, 'here');
     if (bg_color == 'Black') {
        c.fillStyle = 'White';
     }
     else {
        c.fillStyle = 'Black';
    }
    c.fillText(val, canvas.width-50, canvas.height-30); //  1230, 540);
}

change_pallet1();
c.font = "16px Georgia";
c.strokeStyle = 'Black';
c.fillText("Random Splatter", 180, 490);
c.beginPath();  
c.arc(245, 510, 8, 0, Math.PI * 2);     
c.arc(245, 510, 6, 0, Math.PI * 2); 
c.strokeStyle = 'black';
c.lineWidth = 3; 
c.stroke();
c.fillStyle = 'white';
c.fill();

canvas.addEventListener('resize', function () {
    canvas.width = canvas.width * dpr;
    canvas.height = canvas.height * dpr;
});

canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mousemove', moving_clicked)
canvas.addEventListener('mouseup', disengage)
