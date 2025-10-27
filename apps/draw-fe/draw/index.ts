export function initDraw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let clicked = false;
  let startX = 0;
  let startY = 0;

  canvas.addEventListener("mousedown", function (e) {
    clicked = true;
    startX = e.clientX;
    startY = e.clientY;
  });
  canvas.addEventListener("mouseup", function (e) {
    clicked = false;
    console.log(`${e.clientX} ${e.clientY}`);
  });
  canvas.addEventListener("mousemove", function (e) {
    if (clicked) {
      console.log(`${e.clientX} ${e.clientY}`);
      const width = e.clientX - startX;
      const height = e.clientY - startY;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgb(255,255,255)";
      ctx.strokeRect(startX, startY, width, height);
    }
  });
}
