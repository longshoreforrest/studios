/* Longshore Studios — kielikäännökset (i18n).
 *
 * Kaikki ihmisluettava teksti on tässä kolmella kielellä: suomi (fi),
 * englanti (en) ja ruotsi (sv). data.js sisältää vain rakenteen (id:t,
 * linkit, värit), ja js/main.js poimii tekstit valitun kielen mukaan.
 *
 * Pelikohtaiset tekstit ovat avaimen `games[<pelin id>]` alla, jotta ne
 * pysyvät synkassa data.js:n GAMES-listan kanssa.
 */

/* SVG-liput (inline, jotta toimivat myös offline/file://; Windows ei
   renderöi lippu-emojeja, siksi piirretyt liput). */
const FLAGS = {
  fi:
    '<svg class="flag" viewBox="0 0 18 11" aria-hidden="true">' +
    '<rect width="18" height="11" fill="#fff"/>' +
    '<rect x="4" width="3" height="11" fill="#003580"/>' +
    '<rect y="4" width="18" height="3" fill="#003580"/></svg>',
  sv:
    '<svg class="flag" viewBox="0 0 18 11" aria-hidden="true">' +
    '<rect width="18" height="11" fill="#006aa7"/>' +
    '<rect x="4" width="3" height="11" fill="#fecc00"/>' +
    '<rect y="4" width="18" height="3" fill="#fecc00"/></svg>',
  en:
    '<svg class="flag" viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden="true">' +
    '<rect width="60" height="30" fill="#012169"/>' +
    '<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>' +
    '<path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2.5"/>' +
    '<path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/>' +
    '<path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>',
};

/* Kielivalitsimen järjestys ja nimet. */
const LANGUAGES = [
  { code: "fi", label: "Suomi", short: "FI" },
  { code: "en", label: "English", short: "EN" },
  { code: "sv", label: "Svenska", short: "SV" },
];

const I18N = {
  /* ---------------- SUOMI ---------------- */
  fi: {
    ui: {
      navGames: "Pelit",
      navDeveloper: "Kehittäjä",
      navAbout: "Studio",
      heroEyebrow: "Indie-pelistudio",
      heroCta1: "Selaa pelejä",
      heroCta2: "Tapaa kehittäjä",
      statGames: "peliä",
      statReleased: "julkaistua",
      statDevAge: "v. pääkehittäjä",
      featuredHead: "Nostot",
      featuredSub: "Studion lippulaivat juuri nyt.",
      gamesHead: "Pelit",
      gamesSub: "Kaikki studion pelit — julkaistut, työn alla ja prototyypit.",
      developerHead: "Kehittäjä",
      developerSub: "Studion sydän ja koodaava aivot.",
      aboutHead: "Tietoa studiosta",
      aboutContact: "Yhteydenotot:",
      aboutContactLabel: "sähköposti",
      footerTagline: "Tehty intohimosta peleihin 🦎",
      footerSmall: "Teemoja ja kieltä voi vaihtaa oikeasta yläkulmasta.",
      comingSoon: "Tulossa",
      downloadApp: "Lataa peli",
      choosePlatform: "Millä laitteella pelaat?",
      recommended: "Suositeltu laitteellesi",
      deviceHint: "Tunnistimme laitteeksesi:",
      ageSuffix: "v.",
      langLabel: "Vaihda kieli",
    },
    studio: {
      tagline: "",
      blurb:
        "Riippumaton pelistudio, joka tekee selaimessa pyöriviä pelejä ja " +
        "julkaisee niitä Androidille, iPhonelle ja työpöydälle. Kaikki pelit " +
        "ovat ladattavissa suoraan tältä sivulta.",
    },
    developer: {
      role: "Pääkehittäjä {age}v & perustaja",
      bio:
        "11-vuotias pääkehittäjä ja studion perustaja. Koodaa pelejä " +
        "intohimosta: matelijoista, autoista, lumisodasta ja kaikesta mikä " +
        "on hauskaa. Lisko-maskotti on saanut nimensä hänen lempinimestään.",
      funFacts: [
        "Ensimmäinen julkaistu peli: Lisko Racing 🦎",
        "Lempitekniikka: Three.js ja 3D-grafiikka selaimessa",
        "Tavoite: julkaista oma peli Google Playssa",
      ],
    },
    stages: { ga: "Kaikille auki 🎉", beta: "Beta 🧪", alpha: "Alfa 🔧", secret: "Salainen 🤫" },
    stageHints: {
      ga: "Valmis kaikille — pelaa heti!",
      beta: "Toimii melkein aina. Bugit kuuluvat seikkailuun.",
      alpha: "Tuore ja vähän rikki — vain rohkeille testaajille.",
      secret: "Hyssytään! Sisäpiirin koekäytössä.",
    },
    filters: { all: "Kaikki", ga: "Kaikille auki", beta: "Beta", alpha: "Alfa" },
    platforms: { web: "Pelaa selaimessa", android: "Android", ios: "iPhone", windows: "PC" },
    games: {
      "lisko-racing": {
        tagline: "Studion lippulaiva — loputon matelijajuoksu.",
        description:
          "Värikäs endless runner, jossa söpö lisko väistelee esteitä ja " +
          "kerää kärpäsiä. Vaikeustasot, teemakentät (sademetsä, aavikko, " +
          "arktinen, tulivuori, ranta), pilvitallennus ja tulostaulu. " +
          "v2 tuo natiivin Android-/iOS-version, Google-kirjautumisen ja " +
          "uusia tehosteita sekä pomotaisteluita.",
        tags: ["Endless runner", "Mobiili", "Firebase"],
      },
      bettercraft: {
        tagline: "Louhi, rakenna ja pelaa kavereiden kanssa.",
        description:
          "Minecraft-henkinen 3D-louhinta- ja rakennuspeli, joka pyörii " +
          "selaimessa tai natiivina Windows-sovelluksena. Voxel-maailmat, " +
          "craftaus, kaverit ja pysyvät tallennukset paikallisesti tai pilveen.",
        tags: ["Voxel", "Sandbox", "Moninpeli"],
      },
      kalastus: {
        tagline: "Rentouttava kalastusseikkailu.",
        description:
          "Rauhallinen kalastussimulaatio: useita kalapaikkoja, välineiden " +
          "päivitykset, eriarvoisia kalalajeja, vuorokausirytmi ja mökin " +
          "kunnostus. Mobiilioptimoitu kosketusohjaus ja pilvitallennus.",
        tags: ["Simulaatio", "Rentoutus", "Mobiili"],
      },
    },
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    ui: {
      navGames: "Games",
      navDeveloper: "Developer",
      navAbout: "Studio",
      heroEyebrow: "Indie game studio",
      heroCta1: "Browse games",
      heroCta2: "Meet the developer",
      statGames: "games",
      statReleased: "released",
      statDevAge: "yo lead dev",
      featuredHead: "Highlights",
      featuredSub: "The studio's flagships right now.",
      gamesHead: "Games",
      gamesSub: "All of the studio's games — released, in development and prototypes.",
      developerHead: "Developer",
      developerSub: "The heart and coding brain of the studio.",
      aboutHead: "About the studio",
      aboutContact: "Contact:",
      aboutContactLabel: "email",
      footerTagline: "Made with passion for games 🦎",
      footerSmall: "Switch theme and language from the top right.",
      comingSoon: "Coming soon",
      downloadApp: "Download game",
      choosePlatform: "Which device do you play on?",
      recommended: "Recommended for your device",
      deviceHint: "We detected your device:",
      ageSuffix: "yrs",
      langLabel: "Change language",
    },
    studio: {
      tagline: "",
      blurb:
        "An independent game studio making browser-based games and releasing " +
        "them for Android, iPhone and desktop. Every game is downloadable " +
        "directly from this site.",
    },
    developer: {
      role: "Lead developer ({age} yo) & founder",
      bio:
        "An 11-year-old lead developer and studio founder. Codes games out of " +
        "passion: reptiles, cars, snowball fights and everything fun. The " +
        "Lisko mascot is named after his nickname.",
      funFacts: [
        "First released game: Lisko Racing 🦎",
        "Favorite tech: Three.js and 3D graphics in the browser",
        "Goal: release his own game on Google Play",
      ],
    },
    stages: { ga: "Open to all 🎉", beta: "Beta 🧪", alpha: "Alpha 🔧", secret: "Secret 🤫" },
    stageHints: {
      ga: "Ready for everyone — play now!",
      beta: "Works almost always. Bugs are part of the adventure.",
      alpha: "Fresh and a bit broken — for brave testers only.",
      secret: "Shh! In private insider testing.",
    },
    filters: { all: "All", ga: "Open to all", beta: "Beta", alpha: "Alpha" },
    platforms: { web: "Play in browser", android: "Android", ios: "iPhone", windows: "PC" },
    games: {
      "lisko-racing": {
        tagline: "The studio's flagship — an endless reptile runner.",
        description:
          "A colorful endless runner where a cute lizard dodges obstacles and " +
          "collects flies. Difficulty levels, themed worlds (rainforest, " +
          "desert, arctic, volcano, beach), cloud saves and leaderboards. " +
          "v2 adds a native Android/iOS build, Google sign-in, new power-ups " +
          "and boss battles.",
        tags: ["Endless runner", "Mobile", "Firebase"],
      },
      bettercraft: {
        tagline: "Mine, build and play with friends.",
        description:
          "A Minecraft-style 3D mining and building game that runs in the " +
          "browser or as a native Windows app. Voxel worlds, crafting, " +
          "friends and persistent saves locally or in the cloud.",
        tags: ["Voxel", "Sandbox", "Multiplayer"],
      },
      kalastus: {
        tagline: "A relaxing fishing adventure.",
        description:
          "A calm fishing simulation: multiple fishing spots, gear upgrades, " +
          "fish of varying value, a day/night cycle and a cottage to renovate. " +
          "Mobile-optimized touch controls and cloud saves.",
        tags: ["Simulation", "Relaxing", "Mobile"],
      },
    },
  },

  /* ---------------- SVENSKA ---------------- */
  sv: {
    ui: {
      navGames: "Spel",
      navDeveloper: "Utvecklare",
      navAbout: "Studio",
      heroEyebrow: "Indie-spelstudio",
      heroCta1: "Bläddra bland spel",
      heroCta2: "Möt utvecklaren",
      statGames: "spel",
      statReleased: "släppta",
      statDevAge: "år, huvudutvecklare",
      featuredHead: "Höjdpunkter",
      featuredSub: "Studions flaggskepp just nu.",
      gamesHead: "Spel",
      gamesSub: "Alla studions spel — släppta, under arbete och prototyper.",
      developerHead: "Utvecklare",
      developerSub: "Studions hjärta och kodande hjärna.",
      aboutHead: "Om studion",
      aboutContact: "Kontakt:",
      aboutContactLabel: "e-post",
      footerTagline: "Gjort med passion för spel 🦎",
      footerSmall: "Byt tema och språk uppe till höger.",
      comingSoon: "Kommer snart",
      downloadApp: "Ladda ner spelet",
      choosePlatform: "Vilken enhet spelar du på?",
      recommended: "Rekommenderas för din enhet",
      deviceHint: "Vi kände igen din enhet:",
      ageSuffix: "år",
      langLabel: "Byt språk",
    },
    studio: {
      tagline: "",
      blurb:
        "En oberoende spelstudio som gör webbläsarbaserade spel och släpper " +
        "dem för Android, iPhone och dator. Alla spel kan laddas ner direkt " +
        "från den här sidan.",
    },
    developer: {
      role: "Huvudutvecklare {age} år & grundare",
      bio:
        "En 11-årig huvudutvecklare och studiogrundare. Kodar spel av " +
        "passion: reptiler, bilar, snöbollskrig och allt som är roligt. " +
        "Lisko-maskoten är uppkallad efter hans smeknamn.",
      funFacts: [
        "Första släppta spelet: Lisko Racing 🦎",
        "Favoritteknik: Three.js och 3D-grafik i webbläsaren",
        "Mål: släppa ett eget spel på Google Play",
      ],
    },
    stages: { ga: "Öppet för alla 🎉", beta: "Beta 🧪", alpha: "Alfa 🔧", secret: "Hemlig 🤫" },
    stageHints: {
      ga: "Klart för alla — spela nu!",
      beta: "Funkar nästan jämt. Buggar hör till äventyret.",
      alpha: "Färskt och lite trasigt — bara för modiga testare.",
      secret: "Tyst! I hemligt insider-test.",
    },
    filters: { all: "Alla", ga: "Öppet för alla", beta: "Beta", alpha: "Alfa" },
    platforms: { web: "Spela i webbläsaren", android: "Android", ios: "iPhone", windows: "PC" },
    games: {
      "lisko-racing": {
        tagline: "Studions flaggskepp — en oändlig reptillöpare.",
        description:
          "Ett färgglatt endless runner-spel där en söt ödla väjer för hinder " +
          "och samlar flugor. Svårighetsnivåer, temabanor (regnskog, öken, " +
          "arktis, vulkan, strand), molnsparningar och topplistor. v2 lägger " +
          "till en native Android-/iOS-version, Google-inloggning, nya " +
          "power-ups och bossstrider.",
        tags: ["Endless runner", "Mobil", "Firebase"],
      },
      bettercraft: {
        tagline: "Gräv, bygg och spela med vänner.",
        description:
          "Ett Minecraft-inspirerat 3D-gräv- och byggspel som körs i " +
          "webbläsaren eller som en native Windows-app. Voxelvärldar, " +
          "crafting, vänner och beständiga sparningar lokalt eller i molnet.",
        tags: ["Voxel", "Sandbox", "Flerspelarläge"],
      },
      kalastus: {
        tagline: "Ett avkopplande fiskeäventyr.",
        description:
          "En lugn fiskesimulering: flera fiskeplatser, " +
          "utrustningsuppgraderingar, fiskar av olika värde, dygnsrytm och en " +
          "stuga att renovera. Mobiloptimerade pekkontroller och molnsparningar.",
        tags: ["Simulering", "Avkoppling", "Mobil"],
      },
    },
  },
};
