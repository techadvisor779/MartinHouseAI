var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//var size = 700;
var dpr = window.devicePixelRatio;
canvas.width = 550 * dpr;
canvas.height = 400 * dpr;
var myImage = new Image();

function initPic() {    
    myImage = document.getElementById("img_monet");
    console.log(myImage);
    c.drawImage(myImage, 0, 0);
}

function myFunction(){
    var imgInput = document.querySelector("#imgInput");    
    //myImage.src = imgInput;
    c.drawImage(myImage, 0, 0);
    console.log(imgInput)
}

myImage.addEventListener("load", function() {
    c.drawImage(myImage, 0, 0)
    }, false);

function submitForm() {
    var val = document.getElementById('signIt').value;
    val = val + " '22" ;     
    //var h3 = document.createElement('h3');          
    //h3.style.transform = "translate( 900px, -220px) rotate( -10deg)";
    c.fillStyle = 'Black';
    c.font = "12pt papyrus";
    c.textAlign = 'right';
     //h3.textContent = val; 
    c.strokeStyle = 'Black';
    c.fillStyle = 'Black';
    c.fillText(val, 650, 480);
    //document.body.appendChild(h3);
}

initPic();
//document.addEventListener('onchange', myFunction);
