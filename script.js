const planets = [
  { id: "about", name: "About", mapLabel: "E D U A R D O", color: "#4a9eff", size: 82, speed: 25, x: 50, y: 55 },
  { id: "education", name: "Education", color: "#a9823b", size: 75, speed: 35, x: 61, y: 20 },
  { id: "projects", name: "Projects", color: "#357f76", size: 70, speed: 45, x: 84, y: 47 },
  { id: "community", name: "Community", color: "#496f49", size: 60, speed: 30, x: 34, y: 73 },
  { id: "beyond", name: "Beyond", color: "#69518e", size: 65, speed: 55, x: 75, y: 78 },
  { id: "probability", name: "Probability Game", color: "#9a4125", size: 55, speed: 20, x: 14, y: 61 },
  { id: "gravity", name: "Gravity Puzzle", color: "#5e98af", size: 60, speed: 65, x: 45, y: 15 },
  { id: "contact", name: "Contact", color: "#b9b9b5", size: 50, speed: 15, x: 54, y: 88 }
];

const orbitDefinitions = {
  about: { radius: "28vw", tilt: 20, start: 45, duration: 50 },
  education: { radius: "38vw", tilt: -30, start: 120, duration: 65 },
  projects: { radius: "32vw", tilt: 15, start: 200, duration: 80 },
  community: { radius: "22vw", tilt: -20, start: 280, duration: 55 },
  beyond: { radius: "45vw", tilt: 35, start: 320, duration: 90 },
  probability: { radius: "26vw", tilt: -45, start: 160, duration: 45 },
  gravity: { radius: "42vw", tilt: 25, start: 240, duration: 75 },
  contact: { radius: "20vw", tilt: -15, start: 80, duration: 60 }
};

const aboutText = "I'm Eduardo, a student at ITAM pursuing two degrees simultaneously — Actuarial Science and Data Science. I'm drawn to problems that sit at the intersection of math, data, and the real world. Outside academia I teach, play music, and try to stay curious.";

const contentRenderers = {
  about: () => `
    <section class="panel-section">
      <p class="eyebrow">About</p>
      <h2 class="panel-title">Eduardo Ángel Martínez</h2>
      <p class="subtitle">Actuary · Data Scientist · Musician</p>
      <p class="lead">${aboutText}</p>
      <div class="stats-grid">
        ${stat("02", "degrees in progress")}
        ${stat("3+", "years tutoring math & economics")}
        ${stat("3", "instruments: violin · guitar · bass")}
        ${stat("2×", "top GPA recognition")}
      </div>
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
      <p class="lead">Teaching keeps Eduardo close to the human side of mathematics. Giving back matters because confidence, patience, and curiosity can change how a student sees their own future.</p>
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
        <div class="photo-placeholder">[ photo from Enlace Rural ]</div>
      </div>
    </section>
  `,
  beyond: () => `
    <section class="panel-section">
      <p class="eyebrow">Beyond the Classroom</p>
      <h2 class="section-title">Patterns after hours</h2>
      <div class="two-column">
        <article class="glass-card">
          <h3>Music</h3>
          <p>Eduardo plays violin, guitar, and bass. He finds patterns in music the same way he finds them in data.</p>
          <div class="chips"><span class="chip">Violin</span><span class="chip">Guitar</span><span class="chip">Bass</span></div>
        </article>
        <div class="photo-placeholder">[ photo with instrument ]</div>
        <article class="glass-card">
          <h3>Life</h3>
          <p>Outside academia, Eduardo makes time for friends, long conversations, and small rituals that keep life grounded. He believes good work is easier to sustain when there is room for joy around it.</p>
        </article>
        <div class="photo-placeholder">[ photo with friends ]</div>
      </div>
    </section>
  `,
  contact: () => `
    <section class="panel-section">
      <p class="eyebrow">Contact</p>
      <h2 class="section-title">Let's talk</h2>
      <ul class="contact-list">
        <li><a href="mailto:ed.mtz.ga@gmail.com">ed.mtz.ga@gmail.com</a></li>
        <li><a href="https://github.com/Eduardo-Angel-Martinez">github.com/Eduardo-Angel-Martinez</a></li>
        <li><span>+52 55 7895 2017</span></li>
      </ul>
      <p class="copyright">© 2026 Eduardo Ángel Martínez Garduño</p>
    </section>
  `,
  probability: () => `
    <section class="panel-section">
      <p class="eyebrow">Minigame</p>
      <h2 class="game-title">Probability Planet</h2>
      <p class="subtitle">Test your statistical intuition</p>
      <div class="game-grid">
        <div class="game-card">
          <div class="playing-card" id="current-card">A♠</div>
          <div class="game-actions">
            <button class="action-button primary" id="higher-btn" type="button">Higher ▲</button>
            <button class="action-button primary" id="lower-btn" type="button">Lower ▼</button>
            <button class="action-button" id="play-again-btn" type="button" hidden>Play again</button>
          </div>
        </div>
        <div class="game-card">
          <div class="game-hud"><span id="score">Score: 0</span><span id="streak">Streak: 0</span></div>
          <p class="feedback" id="probability-feedback"></p>
        </div>
      </div>
    </section>
  `,
  gravity: () => `
    <section class="panel-section">
      <p class="eyebrow">Minigame</p>
      <h2 class="game-title">Gravity Puzzle</h2>
      <p class="subtitle">Navigate through gravitational fields</p>
      <div class="game-card">
        <div class="game-hud">
          <span id="gravity-level">Level 1</span>
          <span id="gravity-score">Score: 0</span>
          <span id="gravity-time">Time: 0.0s</span>
          <span id="gravity-fuel">Fuel: 100</span>
        </div>
        <canvas class="gravity-canvas" id="gravity-canvas" width="820" height="420" aria-label="Gravity Puzzle game"></canvas>
        <div class="puzzle-actions">
          <button class="action-button" id="gravity-retry" type="button">Retry level</button>
          <span class="feedback" id="gravity-feedback">Click or tap the canvas to thrust.</span>
        </div>
      </div>
    </section>
  `
};

function stat(value, label) {
  return `<div class="stat"><span class="stat-value">${value}</span><span class="stat-label">${label}</span></div>`;
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
let probabilityGame = null;
let gravityGame = null;
let zoomTimer = null;
let orbitPathNodes = [];

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
  star.style.setProperty("--planet-color", planets[0].color);
  star.style.setProperty("--planet-size", `${planets[0].size}px`);

  const button = document.createElement("button");
  button.className = "planet-button";
  button.type = "button";
  button.dataset.planet = "about";
  button.dataset.label = "About";
  button.dataset.mapLabel = "E D U A R D O";
  button.setAttribute("aria-label", "Open About");
  button.addEventListener("click", () => openPlanet("about"));
  star.appendChild(button);
  orbitsEl.appendChild(star);
}

function updateOrbitPaths() {
  orbitPathNodes.forEach(({ element, orbit }) => {
    element.style.setProperty("--orbit-radius", orbit.radius);
    element.style.setProperty("--orbit-tilt", `${orbit.tilt}deg`);
  });
}

function initPlanetOrbits() {
  updateOrbitPaths();
  window.addEventListener("resize", updateOrbitPaths);
}

function openPlanet(id) {
  const planet = planets.find((item) => item.id === id);
  if (!planet) return;
  window.clearTimeout(zoomTimer);
  activePlanet = id;
  panelContentEl.innerHTML = contentRenderers[id]();
  panelOrbEl.style.setProperty("--active-color", planet.color);
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

    if (id === "probability") initProbabilityGame();
    if (id === "gravity") initGravityGame();
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
  if (gravityGame) {
    gravityGame.stop();
    gravityGame = null;
  }
}

function staggerChildren() {
  [...panelContentEl.querySelectorAll(".panel-section > *")].forEach((child, index) => {
    child.style.setProperty("--stagger", index);
  });
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

function createDeck() {
  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = [
    ["A", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7],
    ["8", 8], ["9", 9], ["10", 10], ["J", 11], ["Q", 12], ["K", 13]
  ];
  return suits.flatMap((suit) => ranks.map(([label, value]) => ({ suit, label, value })))
    .sort(() => Math.random() - 0.5);
}

function initProbabilityGame() {
  probabilityGame = {
    deck: createDeck(),
    current: null,
    score: 0,
    streak: 0,
    stopped: false
  };
  probabilityGame.current = probabilityGame.deck.pop();
  const cardEl = document.getElementById("current-card");
  const scoreEl = document.getElementById("score");
  const streakEl = document.getElementById("streak");
  const feedbackEl = document.getElementById("probability-feedback");
  const higherBtn = document.getElementById("higher-btn");
  const lowerBtn = document.getElementById("lower-btn");
  const againBtn = document.getElementById("play-again-btn");

  function render() {
    const card = probabilityGame.current;
    cardEl.textContent = `${card.label}${card.suit}`;
    cardEl.classList.toggle("card-red", card.suit === "♥" || card.suit === "♦");
    scoreEl.textContent = `Score: ${probabilityGame.score}`;
    streakEl.textContent = `Streak: ${probabilityGame.streak}`;
    higherBtn.disabled = probabilityGame.stopped;
    lowerBtn.disabled = probabilityGame.stopped;
    againBtn.hidden = !probabilityGame.stopped;
  }

  function chance(direction) {
    const matches = probabilityGame.deck.filter((card) => (
      direction === "higher"
        ? card.value > probabilityGame.current.value
        : card.value < probabilityGame.current.value
    )).length;
    return probabilityGame.deck.length ? Math.round((matches / probabilityGame.deck.length) * 100) : 0;
  }

  function guess(direction) {
    if (probabilityGame.stopped || probabilityGame.deck.length === 0) return;
    const probability = chance(direction);
    const next = probabilityGame.deck.pop();
    const correct = direction === "higher"
      ? next.value > probabilityGame.current.value
      : next.value < probabilityGame.current.value;

    if (correct) {
      probabilityGame.current = next;
      probabilityGame.score += 1;
      probabilityGame.streak += 1;
      feedbackEl.textContent = `Correct. The next card was ${next.label}${next.suit}.`;
    } else {
      probabilityGame.stopped = true;
      feedbackEl.textContent = `Wrong: the next card was ${next.label}${next.suit}. The probability of that guess was ${probability}%.`;
    }
    render();
  }

  higherBtn.onclick = () => guess("higher");
  lowerBtn.onclick = () => guess("lower");
  againBtn.onclick = initProbabilityGame;
  feedbackEl.textContent = "Will the next card be higher or lower?";
  render();
}

class GravityGame {
  constructor() {
    this.canvas = document.getElementById("gravity-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.feedback = document.getElementById("gravity-feedback");
    this.levelEl = document.getElementById("gravity-level");
    this.scoreEl = document.getElementById("gravity-score");
    this.timeEl = document.getElementById("gravity-time");
    this.fuelEl = document.getElementById("gravity-fuel");
    this.retryBtn = document.getElementById("gravity-retry");
    this.levels = [
      { wells: [{ x: 0.45, y: 0.46, mass: 900 }], target: { x: 0.86, y: 0.24 } },
      { wells: [{ x: 0.42, y: 0.35, mass: 980 }, { x: 0.66, y: 0.68, mass: 760 }], target: { x: 0.88, y: 0.76 } },
      { wells: [{ x: 0.34, y: 0.28, mass: 900 }, { x: 0.58, y: 0.58, mass: 1100 }, { x: 0.76, y: 0.35, mass: 720 }], target: { x: 0.9, y: 0.5 } }
    ];
    this.level = 0;
    this.totalScore = 0;
    this.boundThrust = this.thrust.bind(this);
    this.boundResize = this.resize.bind(this);
    this.retryBtn.addEventListener("click", () => this.resetLevel());
    this.canvas.addEventListener("pointerdown", this.boundThrust);
    window.addEventListener("resize", this.boundResize);
    this.resize();
    this.resetLevel();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.max(320, Math.floor(rect.width * dpr));
    this.canvas.height = Math.max(240, Math.floor(rect.height * dpr));
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = this.canvas.width / dpr;
    this.height = this.canvas.height / dpr;
  }

  resetLevel() {
    this.ship = { x: this.width * 0.12, y: this.height * 0.52, vx: 0.95, vy: 0, angle: 0 };
    this.fuel = 100;
    this.levelStart = performance.now();
    this.finished = false;
    this.failed = false;
    this.feedback.textContent = "Click or tap the canvas to thrust.";
  }

  thrust(event) {
    event.preventDefault();
    if (this.finished || this.failed || this.fuel <= 0) return;
    const thrust = 1.55;
    this.ship.vx += Math.cos(this.ship.angle) * thrust;
    this.ship.vy += Math.sin(this.ship.angle) * thrust;
    this.fuel = Math.max(0, this.fuel - 7);
  }

  loop(now) {
    this.update(now);
    this.draw(now);
    this.raf = requestAnimationFrame(this.loop);
  }

  update(now) {
    if (this.finished || this.failed) return;
    const level = this.levels[this.level];
    const dt = 1 / 60;
    level.wells.forEach((well) => {
      const wx = well.x * this.width;
      const wy = well.y * this.height;
      const dx = wx - this.ship.x;
      const dy = wy - this.ship.y;
      const distSq = Math.max(dx * dx + dy * dy, 900);
      const dist = Math.sqrt(distSq);
      const force = Math.min(3400, well.mass / distSq) * 54;
      this.ship.vx += (dx / dist) * force * dt;
      this.ship.vy += (dy / dist) * force * dt;
      if (dist < 24) this.fail("The ship crossed a gravity well. Retry the level.");
    });

    this.ship.x += this.ship.vx;
    this.ship.y += this.ship.vy;
    this.ship.vx *= 0.997;
    this.ship.vy *= 0.997;
    this.ship.angle = Math.atan2(this.ship.vy, this.ship.vx);

    const target = { x: level.target.x * this.width, y: level.target.y * this.height };
    if (Math.hypot(target.x - this.ship.x, target.y - this.ship.y) < 28) this.win(now);
    if (this.ship.x < -30 || this.ship.x > this.width + 30 || this.ship.y < -30 || this.ship.y > this.height + 30) {
      this.fail("The ship drifted out of bounds. Retry the level.");
    }
  }

  win(now) {
    const elapsed = (now - this.levelStart) / 1000;
    const earned = Math.max(100, Math.round(1000 - elapsed * 35 + this.fuel * 5));
    this.totalScore += earned;
    this.finished = true;
    if (this.level < this.levels.length - 1) {
      this.feedback.textContent = `Level complete: +${earned}. Advancing...`;
      setTimeout(() => {
        this.level += 1;
        this.resetLevel();
      }, 900);
    } else {
      this.feedback.textContent = `Puzzle complete. Final score: ${this.totalScore}.`;
    }
  }

  fail(message) {
    this.failed = true;
    this.feedback.textContent = message;
  }

  draw(now) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = "rgba(2, 3, 8, 0.84)";
    ctx.fillRect(0, 0, this.width, this.height);
    const level = this.levels[this.level];
    const elapsed = (now - this.levelStart) / 1000;
    this.levelEl.textContent = `Level ${this.level + 1}`;
    this.scoreEl.textContent = `Score: ${this.totalScore}`;
    this.timeEl.textContent = `Time: ${elapsed.toFixed(1)}s`;
    this.fuelEl.textContent = `Fuel: ${this.fuel}`;

    level.wells.forEach((well) => {
      const x = well.x * this.width;
      const y = well.y * this.height;
      const gradient = ctx.createRadialGradient(x, y, 4, x, y, 70);
      gradient.addColorStop(0, "rgba(196, 82, 42, 0.95)");
      gradient.addColorStop(1, "rgba(196, 82, 42, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 70, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#C4522A";
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    });

    const target = level.target;
    const tx = target.x * this.width;
    const ty = target.y * this.height;
    ctx.fillStyle = "#f0c060";
    ctx.shadowColor = "#f0c060";
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(tx, ty, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.save();
    ctx.translate(this.ship.x, this.ship.y);
    ctx.rotate(this.ship.angle);
    ctx.fillStyle = "#f0ede8";
    ctx.beginPath();
    ctx.moveTo(18, 0);
    ctx.lineTo(-12, -10);
    ctx.lineTo(-8, 0);
    ctx.lineTo(-12, 10);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.canvas.removeEventListener("pointerdown", this.boundThrust);
    window.removeEventListener("resize", this.boundResize);
  }
}

function initGravityGame() {
  if (gravityGame) gravityGame.stop();
  gravityGame = new GravityGame();
}

renderNavigation();
initPlanetOrbits();
initStarField();
