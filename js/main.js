/* Longshore Studios — sivun logiikka.
   Renderöi pelit, kehittäjäprofiilin ja tekstit valitulla kielellä
   (js/i18n.js) ja rakenteella (js/data.js). Hoitaa teeman- ja kielenvaihdon
   (talletus localStorageen), suodattimet ja reveal-animaatiot.
   Ei riippuvuuksia, toimii myös file://-tilassa. */

(function () {
  "use strict";

  // Julkaisussa (LS_PUBLIC_BUILD) näytetään vain julkiset pelit.
  const VISIBLE_GAMES = window.LS_PUBLIC_BUILD ? GAMES.filter((g) => g.public) : GAMES;

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* file:// voi estää */ } },
  };

  // MyPublicAnalytics-tapahtuma (no-op jos beacon ei ole aktiivinen).
  const track = (event, extra) => {
    if (window.mypa && typeof window.mypa.send === "function") window.mypa.send(event, extra);
  };

  // Tunnista käyttäjän laite -> alusta-avain (PICKER_PLATFORMS:n mukaisesti).
  // android | ios | windows(=PC/työpöytä, oletus).
  function detectDevice() {
    const nav = window.navigator || {};
    const ua = (nav.userAgent || "") + " " + (nav.platform || "");
    const uaDataPlat = (nav.userAgentData && nav.userAgentData.platform) || "";
    const s = (ua + " " + uaDataPlat).toLowerCase();
    if (/android/.test(s)) return "android";
    // iPhone/iPod/iPad — myös iPadOS joka esiintyy "MacIntel" + kosketus.
    if (/iphone|ipad|ipod/.test(s)) return "ios";
    if (/mac/.test(s) && (nav.maxTouchPoints || 0) > 1) return "ios";
    return "windows"; // PC / työpöytä (Windows, Mac, Linux)
  }
  const USER_DEVICE = detectDevice();

  // Tarkempi käyttöjärjestelmä analytiikkaa varten (erottaa Windows vs Mac).
  function detectOS() {
    const nav = window.navigator || {};
    const ua = (nav.userAgent || "").toLowerCase();
    const p = (nav.platform || "").toLowerCase();
    const s = ua + " " + p;
    if (/android/.test(s)) return "Android";
    if (/iphone|ipod/.test(s)) return "iOS";
    if (/ipad/.test(s) || (/mac/.test(p) && (nav.maxTouchPoints || 0) > 1)) return "iPadOS";
    if (/win/.test(s)) return "Windows";
    if (/mac/.test(s)) return "macOS";
    if (/linux/.test(s)) return "Linux";
    return "Unknown";
  }
  const USER_OS = detectOS();

  /* ---------- Kieli ---------- */
  const LANG_KEY = "ls-lang";
  let currentLang = (() => {
    const saved = store.get(LANG_KEY);
    return LANGUAGES.some((l) => l.code === saved) ? saved : LANGUAGES[0].code;
  })();
  const L = () => I18N[currentLang];

  function buildLangSwitch() {
    const host = $("#langSwitch");
    if (!host) return;
    host.setAttribute("aria-label", L().ui.langLabel);
    LANGUAGES.forEach((lang) => {
      const b = el("button", "lang-btn", FLAGS[lang.code] + `<span>${lang.short}</span>`);
      b.type = "button";
      b.dataset.lang = lang.code;
      b.title = lang.label;
      b.setAttribute("aria-label", lang.label);
      b.addEventListener("click", () => setLang(lang.code));
      host.appendChild(b);
    });
  }

  function setLang(code) {
    if (!I18N[code]) return;
    currentLang = code;
    store.set(LANG_KEY, code);
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.lang === code)
    );
    track("language_change", { lang: code });
    renderAll();
  }

  /* ---------- Teemat ---------- */
  const THEME_KEY = "ls-theme";
  const root = document.documentElement;

  function applyTheme(key) {
    root.setAttribute("data-theme", key);
    store.set(THEME_KEY, key);
    document.querySelectorAll(".theme-btn").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.theme === key)
    );
    updateThemeCycle(key);
  }

  // Mobiilin kierto-napin sisältö = nykyinen teema + kierto-nuoli.
  function updateThemeCycle(key) {
    const btn = $("#themeCycle");
    if (!btn) return;
    const t = THEMES.find((x) => x.key === key) || THEMES[0];
    btn.innerHTML =
      `<span class="tc-emoji">${t.emoji}</span><span class="tc-label">${esc(t.label)}</span><span class="tc-arrow">↻</span>`;
    btn.title = t.label;
  }

  function buildThemeSwitch() {
    const host = $("#themeSwitch");
    if (!host) return;
    const saved = store.get(THEME_KEY);
    const active = THEMES.some((t) => t.key === saved) ? saved : THEMES[0].key;
    THEMES.forEach((t) => {
      const b = el("button", "theme-btn", t.emoji);
      b.dataset.theme = t.key;
      b.type = "button";
      b.title = t.label;
      b.setAttribute("aria-label", t.label);
      b.addEventListener("click", () => { applyTheme(t.key); track("theme_change", { theme: t.key }); });
      host.appendChild(b);
    });

    // Mobiilin kierto-nappi: klikkaus siirtyy seuraavaan teemaan (kiertää).
    const cycleBtn = $("#themeCycle");
    if (cycleBtn) {
      cycleBtn.addEventListener("click", () => {
        const cur = root.getAttribute("data-theme");
        const idx = THEMES.findIndex((t) => t.key === cur);
        const next = THEMES[(idx + 1) % THEMES.length];
        applyTheme(next.key);
        track("theme_change", { theme: next.key });
      });
    }

    applyTheme(active);
  }

  /* ---------- Staattiset tekstit ([data-i18n]) ---------- */
  function applyStaticTranslations() {
    const ui = L().ui;
    document.querySelectorAll("[data-i18n]").forEach((n) => {
      const key = n.getAttribute("data-i18n");
      if (ui[key] != null) n.textContent = ui[key];
    });
    root.setAttribute("lang", currentLang);
  }

  /* ---------- Hero / studio-tekstit ---------- */
  function fillStudio() {
    const tagEl = $("#studioTagline");
    tagEl.textContent = L().studio.tagline || "";
    tagEl.style.display = L().studio.tagline ? "" : "none";
    $("#studioBlurb").textContent = L().studio.blurb;
    $("#aboutText").textContent = L().studio.blurb;
    const contact = $("#contactLink");
    contact.href = "mailto:" + STUDIO.email;
    $("#year").textContent = "2026";

    const released = VISIBLE_GAMES.filter((g) => g.stage === "ga").length;
    const stats = [
      { n: VISIBLE_GAMES.length, label: L().ui.statGames },
      { n: released, label: L().ui.statReleased },
      { n: DEVELOPER.age, label: L().ui.statDevAge },
    ];
    const host = $("#heroStats");
    host.innerHTML = "";
    stats.forEach((s) => {
      host.appendChild(el("div", "stat", `<b>${s.n}</b><span>${esc(s.label)}</span>`));
    });
  }

  /* ---------- Pelikortit ---------- */
  function stageBadge(g) {
    const cls = STAGE_CLASS[g.stage] || "stage--beta";
    const label = (L().stages && L().stages[g.stage]) || g.stage;
    const hint = (L().stageHints && L().stageHints[g.stage]) || "";
    return `<span class="card__status ${cls}" title="${esc(hint)}">${esc(label)}</span>`;
  }

  function coverHTML(g) {
    const grad = `background:linear-gradient(135deg, ${g.accent[0]}, ${g.accent[1]})`;
    const inner = g.cover
      ? `<img src="${esc(g.cover)}" alt="${esc(g.title)}" loading="lazy" />`
      : `<span class="card__cover-emoji">${g.emoji}</span>`;
    return `<div class="card__cover" style="${grad}">${inner}${stageBadge(g)}</div>`;
  }

  function downloadBtnHTML(g) {
    const hasDownload = PICKER_PLATFORMS.some((k) => g.links[k]);
    if (!hasDownload) {
      // Ei vielä ladattavissa → "Tulossa" -nappi (ei avaa modaalia).
      return `<button class="btn btn--ghost btn--soon" type="button" disabled>
                <span>⏳</span> ${esc(L().ui.comingSoon)}
              </button>`;
    }
    return `<button class="btn btn--primary btn--download" type="button" data-game="${esc(g.id)}">
              <span>⬇️</span> ${esc(L().ui.downloadApp)}
            </button>`;
  }

  /* ---------- "Lataa appi" -modaali: alustavalinta ---------- */
  let lastFocus = null;

  function openDownloadModal(gameId) {
    const g = VISIBLE_GAMES.find((x) => x.id === gameId);
    if (!g) return;
    const modal = $("#downloadModal");
    $("#modalTitle").textContent = `${L().ui.downloadApp} · ${g.title}`;
    // Suosittele käyttäjän laitteen alustaa (vain jos sille on oikea lataus).
    const recommended = g.links[USER_DEVICE] ? USER_DEVICE : null;
    const order = recommended
      ? [recommended, ...PICKER_PLATFORMS.filter((k) => k !== recommended)]
      : PICKER_PLATFORMS.slice();

    $("#modalSub").textContent = recommended
      ? `${L().ui.deviceHint} ${L().platforms[recommended]}`
      : L().ui.choosePlatform;

    const opts = $("#modalOptions");
    opts.innerHTML = "";
    order.forEach((key) => {
      const url = g.links[key];
      const label = L().platforms[key];
      const icon = PLATFORM_ICON[key];
      const isRec = key === recommended;
      const recBadge = isRec
        ? `<span class="modal__opt-badge">★ ${esc(L().ui.recommended)}</span>` : "";
      if (url) {
        // "web" = pelaa selaimessa → avaa peli uuteen välilehteen (ei lataa).
        const isPlay = key === "web";
        const isFile = !isPlay && !/^https?:/i.test(url) && url !== "#";
        const a = el("a", "modal__opt" + (isRec ? " modal__opt--recommended" : ""));
        a.href = url;
        if (isFile) {
          a.setAttribute("download", "");           // lataa suoraan
        } else if (url !== "#") {
          a.target = "_blank"; a.rel = "noopener";   // selainpeli tai ulkoinen kauppalinkki
        }
        const cue = isFile ? "⬇️" : (isPlay ? "▶" : "→");
        a.innerHTML = `<span class="modal__opt-icon">${icon}</span><span class="modal__opt-name">${esc(label)}${recBadge}</span><span class="modal__opt-arrow">${cue}</span>`;
        a.addEventListener("click", () => {
          // game = mikä peli, platform = valittu latausnappi (PC/Android/iPhone),
          // device = käyttäjän OS (Windows/macOS/Android/iOS) → erottaa Win vs Mac.
          track("download_click", {
            game: g.title,
            platform: key,
            device: USER_OS,
            recommended: isRec,
          });
          closeDownloadModal();
        });
        opts.appendChild(a);
      } else {
        const d = el("div", "modal__opt modal__opt--soon");
        d.innerHTML = `<span class="modal__opt-icon">${icon}</span><span class="modal__opt-name">${esc(label)}</span><span class="modal__opt-soon">${esc(L().ui.comingSoon)}</span>`;
        opts.appendChild(d);
      }
    });

    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    track("download_app_open", { game: g.title, device: USER_OS });
    const closeBtn = $(".modal__close", modal);
    if (closeBtn) closeBtn.focus();
  }

  function closeDownloadModal() {
    const modal = $("#downloadModal");
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function cardHTML(g, featured) {
    const t = L().games[g.id] || { tagline: "", description: "", tags: [] };
    const tags = (t.tags || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("");
    return `
      <article class="card reveal ${featured ? "card--featured" : ""}" data-stage="${g.stage}">
        ${coverHTML(g)}
        <div class="card__body">
          <h3 class="card__title">${g.emoji} ${esc(g.title)}</h3>
          <p class="card__tagline">${esc(t.tagline)}</p>
          <p class="card__desc">${esc(t.description)}</p>
          <div class="card__tags">${tags}</div>
          <p class="card__tech">${esc(g.tech)}</p>
          <div class="card__platforms">${downloadBtnHTML(g)}</div>
        </div>
      </article>`;
  }

  let currentFilter = "all";

  function renderGames() {
    const grid = $("#gamesGrid");
    function paint(filter) {
      currentFilter = filter;
      grid.innerHTML = "";
      VISIBLE_GAMES.filter((g) => filter === "all" || g.stage === filter).forEach((g) => {
        grid.insertAdjacentHTML("beforeend", cardHTML(g, false));
      });
      observeReveal();
    }

    // Suodattimet vain niistä vaiheista joita peleillä oikeasti on.
    const STAGE_ORDER = ["ga", "beta", "wip", "alpha", "secret"];
    const present = STAGE_ORDER.filter((s) => VISIBLE_GAMES.some((g) => g.stage === s));
    const filters = ["all", ...present];
    const fhost = $("#filters");
    fhost.innerHTML = "";
    filters.forEach((key) => {
      const active = key === currentFilter;
      const b = el("button", "filter-btn" + (active ? " is-active" : ""), esc(L().filters[key]));
      b.type = "button";
      b.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        paint(key);
      });
      fhost.appendChild(b);
    });

    paint(currentFilter);
  }

  /* ---------- Kehittäjäprofiili ---------- */
  function renderDeveloper() {
    const d = DEVELOPER;
    const tr = L().developer;
    const facts = tr.funFacts.map((f) => `<li>${esc(f)}</li>`).join("");
    const role = tr.role.replace("{age}", d.age);
    const card = $("#devCard");
    card.innerHTML = `
      <div class="dev-card__avatar">${d.avatar ? `<img src="${esc(d.avatar)}" alt="${esc(d.handle)}" />` : d.emoji}</div>
      <div>
        <h3 class="dev-card__handle">${esc(d.handle)}</h3>
        ${d.realName ? `<p class="dev-card__realname">${esc(d.realName)}</p>` : ""}
        <p class="dev-card__role">${esc(role)}</p>
        <p class="dev-card__bio">${esc(tr.bio)}</p>
        <ul class="dev-card__facts">${facts}</ul>
      </div>`;
    card.classList.add("reveal");

    const adv = $("#advisorCard");
    if (adv) {
      adv.innerHTML = `
        <div class="advisor-card reveal">
          <span class="advisor-card__icon">${ADVISOR.image ? `<img src="${esc(ADVISOR.image)}" alt="${esc(ADVISOR.name)}" />` : ADVISOR.emoji}</span>
          <div class="advisor-card__body">
            <p class="advisor-card__role">${esc(L().ui.advisor)}</p>
            <h4 class="advisor-card__name">${esc(ADVISOR.name)}</h4>
            <p class="advisor-card__bio">${esc(L().ui.advisorBio)}</p>
            <p class="advisor-card__note">${esc(L().ui.advisorNote)}</p>
            <a class="advisor-card__cv" href="${esc(ADVISOR.cv)}" target="_blank" rel="noopener">${esc(L().ui.viewCv)}</a>
          </div>
        </div>`;
    }
  }

  /* ---------- Reveal-animaatio ---------- */
  let io;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((n) => n.classList.add("is-visible"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((n) => io.observe(n));
  }

  /* ---------- Renderöi koko sisältö (kielenvaihdossa uudelleen) ---------- */
  function renderAll() {
    applyStaticTranslations();
    fillStudio();
    renderGames();
    renderDeveloper();
    observeReveal();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildLangSwitch();
    buildThemeSwitch();
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.lang === currentLang)
    );
    renderAll();

    // "Lataa appi" -napit avaavat alustavalinnan.
    document.addEventListener("click", (e) => {
      const btn = e.target.closest && e.target.closest(".btn--download");
      if (btn) { openDownloadModal(btn.dataset.game); return; }
      const cv = e.target.closest && e.target.closest(".advisor-card__cv");
      if (cv) { track("cv_click", { source: "advisor" }); return; }
      if (e.target.closest && e.target.closest("[data-close]")) closeDownloadModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDownloadModal();
    });
  });
})();
