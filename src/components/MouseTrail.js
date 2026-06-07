import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999, px: -999, py: -999 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Prevent spawning when mouse enters or jumps
      if (mouse.px === -999) return;

      const dx = mouse.x - mouse.px;
      const dy = mouse.y - mouse.py;
      const speed = Math.sqrt(dx * dx + dy * dy);

      const n = Math.min(Math.floor(speed / 2) + 2, 12);
      for (let i = 0; i < n; i++) {
        particlesRef.current.push({
          x: mouse.x,
          y: mouse.y,
          life: 1,
          maxLife: 0.8 + Math.random() * 0.6,
          decay: 0.012 + Math.random() * 0.01,
          color: `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55},`,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 + 0.5,
          size: 2 + Math.random() * 8
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter active particles
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      particlesRef.current.forEach((p) => {
        const alpha = p.life / p.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * 0.4;
        ctx.fillStyle = p.color + (alpha * 0.5) + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Update positions & velocity damping
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx *= 0.9;
        p.vy *= 0.95;
      });

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99998,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default MouseTrail;
