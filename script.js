/* ============================================================
   All personal content lives in this one CONTENT object.
   Change the words here and the whole site updates.
   ============================================================ */
const CONTENT = {
  name: "AJ Ohi",
  nameLines: ["AJ", "Ohi"],
  job: "Developer",
  tagline: "I build fast, clean websites that people enjoy using.",
  about:
    "I'm AJ Ohi. I care about how a site loads, how it feels and how easy it is to use. I work with creators, brands and businesses to turn ideas into clean, working websites.",
  aboutTitle: "I build things around the user.",
  strengths: ["Clean code", "Fast performance", "Great UX"],
  skills: ["Frontend", "Backend", "Performance", "Responsive design", "APIs", "Clean code"],
  tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
  strap: "DEVELOPER • AJ OHI • ",
  collabText: "let’s collab",
  // Newest first. Leave url empty to show a "coming soon" card.
  // Optional: image: "assets/project-1.webp"
  work: [
    { title: "Project title", note: "Short description. Link coming soon.", url: "", image: "" },
    { title: "Project title", note: "Short description. Link coming soon.", url: "", image: "" },
    { title: "Project title", note: "Short description. Link coming soon.", url: "", image: "" },
    { title: "Project title", note: "Short description. Link coming soon.", url: "", image: "" }
  ],
  process: [
    ["Understand", "Goals, audience and what the site must do."],
    ["Design", "Layout, type and flow before any code."],
    ["Build", "Clean, fast, responsive code."],
    ["Launch", "Test, polish and go live."]
  ],
  email: "Abduljobber926@gmail.com",
  whatsapp: "+8801839093016", // country code + number
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/link.diye.ki.korba.bhai", icon: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.800-3.900 1.100 0 2.200.2 2.200.2v2.500h-1.300c-1.200 0-1.600.8-1.600 1.600V12h2.800l-.4 2.900h-2.300v7A10 10 0 0 0 22 12z" },
    { name: "Instagram", url: "https://www.instagram.com/ajohi02", icon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.500A4.500 4.500 0 1 1 7.500 12 4.500 4.500 0 0 1 12 7.500zm0 2A2.500 2.500 0 1 0 14.500 12 2.500 2.500 0 0 0 12 9.500zM17.300 5.700a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" },
    { name: "X", url: "https://x.com/AJohi6", icon: "M18.200 2.500h3.300l-7.200 8.300 8.500 11.200h-6.700l-5.200-6.800-6 6.800H1.600l7.700-8.800L1.200 2.500H8l4.700 6.200zm-1.200 17.500h1.800L7.100 4.400H5.200z" }
  ]
};

/* ---------------- helpers ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------------- fill content ---------------- */
function fill() {
  document.title = `${CONTENT.name} · ${CONTENT.job}`;
  $("#navName").textContent = CONTENT.name;
  $("#heroName").innerHTML = CONTENT.nameLines.join("<br>");
  $("#tagline").textContent = CONTENT.tagline;
  $("#cardJob").textContent = CONTENT.job.toUpperCase();
  $("#cardName").textContent = CONTENT.name;
  $("#cardId").textContent = `ID · ${new Date().getFullYear()} · XX-01`;
  $("#footName").textContent = CONTENT.name;
  $("#year").textContent = new Date().getFullYear();
  $("#collabText").textContent = CONTENT.collabText;
  $("#aboutTitle").textContent = CONTENT.aboutTitle;
  $("#aboutText").textContent = CONTENT.about;

  $("#tools").innerHTML = CONTENT.tools.map(t => `<li>${t}</li>`).join("");
  $("#strengths").innerHTML = CONTENT.strengths.map(t => `<span>${t}</span>`).join("");

  const sk = CONTENT.skills.map(s => `<span>${s}</span>`).join("");
  $("#stripTrack").innerHTML = sk + sk + sk + sk; // doubled twice for seamless loop

  $("#rail").innerHTML = CONTENT.work.map(w => {
    const inner = `<div class="thumb">${w.image ? `<img src="${w.image}" alt="" loading="lazy">` : "PROJECT"}</div>
      <div class="meta"><h3>${w.title}</h3><p>${w.note || ""}</p></div>`;
    return w.url
      ? `<a class="card-w" href="${w.url}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="card-w">${inner}</div>`;
  }).join("");

  $("#steps").innerHTML = CONTENT.process.map((p, i) =>
    `<li><b>0${i + 1}</b><h3>${p[0]}</h3><p>${p[1]}</p></li>`).join("");

  const em = $("#emailLink");
  em.textContent = CONTENT.email; em.href = `mailto:${CONTENT.email}`;
  const wa = $("#waLink");
  wa.textContent = CONTENT.whatsapp;
  wa.href = `https://wa.me/${CONTENT.whatsapp.replace(/\D/g, "")}`;

  $("#socials").innerHTML = CONTENT.socials.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${s.icon}"/></svg>${s.name}</a>`).join("");

  $("#copyEmail").addEventListener("click", async (e) => {
    const b = e.currentTarget;
    try { await navigator.clipboard.writeText(CONTENT.email); b.textContent = "Copied ✓"; }
    catch { b.textContent = "Press Ctrl+C"; }
    setTimeout(() => (b.textContent = "Copy"), 1600);
  });
}

/* ---------------- loader (under 1 s) ---------------- */
function loader() {
  const el = $("#loader"), t = $("#loaderTime");
  const start = performance.now(), dur = 800;
  const pad = n => String(n).padStart(2, "0");
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const f = Math.floor(p * 24 * 3);
    t.textContent = `00:00:${pad(Math.floor(f / 24))}:${pad(f % 24)}`;
    if (p < 1) requestAnimationFrame(tick);
    else { el.classList.add("done"); document.dispatchEvent(new Event("loaded")); }
  })(start);
}

/* ---------------- nav + progress ---------------- */
function navAndProgress() {
  const nav = $("#nav"), bar = $("#progress");
  let last = scrollY, ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = scrollY;
      nav.classList.toggle("hide", y > last && y > 120);
      last = y;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      ticking = false;
    });
  }, { passive: true });
}

/* ---------------- EFFECT 1: hanging ID card (verlet rope) ---------------- */
function idCard() {
  const layer = $("#idlayer"), card = $("#card"), cap = $(".card-caption");
  const strap = $("#strapPath"), strapText = $("#strapText"), strapTP = $("#strapTextPath");
  const hero = $(".hero");
  const small = innerWidth < 700;
  const N = 12, SEG = small ? 17 : 21, W = 250, H = 360;
  const GRAV = 0.55, DAMP = 0.982, MAXV = 16;
  const ropeLen = N * SEG;
  const ax = 180, ay = 0; // anchor in layer coords (layer is 360 wide)

  strapTP.textContent = CONTENT.strap.repeat(12);

  const pts = [];
  const startY = -(ropeLen + H + 60);
  for (let i = 0; i <= N; i++) {
    const y = reduce ? ay + i * SEG : startY + i * SEG;
    pts.push({ x: ax + (reduce ? 0 : 6), y, px: ax + (reduce ? 0 : 6), py: y });
  }
  const last = pts[N];
  let dragging = false, grabDX = 0, grabDY = 0, tx = 0, ty = 0;
  let running = false, rest = 0, started = reduce;

  function scale() { const r = layer.getBoundingClientRect(); return r.width / 360 || 1; }
  function toLocal(e) {
    const r = layer.getBoundingClientRect(), s = scale();
    return { x: (e.clientX - r.left) / s, y: (e.clientY - r.top) / s };
  }

  function step() {
    pts[0].x = ax; pts[0].y = ay;
    for (let i = 1; i <= N; i++) {
      const p = pts[i];
      if (dragging && i === N) continue;
      let vx = (p.x - p.px) * DAMP, vy = (p.y - p.py) * DAMP;
      const sp = Math.hypot(vx, vy);
      if (sp > MAXV) { vx *= MAXV / sp; vy *= MAXV / sp; }
      p.px = p.x; p.py = p.y;
      p.x += vx; p.y += vy + GRAV;
    }
    if (dragging) {
      const nx = tx - grabDX, ny = ty - grabDY;
      last.px = last.x; last.py = last.y;
      last.x = nx; last.y = ny;
    }
    for (let k = 0; k < 10; k++) {
      pts[0].x = ax; pts[0].y = ay;
      for (let i = 0; i < N; i++) {
        const a = pts[i], b = pts[i + 1];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        if (d <= SEG) continue; // pulls only when stretched
        const diff = (d - SEG) / d;
        if (i === 0) { b.x -= dx * diff; b.y -= dy * diff; }
        else if (dragging && i + 1 === N) { a.x += dx * diff; a.y += dy * diff; }
        else { a.x += dx * diff * 0.5; a.y += dy * diff * 0.5; b.x -= dx * diff * 0.5; b.y -= dy * diff * 0.5; }
      }
    }
  }

  function draw() {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i <= N; i++) d += ` L ${pts[i].x} ${pts[i].y}`;
    strap.setAttribute("d", d); strapText.setAttribute("d", d);
    const prev = pts[N - 1];
    const ang = Math.atan2(-(last.x - prev.x), last.y - prev.y);
    card.style.transform = `translate3d(${last.x - W / 2}px,${last.y}px,0) rotate(${ang}rad)`;
    cap.style.transform = `translate3d(${last.x - W / 2}px,${last.y + H + 16}px,0)`;
  }

  function loop() {
    step(); draw();
    let sp = 0;
    for (const p of pts) sp = Math.max(sp, Math.hypot(p.x - p.px, p.y - p.py));
    rest = sp < 0.03 && !dragging ? rest + 1 : 0;
    if (rest > 90) { running = false; return; }
    requestAnimationFrame(loop);
  }
  function wake() { if (!running && started && !reduce) { running = true; rest = 0; requestAnimationFrame(loop); } }

  function begin() {
    started = true; card.classList.add("live");
    if (reduce) {
      for (let i = 0; i <= N; i++) { pts[i].x = ax; pts[i].y = ay + i * SEG; pts[i].px = pts[i].x; pts[i].py = pts[i].y; }
      draw(); cap.style.opacity = 1; return;
    }
    wake();
    setTimeout(() => (cap.style.opacity = 1), 1500);
  }

  card.addEventListener("pointerdown", e => {
    if (reduce) return;
    dragging = true; card.classList.add("grab"); card.setPointerCapture(e.pointerId);
    const m = toLocal(e);
    grabDX = m.x - last.x; grabDY = m.y - last.y; tx = m.x; ty = m.y;
    wake(); e.preventDefault();
  });
  card.addEventListener("pointermove", e => { if (dragging) { const m = toLocal(e); tx = m.x; ty = m.y; } });
  const release = () => {
    if (!dragging) return;
    dragging = false; card.classList.remove("grab");
    // scale the throw speed down so the card cannot leave the screen
    last.px = last.x - (last.x - last.px) * 0.45;
    last.py = last.y - (last.y - last.py) * 0.45;
    wake();
  };
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);
  addEventListener("resize", () => { wake(); });

  draw();
  document.addEventListener("loaded", () => setTimeout(begin, 150), { once: true });
}

/* ---------------- EFFECT 2: mask reveal ---------------- */
function maskReveal() {
  const f = $("#reveal"), ring = $("#rRing");
  let mx = 0.5, my = 0.5, cx = 0.5, cy = 0.5, r = 0, tr = 0, running = false;
  const w = () => f.clientWidth;
  function frame() {
    cx = lerp(cx, mx, 0.18); cy = lerp(cy, my, 0.18); r = lerp(r, tr, 0.18);
    f.style.setProperty("--mx", cx * 100 + "%");
    f.style.setProperty("--my", cy * 100 + "%");
    f.style.setProperty("--r", r + "px");
    ring.style.left = cx * 100 + "%"; ring.style.top = cy * 100 + "%";
    ring.style.width = ring.style.height = r * 2 + "px";
    if (Math.abs(r - tr) < 0.2 && Math.abs(cx - mx) < 0.001 && Math.abs(cy - my) < 0.001) { running = false; if (tr === 0) ring.style.opacity = 0; return; }
    requestAnimationFrame(frame);
  }
  const go = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
  const pos = e => { const b = f.getBoundingClientRect(); mx = (e.clientX - b.left) / b.width; my = (e.clientY - b.top) / b.height; };
  f.addEventListener("pointerenter", e => { pos(e); tr = w() * 0.2; ring.style.opacity = 1; document.body.classList.add("no-cur"); go(); });
  f.addEventListener("pointermove", e => { pos(e); go(); });
  f.addEventListener("pointerdown", e => { pos(e); tr = w() * 0.32; go(); });
  f.addEventListener("pointerup", () => { tr = w() * 0.2; go(); });
  if (!fine) { const cap = document.getElementById("revealCap"); if (cap) cap.textContent = "TOUCH THE PHOTO"; }
  f.addEventListener("pointercancel", () => { tr = 0; document.body.classList.remove("no-cur"); go(); });
  f.addEventListener("pointerleave", () => { tr = 0; document.body.classList.remove("no-cur"); go(); });
}

/* ---------------- EFFECT 4: cursor ring ---------------- */
function cursor() {
  if (!fine || reduce) return;
  document.body.classList.add("has-cur");
  const root = $("#cur"), dot = $(".dot", root), ring = $(".ring", root), halo = $(".halo", root);
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, hx = x, hy = y, shown = false;
  addEventListener("pointermove", e => { x = e.clientX; y = e.clientY; if (!shown) { rx = hx = x; ry = hy = y; shown = true; root.style.opacity = 1; } }, { passive: true });
  root.style.opacity = 0;
  const sel = "a,button,video,iframe,#card,.card-w,.reveal,.copy";
  document.addEventListener("pointerover", e => { root.classList.toggle("big", !!e.target.closest(sel)); });
  (function loop() {
    rx = lerp(rx, x, 0.2); ry = lerp(ry, y, 0.2);
    hx = lerp(hx, x, 0.12); hy = lerp(hy, y, 0.12);
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    halo.style.transform = `translate3d(${hx}px,${hy}px,0)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------------- work rail arrows ---------------- */
function rail() {
  const r = $("#rail");
  const by = dir => r.scrollBy({ left: dir * (r.firstElementChild?.clientWidth || 400) * 1.05, behavior: "smooth" });
  $("#railPrev").addEventListener("click", () => by(-1));
  $("#railNext").addEventListener("click", () => by(1));
}

/* ---------------- process timeline ---------------- */
function process() {
  const tl = $("#timeline"), ph = $("#playhead"), steps = [...document.querySelectorAll("#steps li")];
  let ticking = false;
  function update() {
    ticking = false;
    const b = tl.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh - b.top) / (vh * 0.9)));
    if (!reduce) tl.style.transform = `rotateX(${(1 - p) * 34}deg) scale(${0.95 + p * 0.05})`;
    const prog = Math.min(1, Math.max(0, (vh * 0.85 - b.top) / (vh * 0.6)));
    const range = tl.clientWidth - 56 - 16;
    ph.style.transform = `translateX(${prog * range}px)`;
    const on = Math.min(steps.length, Math.ceil(prog * steps.length + 0.001));
    steps.forEach((s, i) => s.classList.toggle("on", i < on));
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
  update();
}

/* ---------------- image fallback: try assets/x, then x in the main folder ---------------- */
function imageFallback() {
  document.querySelectorAll("img").forEach(img => {
    const orig = img.getAttribute("src") || "";
    const flat = orig.split("/").pop();
    let tried = 0;
    const next = () => {
      tried++;
      if (tried === 1 && flat && flat !== orig) img.src = flat;
      else if (tried === 2) img.src = "/" + orig;
      else img.classList.add("failed");
    };
    img.addEventListener("error", next);
    if (img.complete && img.naturalWidth === 0) next();
  });
}

/* ---------------- go ---------------- */
fill();
imageFallback();
loader();
navAndProgress();
idCard();
maskReveal();
cursor();
rail();
process();
