'use client';

import { useState, useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; z: number }[] = [];
    const numStars = 500;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'hsl(240 10% 3.9%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 1;

        if (star.z <= 0) {
          star.z = canvas.width;
        }

        const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
        const r = (canvas.width / star.z);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${r})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    setup();
    animate();

    const handleResize = () => {
      setup();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Starfield;
