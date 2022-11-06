var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//var size = 700;
var dpr = window.devicePixelRatio;
canvas.width = 550 * dpr;
canvas.height = 400 * dpr;
var startImage = new Image();
startImage.src="images/Claude-Monet-770x736.jpg";
var myImage = new Image();

function initPic() {    
    startImage = document.getElementById("img_monet");
    console.log(startImage);
    c.drawImage(startImage, 0, 0);
}

function myFunction(){
     console.log(document.getElementById('myImage'), myImage);
     myImage.src = document.getElementById('myImage').value;
     c.drawImage( myImage, 0, 0, canvas.width, canvas.height);
// 
//     document.getElementById('myImage').onchange = function (evt) {
//         var tgt = evt.target || window.event.srcElement,
//             files = tgt.files;

//         // FileReader support
//         if (FileReader && files && files.length) {
//             var fr = new FileReader();
//             fr.onload = () => showImage(myImage);
//             fr.readAsDataURL(files[0]);
//         }
//     }
}

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
