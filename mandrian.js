const canvas = document.getElementById('canvas1')
canvas.width = 800;
canvas.height = 600;
var c = canvas.getContext('2d');
c.lineWidth = 10;

const rectangles = [];

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
     const ClickedIndex = rectangles.findIndex((rectange) => {
          if(
               e.x > rectangle.x &&
               e.x < rectangle.x + rectangle.width &&
               e.y > rectangle.y &&
               e.y < rectangle.y + rectangle.height               
            ) {
               return true;
          }
     });
                                               
     const clickedRectangle = rectangles[ClickedIndex];
     
     rectangle.splice(clickedIndex, 1);
     splitRectangleAt(clickedRectangle, {
          x: e.x - clickedRectangle.x,
          y: e.y - clickedRectangle.y,
     });     
}         

function splitRectangleAt( clickedRectangle, position) {
     if (splitDirectionVert) {          
          rectangles.push({
               x: rectangle.x,
               y: rectangle.y,
               width: position.x,
               height: rectangle.height,
               color: getColor()
          });
          rectangles.push({
               x: rectangle.x + position.x,
               y: rectangle.y,      
               width: rectangle.width -position.x,
               height: rectangle.height,
               color: getColor()
          });
     } else {
          rectangles.push({
               x: rectangle.x,
               y: rectangle.y,
               width: rectangle.width,
               height: position.y,
               color: getColor()
          });
          rectangles.push({
               x: rectangle.x,
               y: rectangle.y,
               width: rectangle.width,
               height: rectangle.height - position.y,
          });
     } 
     splitDirectionVertical = !splitDirectionVertical;
     drawRectangles();        
}

