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
    c.fillRect(200, 100, 1000, 700);
    c.strokeStyle = 'Black';
    c.strokeRect(200, 100, 1000, 700);
}

change_pallet1();


