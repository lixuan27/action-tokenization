/* ==========================================================================
   Action Tokenization (of What?) — Kinetic Interactive Engine
   60fps HiDPI Canvas playgrounds + Synchronized MuJoCo video HUDs +
   Interactive SVG charts powered 100% by window.BLOG_DATA.
   ========================================================================== */
(function () {
  'use strict';

  const C = {
    blue: '#1A73E8',
    blueLt: '#60A5FA',
    amber: '#E77500',
    amberLt: '#F59E0B',
    red: '#DC2626',
    green: '#16A34A',
    teal: '#0D9488',
    purple: '#7C3AED',
    slate: '#64748B',
    ink: '#181A1F',
    ink2: '#3A3F4A',
    ink3: '#636A78',
    rule: '#E4E7EC',
    rule2: '#EEF0F4',
    paper2: '#F7F8FA',
    darkGrid: 'rgba(255,255,255,0.09)',
    darkText: '#E2E8F0',
    darkMuted: '#94A3B8',
  };

  const SVG_NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs = {}, text = null) {
    const n = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v !== null && v !== undefined) n.setAttribute(k, String(v));
    }
    if (text !== null) n.textContent = String(text);
    return n;
  }
  function makeSvg(w, h) {
    return el('svg', { viewBox: `0 0 ${w} ${h}`, width: w, height: h, role: 'img' });
  }
  function fmtPct(v, d = 1) { return (v * 100).toFixed(d) + '%'; }

  function attachTip(box) {
    let tip = box.querySelector('.tip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'tip';
      box.appendChild(tip);
    }
    return {
      show(evt, html) {
        tip.innerHTML = html;
        tip.classList.add('show');
        const br = box.getBoundingClientRect();
        const x = evt.clientX - br.left + 14;
        const y = evt.clientY - br.top - 12;
        const tw = tip.offsetWidth || 190;
        const th = tip.offsetHeight || 72;
        tip.style.left = Math.min(Math.max(8, x), Math.max(8, br.width - tw - 10)) + 'px';
        tip.style.top = (y + th > br.height ? Math.max(8, y - th - 10) : Math.max(8, y)) + 'px';
      },
      hide() { tip.classList.remove('show'); }
    };
  }
  function bindHover(node, tip, htmlFn) {
    node.style.cursor = 'pointer';
    node.addEventListener('mouseenter', (e) => tip.show(e, htmlFn()));
    node.addEventListener('mousemove', (e) => tip.show(e, htmlFn()));
    node.addEventListener('mouseleave', () => tip.hide());
  }

  function setupHiDPI(canvas, logicalW, logicalH) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(logicalW * dpr);
    canvas.height = Math.round(logicalH * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  function emptyBox(container, msg, dark = false) {
    const bg = dark ? 'rgba(255,255,255,0.03)' : '#F7F8FA';
    const bd = dark ? 'rgba(255,255,255,0.12)' : '#E4E7EC';
    const col = dark ? '#94A3B8' : '#636A78';
    container.innerHTML = `<div style="padding:32px 18px;text-align:center;color:${col};font-size:13.5px;background:${bg};border-radius:12px;border:1px dashed ${bd};">${msg}</div>`;
  }

  // =========================================================================
  // 0. EDITORIAL CHROME: Progress Bar, Dot Rail, Reveal, Video HUDs, Footnotes
  // =========================================================================
  function initChrome() {
    const bar = document.getElementById('scroll-progress');
    const railLinks = [...document.querySelectorAll('.dot-rail a, .topbar .nav a[href^="#"]')];
    const sections = [...document.querySelectorAll('section[id]')];

    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = pct.toFixed(2) + '%';
      const pos = window.scrollY + 180;
      let cur = sections[0] ? sections[0].id : 'hero';
      for (const s of sections) {
        if (s.offsetTop <= pos) cur = s.id;
      }
      railLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Smooth scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
      }, { threshold: 0.06 });
      reveals.forEach((r) => io.observe(r));
      // Immediately reveal anything already in viewport (also helps headless screenshots!)
      setTimeout(() => reveals.forEach((r) => {
        const rect = r.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.15) r.classList.add('in');
      }), 80);
    } else {
      reveals.forEach((r) => r.classList.add('in'));
    }

    // Wire all Cinema video players (Play/Pause, Playback Rate, Live Scrubber)
    document.querySelectorAll('.cinema-frame').forEach((frame) => {
      const vid = frame.querySelector('video');
      const playBtn = frame.querySelector('[data-play]');
      const rateBtns = frame.querySelectorAll('[data-rate]');
      const scrub = frame.querySelector('[data-scrub]');
      const timeEl = frame.querySelector('[data-time]');
      if (!vid) return;

      if (playBtn) {
        playBtn.addEventListener('click', () => {
          if (vid.paused) { vid.play(); playBtn.textContent = '❚❚ Pause'; playBtn.classList.add('on'); }
          else { vid.pause(); playBtn.textContent = '▶ Play'; playBtn.classList.remove('on'); }
        });
      }
      rateBtns.forEach((b) => {
        b.addEventListener('click', () => {
          vid.playbackRate = parseFloat(b.dataset.rate) || 1.0;
          rateBtns.forEach((x) => x.classList.toggle('on', x === b));
        });
      });
      if (scrub) {
        let dragging = false;
        scrub.addEventListener('mousedown', () => { dragging = true; });
        scrub.addEventListener('mouseup', () => { dragging = false; });
        scrub.addEventListener('input', () => {
          if (vid.duration && isFinite(vid.duration)) {
            vid.currentTime = (parseFloat(scrub.value) / 1000) * vid.duration;
          }
        });
        vid.addEventListener('timeupdate', () => {
          if (!vid.duration || !isFinite(vid.duration)) return;
          if (!dragging) scrub.value = Math.round((vid.currentTime / vid.duration) * 1000);
          if (timeEl) timeEl.textContent = `${vid.currentTime.toFixed(1)}s / ${vid.duration.toFixed(1)}s`;
        });
      }
    });

    // Hover Footnotes & Reference List
    const notesMap = new Map();
    document.querySelectorAll('aside.fnote[data-n]').forEach((a) => notesMap.set(a.dataset.n, a.innerHTML));
    let activePop = null;
    const closePop = () => { if (activePop) { activePop.remove(); activePop = null; } };

    document.querySelectorAll('sup.fn').forEach((sup) => {
      const nums = sup.textContent.trim().split(',').map((s) => s.trim());
      sup.setAttribute('tabindex', '0');
      const open = () => {
        closePop();
        const html = nums.map((n) => notesMap.get(n) ? `<div><b>[${n}]</b> ${notesMap.get(n)}</div>` : '').join('<hr style="border:0;border-top:1px solid rgba(255,255,255,0.12);margin:6px 0;">');
        if (!html) return;
        const pop = document.createElement('div');
        pop.className = 'fnpop';
        pop.innerHTML = html;
        document.body.appendChild(pop);
        const r = sup.getBoundingClientRect();
        const pw = Math.min(360, window.innerWidth - 24);
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
  // 1. ACT I: INTERACTIVE ANYTIME BUDGET & CLICK-TO-PERTURB SANDBOX
  // =========================================================================
  function initAct1Sandbox(D) {
    const canvas = document.getElementById('anytime-canvas');
    const slider = document.getElementById('anytime-slider');
    const valLbl = document.getElementById('anytime-val');
    const sweepBtn = document.getElementById('anytime-sweep');
    const modeBtns = document.querySelectorAll('[data-sbox-mode]');
    const pCodecBtns = document.querySelectorAll('[data-pcodec]');
    const ribbon = document.getElementById('tok-ribbon');
    const readout = document.getElementById('anytime-readout');
    const legEl = document.getElementById('anytime-legend');
    if (!canvas) return;

    const W = 700, H = 390;
    const ctx = setupHiDPI(canvas, W, H);
    const codecStyle = {
      'Cover (EEF)': { col: C.blue, w: 3.0 },
      'OAT': { col: C.purple, w: 2.6 },
      'FAST': { col: C.amber, w: 2.6 },
      'Bin256': { col: C.teal, w: 2.2 },
      'QueST': { col: C.slate, w: 1.9 },
    };

    let mode = 'anytime';
    let budgetPct = 50;
    let sweeping = false;
    let sweepDir = 1;
    let pCodec = 'FAST';
    let pPosIdx = 0; // 0=early, 1=mid, 2=late

    function interpHeroPath(morphMap, pct) {
      const keys = Object.keys(morphMap).map(Number).sort((a, b) => a - b);
      if (pct <= keys[0]) return morphMap[String(keys[0])];
      if (pct >= keys[keys.length - 1]) return morphMap[String(keys[keys.length - 1])];
      let lo = keys[0], hi = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (pct >= keys[i] && pct <= keys[i + 1]) { lo = keys[i]; hi = keys[i + 1]; break; }
      }
      const alpha = (pct - lo) / Math.max(1, hi - lo);
      const A = morphMap[String(lo)], B = morphMap[String(hi)];
      return A.map((p, idx) => [
        p[0] + (B[idx][0] - p[0]) * alpha,
        p[1] + (B[idx][1] - p[1]) * alpha,
        p[2] + (B[idx][2] - p[2]) * alpha,
      ]);
    }

    function interpCurveStat(curve, pct, field) {
      const sorted = [...curve].sort((a, b) => a.budget_pct - b.budget_pct);
      if (pct <= sorted[0].budget_pct) return sorted[0][field];
      if (pct >= sorted[sorted.length - 1].budget_pct) return sorted[sorted.length - 1][field];
      for (let i = 0; i < sorted.length - 1; i++) {
        if (pct >= sorted[i].budget_pct && pct <= sorted[i + 1].budget_pct) {
          const t = (pct - sorted[i].budget_pct) / (sorted[i + 1].budget_pct - sorted[i].budget_pct);
          return sorted[i][field] + (sorted[i + 1][field] - sorted[i][field]) * t;
        }
      }
      return sorted[0][field];
    }

    function buildTokenRibbon() {
      if (!ribbon || !D.exp1 || !D.exp1.codecs || !D.exp1.codecs[pCodec]) return;
      const cObj = D.exp1.codecs[pCodec];
      const bins = cObj.perturbation_by_position || [];
      ribbon.innerHTML = '<span style="font-size:12px;font-weight:600;color:#636A78;margin-right:6px;align-self:center;">Click a token slot:</span>';
      bins.forEach((b, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tok-chip' + (idx === pPosIdx ? ' hit' : '');
        btn.textContent = `pos ${Math.round(b.rel_pos * 100)}% (${Math.round(b.max_dev_p50_mm)}mm)`;
        btn.addEventListener('click', () => { pPosIdx = idx; buildTokenRibbon(); draw(); });
        ribbon.appendChild(btn);
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#F7F8FA';
      ctx.fillRect(0, 0, W, H);

      if (mode === 'anytime' && D.exp6_morph && D.exp6_morph.hero_gt_xyz_mm) {
        const gt = D.exp6_morph.hero_gt_xyz_mm;
        const codecs = D.exp6_morph.codecs;
        // Bounding box around GT with clean padding
        const xs = gt.map((p) => p[0]), ys = gt.map((p) => p[1]);
        const pad = 26;
        const xMin = Math.min(...xs) - pad, xMax = Math.max(...xs) + pad;
        const yMin = Math.min(...ys) - pad, yMax = Math.max(...ys) + pad;
        const mx = (v) => 56 + ((Math.max(xMin - 20, Math.min(xMax + 20, v)) - xMin) / Math.max(1, xMax - xMin)) * (W - 96);
        const my = (v) => (H - 44) - ((Math.max(yMin - 20, Math.min(yMax + 20, v)) - yMin) / Math.max(1, yMax - yMin)) * (H - 86);

        // Subtle coordinate grid
        ctx.strokeStyle = '#E8ECF2';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
          const gx = 56 + (i / 5) * (W - 96);
          ctx.beginPath(); ctx.moveTo(gx, 42); ctx.lineTo(gx, H - 44); ctx.stroke();
          const gy = 42 + (i / 5) * (H - 86);
          ctx.beginPath(); ctx.moveTo(56, gy); ctx.lineTo(W - 40, gy); ctx.stroke();
        }

        // Title header inside canvas
        ctx.fillStyle = '#181A1F';
        ctx.font = '700 13.5px "Hanken Grotesk", sans-serif';
        ctx.fillText(`Real 32-Step LIBERO EEF Trajectory @ ${budgetPct}% Autoregressive Token Budget`, 20, 26);

        // Draw GT dashed reference + highlight frame-16 receding-horizon boundary!
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = '#94A3B8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        gt.forEach((p, i) => { i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1])); });
        ctx.stroke();
        ctx.restore();

        // Mark step 16 (receding-horizon execution cutoff) on GT
        const p16 = gt[15];
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#181A1F';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(mx(p16[0]), my(p16[1]), 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#3A3F4A';
        ctx.font = '600 11px "JetBrains Mono", monospace';
        ctx.fillText('step 16 (exec cutoff)', mx(p16[0]) + 10, my(p16[1]) + 4);

        // Draw all 5 morphed codec trajectories
        ['QueST', 'Bin256', 'FAST', 'OAT', 'Cover (EEF)'].forEach((cname) => {
          const cd = codecs[cname];
          if (!cd) return;
          const path = interpHeroPath(cd.hero_morph_xyz_mm, budgetPct);
          const st = codecStyle[cname];
          ctx.strokeStyle = st.col;
          ctx.lineWidth = st.w;
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';
          ctx.beginPath();
          path.forEach((p, i) => { i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1])); });
          ctx.stroke();
          // Glowing head dot at step 16 and step 32
          const endP = path[path.length - 1];
          ctx.fillStyle = st.col;
          ctx.beginPath(); ctx.arc(mx(endP[0]), my(endP[1]), 4.5, 0, Math.PI * 2); ctx.fill();
        });

        // Start point
        ctx.fillStyle = '#181A1F';
        ctx.beginPath(); ctx.arc(mx(gt[0][0]), my(gt[0][1]), 5.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#636A78';
        ctx.font = '500 11.5px "JetBrains Mono", monospace';
        ctx.fillText('End-Effector Cumulative X–Y Path (mm) · Solid = Decoded @ Budget · Dashed = Ground Truth', 20, H - 14);

        // Update 4 live KPIs for the current budget
        if (readout) {
          const cov16 = interpCurveStat(codecs['Cover (EEF)'].curve, budgetPct, 'mae_first16_mm');
          const oat16 = interpCurveStat(codecs['OAT'].curve, budgetPct, 'mae_first16_mm');
          const fst16 = interpCurveStat(codecs['FAST'].curve, budgetPct, 'mae_first16_mm');
          const bin16 = interpCurveStat(codecs['Bin256'].curve, budgetPct, 'mae_first16_mm');
          readout.innerHTML = `
            <div class="mkpi"><div class="mkpi-l">Cover (EEF) · First-16 MAE</div><div class="mkpi-v" style="color:${C.blue};">${cov16.toFixed(1)} mm</div><div class="mkpi-s">causal temporal prefix</div></div>
            <div class="mkpi"><div class="mkpi-l">OAT · First-16 MAE</div><div class="mkpi-v" style="color:${C.purple};">${oat16.toFixed(1)} mm</div><div class="mkpi-s">coarse→fine precision</div></div>
            <div class="mkpi"><div class="mkpi-l">FAST · First-16 MAE</div><div class="mkpi-v" style="color:${C.amber};">${fst16.toFixed(1)} mm</div><div class="mkpi-s">global DCT spectral</div></div>
            <div class="mkpi"><div class="mkpi-l">Bin256 · First-16 MAE</div><div class="mkpi-v" style="color:${C.teal};">${bin16.toFixed(1)} mm</div><div class="mkpi-s">freezes past step k/7</div></div>
          `;
        }
        if (legEl) {
          legEl.innerHTML = Object.entries(codecStyle).map(([n, s]) => `<span class="li"><span class="sw" style="background:${s.col};"></span>${n}</span>`).join('') +
            `<span class="li"><span class="dash-sw" style="border-color:#94A3B8;"></span>Ground Truth (32 steps)</span>`;
        }
      } else if (D.exp1 && D.exp1.codecs && D.exp1.codecs[pCodec]) {
        // Click-to-Perturb mode using Exp 1 real hero & 600-window position blast stats
        const cObj = D.exp1.codecs[pCodec];
        const gt = D.exp1.hero_trajectory.gt_xyz_mm;
        const clean = cObj.hero.clean_xyz_mm;
        const posKey = pPosIdx <= 1 ? 'early' : (pPosIdx <= 3 ? 'mid' : 'late');
        const pert = cObj.hero.perturbed[posKey];
        const bin = cObj.perturbation_by_position[Math.min(pPosIdx, cObj.perturbation_by_position.length - 1)];

        const cxs = clean.map((p) => p[0]), cys = clean.map((p) => p[1]);
        const xMin = Math.min(...cxs) - 55, xMax = Math.max(...cxs) + 55;
        const yMin = Math.min(...cys) - 55, yMax = Math.max(...cys) + 55;
        const mx = (v) => 56 + ((Math.max(xMin - 40, Math.min(xMax + 40, v)) - xMin) / Math.max(1, xMax - xMin)) * (W - 96);
        const my = (v) => (H - 44) - ((Math.max(yMin - 40, Math.min(yMax + 40, v)) - yMin) / Math.max(1, yMax - yMin)) * (H - 86);

        ctx.fillStyle = '#181A1F';
        ctx.font = '700 13.5px "Hanken Grotesk", sans-serif';
        ctx.fillText(`1-Token Perturbation Blast · ${pCodec} @ Position ${Math.round(bin.rel_pos * 100)}% (600-Window Audit)`, 20, 26);

        // Clean path
        ctx.strokeStyle = C.blue; ctx.lineWidth = 3;
        ctx.beginPath(); clean.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1]))); ctx.stroke();
        // Perturbed path
        ctx.strokeStyle = bin.max_dev_p50_mm > 80 ? C.red : C.amber; ctx.lineWidth = 3.2;
        ctx.beginPath(); pert.xyz_mm.forEach((p, i) => i === 0 ? ctx.moveTo(mx(p[0]), my(p[1])) : ctx.lineTo(mx(p[0]), my(p[1]))); ctx.stroke();
        // End marker
        const pe = pert.xyz_mm[pert.xyz_mm.length - 1];
        ctx.fillStyle = bin.max_dev_p50_mm > 80 ? C.red : C.amber;
        ctx.beginPath(); ctx.arc(mx(pe[0]), my(pe[1]), 6.5, 0, Math.PI * 2); ctx.fill();

        if (readout) {
          readout.innerHTML = `
            <div class="mkpi"><div class="mkpi-l">Median Blast (p50)</div><div class="mkpi-v" style="color:${bin.max_dev_p50_mm > 100 ? C.red : C.amber};">${bin.max_dev_p50_mm} mm</div><div class="mkpi-s">at pos ${Math.round(bin.rel_pos * 100)}%</div></div>
            <div class="mkpi"><div class="mkpi-l">90th Pct Blast (p90)</div><div class="mkpi-v" style="color:${C.ink};">${bin.max_dev_p90_mm} mm</div><div class="mkpi-s">tail deviation</div></div>
            <div class="mkpi"><div class="mkpi-l">Invalid Fallback</div><div class="mkpi-v" style="color:${bin.fallback_rate > 0.2 ? C.red : C.green};">${(bin.fallback_rate * 100).toFixed(1)}%</div><div class="mkpi-s">unconstrained swap</div></div>
            <div class="mkpi"><div class="mkpi-l">Physical Rank (PRC@32)</div><div class="mkpi-v" style="color:${C.blue};">${cObj.prc_at_32.toFixed(3)}</div><div class="mkpi-s">clean MAE ${cObj.recon_pos_mae_mm} mm</div></div>
          `;
        }
        if (legEl) {
          legEl.innerHTML = `
            <span class="li"><span class="sw" style="background:${C.blue};"></span>Clean decoded path</span>
            <span class="li"><span class="sw" style="background:${C.red};"></span>After 1-token swap</span>
          `;
        }
      }
    }

    // Smooth auto-sweep animation
    function tickSweep() {
      if (!sweeping) return;
      budgetPct += sweepDir * 0.65;
      if (budgetPct >= 100) { budgetPct = 100; sweepDir = -1; }
      if (budgetPct <= 15) { budgetPct = 15; sweepDir = 1; }
      slider.value = Math.round(budgetPct);
      valLbl.textContent = `${Math.round(budgetPct)}%`;
      draw();
      requestAnimationFrame(tickSweep);
    }

    if (slider) {
      slider.addEventListener('input', () => {
        sweeping = false;
        if (sweepBtn) { sweepBtn.textContent = '▶ Sweep 15%→100%'; sweepBtn.classList.remove('on'); }
        budgetPct = parseInt(slider.value, 10);
        valLbl.textContent = `${budgetPct}%`;
        draw();
      });
    }
    if (sweepBtn) {
      sweepBtn.addEventListener('click', () => {
        sweeping = !sweeping;
        sweepBtn.textContent = sweeping ? '❚❚ Stop Sweep' : '▶ Sweep 15%→100%';
        sweepBtn.classList.toggle('on', sweeping);
        if (sweeping) requestAnimationFrame(tickSweep);
      });
    }
    modeBtns.forEach((b) => {
      b.addEventListener('click', () => {
        mode = b.dataset.sboxMode;
        sweeping = false;
        modeBtns.forEach((x) => x.classList.toggle('on', x === b));
        document.getElementById('sbox-anytime-ctrls').style.display = mode === 'anytime' ? '' : 'none';
        document.getElementById('sbox-perturb-ctrls').style.display = mode === 'perturb' ? '' : 'none';
        if (mode === 'perturb') buildTokenRibbon();
        draw();
      });
    });
    pCodecBtns.forEach((b) => {
      b.addEventListener('click', () => {
        pCodec = b.dataset.pcodec;
        pCodecBtns.forEach((x) => x.classList.toggle('on', x === b));
        buildTokenRibbon();
        draw();
      });
    });

    draw();
    renderExp6LiveChart(D);
  }

  function renderExp6LiveChart(D) {
    const box = document.getElementById('fig-exp6-live');
    if (!box) return;
    const tip = attachTip(box);
    const cov = D.exp6_cover && D.exp6_cover.rows;
    const oat = D.exp6_oat && D.exp6_oat.rows;
    const fst = D.exp6_fast && D.exp6_fast.rows;

    // Fallback gracefully to Exp 6 offline budget-accuracy curve if live GPU rows are still arriving
    if (!cov && !oat && !fst) {
      if (D.exp6_morph && D.exp6_morph.codecs) {
        const W = 430, H = 225;
        const svg = makeSvg(W, H);
        const m = { l: 46, r: 16, t: 24, b: 36 };
        const pw = W - m.l - m.r, ph = H - m.t - m.b;
        const sx = (p) => m.l + ((p - 15) / 85) * pw;
        const sy = (v) => m.t + ph - (Math.min(v, 100) / 100) * ph;
        svg.appendChild(el('text', { x: m.l, y: 14, class: 'pn', 'font-size': 12 }, 'First-16-Step MAE vs. Token Budget (200 LIBERO Windows)'));
        [0, 25, 50, 75, 100].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 6, y: sy(y) + 3, 'text-anchor': 'end', class: 'tk', 'font-size': 10 }, y));
        });
        [20, 50, 80, 100].forEach((x) => {
          svg.appendChild(el('text', { x: sx(x), y: H - m.b + 14, 'text-anchor': 'middle', class: 'tk', 'font-size': 10 }, `${x}%`));
        });
        const cols = { 'Cover (EEF)': C.blue, 'OAT': C.purple, 'FAST': C.amber, 'Bin256': C.teal };
        Object.entries(cols).forEach(([nm, col]) => {
          const cd = D.exp6_morph.codecs[nm];
          if (!cd) return;
          const pts = cd.curve.map((r) => `${sx(r.budget_pct).toFixed(1)},${sy(r.mae_first16_mm).toFixed(1)}`).join(' ');
          svg.appendChild(el('polyline', { points: pts, fill: 'none', stroke: col, 'stroke-width': 2.2 }));
        });
        box.insertBefore(svg, box.firstChild);
      }
      return;
    }

    const W = 440, H = 235;
    const svg = makeSvg(W, H);
    const m = { l: 46, r: 20, t: 26, b: 40 };
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const all = [...(cov || []), ...(oat || []), ...(fst || [])];
    const maxTok = Math.max(55, ...all.map((r) => r.mean_tokens_per_chunk)) * 1.1;
    const sx = (v) => m.l + (v / maxTok) * pw;
    const sy = (v) => m.t + ph - v * ph;

    svg.appendChild(el('text', { x: m.l, y: 15, class: 'pn', 'font-size': 12 }, 'Live Qwen3-VL-2B Anytime Truncation (LIBERO-Spatial SR)'));
    [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
      svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': y ? '3 3' : null }));
      svg.appendChild(el('text', { x: m.l - 6, y: sy(y) + 3, 'text-anchor': 'end', class: 'tk', 'font-size': 10 }, `${Math.round(y * 100)}%`));
    });
    [0, 15, 30, 45, 60].filter((x) => x <= maxTok).forEach((x) => {
      svg.appendChild(el('text', { x: sx(x), y: H - m.b + 14, 'text-anchor': 'middle', class: 'tk', 'font-size': 10 }, `${x}`));
    });
    svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 5, 'text-anchor': 'middle', class: 'ax', 'font-size': 11 }, 'Generated Action Tokens / Chunk (lower = faster VLM)'));

    const plotSeries = (rows, col, name, dy) => {
      if (!rows || !rows.length) return;
      const s = [...rows].sort((a, b) => a.mean_tokens_per_chunk - b.mean_tokens_per_chunk);
      if (s.length > 1) {
        const pts = s.map((r) => `${sx(r.mean_tokens_per_chunk).toFixed(1)},${sy(r.success_rate).toFixed(1)}`).join(' ');
        svg.appendChild(el('polyline', { points: pts, fill: 'none', stroke: col, 'stroke-width': 2.6 }));
      }
      s.forEach((r) => {
        const cx = sx(r.mean_tokens_per_chunk), cy = sy(r.success_rate);
        const c = el('circle', { cx, cy, r: 5.2, fill: col, stroke: '#fff', 'stroke-width': 1.5 });
        bindHover(c, tip, () => `
          <div class="th">${name} · ${r.setting}</div>
          <div class="tr"><span>LIBERO-Spatial SR</span><b>${fmtPct(r.success_rate)}</b></div>
          <div class="tr"><span>Tokens / chunk</span><b>${r.mean_tokens_per_chunk}</b></div>
          <div class="tr"><span>Chunk latency</span><b>${r.median_chunk_ms} ms</b></div>
        `);
        svg.appendChild(c);
        const ldy = (name.startsWith('OAT') && r.budget_param === 12) ? 16 : dy;
        svg.appendChild(el('text', { x: cx, y: cy + ldy, 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 700, fill: col }, `${Math.round(r.success_rate * 100)}%`));
      });
    };
    plotSeries(cov, C.blue, 'Cover (EEF)', -10);
    plotSeries(oat, C.purple, 'OAT (Joint)', -10);
    plotSeries(fst, C.amber, 'FAST (EEF)', 17);

    const old = box.querySelector('svg');
    if (old) old.remove();
    box.insertBefore(svg, box.firstChild);
    let oldLeg = box.querySelector('.legend');
    if (oldLeg) oldLeg.remove();
    const leg = document.createElement('div');
    leg.className = 'legend';
    leg.style.margin = '4px 0 0';
    leg.style.fontSize = '11.5px';
    leg.innerHTML = `
      <span class="li"><span class="sw" style="background:${C.blue};"></span>Cover (EEF) Causal Stop</span>
      <span class="li"><span class="sw" style="background:${C.purple};"></span>OAT (Joint) Coarse→Fine</span>
      ${fst ? `<span class="li"><span class="sw" style="background:${C.amber};"></span>FAST (EEF) Spectral</span>` : ''}
    `;
    box.appendChild(leg);
  }

  // =========================================================================
  // 2. ACT I DEEP DRAWER: Fig 1 (Rate-Distortion / LOFO / Val-CE)
  // =========================================================================
  function initFig1(D) {
    const box = document.getElementById('fig1-plot');
    const btns = document.querySelectorAll('#fig1-btns .tgl');
    if (!box) return;
    const tip = attachTip(box);
    let view = 'rd';

    function draw() {
      const W = 740, H = 290;
      const svg = makeSvg(W, H);
      const m = { l: 58, r: 28, t: 22, b: 44 };
      const pw = W - m.l - m.r, ph = H - m.t - m.b;

      if (view === 'rd' && D.rd_fixed136) {
        const rows = D.rd_fixed136.rows || [];
        const fast = rows.filter((r) => r.family === 'fast_plus').sort((a, b) => a.mb - b.mb);
        const holo = rows.filter((r) => r.family === 'holo').sort((a, b) => a.mb - b.mb);
        const bins = rows.filter((r) => r.family === 'bin' && r.mb <= 8.5 && r.joint_mae <= 0.6).sort((a, b) => a.mb - b.mb);
        const sx = (v) => m.l + (Math.min(v, 8.5) / 8.5) * pw;
        const sy = (v) => m.t + ph - (Math.min(v, 0.25) / 0.25) * ph;
        [0, 0.05, 0.1, 0.15, 0.2, 0.25].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', class: 'tk' }, y.toFixed(2)));
        });
        [0, 2, 4, 6, 8].forEach((x) => {
          svg.appendChild(el('text', { x: sx(x), y: H - m.b + 16, 'text-anchor': 'middle', class: 'tk' }, `${x} MB`));
        });
        const plot = (arr, col, lbl, dash) => {
          if (!arr.length) return;
          svg.appendChild(el('polyline', { points: arr.map((r) => `${sx(r.mb)},${sy(r.joint_mae)}`).join(' '), fill: 'none', stroke: col, 'stroke-width': 2.5, 'stroke-dasharray': dash }));
          arr.forEach((r) => {
            const c = el('circle', { cx: sx(r.mb), cy: sy(r.joint_mae), r: 4.8, fill: col, stroke: '#fff', 'stroke-width': 1.4 });
            bindHover(c, tip, () => `<div class="th">${r.method}</div><div class="tr"><span>Size</span><b>${r.mb.toFixed(2)} MB</b></div><div class="tr"><span>Joint MAE</span><b>${r.joint_mae.toFixed(4)} rad</b></div>`);
            svg.appendChild(c);
          });
          const last = arr[arr.length - 1];
          svg.appendChild(el('text', { x: lbl.startsWith('Uniform') ? sx(last.mb) - 6 : sx(last.mb) + 8, y: lbl.startsWith('Uniform') ? sy(last.joint_mae) - 10 : sy(last.joint_mae) + 4, 'text-anchor': lbl.startsWith('Uniform') ? 'end' : 'start', class: 'vl', fill: col }, lbl));
        };
        plot(fast, C.blue, 'FAST+ (training-free)');
        plot(holo, C.red, 'Holo Graph-FSQ (1,300 GPU·h)');
        plot(bins, C.slate, 'Uniform Binning', '4 3');
        svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 8, 'text-anchor': 'middle', class: 'ax' }, 'Bitstream size on fixed136 panel (6.93M scalars)'));
      } else if (view === 'lofo' && D.rd_fixed136) {
        const rows = D.rd_fixed136.lofo_degradation || [];
        const sx = (v) => m.l + 110 + (v / 9.5) * (pw - 120);
        const bh = 30, gap = 14;
        rows.forEach((r, i) => {
          const y = m.t + i * (bh + gap);
          const col = r.ratio <= 1.1 ? C.blue : (r.ratio >= 5 ? C.red : C.amber);
          svg.appendChild(el('text', { x: m.l + 102, y: y + 19, 'text-anchor': 'end', class: 'rl' }, r.robot));
          const bar = el('rect', { x: sx(0), y: y + 2, width: Math.max(4, sx(r.ratio) - sx(0)), height: bh - 4, rx: 4, fill: col });
          svg.appendChild(bar);
          svg.appendChild(el('text', { x: sx(r.ratio) + 8, y: y + 19, class: 'vl', fill: col }, `${r.ratio.toFixed(1)}× (${r.mae_heldout.toFixed(3)} rad)`));
        });
      } else if (D.exp1 && D.exp1.train_curves) {
        const curves = D.exp1.train_curves;
        const lb = D.dev_leaderboard || {};
        const pal = {
          cover_eef_lib: { col: C.blue, lbl: 'Cover (EEF)' },
          fast_eef: { col: C.amber, lbl: 'FAST (EEF)' },
          bin256_eef: { col: C.teal, lbl: 'Bin256 (EEF)' },
          oat_joint: { col: C.purple, lbl: 'OAT (Joint)' },
          cover_h32_joint: { col: C.slate, lbl: 'Cover (Joint)' },
          holo_joint: { col: C.red, lbl: 'Holo FSQ' },
        };
        const keys = Object.keys(curves);
        const allPts = keys.flatMap((k) => curves[k]);
        const sx = (v) => m.l + (v / 30000) * (pw - 160);
        const sy = (v) => m.t + ph - ((v - 1.0) / 3.5) * ph;
        [1.0, 2.0, 3.0, 4.0].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: m.l + pw - 160, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': '3 3' }));
          svg.appendChild(el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', class: 'tk' }, y.toFixed(1)));
        });
        svg.appendChild(el('line', { x1: sx(12000), y1: m.t, x2: sx(12000), y2: H - m.b, stroke: C.amber, 'stroke-dasharray': '4 3', 'stroke-width': 1.4 }));
        const ends = [];
        keys.forEach((k) => {
          const pts = curves[k];
          const st = pal[k] || { col: C.ink3, lbl: k };
          const sr = lb[k] && lb[k].mean !== undefined ? ` · ${(lb[k].mean * 100).toFixed(1)}%` : '';
          svg.appendChild(el('polyline', { points: pts.map((p) => `${sx(p.step)},${sy(p.val_ce)}`).join(' '), fill: 'none', stroke: st.col, 'stroke-width': k === 'cover_eef_lib' ? 2.8 : 2.0 }));
          const last = pts[pts.length - 1];
          ends.push({ x: sx(last.step) + 8, y: sy(last.val_ce) + 4, col: st.col, lbl: st.lbl + sr });
        });
        ends.sort((a, b) => a.y - b.y);
        for (let i = 1; i < ends.length; i++) if (ends[i].y - ends[i - 1].y < 15) ends[i].y = ends[i - 1].y + 15;
        ends.forEach((l) => svg.appendChild(el('text', { x: l.x, y: l.y, 'font-size': 11, 'font-weight': 600, fill: l.col }, l.lbl)));
      }
      const old = box.querySelector('svg');
      if (old) old.remove();
      box.insertBefore(svg, box.firstChild);
    }

    btns.forEach((b) => b.addEventListener('click', () => {
      view = b.dataset.f1;
      btns.forEach((x) => x.classList.toggle('on', x === b));
      draw();
    }));
    draw();
  }

  // =========================================================================
  // 3. ACT II: 6-ARM LEADERBOARD | FAILURE CINEMA + BAR | PASS@K (Dark Stage)
  // =========================================================================
  function initAct2Stage(D) {
    const box = document.getElementById('fig3-plot');
    const vidWrap = document.getElementById('fig3-video-wrap');
    const btns = document.querySelectorAll('#fig3-btns .tgl');
    if (!box) return;
    const tip = attachTip(box);
    let tab = 'matrix';

    function draw() {
      if (vidWrap) vidWrap.style.display = tab === 'failures' ? 'block' : 'none';
      const W = 760, H = tab === 'failures' ? 255 : 310;
      const svg = makeSvg(W, H);

      if (tab === 'matrix') {
        const order = ['cover_eef_lib', 'fast_eef', 'bin256_eef', 'oat_joint', 'cover_h32_joint', 'holo_joint'];
        const rows = order.map((k) => D.dev_leaderboard && D.dev_leaderboard[k]).filter(Boolean);
        const m = { l: 170, r: 72, t: 28, b: 32 };
        const pw = W - m.l - m.r;
        const rowH = 40;
        const sx = (v) => m.l + v * pw;
        const totH = rows.length * rowH + 12;

        [0, 0.25, 0.5, 0.75, 1.0].forEach((x) => {
          svg.appendChild(el('line', { x1: sx(x), y1: m.t, x2: sx(x), y2: m.t + totH, stroke: C.darkGrid, 'stroke-dasharray': x ? '3 3' : null }));
          svg.appendChild(el('text', { x: sx(x), y: m.t + totH + 16, 'text-anchor': 'middle', class: 'tk' }, `${Math.round(x * 100)}%`));
        });

        const sCols = { libero_spatial: C.blueLt, libero_object: '#4ADE80', libero_goal: C.amberLt, libero_10: '#C084FC' };
        let sawJ = false;
        rows.forEach((r, i) => {
          const isEef = r.track.startsWith('EEF');
          const gap = !isEef ? 12 : 0;
          if (!isEef && !sawJ && i > 0) {
            sawJ = true;
            svg.appendChild(el('line', { x1: 12, y1: m.t + i * rowH + 5, x2: W - 12, y2: m.t + i * rowH + 5, stroke: 'rgba(255,255,255,0.16)', 'stroke-dasharray': '4 3' }));
          }
          const y = m.t + i * rowH + gap;
          const pTag = (r.n_suites && r.n_suites < 4) ? ` (${r.n_suites}/4)` : '';
          svg.appendChild(el('text', { x: m.l - 12, y: y + 17, 'text-anchor': 'end', class: 'pn', 'font-size': 12.5 }, r.label + pTag));
          svg.appendChild(el('text', { x: m.l - 12, y: y + 31, 'text-anchor': 'end', class: 'tk', 'font-size': 10 }, `${r.track} · ${r.tok_per_win} tok`));

          const barCol = isEef ? (r.label.includes('Bin256') ? C.teal : (r.label.includes('FAST') ? C.amberLt : C.blueLt)) : (r.label.includes('OAT') ? '#A78BFA' : '#64748B');
          const bar = el('rect', { x: m.l, y: y + 6, width: Math.max(4, r.mean * pw), height: 24, rx: 5, fill: barCol, opacity: 0.9 });
          bindHover(bar, tip, () => `
            <div class="th">${r.label}</div>
            <div class="tr"><span>Dev Mean</span><b>${fmtPct(r.mean)}</b></div>
            <div class="tr"><span>Spatial</span><b>${r.libero_spatial !== undefined ? fmtPct(r.libero_spatial) : '—'}</b></div>
            <div class="tr"><span>Object</span><b>${r.libero_object !== undefined ? fmtPct(r.libero_object) : '—'}</b></div>
            <div class="tr"><span>Goal</span><b>${r.libero_goal !== undefined ? fmtPct(r.libero_goal) : '—'}</b></div>
            <div class="tr"><span>LIBERO-10</span><b>${r.libero_10 !== undefined ? fmtPct(r.libero_10) : '—'}</b></div>
          `);
          svg.appendChild(bar);
          Object.entries(sCols).forEach(([sk, sc]) => {
            if (r[sk] === undefined) return;
            const d = el('circle', { cx: sx(r[sk]), cy: y + 18, r: 4.2, fill: sc, stroke: '#0B0E14', 'stroke-width': 1.4 });
            bindHover(d, tip, () => `<div class="th">${r.label} · ${sk}</div><div class="tr"><span>Dev-half SR</span><b>${fmtPct(r[sk])}</b></div>`);
            svg.appendChild(d);
          });
          svg.appendChild(el('text', { x: W - 12, y: y + 22, 'text-anchor': 'end', class: 'vl', fill: '#F8FAFC' }, fmtPct(r.mean)));
        });
        [['Spatial', C.blueLt], ['Object', '#4ADE80'], ['Goal', C.amberLt], ['LIBERO-10', '#C084FC']].forEach(([nm, col], idx) => {
          const lx = m.l + idx * 112;
          svg.appendChild(el('circle', { cx: lx + 5, cy: 12, r: 4, fill: col }));
          svg.appendChild(el('text', { x: lx + 14, y: 16, class: 'tk' }, nm));
        });
      } else if (tab === 'failures' && D.exp2d) {
        const fc = D.exp2d.overall_failure_counts;
        const tot = Object.values(fc).reduce((a, b) => a + b, 0) || 1;
        const cats = [
          { key: 'contact_stall_object', label: 'Contact stall (cmd > 0.25, Δp < 1.5 mm)', col: C.amberLt },
          { key: 'repeated_grasp_slip', label: 'Repeated grasp slip / re-grasp (≥4×)', col: '#F87171' },
          { key: 'late_subgoal_timeout', label: 'Late subgoal horizon timeout', col: '#94A3B8' },
          { key: 'never_grasped', label: 'Missed approach / never grasped', col: C.blueLt },
          { key: 'stagnation_freeze', label: 'Free-space stagnation / freeze', col: '#2DD4BF' },
        ].map((c) => ({ ...c, n: fc[c.key] || 0 })).filter((c) => c.n > 0);
        const m = { l: 268, r: 76, t: 32, b: 14 };
        const pw = W - m.l - m.r;
        const maxN = Math.max(1, ...cats.map((c) => c.n));
        const rowH = 40;
        svg.appendChild(el('text', { x: 12, y: 18, class: 'pn' }, `Physical Contact Failures Dominate: 57 / ${tot} Rollouts (72.2%) Across 200 Traced Episodes`));
        cats.forEach((c, i) => {
          const y = m.t + i * rowH;
          svg.appendChild(el('text', { x: m.l - 12, y: y + 22, 'text-anchor': 'end', class: 'rl' }, c.label));
          const w = (c.n / maxN) * pw;
          svg.appendChild(el('rect', { x: m.l, y: y + 6, width: Math.max(6, w), height: 24, rx: 5, fill: c.col }));
          svg.appendChild(el('text', { x: m.l + w + 8, y: y + 22, class: 'vl', fill: c.col }, `${c.n} (${((c.n / tot) * 100).toFixed(1)}%)`));
        });
      } else if (D.exp2c && D.exp2c.pass_at_k) {
        const allKs = [...new Set(Object.values(D.exp2c.pass_at_k).flatMap((o) => Object.keys(o.curve || {}).map((s) => Number(s.replace('pass@', '')))))].sort((a, b) => a - b);
        const ks = allKs.length ? allKs : [1, 2, 4, 8];
        const maxLog = Math.max(1, Math.log2(ks[ks.length - 1]));
        const m = { l: 54, r: 225, t: 32, b: 44 };
        const pw = W - m.l - m.r, ph = H - m.t - m.b;
        const sx = (k) => m.l + (Math.log2(k) / maxLog) * pw;
        const sy = (v) => m.t + ph - v * ph;

        svg.appendChild(el('text', { x: m.l, y: 16, class: 'pn' }, 'EMA Prevents Late-Training Coverage Collapse (LIBERO-Goal, temp = 0.8)'));
        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: m.l + pw, y2: sy(y), stroke: C.darkGrid, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', class: 'tk' }, `${Math.round(y * 100)}%`));
        });
        ks.forEach((k) => svg.appendChild(el('text', { x: sx(k), y: H - m.b + 18, 'text-anchor': 'middle', class: 'tk' }, `pass@${k}`)));
        svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 6, 'text-anchor': 'middle', class: 'ax' }, 'Stochastic rollouts k (30 dev task-init pairs)'));

        const styles = {
          ema_step30000: { col: C.blueLt, lbl: 'EMA 30k' },
          ema_step16000: { col: C.amberLt, lbl: 'EMA 16k' },
          raw_step30000: { col: '#94A3B8', lbl: 'Raw 30k' },
        };
        ['ema_step30000', 'ema_step16000', 'raw_step30000'].filter((k) => D.exp2c.pass_at_k[k]).forEach((ck, idx) => {
          const obj = D.exp2c.pass_at_k[ck];
          const st = styles[ck];
          const vKs = ks.filter((k) => obj.curve[`pass@${k}`] !== undefined);
          svg.appendChild(el('polyline', { points: vKs.map((k) => `${sx(k)},${sy(obj.curve[`pass@${k}`])}`).join(' '), fill: 'none', stroke: st.col, 'stroke-width': ck === 'ema_step30000' ? 3 : 2.4, 'stroke-dasharray': ck === 'raw_step30000' ? '5 3' : null }));
          vKs.forEach((k) => {
            const v = obj.curve[`pass@${k}`];
            const dot = el('circle', { cx: sx(k), cy: sy(v), r: 5, fill: st.col, stroke: '#0B0E14', 'stroke-width': 1.5 });
            bindHover(dot, tip, () => `<div class="th">${st.lbl}</div><div class="tr"><span>pass@${k}</span><b>${fmtPct(v)}</b></div><div class="tr"><span>Seeds</span><b>${obj.n_samples}</b></div>`);
            svg.appendChild(dot);
          });
          const lk = vKs[vKs.length - 1];
          const lx = m.l + pw + 20, ly = m.t + 22 + idx * 42;
          svg.appendChild(el('rect', { x: lx, y: ly - 9, width: 10, height: 10, rx: 2, fill: st.col }));
          svg.appendChild(el('text', { x: lx + 16, y: ly, 'font-size': 12, 'font-weight': 700, fill: st.col }, `${st.lbl}: pass@${lk} = ${fmtPct(obj.curve[`pass@${lk}`])}`));
          svg.appendChild(el('text', { x: lx + 16, y: ly + 15, 'font-size': 10.5, fill: C.darkMuted }, `${obj.n_samples} seeds · pass@1 ${fmtPct(obj.curve['pass@1'])}`));
        });
      }

      const old = box.querySelector('svg');
      if (old) old.remove();
      box.insertBefore(svg, box.firstChild);
    }

    btns.forEach((b) => b.addEventListener('click', () => {
      tab = b.dataset.f3;
      btns.forEach((x) => x.classList.toggle('on', x === b));
      draw();
    }));
    draw();
  }

  // =========================================================================
  // 4. ACT III: 900-DOT FLUID 60FPS MORPHING MANIFOLD CANVAS (Exp 9A)
  // =========================================================================
  function initManifoldCanvas(D) {
    const canvas = document.getElementById('manifold-canvas');
    const slider = document.getElementById('manifold-slider');
    const pctLbl = document.getElementById('manifold-pct');
    const btnJoint = document.getElementById('btn-space-joint');
    const btnC1 = document.getElementById('btn-space-c1');
    const btnColor = document.getElementById('btn-color-toggle');
    const tipEl = document.getElementById('manifold-tip');
    const legEl = document.getElementById('manifold-legend');
    if (!canvas) return;

    const man = D.exp9_manifold;
    if (!man || !man.points || !man.points.length) {
      emptyBox(canvas.parentElement, 'Computing 900-point 5-arm PCA manifold on H200…');
      return;
    }

    const W = 1100, H = 470;
    const ctx = setupHiDPI(canvas, W, H);
    const armCols = ['#1A73E8', '#E77500', '#16A34A', '#DC2626', '#7C3AED'];
    const dirCols = ['#1A73E8', '#DC2626', '#16A34A', '#E77500', '#7C3AED', '#0D9488'];

    let curT = 0.0;      // current rendered morph [0=Joint, 1=C1]
    let targetT = 0.0;   // spring target
    let colorBy = 'arm'; // 'arm' | 'dir'
    let hoverIdx = -1;
    let animating = false;

    const pts = man.points; // [arm_idx, dir_idx, jx, jy, cx, cy, dx, dy, dz]
    const mj = man.metrics.joint_cover;
    const mc = man.metrics.task_c1;

    function updateKPIs(t) {
      const purity = (mj.knn10_robot_purity + (mc.knn10_robot_purity - mj.knn10_robot_purity) * t) * 100;
      const cos = mj.knn10_motion_cos_cross_arm + (mc.knn10_motion_cos_cross_arm - mj.knn10_motion_cos_cross_arm) * t;
      const r2 = -1.297 + (0.892 - (-1.297)) * t;
      const elP = document.getElementById('mk-purity');
      const elC = document.getElementById('mk-cos');
      const elR = document.getElementById('mk-r2');
      if (elP) { elP.textContent = purity.toFixed(1) + '%'; elP.style.color = purity > 60 ? C.red : C.green; }
      if (elC) { elC.textContent = (cos >= 0 ? '+' : '') + cos.toFixed(3); elC.style.color = cos > 0.35 ? C.blue : C.slate; }
      if (elR) { elR.textContent = (r2 >= 0 ? '+' : '') + r2.toFixed(2); elR.style.color = r2 > 0.5 ? C.green : C.red; }
      if (pctLbl) pctLbl.textContent = t < 0.05 ? 'Joint 100%' : (t > 0.95 ? 'Task C1 100%' : `Morph ${Math.round(t * 100)}%`);
    }

    function updateLegend() {
      if (!legEl) return;
      if (colorBy === 'arm') {
        legEl.innerHTML = man.arms.map((nm, i) => `<span class="li"><span class="sw" style="background:${armCols[i]};border-radius:50%;"></span>${nm}</span>`).join('');
      } else {
        legEl.innerHTML = man.directions.map((nm, i) => `<span class="li"><span class="sw" style="background:${dirCols[i]};border-radius:50%;"></span>${nm}</span>`).join('');
      }
    }

    function xyOf(p, t) {
      // Ease cubic for silky visual glide
      const e = t * t * (3 - 2 * t);
      const x = p[2] + (p[4] - p[2]) * e;
      const y = p[3] + (p[5] - p[3]) * e;
      return [W * 0.5 + x * (W * 0.42), H * 0.52 - y * (H * 0.40)];
    }

    function renderFrame() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#F7F8FA';
      ctx.fillRect(0, 0, W, H);

      // Subtle concentric radar rings
      ctx.strokeStyle = '#E6EAEF';
      ctx.lineWidth = 1;
      [0.2, 0.4, 0.65, 0.9].forEach((r) => {
        ctx.beginPath();
        ctx.ellipse(W * 0.5, H * 0.52, W * 0.42 * r, H * 0.40 * r, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw clean de-overlapped island pills when near Joint space (t < 0.45)
      if (curT < 0.45) {
        const sums = man.arms.map(() => [0, 0, 0]);
        pts.forEach((p) => { const [px, py] = xyOf(p, curT); sums[p[0]][0] += px; sums[p[0]][1] += py; sums[p[0]][2]++; });
        const pills = sums.map((s, ai) => ({
          ai, lbl: man.arms[ai], col: armCols[ai],
          x: s[2] ? s[0] / s[2] : W * 0.5,
          y: s[2] ? s[1] / s[2] - 18 : H * 0.5,
        })).sort((a, b) => a.y - b.y);
        for (let pass = 0; pass < 4; pass++) {
          for (let i = 0; i < pills.length; i++) {
            for (let j = i + 1; j < pills.length; j++) {
              if (Math.abs(pills[j].x - pills[i].x) < 118 && Math.abs(pills[j].y - pills[i].y) < 30) {
                const push = (30 - Math.abs(pills[j].y - pills[i].y)) * 0.55;
                if (pills[j].y >= pills[i].y) { pills[i].y -= push; pills[j].y += push; }
                else { pills[i].y += push; pills[j].y -= push; }
              }
            }
          }
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - curT * 2.4);
        ctx.font = '700 11.5px "Hanken Grotesk", sans-serif';
        ctx.textAlign = 'center';
        pills.forEach((pl) => {
          const tw = ctx.measureText(pl.lbl).width + 18;
          ctx.fillStyle = 'rgba(255,255,255,0.92)';
          ctx.strokeStyle = pl.col;
          ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.roundRect(pl.x - tw / 2, pl.y - 12, tw, 21, 10); ctx.fill(); ctx.stroke();
          ctx.fillStyle = pl.col;
          ctx.fillText(pl.lbl, pl.x, pl.y + 3);
        });
        ctx.restore();
      }

      // Draw all 900 trajectory points
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const [px, py] = xyOf(p, curT);
        const col = colorBy === 'arm' ? armCols[p[0]] : dirCols[p[1]];
        const isHov = (i === hoverIdx);
        ctx.fillStyle = col;
        ctx.globalAlpha = isHov ? 1.0 : 0.78;
        ctx.beginPath();
        ctx.arc(px, py, isHov ? 7.5 : 4.2, 0, Math.PI * 2);
        ctx.fill();
        if (isHov) {
          ctx.strokeStyle = '#181A1F';
          ctx.lineWidth = 2;
          ctx.stroke();
          // Draw real 3D displacement vector arrow (dx, dy) from hovered point!
          const ax = px + Math.max(-48, Math.min(48, p[6] * 0.45));
          const ay = py - Math.max(-48, Math.min(48, p[7] * 0.45));
          ctx.strokeStyle = '#181A1F';
          ctx.lineWidth = 2.4;
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ax, ay); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1.0;

      // Top-left watermark badge
      ctx.fillStyle = '#181A1F';
      ctx.font = '700 13px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      const titleBadge = curT < 0.5 ? 'JOINT-SLOT COVER SPACE (5 Disjoint Robot Dialects)' : 'TASK-SPACE C1 MANIFOLD (Embodiment-Invariant 3D Motion)';
      ctx.fillText(titleBadge, 20, 28);
      updateKPIs(curT);
    }

    function animate() {
      const diff = targetT - curT;
      if (Math.abs(diff) > 0.002) {
        curT += diff * 0.11;
        if (slider) slider.value = Math.round(curT * 100);
        renderFrame();
        requestAnimationFrame(animate);
      } else {
        curT = targetT;
        animating = false;
        if (slider) slider.value = Math.round(curT * 100);
        renderFrame();
      }
    }
    function setTarget(t) {
      targetT = t;
      btnJoint.classList.toggle('on', t < 0.5);
      btnC1.classList.toggle('on', t >= 0.5);
      if (!animating) { animating = true; requestAnimationFrame(animate); }
    }

    btnJoint.addEventListener('click', () => setTarget(0));
    btnC1.addEventListener('click', () => setTarget(1));
    btnColor.addEventListener('click', () => {
      colorBy = colorBy === 'arm' ? 'dir' : 'arm';
      btnColor.textContent = colorBy === 'arm' ? 'Color: Robot Arm' : 'Color: 3D Direction';
      btnColor.classList.toggle('on', colorBy === 'dir');
      updateLegend();
      renderFrame();
    });
    slider.addEventListener('input', () => {
      curT = targetT = parseFloat(slider.value) / 100;
      btnJoint.classList.toggle('on', curT < 0.5);
      btnC1.classList.toggle('on', curT >= 0.5);
      renderFrame();
    });

    canvas.addEventListener('mousemove', (evt) => {
      const br = canvas.getBoundingClientRect();
      const mx = ((evt.clientX - br.left) / br.width) * W;
      const my = ((evt.clientY - br.top) / br.height) * H;
      let best = -1, bestD = 144;
      for (let i = 0; i < pts.length; i++) {
        const [px, py] = xyOf(pts[i], curT);
        const d2 = (px - mx) * (px - mx) + (py - my) * (py - my);
        if (d2 < bestD) { bestD = d2; best = i; }
      }
      hoverIdx = best;
      renderFrame();
      if (best >= 0 && tipEl) {
        const p = pts[best];
        tipEl.innerHTML = `
          <div class="th">${man.arms[p[0]]} · ${man.directions[p[1]]}</div>
          <div class="tr"><span>Net 3D Δp</span><b>(${p[6]}, ${p[7]}, ${p[8]}) mm</b></div>
          <div class="tr"><span>Space</span><b>${curT < 0.5 ? 'Joint-Slot Cover' : 'Task-Space C1'}</b></div>
        `;
        tipEl.classList.add('show');
        tipEl.style.left = Math.min(br.width - 210, Math.max(10, evt.clientX - br.left + 14)) + 'px';
        tipEl.style.top = Math.max(10, evt.clientY - br.top - 12) + 'px';
      } else if (tipEl) {
        tipEl.classList.remove('show');
      }
    });
    canvas.addEventListener('mouseleave', () => { hoverIdx = -1; if (tipEl) tipEl.classList.remove('show'); renderFrame(); });

    updateLegend();
    renderFrame();
    initFig4Drawer(D);
  }

  function initFig4Drawer(D) {
    const box = document.getElementById('fig4-plot');
    const btns = document.querySelectorAll('#fig4-btns .tgl');
    if (!box) return;
    const tip = attachTip(box);
    let view = 'probe';

    function draw() {
      const W = 740, H = 290;
      const svg = makeSvg(W, H);
      if (view === 'probe' && D.exp3) {
        const pr = D.exp3.cross_arm_semantic_probe;
        const arms = ['ur5e', 'iiwa', 'kinova3', 'sawyer'];
        const names = { ur5e: 'UR5e', iiwa: 'KUKA IIWA', kinova3: 'Kinova3', sawyer: 'Sawyer' };
        const lx0 = 96, lx1 = 445, ly0 = 32, ly1 = 248;
        const sx = (v) => lx0 + ((Math.max(-1.2, Math.min(1.0, v)) + 1.2) / 2.2) * (lx1 - lx0);
        const zX = sx(0);
        svg.appendChild(el('text', { x: lx0, y: 16, class: 'pn' }, 'Zero-Shot Cross-Arm 3D Probe R² (Franka → Unseen Arm)'));
        svg.appendChild(el('line', { x1: zX, y1: ly0, x2: zX, y2: ly1, stroke: C.ink2, 'stroke-width': 1.3 }));
        const rh = (ly1 - ly0) / 4;
        arms.forEach((a, i) => {
          const y = ly0 + i * rh;
          const jv = pr.joint_cover[a].zero_shot_r2;
          const cv = pr.task_c1[a].zero_shot_r2;
          svg.appendChild(el('text', { x: lx0 - 10, y: y + 28, 'text-anchor': 'end', class: 'rl' }, names[a]));
          const jx0 = Math.min(zX, sx(jv)), jw = Math.max(4, Math.abs(sx(jv) - zX));
          svg.appendChild(el('rect', { x: jx0, y: y + 7, width: jw, height: 14, rx: 3, fill: jv < 0 ? C.red : C.amber }));
          svg.appendChild(el('text', { x: jv < 0 ? jx0 + 5 : jx0 + jw + 5, y: y + 18, 'font-size': 10.5, 'font-weight': 700, fill: jv < 0 ? '#fff' : C.ink }, jv < -1.1 ? `${jv.toFixed(2)}` : jv.toFixed(2)));
          const cw = Math.max(4, sx(cv) - zX);
          svg.appendChild(el('rect', { x: zX, y: y + 25, width: cw, height: 14, rx: 3, fill: C.blue }));
          svg.appendChild(el('text', { x: zX + cw + 5, y: y + 36, 'font-size': 10.5, 'font-weight': 700, fill: C.blue }, `+${cv.toFixed(2)}`));
        });
        // Right gauge bars
        const g = D.exp3.gauge_invariance;
        const rx0 = 492, bw = 195;
        svg.appendChild(el('text', { x: rx0, y: 16, class: 'pn' }, 'Coordinate-Gauge Match'));
        [['URDF Axis Flip', g.joint_slot_axis_flip_exact_match, g.task_c1_axis_flip_exact_match],
         ['Joint Permute', g.joint_slot_index_perm_exact_match, g.task_c1_index_perm_exact_match],
         ['90° SE(3) Rot', 0, g.task_c1_global_se3_rot90_exact_match]].forEach(([lbl, j, c], i) => {
          const y = 40 + i * 70;
          svg.appendChild(el('text', { x: rx0, y: y + 10, class: 'rl', 'font-weight': 600 }, lbl));
          svg.appendChild(el('rect', { x: rx0, y: y + 18, width: bw, height: 11, rx: 3, fill: C.rule2 }));
          svg.appendChild(el('rect', { x: rx0, y: y + 18, width: Math.max(2, j * bw), height: 11, rx: 3, fill: C.red }));
          svg.appendChild(el('text', { x: rx0 + bw + 6, y: y + 27, class: 'tk', fill: C.red }, `${Math.round(j * 100)}%`));
          svg.appendChild(el('rect', { x: rx0, y: y + 34, width: bw, height: 11, rx: 3, fill: C.rule2 }));
          svg.appendChild(el('rect', { x: rx0, y: y + 34, width: c * bw, height: 11, rx: 3, fill: C.blue }));
          svg.appendChild(el('text', { x: rx0 + bw + 6, y: y + 43, class: 'vl', fill: C.blue }, `${Math.round(c * 100)}%`));
        });
      } else {
        const rows = D.wide_pool_overhead || [];
        const m = { l: 176, r: 64, t: 24, b: 28 };
        const pw = W - m.l - m.r;
        const rh = 26;
        rows.forEach((r, i) => {
          const y = m.t + i * rh;
          const col = r.kind === 'Hand' ? C.red : C.teal;
          svg.appendChild(el('text', { x: m.l - 10, y: y + 17, 'text-anchor': 'end', class: 'rl' }, `${r.robot} (${r.dof}D)`));
          const w = Math.max(4, (Math.min(r.overhead_pct, 160) / 160) * pw);
          svg.appendChild(el('rect', { x: m.l, y: y + 4, width: w, height: 18, rx: 3, fill: col }));
          svg.appendChild(el('text', { x: m.l + w + 7, y: y + 17, class: 'vl', fill: col }, `+${r.overhead_pct}%`));
        });
      }
      const old = box.querySelector('svg');
      if (old) old.remove();
      box.insertBefore(svg, box.firstChild);
    }
    btns.forEach((b) => b.addEventListener('click', () => {
      view = b.dataset.f4;
      btns.forEach((x) => x.classList.toggle('on', x === b));
      draw();
    }));
    draw();
  }

  // =========================================================================
  // 5. ACT IV: 60FPS INTERACTIVE SPRING-DRAWER PHYSICS TOY + EXP 7B FRONTIER
  // =========================================================================
  function initSpringPhysicsToy(D) {
    const canvas = document.getElementById('spring-canvas');
    const kpSlider = document.getElementById('sim-kp-slider');
    const kpLbl = document.getElementById('sim-kp-val');
    const pullBtn = document.getElementById('sim-pull-btn');
    const modeBtns = document.querySelectorAll('#sim-mode-btns .tgl');
    if (!canvas) return;

    const W = 680, H = 310;
    const ctx = setupHiDPI(canvas, W, H);

    let simMode = 'c1f'; // 'ach' | 'raw' | 'c1f'
    let kpMult = 1.0;
    let phase = 0.0;     // 0 -> 1 pull simulation progress
    let running = true;
    let drawerX = 0;     // 0..160 mm
    let gripX = 0;
    let cmdX = 0;
    let forceN = 0;
    let statusTxt = 'RESCUED · OPENS CLEANLY';
    let statusCol = C.green;

    function stepPhysics(dt) {
      if (running) {
        phase += dt * 0.34;
        if (phase > 1.38) phase = 0.0; // smooth seamless loop with brief end hold!
      }
      const p = Math.min(1.0, phase);
      const breakawayN = 36.0; // real MuJoCo cabinet static friction threshold!

      if (simMode === 'ach') {
        // Achieved pose: p_cmd tracks p_meas within 0.3 mm -> zero spring deflection -> 1.2 N!
        drawerX = Math.min(1.7, p * 2.5);
        gripX = drawerX;
        cmdX = gripX + 0.6;
        forceN = 1.2 * kpMult * Math.sin(Math.min(1, p * 2) * Math.PI * 0.5);
        statusTxt = 'STALLED SHUT · 0.3 mm ERR, ~1.2 N';
        statusCol = C.red;
      } else if (simMode === 'raw') {
        // Raw OSC command: fixed source offset delta = 22 mm -> force scales linearly with Kp!
        const peakRawF = 40.6 * kpMult; // Exact Exp 4A measurement at 20mm!
        const slam = kpMult >= 1.45;
        if (peakRawF < breakawayN) {
          drawerX = Math.min(6, p * 8);
          gripX = drawerX;
          cmdX = gripX + 26 * Math.min(1, p * 1.8);
          forceN = peakRawF * Math.min(1, p * 1.8);
          statusTxt = `STALLED AT Kp×${kpMult.toFixed(1)} · ONLY ${forceN.toFixed(0)} N < 36 N`;
          statusCol = C.red;
        } else if (slam) {
          // High stiffness overshoots & slams violently!
          const tMove = Math.max(0, (p - 0.14) / 0.86);
          const osc = Math.sin(tMove * 18) * 14 * Math.exp(-tMove * 2.5);
          drawerX = Math.min(162, tMove * 165 + Math.max(0, osc * 0.4));
          gripX = drawerX;
          cmdX = gripX + 42 + osc;
          forceN = Math.min(357, 165 * kpMult * (1 - 0.3 * tMove) + Math.abs(osc) * 8);
          statusTxt = `VIOLENT SLAM · ${forceN.toFixed(0)} N + 44 mm DRIFT`;
          statusCol = C.purple;
        } else {
          const tMove = Math.max(0, (p - 0.20) / 0.80);
          drawerX = tMove * 161.2;
          gripX = drawerX;
          cmdX = gripX + 22;
          forceN = (p < 0.2 ? (p / 0.2) * 145 : 145 - tMove * 50) * kpMult;
          statusTxt = 'OPENS AT NOMINAL Kp (FRAGILE TO SHIFT)';
          statusCol = C.blueLt;
        }
      } else {
        // C1F+D3F: Newton-normalized feedforward wrench -> INVARIANT to target Kp!
        const tMove = Math.max(0, (p - 0.18) / 0.82);
        drawerX = tMove * 160.8;
        gripX = drawerX;
        cmdX = gripX + (p > 0.08 && p < 0.92 ? 28 : 0); // amber feedforward pulse
        forceN = p < 0.18 ? (p / 0.18) * 149.5 : 149.5 * (1 - 0.35 * tMove);
        statusTxt = `KP-INVARIANT RESCUE · ${forceN.toFixed(0)} N @ Kp×${kpMult.toFixed(1)}`;
        statusCol = C.green;
      }
    }

    function drawSpring(x1, x2, y, col) {
      const len = Math.max(8, x2 - x1);
      const coils = 7;
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(x1, y);
      for (let i = 1; i < coils; i++) {
        const cx = x1 + (i / coils) * len;
        const cy = y + (i % 2 === 0 ? -7 : 7);
        ctx.lineTo(cx, cy);
      }
      ctx.lineTo(x2, y);
      ctx.stroke();
    }

    let lastTs = performance.now();
    function loop(ts) {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      stepPhysics(dt);

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0B0E14';
      ctx.fillRect(0, 0, W, H);

      // Top status badge
      ctx.fillStyle = statusCol;
      ctx.font = '700 12.5px "JetBrains Mono", monospace';
      ctx.fillText(statusTxt, 22, 30);

      // Cabinet + Drawer schematic
      const cabX = 36, cabY = 82, cabW = 156, cabH = 112;
      ctx.fillStyle = '#1E2433';
      ctx.strokeStyle = 'rgba(255,255,255,0.16)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(cabX, cabY, cabW, cabH, 8); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#94A3B8';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('CABINET (36 N friction)', cabX + 12, cabY + 22);

      const scalePx = 1.38; // 160 mm -> 220 px slide
      const drX = cabX + 34 + drawerX * scalePx;
      ctx.fillStyle = '#2A3142';
      ctx.strokeStyle = drawerX > 85 ? C.green : 'rgba(255,255,255,0.32)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(drX, cabY + 34, 128, 54, 6); ctx.fill(); ctx.stroke();
      // Handle
      ctx.fillStyle = '#CBD5E1';
      ctx.fillRect(drX + 128, cabY + 48, 12, 26);

      // Measured Gripper (p_meas)
      const gX = drX + 140;
      const midY = cabY + 61;
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(gX, midY - 16, 18, 6);
      ctx.fillRect(gX, midY + 10, 18, 6);
      ctx.fillRect(gX + 14, midY - 16, 12, 32);

      // Commanded Target Ghost (p_cmd) + Coiled Spring between p_meas and p_cmd!
      const stretchPx = Math.min(130, (cmdX - gripX) * 2.1);
      const tX = gX + 28 + stretchPx;
      if (stretchPx > 3) {
        const spCol = simMode === 'c1f' ? C.amberLt : (simMode === 'raw' && kpMult >= 1.45 ? C.purple : C.blueLt);
        drawSpring(gX + 26, tX, midY, spCol);
        // Ghost target crosshair
        ctx.strokeStyle = spCol;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tX, midY, 8, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = spCol;
        ctx.font = '600 10.5px "JetBrains Mono", monospace';
        ctx.fillText(simMode === 'c1f' ? 'W_N pulse' : 'p_cmd', tX - 18, midY - 16);
      }

      // Live Newton Arc Gauge on Bottom-Right
      const gx = W - 108, gy = H - 64, gr = 42;
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.arc(gx, gy, gr, Math.PI, Math.PI * 2); ctx.stroke();
      const frac = Math.min(1, forceN / 220);
      ctx.strokeStyle = forceN > 200 ? C.purple : (forceN >= 36 ? C.amberLt : C.red);
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.arc(gx, gy, gr, Math.PI, Math.PI + Math.PI * frac); ctx.stroke();
      ctx.fillStyle = '#F8FAFC';
      ctx.font = '700 17px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${forceN.toFixed(0)} N`, gx, gy - 6);
      ctx.fillStyle = '#94A3B8';
      ctx.font = '500 10.5px "JetBrains Mono", monospace';
      ctx.fillText('CONTACT FORCE', gx, gy + 14);
      ctx.textAlign = 'left';

      // Bottom-left telemetry strip
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.fillText(`DRAWER OPEN: ${drawerX.toFixed(1)} mm / 161 mm   ·   SPRING GAP δ: ${(cmdX - gripX).toFixed(1)} mm`, 22, H - 24);

      requestAnimationFrame(loop);
    }

    kpSlider.addEventListener('input', () => {
      kpMult = parseInt(kpSlider.value, 10) / 100;
      kpLbl.textContent = `${kpMult.toFixed(1)}× (${Math.round(150 * kpMult)})`;
      phase = 0; running = true;
    });
    modeBtns.forEach((b) => b.addEventListener('click', () => {
      simMode = b.dataset.sim;
      modeBtns.forEach((x) => x.classList.toggle('on', x === b));
      phase = 0; running = true;
    }));
    pullBtn.addEventListener('click', () => { phase = 0; running = true; });
    requestAnimationFrame(loop);

    initParadoxSideCharts(D);
  }

  function initParadoxSideCharts(D) {
    const box = document.getElementById('fig56-plot');
    const btns = document.querySelectorAll('#fig56-btns .tgl');
    if (!box) return;
    const tip = attachTip(box);
    let view = 'frontier';

    function draw() {
      const W = 450, H = 262;
      const svg = makeSvg(W, H);

      if (view === 'frontier') {
        const rows = D.exp7_frontier && D.exp7_frontier.rows;
        if (!rows || !rows.length) {
          emptyBox(box, 'Computing Exp 7B Force-Token Sparsity Pareto Frontier on H200…', true);
          return;
        }
        const m = { l: 46, r: 24, t: 24, b: 40 };
        const pw = W - m.l - m.r, ph = H - m.t - m.b;
        const sx = (v) => m.l + (Math.min(100, v) / 100) * pw;
        const sy = (v) => m.t + ph - v * ph;

        svg.appendChild(el('text', { x: m.l, y: 14, class: 'pn', 'font-size': 12 }, 'Force-Channel Sparsity Pareto: 22–31% Active Frames Beat 100% Dense!'));
        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.darkGrid, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 6, y: sy(y) + 3, 'text-anchor': 'end', class: 'tk', 'font-size': 10 }, `${Math.round(y * 100)}%`));
        });
        [0, 25, 50, 75, 100].forEach((x) => {
          svg.appendChild(el('text', { x: sx(x), y: H - m.b + 14, 'text-anchor': 'middle', class: 'tk', 'font-size': 10 }, `${x}%`));
        });
        svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 6, 'text-anchor': 'middle', class: 'ax', 'font-size': 11 }, 'Active Force-Intent Frames (%) — Lower = Sparser Channel'));

        // Highlight Pareto sweet-spot box (15..45% active, 78..85% SR)
        svg.appendChild(el('rect', { x: sx(16), y: sy(0.87), width: sx(46) - sx(16), height: sy(0.75) - sy(0.87), rx: 6, fill: 'rgba(22,163,74,0.14)', stroke: 'rgba(74,222,128,0.45)', 'stroke-dasharray': '3 2' }));

        // Draw 5mm deadband sweep curve cleanly
        const db5 = rows.filter((r) => r.label.startsWith('5mm') || r.active_frame_pct === 0 || r.active_frame_pct === 100).sort((a, b) => a.active_frame_pct - b.active_frame_pct);
        svg.appendChild(el('polyline', { points: db5.map((r) => `${sx(r.active_frame_pct)},${sy(r.mean_3arm_sr)}`).join(' '), fill: 'none', stroke: C.amberLt, 'stroke-width': 2.2, opacity: 0.78 }));

        rows.forEach((r) => {
          const isBest = r.label.startsWith('5mm / db=12mm') || r.label.includes('C1F');
          const isZero = r.active_frame_pct === 0;
          const isCoarse = r.q_mm && r.q_mm >= 15;
          const col = isZero ? C.red : (isBest ? '#4ADE80' : (isCoarse ? '#C084FC' : C.amberLt));
          const dot = el('circle', { cx: sx(r.active_frame_pct), cy: sy(r.mean_3arm_sr), r: isBest ? 6.2 : 4.5, fill: col, stroke: '#0B0E14', 'stroke-width': 1.4 });
          bindHover(dot, tip, () => `
            <div class="th">${r.label}</div>
            <div class="tr"><span>3-Arm Rescue SR</span><b>${fmtPct(r.mean_3arm_sr)}</b></div>
            <div class="tr"><span>Active frames</span><b>${r.active_frame_pct}%</b></div>
            <div class="tr"><span>Extra force tok/win</span><b>${r.q_mm ? '+' + r.extra_tokens_per_32win : 'continuous'}</b></div>
            <div class="tr"><span>F / U / I</span><b>${Math.round(r.franka_sr*100)}% / ${Math.round(r.ur5e_sr*100)}% / ${Math.round(r.iiwa_sr*100)}%</b></div>
          `);
          svg.appendChild(dot);
          if (r.label.startsWith('5mm / db=12mm')) {
            svg.appendChild(el('text', { x: sx(r.active_frame_pct) + 4, y: sy(r.mean_3arm_sr) - 11, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: '#4ADE80' }, `5mm/db=12mm (${fmtPct(r.mean_3arm_sr, 1)})`));
          } else if (isZero) {
            svg.appendChild(el('text', { x: sx(0) + 8, y: sy(r.mean_3arm_sr) + 4, 'font-size': 10.5, 'font-weight': 700, fill: C.red }, `Pose only (${fmtPct(r.mean_3arm_sr, 1)})`));
          } else if (r.active_frame_pct === 100) {
            svg.appendChild(el('text', { x: sx(100) - 6, y: sy(r.mean_3arm_sr) - 10, 'text-anchor': 'end', 'font-size': 10, 'font-weight': 600, fill: C.amberLt }, `Dense 100% (${fmtPct(r.mean_3arm_sr, 0)})`));
          }
        });
      } else if (view === 'rescue' && D.exp4 && D.exp4.part4b_diagnostic_replay) {
        const td = D.exp4.part4b_diagnostic_replay.tasks.drawer_top_bowl || D.exp4.part4b_diagnostic_replay.tasks.drawer_middle;
        const arms = ['franka', 'ur5e', 'iiwa', 'kinova3'];
        const modes = [
          { k: 'raw', col: C.blueLt, lbl: 'Raw' },
          { k: 'ach_d3', col: C.red, lbl: 'ach_d3' },
          { k: 'c1F_d3F', col: C.amberLt, lbl: 'C1F' },
          { k: 'achF_d3F', col: '#4ADE80', lbl: 'achF' },
        ];
        const m = { l: 42, r: 12, t: 26, b: 30 };
        const pw = W - m.l - m.r, ph = H - m.t - m.b;
        const gw = pw / 4;
        const sy = (v) => m.t + ph - v * ph;
        svg.appendChild(el('text', { x: m.l, y: 14, class: 'pn', 'font-size': 12 }, 'Top Drawer + Bowl Cross-Arm Rescue (ach_d3 0% → C1F 70%!)'));
        arms.forEach((a, ai) => {
          const x0 = m.l + ai * gw + 8;
          const bw = (gw - 20) / 4;
          svg.appendChild(el('text', { x: x0 + (gw - 16) / 2, y: H - 10, 'text-anchor': 'middle', class: 'tk', 'font-weight': 700 }, a.toUpperCase()));
          modes.forEach((md, mi) => {
            const c = td.arms[a][md.k];
            const rate = c ? c.rate : 0;
            const r = el('rect', { x: x0 + mi * (bw + 2), y: sy(rate), width: bw, height: Math.max(2, rate * ph), rx: 3, fill: md.col });
            bindHover(r, tip, () => `<div class="th">${a.toUpperCase()} · ${md.lbl}</div><div class="tr"><span>Success</span><b>${c.success}/20 (${fmtPct(rate)})</b></div>`);
            svg.appendChild(r);
          });
        });
      } else if (D.exp4 && D.exp4.part4a_dose_response) {
        const grid = D.exp4.part4a_dose_response.grid;
        const deltas = [...new Set(grid.map((r) => r.delta_mm))].sort((a, b) => a - b);
        const kps = [...new Set(grid.map((r) => r.kp_mult))].sort((a, b) => a - b);
        const m = { l: 64, r: 10, t: 24, b: 30 };
        const cw = (W - m.l - m.r) / deltas.length;
        const ch = (H - m.t - m.b) / kps.length;
        svg.appendChild(el('text', { x: m.l, y: 14, class: 'pn', 'font-size': 11.5 }, 'Measured MuJoCo Force (N): δ=0 mm → 0.0 N Everywhere'));
        deltas.forEach((d, ci) => svg.appendChild(el('text', { x: m.l + ci * cw + cw / 2, y: H - 10, 'text-anchor': 'middle', class: 'tk', 'font-size': 10 }, `${d}mm`)));
        kps.forEach((kp, ri) => {
          const y = m.t + (kps.length - 1 - ri) * ch;
          svg.appendChild(el('text', { x: m.l - 6, y: y + ch / 2 + 4, 'text-anchor': 'end', class: 'tk', 'font-size': 10 }, `${kp.toFixed(1)}×`));
          deltas.forEach((d, ci) => {
            const cell = grid.find((r) => r.kp_mult === kp && r.delta_mm === d);
            const fn = cell ? cell.contact_force_p90_n : 0;
            const bg = fn >= 110 ? '#B45309' : (fn >= 55 ? '#E77500' : (fn >= 20 ? '#D97706' : (fn >= 5 ? '#78350F' : '#1E2433')));
            svg.appendChild(el('rect', { x: m.l + ci * cw + 2, y: y + 2, width: cw - 4, height: ch - 4, rx: 5, fill: bg }));
            svg.appendChild(el('text', { x: m.l + ci * cw + cw / 2, y: y + ch / 2 + 4, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: '#F8FAFC' }, `${fn.toFixed(0)}N`));
          });
        });
      }

      const old = box.querySelector('svg');
      if (old) old.remove();
      box.insertBefore(svg, box.firstChild);
    }
    btns.forEach((b) => b.addEventListener('click', () => {
      view = b.dataset.f56;
      btns.forEach((x) => x.classList.toggle('on', x === b));
      draw();
    }));
    draw();
  }

  // =========================================================================
  // 6. ACT V: EXP 8 DRIFT × CONTACT-AWARE [FB] PHASE DIAGRAM + EXP 5 PARETO
  // =========================================================================
  function initAct5Chart(D) {
    const box = document.getElementById('fig7-plot');
    const btns = document.querySelectorAll('#fig7-btns .tgl');
    if (!box) return;
    const tip = attachTip(box);
    let view = 'k32';

    function draw() {
      const W = 760, H = 300;
      const svg = makeSvg(W, H);
      const m = { l: 56, r: 28, t: 28, b: 44 };
      const pw = W - m.l - m.r, ph = H - m.t - m.b;

      const has8 = (D.exp8_open && D.exp8_open.rows) || (D.exp8_blind && D.exp8_blind.rows) || (D.exp8_gated && D.exp8_gated.rows);
      if ((view === 'k32' || view === 'k16') && has8) {
        const targetK = view === 'k32' ? 32 : 16;
        const sx = (d) => m.l + (d / 0.105) * pw;
        const sy = (v) => m.t + ph - v * ph;
        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', class: 'tk' }, `${Math.round(y * 100)}%`));
        });
        [0.0, 0.04, 0.07, 0.10].forEach((d) => {
          svg.appendChild(el('text', { x: sx(d), y: H - m.b + 16, 'text-anchor': 'middle', class: 'tk' }, `+${d.toFixed(2)}`));
        });
        svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 6, 'text-anchor': 'middle', class: 'ax' }, `Unknown Constant Lateral EEF Drift (normalized action bias @ k=${targetK})`));
        svg.appendChild(el('text', { x: 16, y: m.t + ph / 2, transform: `rotate(-90 16 ${m.t + ph / 2})`, 'text-anchor': 'middle', class: 'ax' }, 'LIBERO-Spatial SR'));

        const plot = (src, col, lbl, dash, dy) => {
          const rows = (src && src.rows || []).filter((r) => r.n_action_steps === targetK).sort((a, b) => a.drift - b.drift);
          if (!rows.length) return;
          if (rows.length > 1) {
            svg.appendChild(el('polyline', { points: rows.map((r) => `${sx(r.drift)},${sy(r.success_rate)}`).join(' '), fill: 'none', stroke: col, 'stroke-width': 2.8, 'stroke-dasharray': dash }));
          }
          rows.forEach((r) => {
            const cx = sx(r.drift), cy = sy(r.success_rate);
            const dot = el('circle', { cx, cy, r: 5.8, fill: col, stroke: '#fff', 'stroke-width': 1.5 });
            bindHover(dot, tip, () => `
              <div class="th">${lbl} (k=${targetK}, drift=+${r.drift.toFixed(2)})</div>
              <div class="tr"><span>LIBERO-Spatial SR</span><b>${fmtPct(r.success_rate)}</b></div>
              ${r.contact_frozen_frac !== undefined ? `<div class="tr"><span>Contact-frozen chunks</span><b>${fmtPct(r.contact_frozen_frac)}</b></div>` : ''}
            `);
            svg.appendChild(dot);
            if (!(r.drift === 0 && lbl.startsWith('Blind'))) {
              svg.appendChild(el('text', { x: cx + (r.drift === 0 ? 10 : 0), y: cy + dy, 'text-anchor': r.drift === 0 ? 'start' : 'middle', 'font-size': 11, 'font-weight': 700, fill: col }, `${Math.round(r.success_rate * 100)}%`));
            }
          });
        };
        plot(D.exp8_open, C.red, 'Open-Chunk (no [FB])', '5 3', 18);
        plot(D.exp8_blind, C.slate, 'Blind Proprioceptive [FB]', '2 2', 16);
        plot(D.exp8_gated, C.green, 'Contact-Aware Free-Space-Gated [FB]', null, -12);

        let oldLeg = box.querySelector('.legend');
        if (oldLeg) oldLeg.remove();
        const leg = document.createElement('div');
        leg.className = 'legend';
        leg.innerHTML = `
          <span class="li"><span class="dash-sw" style="border-color:${C.red};"></span>Open-Chunk (no [FB])</span>
          <span class="li"><span class="dash-sw" style="border-color:${C.slate};"></span>Blind [FB] (corrupted by contact drag)</span>
          <span class="li"><span class="sw" style="background:${C.green};"></span>Contact-Aware Free-Space-Gated [FB]</span>
        `;
        box.appendChild(leg);
      } else {
        // Exp 5 Compute-Robustness Pareto Frontier
        const nom = D.exp5_nom && D.exp5_nom.rows;
        const drift = D.exp5_drift_nofb && D.exp5_drift_nofb.rows;
        const fb = D.exp5_drift_fb && D.exp5_drift_fb.rows;
        const all = [...(nom || []), ...(drift || []), ...(fb || [])];
        const maxTok = Math.max(1200, ...all.map((r) => r.est_action_tokens_per_ep)) * 1.1;
        const sx = (v) => m.l + (v / maxTok) * pw;
        const sy = (v) => m.t + ph - v * ph;
        [0, 0.25, 0.5, 0.75, 1.0].forEach((y) => {
          svg.appendChild(el('line', { x1: m.l, y1: sy(y), x2: W - m.r, y2: sy(y), stroke: C.rule2, 'stroke-dasharray': y ? '3 3' : null }));
          svg.appendChild(el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', class: 'tk' }, `${Math.round(y * 100)}%`));
        });
        [0, 500, 1000, 1500].filter((x) => x <= maxTok).forEach((x) => {
          svg.appendChild(el('text', { x: sx(x), y: H - m.b + 16, 'text-anchor': 'middle', class: 'tk' }, `${x}`));
        });
        svg.appendChild(el('text', { x: m.l + pw / 2, y: H - 6, 'text-anchor': 'middle', class: 'ax' }, 'VLM Action Tokens Generated per Episode (lower = cheaper)'));
        const drawS = (rows, col, lbl, dash, dy) => {
          if (!rows || !rows.length) return;
          const s = [...rows].sort((a, b) => a.est_action_tokens_per_ep - b.est_action_tokens_per_ep);
          svg.appendChild(el('polyline', { points: s.map((r) => `${sx(r.est_action_tokens_per_ep)},${sy(r.success_rate)}`).join(' '), fill: 'none', stroke: col, 'stroke-width': 2.6, 'stroke-dasharray': dash }));
          s.forEach((r) => {
            const c = el('circle', { cx: sx(r.est_action_tokens_per_ep), cy: sy(r.success_rate), r: 5.5, fill: col, stroke: '#fff', 'stroke-width': 1.5 });
            bindHover(c, tip, () => `<div class="th">${lbl} · k=${r.n_action_steps}</div><div class="tr"><span>SR</span><b>${fmtPct(r.success_rate)}</b></div><div class="tr"><span>Tokens/ep</span><b>${r.est_action_tokens_per_ep}</b></div>`);
            svg.appendChild(c);
            svg.appendChild(el('text', { x: sx(r.est_action_tokens_per_ep), y: sy(r.success_rate) + dy, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: col }, `k=${r.n_action_steps} (${Math.round(r.success_rate * 100)}%)`));
          });
        };
        drawS(nom, C.blue, 'Nominal physics', null, -11);
        drawS(drift, C.red, 'Drift +0.07, open-chunk', '5 3', -11);
        drawS(fb, C.amber, 'Drift +0.07 + online [FB]', null, 19);

        let oldLeg = box.querySelector('.legend');
        if (oldLeg) oldLeg.remove();
        const leg = document.createElement('div');
        leg.className = 'legend';
        leg.innerHTML = `
          <span class="li"><span class="sw" style="background:${C.blue};"></span>Nominal physics</span>
          <span class="li"><span class="dash-sw" style="border-color:${C.red};"></span>Unknown drift (+0.07), open-chunk</span>
          <span class="li"><span class="sw" style="background:${C.amber};"></span>Unknown drift (+0.07) + online [FB]</span>
        `;
        box.appendChild(leg);
      }

      const old = box.querySelector('svg');
      if (old) old.remove();
      box.insertBefore(svg, box.firstChild);
    }

    btns.forEach((b) => b.addEventListener('click', () => {
      view = b.dataset.f7;
      btns.forEach((x) => x.classList.toggle('on', x === b));
      draw();
    }));
    draw();
  }

  // =========================================================================
  // 7. HYDRATE DEEP-DIVE TABLES
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
    initAct1Sandbox(D);
    initFig1(D);
    initAct2Stage(D);
    initManifoldCanvas(D);
    initSpringPhysicsToy(D);
    initAct5Chart(D);
  });
})();
