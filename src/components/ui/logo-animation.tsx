import { useEffect, useRef } from "react";

export const LogoAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let animationId: number;
    let time = 0;

    const drawBlob = (
      x: number,
      y: number,
      radius: number,
      color: string | CanvasGradient,
      offset: number
    ) => {
      ctx.beginPath();
      const points = 8;
      
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave = Math.sin(time * 0.5 + offset + i) * 8;
        const r = radius + wave;
        const px = x + Math.cos(angle) * r;
        const py = y + Math.sin(angle) * r;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      time += 0.02;
      
      // Black circle (top left)
      drawBlob(
        width * 0.3,
        height * 0.35,
        40,
        "hsl(0, 0%, 7%)",
        0
      );
      
      // Red/orange teardrop (top right)
      const gradient1 = ctx.createRadialGradient(
        width * 0.7,
        height * 0.3,
        0,
        width * 0.7,
        height * 0.3,
        60
      );
      gradient1.addColorStop(0, "hsl(8, 77%, 58%)");
      gradient1.addColorStop(1, "hsl(8, 77%, 48%)");
      drawBlob(
        width * 0.7,
        height * 0.3,
        50,
        gradient1,
        Math.PI * 0.66
      );
      
      // Green-blue wave (bottom)
      const gradient2 = ctx.createLinearGradient(
        width * 0.2,
        height * 0.65,
        width * 0.8,
        height * 0.65
      );
      gradient2.addColorStop(0, "hsl(156, 73%, 52%)");
      gradient2.addColorStop(0.5, "hsl(180, 73%, 52%)");
      gradient2.addColorStop(1, "hsl(210, 73%, 55%)");
      
      ctx.beginPath();
      for (let i = 0; i <= 50; i++) {
        const x = (i / 50) * width;
        const wave1 = Math.sin((i / 10) + time) * 15;
        const wave2 = Math.sin((i / 8) + time * 1.5) * 10;
        const y = height * 0.65 + wave1 + wave2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      // Complete the shape
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = gradient2;
      ctx.fill();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-10"
      style={{ pointerEvents: "none" }}
    />
  );
};
