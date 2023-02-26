let canvasContext;

function InitCanvasContext() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  let width = canvas.width;
  let height = canvas.height;
  let buffer;

  context.font = "12px monospace";
  context.fillStyle = "white";
  context.textAlign = "left";

  document.body.appendChild(canvas);

  function clear() {
    context.clearRect(0, 0, width, height);
  }

  function setBuffer(newBuffer) {
    buffer = newBuffer;
  }

  function draw() {
    clear();
    context.fillText(buffer, 20, 50);
  }

  return {
    canvas,
    context,
    setBuffer,
    draw,
  };
}

window.onload = () => {
  canvasContext = InitCanvasContext();
  canvasContext.setBuffer(helloMessage());
  canvasContext.draw();
};

function draw() {
  canvasContext.draw();
}

function helloMessage() {
  return `
  /*==============================================*/
  // . . H E L L O . T H E R E . . . . . . . . . .//
  /*==============================================*/
  
  //    It is a nice day today and I'm just     
  //    testing how this works.
  //    
  //    I think it could be quite nice to see.
  // 
  //    - m a d 
  //
  
  `;
}
