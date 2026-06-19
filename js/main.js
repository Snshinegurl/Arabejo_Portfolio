/* ============================================================
   PORTFOLIO — main.js  (Bold Editorial Redesign)
   ============================================================ */
"use strict";

/* ── PROJECT DATA ── */
const PROJECTS = [
        { 
            id: 1, 
            title: "Banking System", 
            description: "Banks all over the world are facing a common problem with how to manage the customers' needs, especially with the convenience of the customers. The manual way of depositing and withdrawing money, checking and managing a person's bank account is inefficient, not just takes an intensive time but also has the chance of human error. Finding a new way of managing a bank is more crucial than ever.", 
            images: ["img/project/banking/bs.png", "img/project/banking/bs2.png", "img/project/banking/bs3.png", "img/project/banking/bs4.png", "img/project/banking/bs5.png", "img/project/banking/bs6.png"], 
            downloadLink: "https://drive.google.com/file/d/1eUyo_EvlbNX8AaGStpk5JKFVqs8DQKOK/view?usp=sharing" 
        },
        { 
            id: 2, 
            title: "Capsphere", 
            description: "Capsphere is a dedicated platform designed to bridge this gap, offering a seamless, user-friendly solution for artists to display their work and for clients to discover and hire creative professionals.", 
            images: ["img/project/capsphere/cp.png", "img/project/capsphere/cp2.png", "img/project/capsphere/cp3.png", "img/project/capsphere/cp4.png", "img/project/capsphere/cp5.png", "img/project/capsphere/cp6.png"], 
            downloadLink: "https://drive.google.com/drive/folders/1NE4KMzLYOj_3jpp7xVKzzcHYtqcS4nUh?usp=drive_link" 
        },
        { 
            id: 3, 
            title: "Bol.Anon Hub", 
            description: "Welcome to Bol.Anon HUB, your dedicated resource for the Bol.anon Bisaya language from Bohol. Explore a comprehensive dictionary and translation platform that showcases the unique words and phrases of Bol.anon Bisaya. Whether you're a native speaker, learner, or simply curious, Bol.Anon HUB connects you to the rich linguistic heritage of Bohol, offering accurate translations and insights into this beautiful dialect.", 
            images: ["img/project/bis/bh.png", "img/project/bis/bh1.png", "img/project/bis/bh6.png",  "img/project/bis/bh3.png", "img/project/bis/bh4.png", "img/project/bis/bh5.png"], 
            downloadLink: "files/project3.zip" 
        },
        { 
            id: 4, 
            title: "NUMERICAL METHOD CALCULATOR - PYTHON", 
         description: `The Numerical Method Root Finder Calculator is a Python-based application developed to solve nonlinear equations through classical numerical techniques. It offers a suite of methods including the Bisection Method, Newton-Raphson Method, Regula Falsi, Secant Method, Incremental Search, and the Graphical Method. Users can input mathematical functions as string expressions, which are then processed and evaluated using secure and efficient libraries. The system is designed to handle a wide variety of mathematical expressions, including polynomial and transcendental equations, while supporting features like root refinement, multiple root detection, and error handling. <a href="https://drive.google.com/file/d/1WrhhBSUUrxC8hAnvfND6L08UNA6rpXjh/view?usp=sharing" target="_blank">View Documentation</a>
        <br><iframe width="760" height="380" src="https://www.youtube.com/embed/_Aq6p4mBxbY?si=GGeEo0MYSK1MBFO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`, 
            images: ["img/py/1.png", "img/py/2.png", "img/py/3.png", "img/py/4.png", "img/py/5.png", "img/py/6.png", "img/py/7.png", "img/py/8.png"], 
            downloadLink: "https://github.com/Snshinegurl/NumericalMethod_RootFinder.git" 
        },
        { 
            id: 5, 
            title: "NUMERICAL METHOD CALCULATOR - MATLAB", 
         description: `The MATLAB Root Finder Tool is an educational numerical analysis application that implements six classical root-finding methods (Graphical, Incremental Search, Bisection, Newton-Raphson, Regula Falsi, and Secant) to solve nonlinear equations. Designed for students and engineers, it provides an interactive console interface for inputting functions (including trigonometric, exponential, and polynomial expressions) and outputs detailed results with step-by-step iteration tables, error analysis, and visual plots of the function with identified roots. The tool emphasizes both computational accuracy and pedagogical clarity, enabling users to compare method performance and understand convergence behaviors. With its modular class structure and support for symbolic differentiation, it serves as a practical platform for learning numerical methods while offering potential for future expansion through additional algorithms and GUI enhancements. <a href="https://drive.google.com/file/d/1FYXZwoV3cnXhgzO3_LOyUG7mBb8yLv5C/view?usp=sharing" target="_blank">View Documentation</a> .
        <br><iframe width="760" height="380" src="https://www.youtube.com/embed/-fRvGHAxTdQ?si=ibjii_k4_iszQHhJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> `, 
            images: ["img/MAT/1.png", "img/MAT/2.png", "img/MAT/3.png", "img/MAT/4.png", "img/MAT/5.png", "img/MAT/6.png"], 
            downloadLink: "files/project4.zip" 
        },
        { 
            id: 6, 
            title: "SUMUBOT", 
         description: `A Sumobot is a machine that pushes the opponent or another bot, out of a circular ring. It is equipped with components such as, Ultrasonic Sensor for detecting other bots, IR sensor for Identifying the surface color in order for the bot to stay in the ring, Motors attached to the wheel for the bot to move, Motor Driver to control the direction of the bot, battery for power and Microcontroller acting as the brain of the bot.<a href="https://drive.google.com/file/d/15BjLp-cxKn1R2CR79aoBtncsf2EkbyhH/view?usp=sharing" target="_blank">View Documentation</a>
        <br><iframe width="760" height="380" src="https://www.youtube.com/embed/I_05BunfV-c?si=8WJV3aIvjpXXVYBI&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <br>`, 
            images: ["img/Sumo/1.png", "img/Sumo/2.png", "img/Sumo/3.png", "img/Sumo/4.png"], 
            downloadLink: "files/project4.zip" 
        },
  { id: 7, title: "Ball Balancing", description: "Development of a high-precision Ball Balancer utilizing a manual PID control scheme.", images: ["img/project/BallBalance/bbalance.png"], downloadLink: "https://docs.google.com/document/d/186FW7pZF0XCeJ49c8CakDykrP2cqc_eB/edit?usp=sharing" },
  { id: 8, title: "Smart Greenhouse Automation", description: "Environmental greenhouse monitoring with flexible automated and manual control.", images: ["img/project/GreenHouse/2.png","img/project/GreenHouse/1.png","img/project/GreenHouse/3.png"], downloadLink: "https://drive.google.com/file/d/1R-9wJStSMps9qDWJl_t-FS63X8jAqeBq/view?usp=sharing" },
  { id: 9, title: "3-bit to 16-Segment Decoder", description: "Engineered discrete logic to display each unique character of my name on 16-segment LEDs.", images: ["img/project/3bit/1.png","img/project/3bit/2.png","img/project/3bit/3.png"], downloadLink: "https://drive.google.com/file/d/1hVsupnFGpS4O5fJPeVZy8QyiheNHzsH4/view?usp=sharing" }
];

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let fx = 0, fy = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .project-card, .cert-card, .graphic-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
  });
}

/* ── INTRO ── */
function initIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  // Animate percentage counter
  const pct = document.getElementById('introBarPct');
  let count = 0;
  const counter = setInterval(() => {
    count = Math.min(count + Math.floor(Math.random() * 12 + 4), 100);
    if (pct) pct.textContent = count + '%';
    if (count >= 100) clearInterval(counter);
  }, 60);

  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 3600);
}

/* ── NAV SCROLL ── */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── HAMBURGER ── */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

/* ── SCROLL REVEAL with text letter-split ── */
function splitAndReveal(el) {
  if (el.dataset.split) return;
  el.dataset.split = 'true';
  const text = el.textContent;
  el.innerHTML = '';
  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch === ' ' ? '\u00a0' : ch;
    span.style.cssText = `
      display:inline-block;
      opacity:0;
      transform:translateY(40px) rotate(${(Math.random()-0.5)*10}deg);
      transition: opacity 0.5s ease ${i*0.03}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i*0.03}s;
    `;
    el.appendChild(span);
  });
}

function activateSplit(el) {
  el.querySelectorAll('span').forEach(s => {
    s.style.opacity = '1';
    s.style.transform = 'translateY(0) rotate(0)';
  });
}

function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');

        // Animate section title letters
        const title = e.target.querySelector('.section-title');
        if (title && !title.dataset.animated) {
          title.dataset.animated = 'true';
          splitAndReveal(title);
          requestAnimationFrame(() => activateSplit(title));
        }

        // Stagger cards
        e.target.querySelectorAll('.project-card, .service-card, .cert-card, .graphic-card, .detail-card').forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s`;
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('section').forEach(s => io.observe(s));
}

/* ── ACTIVE NAV ── */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.45 });
  document.querySelectorAll('section[id]').forEach(s => io.observe(s));

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── PROJECT MODAL ── */
let slideInterval = null, currentImages = [], currentIndex = 0;

function openProjectModal(project) {
  const overlay  = document.getElementById('projectModal');
  const imgEl    = document.getElementById('modalImg');
  const titleEl  = document.getElementById('modalTitle');
  const descEl   = document.getElementById('modalDesc');
  const dlEl     = document.getElementById('modalDownload');
  const dotsWrap = document.getElementById('modalDots');

  titleEl.textContent = project.title;
  descEl.innerHTML    = project.description;
  dlEl.href           = project.downloadLink;
  currentImages = project.images;
  currentIndex  = 0;
  dotsWrap.innerHTML = '';

  currentImages.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'modal-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(d);
  });

  updateModalSlide(imgEl, dotsWrap);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModalSlide(imgEl, dotsWrap);
  }, 4500);
}

function goToSlide(index) {
  currentIndex = index;
  updateModalSlide(document.getElementById('modalImg'), document.getElementById('modalDots'));
}

function updateModalSlide(imgEl, dotsWrap) {
  imgEl.style.opacity = '0';
  setTimeout(() => { imgEl.src = currentImages[currentIndex]; imgEl.style.opacity = '1'; }, 200);
  dotsWrap.querySelectorAll('.modal-dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(slideInterval);
}

function initProjectModal() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const id = parseInt(card.dataset.project, 10);
    const project = PROJECTS.find(p => p.id === id);
    if (project) openProjectModal(project);
  });
  document.getElementById('modalClose')?.addEventListener('click', closeProjectModal);
  document.getElementById('projectModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeProjectModal(); });
}

/* ── CERT MODAL ── */
function openCertModal(imgSrc) {
  const overlay = document.getElementById('certModal');
  document.getElementById('certModalImg').src = imgSrc;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCertModal() {
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}
function initCertModal() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.cert-card, .graphic-card');
    if (!card) return;
    const imgSrc = card.dataset.img;
    if (imgSrc) openCertModal(imgSrc);
  });
  document.getElementById('certClose')?.addEventListener('click', closeCertModal);
  document.getElementById('certModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeCertModal(); });
}

/* ── ESC KEY ── */
function initEscKey() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeProjectModal(); closeCertModal(); }
  });
}

/* ── ABOUT GLOW ── */
function initAboutGlow() {
  const aboutSection = document.querySelector('#about');
  const glow = document.querySelector('#aboutGlow');
  if (!aboutSection || !glow) return;
  aboutSection.addEventListener('mousemove', e => {
    const rect = aboutSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,74,28,0.07) 0%, transparent 70%)`;
  });
  aboutSection.addEventListener('mouseleave', () => { glow.style.background = ''; });
}

/* ── CONTACT FORM ── */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  btn.textContent = 'SENT ✓';
  btn.style.background = '#4ade80';
  btn.style.color = '#0a0a0a';
  btn.style.borderColor = '#4ade80';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'SEND MESSAGE';
    btn.style.background = '';
    btn.style.color = '';
    btn.style.borderColor = '';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
};

/* ── MARQUEE TICKER on hero (optional decorative element) ── */
function initTicker() {
  const ticker = document.getElementById('hereTicker');
  if (!ticker) return;
  let pos = 0;
  setInterval(() => {
    pos -= 0.5;
    if (pos < -50) pos = 0;
    ticker.style.transform = `translateX(${pos}%)`;
  }, 16);
}

/* ── ADD DATA-NUM attrs to project cards ── */
function initProjectNums() {
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.setAttribute('data-num', String(i + 1).padStart(2, '0'));
  });
}



/* ── INIT ALL ── */
function initAll() {
  initCursor();
  initIntro();
  initNavScroll();
  initHamburger();
  initScrollReveal();
  initActiveNav();
  initProjectModal();
  initCertModal();
  initEscKey();
  initAboutGlow();
  initTicker();
  initProjectNums();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('section[data-section-index]')) initAll();
    else document.addEventListener('sectionsLoaded', initAll);
  });
} else {
  if (document.querySelector('section[data-section-index]')) initAll();
  else document.addEventListener('sectionsLoaded', initAll);
}