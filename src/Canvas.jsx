import { useEffect, useRef, useState } from "react";
import canvasimages from "./canvasimages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Canvas = ({ details }) => {
  const [index, setIndex] = useState({ value: details.startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: details.startIndex + details.numImages - 1,
      duration: details.duration,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = canvasimages[index.value];

    image.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      ctx.scale(scale, scale);
      ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);
  return (
    <canvas
      data-scroll
      data-scroll-speed={details.speed}
      ref={canvasRef}
	  className="absolute"
      style={{
        width: `${details.size * 1.4}px`,
        height: `${details.size * 1.4}px`,
        top: `${details.top}%`,
        left: `${details.left}%`,
        zIndex: `${details.zIndex}`,
      }}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
