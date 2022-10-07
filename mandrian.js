const canvas = document.getElementById('canvas1')
canvas.width = innerWidth;
canvas.height = innerHeight-135;
var c = canvas.getContext('2d');

const rects = [];

const pallet0 = [
     'white',               //white  0
     '#fff001',             //yellow   1
     '#ff0101',             //red    2
     '#0101fd',             //blue    3
     'Black'                //black 7
]


function MyBorders() {
    c.fillStyle = 'White';
    c.fillRect(100, 0, 280, 600);
    c.strokeStyle = 'Black';
    c.strokeRect(100, 0, 280, 600);
    c.fillStyle='White';
    c.fillRect(400, 0, 1000, 600);
    c.strokeStyle = 'Black';
    c.strokeRect(400, 0, 1000, 600);    
}

const container1 = document.querySelectAll(".range-slider");

for ( let i=0; i < container.length; i++) {
     const slider = container[i].querySelector(".slider");
     const thumb = container[i].querySelector(".slider-thumb");
     const tooltip = container[i].querySelector(".tooltip");
     const progress = container[i].querySelector(".progress");
}

function customSlider() {
     const maxVal = slider.getAttribute("max");
     const val = (slider.value / maxValue) * 100 + "%";
     
     tooltip.innerHTML = slider.value;
     progress.style.width = val;
     thumb.style.left = val;     
}

console.log(slider);

//slider.addEventListener("input", () => {
     //customSlider();   
//});

customSlider();
MyBorders();

