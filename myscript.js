let canvasContext;

function InitCanvasContext() {
  const CHARACTER_FONT_SIZE = 19;
  const CHARACTER_HEIGHT_PIXELS = 17;
  const CHARACTER_WIDTH_PIXELS = 12;
  const CANVAS_WIDTH = 480;
  const CANVAS_HEIGHT = 360;
  const CANVAS_HORIZONTAL_OFFSET = 0;
  const CANVAS_VERTICAL_OFFSET = 0;

  let canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  let context = canvas.getContext("2d");
  let width = canvas.width;
  let height = canvas.height;
  let buffer;
  context.imageSmoothingEnabled = false;
  context.font = `${CHARACTER_FONT_SIZE}px monospace`;
  context.textAlign = "left";

  document.body.appendChild(canvas);

  function clear() {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
  }

  function setBuffer(newBuffer) {
    buffer = newBuffer;
  }

  function draw() {
    let tempBuffer = `
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
X                                      X
X THIS IS A TEST                       X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X
X                                      X                                                    X
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
`
      .split("\n")
      .slice(1);
    let maxWidth = tempBuffer.reduce((acc, val) => {
      return val.length > acc ? val.length : acc;
    }, 0);

    clear();
    context.fillStyle = "white";
    context.textBaseline = "top";
    for (let x = 0; x < maxWidth; x++) {
      for (let y = 0; y < tempBuffer.length; y++) {
        context.fillText(
          tempBuffer[y].charAt(x),
          CANVAS_HORIZONTAL_OFFSET + x * CHARACTER_WIDTH_PIXELS,
          CANVAS_VERTICAL_OFFSET + y * CHARACTER_HEIGHT_PIXELS,
          CHARACTER_WIDTH_PIXELS
        );
      }
    }
    //context.fillText(buffer, 20, 50);
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
