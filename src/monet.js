var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//var size = 700;
var dpr = window.devicePixelRatio;
canvas.width = 550 * dpr;
canvas.height = 400 * dpr;
var startImage = new Image();

startImage = document.getElementById("img_monet");
//startImage.src="images/Claude-Monet-770x736.jpg";
startImage.width = startImage.width * dpr;
startImage.height = startImage.height * dpr;
c.drawImage(startImage, 0, 0);

var imgInput = document.getElementById('myImage');
function loadImg() {
    var reader = new FileReader();
    
    const loaded = (e) => {
      const fr = e.target;
      var result = fr.result;

      changeStatus('Finished Loading!');
      console.log('Result:', result);
    }
}

const loaded = (e) => {
      const fr = e.target;
      var result = fr.result;
    
      console.log('Result:', result);
    }

const processFile = (file) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('loadend', loaded);
    }

document.getElementById('myImage').addEventListener('change', (e) => {
      const file = document.getElementById('myImage').files[0];
      if (file) {
        processFile(file);
      }  
      })
}
                                                    
//     imgInput = reader.result;
//     var temp = reader.readDataAsURL;
//     console.log(imgInput, reader, temp)
//     //c.drawImage(uploadImage, 0, 0);

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

document.onpaste = (event) => {
  const items = (event.clipboardData || event.originalEvent.clipboardData)
    .items;
  console.log(JSON.stringify(items));
  let blob = null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf("image") === 0) {
      blob = items[i].getAsFile();
    }
  }

  if (blob !== null) {
    const reader = new FileReader();
    reader.onload = (event) =>{
      console.log(event.target.result); 
    };
    reader.readAsDataURL(blob);
  }
};

//document.addEventListener('onchange', myFunction);
