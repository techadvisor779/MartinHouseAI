var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 600;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;

let img = loadImage('images/Claude-Monet-770x736.jpg');

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

function setUp() {
  for(let col=0; col< img.width; col++ ) {
    for(let row=0; row< img.height; row++ ) {
      let c = img.get(col,row);
      stroke(color(c));
      point(col,row);
    }
  }
}

setup();
//canvas.addEventListener('mousedown', draw);
