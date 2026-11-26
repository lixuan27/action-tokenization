/* ==========================================================================
   Action Tokenization (of What?) — Living Architectural Blueprint Engine
   Pure-light 60fps HiDPI Canvas visualizations framed in Swiss drafting
   borders (1–8 × A–D), powered 100% by window.BLOG_DATA. Zero dark boxes.
   ========================================================================== */
(function () {
  'use strict';

  const C = {
    paper: '#FFFFFF',
    paper2: '#F8F9FA',
    grid: '#ECEFF3',
    rule: '#DADCE0',
    rule2: '#E8EAED',
    ink: '#202124',
    ink2: '#3C4043',
    ink3: '#5F6368',
    blue: '#1A73E8',
    blueSoft: '#E8F0FE',
    blueMid: '#4285F4',
    amber: '#D97706',
    amberSoft: '#FEF3E2',
    amberLt: '#F59E0B',
    teal: '#0F766E',
    green: '#15803D',
    greenSoft: '#E6F4EA',
    red: '#C5221F',
    redSoft: '#FCE8E6',
    purple: '#6D28D9',
    slate: '#64748B',
  };

  function fmtPct(v, d = 1) { return (v * 100).toFixed(d) + '%'; }

  function setupHiDPI(canvas, logicalW, logicalH) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(logicalW * dpr);
    canvas.height = Math.round(logicalH * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  // Swiss Engineering-Drawing Coordinate Frame (1–8 cols, A–D rows)
  function drawBlueprintFrame(ctx, W, H, cols = 8, rows = 4) {
    const m = 18;
    ctx.fillStyle = C.paper;
    ctx.fillRect(0, 0, W, H);

    // Outer & inner technical border
    ctx.strokeStyle = '#D2D6DC';
    ctx.lineWidth = 1;
    ctx.strokeRect(2.5, 2.5, W - 5, H - 5);
    ctx.strokeStyle = '#E2E6EC';
    ctx.strokeRect(m + 0.5, m + 0.5, W - 2 * m - 1, H - 2 * m - 1);

    const iw = W - 2 * m, ih = H - 2 * m;
    ctx.font = '500 9px "JetBrains Mono", monospace';
    ctx.fillStyle = '#9AA0A6';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Column ticks & numbers 1..8
    for (let i = 0; i < cols; i++) {
      const xMid = m + (i + 0.5) * (iw / cols);
      ctx.fillText(String(i + 1), xMid, 10.5);
      ctx.fillText(String(i + 1), xMid, H - 10);
      if (i > 0) {
        const xDiv = m + i * (iw / cols);
        ctx.strokeStyle = '#E2E6EC';
        ctx.beginPath();
        ctx.moveTo(xDiv, 3); ctx.lineTo(xDiv, m);
        ctx.moveTo(xDiv, H - m); ctx.lineTo(xDiv, H - 3);
        ctx.stroke();
      }
    }

    // Row ticks & letters A..D
    const letters = 'ABCDEFGH';
    for (let j = 0; j < rows; j++) {
      const yMid = m + (j + 0.5) * (ih / rows);
      ctx.fillText(letters[j], 10.5, yMid);
      ctx.fillText(letters[j], W - 10, yMid);
      if (j > 0) {
        const yDiv = m + j * (ih / rows);
        ctx.strokeStyle = '#E2E6EC';
        ctx.beginPath();
        ctx.moveTo(3, yDiv); ctx.lineTo(m, yDiv);
        ctx.moveTo(W - m, yDiv); ctx.lineTo(W - 3, yDiv);
        ctx.stroke();
      }
    }
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
  }

  function showTip(tipEl, canvas, clientX, clientY, html) {
    if (!tipEl) return;
    const br = canvas.getBoundingClientRect();
    tipEl.innerHTML = html;
    tipEl.classList.add('show');
    const x = clientX - br.left + 14;
    const y = clientY - br.top - 12;
    const tw = tipEl.offsetWidth || 180;
    const th = tipEl.offsetHeight || 68;
    tipEl.style.left = Math.min(Math.max(8, x), Math.max(8, br.width - tw - 10)) + 'px';
    tipEl.style.top = (y + th > br.height ? Math.max(8, y - th - 10) : Math.max(8, y)) + 'px';
  }
  function hideTip(tipEl) { if (tipEl) tipEl.classList.remove('show'); }

  // =========================================================================
  // 0. EDITORIAL CHROME: Progress Bar, Left Sticky Rail, Footnotes, BibTeX
  // =========================================================================
  function initChrome() {
    const bar = document.getElementById('scroll-progress');
    const railLinks = [...document.querySelectorAll('.ar-rail a')];
    const anchors = railLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = pct.toFixed(2) + '%';
      const y = window.scrollY + 140;
      let activeId = anchors[0] ? anchors[0].id : 'intro';
      for (const sec of anchors) {
        if (sec.offsetTop <= y) activeId = sec.id;
      }
      railLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Auto-wire hover footnotes + bottom 2-column reference list
    const notesMap = new Map();
    document.querySelectorAll('aside.fnote[data-n]').forEach((a) => notesMap.set(a.dataset.n, a.innerHTML));
    let activePop = null;
    const closePop = () => { if (activePop) { activePop.remove(); activePop = null; } };

    document.querySelectorAll('sup.fn').forEach((sup) => {
      const nums = sup.textContent.trim().split(',').map((s) => s.trim());
      sup.setAttribute('tabindex', '0');
      const open = () => {
        closePop();
        const html = nums.map((n) => notesMap.get(n) ? `<div><b>[${n}]</b> ${notesMap.get(n)}</div>` : '').join('<hr style="border:0;border-top:1px solid #E8EAED;margin:6px 0;">');
        if (!html) return;
        const pop = document.createElement('div');
        pop.className = 'fnpop';
        pop.innerHTML = html;
        document.body.appendChild(pop);
        const r = sup.getBoundingClientRect();
        const pw = Math.min(350, window.innerWidth - 24);
        pop.style.left = Math.min(window.innerWidth - pw - 12, Math.max(12, r.left - 24)) + 'px';
        pop.style.top = (r.bottom + 8 + pop.offsetHeight > window.innerHeight ? Math.max(12, r.top - pop.offsetHeight - 8) : r.bottom + 8) + 'px';
        activePop = pop;
      };
      sup.addEventListener('mouseenter', open);
      sup.addEventListener('focus', open);
      sup.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = document.getElementById(`ref-${nums[0]}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
    document.addEventListener('click', closePop);
    document.addEventListener('scroll', closePop, { passive: true });

    const ol = document.getElementById('notes-list');
    if (ol) {
      [...notesMap.keys()].sort((a, b) => Number(a) - Number(b)).forEach((k) => {
        const li = document.createElement('li');
        li.id = `ref-${k}`;
        li.innerHTML = `<b>[${k}]</b><div>${notesMap.get(k)}</div>`;
        ol.appendChild(li);
      });
    }

    const copyBtn = document.getElementById('copy-bib');
    const bibEl = document.getElementById('bib-text');
    if (copyBtn && bibEl) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(bibEl.textContent).then(() => {
          copyBtn.textContent = 'Copied ✓';
          setTimeout(() => { copyBtn.textContent = 'Copy BibTeX'; }, 1500);
        });
      });
    }
  }

  // =========================================================================
  // PLATE 00 · LIVING 3D ISOMETRIC REPRESENTATION SURFACE (Wenhao Chai Style)
  // =========================================================================
  function initPlateHero(D) {
    const canvas = document.getElementById('plate-hero');
    const tipEl = document.getElementById('tip-hero');
    const btnPlay = document.getElementById('hero-play');
    const btnAngle = document.getElementById('hero-angle');
    if (!canvas) return;

    const W = 840, H = 440;
    const ctx = setupHiDPI(canvas, W, H);

    let playing = true;
    let orbitMode = false;
    let phase = 0;
    let hoverPin = -1;

    // Empirical surface z(u, v) in [0..1]:
    // u = Offline Fidelity (0 = coarse, 1 = near-lossless 1mm)
    // v = Physical Grounding (0 = ungrounded joint/flat, 1 = causal + task-space C1 + sparse Newton force)
    function surfaceZ(u, v) {
      const ridge = 0.08 + 0.72 * Math.pow(v, 1.35) + 0.09 * Math.sin(u * Math.PI) * (0.35 + 0.65 * v);
      const dip = -0.08 * Math.exp(-Math.pow((u - 0.85) / 0.28, 2)) * (1 - v); // Bin256 low-SR trap at high offline fidelity!
      return Math.max(0.04, Math.min(0.95, ridge + dip));
    }

    // Verified empirical pins from our 9 experiments
    const pins = [
      { name: 'Holo Graph-FSQ', u: 0.22, v: 0.08, sr: 0.068, note: '1,300 GPU·h neural FSQ · Joint', col: C.slate },
      { name: 'Bin256 (EEF)', u: 0.90, v: 0.14, sr: 0.170, note: '1.2 mm offline MAE · 224 tok/win', col: C.red },
      { name: 'Cover (Joint h32)', u: 0.44, v: 0.24, sr: 0.193, note: 'Same Qwen3-VL-2B · 5 joint islands', col: C.slate },
      { name: 'OAT (Joint)', u: 0.50, v: 0.68, sr: 0.605, note: '16→8 tok progressive coarse→fine', col: C.purple },
      { name: 'FAST (EEF)', u: 0.74, v: 0.76, sr: 0.700, note: 'DCT spectral EEF (3/4 suites)', col: C.amber },
      { name: 'Cover (EEF)', u: 0.66, v: 0.86, sr: 0.739, note: 'Causal EEF · 50% early stop 76%', col: C.blue },
      { name: 'C1F+D3F Force', u: 0.84, v: 0.96, sr: 0.817, note: '30.8% sparse Newton pulses · 3-arm', col: C.green },
    ];

    // Smooth cobalt (#1A73E8) -> ivory (#EFF4FC) -> terracotta (#D97706) shading
    function surfColor(z) {
      if (z < 0.45) {
        const t = z / 0.45;
        const r = Math.round(40 + (225 - 40) * t);
        const g = Math.round(112 + (235 - 112) * t);
        const b = Math.round(230 + (248 - 230) * t);
        return `rgba(${r},${g},${b},0.88)`;
      } else {
        const t = (z - 0.45) / 0.55;
        const r = Math.round(225 + (234 - 225) * t);
        const g = Math.round(235 + (146 - 235) * t);
        const b = Math.round(248 + (56 - 248) * t);
        return `rgba(${r},${g},${b},0.90)`;
      }
    }

    function project(u, v, z, yaw) {
      // Center around (0.5, 0.5)
      const x0 = (u - 0.5) * 1.15;
      const y0 = (v - 0.5) * 1.15;
      const ca = Math.cos(yaw), sa = Math.sin(yaw);
      const xr = x0 * ca - y0 * sa;
      const yr = x0 * sa + y0 * ca;
      const pitch = 0.50;
      const sx = W * 0.50 + xr * 265;
      const sy = H * 0.64 + yr * 165 * Math.sin(pitch) - z * 192;
      return [sx, sy, yr];
    }

    // Animated flow particles climbing along physical grounding ridge
    const particles = Array.from({ length: 18 }, (_, i) => ({
      u: 0.16 + (i % 6) * 0.14,
      v: (i / 18),
      speed: 0.13 + (i % 4) * 0.025,
    }));

    let screenPins = [];
    let lastTs = performance.now();

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      if (playing) phase += dt;

      const yaw = orbitMode ? (-0.62 + Math.sin(phase * 0.45) * 0.38) : (-0.58 + Math.sin(phase * 0.55) * 0.08);

      drawBlueprintFrame(ctx, W, H, 8, 4);

      // Subtle architectural cross-hatched base skirt (like Wenhao Chai's cutaway pedestal!)
      const Nu = 24, Nv = 18;
      // Draw front-facing cutaway wall along v=0 and u=1
      const drawCutaway = (pts, hatchStep) => {
        ctx.save();
        ctx.beginPath();
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
        ctx.closePath();
        ctx.fillStyle = 'rgba(248,249,250,0.92)';
        ctx.fill();
        ctx.clip();
        ctx.strokeStyle = 'rgba(180,188,200,0.45)';
        ctx.lineWidth = 0.8;
        for (let hx = -H; hx < W + H; hx += hatchStep) {
          ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx + H * 0.6, H); ctx.stroke();
        }
        ctx.restore();
        ctx.strokeStyle = '#80868B';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
        ctx.closePath();
        ctx.stroke();
      };

      // Draw 3D coordinate axes with architectural arrow tips
      const o = project(0, 0, 0, yaw);
      const axU = project(1.12, 0, 0, yaw);
      const axV = project(0, 1.12, 0, yaw);
      const axZ = project(0, 0, 1.08, yaw);

      // Draw axis arrows (labels drawn after cutaway below)
      ctx.strokeStyle = '#5F6368';
      ctx.lineWidth = 1.15;
      [[o, axU], [o, axV], [o, axZ]].forEach(([a, b]) => {
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
        ctx.fillStyle = '#5F6368';
        ctx.beginPath();
        ctx.moveTo(b[0], b[1]);
        ctx.lineTo(b[0] - 7 * Math.cos(ang - 0.35), b[1] - 7 * Math.sin(ang - 0.35));
        ctx.lineTo(b[0] - 7 * Math.cos(ang + 0.35), b[1] - 7 * Math.sin(ang + 0.35));
        ctx.closePath();
        ctx.fill();
      });

      // Build and depth-sort mesh quads
      const quads = [];
      for (let i = 0; i < Nu; i++) {
        for (let j = 0; j < Nv; j++) {
          const u0 = i / Nu, u1 = (i + 1) / Nu;
          const v0 = j / Nv, v1 = (j + 1) / Nv;
          const p00 = project(u0, v0, surfaceZ(u0, v0), yaw);
          const p10 = project(u1, v0, surfaceZ(u1, v0), yaw);
          const p11 = project(u1, v1, surfaceZ(u1, v1), yaw);
          const p01 = project(u0, v1, surfaceZ(u0, v1), yaw);
          const depth = (p00[2] + p10[2] + p11[2] + p01[2]) * 0.25;
          const zMid = (surfaceZ(u0, v0) + surfaceZ(u1, v1)) * 0.5;
          quads.push({ pts: [p00, p10, p11, p01], depth, zMid });
        }
      }
      quads.sort((a, b) => a.depth - b.depth);

      quads.forEach((q) => {
        ctx.beginPath();
        ctx.moveTo(q.pts[0][0], q.pts[0][1]);
        ctx.lineTo(q.pts[1][0], q.pts[1][1]);
        ctx.lineTo(q.pts[2][0], q.pts[2][1]);
        ctx.lineTo(q.pts[3][0], q.pts[3][1]);
        ctx.closePath();
        ctx.fillStyle = surfColor(q.zMid);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.42)';
        ctx.lineWidth = 0.65;
        ctx.stroke();
      });

      // Cutaway skirt along front edge (v=1 or u=1 facing camera)
      const wallU1 = [];
      for (let j = 0; j <= Nv; j++) wallU1.push(project(1, j / Nv, surfaceZ(1, j / Nv), yaw));
      wallU1.push(project(1, 1, 0, yaw));
      wallU1.push(project(1, 0, 0, yaw));
      drawCutaway(wallU1, 7);

      // Axis labels drawn AFTER cutaway so none are ever occluded
      ctx.font = '600 10.5px "JetBrains Mono", monospace';
      ctx.fillStyle = C.ink3;
      ctx.textAlign = 'right';
      ctx.fillText('CLOSED-LOOP SUCCESS', axZ[0] - 10, axZ[1] + 5);
      ctx.textAlign = 'left';
      ctx.fillText('OFFLINE FIDELITY (1/MSE)', axU[0] + 8, axU[1] + 14);
      ctx.textAlign = 'center';
      ctx.fillText('PHYSICAL GROUNDING (CAUSAL · 3D · FORCE)', axV[0] - 8, axV[1] + 18);
      ctx.textAlign = 'left';

      // Luminous iso-ridge trajectory line running up the surface
      ctx.strokeStyle = C.blue;
      ctx.lineWidth = 2.0;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let k = 0; k <= 30; k++) {
        const t = k / 30;
        const u = 0.22 + 0.64 * t;
        const v = 0.08 + 0.88 * t;
        const p = project(u, v, surfaceZ(u, v) + 0.015, yaw);
        k === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Flowing particles ascending the grounding gradient
      particles.forEach((pt) => {
        if (playing) {
          pt.v += pt.speed * dt;
          if (pt.v > 0.98) pt.v = 0.03;
        }
        const z = surfaceZ(pt.u, pt.v) + 0.012;
        const sp = project(pt.u, pt.v, z, yaw);
        ctx.fillStyle = pt.v > 0.55 ? 'rgba(217,119,6,0.72)' : 'rgba(26,115,232,0.72)';
        ctx.beginPath();
        ctx.arc(sp[0], sp[1], 2.1, 0, Math.PI * 2);
        ctx.fill();
      });

      // Empirical pins with crisp plumb lines & de-overlapped blueprint labels
      screenPins = pins.map((pin, idx) => {
        const zSurf = surfaceZ(pin.u, pin.v);
        const zPin = Math.max(zSurf, pin.sr);
        const pTop = project(pin.u, pin.v, zPin, yaw);
        const pBase = project(pin.u, pin.v, zSurf, yaw);
        return { ...pin, idx, tx: pTop[0], ty: pTop[1], bx: pBase[0], by: pBase[1] };
      });

      screenPins.forEach((p) => {
        const isHov = (p.idx === hoverPin);
        ctx.strokeStyle = 'rgba(32,33,36,0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.beginPath(); ctx.moveTo(p.bx, p.by); ctx.lineTo(p.tx, p.ty); ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = C.paper;
        ctx.strokeStyle = p.col;
        ctx.lineWidth = isHov ? 2.8 : 2.1;
        ctx.beginPath();
        ctx.arc(p.tx, p.ty, isHov ? 6.5 : 5.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Short crisp de-overlapped labels on key landmarks
        if (['Bin256 (EEF)', 'OAT (Joint)', 'Cover (EEF)', 'C1F+D3F Force', 'Holo Graph-FSQ'].includes(p.name) || isHov) {
          const right = (p.name === 'C1F+D3F Force' || p.name === 'Bin256 (EEF)');
          ctx.font = '600 10.5px "Hanken Grotesk", sans-serif';
          ctx.fillStyle = isHov ? C.ink : C.ink2;
          ctx.textAlign = right ? 'left' : 'right';
          const lx = right ? p.tx + 9 : p.tx - 9;
          const ly = p.name === 'Cover (EEF)' ? p.ty - 12 : (p.name === 'C1F+D3F Force' ? p.ty - 3 : (p.name === 'Bin256 (EEF)' ? p.ty + 14 : p.ty + 3));
          ctx.fillText(`${p.name} · ${Math.round(p.sr * 100)}%`, lx, ly);
          ctx.textAlign = 'left';
        }
      });

      // Top-right blueprint callout stamp
      ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.fillStyle = C.blue;
      ctx.textAlign = 'right';
      ctx.fillText('9 CONTROLLED STUDIES · FIXED QWEN3-VL-2B', W - 30, 38);
      ctx.fillStyle = C.ink3;
      ctx.fillText('RIDGE: CAUSAL → TASK-SPACE C1 → SPARSE NEWTON FORCE', W - 30, 53);
      ctx.textAlign = 'left';

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (evt) => {
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      let best = -1, bestD = 260;
      screenPins.forEach((p) => {
        const d2 = (p.tx - mx) ** 2 + (p.ty - my) ** 2;
        if (d2 < bestD) { bestD = d2; best = p.idx; }
      });
      hoverPin = best;
      if (best >= 0) {
        const p = screenPins[best];
        showTip(tipEl, canvas, evt.clientX, evt.clientY, `
          <div class="th">${p.name}</div>
          <div class="tr"><span>Closed-Loop SR</span><b>${fmtPct(p.sr)}</b></div>
          <div class="tr"><span>Notes</span><b>${p.note}</b></div>
        `);
      } else {
        hideTip(tipEl);
      }
    });
    canvas.addEventListener('mouseleave', () => { hoverPin = -1; hideTip(tipEl); });

    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        playing = !playing;
        btnPlay.textContent = playing ? '❚❚ Animate Surface' : '▶ Animate Surface';
        btnPlay.classList.toggle('on', playing);
      });
    }
    if (btnAngle) {
      btnAngle.addEventListener('click', () => {
        orbitMode = !orbitMode;
        btnAngle.classList.toggle('on', orbitMode);
      });
    }
    requestAnimationFrame(draw);
  }

  // =========================================================================
  // PLATE 01 · LIVING ANYTIME TOKEN STREAM & SINGLE-TOKEN BLAST (Exp 1 & 6)
  // =========================================================================
  function initPlateAnytime(D) {
    const canvas = document.getElementById('plate-anytime');
    const slider = document.getElementById('anytime-slider');
    const valLbl = document.getElementById('anytime-val');
    const sweepBtn = document.getElementById('anytime-sweep');
    const modeBtns = document.querySelectorAll('[data-p1-mode]');
    const pCodecBtns = document.querySelectorAll('[data-pcodec]');
    const ribbon = document.getElementById('tok-ribbon');
    if (!canvas) return;

    const W = 840, H = 470;
    const ctx = setupHiDPI(canvas, W, H);
    const codecStyle = {
      'Cover (EEF)': { col: C.blue, w: 2.8 },
      'OAT': { col: C.purple, w: 2.3 },
      'FAST': { col: C.amber, w: 2.3 },
      'Bin256': { col: C.teal, w: 2.0 },
      'QueST': { col: C.slate, w: 1.6 },
    };

    let mode = 'anytime';
    let budgetPct = 50;
    let sweeping = true;
    let sweepDir = 1;
    let pCodec = 'FAST';
    let pPosIdx = 0;
    let clock = 0;
    let lastTs = performance.now();

    function interpHero(morphMap, pct) {
      const keys = Object.keys(morphMap).map(Number).sort((a, b) => a - b);
      if (pct <= keys[0]) return morphMap[String(keys[0])];
      if (pct >= keys[keys.length - 1]) return morphMap[String(keys[keys.length - 1])];
      let lo = keys[0], hi = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (pct >= keys[i] && pct <= keys[i + 1]) { lo = keys[i]; hi = keys[i + 1]; break; }
      }
      const a = (pct - lo) / Math.max(1, hi - lo);
      const A = morphMap[String(lo)], B = morphMap[String(hi)];
      return A.map((p, idx) => [p[0] + (B[idx][0] - p[0]) * a, p[1] + (B[idx][1] - p[1]) * a]);
    }
    function interpStat(curve, pct, f) {
      const s = [...curve].sort((a, b) => a.budget_pct - b.budget_pct);
      if (pct <= s[0].budget_pct) return s[0][f];
      if (pct >= s[s.length - 1].budget_pct) return s[s.length - 1][f];
      for (let i = 0; i < s.length - 1; i++) {
        if (pct >= s[i].budget_pct && pct <= s[i + 1].budget_pct) {
          const t = (pct - s[i].budget_pct) / (s[i + 1].budget_pct - s[i].budget_pct);
          return s[i][f] + (s[i + 1][f] - s[i][f]) * t;
        }
      }
      return s[0][f];
    }

    function buildRibbon() {
      if (!ribbon || !D.exp1 || !D.exp1.codecs || !D.exp1.codecs[pCodec]) return;
      const bins = D.exp1.codecs[pCodec].perturbation_by_position || [];
      ribbon.innerHTML = '<span style="font-size:12px;font-weight:600;color:#5F6368;margin-right:4px;">Detonate token slot:</span>';
      bins.forEach((b, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tok-chip' + (idx === pPosIdx ? ' hit' : '');
        btn.textContent = `pos ${Math.round(b.rel_pos * 100)}% (${Math.round(b.max_dev_p50_mm)} mm)`;
        btn.addEventListener('click', () => { pPosIdx = idx; buildRibbon(); });
        ribbon.appendChild(btn);
      });
    }

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      clock += dt;

      if (mode === 'anytime' && sweeping) {
        budgetPct += sweepDir * dt * 11.5;
        if (budgetPct >= 100) { budgetPct = 100; sweepDir = -1; }
        if (budgetPct <= 15) { budgetPct = 15; sweepDir = 1; }
        if (slider) slider.value = Math.round(budgetPct);
        if (valLbl) valLbl.textContent = `${Math.round(budgetPct)}%`;
      }

      drawBlueprintFrame(ctx, W, H, 8, 4);

      // 1. TOP STREAM BAND: Animated discrete token stream passing through Budget Gate
      const sy0 = 32, sh = 46, sx0 = 34, sx1 = W - 34;
      ctx.fillStyle = C.paper2;
      ctx.strokeStyle = C.rule2;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(sx0, sy0, sx1 - sx0, sh, 6); ctx.fill(); ctx.stroke();

      // VLM emitter pill on left
      ctx.fillStyle = C.blueSoft;
      ctx.strokeStyle = 'rgba(26,115,232,0.4)';
      ctx.beginPath(); ctx.roundRect(sx0 + 8, sy0 + 9, 96, 28, 5); ctx.fill(); ctx.stroke();
      ctx.font = '600 10.5px "JetBrains Mono", monospace';
      ctx.fillStyle = C.blue;
      ctx.fillText('QWEN3-VL-2B', sx0 + 18, sy0 + 27);

      // 24 discrete token chips streaming across
      const tokStart = sx0 + 118, tokEnd = sx1 - 14;
      const nTok = 24;
      const gateFrac = mode === 'anytime' ? (budgetPct / 100) : ((pPosIdx + 0.5) / 5);
      const gateX = tokStart + gateFrac * (tokEnd - tokStart);
      const stepW = (tokEnd - tokStart) / nTok;

      for (let i = 0; i < nTok; i++) {
        const tx = tokStart + i * stepW + 2;
        const tw = stepW - 5;
        const active = (i / nTok) <= gateFrac;
        const isHit = (mode === 'perturb' && Math.abs((i + 0.5) / nTok - gateFrac) < 0.045);
        const wave = 0.5 + 0.5 * Math.sin(clock * 4 - i * 0.45);
        if (isHit) {
          ctx.fillStyle = C.redSoft;
          ctx.strokeStyle = C.red;
        } else if (mode === 'anytime' && active) {
          ctx.fillStyle = `rgba(26,115,232,${0.14 + 0.14 * wave})`;
          ctx.strokeStyle = C.blue;
        } else if (mode === 'perturb') {
          ctx.fillStyle = C.blueSoft;
          ctx.strokeStyle = 'rgba(26,115,232,0.35)';
        } else {
          ctx.fillStyle = C.paper;
          ctx.strokeStyle = '#D2D6DC';
        }
        ctx.lineWidth = isHit ? 1.8 : 1;
        ctx.beginPath(); ctx.roundRect(tx, sy0 + 13, tw, 20, 3.5); ctx.fill(); ctx.stroke();
      }

      // Vertical glowing Budget / Detonation Gate
      ctx.strokeStyle = mode === 'anytime' ? C.blue : C.red;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(gateX, sy0 - 2); ctx.lineTo(gateX, sy0 + sh + 2); ctx.stroke();
      ctx.fillStyle = mode === 'anytime' ? C.blue : C.red;
      ctx.font = '600 9.5px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(mode === 'anytime' ? `BUDGET ${Math.round(budgetPct)}%` : '1-TOK BLAST', Math.min(tokEnd - 34, Math.max(tokStart + 34, gateX)), sy0 - 5);
      ctx.textAlign = 'left';

      // 2. MAIN LEFT ARENA: Trajectory Morphing or Blast Shockwave
      const ax = 34, ay = 94, aw = 452, ah = 338;
      ctx.fillStyle = C.paper;
      ctx.strokeStyle = C.rule2;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(ax, ay, aw, ah, 6); ctx.fill(); ctx.stroke();

      // Subtle internal blueprint grid
      ctx.strokeStyle = C.grid;
      ctx.lineWidth = 0.8;
      for (let i = 1; i < 6; i++) {
        ctx.beginPath(); ctx.moveTo(ax + (aw * i) / 6, ay + 28); ctx.lineTo(ax + (aw * i) / 6, ay + ah - 32); ctx.stroke();
      }
      for (let j = 1; j < 5; j++) {
        ctx.beginPath(); ctx.moveTo(ax + 16, ay + 28 + ((ah - 60) * j) / 5); ctx.lineTo(ax + aw - 16, ay + 28 + ((ah - 60) * j) / 5); ctx.stroke();
      }

      if (mode === 'anytime' && D.exp6_morph && D.exp6_morph.hero_gt_xyz_mm) {
        const gt = D.exp6_morph.hero_gt_xyz_mm;
        const codecs = D.exp6_morph.codecs;
        const xs = gt.map((p) => p[0]), ys = gt.map((p) => p[1]);
        const pad = 28;
        const xMin = Math.min(...xs) - pad, xMax = Math.max(...xs) + pad;
        const yMin = Math.min(...ys) - pad, yMax = Math.max(...ys) + pad;
        const mx = (v) => ax + 28 + ((Math.max(xMin - 24, Math.min(xMax + 24, v)) - xMin) / Math.max(1, xMax - xMin)) * (aw - 56);
        const my = (v) => (ay + ah - 40) - ((Math.max(yMin - 24, Math.min(yMax + 24, v)) - yMin) / Math.max(1, yMax - yMin)) * (ah - 82);

        ctx.fillStyle = C.ink;
        ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText(`Real 32-Step LIBERO EEF Path @ ${Math.round(budgetPct)}% Token Budget`, ax + 14, ay + 20);

        // Ground truth dashed line
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = '#9AA0A6';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        gt.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1])));
        ctx.stroke();
        ctx.restore();

        // Step 16 execution cutoff ring
        const p16 = gt[15];
        ctx.fillStyle = C.paper;
        ctx.strokeStyle = C.ink;
        ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.arc(mx(p16[0]), my(p16[1]), 5.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = C.ink3;
        ctx.font = '500 9.5px "JetBrains Mono", monospace';
        ctx.fillText('step 16 cutoff', mx(p16[0]) + 9, my(p16[1]) + 3);

        // All 5 morphed codec trajectories
        ['QueST', 'Bin256', 'FAST', 'OAT', 'Cover (EEF)'].forEach((cn) => {
          const cd = codecs[cn];
          if (!cd) return;
          const path = interpHero(cd.hero_morph_xyz_mm, budgetPct);
          const st = codecStyle[cn];
          ctx.strokeStyle = st.col;
          ctx.lineWidth = st.w;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.beginPath();
          path.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1])));
          ctx.stroke();
          const endP = path[path.length - 1];
          ctx.fillStyle = st.col;
          ctx.beginPath(); ctx.arc(mx(endP[0]), my(endP[1]), 4.0, 0, Math.PI * 2); ctx.fill();
        });

        // Legend along bottom of arena
        let lx = ax + 14;
        Object.entries(codecStyle).forEach(([n, s]) => {
          ctx.fillStyle = s.col;
          ctx.fillRect(lx, ay + ah - 18, 9, 3.5);
          ctx.fillStyle = C.ink3;
          ctx.font = '500 10px "Hanken Grotesk", sans-serif';
          ctx.fillText(n, lx + 13, ay + ah - 13);
          lx += ctx.measureText(n).width + 25;
        });

        // 3. RIGHT COLUMN: 4 Live MAE cells + Real Exp 6B Closed-Loop Curve
        const rx = 502, rw = W - rx - 34;
        const maeItems = [
          ['Cover (EEF)', interpStat(codecs['Cover (EEF)'].curve, budgetPct, 'mae_first16_mm'), C.blue, 'causal prefix'],
          ['OAT', interpStat(codecs['OAT'].curve, budgetPct, 'mae_first16_mm'), C.purple, 'coarse→fine'],
          ['FAST', interpStat(codecs['FAST'].curve, budgetPct, 'mae_first16_mm'), C.amber, 'global DCT'],
          ['Bin256', interpStat(codecs['Bin256'].curve, budgetPct, 'mae_first16_mm'), C.teal, 'freezes tail'],
        ];
        maeItems.forEach(([nm, val, col, sub], idx) => {
          const cx = rx + (idx % 2) * (rw / 2 + 4);
          const cy = ay + Math.floor(idx / 2) * 66;
          const cw = rw / 2 - 4, ch = 58;
          ctx.fillStyle = C.paper2;
          ctx.strokeStyle = C.rule2;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 6); ctx.fill(); ctx.stroke();
          ctx.font = '600 9.5px "JetBrains Mono", monospace';
          ctx.fillStyle = C.ink3;
          ctx.fillText(nm.toUpperCase(), cx + 10, cy + 16);
          ctx.font = '600 18px "JetBrains Mono", monospace';
          ctx.fillStyle = col;
          ctx.fillText(`${val.toFixed(1)} mm`, cx + 10, cy + 38);
          ctx.font = '400 10px "Hanken Grotesk", sans-serif';
          ctx.fillStyle = C.ink3;
          ctx.fillText(sub, cx + 10, cy + 51);
        });

        // Bottom-Right Inset: Live Qwen3-VL-2B Truncation Curves (Exp 6B)
        const py = ay + 142, ph = ah - 142;
        ctx.fillStyle = C.paper;
        ctx.strokeStyle = C.rule2;
        ctx.beginPath(); ctx.roundRect(rx, py, rw, ph, 6); ctx.fill(); ctx.stroke();
        ctx.font = '600 11px "Hanken Grotesk", sans-serif';
        ctx.fillStyle = C.ink;
        ctx.fillText('Live Qwen3-VL-2B Anytime SR (LIBERO-Spatial)', rx + 12, py + 20);

        const cov = (D.exp6_cover && D.exp6_cover.rows) || [];
        const oat = (D.exp6_oat && D.exp6_oat.rows) || [];
        const pl = rx + 38, pr = rx + rw - 16, pt = py + 34, pb = py + ph - 32;
        const psx = (v) => pl + (v / 58) * (pr - pl);
        const psy = (v) => pb - v * (pb - pt);

        [0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = C.grid;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(pl, psy(y)); ctx.lineTo(pr, psy(y)); ctx.stroke();
          ctx.fillStyle = C.ink3;
          ctx.font = '500 9px "JetBrains Mono", monospace';
          ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 5, psy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0, 15, 30, 45].forEach((x) => ctx.fillText(String(x), psx(x), pb + 13));
        ctx.fillStyle = C.ink3;
        ctx.font = '500 9.5px "Hanken Grotesk", sans-serif';
        ctx.fillText('Action Tokens / Chunk (lower = faster VLM)', (pl + pr) / 2, pb + 25);
        ctx.textAlign = 'left';

        const drawLive = (rows, col, isOat) => {
          const s = [...rows].sort((a, b) => a.mean_tokens_per_chunk - b.mean_tokens_per_chunk);
          if (s.length > 1) {
            ctx.strokeStyle = col;
            ctx.lineWidth = 2.3;
            ctx.beginPath();
            s.forEach((r, i) => i === 0 ? ctx.moveTo(psx(r.mean_tokens_per_chunk), psy(r.success_rate)) : ctx.lineTo(psx(r.mean_tokens_per_chunk), psy(r.success_rate)));
            ctx.stroke();
          }
          s.forEach((r) => {
            const x = psx(r.mean_tokens_per_chunk), y = psy(r.success_rate);
            ctx.fillStyle = C.paper;
            ctx.strokeStyle = col;
            ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.arc(x, y, 4.4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = col;
            ctx.font = '600 9.5px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            const dy = (isOat && r.budget_param === 12) ? 14 : -9;
            ctx.fillText(`${Math.round(r.success_rate * 100)}%`, x, y + dy);
            ctx.textAlign = 'left';
          });
        };
        drawLive(cov, C.blue, false);
        drawLive(oat, C.purple, true);
      } else if (D.exp1 && D.exp1.codecs && D.exp1.codecs[pCodec]) {
        // PERTURBATION BLAST MODE
        const cObj = D.exp1.codecs[pCodec];
        const clean = cObj.hero.clean_xyz_mm;
        const posKey = pPosIdx <= 1 ? 'early' : (pPosIdx <= 3 ? 'mid' : 'late');
        const pert = cObj.hero.perturbed[posKey];
        const bin = cObj.perturbation_by_position[Math.min(pPosIdx, cObj.perturbation_by_position.length - 1)];

        const cxs = clean.map((p) => p[0]), cys = clean.map((p) => p[1]);
        const xMin = Math.min(...cxs) - 55, xMax = Math.max(...cxs) + 55;
        const yMin = Math.min(...cys) - 55, yMax = Math.max(...cys) + 55;
        const mx = (v) => ax + 28 + ((Math.max(xMin - 40, Math.min(xMax + 40, v)) - xMin) / Math.max(1, xMax - xMin)) * (aw - 56);
        const my = (v) => (ay + ah - 40) - ((Math.max(yMin - 40, Math.min(yMax + 40, v)) - yMin) / Math.max(1, yMax - yMin)) * (ah - 82);

        ctx.fillStyle = C.ink;
        ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText(`1-Token Perturbation Blast · ${pCodec} @ Slot ${Math.round(bin.rel_pos * 100)}%`, ax + 14, ay + 20);

        // Clean path
        ctx.strokeStyle = C.blue; ctx.lineWidth = 2.6;
        ctx.beginPath(); clean.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1]))); ctx.stroke();

        // Perturbed path + pulsing shockwave rings!
        const bCol = bin.max_dev_p50_mm > 80 ? C.red : C.amber;
        ctx.strokeStyle = bCol; ctx.lineWidth = 2.8;
        ctx.beginPath(); pert.xyz_mm.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1]))); ctx.stroke();

        const pe = pert.xyz_mm[pert.xyz_mm.length - 1];
        const ringR = 8 + ((clock * 28) % 26);
        ctx.strokeStyle = bCol;
        ctx.globalAlpha = Math.max(0, 1 - (ringR - 8) / 26);
        ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.arc(mx(pe[0]), my(pe[1]), ringR, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.fillStyle = bCol;
        ctx.beginPath(); ctx.arc(mx(pe[0]), my(pe[1]), 5.2, 0, Math.PI * 2); ctx.fill();

        // Right column: 4 blast metrics + position profile bar chart
        const rx = 502, rw = W - rx - 34;
        const stats = [
          ['MEDIAN BLAST (p50)', `${bin.max_dev_p50_mm} mm`, bCol, `at pos ${Math.round(bin.rel_pos * 100)}%`],
          ['TAIL BLAST (p90)', `${bin.max_dev_p90_mm} mm`, C.ink, '90th percentile'],
          ['INVALID FALLBACK', `${(bin.fallback_rate * 100).toFixed(1)}%`, bin.fallback_rate > 0.2 ? C.red : C.green, 'unconstrained swap'],
          ['PHYSICAL RANK', cObj.prc_at_32.toFixed(3), C.blue, `clean ${cObj.recon_pos_mae_mm} mm`],
        ];
        stats.forEach(([lbl, val, col, sub], idx) => {
          const cx = rx + (idx % 2) * (rw / 2 + 4);
          const cy = ay + Math.floor(idx / 2) * 66;
          const cw = rw / 2 - 4, ch = 58;
          ctx.fillStyle = C.paper2; ctx.strokeStyle = C.rule2;
          ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 6); ctx.fill(); ctx.stroke();
          ctx.font = '600 9px "JetBrains Mono", monospace'; ctx.fillStyle = C.ink3; ctx.fillText(lbl, cx + 9, cy + 16);
          ctx.font = '600 17px "JetBrains Mono", monospace'; ctx.fillStyle = col; ctx.fillText(val, cx + 9, cy + 38);
          ctx.font = '400 10px "Hanken Grotesk", sans-serif'; ctx.fillStyle = C.ink3; ctx.fillText(sub, cx + 9, cy + 51);
        });

        // Position sensitivity bars
        const py = ay + 142, ph = ah - 142;
        ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2;
        ctx.beginPath(); ctx.roundRect(rx, py, rw, ph, 6); ctx.fill(); ctx.stroke();
        ctx.fillStyle = C.ink; ctx.font = '600 11px "Hanken Grotesk", sans-serif';
        ctx.fillText(`Blast Radius Across Token Positions (${pCodec})`, rx + 12, py + 20);
        const bins = cObj.perturbation_by_position || [];
        const maxM = Math.max(50, ...bins.map((b) => b.max_dev_p50_mm));
        const bw = (rw - 48) / Math.max(1, bins.length);
        bins.forEach((b, i) => {
          const bh = (b.max_dev_p50_mm / maxM) * (ph - 76);
          const bx = rx + 24 + i * bw + 6;
          const by = py + ph - 32 - bh;
          ctx.fillStyle = i === pPosIdx ? C.red : C.blue;
          ctx.globalAlpha = i === pPosIdx ? 0.92 : 0.45;
          ctx.beginPath(); ctx.roundRect(bx, by, bw - 12, Math.max(4, bh), 3); ctx.fill();
          ctx.globalAlpha = 1;
          ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
          ctx.fillText(`${Math.round(b.rel_pos * 100)}%`, bx + (bw - 12) / 2, py + ph - 16);
          ctx.fillStyle = i === pPosIdx ? C.red : C.ink2;
          ctx.fillText(`${Math.round(b.max_dev_p50_mm)}`, bx + (bw - 12) / 2, by - 5);
          ctx.textAlign = 'left';
        });
      }

      requestAnimationFrame(draw);
    }

    if (slider) {
      slider.addEventListener('input', () => {
        sweeping = false;
        if (sweepBtn) { sweepBtn.textContent = '▶ Auto-Sweep'; sweepBtn.classList.remove('on'); }
        budgetPct = parseInt(slider.value, 10);
        if (valLbl) valLbl.textContent = `${budgetPct}%`;
      });
    }
    if (sweepBtn) {
      sweepBtn.addEventListener('click', () => {
        sweeping = !sweeping;
        sweepBtn.textContent = sweeping ? '❚❚ Auto-Sweep' : '▶ Auto-Sweep';
        sweepBtn.classList.toggle('on', sweeping);
      });
    }
    modeBtns.forEach((b) => b.addEventListener('click', () => {
      mode = b.dataset.p1Mode;
      modeBtns.forEach((x) => x.classList.toggle('on', x === b));
      document.getElementById('p1-anytime-bar').style.display = mode === 'anytime' ? '' : 'none';
      document.getElementById('p1-perturb-bar').style.display = mode === 'perturb' ? 'flex' : 'none';
      if (mode === 'perturb') buildRibbon();
    }));
    pCodecBtns.forEach((b) => b.addEventListener('click', () => {
      pCodec = b.dataset.pcodec;
      pCodecBtns.forEach((x) => x.classList.toggle('on', x === b));
      buildRibbon();
    }));

    requestAnimationFrame(draw);
  }

  // =========================================================================
  // PLATE 02 · LIVING COVERAGE FAN (EMA pass@k) & CONTACT STALL BLUEPRINT
  // =========================================================================
  function initPlateCoverage(D) {
    const canvas = document.getElementById('plate-coverage');
    const tipEl = document.getElementById('tip-coverage');
    const tabs = document.querySelectorAll('#p2-tabs .bp-btn');
    if (!canvas) return;

    const W = 840, H = 410;
    const ctx = setupHiDPI(canvas, W, H);
    let tab = 'anatomy';
    let clock = 0;
    let lastTs = performance.now();
    let lbHotspots = [];

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      clock += dt;

      drawBlueprintFrame(ctx, W, H, 8, 4);
      lbHotspots = [];

      if (tab === 'anatomy') {
        // LEFT PANEL: Live Stochastic Coverage Fan (EMA 30k 93.3% vs Raw 30k 84.0%)
        const lx = 34, ly = 32, lw = 380, lh = 346;
        ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 6); ctx.fill(); ctx.stroke();

        ctx.fillStyle = C.ink; ctx.font = '600 12.5px "Hanken Grotesk", sans-serif';
        ctx.fillText('Stochastic Rollout Coverage (LIBERO-Goal pass@k)', lx + 14, ly + 22);
        ctx.fillStyle = C.ink3; ctx.font = '500 10px "JetBrains Mono", monospace';
        ctx.fillText('VAL CE RISES PAST 12K · EMA SAVES MULTI-MODAL MODES', lx + 14, ly + 37);

        // Origin & Goal Ring inside upper sub-box
        const ox = lx + 44, oy = ly + 128;
        const gx = lx + lw - 54, gy = ly + 116;

        // Target zone ring
        ctx.fillStyle = C.greenSoft;
        ctx.strokeStyle = C.green;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(gx, gy, 24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = C.green; ctx.font = '600 9.5px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
        ctx.fillText('GOAL', gx, gy + 3);
        ctx.textAlign = 'left';

        // Animated Raw 30k narrow fan (slate dashed, 1 misses)
        const prog = (clock * 0.42) % 1.35;
        const tDraw = Math.min(1, prog);
        const rawArcs = [-16, -6, 4, 48]; // last misses goal
        rawArcs.forEach((bend, i) => {
          ctx.strokeStyle = 'rgba(100,116,139,0.55)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 3]);
          ctx.beginPath();
          for (let s = 0; s <= 28; s++) {
            const u = (s / 28) * tDraw;
            const px = ox + (gx - ox) * u;
            const py = oy + (gy - oy) * u + Math.sin(u * Math.PI) * bend + (i === 3 ? u * u * 38 : 0);
            s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          ctx.stroke();
        });
        ctx.setLineDash([]);

        // Animated EMA 30k wide diverse fan (cobalt solid, converges cleanly into goal)
        const emaArcs = [-52, -26, 22, 46];
        emaArcs.forEach((bend) => {
          ctx.strokeStyle = C.blue;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          let ex = ox, ey = oy;
          for (let s = 0; s <= 32; s++) {
            const u = (s / 32) * tDraw;
            ex = ox + (gx - ox) * u;
            ey = oy + (gy - oy) * u + Math.sin(u * Math.PI) * bend;
            s === 0 ? ctx.moveTo(ex, ey) : ctx.lineTo(ex, ey);
          }
          ctx.stroke();
          ctx.fillStyle = C.blue;
          ctx.beginPath(); ctx.arc(ex, ey, 3.2, 0, Math.PI * 2); ctx.fill();
        });

        // Origin pin
        ctx.fillStyle = C.ink;
        ctx.beginPath(); ctx.arc(ox, oy, 4.5, 0, Math.PI * 2); ctx.fill();

        // Bottom real pass@k curve inside left panel
        const cbx = lx + 42, cby = ly + 216, cbw = lw - 66, cbh = 100;
        ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cbx, cby); ctx.lineTo(cbx, cby + cbh); ctx.lineTo(cbx + cbw, cby + cbh); ctx.stroke();

        const pk = (D.exp2c && D.exp2c.pass_at_k) || {};
        const ks = [1, 2, 4, 8];
        const sx = (k) => cbx + (Math.log2(k) / 3) * cbw;
        const sy = (v) => cby + cbh - v * cbh;
        [0.5, 1.0].forEach((y) => {
          ctx.strokeStyle = C.grid; ctx.beginPath(); ctx.moveTo(cbx, sy(y)); ctx.lineTo(cbx + cbw, sy(y)); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, cbx - 5, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        ks.forEach((k) => ctx.fillText(`@${k}`, sx(k), cby + cbh + 14));
        ctx.textAlign = 'left';

        const drawPk = (key, col, dash, lbl, dy) => {
          const obj = pk[key];
          if (!obj || !obj.curve) return;
          const vks = ks.filter((k) => obj.curve[`pass@${k}`] !== undefined);
          ctx.strokeStyle = col; ctx.lineWidth = 2.2;
          if (dash) ctx.setLineDash([4, 3]);
          ctx.beginPath();
          vks.forEach((k, i) => i === 0 ? ctx.moveTo(sx(k), sy(obj.curve[`pass@${k}`])) : ctx.lineTo(sx(k), sy(obj.curve[`pass@${k}`])));
          ctx.stroke();
          ctx.setLineDash([]);
          vks.forEach((k) => {
            ctx.fillStyle = C.paper; ctx.strokeStyle = col; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(sx(k), sy(obj.curve[`pass@${k}`]), 3.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          });
          const lk = vks[vks.length - 1];
          ctx.fillStyle = col; ctx.font = '600 9.5px "JetBrains Mono", monospace';
          ctx.fillText(`${lbl} ${Math.round(obj.curve[`pass@${lk}`] * 100)}%`, sx(lk) - 52, sy(obj.curve[`pass@${lk}`]) + dy);
        };
        drawPk('ema_step30000', C.blue, false, 'EMA 30k', -9);
        drawPk('raw_step30000', C.slate, true, 'Raw 30k', 15);

        // RIGHT PANEL: Animated 2D Gripper Physical Contact-Stall / Grasp-Slip Blueprint
        const rx = 428, ry = 32, rw = W - rx - 34, rh = 346;
        ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.roundRect(rx, ry, rw, rh, 6); ctx.fill(); ctx.stroke();

        const isSlip = Math.floor(clock / 3.4) % 2 === 1;
        ctx.fillStyle = C.ink; ctx.font = '600 12.5px "Hanken Grotesk", sans-serif';
        ctx.fillText('200 Traced Rollouts · 72.2% Physical Contact Failures', rx + 14, ry + 22);
        ctx.fillStyle = isSlip ? C.red : C.amber;
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.fillText(isSlip ? 'MODE B · REPEATED GRASP SLIP (31.6%)' : 'MODE A · CONTACT STALL (40.5% · Δp < 1.5 mm)', rx + 14, ry + 37);

        // Clean drafting workbench inside upper right
        const tableY = ry + 178;
        ctx.strokeStyle = C.ink2; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(rx + 24, tableY); ctx.lineTo(rx + rw - 24, tableY); ctx.stroke();
        // Diagonal bench cross-hatching
        ctx.strokeStyle = '#DADCE0'; ctx.lineWidth = 0.9;
        for (let hx = rx + 30; hx < rx + rw - 24; hx += 12) {
          ctx.beginPath(); ctx.moveTo(hx, tableY); ctx.lineTo(hx - 8, tableY + 10); ctx.stroke();
        }

        const cx = rx + rw * 0.50;
        if (!isSlip) {
          // CONTACT STALL: Rigid cross-hatched object blocking gripper while command arrow pulses!
          ctx.fillStyle = C.paper2; ctx.strokeStyle = C.ink2; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.roundRect(cx + 12, tableY - 54, 62, 54, 4); ctx.fill(); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '600 9.5px "JetBrains Mono", monospace';
          ctx.fillText('OBJECT', cx + 23, tableY - 24);

          const jitter = Math.sin(clock * 18) * 1.1; // < 1.5 mm vibration!
          const gx = cx - 22 + jitter, gy = tableY - 34;
          // Gripper silhouette pressing against block
          ctx.strokeStyle = C.ink; ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(gx - 28, gy - 42); ctx.lineTo(gx, gy - 16);
          ctx.stroke();
          ctx.fillStyle = C.paper; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.roundRect(gx - 10, gy - 16, 22, 26, 4); ctx.fill(); ctx.stroke();
          ctx.fillStyle = C.ink2;
          ctx.fillRect(gx + 12, gy - 12, 18, 5);
          ctx.fillRect(gx + 12, gy + 1, 18, 5);

          // Glowing amber commanded vector arrow penetrating obstacle!
          const pulse = 32 + Math.sin(clock * 6) * 8;
          ctx.strokeStyle = C.amber; ctx.lineWidth = 2.6;
          ctx.beginPath(); ctx.moveTo(gx + 32, gy - 3); ctx.lineTo(gx + 32 + pulse, gy - 3); ctx.stroke();
          ctx.fillStyle = C.amber;
          ctx.beginPath();
          ctx.moveTo(gx + 38 + pulse, gy - 3);
          ctx.lineTo(gx + 29 + pulse, gy - 8);
          ctx.lineTo(gx + 29 + pulse, gy + 2);
          ctx.closePath(); ctx.fill();
          ctx.font = '600 9.5px "JetBrains Mono", monospace';
          ctx.fillText('cmd > 0.25', gx + 34, gy - 25);
        } else {
          // GRASP SLIP: Chattering gripper fingers dropping cylinder back to table!
          const chatter = Math.abs(Math.sin(clock * 8)) * 12;
          const slipY = Math.sin(clock * 4) * 10;
          const gx = cx, gy = tableY - 76;
          // Object slipping downward
          ctx.fillStyle = C.redSoft; ctx.strokeStyle = C.red; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.roundRect(gx - 16, tableY - 38 + Math.max(0, slipY), 32, 34, 4); ctx.fill(); ctx.stroke();
          // Parallel jaws oscillating open/closed
          ctx.strokeStyle = C.ink; ctx.lineWidth = 2.2;
          ctx.beginPath(); ctx.moveTo(gx, gy - 32); ctx.lineTo(gx, gy); ctx.stroke();
          ctx.fillStyle = C.paper; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.roundRect(gx - 18, gy, 36, 12, 3); ctx.fill(); ctx.stroke();
          ctx.fillStyle = C.red;
          ctx.fillRect(gx - 16 - chatter, gy + 12, 6, 26);
          ctx.fillRect(gx + 10 + chatter, gy + 12, 6, 26);
          ctx.font = '600 9.5px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
          ctx.fillText('GRIPPER CHATTER ≥ 4×', gx, gy - 38);
          ctx.textAlign = 'left';
        }

        // Breakdown bars from real Exp 2D JSON
        const fc = (D.exp2d && D.exp2d.overall_failure_counts) || {};
        const tot = Object.values(fc).reduce((a, b) => a + b, 0) || 79;
        const bars = [
          ['Contact Stall', fc.contact_stall_object || 32, C.amber],
          ['Grasp Slip', fc.repeated_grasp_slip || 25, C.red],
          ['Timeout / Other', tot - (fc.contact_stall_object || 32) - (fc.repeated_grasp_slip || 25), C.slate],
        ];
        bars.forEach(([nm, cnt, col], idx) => {
          const by = ry + 216 + idx * 38;
          const frac = cnt / tot;
          ctx.fillStyle = C.ink2; ctx.font = '600 11px "Hanken Grotesk", sans-serif';
          ctx.fillText(nm, rx + 18, by + 12);
          ctx.fillStyle = C.paper2;
          ctx.beginPath(); ctx.roundRect(rx + 122, by + 2, rw - 196, 14, 4); ctx.fill();
          ctx.fillStyle = col;
          ctx.beginPath(); ctx.roundRect(rx + 122, by + 2, Math.max(6, (rw - 196) * frac), 14, 4); ctx.fill();
          ctx.fillStyle = col; ctx.font = '600 11px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(`${(frac * 100).toFixed(1)}%`, rx + rw - 16, by + 13);
          ctx.textAlign = 'left';
        });
      } else {
        // TAB 2: MINIMALIST PURE-LIGHT 6-ARM LIBERO LOLLIPOP MATRIX
        const order = ['cover_eef_lib', 'fast_eef', 'bin256_eef', 'oat_joint', 'cover_h32_joint', 'holo_joint'];
        const rows = order.map((k) => D.dev_leaderboard && D.dev_leaderboard[k]).filter(Boolean);
        const mx0 = 216, mx1 = W - 82, my0 = 64, rowH = 48;
        const sx = (v) => mx0 + v * (mx1 - mx0);

        ctx.fillStyle = C.ink; ctx.font = '600 13px "Hanken Grotesk", sans-serif';
        ctx.fillText('Same Qwen3-VL-2B Backbone (30k steps) · LIBERO Dev-Half Success Rate', 36, 44);

        [0, 0.25, 0.5, 0.75, 1.0].forEach((x) => {
          ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(sx(x), my0 - 8); ctx.lineTo(sx(x), my0 + rows.length * rowH); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '500 10px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
          ctx.fillText(`${Math.round(x * 100)}%`, sx(x), my0 + rows.length * rowH + 16);
        });
        ctx.textAlign = 'left';

        const sCols = { libero_spatial: C.blue, libero_object: C.green, libero_goal: C.amber, libero_10: C.purple };
        rows.forEach((r, i) => {
          const y = my0 + i * rowH + 20;
          const isEef = r.track.startsWith('EEF');
          if (i === 3) {
            ctx.strokeStyle = C.rule; ctx.setLineDash([4, 3]);
            ctx.beginPath(); ctx.moveTo(36, y - 22); ctx.lineTo(W - 36, y - 22); ctx.stroke();
            ctx.setLineDash([]);
          }
          ctx.fillStyle = C.ink; ctx.font = '600 12.5px "Hanken Grotesk", sans-serif'; ctx.textAlign = 'right';
          ctx.fillText(r.label + (r.n_suites && r.n_suites < 4 ? ` (${r.n_suites}/4)` : ''), mx0 - 16, y + 1);
          ctx.fillStyle = C.ink3; ctx.font = '500 10px "JetBrains Mono", monospace';
          ctx.fillText(`${r.track} · ${r.tok_per_win} tok`, mx0 - 16, y + 15);
          ctx.textAlign = 'left';

          const bCol = isEef ? (r.label.includes('Bin256') ? C.teal : (r.label.includes('FAST') ? C.amber : C.blue)) : (r.label.includes('OAT') ? C.purple : C.slate);
          ctx.fillStyle = bCol; ctx.globalAlpha = 0.16;
          ctx.beginPath(); ctx.roundRect(mx0, y - 9, Math.max(4, sx(r.mean) - mx0), 22, 4); ctx.fill();
          ctx.globalAlpha = 1;
          ctx.strokeStyle = bCol; ctx.lineWidth = 2.6;
          ctx.beginPath(); ctx.moveTo(mx0, y + 2); ctx.lineTo(sx(r.mean), y + 2); ctx.stroke();

          Object.entries(sCols).forEach(([sk, sc]) => {
            if (r[sk] === undefined) return;
            ctx.fillStyle = sc; ctx.strokeStyle = C.paper; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.arc(sx(r[sk]), y + 2, 4.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          });
          ctx.fillStyle = C.ink; ctx.font = '600 12.5px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(fmtPct(r.mean), W - 34, y + 6);
          ctx.textAlign = 'left';

          lbHotspots.push({ x0: mx0, y0: y - 14, x1: W - 30, y1: y + 18, row: r });
        });

        // Suite color key top right
        let lx = W - 320;
        [['Spatial', C.blue], ['Object', C.green], ['Goal', C.amber], ['L-10', C.purple]].forEach(([nm, col]) => {
          ctx.fillStyle = col; ctx.beginPath(); ctx.arc(lx, 40, 4, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = C.ink3; ctx.font = '500 10.5px "Hanken Grotesk", sans-serif';
          ctx.fillText(nm, lx + 8, 44);
          lx += 70;
        });
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (evt) => {
      if (tab !== 'leaderboard') { hideTip(tipEl); return; }
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      const hit = lbHotspots.find((h) => mx >= h.x0 && mx <= h.x1 && my >= h.y0 && my <= h.y1);
      if (hit) {
        const r = hit.row;
        showTip(tipEl, canvas, evt.clientX, evt.clientY, `
          <div class="th">${r.label}</div>
          <div class="tr"><span>Dev Mean</span><b>${fmtPct(r.mean)}</b></div>
          <div class="tr"><span>Spatial / Object</span><b>${r.libero_spatial !== undefined ? Math.round(r.libero_spatial * 100) + '%' : '—'} / ${r.libero_object !== undefined ? Math.round(r.libero_object * 100) + '%' : '—'}</b></div>
          <div class="tr"><span>Goal / LIBERO-10</span><b>${r.libero_goal !== undefined ? Math.round(r.libero_goal * 100) + '%' : '—'} / ${r.libero_10 !== undefined ? Math.round(r.libero_10 * 100) + '%' : '—'}</b></div>
        `);
      } else {
        hideTip(tipEl);
      }
    });
    canvas.addEventListener('mouseleave', () => hideTip(tipEl));

    tabs.forEach((b) => b.addEventListener('click', () => {
      tab = b.dataset.p2;
      tabs.forEach((x) => x.classList.toggle('on', x === b));
      hideTip(tipEl);
    }));
    requestAnimationFrame(draw);
  }

  // =========================================================================
  // PLATE 03 · LIVING 900-TRAJECTORY MORPHING MANIFOLD BLUEPRINT (Exp 3 & 9A)
  // =========================================================================
  function initPlateManifold(D) {
    const canvas = document.getElementById('plate-manifold');
    const slider = document.getElementById('manifold-slider');
    const pctLbl = document.getElementById('manifold-pct');
    const btnJoint = document.getElementById('btn-space-joint');
    const btnC1 = document.getElementById('btn-space-c1');
    const btnColor = document.getElementById('btn-color-toggle');
    const btnAuto = document.getElementById('manifold-auto');
    const tipEl = document.getElementById('tip-manifold');
    if (!canvas || !D.exp9_manifold || !D.exp9_manifold.points) return;

    const man = D.exp9_manifold;
    const pts = man.points;
    const mj = man.metrics.joint_cover;
    const mc = man.metrics.task_c1;

    const W = 840, H = 460;
    const ctx = setupHiDPI(canvas, W, H);
    const armCols = [C.blue, C.amber, C.green, C.red, C.purple];
    const dirCols = [C.blue, C.red, C.green, C.amber, C.purple, C.teal];

    let curT = 0.0, targetT = 0.0;
    let colorBy = 'arm';
    let autoMorph = false;
    let hoverIdx = -1;
    let clock = 0;
    let lastTs = performance.now();

    function drawMiniArm(x, y, col, idx) {
      // Stylized clean technical-drawing 2-link arm icon
      const a1 = -1.1 + idx * 0.14 + Math.sin(clock * 1.4 + idx) * 0.08;
      const a2 = a1 + 0.95 - idx * 0.12;
      const x1 = x + Math.cos(a1) * 14, y1 = y + Math.sin(a1) * 14;
      const x2 = x1 + Math.cos(a2) * 12, y2 = y1 + Math.sin(a2) * 12;
      ctx.strokeStyle = col; ctx.lineWidth = 2.1; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.fillStyle = C.paper; ctx.lineWidth = 1.6;
      [[x, y], [x1, y1]].forEach(([jx, jy]) => {
        ctx.beginPath(); ctx.arc(jx, jy, 2.7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      });
    }

    function xyOf(p, t) {
      const e = t * t * (3 - 2 * t);
      const x = p[2] + (p[4] - p[2]) * e;
      const y = p[3] + (p[5] - p[3]) * e;
      return [W * 0.50 + x * (W * 0.39), 266 - y * 150];
    }

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      clock += dt;

      if (autoMorph) {
        const wave = 0.5 - 0.5 * Math.cos(clock * 0.65);
        curT = targetT = wave;
        if (slider) slider.value = Math.round(curT * 100);
      } else {
        curT += (targetT - curT) * Math.min(1, dt * 8.5);
      }
      if (pctLbl) pctLbl.textContent = curT < 0.05 ? 'Joint 100%' : (curT > 0.95 ? 'Task C1 100%' : `Morph ${Math.round(curT * 100)}%`);

      drawBlueprintFrame(ctx, W, H, 8, 4);

      // Top 5 robot silhouettes bar
      man.arms.forEach((nm, i) => {
        const bx = 98 + i * 160;
        drawMiniArm(bx - 30, 56, armCols[i], i);
        ctx.fillStyle = armCols[i]; ctx.font = '600 11px "Hanken Grotesk", sans-serif';
        ctx.fillText(nm, bx - 6, 54);
        ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace';
        ctx.fillText(i === 1 ? '6-DoF' : '7-DoF', bx - 6, 66);
      });
      ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(32, 78); ctx.lineTo(W - 32, 78); ctx.stroke();

      // Subtle concentric drafting radar rings
      ctx.strokeStyle = C.grid; ctx.lineWidth = 0.9;
      [0.25, 0.52, 0.80].forEach((r) => {
        ctx.beginPath();
        ctx.ellipse(W * 0.50, 266, W * 0.39 * r, 150 * r, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Live interpolating KPI blueprint stamp (top-left & top-right of field)
      const purity = (mj.knn10_robot_purity + (mc.knn10_robot_purity - mj.knn10_robot_purity) * curT) * 100;
      const cos = mj.knn10_motion_cos_cross_arm + (mc.knn10_motion_cos_cross_arm - mj.knn10_motion_cos_cross_arm) * curT;
      const r2 = -1.297 + (0.892 - (-1.297)) * curT;

      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillStyle = C.ink;
      ctx.fillText(curT < 0.5 ? 'JOINT-SLOT COVER SPACE (5 ROBOT DIALECTS)' : 'TASK-SPACE C1 (EMBODIMENT-INVARIANT 3D MOTION)', 36, 98);

      ctx.textAlign = 'right';
      ctx.font = '600 10.5px "JetBrains Mono", monospace';
      ctx.fillStyle = purity > 45 ? C.red : C.green;
      ctx.fillText(`10-NN PURITY: ${purity.toFixed(1)}%`, W - 36, 98);
      ctx.fillStyle = cos > 0.45 ? C.blue : C.slate;
      ctx.fillText(`3D ALIGN: +${cos.toFixed(3)}  ·  PROBE R²: ${r2 >= 0 ? '+' : ''}${r2.toFixed(2)}`, W - 36, 113);
      ctx.textAlign = 'left';

      // Draw all 900 real trajectory dots
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const [px, py] = xyOf(p, curT);
        const col = colorBy === 'arm' ? armCols[p[0]] : dirCols[p[1]];
        const isHov = (i === hoverIdx);
        ctx.fillStyle = col;
        ctx.globalAlpha = isHov ? 1.0 : 0.72;
        ctx.beginPath();
        ctx.arc(px, py, isHov ? 6.5 : 3.4, 0, Math.PI * 2);
        ctx.fill();
        if (isHov) {
          ctx.strokeStyle = C.ink; ctx.lineWidth = 1.8; ctx.stroke();
          const ax = px + Math.max(-44, Math.min(44, p[6] * 0.42));
          const ay = py - Math.max(-44, Math.min(44, p[7] * 0.42));
          ctx.strokeStyle = C.ink; ctx.lineWidth = 2.2;
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ax, ay); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // De-overlapped clean centroid pills when in Joint-Slot space
      if (curT < 0.45) {
        const sums = man.arms.map(() => [0, 0, 0]);
        pts.forEach((p) => { const [px, py] = xyOf(p, curT); sums[p[0]][0] += px; sums[p[0]][1] += py; sums[p[0]][2]++; });
        const pills = sums.map((s, ai) => ({
          lbl: man.arms[ai], col: armCols[ai],
          x: s[2] ? s[0] / s[2] : W * 0.5,
          y: s[2] ? s[1] / s[2] - 14 : 266,
        }));
        for (let pass = 0; pass < 4; pass++) {
          for (let i = 0; i < pills.length; i++) {
            for (let j = i + 1; j < pills.length; j++) {
              if (Math.abs(pills[j].x - pills[i].x) < 96 && Math.abs(pills[j].y - pills[i].y) < 26) {
                const push = (26 - Math.abs(pills[j].y - pills[i].y)) * 0.55;
                if (pills[j].y >= pills[i].y) { pills[i].y -= push; pills[j].y += push; }
                else { pills[i].y += push; pills[j].y -= push; }
              }
            }
          }
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - curT * 2.4);
        ctx.font = '600 10.5px "Hanken Grotesk", sans-serif';
        ctx.textAlign = 'center';
        pills.forEach((pl) => {
          const tw = ctx.measureText(pl.lbl).width + 16;
          ctx.fillStyle = 'rgba(255,255,255,0.95)';
          ctx.strokeStyle = pl.col; ctx.lineWidth = 1.3;
          ctx.beginPath(); ctx.roundRect(pl.x - tw / 2, pl.y - 10, tw, 19, 9); ctx.fill(); ctx.stroke();
          ctx.fillStyle = pl.col;
          ctx.fillText(pl.lbl, pl.x, pl.y + 3);
        });
        ctx.restore();
      }

      // Direction legend along bottom when colored by 3D direction
      if (colorBy === 'dir') {
        let lx = 36;
        man.directions.forEach((nm, i) => {
          ctx.fillStyle = dirCols[i];
          ctx.beginPath(); ctx.arc(lx + 4, H - 30, 3.6, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = C.ink3; ctx.font = '500 10px "JetBrains Mono", monospace';
          ctx.fillText(nm, lx + 12, H - 27);
          lx += ctx.measureText(nm).width + 26;
        });
      }

      requestAnimationFrame(draw);
    }

    function setTarget(t) {
      autoMorph = false;
      if (btnAuto) { btnAuto.classList.remove('on'); btnAuto.textContent = '▶ Auto-Morph'; }
      targetT = t;
      btnJoint.classList.toggle('on', t < 0.5);
      btnC1.classList.toggle('on', t >= 0.5);
      if (slider) slider.value = Math.round(t * 100);
    }
    btnJoint.addEventListener('click', () => setTarget(0));
    btnC1.addEventListener('click', () => setTarget(1));
    btnColor.addEventListener('click', () => {
      colorBy = colorBy === 'arm' ? 'dir' : 'arm';
      btnColor.textContent = colorBy === 'arm' ? 'Color: Robot Arm' : 'Color: 3D Direction';
      btnColor.classList.toggle('on', colorBy === 'dir');
    });
    if (btnAuto) {
      btnAuto.addEventListener('click', () => {
        autoMorph = !autoMorph;
        btnAuto.classList.toggle('on', autoMorph);
        btnAuto.textContent = autoMorph ? '❚❚ Auto-Morph' : '▶ Auto-Morph';
      });
    }
    slider.addEventListener('input', () => {
      autoMorph = false;
      if (btnAuto) { btnAuto.classList.remove('on'); btnAuto.textContent = '▶ Auto-Morph'; }
      curT = targetT = parseFloat(slider.value) / 100;
      btnJoint.classList.toggle('on', curT < 0.5);
      btnC1.classList.toggle('on', curT >= 0.5);
    });

    canvas.addEventListener('mousemove', (evt) => {
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      let best = -1, bestD = 120;
      for (let i = 0; i < pts.length; i++) {
        const [px, py] = xyOf(pts[i], curT);
        const d2 = (px - mx) ** 2 + (py - my) ** 2;
        if (d2 < bestD) { bestD = d2; best = i; }
      }
      hoverIdx = best;
      if (best >= 0) {
        const p = pts[best];
        showTip(tipEl, canvas, evt.clientX, evt.clientY, `
          <div class="th">${man.arms[p[0]]} · ${man.directions[p[1]]}</div>
          <div class="tr"><span>Net 3D Δp</span><b>(${p[6]}, ${p[7]}, ${p[8]}) mm</b></div>
          <div class="tr"><span>Space</span><b>${curT < 0.5 ? 'Joint-Slot Cover' : 'Task-Space C1'}</b></div>
        `);
      } else {
        hideTip(tipEl);
      }
    });
    canvas.addEventListener('mouseleave', () => { hoverIdx = -1; hideTip(tipEl); });

    requestAnimationFrame(draw);
  }

  // =========================================================================
  // PLATE 04 · LIVING 4-ARM IMPEDANCE SPRING & STICKY DRAWER MECHANICS
  // =========================================================================
  function initPlateForce(D) {
    const canvas = document.getElementById('plate-force');
    const kpSlider = document.getElementById('sim-kp-slider');
    const kpLbl = document.getElementById('sim-kp-val');
    const modeBtns = document.querySelectorAll('#p4-mode-btns .bp-btn');
    const rightTabs = document.querySelectorAll('#p4-right-tabs .bp-btn');
    const tipEl = document.getElementById('tip-force');
    if (!canvas) return;

    const W = 840, H = 460;
    const ctx = setupHiDPI(canvas, W, H);

    let simMode = 'c1f';
    let kpMult = 1.0;
    let rightTab = 'frontier';
    let phase = 0;
    let lastTs = performance.now();
    let chartHotspots = [];

    const arms = [
      { name: 'Franka Panda', dof: '7-DoF', col: C.blue, achSR: '14%', c1fSR: '90%' },
      { name: 'UR5e', dof: '6-DoF', col: C.amber, achSR: '0%', c1fSR: '70%' },
      { name: 'KUKA IIWA', dof: '7-DoF', col: C.green, achSR: '0%', c1fSR: '85%' },
      { name: 'Kinova Gen3', dof: '7-DoF', col: C.purple, achSR: '0%', c1fSR: '55%' },
    ];

    function drawSpring(x1, x2, y, col) {
      const len = Math.max(8, x2 - x1);
      const coils = 7;
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.moveTo(x1, y);
      for (let i = 1; i < coils; i++) {
        ctx.lineTo(x1 + (i / coils) * len, y + (i % 2 === 0 ? -6 : 6));
      }
      ctx.lineTo(x2, y);
      ctx.stroke();
    }

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      phase = (phase + dt * 0.30) % 1.38;
      const p = Math.min(1.0, phase);

      drawBlueprintFrame(ctx, W, H, 8, 4);
      chartHotspots = [];

      // LEFT MECHANICAL CROSS-SECTION: 4 Parallel Arms Pulling Sticky Drawers
      const lx = 34, ly = 32, lw = 446, lh = 396;
      ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 6); ctx.fill(); ctx.stroke();

      // Compute calibrated Exp 4A spring physics
      let drawerMM = 0, deltaMM = 0, forceN = 0, statusTxt = '', statusCol = C.green;
      if (simMode === 'ach') {
        drawerMM = Math.min(1.2, p * 2.0);
        deltaMM = 0.3;
        forceN = 1.2 * kpMult * Math.sin(Math.min(1, p * 2) * Math.PI * 0.5);
        statusTxt = 'ALL 4 STALLED · 0.29 mm ERR, ~1.2 N < 36 N FRICTION';
        statusCol = C.red;
      } else if (simMode === 'raw') {
        const peakF = 40.6 * kpMult;
        if (peakF < 36.0) {
          drawerMM = Math.min(4, p * 6);
          deltaMM = 22 * Math.min(1, p * 1.8);
          forceN = peakF * Math.min(1, p * 1.8);
          statusTxt = `STALLED @ Kp×${kpMult.toFixed(1)} · ONLY ${forceN.toFixed(0)} N < 36 N`;
          statusCol = C.red;
        } else if (kpMult >= 1.45) {
          const tm = Math.max(0, (p - 0.14) / 0.86);
          const osc = Math.sin(tm * 18) * 12 * Math.exp(-tm * 2.5);
          drawerMM = Math.min(162, tm * 164 + Math.max(0, osc * 0.4));
          deltaMM = 38 + osc;
          forceN = Math.min(357, 165 * kpMult * (1 - 0.3 * tm) + Math.abs(osc) * 8);
          statusTxt = `VIOLENT SLAM @ Kp×${kpMult.toFixed(1)} · ${forceN.toFixed(0)} N + 44 mm OVERSHOOT`;
          statusCol = C.purple;
        } else {
          const tm = Math.max(0, (p - 0.20) / 0.80);
          drawerMM = tm * 160;
          deltaMM = 22;
          forceN = (p < 0.2 ? (p / 0.2) * 145 : 145 - tm * 45) * kpMult;
          statusTxt = `NOMINAL RAW OSC · ${forceN.toFixed(0)} N (SHIFTS WITH Kp)`;
          statusCol = C.blue;
        }
      } else {
        // C1F+D3F: Spring deflection scales inversely with Kp so Newtons stay INVARIANT!
        const tm = Math.max(0, (p - 0.18) / 0.82);
        drawerMM = tm * 160;
        const pulseOn = (p > 0.08 && p < 0.85);
        deltaMM = pulseOn ? (26 / kpMult) : 0;
        forceN = p < 0.18 ? (p / 0.18) * 148 : 148 * (1 - 0.32 * tm);
        statusTxt = `KP-INVARIANT RESCUE · ${forceN.toFixed(0)} N (δ=${deltaMM.toFixed(0)} mm @ Kp×${kpMult.toFixed(1)})`;
        statusCol = C.green;
      }

      ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
      ctx.fillText('Cross-Arm Sticky Cabinet Drawer (36 N Static Friction)', lx + 14, ly + 22);
      ctx.fillStyle = statusCol; ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.fillText(statusTxt, lx + 14, ly + 37);

      // Draw 4 parallel clean engineering rows
      arms.forEach((arm, idx) => {
        const ry = ly + 56 + idx * 82;
        const rowMid = ry + 36;
        // Row divider
        if (idx > 0) {
          ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(lx + 14, ry - 4); ctx.lineTo(lx + lw - 14, ry - 4); ctx.stroke();
        }
        // Arm label
        ctx.fillStyle = arm.col; ctx.font = '600 11px "Hanken Grotesk", sans-serif';
        ctx.fillText(arm.name, lx + 14, ry + 14);
        ctx.fillStyle = C.ink3; ctx.font = '500 9.5px "JetBrains Mono", monospace';
        const badgeSR = simMode === 'ach' ? `ach: ${arm.achSR}` : (simMode === 'c1f' ? `C1F: ${arm.c1fSR}` : `Kp×${kpMult.toFixed(1)}`);
        ctx.fillText(`${arm.dof} · ${badgeSR}`, lx + 14, ry + 27);

        // Cabinet housing (cross-hatched light gray)
        const cabX = lx + 114, cabY = ry + 12, cabW = 92, cabH = 48;
        ctx.fillStyle = C.paper2; ctx.strokeStyle = C.rule; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.roundRect(cabX, cabY, cabW, cabH, 4); ctx.fill(); ctx.stroke();

        // Sliding Drawer inside cabinet
        const slidePx = (drawerMM / 160) * 112;
        const drX = cabX + 16 + slidePx;
        ctx.fillStyle = drawerMM > 85 ? C.greenSoft : C.paper;
        ctx.strokeStyle = drawerMM > 85 ? C.green : C.ink2;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(drX, cabY + 10, 74, 28, 3); ctx.fill(); ctx.stroke();
        // Drawer handle
        ctx.fillStyle = C.ink2;
        ctx.fillRect(drX + 74, cabY + 18, 7, 12);

        // Gripper (p_meas) attached to handle
        const gX = drX + 82;
        ctx.fillStyle = arm.col;
        ctx.fillRect(gX, rowMid - 8, 9, 16);

        // Coiled Impedance Spring between p_meas and virtual setpoint p_cmd
        const spStretch = Math.min(84, Math.max(0, deltaMM * 1.9));
        const tX = gX + 12 + spStretch;
        if (spStretch > 4) {
          const spCol = simMode === 'c1f' ? C.amber : (simMode === 'raw' && kpMult >= 1.45 ? C.purple : arm.col);
          drawSpring(gX + 10, tX, rowMid, spCol);
          ctx.strokeStyle = spCol; ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.arc(tX, rowMid, 4.5, 0, Math.PI * 2); ctx.stroke();
          if (simMode === 'c1f' && idx === 0) {
            ctx.fillStyle = C.amber; ctx.font = '600 9px "JetBrains Mono", monospace';
            ctx.fillText('5mm W_N PULSE', tX - 24, rowMid - 12);
          }
        }

        // Right-edge travel readout
        ctx.fillStyle = drawerMM > 85 ? C.green : C.ink3;
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${drawerMM.toFixed(0)} mm`, lx + lw - 14, rowMid + 4);
        ctx.textAlign = 'left';
      });

      // RIGHT PANEL: Real Exp 7B Force-Sparsity Pareto OR Exp 4A Newton Matrix
      const rx = 494, ry = 32, rw = W - rx - 34, rh = 396;
      ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(rx, ry, rw, rh, 6); ctx.fill(); ctx.stroke();

      if (rightTab === 'frontier' && D.exp7_frontier && D.exp7_frontier.rows) {
        const rows = D.exp7_frontier.rows;
        ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText('Force-Channel Sparsity Pareto (Exp 7B)', rx + 14, ry + 22);
        ctx.fillStyle = C.green; ctx.font = '600 9.5px "JetBrains Mono", monospace';
        ctx.fillText('30.8% ACTIVE FRAMES (81.7%) > 100% DENSE (80%)', rx + 14, ry + 37);

        const pl = rx + 42, pr = rx + rw - 20, pt = ry + 60, pb = ry + rh - 54;
        const sx = (v) => pl + (Math.min(100, v) / 100) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);

        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = C.grid; ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 6, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0, 25, 50, 75, 100].forEach((x) => ctx.fillText(`${x}%`, sx(x), pb + 15));
        ctx.fillStyle = C.ink3; ctx.font = '500 10px "Hanken Grotesk", sans-serif';
        ctx.fillText('Active Force-Intent Frames (%) — Lower = Sparser', (pl + pr) / 2, pb + 32);
        ctx.textAlign = 'left';

        // Soft emerald sweet-spot knee box
        ctx.fillStyle = C.greenSoft;
        ctx.strokeStyle = 'rgba(21,128,61,0.38)';
        ctx.setLineDash([3, 2]);
        ctx.beginPath(); ctx.roundRect(sx(16), sy(0.87), sx(46) - sx(16), sy(0.75) - sy(0.87), 5); ctx.fill(); ctx.stroke();
        ctx.setLineDash([]);

        // Sweep polyline
        const db5 = rows.filter((r) => r.label.startsWith('5mm') || r.active_frame_pct === 0 || r.active_frame_pct === 100).sort((a, b) => a.active_frame_pct - b.active_frame_pct);
        ctx.strokeStyle = C.amber; ctx.lineWidth = 2.2;
        ctx.beginPath();
        db5.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.active_frame_pct), sy(r.mean_3arm_sr)) : ctx.lineTo(sx(r.active_frame_pct), sy(r.mean_3arm_sr)));
        ctx.stroke();

        rows.forEach((r) => {
          const isBest = r.label.startsWith('5mm / db=12mm') || r.label.includes('C1F');
          const isZero = r.active_frame_pct === 0;
          const col = isZero ? C.red : (isBest ? C.green : (r.q_mm && r.q_mm >= 15 ? C.purple : C.amber));
          const cx = sx(r.active_frame_pct), cy = sy(r.mean_3arm_sr);
          ctx.fillStyle = col; ctx.strokeStyle = C.paper; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.arc(cx, cy, isBest ? 6 : 4.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

          if (r.label.startsWith('5mm / db=12mm')) {
            ctx.fillStyle = C.green; ctx.font = '600 10px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
            ctx.fillText('5mm/db=12mm (81.7%)', cx + 10, cy - 12);
          } else if (isZero) {
            ctx.fillStyle = C.red; ctx.font = '600 10px "JetBrains Mono", monospace'; ctx.textAlign = 'left';
            ctx.fillText('Pose only (16.7%)', cx + 8, cy + 4);
          } else if (r.active_frame_pct === 100) {
            ctx.fillStyle = C.amber; ctx.font = '600 10px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
            ctx.fillText('Dense 100% (80%)', cx - 6, cy - 10);
          }
          ctx.textAlign = 'left';
          chartHotspots.push({ cx, cy, r });
        });
      } else if (D.exp4 && D.exp4.part4a_dose_response) {
        // Pure-Light 24-cell Kp x delta Newton Heatmap (Exp 4A)
        const grid = D.exp4.part4a_dose_response.grid;
        const deltas = [...new Set(grid.map((r) => r.delta_mm))].sort((a, b) => a - b);
        const kps = [...new Set(grid.map((r) => r.kp_mult))].sort((a, b) => a - b);
        ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText('Measured Contact Force (N) · Exp 4A', rx + 14, ry + 22);
        ctx.fillStyle = C.ink3; ctx.font = '500 9.5px "JetBrains Mono", monospace';
        ctx.fillText('δ = 0 mm PRODUCES 0.0 N AT EVERY STIFFNESS', rx + 14, ry + 37);

        const ml = rx + 48, mr = rx + rw - 14, mt = ry + 56, mb = ry + rh - 44;
        const cw = (mr - ml) / deltas.length, ch = (mb - mt) / kps.length;
        ctx.textAlign = 'center'; ctx.font = '500 9.5px "JetBrains Mono", monospace'; ctx.fillStyle = C.ink3;
        deltas.forEach((d, ci) => ctx.fillText(`${d}mm`, ml + ci * cw + cw / 2, mb + 16));
        kps.forEach((kp, ri) => {
          const y = mt + (kps.length - 1 - ri) * ch;
          ctx.textAlign = 'right'; ctx.fillStyle = C.ink3;
          ctx.fillText(`${kp.toFixed(1)}×`, ml - 6, y + ch / 2 + 4);
          ctx.textAlign = 'center';
          deltas.forEach((d, ci) => {
            const cell = grid.find((r) => r.kp_mult === kp && r.delta_mm === d);
            const fn = cell ? cell.contact_force_p90_n : 0;
            const alpha = Math.min(0.88, fn / 155);
            ctx.fillStyle = fn < 1 ? C.paper2 : `rgba(217,119,6,${0.12 + alpha * 0.72})`;
            ctx.strokeStyle = C.rule2;
            ctx.beginPath(); ctx.roundRect(ml + ci * cw + 2, y + 2, cw - 4, ch - 4, 4); ctx.fill(); ctx.stroke();
            ctx.fillStyle = fn > 85 ? '#FFFFFF' : C.ink;
            ctx.font = '600 10px "JetBrains Mono", monospace';
            ctx.fillText(`${fn.toFixed(0)}`, ml + ci * cw + cw / 2, y + ch / 2 + 4);
          });
        });
        ctx.textAlign = 'left';
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (evt) => {
      if (rightTab !== 'frontier') { hideTip(tipEl); return; }
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      const hit = chartHotspots.find((h) => (h.cx - mx) ** 2 + (h.cy - my) ** 2 < 160);
      if (hit) {
        const r = hit.r;
        showTip(tipEl, canvas, evt.clientX, evt.clientY, `
          <div class="th">${r.label}</div>
          <div class="tr"><span>3-Arm Rescue SR</span><b>${fmtPct(r.mean_3arm_sr)}</b></div>
          <div class="tr"><span>Active Frames</span><b>${r.active_frame_pct}%</b></div>
          <div class="tr"><span>F / U / I</span><b>${Math.round(r.franka_sr * 100)}% / ${Math.round(r.ur5e_sr * 100)}% / ${Math.round(r.iiwa_sr * 100)}%</b></div>
        `);
      } else {
        hideTip(tipEl);
      }
    });
    canvas.addEventListener('mouseleave', () => hideTip(tipEl));

    kpSlider.addEventListener('input', () => {
      kpMult = parseInt(kpSlider.value, 10) / 100;
      kpLbl.textContent = `${kpMult.toFixed(1)}× (${Math.round(150 * kpMult)})`;
      phase = 0;
    });
    modeBtns.forEach((b) => b.addEventListener('click', () => {
      simMode = b.dataset.sim;
      modeBtns.forEach((x) => x.classList.toggle('on', x === b));
      phase = 0;
    }));
    rightTabs.forEach((b) => b.addEventListener('click', () => {
      rightTab = b.dataset.p4r;
      rightTabs.forEach((x) => x.classList.toggle('on', x === b));
      hideTip(tipEl);
    }));

    requestAnimationFrame(draw);
  }

  // =========================================================================
  // PLATE 05 · LIVING CLOSED-LOOP DRIFT VS. CONTACT-FROZEN SHIELD (Exp 5 & 8)
  // =========================================================================
  function initPlateClosedLoop(D) {
    const canvas = document.getElementById('plate-closedloop');
    const tabs = document.querySelectorAll('#p5-tabs .bp-btn');
    const tipEl = document.getElementById('tip-closedloop');
    if (!canvas) return;

    const W = 840, H = 430;
    const ctx = setupHiDPI(canvas, W, H);
    let tab = 'k32';
    let clock = 0;
    let lastTs = performance.now();
    let hotspots = [];

    function draw(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      clock += dt;

      drawBlueprintFrame(ctx, W, H, 8, 4);
      hotspots = [];

      // LEFT: Animated Top-Down Tabletop Blueprint Under +0.07 Lateral Drift
      const lx = 34, ly = 32, lw = 382, lh = 366;
      ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 6); ctx.fill(); ctx.stroke();

      ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
      ctx.fillText('Live Tabletop Under Unknown +0.07 Lateral Drift', lx + 14, ly + 22);
      ctx.fillStyle = C.ink3; ctx.font = '500 9.5px "JetBrains Mono", monospace';
      ctx.fillText('FREE SPACE = IDENTIFY DRIFT · CONTACT = FREEZE (74.7%)', lx + 14, ly + 37);

      // Subtle animated rightward drift windlines
      const windOff = (clock * 26) % 44;
      ctx.strokeStyle = 'rgba(217,119,6,0.18)'; ctx.lineWidth = 1;
      for (let wy = ly + 66; wy < ly + lh - 46; wy += 36) {
        for (let wx = lx + 20 + windOff; wx < lx + lw - 42; wx += 68) {
          ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx + 22, wy); ctx.stroke();
        }
      }

      const startX = lx + 150, startY = ly + 86;
      const bowlX = lx + 150, bowlY = ly + 206;
      const plateX = lx + 150, plateY = ly + 312;

      // Bowl (Contact Zone) & Target Plate
      ctx.fillStyle = C.amberSoft; ctx.strokeStyle = C.amber; ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 2]);
      ctx.beginPath(); ctx.arc(bowlX, bowlY, 26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = C.amber; ctx.font = '600 9px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
      ctx.fillText('GRASP CONTACT', bowlX, bowlY + 38);

      ctx.fillStyle = C.greenSoft; ctx.strokeStyle = C.green; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(plateX, plateY, 24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.green;
      ctx.fillText('TARGET PLATE', plateX, plateY + 35);
      ctx.textAlign = 'left';

      const prog = (clock * 0.28) % 1.32;
      const u = Math.min(1, prog);

      // 1. Open-Loop k=32 (drifts steadily right off plate!)
      ctx.strokeStyle = C.red; ctx.lineWidth = 2.2; ctx.setLineDash([5, 3]);
      ctx.beginPath();
      let ox = startX, oy = startY;
      for (let s = 0; s <= 32; s++) {
        const t = (s / 32) * u;
        ox = startX + t * 134;
        oy = startY + t * (plateY - startY);
        s === 0 ? ctx.moveTo(ox, oy) : ctx.lineTo(ox, oy);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = C.red;
      ctx.beginPath(); ctx.arc(ox, oy, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.font = '600 9.5px "JetBrains Mono", monospace';
      ctx.fillText('OPEN k=32 (DRIFTS)', Math.min(lx + lw - 122, ox + 8), oy + 3);

      // 2. Contact-Aware Free-Space-Gated [FB] (corrects in free space, locks during contact!)
      ctx.strokeStyle = C.blue; ctx.lineWidth = 2.8;
      ctx.beginPath();
      let gx = startX, gy = startY;
      for (let s = 0; s <= 36; s++) {
        const t = (s / 36) * u;
        // Slight initial drift while estimator converges in free space (t < 0.35), then snaps straight onto target!
        const residual = t < 0.35 ? Math.sin((t / 0.35) * Math.PI) * 26 : 0;
        gx = startX + residual;
        gy = startY + t * (plateY - startY);
        s === 0 ? ctx.moveTo(gx, gy) : ctx.lineTo(gx, gy);
      }
      ctx.stroke();
      ctx.fillStyle = C.blue;
      ctx.beginPath(); ctx.arc(gx, gy, 5.2, 0, Math.PI * 2); ctx.fill();

      // Dynamic status callout following the gated agent
      const inContact = (u > 0.38 && u < 0.72);
      if (inContact) {
        ctx.strokeStyle = C.green; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(gx, gy, 12 + Math.sin(clock * 8) * 2, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = C.green; ctx.font = '600 9.5px "JetBrains Mono", monospace';
        ctx.fillText('FROZEN (CONTACT)', gx - 124, gy + 4);
      } else if (u <= 0.38) {
        ctx.fillStyle = C.blue; ctx.font = '600 9.5px "JetBrains Mono", monospace';
        ctx.fillText('FREE-SPACE [FB]', gx - 114, gy + 4);
      } else {
        ctx.fillStyle = C.green; ctx.font = '600 9.5px "JetBrains Mono", monospace';
        ctx.fillText('RESCUED (0 TOK)', gx - 114, gy + 4);
      }

      // RIGHT PANEL: Drift Phase Diagram | Compute Pareto | 4-Tier 2027 Stack
      const rx = 430, ry = 32, rw = W - rx - 34, rh = 366;
      ctx.fillStyle = C.paper; ctx.strokeStyle = C.rule2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(rx, ry, rw, rh, 6); ctx.fill(); ctx.stroke();

      if (tab === 'k32') {
        ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText('Drift × Contact-Aware [FB] Phase Curve (k=32)', rx + 14, ry + 22);
        const pl = rx + 42, pr = rx + rw - 24, pt = ry + 48, pb = ry + rh - 64;
        const sx = (d) => pl + (d / 0.105) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);

        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = C.grid; ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 6, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0.0, 0.04, 0.07, 0.10].forEach((d) => ctx.fillText(`+${d.toFixed(2)}`, sx(d), pb + 15));
        ctx.fillStyle = C.ink3; ctx.font = '500 10px "Hanken Grotesk", sans-serif';
        ctx.fillText('Unknown Constant Lateral Drift (normalized bias)', (pl + pr) / 2, pb + 31);
        ctx.textAlign = 'left';

        const plot = (src, col, lbl, dash, dy) => {
          const rows = (src && src.rows || []).filter((r) => r.n_action_steps === 32).sort((a, b) => a.drift - b.drift);
          if (!rows.length) return;
          ctx.strokeStyle = col; ctx.lineWidth = 2.5;
          if (dash) ctx.setLineDash(dash);
          ctx.beginPath();
          rows.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.drift), sy(r.success_rate)) : ctx.lineTo(sx(r.drift), sy(r.success_rate)));
          ctx.stroke();
          ctx.setLineDash([]);
          rows.forEach((r) => {
            const cx = sx(r.drift), cy = sy(r.success_rate);
            ctx.fillStyle = C.paper; ctx.strokeStyle = col; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.arc(cx, cy, 4.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            if (!(r.drift === 0 && lbl.startsWith('Blind'))) {
              const ldy = r.drift === 0 ? -11 : dy;
              ctx.fillStyle = r.drift === 0 ? C.ink2 : col;
              ctx.font = '600 10px "JetBrains Mono", monospace'; ctx.textAlign = r.drift === 0 ? 'left' : 'center';
              ctx.fillText(`${Math.round(r.success_rate * 100)}%`, cx + (r.drift === 0 ? 6 : 0), cy + ldy);
              ctx.textAlign = 'left';
            }
            hotspots.push({ cx, cy, lbl, r });
          });
        };
        plot(D.exp8_open, C.red, 'Open-Chunk (no [FB])', [5, 3], 16);
        plot(D.exp8_blind, C.slate, 'Blind [FB]', [2, 2], 15);
        plot(D.exp8_gated, C.green, 'Contact-Aware [FB]', null, -11);

        // Clean bottom legend
        [['Open k=32', C.red], ['Blind [FB]', C.slate], ['Contact-Gated [FB]', C.green]].forEach(([nm, col], idx) => {
          const x = rx + 18 + idx * 116;
          ctx.fillStyle = col; ctx.fillRect(x, ry + rh - 18, 10, 3.5);
          ctx.fillStyle = C.ink2; ctx.font = '500 10px "Hanken Grotesk", sans-serif';
          ctx.fillText(nm, x + 14, ry + rh - 13);
        });
      } else if (tab === 'pareto') {
        ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText('Inference Token-Compute Pareto (Exp 5)', rx + 14, ry + 22);
        const nom = (D.exp5_nom && D.exp5_nom.rows) || [];
        const dr = (D.exp5_drift_nofb && D.exp5_drift_nofb.rows) || [];
        const fb = (D.exp5_drift_fb && D.exp5_drift_fb.rows) || [];
        const maxT = Math.max(1200, ...[...nom, ...dr, ...fb].map((r) => r.est_action_tokens_per_ep)) * 1.1;
        const pl = rx + 42, pr = rx + rw - 20, pt = ry + 48, pb = ry + rh - 54;
        const sx = (v) => pl + (v / maxT) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);

        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = C.grid; ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = C.ink3; ctx.font = '500 9px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 6, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0, 500, 1000, 1500].filter((x) => x <= maxT).forEach((x) => ctx.fillText(String(x), sx(x), pb + 15));
        ctx.fillStyle = C.ink3; ctx.font = '500 10px "Hanken Grotesk", sans-serif';
        ctx.fillText('VLM Action Tokens / Episode (lower = cheaper)', (pl + pr) / 2, pb + 31);
        ctx.textAlign = 'left';

        const drawP = (rows, col, dash, dy) => {
          const s = [...rows].sort((a, b) => a.est_action_tokens_per_ep - b.est_action_tokens_per_ep);
          if (!s.length) return;
          ctx.strokeStyle = col; ctx.lineWidth = 2.3;
          if (dash) ctx.setLineDash(dash);
          ctx.beginPath();
          s.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.est_action_tokens_per_ep), sy(r.success_rate)) : ctx.lineTo(sx(r.est_action_tokens_per_ep), sy(r.success_rate)));
          ctx.stroke(); ctx.setLineDash([]);
          s.forEach((r) => {
            const x = sx(r.est_action_tokens_per_ep), y = sy(r.success_rate);
            ctx.fillStyle = C.paper; ctx.strokeStyle = col; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(x, y, 4.4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = col; ctx.font = '600 9.5px "JetBrains Mono", monospace'; ctx.textAlign = 'center';
            ctx.fillText(`k=${r.n_action_steps} (${Math.round(r.success_rate * 100)}%)`, x, y + dy);
            ctx.textAlign = 'left';
          });
        };
        drawP(nom, C.blue, null, -10);
        drawP(dr, C.red, [5, 3], -10);
        drawP(fb, C.amber, null, 15);
      } else {
        // 4-TIER 2027 HIERARCHICAL STACK ARCHITECTURAL ELEVATION
        ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
        ctx.fillText('Emerging 4-Tier Hierarchical Control Stack', rx + 14, ry + 22);
        const tiers = [
          { t: 'TIER 1 · 0.1–1 Hz', nm: 'Episodic Agent (RoboThink · AMP1)', desc: 'Sparse [INST]/[FB] corrections & persistent memory', col: C.purple, bg: '#F3EEFF' },
          { t: 'TIER 2 · 1–5 Hz', nm: 'Discrete Bridge (Cover · ActionCodec2 · OAT)', desc: 'Causal / nested tokens for VLM pretraining & anytime stop', col: C.blue, bg: C.blueSoft },
          { t: 'TIER 3 · 20–30 Hz', nm: 'Continuous Expert (MR0 · SANA-Robot)', desc: 'Flow-matching & linear-memory WAM smooth motion', col: C.teal, bg: '#E6F4F1' },
          { t: 'TIER 4 · 200–1000 Hz', nm: 'Force Executor (C1F+D3F · Gated [FB])', desc: 'Sparse Newton force pulses & free-space drift shield', col: C.amber, bg: C.amberSoft },
        ];
        tiers.forEach((tr, i) => {
          const ty = ry + 42 + i * 78;
          ctx.fillStyle = tr.bg; ctx.strokeStyle = tr.col; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.roundRect(rx + 18, ty, rw - 36, 62, 6); ctx.fill(); ctx.stroke();
          ctx.fillStyle = tr.col; ctx.font = '600 9.5px "JetBrains Mono", monospace';
          ctx.fillText(tr.t, rx + 28, ty + 18);
          ctx.fillStyle = C.ink; ctx.font = '600 12px "Hanken Grotesk", sans-serif';
          ctx.fillText(tr.nm, rx + 28, ty + 36);
          ctx.fillStyle = C.ink3; ctx.font = '400 10.5px "Hanken Grotesk", sans-serif';
          ctx.fillText(tr.desc, rx + 28, ty + 52);

          if (i < 3) {
            // Animated downward plan pulse & upward feedback pulse between tiers!
            const pDown = (clock * 1.6 + i * 0.3) % 1;
            ctx.strokeStyle = C.rule; ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(rx + rw * 0.42, ty + 62); ctx.lineTo(rx + rw * 0.42, ty + 78);
            ctx.moveTo(rx + rw * 0.58, ty + 62); ctx.lineTo(rx + rw * 0.58, ty + 78);
            ctx.stroke();
            ctx.fillStyle = C.blue;
            ctx.beginPath(); ctx.arc(rx + rw * 0.42, ty + 62 + pDown * 16, 2.8, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = C.amber;
            ctx.beginPath(); ctx.arc(rx + rw * 0.58, ty + 78 - pDown * 16, 2.8, 0, Math.PI * 2); ctx.fill();
          }
        });
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (evt) => {
      if (tab !== 'k32') { hideTip(tipEl); return; }
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      const hit = hotspots.find((h) => (h.cx - mx) ** 2 + (h.cy - my) ** 2 < 160);
      if (hit) {
        showTip(tipEl, canvas, evt.clientX, evt.clientY, `
          <div class="th">${hit.lbl} (drift +${hit.r.drift.toFixed(2)})</div>
          <div class="tr"><span>LIBERO-Spatial SR</span><b>${fmtPct(hit.r.success_rate)}</b></div>
          ${hit.r.contact_frozen_frac !== undefined ? `<div class="tr"><span>Contact Frozen</span><b>${fmtPct(hit.r.contact_frozen_frac)}</b></div>` : ''}
        `);
      } else {
        hideTip(tipEl);
      }
    });
    canvas.addEventListener('mouseleave', () => hideTip(tipEl));

    tabs.forEach((b) => b.addEventListener('click', () => {
      tab = b.dataset.p5;
      tabs.forEach((x) => x.classList.toggle('on', x === b));
      hideTip(tipEl);
    }));
    requestAnimationFrame(draw);
  }

  // =========================================================================
  // APPENDIX TABLES HYDRATION
  // =========================================================================
  function hydrateTables(D) {
    const t1 = document.getElementById('tbl-exp1-body');
    if (t1 && D.exp1 && D.exp1.codecs) {
      t1.innerHTML = '';
      ['Bin256', 'FAST', 'OAT', 'QueST', 'Cover (EEF)'].forEach((nm) => {
        const c = D.exp1.codecs[nm];
        if (!c) return;
        const tr = document.createElement('tr');
        if (nm === 'Cover (EEF)') tr.className = 'hl';
        tr.innerHTML = `<td>${nm}</td><td class="n">${c.tokens_per_window_mean}</td><td class="n">${c.recon_pos_mae_mm.toFixed(2)} mm</td><td class="n">${c.single_tok_dev_p50_mm.toFixed(1)} mm</td><td class="n">${c.single_tok_dev_p90_mm.toFixed(1)} mm</td><td class="n">${(c.single_tok_fallback_rate * 100).toFixed(1)}%</td><td class="n">${c.prc_at_32.toFixed(3)}</td>`;
        t1.appendChild(tr);
      });
    }
    const t2 = document.getElementById('tbl-libero-body');
    if (t2 && D.dev_leaderboard) {
      t2.innerHTML = '';
      ['cover_eef_lib', 'fast_eef', 'bin256_eef', 'oat_joint', 'cover_h32_joint', 'holo_joint'].forEach((k) => {
        const r = D.dev_leaderboard[k];
        if (!r) return;
        const tr = document.createElement('tr');
        if (k === 'cover_eef_lib') tr.className = 'hl';
        tr.innerHTML = `<td>${r.label}</td><td>${r.track}</td><td class="n">${r.tok_per_win}</td><td class="n">${r.libero_spatial !== undefined ? fmtPct(r.libero_spatial) : '—'}</td><td class="n">${r.libero_object !== undefined ? fmtPct(r.libero_object) : '—'}</td><td class="n">${r.libero_goal !== undefined ? fmtPct(r.libero_goal) : '—'}</td><td class="n">${r.libero_10 !== undefined ? fmtPct(r.libero_10) : '—'}</td><td class="n"><strong>${fmtPct(r.mean)}</strong></td>`;
        t2.appendChild(tr);
      });
    }
    const t4 = document.getElementById('tbl-exp4-body');
    const tasks = D.exp4 && D.exp4.part4b_diagnostic_replay && D.exp4.part4b_diagnostic_replay.tasks;
    if (t4 && tasks) {
      t4.innerHTML = '';
      [['drawer_middle', 'Middle Drawer'], ['drawer_top_bowl', 'Top Drawer + Bowl'], ['bowl_freespace', 'Bowl Free-Space']].forEach(([tk, tl]) => {
        const td = tasks[tk];
        if (!td) return;
        ['franka', 'ur5e', 'iiwa', 'kinova3'].forEach((arm, idx) => {
          const ad = td.arms && td.arms[arm];
          if (!ad) return;
          const tr = document.createElement('tr');
          const cell = (m) => ad[m] ? `${Math.round(ad[m].rate * 100)}%` : '—';
          tr.innerHTML = `<td>${idx === 0 ? `<strong>${tl}</strong>` : ''}</td><td style="text-transform:uppercase;font-weight:600;">${arm}</td><td class="n">${cell('raw')}</td><td class="n">${cell('raw_kp225')}</td><td class="n">${cell('raw_kp75')}</td><td class="n">${cell('ach_d3')}</td><td class="n">${cell('c1F_grip_d3F')}</td><td class="n"><strong>${cell('c1F_d3F')}</strong></td><td class="n">${cell('achF_d3F')}</td>`;
          t4.appendChild(tr);
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const D = window.BLOG_DATA || {};
    initChrome();
    hydrateTables(D);
    initPlateHero(D);
    initPlateAnytime(D);
    initPlateCoverage(D);
    initPlateManifold(D);
    initPlateForce(D);
    initPlateClosedLoop(D);
  });
})();
