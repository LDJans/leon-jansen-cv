// Renders CV content and the interactive map
(function () {
  const $ = (id) => document.getElementById(id);

  const initials = (name) =>
    name.replace(/GmbH|AG/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  // Logo: company favicon (via Google favicon service) with initials fallback
  // Optional `local` path takes precedence over the favicon service
  const logoSrc = (domain, local, sz = 128) =>
    local || (domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=${sz}` : null);

  function logo(name, domain, color, size = "lg", local, label) {
    const fallback = `<span class="logo-fallback" style="background:${color || "#334"}">${label || initials(name)}</span>`;
    const src = logoSrc(domain, local);
    if (!src) return `<div class="logo logo-${size}">${fallback}</div>`;
    return `<div class="logo logo-${size}">
      <img src="${src}" alt="${name} logo" loading="lazy"
        onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'logo-fallback',style:'background:${color || "#334"}',textContent:'${initials(name)}'}))" />
    </div>`;
  }

  // Contact + stats
  const c = CV.contact;
  $("contact").innerHTML = `
    <span>📍 ${c.city}</span>
    <a href="tel:${c.phone.replace(/\s/g, "")}">☎ ${c.phone}</a>
    <a href="mailto:${c.email}">✉ ${c.email}</a>`;
  $("stats").innerHTML = CV.stats
    .map((s) => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`)
    .join("");

  // Experience timeline (expandable)
  $("experience-list").innerHTML = CV.experience
    .map(
      (e, i) => `
      <article class="card exp ${i === 0 ? "open" : ""}" style="--accent:${e.color}">
        <button class="exp-head" aria-expanded="${i === 0}">
          ${logo(e.company, e.domain, e.color, "lg", e.logo)}
          <div class="exp-title">
            <h3>${e.company}</h3>
            <p class="role">${e.role} · <em>${e.unit}</em></p>
            <div class="tags">${e.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          </div>
          <div class="exp-meta">
            <span class="period">${e.period}</span>
            <span class="loc">${e.location}</span>
            <span class="chev">▾</span>
          </div>
        </button>
        <ul class="exp-body">${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  document.querySelectorAll(".exp-head").forEach((btn) =>
    btn.addEventListener("click", () => {
      const card = btn.parentElement;
      card.classList.toggle("open");
      btn.setAttribute("aria-expanded", card.classList.contains("open"));
    })
  );

  // Education
  $("education-list").innerHTML = CV.education
    .map(
      (e) => `
      <article class="card edu" style="--accent:${e.color}">
        ${logo(e.school, e.domain, e.color, "md", e.logo, e.initials)}
        <div>
          <h3>${e.school}</h3>
          <p class="role">${e.degree}</p>
          <p class="muted">${e.period} · ${e.location}</p>
          <span class="gpa">GPA ${e.gpa}</span>
        </div>
      </article>`
    )
    .join("");

  // Skills
  $("skills-list").innerHTML = CV.skills
    .map((s) => {
      const body = s.levels
        ? s.items
            .map(
              (it, i) => `<div class="lang"><span>${it}</span><div class="bar"><div style="width:${s.levels[i]}%"></div></div></div>`
            )
            .join("")
        : `<div class="chips">${s.items.map((it) => `<span>${it}</span>`).join("")}</div>`;
      return `<article class="card"><h3>${s.title}</h3>${body}</article>`;
    })
    .join("");

  // Commitment
  $("commitment-list").innerHTML = CV.commitment
    .map(
      (m) => `
      <article class="card edu">
        ${logo(m.title, m.domain, "#111", "md", m.logo)}
        <div>
          <h3>${m.title}</h3>
          <p class="muted">${m.period}</p>
          <p>${m.text}</p>
        </div>
      </article>`
    )
    .join("");

  $("year").textContent = new Date().getFullYear();

  // ---------- Interactive map ----------
  const TYPES = {
    work: { label: "Work", color: "#E4002B" },
    education: { label: "Education", color: "#1F6FEB" },
    commitment: { label: "Commitment", color: "#2DA44E" },
  };

  if (typeof L === "undefined") {
    $("leaflet-map").innerHTML = '<p class="muted" style="padding:1rem">Map could not be loaded (no internet connection?).</p>';
    return;
  }

  const map = L.map("leaflet-map", { scrollWheelZoom: false });
  // Default: OpenStreetMap standard tiles (no API key needed).
  // Optional override via config.js: window.MAP_CONFIG = { tileUrl, attribution }
  const cfg = window.MAP_CONFIG || {};
  L.tileLayer(cfg.tileUrl || "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: cfg.attribution || '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const layers = {};
  const markers = [];
  Object.keys(TYPES).forEach((t) => (layers[t] = L.layerGroup().addTo(map)));

  CV.locations.forEach((loc, idx) => {
    const t = TYPES[loc.type];
    const icon = L.divIcon({
      className: "",
      html: `<div class="pin" style="--c:${t.color}"></div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
    const src = logoSrc(loc.domain, loc.logo, 64);
    const img = src ? `<img src="${src}" alt="" />` : "";
    const m = L.marker([loc.lat, loc.lng], { icon }).bindPopup(
      `<div class="popup">${img}<div><strong>${loc.name}</strong><br/>${loc.city}<br/><small>${loc.period} · ${t.label}</small></div></div>`
    );
    m.addTo(layers[loc.type]);
    markers.push({ m, loc, idx });
  });

  const fitAll = () => {
    const visible = markers.filter(({ loc }) => map.hasLayer(layers[loc.type])).map(({ m }) => m.getLatLng());
    if (visible.length) map.fitBounds(L.latLngBounds(visible), { padding: [40, 40], maxZoom: 10 });
  };
  fitAll();

  // Filters
  $("map-filters").innerHTML =
    Object.entries(TYPES)
      .map(
        ([k, t]) =>
          `<label class="filter" style="--c:${t.color}"><input type="checkbox" data-type="${k}" checked /> <span class="dot"></span>${t.label}</label>`
      )
      .join("") + `<button class="btn" id="fit-btn">Show all</button>`;

  document.querySelectorAll("#map-filters input").forEach((cb) =>
    cb.addEventListener("change", () => {
      const layer = layers[cb.dataset.type];
      cb.checked ? map.addLayer(layer) : map.removeLayer(layer);
      renderList();
      fitAll();
    })
  );
  $("fit-btn").addEventListener("click", fitAll);

  // Side list
  function renderList() {
    $("map-list").innerHTML = markers
      .filter(({ loc }) => map.hasLayer(layers[loc.type]))
      .map(
        ({ loc, idx }) =>
          `<button class="map-item" data-idx="${idx}" style="--c:${TYPES[loc.type].color}">
            <span class="dot"></span><span><strong>${loc.city}</strong><br/><small>${loc.name}</small></span>
          </button>`
      )
      .join("");
    document.querySelectorAll(".map-item").forEach((b) =>
      b.addEventListener("click", () => {
        const { m } = markers.find((x) => x.idx === +b.dataset.idx);
        map.flyTo(m.getLatLng(), 12, { duration: 0.8 });
        setTimeout(() => m.openPopup(), 850);
      })
    );
  }
  renderList();
})();
