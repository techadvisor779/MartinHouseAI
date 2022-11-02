var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var size = 700;
var dpr = window.devicePixelRatio;
canvas.width = size;
canvas.height = size;

function initPic() {
    var myImage = new Image();
    myImage.src = document.getElementById("img_monet").src;
    myImage.style.border = "5px solid black";
    myImage.style.borderRadius = "5px";
    c.drawImage(myImage, 0, 0);
}

function myFunction(){
  var x = document.getElementById("myImage");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select an image file";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + ". file</strong><br>";
        var file = x.files[i];
        if ('name' in file) {
          txt += "name: " + file.name + "<br>";
        }
        if ('size' in file) {
          txt += "size: " + file.size + " bytes <br>";
        }
      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select a file";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
  document.getElementById("demo").innerHTML = txt;
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
     c.fillText(val, 730, 670);
     //document.body.appendChild(h3);
}

initPic();
document.addEventListener('onchange', myFunction);
