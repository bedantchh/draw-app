"use client";

import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      let clicked = false;
      let startX = 0;
      let startY = 0;

      canvas.addEventListener("mousedown", function (e) {
        clicked = true;
        startX= e.clientX 
        startY = e.clientY
      });
      canvas.addEventListener("mouseup", function (e) {
        clicked = false;
        console.log(`${e.clientX} ${e.clientY}`);
      });
      canvas.addEventListener("mousemove", function (e) {
        if (clicked) {
          console.log(`${e.clientX} ${e.clientY}`);
          const width = e.clientX - startX ;
          const height =  e.clientY - startY ;

          ctx.clearRect(0,0,canvas.width,canvas.height)
          ctx.strokeRect(startX,startY,width,height)
        }
      });
    }
  }, [canvasRef]);
  return (
    <div className="bg-white">
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
}
