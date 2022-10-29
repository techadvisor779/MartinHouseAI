var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 600;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;

let img = loadImage('images/Claude-Monet-770x736.jpg');
c.drawImage(img,0,0);


canvas.addEventListener('mousedown', draw);
