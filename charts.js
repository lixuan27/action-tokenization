/* ==========================================================================
   Beyond Compression: The Physics of Action Tokenization
   Real-Time 3D Studio WebGL Cinematography Engine (Three.js + Serif HUD)
   Pure porcelain gallery studio lighting, articulated 3D robotics hardware,
   dynamic 3D helical springs, volumetric token streams, 900-sphere 3D
   manifold fly-through, and unified Instrument Serif / Newsreader HUDs.
   ========================================================================== */
(function () {
  'use strict';

  const T = window.THREE;
  const COL = {
    bgHex: 0xF5F3EE,
    floorHex: 0xECE9E1,
    ceramic: 0xDCDAD4,
    metal: 0x5C6470,
    brass: 0xB88B44,
    oak: 0xC89D6E,
    blue: 0x1D5FD6,
    amber: 0xD97706,
    green: 0x16794B,
    red: 0xC0302C,
    purple: 0x673AB7,
    teal: 0x0F766E,
    slate: 0x64748B,
    // CSS strings for serif HUD
    cssInk: '#1A1B1E',
    cssInk2: '#3A3D45',
    cssInk3: '#686D78',
    cssBlue: '#1D5FD6',
    cssAmber: '#C96A09',
    cssGreen: '#16794B',
    cssRed: '#C0302C',
    cssPurple: '#673AB7',
    cssTeal: '#0F766E',
    cssSlate: '#64748B',
    cssRule: '#E4E1DA',
  };

  function fmtPct(v, d = 1) { return (v * 100).toFixed(d) + '%'; }

  // =========================================================================
  // SHARED 3D STUDIO STAGE + INTERACTIVE ORBIT + SERIF 2D HUD PROJECTION
  // =========================================================================
  function createStudioStage(containerId, camInit = { r: 9.5, az: 0.65, el: 0.48, tx: 0, ty: 0.8, tz: 0 }) {
    const vp = document.getElementById(containerId);
    if (!vp || !T) return null;

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.domElement.className = 'webgl-layer';
    vp.insertBefore(renderer.domElement, vp.firstChild);

    const hud = document.createElement('canvas');
    hud.className = 'hud-layer';
    vp.insertBefore(hud, renderer.domElement.nextSibling);
    const hctx = hud.getContext('2d');

    const scene = new T.Scene();
    scene.background = new T.Color(COL.bgHex);
    scene.fog = new T.Fog(COL.bgHex, 15, 38);

    const camera = new T.PerspectiveCamera(36, 1120 / 540, 0.1, 100);

    // 3-Point Bright Architectural Studio Lighting
    const hemi = new T.HemisphereLight(0xFFFFFF, 0xE6E1D6, 0.92);
    hemi.position.set(0, 14, 0);
    scene.add(hemi);

    const key = new T.DirectionalLight(0xFFFDF8, 0.95);
    key.position.set(7.5, 13.5, 8.5);
    key.castShadow = true;
    key.shadow.mapSize.width = 1024;
    key.shadow.mapSize.height = 1024;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 36;
    const d = 9.5;
    key.shadow.camera.left = -d; key.shadow.camera.right = d;
    key.shadow.camera.top = d; key.shadow.camera.bottom = -d;
    key.shadow.bias = -0.0006;
    scene.add(key);

    const rim = new T.DirectionalLight(0xDCEBFF, 0.36);
    rim.position.set(-8, 6, -7);
    scene.add(rim);

    // Porcelain Studio Floor + Architectural Grid
    const floor = new T.Mesh(
      new T.PlaneGeometry(50, 50),
      new T.MeshStandardMaterial({ color: COL.floorHex, roughness: 0.92, metalness: 0.0 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new T.GridHelper(28, 28, 0xDCD8CE, 0xEAE7DF);
    grid.position.y = 0.004;
    grid.material.opacity = 0.55;
    grid.material.transparent = true;
    scene.add(grid);

    // Orbit State (user drag blends smoothly with director camera!)
    const orbit = {
      r: camInit.r, az: camInit.az, el: camInit.el,
      tx: camInit.tx, ty: camInit.ty, tz: camInit.tz,
      userOffsetAz: 0, userOffsetEl: 0, userZoom: 1,
      dragging: false, lx: 0, ly: 0,
    };

    vp.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, input')) return;
      orbit.dragging = true;
      orbit.lx = e.clientX;
      orbit.ly = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (!orbit.dragging) return;
      orbit.userOffsetAz -= (e.clientX - orbit.lx) * 0.0065;
      orbit.userOffsetEl = Math.max(-0.35, Math.min(0.62, orbit.userOffsetEl + (e.clientY - orbit.ly) * 0.005));
      orbit.lx = e.clientX;
      orbit.ly = e.clientY;
    });
    window.addEventListener('pointerup', () => { orbit.dragging = false; });

    let curW = 1120, curH = 540;
    function resize() {
      const r = vp.getBoundingClientRect();
      curW = Math.max(320, Math.round(r.width));
      curH = Math.max(240, Math.round(r.height));
      renderer.setSize(curW, curH, false);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      hud.width = Math.round(curW * dpr);
      hud.height = Math.round(curH * dpr);
      hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      camera.aspect = curW / curH;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    function applyCamera(az, el, r, tx, ty, tz) {
      const fa = az + orbit.userOffsetAz;
      const fe = Math.max(0.12, Math.min(1.28, el + orbit.userOffsetEl));
      const fr = r * orbit.userZoom;
      camera.position.set(
        tx + fr * Math.cos(fe) * Math.sin(fa),
        ty + fr * Math.sin(fe),
        tz + fr * Math.cos(fe) * Math.cos(fa)
      );
      camera.lookAt(tx, ty, tz);
    }

    function project3D(x, y, z) {
      const v = new T.Vector3(x, y, z).project(camera);
      return {
        x: (v.x * 0.5 + 0.5) * curW,
        y: (-v.y * 0.5 + 0.5) * curH,
        visible: v.z < 1.0,
      };
    }

    // Track visibility so offscreen scenes rest cleanly after their initial hero render!
    let visible = true;
    let initialFrames = 18;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
      }, { rootMargin: '120px' });
      io.observe(vp);
    }

    return {
      vp, scene, camera, renderer, hud, hctx, orbit,
      get size() { return { w: curW, h: curH }; },
      shouldRender() {
        if (initialFrames > 0) { initialFrames--; return true; }
        return visible;
      },
      applyCamera,
      project3D,
      clearHud() { hctx.clearRect(0, 0, curW, curH); },
    };
  }

  // Serif Pill Tag projected cleanly onto 2D HUD layer (Zero dark boxes!)
  function drawSerifTag(ctx, x, y, text, accentCss = COL.cssBlue, sub = null) {
    ctx.save();
    ctx.font = '600 13px "Newsreader", Georgia, serif';
    const tw = ctx.measureText(text).width;
    let sw = 0;
    if (sub) {
      ctx.font = 'italic 11.5px "Newsreader", Georgia, serif';
      sw = ctx.measureText(sub).width;
    }
    const bw = Math.max(tw, sw) + 22;
    const bh = sub ? 38 : 24;
    const bx = x - bw / 2, by = y - bh / 2;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.strokeStyle = 'rgba(228, 225, 218, 0.95)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 8);
    ctx.fill();
    ctx.stroke();

    // Accent left dot
    ctx.fillStyle = accentCss;
    ctx.beginPath();
    ctx.arc(bx + 9, by + (sub ? 13 : bh / 2), 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '600 12.5px "Newsreader", Georgia, serif';
    ctx.fillStyle = COL.cssInk;
    ctx.textAlign = 'left';
    ctx.fillText(text, bx + 16, by + (sub ? 16 : 16));
    if (sub) {
      ctx.font = 'italic 11px "Newsreader", Georgia, serif';
      ctx.fillStyle = COL.cssInk3;
      ctx.fillText(sub, bx + 16, by + 31);
    }
    ctx.restore();
  }

  // Reusable Sculptural 3D Articulated Robotic Arm (Ceramic White + Titanium + Semantic Collar)
  function createRobotArm(accentHex, scale = 1.0) {
    const root = new T.Group();
    const matWhite = new T.MeshStandardMaterial({ color: COL.ceramic, roughness: 0.34, metalness: 0.08 });
    const matMetal = new T.MeshStandardMaterial({ color: COL.metal, roughness: 0.38, metalness: 0.65 });
    const matAccent = new T.MeshStandardMaterial({ color: accentHex, roughness: 0.36, metalness: 0.25 });

    // Base Pedestal
    const base = new T.Mesh(new T.CylinderGeometry(0.36, 0.42, 0.16, 28), matMetal);
    base.position.y = 0.08; base.castShadow = true; base.receiveShadow = true;
    root.add(base);

    const collar = new T.Mesh(new T.CylinderGeometry(0.28, 0.31, 0.12, 24), matAccent);
    collar.position.y = 0.22; collar.castShadow = true;
    root.add(collar);

    // Shoulder Pivot
    const shoulder = new T.Group();
    shoulder.position.y = 0.30;
    root.add(shoulder);

    const sJoint = new T.Mesh(new T.SphereGeometry(0.16, 20, 20), matMetal);
    sJoint.castShadow = true;
    shoulder.add(sJoint);

    const upperLen = 1.05;
    const upper = new T.Mesh(new T.CylinderGeometry(0.11, 0.13, upperLen, 20), matWhite);
    upper.position.y = upperLen * 0.5;
    upper.castShadow = true;
    shoulder.add(upper);

    // Elbow Pivot
    const elbow = new T.Group();
    elbow.position.y = upperLen;
    shoulder.add(elbow);

    const eJoint = new T.Mesh(new T.CylinderGeometry(0.13, 0.13, 0.26, 20), matAccent);
    eJoint.rotation.z = Math.PI / 2;
    eJoint.castShadow = true;
    elbow.add(eJoint);

    const foreLen = 0.92;
    const fore = new T.Mesh(new T.CylinderGeometry(0.085, 0.105, foreLen, 20), matWhite);
    fore.position.y = foreLen * 0.5;
    fore.castShadow = true;
    elbow.add(fore);

    // Wrist & Parallel-Jaw Gripper
    const wrist = new T.Group();
    wrist.position.y = foreLen;
    elbow.add(wrist);

    const wCollar = new T.Mesh(new T.CylinderGeometry(0.095, 0.095, 0.12, 18), matMetal);
    wCollar.castShadow = true;
    wrist.add(wCollar);

    const palm = new T.Mesh(new T.BoxGeometry(0.32, 0.08, 0.14), matMetal);
    palm.position.y = 0.10; palm.castShadow = true;
    wrist.add(palm);

    const fingerL = new T.Mesh(new T.BoxGeometry(0.045, 0.24, 0.08), matAccent);
    fingerL.position.set(-0.11, 0.24, 0); fingerL.castShadow = true;
    wrist.add(fingerL);

    const fingerR = new T.Mesh(new T.BoxGeometry(0.045, 0.24, 0.08), matAccent);
    fingerR.position.set(0.11, 0.24, 0); fingerR.castShadow = true;
    wrist.add(fingerR);

    root.scale.setScalar(scale);

    // Analytical 2-link planar IK solver in local (y, z) plane so tip reaches exact target cleanly!
    function setPose(yaw, targetHoriz, targetVert, gripOpen = 0.09) {
      root.rotation.y = yaw;
      const dx = Math.max(0.15, targetHoriz);
      const dy = targetVert - 0.30;
      const dist = Math.min(upperLen + foreLen - 0.06, Math.max(0.35, Math.hypot(dx, dy)));
      const cosE = Math.max(-0.98, Math.min(0.98, (upperLen * upperLen + foreLen * foreLen - dist * dist) / (2 * upperLen * foreLen)));
      const elbowAng = Math.PI - Math.acos(cosE);
      const baseAng = Math.atan2(dx, dy);
      const cosS = Math.max(-0.98, Math.min(0.98, (upperLen * upperLen + dist * dist - foreLen * foreLen) / (2 * upperLen * dist)));
      const shoulderAng = baseAng - Math.acos(cosS);
      shoulder.rotation.x = shoulderAng;
      elbow.rotation.x = elbowAng;
      wrist.rotation.x = (Math.PI * 0.5) - (shoulderAng + elbowAng);
      fingerL.position.x = -0.045 - gripOpen;
      fingerR.position.x = 0.045 + gripOpen;
    }

    return { root, shoulder, elbow, wrist, fingerL, fingerR, setPose };
  }

  // Reusable Dynamic 3D Helical Impedance Spring (TubeGeometry along Helix)
  function buildHelixGeo(len, coils = 6.5, radius = 0.11, tubeR = 0.022) {
    const pts = [];
    const steps = 64;
    const safeLen = Math.max(0.06, len);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const fade = Math.sin(Math.min(1, t * 8) * Math.PI * 0.5) * Math.sin(Math.min(1, (1 - t) * 8) * Math.PI * 0.5);
      const ang = t * coils * Math.PI * 2;
      pts.push(new T.Vector3(Math.cos(ang) * radius * fade, Math.sin(ang) * radius * fade, t * safeLen));
    }
    return new T.TubeGeometry(new T.CatmullRomCurve3(pts), 64, tubeR, 8, false);
  }

  // =========================================================================
  // FILM 00 (PROLOGUE) · 3D TOPOGRAPHIC PHYSICAL GROUNDING SURFACE
  // =========================================================================
  function initFilmHero() {
    const st = createStudioStage('vp-hero', { r: 10.6, az: 0.72, el: 0.44, tx: 0, ty: 1.0, tz: 0 });
    if (!st) return;

    const btnPlay = document.getElementById('hero-play');
    const btnReset = document.getElementById('hero-reset');
    const subEl = document.getElementById('sub-hero');

    function surfHeight(u, v) {
      const ridge = 0.25 + 2.45 * Math.pow(v, 1.32) + 0.34 * Math.sin(u * Math.PI) * (0.35 + 0.65 * v);
      const valley = -0.26 * Math.exp(-Math.pow((u - 0.85) / 0.28, 2)) * (1 - v);
      return Math.max(0.18, ridge + valley);
    }

    // Sculpted 3D Relief Mesh with Vertex Colors (Cobalt Valley -> Ivory -> Warm Terracotta Ridge)
    const Nu = 44, Nv = 34, Sx = 6.4, Sz = 5.4;
    const geo = new T.PlaneGeometry(Sx, Sz, Nu, Nv);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const cols = new Float32Array(pos.count * 3);
    const cLow = new T.Color(0x2F6FE0), cMid = new T.Color(0xF3F0E9), cHigh = new T.Color(0xDF852A);
    const tmpC = new T.Color();

    for (let i = 0; i < pos.count; i++) {
      const u = (pos.getX(i) / Sx) + 0.5;
      const v = (pos.getZ(i) / Sz) + 0.5;
      const h = surfHeight(u, v);
      pos.setY(i, h);
      const t = Math.max(0, Math.min(1, (h - 0.22) / 2.55));
      if (t < 0.48) tmpC.lerpColors(cLow, cMid, t / 0.48);
      else tmpC.lerpColors(cMid, cHigh, (t - 0.48) / 0.52);
      cols[i * 3] = tmpC.r; cols[i * 3 + 1] = tmpC.g; cols[i * 3 + 2] = tmpC.b;
    }
    geo.setAttribute('color', new T.BufferAttribute(cols, 3));
    geo.computeVertexNormals();

    const relief = new T.Mesh(geo, new T.MeshStandardMaterial({
      vertexColors: true, roughness: 0.42, metalness: 0.06, side: T.DoubleSide,
    }));
    relief.castShadow = true; relief.receiveShadow = true;
    st.scene.add(relief);

    // Subtle Crisp Architectural Wireframe Contours floating slightly over surface
    const wire = new T.Mesh(geo, new T.MeshBasicMaterial({
      color: 0xFFFFFF, wireframe: true, transparent: true, opacity: 0.22,
    }));
    wire.position.y = 0.012;
    st.scene.add(wire);

    // Clean Porcelain Pedestal Base beneath surface
    const plinth = new T.Mesh(
      new T.BoxGeometry(Sx + 0.3, 0.18, Sz + 0.3),
      new T.MeshStandardMaterial({ color: 0xEDEAE3, roughness: 0.85 })
    );
    plinth.position.y = 0.09; plinth.receiveShadow = true;
    st.scene.add(plinth);

    // 7 Empirical Survey Pins with Brass Plumb Stems
    const pinsData = [
      { name: 'Holo FSQ', sub: '6.8% · Neural Joint', u: 0.18, v: 0.10, sr: 0.068, hex: COL.slate, css: COL.cssSlate },
      { name: 'Bin256 (EEF)', sub: '17.0% · 1.2 mm MAE', u: 0.88, v: 0.14, sr: 0.170, hex: COL.red, css: COL.cssRed },
      { name: 'Cover (Joint)', sub: '19.3% · 5 Dialects', u: 0.44, v: 0.25, sr: 0.193, hex: COL.slate, css: COL.cssSlate },
      { name: 'OAT (Joint)', sub: '60.5% · 16→8 tok', u: 0.46, v: 0.66, sr: 0.605, hex: COL.purple, css: COL.cssPurple },
      { name: 'FAST (EEF)', sub: '70.0% · DCT Spectral', u: 0.78, v: 0.74, sr: 0.700, hex: COL.amber, css: COL.cssAmber },
      { name: 'Cover (EEF)', sub: '73.9% · Causal Stop', u: 0.60, v: 0.86, sr: 0.739, hex: COL.blue, css: COL.cssBlue },
      { name: 'C1F+D3F Force', sub: '81.7% · 30.8% Sparse', u: 0.85, v: 0.95, sr: 0.817, hex: COL.green, css: COL.cssGreen },
    ];
    const pinObjs = pinsData.map((p) => {
      const wx = (p.u - 0.5) * Sx;
      const wz = (p.v - 0.5) * Sz;
      const hSurf = surfHeight(p.u, p.v);
      const wy = Math.max(hSurf + 0.16, 0.25 + p.sr * 3.15);
      const stem = new T.Mesh(
        new T.CylinderGeometry(0.014, 0.014, wy, 10),
        new T.MeshStandardMaterial({ color: COL.brass, metalness: 0.7, roughness: 0.3 })
      );
      stem.position.set(wx, wy * 0.5, wz);
      st.scene.add(stem);

      const head = new T.Mesh(
        new T.SphereGeometry(0.115, 22, 22),
        new T.MeshStandardMaterial({ color: p.hex, roughness: 0.25, metalness: 0.15 })
      );
      head.position.set(wx, wy, wz); head.castShadow = true;
      st.scene.add(head);
      return { ...p, wx, wy, wz, head };
    });

    // Luminous Pearl Particles gliding along the Physical Grounding Ridge
    const pearls = Array.from({ length: 16 }, (_, i) => {
      const m = new T.Mesh(
        new T.SphereGeometry(0.052, 14, 14),
        new T.MeshStandardMaterial({ color: i % 2 ? COL.blue : COL.amber, emissive: i % 2 ? 0x103880 : 0x603000, emissiveIntensity: 0.35 })
      );
      st.scene.add(m);
      return { mesh: m, u: 0.18 + (i % 5) * 0.16, v: i / 16, spd: 0.12 + (i % 3) * 0.025 };
    });

    let playing = true, clock = 1.2, lastTs = null;
    const subs = [
      '<strong>Act I · The Offline Trap</strong> — Pushing offline precision leftward (<em>Bin256 · 1.2 mm</em>) leaves closed-loop policy success flat at 17.0%.',
      '<strong>Act II · Climbing the Physical Ridge</strong> — Causal decoding, task-space alignment, and sparse Newton force lift control directly to 74–82%.',
      '<strong>Act III · Nine Controlled Studies</strong> — Drag anywhere in 3D to inspect how a single fixed Qwen3-VL-2B backbone responds across representations.',
    ];

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      if (playing) clock += dt;

      // Smooth 3-beat crane orbit with dramatic elevated angle showing the full 3D sculpted ridge
      const az = 0.68 + Math.sin(clock * 0.26) * 0.42;
      const el = 0.54 + Math.sin(clock * 0.18) * 0.09;
      const r = 10.2 - Math.sin(clock * 0.22) * 0.6;
      st.applyCamera(az, el, r, 0, 1.05, 0);

      pearls.forEach((p) => {
        if (playing) { p.v += p.spd * dt; if (p.v > 0.97) p.v = 0.03; }
        const wx = (p.u - 0.5) * Sx;
        const wz = (p.v - 0.5) * Sz;
        p.mesh.position.set(wx, surfHeight(p.u, p.v) + 0.09, wz);
      });

      if (subEl) {
        const bi = Math.abs(Math.floor(clock / 5.5)) % subs.length;
        if (subEl.dataset.bi !== String(bi)) { subEl.dataset.bi = String(bi); subEl.innerHTML = subs[bi]; }
      }

      st.renderer.render(st.scene, st.camera);

      // Draw Projected Unified Serif Labels on HUD Layer
      st.clearHud();
      const ctx = st.hctx;
      const { w, h } = st.size;

      // Subtle 3D axis floor labels in italic Newsreader serif
      const ax1 = st.project3D(0, 0.15, Sz * 0.56);
      const ax2 = st.project3D(Sx * 0.56, 0.15, 0);
      ctx.font = 'italic 13px "Newsreader", Georgia, serif';
      ctx.fillStyle = COL.cssInk3;
      ctx.textAlign = 'center';
      if (ax1.visible) ctx.fillText('Physical Grounding (Causal · 3D · Force) →', ax1.x, Math.min(h - 72, ax1.y + 12));
      if (ax2.visible) ctx.fillText('Offline Fidelity (1/MSE) →', Math.min(w - 110, ax2.x), Math.min(h - 72, ax2.y + 12));

      // Project & de-overlap key landmark pins
      const keyNames = ['Bin256 (EEF)', 'OAT (Joint)', 'Cover (EEF)', 'C1F+D3F Force', 'Holo FSQ'];
      const projected = pinObjs
        .filter((p) => keyNames.includes(p.name))
        .map((p) => ({ ...p, sp: st.project3D(p.wx, p.wy + 0.22, p.wz) }))
        .filter((p) => p.sp.visible);

      for (let pass = 0; pass < 4; pass++) {
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const dx = projected[j].sp.x - projected[i].sp.x;
            const dy = projected[j].sp.y - projected[i].sp.y;
            if (Math.abs(dx) < 132 && Math.abs(dy) < 42) {
              const push = (42 - Math.abs(dy)) * 0.52;
              if (dy >= 0) { projected[i].sp.y -= push; projected[j].sp.y += push; }
              else { projected[i].sp.y += push; projected[j].sp.y -= push; }
            }
          }
        }
      }
      projected.forEach((p) => {
        const yClamped = Math.max(58, Math.min(h - 86, p.sp.y));
        const xClamped = Math.max(82, Math.min(w - 82, p.sp.x));
        drawSerifTag(ctx, xClamped, yClamped, p.name, p.css, p.sub);
      });
    }

    if (btnPlay) btnPlay.addEventListener('click', () => {
      playing = !playing;
      btnPlay.textContent = playing ? '❚❚ Pause Crane' : '▶ Play Crane';
      btnPlay.classList.toggle('on', playing);
    });
    if (btnReset) btnReset.addEventListener('click', () => {
      st.orbit.userOffsetAz = 0; st.orbit.userOffsetEl = 0; st.orbit.userZoom = 1;
    });
    requestAnimationFrame(loop);
  }

  // =========================================================================
  // FILM 01 (CHAPTER I) · 3D VOLUMETRIC TOKEN STREAM & MULTI-CODEC RIBBONS
  // =========================================================================
  function initFilmAnytime(D) {
    const st = createStudioStage('vp-anytime', { r: 9.8, az: 0.32, el: 0.44, tx: 0.2, ty: 1.0, tz: 0 });
    if (!st) return;

    const slider = document.getElementById('f1-slider');
    const valEl = document.getElementById('f1-val');
    const btnSweep = document.getElementById('f1-sweep');
    const modeBtns = document.querySelectorAll('[data-f1-mode]');
    const blastBtns = document.querySelectorAll('[data-bcodec]');
    const subEl = document.getElementById('sub-anytime');

    // Sculpted Porcelain VLM Emitter Pillar on Back-Left
    const emitter = new T.Mesh(
      new T.BoxGeometry(1.05, 1.35, 1.05),
      new T.MeshStandardMaterial({ color: COL.ceramic, roughness: 0.28, metalness: 0.1 })
    );
    emitter.position.set(-4.1, 0.68, -1.6);
    emitter.castShadow = true; emitter.receiveShadow = true;
    st.scene.add(emitter);

    const emitRing = new T.Mesh(
      new T.TorusGeometry(0.42, 0.035, 14, 36),
      new T.MeshStandardMaterial({ color: COL.blue, roughness: 0.25, metalness: 0.3 })
    );
    emitRing.position.set(-3.55, 0.85, -1.6);
    emitRing.rotation.y = Math.PI / 2;
    st.scene.add(emitRing);

    // 24 Beveled 3D Glass/Cobalt Token Tiles streaming from Emitter along Back Rail
    const tokens = [];
    const tokGeo = new T.BoxGeometry(0.22, 0.32, 0.16);
    for (let i = 0; i < 24; i++) {
      const m = new T.Mesh(tokGeo, new T.MeshStandardMaterial({
        color: COL.blue, roughness: 0.22, metalness: 0.15, transparent: true, opacity: 0.92,
      }));
      m.position.set(-3.2 + i * 0.30, 0.85, -1.6);
      m.castShadow = true;
      st.scene.add(m);
      tokens.push(m);
    }

    // Translucent Cobalt Laser Budget Gate slicing through Token Stream!
    const gate = new T.Mesh(
      new T.BoxGeometry(0.04, 1.25, 1.15),
      new T.MeshStandardMaterial({ color: COL.blue, emissive: COL.blue, emissiveIntensity: 0.35, transparent: true, opacity: 0.42 })
    );
    gate.position.set(0.4, 0.82, -1.6);
    st.scene.add(gate);

    // 3D Studio Arena Pedestal in Foreground for Real 5-Codec 3D Trajectories!
    const arena = new T.Mesh(
      new T.CylinderGeometry(2.65, 2.8, 0.12, 48),
      new T.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.82 })
    );
    arena.position.set(-0.6, 0.06, 1.05);
    arena.receiveShadow = true;
    st.scene.add(arena);

    // Brass Step-16 Cutoff Target Ring
    const step16Ring = new T.Mesh(
      new T.TorusGeometry(0.16, 0.025, 14, 32),
      new T.MeshStandardMaterial({ color: COL.brass, metalness: 0.72, roughness: 0.26 })
    );
    step16Ring.rotation.x = Math.PI / 2;
    st.scene.add(step16Ring);

    // Expanding 3D Shockwave Torus for Single-Token Blast mode!
    const shockwave = new T.Mesh(
      new T.TorusGeometry(0.5, 0.032, 16, 48),
      new T.MeshStandardMaterial({ color: COL.red, emissive: COL.red, emissiveIntensity: 0.35, transparent: true, opacity: 0 })
    );
    shockwave.rotation.x = Math.PI / 2;
    st.scene.add(shockwave);

    const codecColors = {
      'Cover (EEF)': { hex: COL.blue, css: COL.cssBlue },
      'OAT': { hex: COL.purple, css: COL.cssPurple },
      'FAST': { hex: COL.amber, css: COL.cssAmber },
      'Bin256': { hex: COL.teal, css: COL.cssTeal },
      'QueST': { hex: COL.slate, css: COL.cssSlate },
    };

    const trajGroup = new T.Group();
    st.scene.add(trajGroup);

    const tipSpheres = {};
    Object.entries(codecColors).forEach(([nm, cfg]) => {
      const sp = new T.Mesh(
        new T.SphereGeometry(0.095, 18, 18),
        new T.MeshStandardMaterial({ color: cfg.hex, roughness: 0.22, metalness: 0.18 })
      );
      sp.castShadow = true;
      st.scene.add(sp);
      tipSpheres[nm] = sp;
    });

    // Helper: Map real mm trajectory coordinates cleanly onto 3D Arena Pedestal
    const gtRaw = (D.exp6_morph && D.exp6_morph.hero_gt_xyz_mm) || [];
    let cx0 = 0, cy0 = 0, cz0 = 0, sc = 0.02;
    if (gtRaw.length) {
      const xs = gtRaw.map((p) => p[0]), ys = gtRaw.map((p) => p[1]), zs = gtRaw.map((p) => p[2]);
      cx0 = (Math.min(...xs) + Math.max(...xs)) * 0.5;
      cy0 = (Math.min(...ys) + Math.max(...ys)) * 0.5;
      cz0 = Math.min(...zs);
      const span = Math.max(40, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
      sc = 3.4 / span;
    }
    function toArena3D(p) {
      const x = -0.6 + Math.max(-2.3, Math.min(2.3, (p[0] - cx0) * sc));
      const z = 1.05 - Math.max(-2.1, Math.min(2.1, (p[1] - cy0) * sc));
      const y = 0.35 + Math.max(0, Math.min(1.85, (p[2] - cz0) * sc * 0.9 + 0.35));
      return new T.Vector3(x, y, z);
    }

    // Build Ground Truth dashed line once
    if (gtRaw.length > 2) {
      const gtPts = gtRaw.map(toArena3D);
      const gtLine = new T.Line(
        new T.BufferGeometry().setFromPoints(gtPts),
        new T.LineBasicMaterial({ color: 0x9AA0A6, transparent: true, opacity: 0.7 })
      );
      st.scene.add(gtLine);
      step16Ring.position.copy(gtPts[Math.min(15, gtPts.length - 1)]);
    }

    function interpPath(morphMap, pct) {
      const keys = Object.keys(morphMap).map(Number).sort((a, b) => a - b);
      if (pct <= keys[0]) return morphMap[String(keys[0])];
      if (pct >= keys[keys.length - 1]) return morphMap[String(keys[keys.length - 1])];
      let lo = keys[0], hi = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (pct >= keys[i] && pct <= keys[i + 1]) { lo = keys[i]; hi = keys[i + 1]; break; }
      }
      const a = (pct - lo) / Math.max(1, hi - lo);
      const A = morphMap[String(lo)], B = morphMap[String(hi)];
      return A.map((p, idx) => [
        p[0] + (B[idx][0] - p[0]) * a,
        p[1] + (B[idx][1] - p[1]) * a,
        p[2] + (B[idx][2] - p[2]) * a,
      ]);
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

    let mode = 'anytime', blastCodec = 'FAST';
    let budgetPct = 55, sweeping = true, sweepDir = 1, lastBuiltPct = -999, lastBuiltMode = '';
    let clock = 0, lastTs = null;

    function rebuildRibbons() {
      while (trajGroup.children.length) {
        const ch = trajGroup.children[0];
        if (ch.geometry) ch.geometry.dispose();
        trajGroup.remove(ch);
      }
      if (mode === 'anytime' && D.exp6_morph && D.exp6_morph.codecs) {
        Object.entries(codecColors).forEach(([nm, cfg]) => {
          const cd = D.exp6_morph.codecs[nm];
          if (!cd) return;
          const pts = interpPath(cd.hero_morph_xyz_mm, budgetPct).map(toArena3D);
          const tube = new T.Mesh(
            new T.TubeGeometry(new T.CatmullRomCurve3(pts), 42, nm === 'Cover (EEF)' ? 0.044 : 0.028, 10, false),
            new T.MeshStandardMaterial({ color: cfg.hex, roughness: 0.3, metalness: 0.12 })
          );
          tube.castShadow = true;
          trajGroup.add(tube);
          tipSpheres[nm].visible = true;
          tipSpheres[nm].position.copy(pts[pts.length - 1]);
        });
      } else if (D.exp1 && D.exp1.codecs && D.exp1.codecs[blastCodec]) {
        const cObj = D.exp1.codecs[blastCodec];
        Object.values(tipSpheres).forEach((s) => { s.visible = false; });
        const cleanPts = cObj.hero.clean_xyz_mm.map(toArena3D);
        const pertPts = cObj.hero.perturbed.early.xyz_mm.map(toArena3D);
        const tClean = new T.Mesh(
          new T.TubeGeometry(new T.CatmullRomCurve3(cleanPts), 42, 0.036, 10, false),
          new T.MeshStandardMaterial({ color: COL.blue, roughness: 0.3 })
        );
        const tPert = new T.Mesh(
          new T.TubeGeometry(new T.CatmullRomCurve3(pertPts), 42, 0.045, 10, false),
          new T.MeshStandardMaterial({ color: COL.red, roughness: 0.25, emissive: 0x550000, emissiveIntensity: 0.25 })
        );
        trajGroup.add(tClean, tPert);
        tipSpheres['Cover (EEF)'].visible = true;
        tipSpheres['Cover (EEF)'].position.copy(pertPts[pertPts.length - 1]);
        shockwave.position.copy(pertPts[pertPts.length - 1]);
      }
      lastBuiltPct = Math.round(budgetPct);
      lastBuiltMode = mode + ':' + blastCodec;
    }

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      clock += dt;

      if (mode === 'anytime' && sweeping) {
        budgetPct += sweepDir * dt * 10.5;
        if (budgetPct >= 100) { budgetPct = 100; sweepDir = -1; }
        if (budgetPct <= 18) { budgetPct = 18; sweepDir = 1; }
        if (slider) slider.value = Math.round(budgetPct);
        if (valEl) valEl.textContent = `${Math.round(budgetPct)}%`;
      }
      if (Math.abs(Math.round(budgetPct) - lastBuiltPct) >= 1 || lastBuiltMode !== (mode + ':' + blastCodec)) {
        rebuildRibbons();
      }

      // Animate token stream + laser budget gate
      const frac = mode === 'anytime' ? (budgetPct / 100) : 0.14;
      gate.position.x = -3.2 + frac * 7.0;
      gate.material.color.setHex(mode === 'anytime' ? COL.blue : COL.red);
      gate.material.emissive.setHex(mode === 'anytime' ? COL.blue : COL.red);

      tokens.forEach((tk, i) => {
        const active = (i / 24) <= frac;
        tk.position.y = 0.85 + Math.sin(clock * 3.4 - i * 0.42) * 0.06;
        if (mode === 'blast' && i === 3) {
          tk.material.color.setHex(COL.red);
          tk.material.opacity = 1.0;
          tk.scale.setScalar(1.25 + Math.sin(clock * 10) * 0.12);
        } else {
          tk.scale.setScalar(1.0);
          tk.material.color.setHex(active ? COL.blue : 0xD8DCE3);
          tk.material.opacity = active ? 0.92 : 0.34;
        }
      });

      // Shockwave animation in Blast Mode
      if (mode === 'blast') {
        const sw = (clock * 1.4) % 1.0;
        shockwave.scale.setScalar(0.35 + sw * 2.4);
        shockwave.material.opacity = (1 - sw) * 0.72;
      } else {
        shockwave.material.opacity = 0;
      }

      // Gentle cinematic dolly sway
      st.applyCamera(0.32 + Math.sin(clock * 0.25) * 0.18, 0.42 + Math.sin(clock * 0.17) * 0.06, 9.6, 0.35, 0.85, 0.1);
      st.renderer.render(st.scene, st.camera);

      // Draw Frosted-White Serif Telemetry & Live Qwen3-VL-2B Truncation Inset on Right
      st.clearHud();
      const ctx = st.hctx;
      const { w, h } = st.size;

      // Label VLM Emitter & Gate in 3D space
      const pEmit = st.project3D(-4.1, 1.62, -1.6);
      if (pEmit.visible) drawSerifTag(ctx, pEmit.x, pEmit.y, 'Qwen3-VL-2B', COL.cssBlue);
      const pGate = st.project3D(gate.position.x, 1.62, -1.6);
      if (pGate.visible) {
        drawSerifTag(ctx, pGate.x, pGate.y, mode === 'anytime' ? `Budget Gate · ${Math.round(budgetPct)}%` : 'Early Token Detonation', mode === 'anytime' ? COL.cssBlue : COL.cssRed);
      }

      // Crisp Porcelain Telemetry Card Top-Right (Unified Newsreader Serif!)
      const cw = 264, ch = 228, cx = w - cw - 18, cy = 54;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.91)';
      ctx.strokeStyle = 'rgba(228, 225, 218, 0.96)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 12); ctx.fill(); ctx.stroke();

      ctx.font = '600 13.5px "Newsreader", Georgia, serif';
      ctx.fillStyle = COL.cssInk;
      ctx.fillText(mode === 'anytime' ? 'Live Qwen3-VL-2B Anytime SR' : `Single-Token Blast (${blastCodec})`, cx + 14, cy + 23);

      if (mode === 'anytime' && D.exp6_morph && D.exp6_morph.codecs) {
        const codecs = D.exp6_morph.codecs;
        const c16 = interpStat(codecs['Cover (EEF)'].curve, budgetPct, 'mae_first16_mm');
        const o16 = interpStat(codecs['OAT'].curve, budgetPct, 'mae_first16_mm');
        const f16 = interpStat(codecs['FAST'].curve, budgetPct, 'mae_first16_mm');
        ctx.font = 'italic 11.5px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk3;
        ctx.fillText(`First-16 MAE · Cover ${c16.toFixed(1)} · OAT ${o16.toFixed(1)} mm`, cx + 14, cy + 41);

        // Mini live Exp 6B closed-loop curve inside porcelain card
        const pl = cx + 36, pr = cx + cw - 18, pt = cy + 60, pb = cy + ch - 34;
        const sx = (v) => pl + (v / 56) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);
        [0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = '#EFECE6'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = COL.cssInk3; ctx.font = '11px "Newsreader", Georgia, serif'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 5, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0, 15, 30, 45].forEach((x) => ctx.fillText(String(x), sx(x), pb + 14));
        ctx.font = 'italic 11px "Newsreader", Georgia, serif';
        ctx.fillText('Tokens / Chunk (lower = faster VLM)', (pl + pr) / 2, pb + 27);
        ctx.textAlign = 'left';

        const drawMini = (rows, css, isOat) => {
          if (!rows || !rows.length) return;
          const s = [...rows].sort((a, b) => a.mean_tokens_per_chunk - b.mean_tokens_per_chunk);
          ctx.strokeStyle = css; ctx.lineWidth = 2.2;
          ctx.beginPath();
          s.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.mean_tokens_per_chunk), sy(r.success_rate)) : ctx.lineTo(sx(r.mean_tokens_per_chunk), sy(r.success_rate)));
          ctx.stroke();
          s.forEach((r) => {
            const px = sx(r.mean_tokens_per_chunk), py = sy(r.success_rate);
            ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = css; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = css; ctx.font = '600 11px "Newsreader", Georgia, serif'; ctx.textAlign = 'center';
            ctx.fillText(`${Math.round(r.success_rate * 100)}%`, px, py + (isOat && r.budget_param === 12 ? 15 : -8));
            ctx.textAlign = 'left';
          });
        };
        drawMini(D.exp6_cover && D.exp6_cover.rows, COL.cssBlue, false);
        drawMini(D.exp6_oat && D.exp6_oat.rows, COL.cssPurple, true);
      } else if (D.exp1 && D.exp1.codecs && D.exp1.codecs[blastCodec]) {
        const c = D.exp1.codecs[blastCodec];
        const b0 = c.perturbation_by_position[0];
        ctx.font = '600 28px "Instrument Serif", Georgia, serif';
        ctx.fillStyle = b0.max_dev_p50_mm > 100 ? COL.cssRed : COL.cssAmber;
        ctx.fillText(`${b0.max_dev_p50_mm.toFixed(1)} mm blast`, cx + 14, cy + 62);
        ctx.font = 'italic 12.5px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk2;
        ctx.fillText(`Median 1-token early-slot deviation`, cx + 14, cy + 82);
        ctx.fillText(`90th pct tail: ${b0.max_dev_p90_mm.toFixed(1)} mm · Clean: ${c.recon_pos_mae_mm.toFixed(2)} mm`, cx + 14, cy + 100);

        const bins = c.perturbation_by_position;
        const maxM = Math.max(40, ...bins.map((b) => b.max_dev_p50_mm));
        const bw = (cw - 36) / bins.length;
        bins.forEach((b, i) => {
          const bh = (b.max_dev_p50_mm / maxM) * 76;
          const bx = cx + 18 + i * bw + 4;
          const by = cy + ch - 28 - bh;
          ctx.fillStyle = i === 0 ? COL.cssRed : COL.cssBlue;
          ctx.globalAlpha = i === 0 ? 0.88 : 0.35;
          ctx.beginPath(); ctx.roundRect(bx, by, bw - 8, Math.max(4, bh), 3); ctx.fill();
          ctx.globalAlpha = 1;
          ctx.fillStyle = COL.cssInk3; ctx.font = '10.5px "Newsreader", Georgia, serif'; ctx.textAlign = 'center';
          ctx.fillText(`${Math.round(b.rel_pos * 100)}%`, bx + (bw - 8) / 2, cy + ch - 12);
          ctx.textAlign = 'left';
        });
      }
    }

    if (slider) slider.addEventListener('input', () => {
      sweeping = false;
      if (btnSweep) { btnSweep.textContent = '▶ Auto-Sweep'; btnSweep.classList.remove('on'); }
      budgetPct = parseInt(slider.value, 10);
      if (valEl) valEl.textContent = `${budgetPct}%`;
    });
    if (btnSweep) btnSweep.addEventListener('click', () => {
      sweeping = !sweeping;
      btnSweep.textContent = sweeping ? '❚❚ Auto-Sweep' : '▶ Auto-Sweep';
      btnSweep.classList.toggle('on', sweeping);
    });
    modeBtns.forEach((b) => b.addEventListener('click', () => {
      mode = b.dataset.f1Mode;
      modeBtns.forEach((x) => x.classList.toggle('on', x === b));
      document.getElementById('f1-budget-wrap').style.display = mode === 'anytime' ? '' : 'none';
      document.getElementById('f1-blast-wrap').style.display = mode === 'blast' ? '' : 'none';
      if (subEl) {
        subEl.innerHTML = mode === 'anytime'
          ? 'A translucent cobalt laser gate slices the token stream mid-flight—watch how five real 32-step LIBERO trajectories morph in 3D space.'
          : 'Detonating a single early DC token in <strong>FAST</strong> triggers a <em>688 mm global trajectory explosion</em>, whereas OAT tapers smoothly.';
      }
    }));
    blastBtns.forEach((b) => b.addEventListener('click', () => {
      blastCodec = b.dataset.bcodec;
      blastBtns.forEach((x) => x.classList.toggle('on', x === b));
    }));

    requestAnimationFrame(loop);
  }

  // =========================================================================
  // FILM 02 (CHAPTER II) · 3D ARTICULATED GRIPPER & STOCHASTIC COVERAGE FAN
  // =========================================================================
  function initFilmCoverage(D) {
    const st = createStudioStage('vp-coverage', { r: 7.4, az: 0.55, el: 0.42, tx: 0.2, ty: 0.9, tz: 0 });
    if (!st) return;

    const beatBtns = document.querySelectorAll('#f2-beats .fbtn');
    const subEl = document.getElementById('sub-coverage');

    // Warm Honey-Walnut Tabletop Slab & Sculpted Terracotta Bowl
    const table = new T.Mesh(
      new T.BoxGeometry(6.6, 0.24, 4.2),
      new T.MeshStandardMaterial({ color: 0xD6B892, roughness: 0.72 })
    );
    table.position.set(0, 0.12, 0);
    table.receiveShadow = true; table.castShadow = true;
    st.scene.add(table);

    const bowl = new T.Mesh(
      new T.CylinderGeometry(0.32, 0.24, 0.26, 28),
      new T.MeshStandardMaterial({ color: 0xC86B3C, roughness: 0.34, metalness: 0.08 })
    );
    bowl.position.set(0.35, 0.37, 0.2);
    bowl.castShadow = true; bowl.receiveShadow = true;
    st.scene.add(bowl);

    const goalRing = new T.Mesh(
      new T.TorusGeometry(0.48, 0.025, 14, 42),
      new T.MeshStandardMaterial({ color: COL.green, roughness: 0.3 })
    );
    goalRing.rotation.x = Math.PI / 2;
    goalRing.position.set(1.65, 0.24, 0.0);
    st.scene.add(goalRing);

    // Sculpted 3D Articulated Robot Arm operating on the Tabletop
    const arm = createRobotArm(COL.blue, 1.18);
    arm.root.position.set(-1.75, 0.22, -0.35);
    st.scene.add(arm.root);

    // 3D Stochastic Trajectory Fan Ribbons (EMA 30k Cobalt vs Raw 30k Slate)
    const fanGroup = new T.Group();
    st.scene.add(fanGroup);
    const emaBends = [-1.05, -0.52, 0.42, 0.95];
    emaBends.forEach((b) => {
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        pts.push(new T.Vector3(
          -1.05 + u * 2.70,
          0.42 + Math.sin(u * Math.PI) * 0.95,
          -0.20 + u * 0.20 + Math.sin(u * Math.PI) * b
        ));
      }
      const m = new T.Mesh(
        new T.TubeGeometry(new T.CatmullRomCurve3(pts), 32, 0.024, 8, false),
        new T.MeshStandardMaterial({ color: COL.blue, transparent: true, opacity: 0.72, roughness: 0.3 })
      );
      fanGroup.add(m);
    });
    // Collapsed Raw 30k corridor (1 veers off!)
    [-0.18, 0.06, 0.65].forEach((b, idx) => {
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        pts.push(new T.Vector3(
          -1.05 + u * (idx === 2 ? 2.15 : 2.65),
          0.42 + Math.sin(u * Math.PI) * 0.62,
          -0.20 + Math.sin(u * Math.PI) * b + (idx === 2 ? u * u * 0.75 : 0)
        ));
      }
      const m = new T.Mesh(
        new T.TubeGeometry(new T.CatmullRomCurve3(pts), 28, 0.016, 8, false),
        new T.MeshStandardMaterial({ color: COL.slate, transparent: true, opacity: 0.42 })
      );
      fanGroup.add(m);
    });

    // Glowing 3D Amber Command Vector Arrow for Contact Stall Beat!
    const cmdArrow = new T.Group();
    const shaft = new T.Mesh(
      new T.CylinderGeometry(0.036, 0.036, 0.95, 14),
      new T.MeshStandardMaterial({ color: COL.amber, emissive: COL.amber, emissiveIntensity: 0.35 })
    );
    shaft.rotation.z = -Math.PI / 2; shaft.position.x = 0.47;
    const cone = new T.Mesh(
      new T.ConeGeometry(0.11, 0.26, 16),
      new T.MeshStandardMaterial({ color: COL.amber, emissive: COL.amber, emissiveIntensity: 0.35 })
    );
    cone.rotation.z = -Math.PI / 2; cone.position.x = 1.05;
    cmdArrow.add(shaft, cone);
    cmdArrow.position.set(0.25, 0.46, 0.20);
    st.scene.add(cmdArrow);

    let mode = 'auto', clock = 6.2, lastTs = null;

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      clock += dt;

      const activeBeat = mode === 'auto' ? (['fan', 'stall', 'slip'][Math.floor(clock / 5.2) % 3]) : mode;

      if (activeBeat === 'fan') {
        fanGroup.visible = true;
        cmdArrow.visible = false;
        bowl.position.set(0.35, 0.34, 0.20);
        const u = (clock * 0.55) % 1;
        arm.setPose(Math.PI * 0.5 - 0.15, 1.35 + Math.sin(u * Math.PI) * 0.45, 0.85 + Math.sin(u * Math.PI) * 0.42, 0.08);
        st.applyCamera(0.45 + Math.sin(clock * 0.3) * 0.22, 0.56, 7.6, 0.25, 0.6, 0.0);
        if (subEl) subEl.innerHTML = '<strong>Beat I · EMA Coverage Fan</strong> — Validation CE rises past 12k steps while <em>EMA 30k expands to 93.3% pass@4</em> against Raw 84.0%.';
      } else if (activeBeat === 'stall') {
        fanGroup.visible = false;
        cmdArrow.visible = true;
        bowl.position.set(0.42, 0.34, 0.05);
        const vib = Math.sin(clock * 28) * 0.015;
        arm.setPose(Math.PI * 0.5 - 0.18, 1.72 + vib, 0.44, 0.02);
        cmdArrow.position.set(0.15 + vib, 0.46, 0.05);
        cmdArrow.scale.setScalar(0.92 + Math.sin(clock * 7) * 0.14);
        st.applyCamera(0.28 + Math.sin(clock * 0.35) * 0.14, 0.28, 4.9, 0.25, 0.45, 0.05);
        if (subEl) subEl.innerHTML = '<strong>Beat II · Contact Stall (40.5%)</strong> — The gripper commands <em>cmd &gt; 0.25</em> into the solid rim while displacement stays below 1.5 mm.';
      } else {
        fanGroup.visible = false;
        cmdArrow.visible = false;
        const chatter = Math.abs(Math.sin(clock * 9.5)) * 0.11;
        const drop = Math.max(0, Math.sin(clock * 3.2)) * 0.36;
        arm.setPose(Math.PI * 0.5 - 0.18, 1.65, 0.92, 0.02 + chatter);
        bowl.position.set(0.22, 0.34 + drop * 0.55, 0.04);
        st.applyCamera(0.85 + Math.sin(clock * 0.3) * 0.15, 0.30, 5.1, 0.15, 0.55, 0.04);
        if (subEl) subEl.innerHTML = '<strong>Beat III · Grasp Slip (31.6%)</strong> — Parallel jaws chatter open and closed (≥4×), turning physical contact instability into apparent "timeouts".';
      }

      st.renderer.render(st.scene, st.camera);

      // Porcelain Serif Overlay Inset (6-Arm Leaderboard + 72.2% Breakdown)
      st.clearHud();
      const ctx = st.hctx;
      const { w } = st.size;
      const cw = 258, ch = 220, cx = w - cw - 18, cy = 54;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.91)';
      ctx.strokeStyle = 'rgba(228, 225, 218, 0.96)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 12); ctx.fill(); ctx.stroke();

      ctx.font = '600 13.5px "Newsreader", Georgia, serif';
      ctx.fillStyle = COL.cssInk;
      ctx.fillText('Same-Backbone Qwen3-VL-2B SR', cx + 14, cy + 23);

      const order = [
        ['cover_eef_lib', 'Cover (EEF)', COL.cssBlue],
        ['fast_eef', 'FAST (EEF)', COL.cssAmber],
        ['oat_joint', 'OAT (Joint)', COL.cssPurple],
        ['cover_h32_joint', 'Cover (Joint)', COL.cssSlate],
        ['bin256_eef', 'Bin256 (EEF)', COL.cssTeal],
        ['holo_joint', 'Holo FSQ', COL.cssRed],
      ];
      order.forEach(([k, lbl, col], idx) => {
        const r = D.dev_leaderboard && D.dev_leaderboard[k];
        const sr = r ? r.mean : 0;
        const y = cy + 44 + idx * 27;
        ctx.font = '500 12px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk2;
        ctx.fillText(lbl, cx + 14, y + 8);
        ctx.fillStyle = '#F2EFE9';
        ctx.beginPath(); ctx.roundRect(cx + 104, y - 1, 102, 10, 4); ctx.fill();
        ctx.fillStyle = col;
        ctx.beginPath(); ctx.roundRect(cx + 104, y - 1, Math.max(3, sr * 102), 10, 4); ctx.fill();
        ctx.font = '600 12px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk; ctx.textAlign = 'right';
        ctx.fillText(`${(sr * 100).toFixed(1)}%`, cx + cw - 12, y + 8);
        ctx.textAlign = 'left';
      });
    }

    beatBtns.forEach((b) => b.addEventListener('click', () => {
      mode = b.dataset.f2;
      beatBtns.forEach((x) => x.classList.toggle('on', x === b));
    }));
    requestAnimationFrame(loop);
  }

  // =========================================================================
  // FILM 03 (CHAPTER III) · 900-SPHERE 3D MANIFOLD FLY-THROUGH & SPRING MORPH
  // =========================================================================
  function initFilmManifold(D) {
    const st = createStudioStage('vp-manifold', { r: 10.2, az: 0.45, el: 0.42, tx: 0, ty: 1.15, tz: 0 });
    if (!st || !D.exp9_manifold || !D.exp9_manifold.points) return;

    const man = D.exp9_manifold;
    const pts = man.points; // [arm, dir, jx, jy, cx, cy, dx, dy, dz]
    const mj = man.metrics.joint_cover;
    const mc = man.metrics.task_c1;

    const btnJ = document.getElementById('m-joint');
    const btnC = document.getElementById('m-c1');
    const btnCol = document.getElementById('m-color');
    const btnAuto = document.getElementById('m-auto');
    const slider = document.getElementById('m-slider');
    const valEl = document.getElementById('m-val');
    const subEl = document.getElementById('sub-manifold');

    const armHex = [COL.blue, COL.amber, COL.green, COL.red, COL.purple];
    const armCss = [COL.cssBlue, COL.cssAmber, COL.cssGreen, COL.cssRed, COL.cssPurple];
    const dirHex = [COL.blue, COL.red, COL.green, COL.amber, COL.purple, COL.teal];

    // Circular Gallery Floor Ring + 5 Miniature Sculpted Robot Plinths around Perimeter
    const ring = new T.Mesh(
      new T.TorusGeometry(4.2, 0.025, 12, 72),
      new T.MeshStandardMaterial({ color: 0xD8D3C8, roughness: 0.7 })
    );
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.02;
    st.scene.add(ring);

    const plinthArms = man.arms.map((nm, i) => {
      const ang = (i / 5) * Math.PI * 2 + 0.3;
      const rx = Math.cos(ang) * 4.2, rz = Math.sin(ang) * 4.2;
      const a = createRobotArm(armHex[i], 0.56);
      a.root.position.set(rx, 0.02, rz);
      a.setPose(-ang + Math.PI, 1.0, 1.1, 0.06);
      st.scene.add(a.root);
      return { arm: a, nm, rx, rz, col: armCss[i], ang };
    });

    // 900 Real Paired Trajectories as 3D PBR Instanced Spheres!
    const N = pts.length;
    const sphereGeo = new T.SphereGeometry(0.062, 12, 12);
    const sphereMat = new T.MeshStandardMaterial({ roughness: 0.28, metalness: 0.12 });
    const inst = new T.InstancedMesh(sphereGeo, sphereMat, N);
    inst.castShadow = true;
    st.scene.add(inst);

    const dummy = new T.Object3D();
    const cTmp = new T.Color();
    let colorBy = 'arm';

    function recolor() {
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        cTmp.setHex(colorBy === 'arm' ? armHex[p[0]] : dirHex[p[1]]);
        inst.setColorAt(i, cTmp);
      }
      inst.instanceColor.needsUpdate = true;
    }
    recolor();

    let curT = 0, targetT = 0, autoMorph = true, clock = 0, lastTs = null;

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      clock += dt;

      if (autoMorph) {
        // Hold briefly at 0 (Joint) and 1 (Task C1) so viewer appreciates both worlds!
        const cyc = (clock * 0.22) % 2.0;
        const raw = cyc < 0.35 ? 0 : (cyc < 1.0 ? (cyc - 0.35) / 0.65 : (cyc < 1.35 ? 1 : 1 - (cyc - 1.35) / 0.65));
        curT = targetT = raw;
        if (slider) slider.value = Math.round(curT * 100);
      } else {
        curT += (targetT - curT) * Math.min(1, dt * 7.5);
      }

      const e = curT * curT * (3 - 2 * curT);
      if (valEl) valEl.textContent = curT < 0.05 ? 'Joint 100%' : (curT > 0.95 ? 'Task C1 100%' : `Morph ${Math.round(curT * 100)}%`);
      if (btnJ && btnC) {
        btnJ.classList.toggle('on', curT < 0.5);
        btnC.classList.toggle('on', curT >= 0.5);
      }

      // Position all 900 3D spheres using real spectral (x, y) + real 3D displacement dz for vertical relief!
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const x = (p[2] + (p[4] - p[2]) * e) * 3.1;
        const z = -(p[3] + (p[5] - p[3]) * e) * 3.1;
        // Real normalized vertical 3D motion p[8] gives genuine volumetric 3D relief!
        const yJoint = 0.75 + p[0] * 0.32 + Math.sin(i * 0.7) * 0.14;
        const yTask = 1.45 + Math.max(-0.95, Math.min(0.95, p[8] / 140));
        const y = yJoint + (yTask - yJoint) * e;
        dummy.position.set(x, y, z);
        dummy.scale.setScalar(1.0);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true;

      // Gentle alive sway on perimeter robot plinths
      plinthArms.forEach((pa, idx) => {
        pa.arm.setPose(-pa.ang + Math.PI, 0.95 + Math.sin(clock * 1.4 + idx) * 0.12, 1.05 + Math.cos(clock * 1.2 + idx) * 0.10, 0.06);
      });

      st.applyCamera(clock * 0.18, 0.42 + Math.sin(clock * 0.22) * 0.08, 10.4, 0, 1.25, 0);
      st.renderer.render(st.scene, st.camera);

      // Update live serif subtitle & right HUD telemetry
      const purity = (mj.knn10_robot_purity + (mc.knn10_robot_purity - mj.knn10_robot_purity) * curT) * 100;
      const cos = mj.knn10_motion_cos_cross_arm + (mc.knn10_motion_cos_cross_arm - mj.knn10_motion_cos_cross_arm) * curT;
      const r2 = -1.297 + (0.892 - (-1.297)) * curT;
      if (subEl) {
        subEl.innerHTML = curT < 0.5
          ? `<strong>Joint-Slot Cover Space</strong> — Five robot dialects separate into disjoint constellations (<em>${purity.toFixed(1)}% robot-ID purity</em>, zero-shot R² = ${r2.toFixed(2)}).`
          : `<strong>Task-Space C1 Manifold</strong> — All five arms blend to the <em>${purity.toFixed(1)}% random-mixing floor</em> while 3D motion alignment surges to <strong>+${cos.toFixed(3)}</strong>.`;
      }

      st.clearHud();
      const ctx = st.hctx;
      const { w } = st.size;

      // Floating Porcelain Serif KPI Card Top-Right
      const cw = 236, ch = 124, cx = w - cw - 18, cy = 54;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.strokeStyle = 'rgba(228, 225, 218, 0.96)';
      ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 12); ctx.fill(); ctx.stroke();

      const metrics = [
        ['10-NN Robot Purity', `${purity.toFixed(1)}%`, purity > 45 ? COL.cssRed : COL.cssGreen],
        ['Cross-Arm 3D Align', `+${cos.toFixed(3)}`, cos > 0.45 ? COL.cssBlue : COL.cssSlate],
        ['Zero-Shot Probe R²', `${r2 >= 0 ? '+' : ''}${r2.toFixed(2)}`, r2 > 0.4 ? COL.cssGreen : COL.cssRed],
      ];
      metrics.forEach(([k, v, col], idx) => {
        const y = cy + 29 + idx * 34;
        ctx.font = 'italic 12.5px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk3;
        ctx.fillText(k, cx + 14, y);
        ctx.font = '600 17px "Newsreader", Georgia, serif';
        ctx.fillStyle = col; ctx.textAlign = 'right';
        ctx.fillText(v, cx + cw - 14, y);
        ctx.textAlign = 'left';
      });

      // Project crisp serif name tags above the 5 perimeter robots
      plinthArms.forEach((pa) => {
        const sp = st.project3D(pa.rx, 1.38, pa.rz);
        if (sp.visible && sp.x > 60 && sp.x < w - 260 && sp.y > 54 && sp.y < st.size.h - 78) {
          drawSerifTag(ctx, sp.x, sp.y, pa.nm, pa.col);
        }
      });
    }

    function setManual(t) {
      autoMorph = false;
      if (btnAuto) { btnAuto.classList.remove('on'); btnAuto.textContent = '▶ Auto-Morph'; }
      targetT = t;
      if (slider) slider.value = Math.round(t * 100);
    }
    btnJ.addEventListener('click', () => setManual(0));
    btnC.addEventListener('click', () => setManual(1));
    btnCol.addEventListener('click', () => {
      colorBy = colorBy === 'arm' ? 'dir' : 'arm';
      btnCol.textContent = colorBy === 'arm' ? 'Color: Robot Arm' : 'Color: 3D Direction';
      btnCol.classList.toggle('on', colorBy === 'dir');
      recolor();
    });
    btnAuto.addEventListener('click', () => {
      autoMorph = !autoMorph;
      btnAuto.classList.toggle('on', autoMorph);
      btnAuto.textContent = autoMorph ? '❚❚ Auto-Morph' : '▶ Auto-Morph';
    });
    slider.addEventListener('input', () => {
      autoMorph = false;
      if (btnAuto) { btnAuto.classList.remove('on'); btnAuto.textContent = '▶ Auto-Morph'; }
      curT = targetT = parseFloat(slider.value) / 100;
    });

    requestAnimationFrame(loop);
  }

  // =========================================================================
  // FILM 04 (CHAPTER IV · CROWN JEWEL) · FOUR 3D ARMS, CABINETS & SPRINGS
  // =========================================================================
  function initFilmForce(D) {
    const st = createStudioStage('vp-force', { r: 10.6, az: 0.36, el: 0.36, tx: 0.2, ty: 0.95, tz: 0.1 });
    if (!st) return;

    const modeBtns = document.querySelectorAll('#f4-modes .fbtn');
    const kpSlider = document.getElementById('f4-kp');
    const kpVal = document.getElementById('f4-kp-val');
    const subEl = document.getElementById('sub-force');

    const specs = [
      { name: 'Franka Panda', col: COL.blue, css: COL.cssBlue, x: -3.85, c1f: '90%' },
      { name: 'UR5e (6-DoF)', col: COL.amber, css: COL.cssAmber, x: -1.80, c1f: '70%' },
      { name: 'KUKA IIWA', col: COL.green, css: COL.cssGreen, x: 0.25, c1f: '85%' },
      { name: 'Kinova Gen3', col: COL.purple, css: COL.cssPurple, x: 2.30, c1f: '55%' },
    ];

    const matOak = new T.MeshStandardMaterial({ color: COL.oak, roughness: 0.72 });
    const matDrawer = new T.MeshStandardMaterial({ color: 0xFAF8F4, roughness: 0.45 });
    const matBrass = new T.MeshStandardMaterial({ color: COL.brass, metalness: 0.75, roughness: 0.28 });

    const stations = specs.map((sp) => {
      const grp = new T.Group();
      grp.position.set(sp.x, 0, 0);
      st.scene.add(grp);

      // Matte-Oak Studio Cabinet Carcass at z = -1.65
      const cab = new T.Mesh(new T.BoxGeometry(1.42, 1.32, 1.10), matOak);
      cab.position.set(0, 0.66, -1.75);
      cab.castShadow = true; cab.receiveShadow = true;
      grp.add(cab);

      // Sliding Satin-White Drawer + Brass Handle
      const drawer = new T.Group();
      const dBox = new T.Mesh(new T.BoxGeometry(1.18, 0.42, 0.96), matDrawer);
      dBox.castShadow = true; dBox.receiveShadow = true;
      const handle = new T.Mesh(new T.CylinderGeometry(0.032, 0.032, 0.44, 14), matBrass);
      handle.rotation.z = Math.PI / 2;
      handle.position.set(0, 0, 0.54);
      drawer.add(dBox, handle);
      drawer.position.set(0, 0.86, -1.62);
      grp.add(drawer);

      // Sculpted 3D Articulated Robot Arm positioned in front of Cabinet at z = +1.35
      const arm = createRobotArm(sp.col, 0.96);
      arm.root.position.set(0, 0, 1.38);
      grp.add(arm.root);

      // Translucent Floating Virtual Setpoint Ghost Ring (p_cmd)
      const ghost = new T.Mesh(
        new T.TorusGeometry(0.14, 0.024, 12, 28),
        new T.MeshStandardMaterial({ color: COL.amber, emissive: COL.amber, emissiveIntensity: 0.35, transparent: true, opacity: 0.85 })
      );
      ghost.position.set(0, 0.86, -0.5);
      grp.add(ghost);

      // Live 3D Helical Impedance Spring connecting Gripper (p_meas) to Virtual Target (p_cmd)!
      const springMat = new T.MeshStandardMaterial({ color: COL.amber, metalness: 0.45, roughness: 0.25, emissive: 0x4A2200, emissiveIntensity: 0.2 });
      const spring = new T.Mesh(buildHelixGeo(0.5, 6.5, 0.095, 0.022), springMat);
      spring.castShadow = true;
      grp.add(spring);

      // Glowing Amber 3D Force-Intent Pulse Halo around spring!
      const pulseRing = new T.Mesh(
        new T.TorusGeometry(0.26, 0.018, 12, 32),
        new T.MeshStandardMaterial({ color: COL.amber, emissive: COL.amber, emissiveIntensity: 0.5, transparent: true, opacity: 0 })
      );
      grp.add(pulseRing);

      return { ...sp, grp, drawer, arm, ghost, spring, springMat, pulseRing };
    });

    let mode = 'c1f', kpMult = 1.0, phase = 0.46, clock = 0, lastTs = null;

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      clock += dt;
      phase = (phase + dt * 0.28) % 1.38;
      const p = Math.min(1.0, phase);

      const activeMode = mode === 'director' ? (['ach', 'raw', 'c1f'][Math.floor(clock / 5.5) % 3]) : mode;
      const effKp = (mode === 'director' && activeMode === 'raw') ? 1.6 : kpMult;

      // Calibrated Exp 4A spring physics
      let drawerMM = 0, springLen = 0.04, forceN = 0, springHex = COL.amber, pulseOn = false;
      if (activeMode === 'ach') {
        drawerMM = Math.min(1.5, p * 2.2);
        springLen = 0.05;
        forceN = 1.2 * effKp;
        springHex = COL.red;
        if (subEl) subEl.innerHTML = '<strong>ach_d3 (Pose Only)</strong> — Every gripper tracks within <em>0.29 mm</em>, flattening all four 3D springs (~1.2 N) and leaving all four drawers locked shut.';
      } else if (activeMode === 'raw') {
        const peakF = 40.6 * effKp;
        if (peakF < 36.0) {
          drawerMM = Math.min(5, p * 8);
          springLen = 0.45 * Math.min(1, p * 1.8);
          forceN = peakF * Math.min(1, p * 1.8);
          springHex = COL.red;
          if (subEl) subEl.innerHTML = `<strong>Raw OSC @ K_p × ${effKp.toFixed(1)}</strong> — Reduced stiffness produces only <em>${forceN.toFixed(0)} N &lt; 36 N</em>, stalling all four drawers.`;
        } else if (effKp >= 1.45) {
          const tm = Math.max(0, (p - 0.14) / 0.86);
          const osc = Math.sin(tm * 18) * 14 * Math.exp(-tm * 2.4);
          drawerMM = Math.min(165, tm * 165 + Math.max(0, osc * 0.45));
          springLen = 0.82 + osc * 0.018;
          forceN = Math.min(357, 165 * effKp * (1 - 0.28 * tm) + Math.abs(osc) * 8);
          springHex = COL.purple;
          if (subEl) subEl.innerHTML = `<strong>Raw OSC @ K_p × ${effKp.toFixed(1)}</strong> — High stiffness over-stretches the springs into a <em>${forceN.toFixed(0)} N violent slam</em> with 44 mm overshoot.`;
        } else {
          const tm = Math.max(0, (p - 0.20) / 0.80);
          drawerMM = tm * 160;
          springLen = 0.48;
          forceN = (p < 0.2 ? (p / 0.2) * 145 : 145 - tm * 45) * effKp;
          springHex = COL.blue;
          if (subEl) subEl.innerHTML = `<strong>Raw OSC (Nominal K_p × ${effKp.toFixed(1)})</strong> — Opens nominally at ${forceN.toFixed(0)} N, yet force breaks whenever target robot stiffness shifts.`;
        }
      } else {
        const tm = Math.max(0, (p - 0.18) / 0.82);
        drawerMM = tm * 160;
        pulseOn = (p > 0.08 && p < 0.86);
        springLen = pulseOn ? Math.min(0.88, 0.56 / effKp) : 0.05;
        forceN = p < 0.18 ? (p / 0.18) * 148 : 148 * (1 - 0.32 * tm);
        springHex = COL.amber;
        if (subEl) subEl.innerHTML = `<strong>C1F+D3F (+5 mm Sparse Force)</strong> — Fires amber Newton pulses on just <em>30.8% of frames</em>, scaling spring deflection inversely with K_p×${effKp.toFixed(1)} to rescue all four arms (${forceN.toFixed(0)} N).`;
      }

      // Update all 4 3D stations cleanly
      const slide3D = (drawerMM / 160) * 0.68;
      stations.forEach((s) => {
        s.drawer.position.z = -1.62 + slide3D;
        const handleZ = s.drawer.position.z + 0.56;
        // Arm pulls backward smoothly as drawer opens!
        const reachHoriz = Math.max(0.65, 1.38 - handleZ - 0.14);
        s.arm.setPose(Math.PI, reachHoriz, 0.86, 0.025);

        // Spring stretches from handleZ toward the robot (+z direction)
        s.spring.position.set(0, 0.86, handleZ);
        s.spring.scale.set(1, 1, Math.max(0.08, springLen / 0.5));
        s.springMat.color.setHex(springHex);
        s.springMat.emissive.setHex(springHex);
        s.springMat.emissiveIntensity = pulseOn ? 0.35 : 0.14;

        s.ghost.position.set(0, 0.86, handleZ + springLen);
        s.ghost.visible = springLen > 0.10;
        s.ghost.material.color.setHex(springHex);

        if (pulseOn) {
          const pr = (clock * 1.8) % 1;
          s.pulseRing.position.set(0, 0.86, handleZ + springLen * 0.5);
          s.pulseRing.scale.setScalar(0.6 + pr * 1.3);
          s.pulseRing.material.opacity = (1 - pr) * 0.65;
        } else {
          s.pulseRing.material.opacity = 0;
        }
      });

      // Sweeping camera across the 4-arm gallery
      const az = 0.28 + Math.sin(clock * 0.24) * 0.36;
      const el = 0.36 + Math.sin(clock * 0.18) * 0.07;
      st.applyCamera(az, el, 10.6, 0.15, 0.88, -0.15);
      st.renderer.render(st.scene, st.camera);

      // Projected Serif Arm Labels + Top-Right Porcelain Exp 7B Force-Sparsity Pareto Inset!
      st.clearHud();
      const ctx = st.hctx;
      const { w } = st.size;
      stations.forEach((s) => {
        const sp = st.project3D(s.x, 1.62, -1.75);
        if (sp.visible && sp.x > 60 && sp.x < w - 275) {
          drawSerifTag(ctx, sp.x, sp.y, s.name, s.css, `${drawerMM.toFixed(0)} mm · ${forceN.toFixed(0)} N`);
        }
      });

      // Top-Right Frosted Porcelain Exp 7B Pareto Card
      const rows = D.exp7_frontier && D.exp7_frontier.rows;
      if (rows && rows.length) {
        const cw = 264, ch = 198, cx = w - cw - 18, cy = 54;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
        ctx.strokeStyle = 'rgba(228, 225, 218, 0.96)';
        ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 12); ctx.fill(); ctx.stroke();

        ctx.font = '600 13px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk;
        ctx.fillText('Force-Sparsity Pareto (Exp 7B)', cx + 14, cy + 22);
        ctx.font = 'italic 11.5px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssGreen;
        ctx.fillText('30.8% active frames (81.7%) beat 100% dense', cx + 14, cy + 38);

        const pl = cx + 36, pr = cx + cw - 16, pt = cy + 52, pb = cy + ch - 30;
        const sx = (v) => pl + (Math.min(100, v) / 100) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);
        [0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = '#EFECE6'; ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = COL.cssInk3; ctx.font = '10.5px "Newsreader", Georgia, serif'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 5, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0, 50, 100].forEach((x) => ctx.fillText(`${x}%`, sx(x), pb + 13));
        ctx.font = 'italic 10.5px "Newsreader", Georgia, serif';
        ctx.fillText('Active Force-Intent Frames (%)', (pl + pr) / 2, pb + 25);
        ctx.textAlign = 'left';

        const db5 = rows.filter((r) => r.label.startsWith('5mm') || r.active_frame_pct === 0 || r.active_frame_pct === 100).sort((a, b) => a.active_frame_pct - b.active_frame_pct);
        ctx.strokeStyle = COL.cssAmber; ctx.lineWidth = 2;
        ctx.beginPath();
        db5.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.active_frame_pct), sy(r.mean_3arm_sr)) : ctx.lineTo(sx(r.active_frame_pct), sy(r.mean_3arm_sr)));
        ctx.stroke();

        rows.forEach((r) => {
          const isBest = r.label.startsWith('5mm / db=12mm');
          const isZero = r.active_frame_pct === 0;
          const col = isZero ? COL.cssRed : (isBest ? COL.cssGreen : COL.cssAmber);
          const x = sx(r.active_frame_pct), y = sy(r.mean_3arm_sr);
          ctx.fillStyle = col; ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.arc(x, y, isBest ? 5.2 : 3.4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          if (isBest) {
            ctx.fillStyle = COL.cssGreen; ctx.font = '600 10.5px "Newsreader", Georgia, serif';
            ctx.fillText('81.7%', x - 8, y - 9);
          } else if (isZero) {
            ctx.fillStyle = COL.cssRed; ctx.font = '600 10.5px "Newsreader", Georgia, serif';
            ctx.fillText('16.7%', x + 7, y + 3);
          }
        });
      }
    }

    modeBtns.forEach((b) => b.addEventListener('click', () => {
      mode = b.dataset.f4m;
      modeBtns.forEach((x) => x.classList.toggle('on', x === b));
      phase = 0;
    }));
    if (kpSlider) kpSlider.addEventListener('input', () => {
      kpMult = parseInt(kpSlider.value, 10) / 100;
      if (kpVal) kpVal.textContent = `${kpMult.toFixed(1)}× (${Math.round(150 * kpMult)})`;
      phase = 0;
    });
    requestAnimationFrame(loop);
  }

  // =========================================================================
  // FILM 05 (CHAPTER V) · 3D DRIFT WIND-TUNNEL & 4-TIER GLASS STACK
  // =========================================================================
  function initFilmLoop(D) {
    const st = createStudioStage('vp-loop', { r: 9.8, az: 0.44, el: 0.44, tx: 0, ty: 1.0, tz: 0 });
    if (!st) return;

    const sceneBtns = document.querySelectorAll('#f5-scenes .fbtn');
    const subEl = document.getElementById('sub-loop');

    // --- SCENE A: DUAL-ARM 3D DRIFT WIND-TUNNEL TABLETOP ---
    const tabletopGrp = new T.Group();
    st.scene.add(tabletopGrp);

    const slab = new T.Mesh(
      new T.BoxGeometry(7.2, 0.24, 4.4),
      new T.MeshStandardMaterial({ color: 0xD6B892, roughness: 0.72 })
    );
    slab.position.set(0, 0.12, 0);
    slab.receiveShadow = true; slab.castShadow = true;
    tabletopGrp.add(slab);

    // Two Target Plates & Pick Bowls (Left: Open-Loop, Right: Contact-Gated [FB])
    [-1.75, 1.75].forEach((x) => {
      const plate = new T.Mesh(
        new T.CylinderGeometry(0.46, 0.42, 0.05, 32),
        new T.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.3 })
      );
      plate.position.set(x, 0.24, 1.15);
      plate.receiveShadow = true;
      tabletopGrp.add(plate);

      const ring = new T.Mesh(
        new T.TorusGeometry(0.49, 0.02, 12, 36),
        new T.MeshStandardMaterial({ color: COL.green })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, 0.26, 1.15);
      tabletopGrp.add(ring);
    });

    const armOpen = createRobotArm(COL.red, 0.92);
    armOpen.root.position.set(-1.75, 0.22, -1.65);
    tabletopGrp.add(armOpen.root);

    const armGated = createRobotArm(COL.blue, 0.92);
    armGated.root.position.set(1.75, 0.22, -1.65);
    tabletopGrp.add(armGated.root);

    // Translucent 3D Emerald Glass Shield around Gated Arm during Contact!
    const shield = new T.Mesh(
      new T.SphereGeometry(0.62, 24, 24),
      new T.MeshStandardMaterial({ color: COL.green, emissive: COL.green, emissiveIntensity: 0.25, transparent: true, opacity: 0.26, roughness: 0.15 })
    );
    tabletopGrp.add(shield);

    // Animated Translucent Amber Drift Wind Streamlines blowing +X!
    const windBars = Array.from({ length: 14 }, (_, i) => {
      const m = new T.Mesh(
        new T.CylinderGeometry(0.014, 0.014, 0.95, 8),
        new T.MeshStandardMaterial({ color: COL.amber, transparent: true, opacity: 0.32 })
      );
      m.rotation.z = Math.PI / 2;
      m.position.set(-3.2 + (i % 5) * 1.5, 0.55 + (i % 3) * 0.45, -1.2 + Math.floor(i / 5) * 1.1);
      tabletopGrp.add(m);
      return m;
    });

    // --- SCENE B: 3D 4-TIER LEVITATING FROSTED GLASS ARCHITECTURE ---
    const stackGrp = new T.Group();
    stackGrp.visible = false;
    st.scene.add(stackGrp);

    const tierMeta = [
      { y: 3.15, name: 'Tier 1 · Episodic Agent (0.1–1 Hz)', sub: 'RoboThink · AMP1', hex: COL.purple, css: COL.cssPurple },
      { y: 2.25, name: 'Tier 2 · Discrete Bridge (1–5 Hz)', sub: 'Cover · ActionCodec2 · OAT', hex: COL.blue, css: COL.cssBlue },
      { y: 1.35, name: 'Tier 3 · Continuous Expert (20–30 Hz)', sub: 'MR0 · SANA-Robot', hex: COL.teal, css: COL.cssTeal },
      { y: 0.45, name: 'Tier 4 · Force Executor (200–1000 Hz)', sub: 'C1F+D3F · Contact-Gated [FB]', hex: COL.amber, css: COL.cssAmber },
    ];
    tierMeta.forEach((tm, idx) => {
      const wSlab = 3.8 + idx * 0.42;
      const slabM = new T.Mesh(
        new T.BoxGeometry(wSlab, 0.18, 2.3 + idx * 0.18),
        new T.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.18, metalness: 0.08, transparent: true, opacity: 0.88 })
      );
      slabM.position.y = tm.y;
      slabM.castShadow = true; slabM.receiveShadow = true;
      stackGrp.add(slabM);

      const trim = new T.Mesh(
        new T.BoxGeometry(wSlab + 0.05, 0.045, 2.35 + idx * 0.18),
        new T.MeshStandardMaterial({ color: tm.hex, roughness: 0.3 })
      );
      trim.position.y = tm.y + 0.095;
      stackGrp.add(trim);
    });

    // Ascending amber feedback & descending cobalt command pearls between slabs
    const stackPearls = Array.from({ length: 8 }, (_, i) => {
      const down = i < 4;
      const m = new T.Mesh(
        new T.SphereGeometry(0.075, 16, 16),
        new T.MeshStandardMaterial({ color: down ? COL.blue : COL.amber, emissive: down ? 0x103080 : 0x703000, emissiveIntensity: 0.35 })
      );
      stackGrp.add(m);
      return { m, down, offset: (i % 4) * 0.25 };
    });

    let activeScene = 'tabletop', clock = 2.0, lastTs = null;

    function loop(ts) {
      requestAnimationFrame(loop);
      if (!st.shouldRender()) { lastTs = ts; return; }
      const dt = lastTs === null ? 0.016 : Math.max(0, Math.min(0.05, (ts - lastTs) / 1000));
      lastTs = ts;
      clock += dt;

      tabletopGrp.visible = activeScene === 'tabletop';
      stackGrp.visible = activeScene === 'stack';

      if (activeScene === 'tabletop') {
        const u = Math.min(1, (clock * 0.28) % 1.32);
        // Wind blows steadily +X
        windBars.forEach((wb) => {
          wb.position.x += dt * 1.65;
          if (wb.position.x > 3.5) wb.position.x = -3.5;
        });

        // Left Arm (Open-Loop k=32) drifts steadily right off target plate!
        const openYaw = -0.05 + u * 0.56;
        armOpen.setPose(openYaw, 1.05 + u * 0.95, 0.68 - Math.sin(u * Math.PI) * 0.22, 0.04);

        // Right Arm (Contact-Gated [FB]) cancels drift in free space, raises emerald shield in contact!
        const resYaw = u < 0.36 ? Math.sin((u / 0.36) * Math.PI) * 0.22 : 0.0;
        armGated.setPose(resYaw, 1.05 + u * 1.12, 0.68 - Math.sin(u * Math.PI) * 0.22, u > 0.38 && u < 0.85 ? 0.02 : 0.09);

        const inContact = (u > 0.38 && u < 0.76);
        shield.visible = inContact;
        shield.position.set(1.75, 0.65, -0.55 + u * 1.55);
        shield.scale.setScalar(0.95 + Math.sin(clock * 6) * 0.06);

        st.applyCamera(0.32 + Math.sin(clock * 0.22) * 0.24, 0.48, 9.4, 0.1, 0.65, 0.15);
      } else {
        stackPearls.forEach((sp) => {
          const p = (clock * 0.45 + sp.offset) % 1;
          const y = sp.down ? (3.2 - p * 2.8) : (0.4 + p * 2.8);
          sp.m.position.set(sp.down ? -0.95 : 0.95, y, 1.25);
        });
        st.applyCamera(0.55 + Math.sin(clock * 0.26) * 0.35, 0.32, 9.6, 0.2, 1.75, 0);
      }

      st.renderer.render(st.scene, st.camera);

      // Unified Serif HUD Layer
      st.clearHud();
      const ctx = st.hctx;
      const { w } = st.size;

      if (activeScene === 'tabletop') {
        const pL = st.project3D(-1.75, 1.85, -1.65);
        const pR = st.project3D(1.75, 1.85, -1.65);
        if (pL.visible) drawSerifTag(ctx, pL.x, pL.y, 'Open-Loop k=32', COL.cssRed, 'Drifts off plate · 32% SR');
        if (pR.visible) drawSerifTag(ctx, Math.min(w - 378, pR.x), pR.y, 'Contact-Gated [FB]', COL.cssGreen, 'Freezes 74.7% · 56.7% SR');

        // Top-Right Frosted Porcelain Exp 8 Phase Curve
        const cw = 256, ch = 192, cx = w - cw - 18, cy = 54;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
        ctx.strokeStyle = 'rgba(228, 225, 218, 0.96)';
        ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 12); ctx.fill(); ctx.stroke();

        ctx.font = '600 13px "Newsreader", Georgia, serif';
        ctx.fillStyle = COL.cssInk;
        ctx.fillText('Drift Phase Curve (Exp 8 · k=32)', cx + 14, cy + 22);

        const pl = cx + 36, pr = cx + cw - 18, pt = cy + 42, pb = cy + ch - 30;
        const sx = (d) => pl + (d / 0.105) * (pr - pl);
        const sy = (v) => pb - v * (pb - pt);
        [0.25, 0.5, 0.75, 1.0].forEach((y) => {
          ctx.strokeStyle = '#EFECE6'; ctx.beginPath(); ctx.moveTo(pl, sy(y)); ctx.lineTo(pr, sy(y)); ctx.stroke();
          ctx.fillStyle = COL.cssInk3; ctx.font = '10.5px "Newsreader", Georgia, serif'; ctx.textAlign = 'right';
          ctx.fillText(`${Math.round(y * 100)}%`, pl - 5, sy(y) + 3);
        });
        ctx.textAlign = 'center';
        [0.0, 0.04, 0.07, 0.10].forEach((d) => ctx.fillText(`+${d.toFixed(2)}`, sx(d), pb + 13));
        ctx.font = 'italic 10.5px "Newsreader", Georgia, serif';
        ctx.fillText('Unknown Constant Lateral Drift', (pl + pr) / 2, pb + 25);
        ctx.textAlign = 'left';

        const drawDr = (src, col, dash, dy) => {
          const rows = (src && src.rows || []).filter((r) => r.n_action_steps === 32).sort((a, b) => a.drift - b.drift);
          if (!rows.length) return;
          ctx.strokeStyle = col; ctx.lineWidth = 2.1;
          if (dash) ctx.setLineDash(dash);
          ctx.beginPath();
          rows.forEach((r, i) => i === 0 ? ctx.moveTo(sx(r.drift), sy(r.success_rate)) : ctx.lineTo(sx(r.drift), sy(r.success_rate)));
          ctx.stroke(); ctx.setLineDash([]);
          rows.forEach((r) => {
            const x = sx(r.drift), y = sy(r.success_rate);
            ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = col; ctx.lineWidth = 1.9;
            ctx.beginPath(); ctx.arc(x, y, 3.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            if (r.drift > 0) {
              ctx.fillStyle = col; ctx.font = '600 10.5px "Newsreader", Georgia, serif'; ctx.textAlign = 'center';
              ctx.fillText(`${Math.round(r.success_rate * 100)}%`, x, y + dy);
              ctx.textAlign = 'left';
            }
          });
        };
        drawDr(D.exp8_open, COL.cssRed, [4, 3], 14);
        drawDr(D.exp8_blind, COL.cssSlate, [2, 2], 14);
        drawDr(D.exp8_gated, COL.cssGreen, null, -9);
      } else {
        // Project crisp serif elevation tags alongside the 4 levitating glass slabs
        tierMeta.forEach((tm) => {
          const sp = st.project3D(2.75, tm.y, 0);
          if (sp.visible) drawSerifTag(ctx, Math.min(w - 145, sp.x + 28), sp.y, tm.name, tm.css, tm.sub);
        });
      }
    }

    sceneBtns.forEach((b) => b.addEventListener('click', () => {
      activeScene = b.dataset.f5s;
      sceneBtns.forEach((x) => x.classList.toggle('on', x === b));
      if (subEl) {
        subEl.innerHTML = activeScene === 'tabletop'
          ? 'Under unknown +0.07 lateral drift, the right arm cancels bias in free space and raises an emerald contact-frozen shield during grasp at 0 extra VLM tokens.'
          : '<strong>The 2027 4-Tier Stack</strong> — Cobalt plans cascade down from episodic memory to force executors while amber physical residuals rise back up.';
      }
    }));

    requestAnimationFrame(loop);
  }

  // =========================================================================
  // CHROME, FOOTNOTES & APPENDIX TABLES
  // =========================================================================
  function initEditorialChrome(D) {
    const bar = document.getElementById('scroll-progress');
    const navLinks = [...document.querySelectorAll('.top-nav a[href^="#"]')];
    const anchors = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = pct.toFixed(2) + '%';
      const y = window.scrollY + 180;
      let activeId = '';
      for (const s of anchors) if (s.offsetTop <= y) activeId = s.id;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Footnotes
    const notesMap = new Map();
    document.querySelectorAll('aside.fnote[data-n]').forEach((a) => notesMap.set(a.dataset.n, a.innerHTML));
    let activePop = null;
    const closePop = () => { if (activePop) { activePop.remove(); activePop = null; } };

    document.querySelectorAll('sup.fn').forEach((sup) => {
      const nums = sup.textContent.trim().split(',').map((s) => s.trim());
      sup.setAttribute('tabindex', '0');
      const open = () => {
        closePop();
        const html = nums.map((n) => notesMap.get(n) ? `<div><b>[${n}]</b> ${notesMap.get(n)}</div>` : '').join('<hr style="border:0;border-top:1px solid #EFECE6;margin:6px 0;">');
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

    // Hydrate Appendix Tables
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
    initEditorialChrome(D);
    initFilmHero();
    initFilmAnytime(D);
    initFilmCoverage(D);
    initFilmManifold(D);
    initFilmForce(D);
    initFilmLoop(D);
  });
})();
