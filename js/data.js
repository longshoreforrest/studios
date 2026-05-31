/*
 * Longshore Studios — sivuston tietomalli (rakenne).
 *
 * Tämä tiedosto sisältää sivun RAKENTEEN: pelien id:t, linkit, värit, tilan
 * jne. Kaikki ihmisluettava TEKSTI (iskulauseet, kuvaukset, tagit, studio- ja
 * kehittäjätekstit) on käännöstiedostossa js/i18n.js kolmella kielellä.
 * Sivu (index.html + js/main.js) renderöityy tämän + valitun kielen pohjalta.
 *
 * Data on tarkoituksella tavallista JS:ää (ei JSON + fetch), jotta sivun voi
 * avata suoraan tiedostosta (file://) ilman palvelinta.
 *
 * Kentät pelille:
 *   id        – yksilöivä avain (kebab-case). Sama avain i18n.js:n games-osiossa.
 *   title     – näyttönimi (sama kaikilla kielillä, erisnimi)
 *   emoji     – maskotti/ikoni-emoji (fallback-kansikuva)
 *   stage     – julkaisuvaihe: "ga" | "beta" | "alpha" | "secret"
 *               (hauska luokittelu; teksti i18n.js:n stages-osiossa)
 *   tech      – käytetty teknologia (kieliriippumaton, näytetään kortissa)
 *   accent    – kansikuvan gradientin värit [from, to]
 *   cover     – polku oikeaan kansikuvaan, tai null (=generoidaan emojista)
 *   featured  – nostetaanko etusivun "Nostot"-osioon
 *   public    – julkaistaanko tämä peli julkiseen repoon (PUBLISH.md)
 *   links     – { windows, android, ios } – latauskohde per alusta (PC/Android/
 *               iPhone). Paikallinen tiedostopolku (esim. "downloads/x.zip")
 *               → ladataan SUORAAN (download-attribuutti). http(s)-URL →
 *               avataan uuteen välilehteen (esim. kauppalinkki).
 *               null = "Tulossa" (alusta näkyy valinnassa harmaana).
 *   versions  – vapaaehtoinen lista aiemmista versioista
 *
 * Tekstit (tagline, description, tags) tulevat i18n.js:stä avaimella id.
 */

const STUDIO = {
  name: "Longshore Studios",
  email: "longshoreforrest@gmail.com",
};

const DEVELOPER = {
  handle: "Hacker_Lisko",
  age: 11,
  emoji: "🦎",
  links: {
    // Täytä todelliset profiilit kun ne ovat olemassa.
    github: null,
    youtube: null,
    itch: null,
  },
};

const GAMES = [
  {
    id: "lisko-racing",
    title: "Lisko Racing",
    emoji: "🦎",
    stage: "ga",
    tech: "HTML5 Canvas · Capacitor · Firebase",
    accent: ["#22c55e", "#0ea5e9"],
    cover: "assets/covers/lisko-racing.jpg",
    featured: true,
    public: true,
    links: {
      windows: "downloads/lisko-racing.zip",
      android: "downloads/builds/lisko-racing/android/lisko-racing.apk", // oikea APK (debug-build)
      ios: "downloads/lisko-racing.zip",
    },
    versions: ["Lisko Racing v1 (selain)", "Lisko Racing v2 (mobiili)"],
  },
  {
    id: "kalastus",
    title: "Kalastus",
    emoji: "🎣",
    stage: "alpha",
    tech: "HTML5 Canvas · Web Audio · Firebase",
    accent: ["#0ea5e9", "#14b8a6"],
    cover: "assets/covers/kalastus.jpg",
    featured: false,
    public: true,
    links: { windows: "downloads/kalastus.zip", android: "downloads/kalastus.zip", ios: "downloads/kalastus.zip" },
  },
  {
    id: "bettercraft",
    title: "FutureCraft",
    emoji: "⛏️",
    stage: "wip",
    tech: "Three.js · Electron · Firebase",
    accent: ["#65a30d", "#155e75"],
    cover: null,
    featured: true,
    public: true,
    links: { windows: "downloads/bettercraft.zip", android: null, ios: null },
  },
];

/*
 * Teemat. Jokaisella on avain joka vastaa CSS:n [data-theme="..."] sääntöä
 * (css/themes.css). label + emoji näytetään teemavalitsimessa.
 */
const THEMES = [
  { key: "midnight", label: "Midnight", emoji: "🌌" },
  { key: "daylight", label: "Daylight", emoji: "☀️" },
  { key: "synthwave", label: "Synthwave", emoji: "🌆" },
  { key: "forest", label: "Forest", emoji: "🌲" },
  { key: "arcade", label: "Arcade", emoji: "🕹️" },
  { key: "hacker", label: "Hacker", emoji: "💻" },
];

/* Julkaisuvaiheen CSS-luokka (teksti tulee i18n.js:stä, ks. stages).
   ga = kaikille auki, beta = avoin testi, alpha = aikainen testi,
   secret = sisäpiirin koekäyttö. */
const STAGE_CLASS = {
  ga: "stage--ga",
  beta: "stage--beta",
  wip: "stage--wip",
  alpha: "stage--alpha",
  secret: "stage--secret",
};

/* Alustan ikoni (teksti tulee i18n.js:stä, ks. platforms).
   "Lataa appi" -valinnassa näytetään alustat tässä järjestyksessä. */
const PLATFORM_ICON = {
  windows: "💻",
  android: "🤖",
  ios: "🍎",
};
const PICKER_PLATFORMS = ["windows", "android", "ios"]; // PC, Android, iPhone
