var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//var size = 700;
var dpr = window.devicePixelRatio;
canvas.width = 550 * dpr;
canvas.height = 400 * dpr;
var startImage = new Image();
startImage.src="images/Claude-Monet-770x736.jpg";
var uploadImage = new Image();

function initPic() {    
    startImage = document.getElementById("img_monet");
    c.drawImage(startImage, 0, 0);
}

function myFunction(){
     reader.addEventListener("load", () => {
         uploadImage = reader.result;
         c.drawImage(uploadImage, 0, 0);
     }
     reader.readDataAsURL
}

function myDownload () {
    const a = document.createElement("a");    
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "my_Monet.png";
    a.click();
    document.removeChild(a);
    console.log(dataURI)
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
