import './styles.css';

var context = document.querySelector('canvas').getContext('2d');

var index = 10;
var width = context.canvas.width;
var height = context.canvas.height;

for (var i = 0; i < index; i = i + 1) {
  var x = (i * width) / (index - 1);
  var y = (i * height) / (index - 1);
  drawLine(0, y, x, height);
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
