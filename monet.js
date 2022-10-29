var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 600;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;

let img = new Image;
img.src = "images/Claude-Monet-770x736.jpg";
c.drawImage(img,0,0);

function submitForm() {
    if (h3) {
        h3.parentNode.removeChild(h3);
    }
    var val = document.getElementById('signIt').value;
    val = val + " '22" ;
    c.fillStyle = 'Black';
    c.font = "12pt papyrus";
    c.textAlign = 'right';
    var h3 = document.createElement('h3');          
    h3.style.transform = "translate( 800px, -100px) rotate( -10deg)";
    h3.textContent = val; 
    document.body.appendChild(h3);
}

canvas.addEventListener('mousedown', draw);
