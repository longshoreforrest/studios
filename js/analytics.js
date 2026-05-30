/*!
 * MyPublicAnalytics beacon — selainpuolen snippet.
 *
 * Lähetys:
 *   - 'pageview' automaattisesti sivun latautuessa
 *   - Custom-eventit: window.mypa.send('section_view', { section: 'experience' })
 *
 * Käyttää navigator.sendBeacon() (eloonjäänti sivu-vaihdoksen yli) ja
 * fetch keepalive:n fallbackia.
 *
 * Self-tagging (oman vierailusi erottelu):
 *   Käy kerran sivulla URL:lla ?_mypa_self=1 → localStorageen tallentuu lippu,
 *   ja kaikki tulevat eventit lähetetään {self:true}. Pois: ?_mypa_self=0.
 */
(function () {
  if (typeof window === "undefined") return;
  if (window.mypa && window.mypa.__initialized) return;

  var SITE = window.__MYPA_SITE__ || "unknown";
  var ENDPOINT = window.__MYPA_ENDPOINT__ || "";
  var AUTO_EVENT = window.__MYPA_AUTO_EVENT__ || "pageview";

  if (!ENDPOINT) return;

  // Self-marker: URL-parametri tai localStorage-lippu.
  var SELF = false;
  try {
    var sp = new URLSearchParams(window.location.search);
    if (sp.get("_mypa_self") === "1") {
      try { localStorage.setItem("mypa_self", "1"); } catch (e) {}
    } else if (sp.get("_mypa_self") === "0") {
      try { localStorage.removeItem("mypa_self"); } catch (e) {}
    }
    try { SELF = localStorage.getItem("mypa_self") === "1"; } catch (e) {}
  } catch (e) {}

  function utm() {
    try {
      var p = new URLSearchParams(window.location.search);
      return {
        source: p.get("utm_source") || null,
        medium: p.get("utm_medium") || null,
        campaign: p.get("utm_campaign") || null,
      };
    } catch (e) {
      return { source: null, medium: null, campaign: null };
    }
  }

  function clientContext() {
    var ctx = {};
    try {
      ctx.screen_w = window.screen && screen.width || null;
      ctx.screen_h = window.screen && screen.height || null;
      ctx.viewport_w = window.innerWidth || null;
      ctx.viewport_h = window.innerHeight || null;
      ctx.dpr = window.devicePixelRatio || null;
      ctx.language = (navigator.language || "").slice(0, 16);
      ctx.languages = Array.isArray(navigator.languages)
        ? navigator.languages.slice(0, 4).join(",")
        : null;
      ctx.color_scheme =
        (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches)
          ? "dark" : "light";
      ctx.tz =
        (Intl && Intl.DateTimeFormat &&
         new Intl.DateTimeFormat().resolvedOptions().timeZone) || null;
      ctx.tz_offset = -new Date().getTimezoneOffset();
      var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (c) {
        ctx.net_type = c.effectiveType || null;
        ctx.net_downlink = c.downlink || null;
        ctx.net_rtt = c.rtt || null;
        ctx.net_save_data = !!c.saveData;
      }
      ctx.touch = ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);
      ctx.hardware_concurrency = navigator.hardwareConcurrency || null;
      ctx.device_memory = navigator.deviceMemory || null;
    } catch (e) {}
    return ctx;
  }

  function send(event, extra) {
    try {
      // Liitä client-konteksti pageview-eventtiin (kerran per session).
      var ev = event || "pageview";
      var enriched = extra ? Object.assign({}, extra) : {};
      if (ev === "pageview" || ev === "login_pageview") {
        Object.assign(enriched, clientContext());
      }
      var body = JSON.stringify({
        site: SITE,
        path: window.location.pathname + window.location.search,
        event: ev,
        referrer: document.referrer || "",
        utm: utm(),
        extra: Object.keys(enriched).length ? enriched : null,
        self: SELF || undefined,
      });
      if (
        navigator.sendBeacon &&
        navigator.sendBeacon(
          ENDPOINT,
          new Blob([body], { type: "text/plain;charset=UTF-8" }),
        )
      ) {
        return;
      }
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "text/plain;charset=UTF-8" },
        body: body,
        keepalive: true,
        mode: "cors",
        credentials: "omit",
      }).catch(function () {});
    } catch (e) {}
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    send(AUTO_EVENT);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      send(AUTO_EVENT);
    });
  }

  window.mypa = { send: send, __initialized: true, __self: SELF };
})();
