const planets = [
  { id: "about", name: "About", color: "#6b8cae", size: 82, speed: 25, x: 50, y: 55 },
  { id: "education", name: "Education", color: "#a9823b", size: 75, speed: 35, x: 61, y: 20 },
  { id: "projects", name: "Projects", color: "#357f76", size: 70, speed: 45, x: 84, y: 47 },
  { id: "community", name: "Community", color: "#496f49", size: 60, speed: 30, x: 34, y: 73 },
  { id: "beyond", name: "Beyond", color: "#8b6fb5", size: 65, speed: 55, x: 75, y: 78 },
  { id: "contact", name: "Contact", color: "#b9b9b5", size: 50, speed: 15, x: 54, y: 88 }
];

const orbitDefinitions = {
  about: { radius: "28vw", tilt: 20, start: 45, duration: 50 },
  education: { radius: "38vw", tilt: -30, start: 120, duration: 65 },
  projects: { radius: "32vw", tilt: 15, start: 200, duration: 80 },
  community: { radius: "22vw", tilt: -20, start: 280, duration: 55 },
  beyond: { radius: "45vw", tilt: 35, start: 320, duration: 90 },
  contact: { radius: "20vw", tilt: -15, start: 80, duration: 60 }
};

const panelTargets = {
  void: { id: "void", color: "#111111" },
  invaders: { id: "invaders", color: "#C4522A" },
  pong: { id: "pong", color: "#7ab8d4" }
};

const aboutText = "I'm Eduardo, a student at ITAM pursuing two degrees simultaneously — Actuarial Science and Data Science. I'm drawn to problems that sit at the intersection of math, data, and the real world. I find patterns everywhere — in data, in music, in the way people learn. Outside academia I teach, play music, and try to stay curious.";

const contentRenderers = {
  about: () => `
    <section class="panel-section about-layout">
      <div class="about-copy">
        <p class="eyebrow">About</p>
        <h2 class="panel-title">Eduardo Ángel Martínez Garduño</h2>
        <p class="mono-line">22 years old · Born in Mexico City</p>
        <p class="subtitle">Actuary · Data Scientist · Musician</p>
        <p class="lead">${aboutText}</p>
        <div class="stats-grid">
          ${stat("02", "degrees in progress")}
          ${stat("3+", "years tutoring math & economics")}
          ${stat("3", "instruments: violin · guitar · bass")}
          ${stat("2×", "top GPA recognition (Spring & Fall 2025)")}
        </div>
      </div>
      ${panelPhoto("images/about-photo.jpg", "Eduardo Ángel Martínez", "vertical-photo")}
    </section>
  `,
  education: () => `
    <section class="panel-section">
      <p class="eyebrow">Education</p>
      <h2 class="section-title">Two degrees, one orbit</h2>
      <div class="timeline">
        ${timelineItem("Bachelor's in Actuarial Science", "ITAM · Aug 2022–present", ["Financial Mathematics", "Statistics", "Actuarial Calculus", "Probability", "Linear Programming", "Macroeconomics", "Microeconomics"])}
        ${timelineItem("Bachelor's in Data Science", "ITAM · Aug 2024–present", ["Data Structures", "Databases", "Statistics", "Probability", "Linear Programming", "Causal Inference"])}
      </div>
      <span class="badge">🏆 Top GPA recognition — Spring & Fall 2025</span>
    </section>
  `,
  projects: () => `
    <section class="panel-section">
      <p class="eyebrow">Projects</p>
      <h2 class="section-title">Applied math in motion</h2>
      <div class="project-grid">
        ${projectCard("Actuarial Python Library", "Python library implementing core actuarial calculations: interest theory, life tables, annuity valuations.", ["Python", "Actuarial Science", "Open Source"], "https://github.com/Eduardo-Angel-Martinez/Libreria-Calculo-Actuarial-1")}
        ${projectCard("World Cup 2026 & Subjective Wellbeing", "Causal inference study on how Mexico's World Cup results affect emotional wellbeing and economic confidence in CDMX. Difference-in-differences design.", ["Causal Inference", "R", "DiD", "Public Policy"], "#")}
        ${projectCard("Food Labeling Policy NOM-051", "Effect of Mexico's octagon warning labels on ultra-processed food consumption using ENIGH 2018 vs 2022. Heterogeneous effects by urban/rural, income, and education level.", ["DiD", "R", "Public Policy", "ENIGH"], "#")}
      </div>
    </section>
  `,
  community: () => `
    <section class="panel-section">
      <p class="eyebrow">Community</p>
      <h2 class="section-title">Teaching as gravity</h2>
      <p class="lead">I believe that real change starts with people, not just numbers. Enlace Rural taught me things no equation could — patience, empathy, and the quiet power of showing up consistently for someone who needs it. Working with students in underserved communities reminded me why I study what I study: not just to solve abstract problems, but to make something better for the people around me. It made me grow in ways my degrees never could.</p>
      <div class="two-column">
        <article class="glass-card">
          <p class="meta">Education Volunteer · Aug 2024–present</p>
          <h3>Enlace Rural</h3>
          <p>Taught students in underserved communities, developed interactive lesson plans, facilitated social-emotional development activities.</p>
          <div class="chips">
            <span class="chip">+15% avg grades</span>
            <span class="chip">+25% teamwork</span>
            <span class="chip">+15% engagement</span>
          </div>
        </article>
        ${panelPhoto("images/community-photo.jpg", "Enlace Rural")}
      </div>
    </section>
  `,
  beyond: () => `
    <section class="panel-section">
      <p class="eyebrow">Beyond the Classroom</p>
      <div class="two-column beyond-life">
        <article class="glass-card">
          <h3>Life</h3>
          <p>Beyond the equations and the code, I'm someone who values the people around him deeply. My family has always been my foundation — the reason I push myself and the place I always come back to. My friends make the journey worthwhile, whether we're exploring the city, going to concerts, or just spending time together.</p>
        </article>
        ${panelPhoto("images/beyond-life-photo.jpg", "Life", "vertical-photo")}
      </div>
      <article class="glass-card interests-card">
        <h3>What I'm into</h3>
        <ul class="interest-list">
          <li>Live concerts and music events</li>
          <li>Hiking and being outdoors</li>
          <li>Playing violin, guitar and bass</li>
          <li>Ping pong</li>
          <li>Traveling</li>
        </ul>
      </article>
      <div class="two-column beyond-photos">
        ${panelPhoto("images/beyond-horizontal.jpg", "Beyond", "horizontal-photo")}
        ${panelPhoto("images/beyond-vertical.jpg", "Beyond", "horizontal-photo")}
      </div>
      <article class="glass-card">
        <h3>Music</h3>
        <p>Eduardo plays violin, guitar, and bass. He finds patterns in music the same way he finds them in data.</p>
        <div class="chips"><span class="chip">Violin</span><span class="chip">Guitar</span><span class="chip">Bass</span></div>
      </article>
    </section>
  `,
  contact: () => `
    <section class="panel-section">
      <p class="eyebrow">Contact</p>
      <h2 class="section-title">Let's talk</h2>
      <div class="contact-card-grid">
        <a class="contact-card" href="mailto:ed.mtz.ga@gmail.com">
          <span class="contact-icon" aria-hidden="true">
            <svg class="gmail-icon" viewBox="0 0 64 48" role="img">
              <defs>
                <linearGradient id="gmailNebula" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#8b6fb5"/>
                  <stop offset="0.55" stop-color="#C4522A"/>
                  <stop offset="1" stop-color="#f0c060"/>
                </linearGradient>
              </defs>
              <path d="M6 8h10l16 14L48 8h10v34H46V24L32 36 18 24v18H6z" fill="url(#gmailNebula)"/>
            </svg>
          </span>
          <span class="contact-label">Email</span>
          <span class="contact-value">ed.mtz.ga@gmail.com</span>
        </a>
        <a class="contact-card" href="https://github.com/Eduardo-Angel-Martinez">
          <span class="contact-icon" aria-hidden="true">
            <svg class="github-icon" viewBox="0 0 64 64" role="img">
              <defs>
                <radialGradient id="githubCosmos" cx="50%" cy="40%" r="58%">
                  <stop offset="0" stop-color="#f0ede8"/>
                  <stop offset="0.42" stop-color="#7ab8d4"/>
                  <stop offset="1" stop-color="#061526"/>
                </radialGradient>
              </defs>
              <path d="M32 6C17.6 6 6 17.8 6 32.4c0 11.6 7.4 21.5 17.7 25 1.3.2 1.8-.6 1.8-1.3v-4.7c-7.2 1.6-8.7-3.1-8.7-3.1-1.2-3.1-2.9-3.9-2.9-3.9-2.4-1.7.2-1.7.2-1.7 2.6.2 4 2.8 4 2.8 2.4 4.1 6.2 2.9 7.7 2.2.2-1.7.9-2.9 1.7-3.6-5.7-.7-11.8-2.9-11.8-12.9 0-2.9 1-5.2 2.7-7-0.3-.7-1.2-3.4.3-6.9 0 0 2.2-.7 7.2 2.7 2.1-.6 4.3-.9 6.5-.9s4.4.3 6.5.9c5-3.4 7.2-2.7 7.2-2.7 1.5 3.5.6 6.2.3 6.9 1.7 1.8 2.7 4.1 2.7 7 0 10-6.1 12.2-11.9 12.8.9.8 1.8 2.5 1.8 5v7.1c0 .7.5 1.5 1.8 1.3A26.4 26.4 0 0 0 58 32.4C58 17.8 46.4 6 32 6z" fill="url(#githubCosmos)"/>
            </svg>
          </span>
          <span class="contact-label">GitHub</span>
          <span class="contact-value">Eduardo-Angel-Martinez</span>
        </a>
      </div>
      <p class="copyright">© 2026 Eduardo Ángel Martínez Garduño</p>
    </section>
  `,
  invaders: () => `
    <section class="panel-section">
      <p class="eyebrow">Minigame</p>
      <h2 class="game-title">Space Invaders</h2>
      <div class="game-card arcade-card">
        <div class="game-hud"><span id="invaders-score">Score: 0</span><span id="invaders-lives">Lives: 3</span></div>
        <canvas class="arcade-canvas" id="invaders-canvas" width="820" height="460" aria-label="Space Invaders game"></canvas>
        <div class="puzzle-actions">
          <button class="action-button" id="invaders-restart" type="button">Restart</button>
          <span class="feedback" id="invaders-feedback">Move with Arrow keys or A/D. Shoot with Space.</span>
        </div>
      </div>
    </section>
  `,
  pong: () => `
    <section class="panel-section">
      <p class="eyebrow">Minigame</p>
      <h2 class="game-title">Pong</h2>
      <div class="game-card arcade-card">
        <div class="game-hud"><span id="pong-player">You: 0</span><span id="pong-computer">Computer: 0</span></div>
        <canvas class="arcade-canvas" id="pong-canvas" width="820" height="420" aria-label="Pong game"></canvas>
        <div class="puzzle-actions">
          <button class="action-button" id="pong-restart" type="button">Restart</button>
          <span class="feedback" id="pong-feedback">Move with W/S. First to 7 wins.</span>
        </div>
      </div>
    </section>
  `,
  void: () => `
    <section class="panel-section">
      <p class="eyebrow">The Void</p>
      <h2 class="game-title">Choose an arcade signal</h2>
      <div class="project-grid">
        <button class="void-game-card" type="button" data-void-game="invaders">
          <span class="meta">Minigame</span>
          <strong>Space Invaders</strong>
          <span>Defend the lower orbit from descending alien rows.</span>
        </button>
        <button class="void-game-card" type="button" data-void-game="pong">
          <span class="meta">Minigame</span>
          <strong>Pong</strong>
          <span>Outplay a delayed computer paddle in a glowing space arena.</span>
        </button>
      </div>
    </section>
  `
};

function stat(value, label) {
  return `<div class="stat"><span class="stat-value">${value}</span><span class="stat-label">${label}</span></div>`;
}

function panelPhoto(src, alt, className = "") {
  return `<div class="photo-frame ${className}" data-placeholder="${alt}">
    <img src="${src}" alt="${alt}" onerror="this.parentElement.classList.add('is-missing'); this.remove();">
  </div>`;
}

function chips(items) {
  return `<div class="chips">${items.map((item) => `<span class="chip">${item}</span>`).join("")}</div>`;
}

function timelineItem(title, date, courses) {
  return `<article class="timeline-item"><p class="timeline-date">${date}</p><h3>${title}</h3>${chips(courses)}</article>`;
}

function projectCard(title, description, tags, href) {
  return `<article class="project-card"><h3>${title}</h3><p>${description}</p><div class="chips">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div><a href="${href}">View project</a></article>`;
}

const orbitsEl = document.getElementById("orbits");
const mobileGridEl = document.getElementById("mobile-grid");
const panelEl = document.getElementById("planet-panel");
const panelContentEl = document.getElementById("panel-content");
const panelOrbEl = document.getElementById("panel-orb");
const closePanelEl = document.getElementById("close-panel");
let activePlanet = null;
let invadersGame = null;
let pongGame = null;
let zoomTimer = null;
let orbitPathNodes = [];
let orbitAnimationNodes = [];

function renderNavigation() {
  planets.forEach((planet) => {
    const orbitDefinition = orbitDefinitions[planet.id];
    const path = document.createElement("div");
    path.className = "orbit-path";
    path.dataset.planet = planet.id;
    path.style.setProperty("--orbit-radius", orbitDefinition.radius);
    path.style.setProperty("--orbit-tilt", `${orbitDefinition.tilt}deg`);
    orbitsEl.appendChild(path);

    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.setProperty("--orbit-radius", orbitDefinition.radius);
    orbit.style.setProperty("--orbit-tilt", `${orbitDefinition.tilt}deg`);
    orbit.style.setProperty("--orbit-speed", `${orbitDefinition.duration}s`);
    orbit.style.setProperty("--orbit-start", `${orbitDefinition.start}deg`);
    orbit.style.setProperty("--orbit-start-negative", `${orbitDefinition.start * -1}deg`);
    orbit.style.setProperty("--orbit-tilt-negative", `${orbitDefinition.tilt * -1}deg`);
    orbit.style.setProperty("--planet-color", planet.color);
    orbit.style.setProperty("--planet-size", `${planet.size}px`);
    orbit.dataset.planet = planet.id;

    const spinner = document.createElement("div");
    spinner.className = "orbit-spinner";

    const group = document.createElement("div");
    group.className = "planet-group";

    const shell = document.createElement("div");
    shell.className = "planet-shell";

    const button = document.createElement("button");
    button.className = "planet-button";
    button.type = "button";
    button.dataset.planet = planet.id;
    button.dataset.label = planet.name;
    button.dataset.mapLabel = planet.mapLabel || planet.name.toUpperCase().split("").join(" ");
    button.setAttribute("aria-label", `Open ${planet.name}`);
    button.addEventListener("click", () => openPlanet(planet.id));
    shell.appendChild(button);
    group.appendChild(shell);
    spinner.appendChild(group);
    orbit.appendChild(spinner);
    orbitsEl.appendChild(orbit);
    orbitPathNodes.push({ element: path, orbit: orbitDefinitions[planet.id] });
    orbitAnimationNodes.push({ group, spinner });

    const card = document.createElement("button");
    card.className = "mobile-card";
    card.type = "button";
    card.style.setProperty("--planet-color", planet.color);
    card.style.setProperty("--planet-size", `${Math.max(planet.size, 18)}px`);
    card.innerHTML = `<span class="planet-dot"></span><strong>${planet.name}</strong><span class="meta">${planet.speed}s orbit</span>`;
    card.addEventListener("click", () => openPlanet(planet.id));
    mobileGridEl.appendChild(card);
  });

  const star = document.createElement("div");
  star.className = "sun";
  star.style.setProperty("--planet-color", "#4a9eff");
  star.style.setProperty("--planet-size", `${planets[0].size}px`);

  const core = document.createElement("div");
  core.className = "planet-button";
  core.dataset.planet = "eduardo";
  core.dataset.label = "Eduardo";
  core.dataset.mapLabel = "E D U A R D O";
  core.setAttribute("aria-hidden", "true");
  star.appendChild(core);
  orbitsEl.appendChild(star);

  const voidNode = document.createElement("button");
  voidNode.className = "void-node";
  voidNode.type = "button";
  voidNode.dataset.mapLabel = "T H E   V O I D";
  voidNode.setAttribute("aria-label", "Open The Void");
  voidNode.addEventListener("click", () => openPlanet("void"));
  voidNode.innerHTML = `<span class="void-disk" aria-hidden="true"></span>`;
  document.body.appendChild(voidNode);
}

function updateOrbitPaths() {
  orbitPathNodes.forEach(({ element, orbit }) => {
    element.style.setProperty("--orbit-radius", orbit.radius);
    element.style.setProperty("--orbit-tilt", `${orbit.tilt}deg`);
  });
}

function initPlanetOrbits() {
  function updateOrbitSpeedBoosts() {
    orbitAnimationNodes.forEach((node) => {
      const rect = node.group.getBoundingClientRect();
      const isOffscreen = (
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      );

      [...node.spinner.getAnimations(), ...node.group.getAnimations()].forEach((animation) => {
        animation.playbackRate = isOffscreen ? 3 : 1;
      });
    });

    requestAnimationFrame(updateOrbitSpeedBoosts);
  }

  updateOrbitPaths();
  window.addEventListener("resize", updateOrbitPaths);
  requestAnimationFrame(updateOrbitSpeedBoosts);
}

function openPlanet(id) {
  const panelTarget = planets.find((item) => item.id === id) || panelTargets[id];
  if (!panelTarget) return;
  stopActiveGame();
  window.clearTimeout(zoomTimer);
  activePlanet = id;
  panelContentEl.innerHTML = contentRenderers[id]();
  panelOrbEl.style.setProperty("--active-color", panelTarget.color);
  document.querySelectorAll(".orbit").forEach((orbit) => {
    orbit.classList.toggle("is-selected", orbit.dataset.planet === id);
  });
  document.body.classList.add("map-zoom");
  document.body.style.overflow = "hidden";
  zoomTimer = window.setTimeout(() => {
    panelEl.className = `planet-panel is-open biome-${id}`;
    panelEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("panel-open");
    staggerChildren();
    closePanelEl.focus({ preventScroll: true });

    if (id === "void") initVoidPanel();
    if (id === "invaders") initSpaceInvaders();
    if (id === "pong") initPong();
  }, 260);
}

function closePlanet() {
  window.clearTimeout(zoomTimer);
  activePlanet = null;
  panelEl.className = "planet-panel";
  panelEl.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".orbit").forEach((orbit) => orbit.classList.remove("is-selected"));
  document.body.classList.remove("map-zoom");
  document.body.classList.remove("panel-open");
  document.body.style.overflow = "";
  stopActiveGame();
}

function staggerChildren() {
  [...panelContentEl.querySelectorAll(".panel-section > *")].forEach((child, index) => {
    child.style.setProperty("--stagger", index);
  });
}

function initVoidPanel() {
  panelContentEl.querySelectorAll("[data-void-game]").forEach((card) => {
    card.addEventListener("click", () => openPlanet(card.dataset.voidGame));
  });
}

function stopActiveGame() {
  if (invadersGame) {
    invadersGame.stop();
    invadersGame = null;
  }
  if (pongGame) {
    pongGame.stop();
    pongGame = null;
  }
}

closePanelEl.addEventListener("click", closePlanet);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activePlanet) closePlanet();
});

function initStarField() {
  const canvas = document.getElementById("star-field");
  const ctx = canvas.getContext("2d");
  const streaks = [];
  const stars = Array.from({ length: 340 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 1.75 + 0.18,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.018 + 0.006,
    brightness: Math.random() * 0.72 + 0.28
  }));
  const clusters = Array.from({ length: 5 }, () => {
    const cx = Math.random();
    const cy = Math.random() * 0.75;
    return Array.from({ length: 14 }, () => ({
      x: Math.min(0.98, Math.max(0.02, cx + (Math.random() - 0.5) * 0.08)),
      y: Math.min(0.98, Math.max(0.02, cy + (Math.random() - 0.5) * 0.08)),
      radius: Math.random() * 1.6 + 0.55,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.014 + 0.004,
      brightness: Math.random() * 0.35 + 0.65
    }));
  }).flat();

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnShootingStar() {
    streaks.push({
      x: Math.random() * window.innerWidth * 0.65 - 80,
      y: Math.random() * window.innerHeight * 0.28,
      vx: 9 + Math.random() * 5,
      vy: 5 + Math.random() * 3,
      length: 140 + Math.random() * 110,
      life: 0,
      maxLife: 55 + Math.random() * 22,
      width: 1.4,
      color: "240, 237, 232"
    });
  }

  function spawnMeteor() {
    streaks.push({
      x: Math.random() * window.innerWidth,
      y: -30,
      vx: 3.2 + Math.random() * 2.8,
      vy: 6 + Math.random() * 3.8,
      length: 42 + Math.random() * 34,
      life: 0,
      maxLife: 70 + Math.random() * 35,
      width: 2.2,
      color: "196, 82, 42"
    });
  }

  function drawStreak(streak) {
    const alpha = Math.sin((streak.life / streak.maxLife) * Math.PI);
    const tailX = streak.x - streak.vx * streak.length * 0.14;
    const tailY = streak.y - streak.vy * streak.length * 0.14;
    const gradient = ctx.createLinearGradient(streak.x, streak.y, tailX, tailY);
    gradient.addColorStop(0, `rgba(${streak.color}, ${alpha * 0.95})`);
    gradient.addColorStop(1, `rgba(${streak.color}, 0)`);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = streak.width;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(streak.x, streak.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
    ctx.fillStyle = `rgba(${streak.color}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(streak.x, streak.y, streak.width * 1.35, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw(time) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.concat(clusters).forEach((star) => {
      const twinkle = 0.38 + Math.sin(time * star.speed * 0.01 + star.phase) * 0.32;
      ctx.globalAlpha = Math.max(0.12, twinkle * star.brightness);
      ctx.fillStyle = "#f0ede8";
      ctx.beginPath();
      ctx.arc(star.x * window.innerWidth, star.y * window.innerHeight, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    if (Math.random() < 0.004) spawnShootingStar();
    if (Math.random() < 0.006) spawnMeteor();

    for (let index = streaks.length - 1; index >= 0; index -= 1) {
      const streak = streaks[index];
      streak.x += streak.vx;
      streak.y += streak.vy;
      streak.life += 1;
      drawStreak(streak);
      if (streak.life > streak.maxLife || streak.x > window.innerWidth + 180 || streak.y > window.innerHeight + 180) {
        streaks.splice(index, 1);
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

class SpaceInvadersGame {
  constructor() {
    this.canvas = document.getElementById("invaders-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.scoreEl = document.getElementById("invaders-score");
    this.livesEl = document.getElementById("invaders-lives");
    this.feedback = document.getElementById("invaders-feedback");
    this.restartBtn = document.getElementById("invaders-restart");
    this.keys = new Set();
    this.boundKeyDown = this.keyDown.bind(this);
    this.boundKeyUp = this.keyUp.bind(this);
    this.boundResize = this.resize.bind(this);
    this.restartBtn.addEventListener("click", () => this.reset());
    document.addEventListener("keydown", this.boundKeyDown);
    document.addEventListener("keyup", this.boundKeyUp);
    window.addEventListener("resize", this.boundResize);
    this.resize();
    this.reset();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.max(360, Math.floor(rect.width * dpr));
    this.canvas.height = Math.max(260, Math.floor(rect.height * dpr));
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = this.canvas.width / dpr;
    this.height = this.canvas.height / dpr;
  }

  reset() {
    this.score = 0;
    this.lives = 3;
    this.player = { x: this.width / 2, y: this.height - 34, w: 36, h: 14 };
    this.bullets = [];
    this.alienBullets = [];
    this.aliens = [];
    this.direction = 1;
    this.stepDown = 18;
    this.shootCooldown = 0;
    this.alienShotClock = 0;
    this.gameOver = false;
    this.feedback.textContent = "Move with Arrow keys or A/D. Shoot with Space.";
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        this.aliens.push({ x: 84 + col * 54, y: 54 + row * 34, w: 26, h: 18, alive: true });
      }
    }
  }

  keyDown(event) {
    if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD", "Space"].includes(event.code)) event.preventDefault();
    this.keys.add(event.code);
    if (event.code === "Space") this.shoot();
  }

  keyUp(event) {
    this.keys.delete(event.code);
  }

  shoot() {
    if (this.gameOver || this.shootCooldown > 0) return;
    this.bullets.push({ x: this.player.x, y: this.player.y - 14, vy: -7 });
    this.shootCooldown = 16;
  }

  loop() {
    this.update();
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  }

  update() {
    if (this.gameOver) return;
    const left = this.keys.has("ArrowLeft") || this.keys.has("KeyA");
    const right = this.keys.has("ArrowRight") || this.keys.has("KeyD");
    this.player.x += (right - left) * 6;
    this.player.x = Math.max(22, Math.min(this.width - 22, this.player.x));
    this.shootCooldown = Math.max(0, this.shootCooldown - 1);

    let hitEdge = false;
    const speed = 0.52 + this.score * 0.002;
    this.aliens.forEach((alien) => {
      if (!alien.alive) return;
      alien.x += this.direction * speed;
      if (alien.x < 28 || alien.x > this.width - 28) hitEdge = true;
    });
    if (hitEdge) {
      this.direction *= -1;
      this.aliens.forEach((alien) => {
        alien.y += this.stepDown;
      });
    }

    this.bullets.forEach((bullet) => {
      bullet.y += bullet.vy;
      this.aliens.forEach((alien) => {
        if (!alien.alive || bullet.hit) return;
        if (Math.abs(bullet.x - alien.x) < alien.w / 2 && Math.abs(bullet.y - alien.y) < alien.h / 2) {
          alien.alive = false;
          bullet.hit = true;
          this.score += 10;
        }
      });
    });
    this.bullets = this.bullets.filter((bullet) => bullet.y > -20 && !bullet.hit);

    this.alienShotClock += 1;
    if (this.alienShotClock > 70 && this.aliens.some((alien) => alien.alive)) {
      const living = this.aliens.filter((alien) => alien.alive);
      const shooter = living[Math.floor(Math.random() * living.length)];
      this.alienBullets.push({ x: shooter.x, y: shooter.y + 12, vy: 3.8 });
      this.alienShotClock = 0;
    }
    this.alienBullets.forEach((bullet) => {
      bullet.y += bullet.vy;
      if (Math.abs(bullet.x - this.player.x) < this.player.w / 2 && Math.abs(bullet.y - this.player.y) < this.player.h) {
        bullet.hit = true;
        this.loseLife();
      }
    });
    this.alienBullets = this.alienBullets.filter((bullet) => bullet.y < this.height + 20 && !bullet.hit);

    if (this.aliens.some((alien) => alien.alive && alien.y > this.player.y - 24)) this.loseLife();
    if (!this.aliens.some((alien) => alien.alive)) {
      this.feedback.textContent = "Wave cleared. Restart to defend another orbit.";
      this.gameOver = true;
    }
    this.scoreEl.textContent = `Score: ${this.score}`;
    this.livesEl.textContent = `Lives: ${this.lives}`;
  }

  loseLife() {
    this.lives -= 1;
    this.alienBullets = [];
    this.aliens.forEach((alien) => {
      alien.y = Math.max(42, alien.y - 24);
    });
    if (this.lives <= 0) {
      this.gameOver = true;
      this.feedback.textContent = "Game over. Restart to try again.";
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    drawArcadeBackdrop(ctx, this.width, this.height);
    ctx.fillStyle = "#7ab8d4";
    ctx.shadowColor = "#7ab8d4";
    ctx.shadowBlur = 14;
    ctx.fillRect(this.player.x - this.player.w / 2, this.player.y - this.player.h / 2, this.player.w, this.player.h);
    ctx.fillRect(this.player.x - 5, this.player.y - 20, 10, 12);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#f0c060";
    this.bullets.forEach((bullet) => ctx.fillRect(bullet.x - 2, bullet.y - 8, 4, 12));
    ctx.fillStyle = "#C4522A";
    this.alienBullets.forEach((bullet) => ctx.fillRect(bullet.x - 2, bullet.y - 2, 4, 9));
    this.aliens.forEach((alien) => {
      if (!alien.alive) return;
      ctx.fillStyle = "#f0ede8";
      ctx.fillRect(alien.x - 13, alien.y - 8, 26, 10);
      ctx.fillRect(alien.x - 9, alien.y - 14, 18, 6);
      ctx.fillStyle = "#C4522A";
      ctx.fillRect(alien.x - 9, alien.y - 2, 5, 5);
      ctx.fillRect(alien.x + 4, alien.y - 2, 5, 5);
    });
    if (this.gameOver) drawGameOverlay(ctx, this.width, this.height, this.feedback.textContent);
  }

  stop() {
    cancelAnimationFrame(this.raf);
    document.removeEventListener("keydown", this.boundKeyDown);
    document.removeEventListener("keyup", this.boundKeyUp);
    window.removeEventListener("resize", this.boundResize);
  }
}

class PongGame {
  constructor() {
    this.canvas = document.getElementById("pong-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.playerEl = document.getElementById("pong-player");
    this.computerEl = document.getElementById("pong-computer");
    this.feedback = document.getElementById("pong-feedback");
    this.restartBtn = document.getElementById("pong-restart");
    this.keys = new Set();
    this.boundKeyDown = this.keyDown.bind(this);
    this.boundKeyUp = this.keyUp.bind(this);
    this.boundResize = this.resize.bind(this);
    this.restartBtn.addEventListener("click", () => this.reset());
    document.addEventListener("keydown", this.boundKeyDown);
    document.addEventListener("keyup", this.boundKeyUp);
    window.addEventListener("resize", this.boundResize);
    this.resize();
    this.reset();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.max(360, Math.floor(rect.width * dpr));
    this.canvas.height = Math.max(240, Math.floor(rect.height * dpr));
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = this.canvas.width / dpr;
    this.height = this.canvas.height / dpr;
  }

  reset() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.player = { x: 28, y: this.height / 2, w: 10, h: 76 };
    this.computer = { x: this.width - 28, y: this.height / 2, w: 10, h: 76 };
    this.ball = { x: this.width / 2, y: this.height / 2, vx: 4.2, vy: 2.5, r: 7 };
    this.finished = false;
    this.feedback.textContent = "Move with W/S. First to 7 wins.";
  }

  keyDown(event) {
    if (["KeyW", "KeyS"].includes(event.code)) event.preventDefault();
    this.keys.add(event.code);
  }

  keyUp(event) {
    this.keys.delete(event.code);
  }

  loop() {
    this.update();
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  }

  update() {
    if (this.finished) return;
    this.player.y += (this.keys.has("KeyS") - this.keys.has("KeyW")) * 6.4;
    this.player.y = Math.max(this.player.h / 2, Math.min(this.height - this.player.h / 2, this.player.y));
    const target = this.ball.y - this.computer.y;
    this.computer.y += Math.max(-4.1, Math.min(4.1, target * 0.055));
    this.computer.y = Math.max(this.computer.h / 2, Math.min(this.height - this.computer.h / 2, this.computer.y));
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;
    if (this.ball.y < this.ball.r || this.ball.y > this.height - this.ball.r) this.ball.vy *= -1;
    this.paddleBounce(this.player, 1);
    this.paddleBounce(this.computer, -1);
    if (this.ball.x < -20) this.score("computer");
    if (this.ball.x > this.width + 20) this.score("player");
    this.playerEl.textContent = `You: ${this.playerScore}`;
    this.computerEl.textContent = `Computer: ${this.computerScore}`;
  }

  paddleBounce(paddle, direction) {
    if (
      Math.abs(this.ball.x - paddle.x) < paddle.w / 2 + this.ball.r &&
      Math.abs(this.ball.y - paddle.y) < paddle.h / 2 + this.ball.r
    ) {
      const offset = (this.ball.y - paddle.y) / (paddle.h / 2);
      this.ball.vx = direction * Math.min(7.2, Math.abs(this.ball.vx) + 0.34);
      this.ball.vy = offset * 4.8;
    }
  }

  score(side) {
    if (side === "player") this.playerScore += 1;
    if (side === "computer") this.computerScore += 1;
    this.ball = { x: this.width / 2, y: this.height / 2, vx: side === "player" ? -4.2 : 4.2, vy: (Math.random() - 0.5) * 4.8, r: 7 };
    if (this.playerScore >= 7 || this.computerScore >= 7) {
      this.finished = true;
      this.feedback.textContent = this.playerScore > this.computerScore ? "You win. Restart for another match." : "Computer wins. Restart to run it back.";
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    drawArcadeBackdrop(ctx, this.width, this.height);
    ctx.setLineDash([8, 10]);
    ctx.strokeStyle = "rgba(240,237,232,0.22)";
    ctx.beginPath();
    ctx.moveTo(this.width / 2, 18);
    ctx.lineTo(this.width / 2, this.height - 18);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowColor = "#a8d8ff";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "#dff6ff";
    ctx.fillRect(this.player.x - this.player.w / 2, this.player.y - this.player.h / 2, this.player.w, this.player.h);
    ctx.fillRect(this.computer.x - this.computer.w / 2, this.computer.y - this.computer.h / 2, this.computer.w, this.computer.h);
    ctx.beginPath();
    ctx.arc(this.ball.x, this.ball.y, this.ball.r, 0, Math.PI * 2);
    ctx.fillStyle = "#f0c060";
    ctx.fill();
    ctx.shadowBlur = 0;
    if (this.finished) drawGameOverlay(ctx, this.width, this.height, this.feedback.textContent);
  }

  stop() {
    cancelAnimationFrame(this.raf);
    document.removeEventListener("keydown", this.boundKeyDown);
    document.removeEventListener("keyup", this.boundKeyUp);
    window.removeEventListener("resize", this.boundResize);
  }
}

function drawArcadeBackdrop(ctx, width, height) {
  ctx.fillStyle = "rgba(2, 3, 8, 0.92)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(240,237,232,0.55)";
  for (let i = 0; i < 48; i += 1) {
    const x = (i * 83) % width;
    const y = (i * 47) % height;
    ctx.fillRect(x, y, 1.4, 1.4);
  }
}

function drawGameOverlay(ctx, width, height, message) {
  ctx.fillStyle = "rgba(0,0,0,0.58)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#f0ede8";
  ctx.font = "20px 'DM Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText(message, width / 2, height / 2);
}

function initSpaceInvaders() {
  if (invadersGame) invadersGame.stop();
  invadersGame = new SpaceInvadersGame();
}

function initPong() {
  if (pongGame) pongGame.stop();
  pongGame = new PongGame();
}

renderNavigation();
initPlanetOrbits();
initStarField();
