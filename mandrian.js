const canvas = document.getElementById('canvas1')
canvas.width = innerWidth;
canvas.height = innerHeight-135;
var c = canvas.getContext('2d');
c.lineWidth = 10;

const rectangles = [];

const pallet0 = [
     'white',               //white  0
     '#fff001',             //yellow   1
     '#ff0101',             //red    2
     '#0101fd',             //blue    3
     'Black'                //black 7
];

var splitDirectionVert = true;

canvas.addEventListener('click', onRectangleClick);

function createRectangles(x,y,width,height) {
     rectangles.push({x,y,width,height})     
}

function drawRectangles() {
     rectangles.forEach((rectangle) => {
          c.beginPath();
          c.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
          c.closePath();
          c.stroke();
     });
}

function onRectangleClick(e) {     
     const onClickIndex = 0;
     const clickedRectangle = rectangles[0];
     
     rectangle.splice(clickedIndex, 1);
     splitRectangleAt(clickedRectangle);     
}         
     
function splitRectangleAt(rectangle, position) {
     if (splitDirectionVert) {          
          rectangles.push({
               x: rectangle.x,
               y: rectangle.y,
               width: position.x,
               height: rectangle.height
          });
          rectangle.push({
               x: rectangle.x + position.x,
               y: rectangle.y,          
          });
     } else {
          rectangles.push({
               x: rectangle.x,
               y: rectangle.y,
               width: rectangle.width,
               height: position.y
          });
     drawRectangles();
}     


