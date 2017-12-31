canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

times = 2;
arr = makePoints(times);


function draw(){
  background('white');
  makeCircle();
  makeConection(arr, times);
}

function background(color = "gray"){
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fill();
}

function makeCircle(){
  tau = Math.PI*2;
  points = tau/200;
  r = 200;
  for(a = 0; a < tau; a+= points){
    x = r * Math.sin(a) + 250;
    y = r * Math.cos(a) + 250;

    ctx.beginPath();
    ctx.arc(x,y,1,0,2*Math.PI);
    ctx.stroke();
  }
}

function makePoints(times){
  arr = [];
  tau = Math.PI*2;
  points = tau/200;
  r = 200;
  for(a = 0; a < tau*times; a+= points){
    x = r * Math.sin(a) + 250;
    y = r * Math.cos(a) + 250;
    arr.push({"x": x, "y": y});
  }
  return arr;
}

function makeConection(arr, times){
  for(i =0; i <= arr.length/2; i++){
    ctx.beginPath();
  ctx.moveTo(arr[i].x,arr[i].y);
  ctx.lineTo(arr[i*times].x,arr[i*times].y);
  ctx.lineWidth = 0.5;
  ctx.stroke();
  }
}
draw();