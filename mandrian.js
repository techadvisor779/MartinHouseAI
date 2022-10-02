const canvas = document.getElementById('canvas1')
canvas.width = innerWidth;
canvas.height = innerHeight-135;
var c = canvas.getContext('2d');

const pallet0 = [
     'white',               //white  0
     '#fff001',             //yellow   1
     '#ff0101',             //red    2
     '#0101fd',             //blue    3
     'Black'                //black 7
]	

var change_pallet1 = function () {
    c.fillStyle = 'White';
    c.fillRect(100, 0, 280, 600);
    c.strokeStyle = 'Black';
    c.strokeRect(100, 0, 280, 600);
    c.fillStyle='White';
    c.fillRect(400, 0, 1000, 600);
    c.strokeStyle = 'Black';
    c.strokeRect(400, 0, 1000, 600);

    c.fillStyle = 'Black';
    c.font = "16px Georgia";
    c.fillText("Paint Brush", 200, 46);
    c.fillStyle = 'Black';
    c.strokeRect(181, 56, 28, 28);
    c.fillStyle = 'DarkOliveGreen';
}

change_pallet1();


