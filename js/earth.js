/* ============================================================
   earth.js — Animated rotating Earth globe in background
   Updated: Orange accent theme
   ============================================================ */

(function() {
  const canvas = document.getElementById('earth-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, cx, cy, t = 0;

  const STARS = [];
  const STAR_COUNT = 120;
  const NODES = [];
  const NODE_COUNT = 18;
  const ARCS = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cx = W / 2;
    cy = H / 2;
    initStars();
  }

  function initStars() {
    STARS.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      STARS.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.0 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.004 + 0.001
      });
    }
  }

  function initNodes(R) {
    NODES.length = 0;
    ARCS.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi   = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      NODES.push({ phi, theta, r: Math.random() * 2 + 1.5 });
    }
    for (let i = 0; i < 20; i++) {
      const a = Math.floor(Math.random() * NODE_COUNT);
      let b = Math.floor(Math.random() * NODE_COUNT);
      if (b === a) b = (b + 1) % NODE_COUNT;
      ARCS.push({ a, b, progress: Math.random(), speed: Math.random() * 0.003 + 0.001 });
    }
  }

  function project(phi, theta, R, rotY) {
    const sinPhi = Math.sin(phi);
    const x3 = sinPhi * Math.cos(theta + rotY);
    const y3 = Math.cos(phi);
    const z3 = sinPhi * Math.sin(theta + rotY);
    return {
      x: cx + x3 * R,
      y: cy - y3 * R,
      z: z3,
      visible: z3 >= -0.15
    };
  }

  let R, rotY = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Stars
    STARS.forEach(s => {
      s.a += s.speed;
      const alpha = 0.2 + 0.2 * Math.sin(s.a);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,180,160,${alpha})`;
      ctx.fill();
    });

    R = Math.min(W, H) * 0.42;
    const gx = W * 0.72;
    const gy = H * 0.5;

    ctx.save();
    ctx.translate(gx - cx, gy - cy);

    rotY = t * 0.00025;

    // Globe glow
    const grad = ctx.createRadialGradient(0, 0, R * 0.3, 0, 0, R * 1.3);
    grad.addColorStop(0, 'rgba(255,74,28,0.05)');
    grad.addColorStop(0.5, 'rgba(180,40,10,0.02)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(-R*2, -R*2, R*4, R*4);

    // Clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R, 0, Math.PI * 2);
    ctx.clip();

    // Base sphere
    const sphereGrad = ctx.createRadialGradient(-R * 0.3, -R * 0.3, R * 0.1, 0, 0, R);
    sphereGrad.addColorStop(0,   'rgba(60,20,10,0.25)');
    sphereGrad.addColorStop(0.6, 'rgba(20,8,4,0.15)');
    sphereGrad.addColorStop(1,   'rgba(10,10,10,0.08)');
    ctx.fillStyle = sphereGrad;
    ctx.fillRect(-R, -R, R*2, R*2);

    // Grid lines
    const LINES = 12;
    for (let i = 0; i < LINES; i++) {
      const phi = (i / LINES) * Math.PI;
      ctx.beginPath();
      for (let j = 0; j <= 60; j++) {
        const theta = (j / 60) * Math.PI * 2;
        const p = project(phi, theta, R, rotY);
        if (j === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = `rgba(255,74,28,${0.05 + 0.02 * Math.sin(phi)})`;
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }
    for (let i = 0; i < LINES * 2; i++) {
      const theta = (i / (LINES * 2)) * Math.PI * 2;
      ctx.beginPath();
      for (let j = 0; j <= 40; j++) {
        const phi = (j / 40) * Math.PI;
        const p = project(phi, theta, R, rotY);
        if (j === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = 'rgba(255,74,28,0.04)';
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    ctx.restore();

    // Nodes
    NODES.forEach(n => {
      const p = project(n.phi, n.theta + rotY, R, 0);
      if (!p.visible) return;
      const alpha = 0.3 + 0.7 * Math.max(0, p.z);
      const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, n.r * 4);
      haloGrad.addColorStop(0, `rgba(255,74,28,${alpha * 0.5})`);
      haloGrad.addColorStop(1, 'rgba(255,74,28,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, n.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,120,60,${alpha})`;
      ctx.fill();
    });

    // Arcs
    ARCS.forEach(arc => {
      arc.progress += arc.speed;
      if (arc.progress > 1.5) arc.progress = 0;
      const n1 = NODES[arc.a];
      const n2 = NODES[arc.b];
      const p1 = project(n1.phi, n1.theta + rotY, R, 0);
      const p2 = project(n2.phi, n2.theta + rotY, R, 0);
      if (!p1.visible || !p2.visible) return;

      const visible = Math.min(arc.progress, 1);
      const steps = 32;
      ctx.beginPath();
      for (let s = 0; s <= Math.floor(steps * visible); s++) {
        const frac = s / steps;
        const phi   = n1.phi   + (n2.phi   - n1.phi)   * frac;
        const theta = (n1.theta + rotY) + ((n2.theta + rotY) - (n1.theta + rotY)) * frac;
        const lift = R + 4 + 8 * Math.sin(frac * Math.PI);
        const sinP = Math.sin(phi);
        const px = cx + (sinP * Math.cos(theta)) * lift;
        const py = cy - (Math.cos(phi)) * lift;
        if (s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      const alpha = 0.35 * Math.sin(arc.progress * Math.PI / 1.5);
      ctx.strokeStyle = `rgba(255,74,28,${Math.max(0, alpha)})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    });

    // Border ring
    ctx.beginPath();
    ctx.arc(0, 0, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,74,28,0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Atmosphere glow
    ctx.beginPath();
    ctx.arc(0, 0, R + 6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,74,28,0.05)';
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.restore();

    // Orbit rings
    drawOrbitRing(gx, gy, R + 30,  t * 0.00018,  'rgba(255,74,28,0.10)', 1,   [8,6]);
    drawOrbitRing(gx, gy, R + 55, -t * 0.00011,  'rgba(255,74,28,0.06)', 0.7, [4,8]);
    drawOrbitRing(gx, gy, R + 85,  t * 0.00007,  'rgba(255,74,28,0.03)', 0.5, [3,12]);

    // Orbital dot
    const dotAngle = t * 0.0003;
    const dotX = gx + Math.cos(dotAngle) * (R + 30);
    const dotY = gy + Math.sin(dotAngle) * (R + 30) * 0.28;
    ctx.beginPath();
    ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,120,60,0.9)';
    ctx.fill();
    for (let i = 1; i <= 8; i++) {
      const ta = dotAngle - i * 0.04;
      const tx = gx + Math.cos(ta) * (R + 30);
      const ty = gy + Math.sin(ta) * (R + 30) * 0.28;
      ctx.beginPath();
      ctx.arc(tx, ty, 2 * (1 - i/9), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,120,60,${0.5 * (1 - i/9)})`;
      ctx.fill();
    }

    t++;
    requestAnimationFrame(draw);
  }

  function drawOrbitRing(x, y, r, rotation, color, lw, dash) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.scale(1, 0.28);
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.setLineDash(dash);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  window.addEventListener('resize', resize);
  resize();
  initNodes(Math.min(W, H) * 0.42);
  draw();
})();