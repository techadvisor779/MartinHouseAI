const canvas = document.getElementById('canvas1')
canvas.width = innerWidth;
canvas.height = innerHeight-135;
var c = canvas.getContext('2d');
var dataUrl = canvas.toDataURL("image/png");

var img = new Image();
img.crossOrigin = "Anonymous";

let btn_clear;
let btn_exit;

const pallet0 = [
     'white',               //white  0
     '#fff001',             //yellow   1
     '#ff0101',             //red    2
     '#0101fd',             //blue    3
     'Black'                //black 7
]	

const button = document.getElementById('button');

var putPoint = function (e, dragging, dribble_COLORS, COLORS) {
    if (e.clientX > 410) {
        if (e.clientX < 1400) {
            if (e.clientY > 90) {
                if (e.clientY < 676 - radius) {
                    c.beginPath();
 
}

var change_pallet1 = function () {
    c.fillStyle = 'White';
    c.fillRect(200, 100, 1000, 700);
    c.strokeStyle = 'Black';
    c.strokeRect(200, 100, 1000, 700);
    c.fillStyle='White';

}

var change_bg = function () {
    c.fillStyle = bg_color;
    c.fillRect(400, 1, 1000, 599);
    c.fill();
}

var engage = function (e) {
    dragging = true;
    radius = 14;
    putPoint(e);
    console.log(e.clientX, e.clientY);
}

var disengage = function (e) {
    dragging = false;  
   
}    

function assignColors(COLORS) {    
    
}

change_pallet1()
canvas.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});
canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mousemove', moving_clicked)
canvas.addEventListener('mouseup', disengage)
