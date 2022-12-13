
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var dpr = window.devicePixelRatio;
console.log(dpr)
canvas.width = 500 * dpr;
canvas.height = 400 * dpr;
var startImage = new Image();

startImage = document.getElementById("img_monet");
c.drawImage( startImage, 0, 0, canvas.width, canvas.height);
var imgInput = document.getElementById('myImage');
function loadImg() {
    var reader = new FileReader();  
    const loaded = (e) => {
      const fr = e.target;
      var result = fr.result;      
    }
}

const loaded = (e) => {
       const fr = e.target;       
       startImage.src = fr.result;  
       console.log(fr)     
       if (startImage.width>canvas.width || startImage.height>canvas.height) {
            var scale = canvas.width/startImage.width;      
            startImage.width = startImage.naturalWidth*dpr*scale;
            startImage.height = startImage.naturalHeight*dpr*scale;      
       }
       else {
            var scale = 1;
       }
       canvas.width = startImage.width;
       canvas.height = startImage.height;  
       //c.drawImage( startImage, 0, 0, canvas.width*scale, canvas.height*scale); 
       c.beginPath();
       c.moveTo(0,0);
       c.rect( 0, 0, canvas.width, canvas.height);
       c.fillStyle = 'black';
       c.lineWidth = 5;
       c.stroke();
       alert(`${startImage.width} x ${startImage.height}`); 
       c.drawImage( startImage, 0, 0, startImage.width*scale, startImage.height*scale);
     }

const processFile = (file) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);    
      fr.addEventListener('loadend', loaded);
    };

document.getElementById('myImage').addEventListener('change', (e) => {
      const file = document.getElementById('myImage').files[0];
      if (file) {
        processFile(file);
      }        
});

function myDownload() {
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
    c.fillStyle = 'Black';
    c.font = "12pt papyrus";
    c.textAlign = 'right';
    c.strokeStyle = 'Black';
    c.fillStyle = 'Black';
    c.fillText( val, canvas.width - 50, canvas.height - 30);
}
    
function monetImg() {
    var c2 = canvas.getContext('2d');
    var img = new Image();
    img.crossOrigin = "Anonymous";
    //img.data = c2.getImageData( 0, 0, img.naturalWidth, img.naturalHeight);
    console.log(img)
}

function handleEvent(event) {
    eventLog.textContent += `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        preview.src = reader.result;
    }
}

//element.addEventListener('onchange', myFunction);
