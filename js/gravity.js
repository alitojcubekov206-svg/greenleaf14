// gravity.js — Anti-Gravity effect using Matter.js
// Elements fall, rotate, collide, and can be dragged with mouse

let gravityActive = false;
let engine, runner, render, mouseConstraint;
let physicsElements = [];
let originalStyles = new Map();

const MATTER_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';

/* ── Load Matter.js ── */
function loadMatter() {
  return new Promise((resolve, reject) => {
    if (window.Matter) { resolve(); return; }
    const s = document.createElement('script');
    s.src = MATTER_CDN;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/* ── Activate ── */
async function activateGravity() {
  if (gravityActive) { deactivateGravity(); return; }

  try {
    await loadMatter();
  } catch (e) {
    showNotif('Не удалось загрузить физический движок', 'error');
    return;
  }

  gravityActive = true;
  const btn = document.getElementById('ag-btn');
  if (btn) { btn.classList.add('active'); btn.innerHTML = '💥 Вернуть всё'; }
  showNotif('🌌 Anti-Gravity активирован! Перемещайте объекты мышью', 'info', 3000);

  const { Engine, Runner, Render, Bodies, Body, World, Mouse, MouseConstraint, Events } = Matter;

  // Create engine
  engine = Engine.create({ gravity: { y: 1.2 } });
  runner = Runner.create();

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'gravity-canvas';
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:8999;pointer-events:all;';
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  render = Render.create({
    canvas,
    engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: 'transparent',
    }
  });

  // Floor and walls
  const w = window.innerWidth, h = window.innerHeight;
  const floor = Bodies.rectangle(w / 2, h + 25, w * 2, 50, { isStatic: true, render: { fillStyle: 'transparent' } });
  const wallL = Bodies.rectangle(-25, h / 2, 50, h * 2, { isStatic: true, render: { fillStyle: 'transparent' } });
  const wallR = Bodies.rectangle(w + 25, h / 2, 50, h * 2, { isStatic: true, render: { fillStyle: 'transparent' } });
  World.add(engine.world, [floor, wallL, wallR]);

  // Collect elements
  const selectors = [
    '.product-card', '.navbar', '.hero h1', '.hero p', '.hero-badge',
    '.hero-actions .btn', '.adv-card', '.section-title', '.section-label',
    '.ig-inner', '.hero-stat', '.hero-float', '.chip', '.search-bar-wrap'
  ];

  physicsElements = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (el.closest('#gravity-canvas') || el.id === 'ag-btn' || el.closest('.notif-container')) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 10 || rect.height < 10) return;

      const cx = rect.left + rect.width / 2 + window.scrollX;
      const cy = rect.top + rect.height / 2 + window.scrollY;

      const body = Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          restitution: 0.4,
          friction: 0.1,
          frictionAir: 0.01,
          render: { fillStyle: 'rgba(0,0,0,0)' },
          label: 'element'
        }
      );

      // Random initial impulse
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 3 - 2
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);

      World.add(engine.world, body);

      // Freeze original position
      const computedStyle = window.getComputedStyle(el);
      originalStyles.set(el, {
        position: el.style.position,
        left: el.style.left,
        top: el.style.top,
        transform: el.style.transform,
        zIndex: el.style.zIndex,
        width: el.style.width,
        margin: el.style.margin,
      });

      el.style.position = 'fixed';
      el.style.left = rect.left + 'px';
      el.style.top = rect.top + 'px';
      el.style.width = rect.width + 'px';
      el.style.margin = '0';
      el.style.zIndex = '8998';
      el.style.transition = 'none';
      el.style.transformOrigin = 'center center';

      physicsElements.push({ el, body, w: rect.width, h: rect.height });
    });
  });

  // Mouse constraint for dragging
  const mouse = Mouse.create(canvas);
  mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: { stiffness: 0.2, render: { visible: false } }
  });
  World.add(engine.world, mouseConstraint);
  render.mouse = mouse;

  // Click to impulse
  canvas.addEventListener('mousedown', onCanvasClick);

  // Animation loop
  Runner.run(runner, engine);
  Render.run(render);

  function syncElements() {
    if (!gravityActive) return;
    physicsElements.forEach(({ el, body }) => {
      const pos = body.position;
      const angle = body.angle;
      el.style.left = (pos.x - body.bounds.max.x / 2 + (body.bounds.max.x - body.bounds.min.x) / 2 +
        body.bounds.min.x - pos.x + pos.x - (body.bounds.max.x - body.bounds.min.x) / 2) + 'px';
      // Simpler:
      el.style.transform = `translate(${pos.x - parseFloat(el.style.left) - parseFloat(el.style.width) / 2}px, 
        ${pos.y - parseFloat(el.style.top) - el.offsetHeight / 2}px) rotate(${angle}rad)`;
    });
    requestAnimationFrame(syncElements);
  }

  // Better sync
  function syncLoop() {
    if (!gravityActive) return;
    physicsElements.forEach(({ el, body, w, h }) => {
      const pos = body.position;
      const angle = body.angle;
      const origLeft = parseFloat(el.dataset.origLeft || el.style.left);
      const origTop = parseFloat(el.dataset.origTop || el.style.top);
      el.style.transform = `translate(${pos.x - origLeft - w / 2}px, ${pos.y - origTop - h / 2}px) rotate(${angle}rad)`;
    });
    requestAnimationFrame(syncLoop);
  }

  // Store initial positions for transform calc
  physicsElements.forEach(({ el }) => {
    el.dataset.origLeft = parseFloat(el.style.left);
    el.dataset.origTop = parseFloat(el.style.top);
  });

  syncLoop();

  // Resize handler
  window.addEventListener('resize', handleResize);
}

function onCanvasClick(e) {
  if (!gravityActive || !window.Matter) return;
  const { Bodies, Body, World, Vector } = Matter;
  const mx = e.clientX, my = e.clientY;
  // Add small explosion bodies
  for (let i = 0; i < 4; i++) {
    const b = Matter.Bodies.circle(mx, my, 5, { render: { fillStyle: 'rgba(34,197,94,.6)' }, restitution: 0.8 });
    Matter.Body.setVelocity(b, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 - 5 });
    Matter.World.add(engine.world, b);
    setTimeout(() => Matter.World.remove(engine.world, b), 2000);
  }
  // Apply force to nearby elements
  physicsElements.forEach(({ body }) => {
    const dx = body.position.x - mx;
    const dy = body.position.y - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      const force = 0.06 * (200 - dist) / 200;
      Matter.Body.applyForce(body, body.position, {
        x: (dx / dist) * force,
        y: (dy / dist) * force - 0.02
      });
    }
  });
}

function handleResize() {
  if (!gravityActive || !render) return;
  const w = window.innerWidth, h = window.innerHeight;
  render.canvas.width = w;
  render.canvas.height = h;
  Matter.Render.setPixelRatio(render, window.devicePixelRatio);
}

/* ── Deactivate ── */
function deactivateGravity() {
  if (!gravityActive) return;
  gravityActive = false;

  const btn = document.getElementById('ag-btn');
  if (btn) { btn.classList.remove('active'); btn.innerHTML = '🌌 Anti-Gravity'; }

  // Restore elements
  physicsElements.forEach(({ el }) => {
    const orig = originalStyles.get(el);
    if (orig) {
      el.style.position = orig.position;
      el.style.left = orig.left;
      el.style.top = orig.top;
      el.style.transform = orig.transform;
      el.style.zIndex = orig.zIndex;
      el.style.width = orig.width;
      el.style.margin = orig.margin;
      el.style.transition = '';
    }
    delete el.dataset.origLeft;
    delete el.dataset.origTop;
  });

  // Remove canvas
  const canvas = document.getElementById('gravity-canvas');
  if (canvas) canvas.remove();

  // Clean Matter.js
  if (render) { Matter.Render.stop(render); }
  if (runner) { Matter.Runner.stop(runner); }
  if (engine) { Matter.Engine.clear(engine); }

  physicsElements = [];
  originalStyles.clear();

  document.removeEventListener('mousedown', onCanvasClick);
  window.removeEventListener('resize', handleResize);

  showNotif('Гравитация восстановлена 🌿', 'success');
}

/* ── Init button ── */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('ag-btn');
  if (btn) {
    btn.addEventListener('click', activateGravity);
  }
});
