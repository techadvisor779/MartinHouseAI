var canvas = document.querySelector('canvas2');
var c = canvas.getContext('2d');

var size = 600;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;

document.getElementById('file-input').onchange = function () {
  loadImage(
    this.files[0],
    function (img) {
      document.body.appendChild(img)
    },
    { maxWidth: 600 } // Options
  )
}

let img;
  
function preload() {
  img = loadImage('images/beautiful-house.jpg');
}
  
function setup() {
  image(img, 20, 40, 100, 100);
}

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

draw();
canvas.addEventListener('mousedown', draw);
