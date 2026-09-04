// ============ COSTELLAZIONE (background node network, dark zone only) ============
(function () {
  const canvas = document.getElementById('bgFx');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ACCENT = [47, 98, 255]; // --accent
  const MAX_DIST = 140;

  let w = 0, h = 0, dpr = 1;
  let pts = [];
  const mouse = { x: -9999, y: -9999, active: false };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(140, Math.floor((w * h) / 9000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, w, h);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          ctx.strokeStyle = `rgba(${ACCENT.join(',')},${(1 - d / MAX_DIST) * .32})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
      if (mouse.active) {
        const dx = pts[i].x - mouse.x, dy = pts[i].y - mouse.y;
        const d = Math.hypot(dx, dy);
        const reach = MAX_DIST * 1.5;
        if (d < reach) {
          ctx.strokeStyle = `rgba(${ACCENT.join(',')},${(1 - d / reach) * .6})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${ACCENT.join(',')},.8)`;
      ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.7, 0, Math.PI * 2); ctx.fill();
    }
    if (mouse.active) {
      ctx.fillStyle = `rgba(${ACCENT.join(',')},1)`;
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 2.6, 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop() {
    if (!document.body.classList.contains('in-hero')) drawFrame();
    requestAnimationFrame(loop);
  }

  const move = e => {
    if (document.body.classList.contains('in-hero')) return;
    mouse.x = e.touches ? e.touches[0].clientX : e.clientX;
    mouse.y = e.touches ? e.touches[0].clientY : e.clientY;
    mouse.active = true;
  };
  const clear = () => { mouse.active = false; };

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('touchend', clear);
  window.addEventListener('mouseleave', clear);

  resize();
  if (reduced) {
    drawFrame();
  } else {
    requestAnimationFrame(loop);
  }
})();
