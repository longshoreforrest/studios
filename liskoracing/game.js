// Lisko Racing Game 🦎
// A 3D endless runner starring a cute lizard!

// ============ LANGUAGE / TRANSLATIONS ============
const LANG_KEY = 'lisko_racing_language';
let currentLanguage = localStorage.getItem(LANG_KEY) || 'fi';

const TRANSLATIONS = {
    fi: {
        title: '🦎 LISKO RACING',
        subtitle: 'Väistele esteitä ja kerää kärpäsiä!',
        controls: 'Ohjaus: ← → tai A D',
        mobileHint: '📱 Pyyhkäise tai käytä nappeja',
        // Auth
        authTitle: 'Kirjaudu sisään',
        login: 'Kirjaudu',
        register: 'Luo tili',
        username: 'Käyttäjätunnus',
        password: 'Salasana',
        logout: 'Kirjaudu ulos',
        loggedInAs: 'Kirjautuneena:',
        loginError: 'Väärä käyttäjätunnus tai salasana!',
        registerError: 'Käyttäjätunnus on jo varattu!',
        registerSuccess: 'Tili luotu! Kirjaudu sisään.',
        authRequired: 'Kirjaudu sisään pelataksesi!',
        processing: 'Käsitellään...',
        guest: 'Vieras',
        playerNamePlaceholder: 'Nimesi',
        orText: 'tai',
        signInWithGoogle: 'Kirjaudu Googlella',
        chooseNickname: 'Valitse pelaajanimi (3-15 merkkiä):',
        nicknameLength: 'Nimen pituus 3-15 merkkiä!',
        changeName: '📝 Vaihda nimimerkki',
        nameChanged: 'Nimimerkki vaihdettu:',
        nameUnchanged: 'Nimi on jo sama!',
        difficultyTitle: 'Valitse vaikeustaso:',
        easy: 'Helppo 🟢',
        normal: 'Normaali 🟡',
        hard: 'Vaikea 🔴',
        super: 'SUPER 🔥',
        startGame: 'ALOITA PELI',
        leaderboardTitle: '🏆 TOP 1000',
        loading: 'Ladataan...',
        noScores: 'Ei tuloksia vielä - pelaa ensimmäisenä!',
        gameOver: '💥 PELI PÄÄTTYI!',
        collected: 'Keräsit',
        flies: 'kärpästä!',
        playAgain: 'PELAA UUDELLEEN',
        top10: '🏆 TOP 10',
        fliesHud: '🪰 Kärpäset:',
        speedHud: '⚡ Nopeus:',
        newRecord: '🎉 UUSI ENNÄTYS! Olet #1!',
        great: '🌟 Loistava! Sijoituksesi:',
        yourRank: 'Sijoituksesi:',
        unknown: 'Tuntematon',
        cheatNoMore: 'Ei enää huijauksia jäljellä! ❌',
        cheatPowerAdded: 'Supervoimia lisätty 10 sek! 🔥',
        cheatLeft: 'jäljellä',
        cheatEnded: 'Supervoimat loppuivat! 💨',
        tongueActivated: 'JÄTTIKIELI AKTIVOITU! 👅',
        tongueFlies: 'kärpästä',
        tongueEnded: 'Jättikieli loppui! 👅',
        // Friend system
        friendsTitle: '👥 KAVERIT',
        addFriend: 'Lisää kaveri',
        friendNamePlaceholder: 'Kaverin nimi',
        sendRequest: 'Lähetä pyyntö',
        pendingRequests: 'Odottavat pyynnöt',
        noFriends: 'Ei kavereita vielä',
        noPending: 'Ei odottavia pyyntöjä',
        accept: 'Hyväksy',
        reject: 'Hylkää',
        friendAdded: 'Kaveripyyntö lähetetty! 📨',
        friendAccepted: 'Kaveri hyväksytty! 🎉',
        friendRejected: 'Pyyntö hylätty',
        alreadyFriends: 'Olette jo kavereita!',
        requestExists: 'Pyyntö on jo lähetetty!',
        playerNotFound: 'Pelaajaa ei löytynyt!',
        enterYourName: 'Syötä ensin oma nimesi!',
        friendsLeaderboard: '👥 Kavereiden tulokset',
        vsYou: 'vs. sinä',
        noFriendScores: 'Kavereilla ei vielä tuloksia',
        // Multiplayer
        challenge: '⚔️ Haasta',
        waitingForOpponent: 'Odotetaan vastustajaa...',
        challengeReceived: '⚔️ Haaste!',
        acceptChallenge: 'Hyväksy',
        declineChallenge: 'Hylkää',
        opponentScore: 'Vastustaja:',
        youWin: '🏆 VOITIT!',
        youLose: '😢 HÄVISIT!',
        tie: '🤝 TASAPELI!',
        opponentLeft: 'Vastustaja poistui',
        getReady: 'Valmistaudu...',
        go: 'NYT!',
        // Shop
        shopTitle: '🛒 KAUPPA',
        yourCoins: 'Kärpäsesi:',
        buy: 'Osta',
        owned: 'Omistettu',
        equipped: 'Käytössä',
        equip: 'Valitse',
        notEnough: 'Ei tarpeeksi kärpäsiä!',
        purchased: 'Ostettu!',
        // Skin names
        skinDefault: 'Vihreä Lisko',
        skinGold: 'Kultainen Lisko',
        skinPurple: 'Violetti Lisko',
        skinFire: 'Tulilisko',
        skinOcean: 'Merilisko',
        skinIce: 'Jäälisko',
        skinSunset: 'Auringonlasku',
        skinToxic: 'Myrkylisko',
        skinNeon: 'Neonlisko',
        skinMidnight: 'Yölisko',
        skinCandy: 'Karamellikko',
        skinStealth: 'Varjolisko',
        skinRainbow: 'Sateenkaarilisko',
        skinDiamond: 'Timanttilisko',
        skinClassic: 'Klassikko Lisko',
        skinMonkey: 'Apina',
        skinFish: 'Kala',
        // Rarity names
        rarityCommon: 'Yleinen',
        rarityRare: 'Harvinainen',
        rarityMythic: 'Myyttinen'
    },
    sv: {
        title: '🦎 ÖDLA RACING',
        subtitle: 'Undvik hinder och samla flugor!',
        controls: 'Styrning: ← → eller A D',
        mobileHint: '📱 Svep eller använd knapparna',
        // Auth
        authTitle: 'Logga in',
        login: 'Logga in',
        register: 'Skapa konto',
        username: 'Användarnamn',
        password: 'Lösenord',
        logout: 'Logga ut',
        loggedInAs: 'Inloggad som:',
        loginError: 'Fel användarnamn eller lösenord!',
        registerError: 'Användarnamnet är redan upptaget!',
        registerSuccess: 'Konto skapat! Logga in.',
        authRequired: 'Logga in för att spela!',
        processing: 'Bearbetar...',
        guest: 'Gäst',
        playerNamePlaceholder: 'Ditt namn',
        orText: 'eller',
        signInWithGoogle: 'Logga in med Google',
        chooseNickname: 'Välj ett spelarnamn (3-15 tecken):',
        nicknameLength: 'Namnet måste vara 3-15 tecken!',
        changeName: '📝 Byt smeknamn',
        nameChanged: 'Smeknamn ändrat:',
        nameUnchanged: 'Samma namn redan!',
        difficultyTitle: 'Välj svårighetsgrad:',
        easy: 'Lätt 🟢',
        normal: 'Normal 🟡',
        hard: 'Svår 🔴',
        super: 'SUPER 🔥',
        startGame: 'STARTA SPEL',
        leaderboardTitle: '🏆 TOP 1000',
        loading: 'Laddar...',
        noScores: 'Inga resultat ännu - spela först!',
        gameOver: '💥 SPELET SLUT!',
        collected: 'Du samlade',
        flies: 'flugor!',
        playAgain: 'SPELA IGEN',
        top10: '🏆 TOP 10',
        fliesHud: '🪰 Flugor:',
        speedHud: '⚡ Hastighet:',
        newRecord: '🎉 NYTT REKORD! Du är #1!',
        great: '🌟 Utmärkt! Din placering:',
        yourRank: 'Din placering:',
        unknown: 'Okänd',
        cheatNoMore: 'Inga fler fusk kvar! ❌',
        cheatPowerAdded: 'Superkrafter tillagda 10 sek! 🔥',
        cheatLeft: 'kvar',
        cheatEnded: 'Superkrafter slut! 💨',
        tongueActivated: 'JÄTTETUNGA AKTIVERAD! 👅',
        tongueFlies: 'flugor',
        tongueEnded: 'Jättetungan slut! 👅',
        // Friend system
        friendsTitle: '👥 VÄNNER',
        addFriend: 'Lägg till vän',
        friendNamePlaceholder: 'Vännens namn',
        sendRequest: 'Skicka förfrågan',
        pendingRequests: 'Väntande förfrågningar',
        noFriends: 'Inga vänner ännu',
        noPending: 'Inga väntande förfrågningar',
        accept: 'Acceptera',
        reject: 'Avvisa',
        friendAdded: 'Vänförfrågan skickad! 📨',
        friendAccepted: 'Vän accepterad! 🎉',
        friendRejected: 'Förfrågan avvisad',
        alreadyFriends: 'Ni är redan vänner!',
        requestExists: 'Förfrågan har redan skickats!',
        playerNotFound: 'Spelaren hittades inte!',
        enterYourName: 'Ange först ditt eget namn!',
        friendsLeaderboard: '👥 Vänners resultat',
        vsYou: 'vs. du',
        noFriendScores: 'Vänner har inga resultat ännu',
        // Skin names
        skinDefault: 'Grön Ödla',
        skinGold: 'Guld Ödla',
        skinPurple: 'Lila Ödla',
        skinFire: 'Eldödla',
        skinOcean: 'Havsödla',
        skinIce: 'Isödla',
        skinSunset: 'Solnedgång',
        skinToxic: 'Giftödla',
        skinNeon: 'Neonödla',
        skinMidnight: 'Nattödla',
        skinCandy: 'Godisödla',
        skinStealth: 'Skuggödla',
        skinRainbow: 'Regnbågsödla',
        skinDiamond: 'Diamantödla',
        skinClassic: 'Klassisk Ödla',
        skinMonkey: 'Apa',
        skinFish: 'Fisk',
        // Rarity names
        rarityCommon: 'Vanlig',
        rarityRare: 'Sällsynt',
        rarityMythic: 'Mytisk'
    },
    en: {
        title: '🦎 LIZARD RACING',
        subtitle: 'Dodge obstacles and collect flies!',
        controls: 'Controls: ← → or A D',
        mobileHint: '📱 Swipe or use buttons',
        // Auth
        authTitle: 'Sign In',
        login: 'Login',
        register: 'Register',
        username: 'Username',
        password: 'Password',
        logout: 'Logout',
        loggedInAs: 'Logged in as:',
        loginError: 'Invalid username or password!',
        registerError: 'Username already taken!',
        registerSuccess: 'Account created! Please login.',
        authRequired: 'Please login to play!',
        processing: 'Processing...',
        guest: 'Guest',
        playerNamePlaceholder: 'Your name',
        orText: 'or',
        signInWithGoogle: 'Sign in with Google',
        chooseNickname: 'Choose a player name (3-15 characters):',
        nicknameLength: 'Name must be 3-15 characters!',
        changeName: '📝 Change name',
        nameChanged: 'Name changed:',
        nameUnchanged: 'Same name already!',
        difficultyTitle: 'Select difficulty:',
        easy: 'Easy 🟢',
        normal: 'Normal 🟡',
        hard: 'Hard 🔴',
        super: 'SUPER 🔥',
        startGame: 'START GAME',
        leaderboardTitle: '🏆 TOP 1000',
        loading: 'Loading...',
        noScores: 'No scores yet - be the first to play!',
        gameOver: '💥 GAME OVER!',
        collected: 'You collected',
        flies: 'flies!',
        playAgain: 'PLAY AGAIN',
        top10: '🏆 TOP 10',
        fliesHud: '🪰 Flies:',
        speedHud: '⚡ Speed:',
        newRecord: '🎉 NEW RECORD! You are #1!',
        great: '🌟 Great! Your rank:',
        yourRank: 'Your rank:',
        unknown: 'Unknown',
        cheatNoMore: 'No more cheats left! ❌',
        cheatPowerAdded: 'Superpowers added 10 sec! 🔥',
        cheatLeft: 'left',
        cheatEnded: 'Superpowers ended! 💨',
        tongueActivated: 'GIANT TONGUE ACTIVATED! 👅',
        tongueFlies: 'flies',
        tongueEnded: 'Giant tongue ended! 👅',
        // Friend system
        friendsTitle: '👥 FRIENDS',
        addFriend: 'Add friend',
        friendNamePlaceholder: 'Friend\'s name',
        sendRequest: 'Send request',
        pendingRequests: 'Pending requests',
        noFriends: 'No friends yet',
        noPending: 'No pending requests',
        accept: 'Accept',
        reject: 'Reject',
        friendAdded: 'Friend request sent! 📨',
        friendAccepted: 'Friend accepted! 🎉',
        friendRejected: 'Request rejected',
        alreadyFriends: 'You are already friends!',
        requestExists: 'Request already sent!',
        playerNotFound: 'Player not found!',
        enterYourName: 'Enter your name first!',
        friendsLeaderboard: '👥 Friends\' scores',
        vsYou: 'vs. you',
        noFriendScores: 'Friends have no scores yet',
        // Skin names
        skinDefault: 'Green Lizard',
        skinGold: 'Golden Lizard',
        skinPurple: 'Purple Lizard',
        skinFire: 'Fire Lizard',
        skinOcean: 'Ocean Lizard',
        skinIce: 'Ice Lizard',
        skinSunset: 'Sunset',
        skinToxic: 'Toxic Lizard',
        skinNeon: 'Neon Lizard',
        skinMidnight: 'Midnight Lizard',
        skinCandy: 'Candy Lizard',
        skinStealth: 'Stealth Lizard',
        skinRainbow: 'Rainbow Lizard',
        skinDiamond: 'Diamond Lizard',
        skinClassic: 'Classic Lizard',
        skinMonkey: 'Monkey',
        skinFish: 'Fish',
        // Rarity names
        rarityCommon: 'Common',
        rarityRare: 'Rare',
        rarityMythic: 'Mythic'
    }
};

// Get translation for current language
function t(key) {
    return TRANSLATIONS[currentLanguage][key] || TRANSLATIONS['fi'][key] || key;
}

// Update all UI texts to current language
function updateLanguageUI() {
    // Start screen
    const titleEl = document.querySelector('#start-screen h1');
    if (titleEl) titleEl.textContent = t('title');

    const subtitleEl = document.querySelector('#start-screen .overlay-content > p:first-of-type');
    if (subtitleEl) subtitleEl.textContent = t('subtitle');

    const controlsEl = document.querySelector('#start-screen .controls:not(.mobile-hint)');
    if (controlsEl) controlsEl.textContent = t('controls');

    const mobileHintEl = document.querySelector('#start-screen .mobile-hint');
    if (mobileHintEl) mobileHintEl.textContent = t('mobileHint');

    // Auth UI
    updateAuthLanguage();

    const diffTitle = document.querySelector('#difficulty-selection > p');
    if (diffTitle) diffTitle.textContent = t('difficultyTitle');

    const diffBtns = document.querySelectorAll('.diff-btn');
    diffBtns.forEach(btn => {
        const diff = btn.dataset.diff;
        if (diff) btn.textContent = t(diff);
    });

    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.textContent = t('startGame');

    const leaderboardTitle = document.querySelector('#leaderboard-section h2');
    if (leaderboardTitle) leaderboardTitle.textContent = t('leaderboardTitle');

    // Game over screen
    const gameOverTitle = document.querySelector('#game-over-screen h1');
    if (gameOverTitle) gameOverTitle.textContent = t('gameOver');

    const gameOverLeaderboardTitle = document.querySelector('#game-over-leaderboard h3');
    if (gameOverLeaderboardTitle) gameOverLeaderboardTitle.textContent = t('top10');

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.textContent = t('playAgain');

    // HUD
    const scoreLabel = document.getElementById('score');
    if (scoreLabel) {
        const scoreValue = document.getElementById('score-value').textContent;
        scoreLabel.innerHTML = `${t('fliesHud')} <span id="score-value">${scoreValue}</span>`;
    }

    const speedLabel = document.getElementById('speed');
    if (speedLabel) {
        const speedValue = document.getElementById('speed-value').textContent;
        speedLabel.innerHTML = `${t('speedHud')} <span id="speed-value">${speedValue}</span>x`;
    }

    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.lang === currentLanguage);
    });
}

// Set language and save to localStorage
function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLanguage = lang;
        localStorage.setItem(LANG_KEY, lang);
        updateLanguageUI();
        // Re-render leaderboard with new language
        renderLeaderboard('leaderboard-list');
    }
}

// Initialize language selector
function initLanguageSelector() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    // Set initial button state
    updateLanguageUI();
}

// ============ GAME STATE ============
const state = {
    score: 0,
    speed: 1,
    difficulty: 'normal',
    isRunning: false,
    isGameOver: false,
    lizardLane: 0, // -1 = left, 0 = center, 1 = right
    targetLane: 0,
    obstacles: [],
    flies: [],
    powerups: [],
    groundTiles: [],
    time: 0,
    isInvincible: false,
    invincibleEndTime: 0,
    invincibleWarningBeepsPlayed: 0,
    cheatMode: false, // Secret cheat mode for boosted power-ups
    tongueFliesLeft: 0, // Auto-catch flies with tongue
    isPaused: false, // Pause state
    destroyerMode: false, // Destroy obstacles instead of crashing
    currentBiome: 'jungle', // jungle | beach | volcano | mountains | caves
    biomeDecor: [], // Scene objects that get rebuilt when biome changes
    // Monkey super power — fly above obstacles, auto-collect flies
    isFlying: false,
    flyEndTime: 0,
    flyUsesLeft: 3,
    // Boss fight — multiple boss types ('fly' = Jättikärpänen, 'lukitar' = Lukitar spider)
    bossMode: false,
    bossType: null,
    bossHealth: 0,        // dives/web-attacks left
    bossMaxHealth: 7,
    bossEntity: null,
    bossProjectiles: [],  // active web projectiles (Lukitar only)
    // Cheat: superkarpanen — 1× per game, +1000 kärpäs
    superKarpanenUsed: false,
    bigSuperKarpanenUsed: false, // 1000superkärpänen — 1× per game, +10000 flies
    // Super powers (purchased + upgraded in shop)
    shieldActive: false, shieldEndTime: 0, shieldUsesLeft: 0,
    magnetActive: false, magnetEndTime: 0, magnetUsesLeft: 0,
    slowmoActive: false, slowmoEndTime: 0, slowmoUsesLeft: 0,
    doubleScoreActive: false, doubleScoreEndTime: 0, doubleScoreUsesLeft: 0,
    turboActive: false, turboEndTime: 0, turboUsesLeft: 0,
    lureActive: false, lureEndTime: 0, lureUsesLeft: 0,
    // Global cooldown shared between all super powers (incl. flight)
    superPowerCooldownEnd: 0
};

const SUPER_POWER_COOLDOWN = 15; // seconds between any two super power activations

// Sentinel — set by startBossFight()/startLukitarFight() so the next startGame() call enables boss mode
let pendingBossStart = false;
let pendingBossType = null; // 'fly' | 'lukitar'

// Destroyer mode variables
let destroyerTimer = null;
let destroyerUsesLeft = 2;

// Speedup cheat variables
let speedupUsesLeft = 2;

// Cheat code detection
let cheatBuffer = '';
let cheatTimer = null;
let cheatUsesLeft = 2; // Can only use cheat 2 times per game
document.addEventListener('keypress', (e) => {
    cheatBuffer += e.key.toLowerCase(); // Always lowercase for case-insensitive cheats
    if (cheatBuffer.length > 20) cheatBuffer = cheatBuffer.slice(-20); // Longer buffer for viudevaude

    // matias1 cheat - boost power-ups
    if (cheatBuffer.includes('matias1')) {
        cheatBuffer = '';

        // Check if uses remaining
        if (cheatUsesLeft <= 0) {
            showCheatNotification(t('cheatNoMore'));
            return;
        }

        cheatUsesLeft--;
        state.cheatMode = true;
        showCheatNotification(`${t('cheatPowerAdded')} (${cheatUsesLeft} ${t('cheatLeft')})`);

        // Clear existing timer if any
        if (cheatTimer) clearTimeout(cheatTimer);

        // Cheat lasts 10 seconds
        cheatTimer = setTimeout(() => {
            state.cheatMode = false;
            showCheatNotification(t('cheatEnded'));
        }, 10000);
    }

    // paraslisko cheat - auto-catch 15 flies with tongue
    if (cheatBuffer.includes('paraslisko')) {
        cheatBuffer = '';
        state.tongueFliesLeft = 15;
        showCheatNotification(`${t('tongueActivated')} (15 ${t('tongueFlies')})`);
    }

    // liskogaming cheat - destroyer mode (destroy obstacles for 5 flies each)
    if (cheatBuffer.includes('liskogaming')) {
        cheatBuffer = '';

        // Check if uses remaining
        if (destroyerUsesLeft <= 0) {
            showCheatNotification('🚫 Ei käyttökertoja jäljellä!');
            return;
        }

        destroyerUsesLeft--;
        state.destroyerMode = true;

        // Clear previous timer
        if (destroyerTimer) {
            clearTimeout(destroyerTimer);
        }

        showCheatNotification(`💥 TUHOAJA! (8s) - ${destroyerUsesLeft} käyttöä jäljellä`);

        // End destroyer mode after 8 seconds
        destroyerTimer = setTimeout(() => {
            state.destroyerMode = false;
            showCheatNotification('💥 Tuhoajatila päättyi!');
        }, 8000);
    }

    // speedup cheat - double speed for 10 seconds
    if (cheatBuffer.includes('speedup')) {
        cheatBuffer = '';

        // Check if uses remaining
        if (speedupUsesLeft <= 0) {
            showCheatNotification('🚨 Ei käyttökertoja jäljellä!');
            return;
        }

        speedupUsesLeft--;

        // Double the current speed
        state.speed *= 2;
        showCheatNotification(`🚀 SPEED x2! (10s) - ${speedupUsesLeft} käyttöä jäljellä`);

        // After 10 seconds, halve the speed back
        setTimeout(() => {
            state.speed /= 2;
            showCheatNotification('🚀 Nopeus palautui!');
        }, 10000);
    }

    // viudevaude cheat - unlock monkey skin
    if (cheatBuffer.includes('viudevaude')) {
        cheatBuffer = '';
        if (!shopData.ownedSkins.includes('monkey')) {
            shopData.ownedSkins.push('monkey');
            saveShopData();
            renderShopUI();
            showCheatNotification('🐵 Apina-skin avattu!');
        } else {
            showCheatNotification('🐵 Sinulla on jo apina-skin!');
        }
    }

    // fisuu cheat - unlock fish skin
    if (cheatBuffer.includes('fisuu')) {
        cheatBuffer = '';
        if (!shopData.ownedSkins.includes('fish')) {
            shopData.ownedSkins.push('fish');
            saveShopData();
            renderShopUI();
            showCheatNotification('🐟 Kala-skin avattu!');
        } else {
            showCheatNotification('🐟 Sinulla on jo kala-skin!');
        }
    }

    // 1000superkärpänen cheat — +10 000 flies, max 1× per game (must check BEFORE shorter one
    // because clearing the buffer here prevents the substring superkärpänen from also firing)
    if (cheatBuffer.includes('1000superkärpänen')) {
        cheatBuffer = '';
        if (!state.isRunning) {
            showCheatNotification('🚫 Vain pelin aikana!');
        } else if (state.bigSuperKarpanenUsed) {
            showCheatNotification('🚫 1000-Super-kärpänen käytetty jo!');
        } else {
            state.bigSuperKarpanenUsed = true;
            addFlies(10000);
            showCheatNotification('🪰💎 +10 000 KÄRPÄSTÄ!');
        }
    }

    // superkärpänen cheat — +1000 flies, max 1× per game
    if (cheatBuffer.includes('superkärpänen')) {
        cheatBuffer = '';
        if (!state.isRunning) {
            showCheatNotification('🚫 Vain pelin aikana!');
        } else if (state.superKarpanenUsed) {
            showCheatNotification('🚫 Super-kärpänen käytetty jo tällä pelillä!');
        } else {
            state.superKarpanenUsed = true;
            addFlies(1000);
            showCheatNotification('🪰✨ +1000 KÄRPÄSTÄ!');
        }
    }

    // speedylisko cheat - unlock ALL skins permanently
    if (cheatBuffer.includes('speedylisko')) {
        cheatBuffer = '';
        let added = 0;
        Object.keys(SKINS).forEach(id => {
            if (!shopData.ownedSkins.includes(id)) {
                shopData.ownedSkins.push(id);
                added++;
            }
        });
        if (added > 0) {
            saveShopData();
            renderShopUI();
            showCheatNotification(`🌈 Kaikki skinit avattu! (+${added})`);
        } else {
            showCheatNotification('🌈 Sinulla on jo kaikki skinit!');
        }
    }
});

function showCheatNotification(message) {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b6b, #ffd93d);
        color: #000;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 24px;
        font-weight: bold;
        z-index: 9999;
        animation: cheatPop 2s forwards;
        box-shadow: 0 0 30px rgba(255, 107, 107, 0.8);
    `;
    document.body.appendChild(notif);

    // Add animation keyframes
    if (!document.getElementById('cheat-style')) {
        const style = document.createElement('style');
        style.id = 'cheat-style';
        style.textContent = `
            @keyframes cheatPop {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => notif.remove(), 2000);
}

// ============ DIFFICULTY SETTINGS ============
const DIFFICULTIES = {
    easy: { startSpeed: 0.5, maxSpeed: 4, acceleration: 0.01, spawnIntervalMulti: 1.2 },
    normal: { startSpeed: 1.0, maxSpeed: 8, acceleration: 0.02, spawnIntervalMulti: 1.0 },
    hard: { startSpeed: 2.5, maxSpeed: 15, acceleration: 0.05, spawnIntervalMulti: 0.7 },
    super: { startSpeed: 5.0, maxSpeed: 30, acceleration: 0.1, spawnIntervalMulti: 0.4 } // INSANE MODE
};

// ============ SHOP SYSTEM ============
const SHOP_DATA_KEY = 'lisko_racing_shop';
const TOTAL_FLIES_KEY = 'lisko_racing_total_flies';

// Skin definitions with prices, colors and rarity
// Rarity: 'common', 'rare', 'mythic'
const SKINS = {
    default: {
        id: 'default',
        nameKey: 'skinDefault',
        price: 0,
        rarity: 'common',
        colors: { skin: 0x2e8b57, belly: 0x90ee90, scale: 0x228b22 },
        owned: true // Always owned
    },
    gold: {
        id: 'gold',
        nameKey: 'skinGold',
        price: 100,
        rarity: 'common',
        colors: { skin: 0xffd700, belly: 0xffec8b, scale: 0xdaa520 }
    },
    purple: {
        id: 'purple',
        nameKey: 'skinPurple',
        price: 150,
        rarity: 'common',
        colors: { skin: 0x9932cc, belly: 0xdda0dd, scale: 0x800080 }
    },
    fire: {
        id: 'fire',
        nameKey: 'skinFire',
        price: 250,
        rarity: 'common',
        colors: { skin: 0xff4500, belly: 0xffa500, scale: 0x8b0000 }
    },
    ocean: {
        id: 'ocean',
        nameKey: 'skinOcean',
        price: 350,
        rarity: 'common',
        colors: { skin: 0x006994, belly: 0x40e0d0, scale: 0x004c70 }
    },
    ice: {
        id: 'ice',
        nameKey: 'skinIce',
        price: 500,
        rarity: 'rare',
        colors: { skin: 0x00bfff, belly: 0xe0ffff, scale: 0x1e90ff }
    },
    sunset: {
        id: 'sunset',
        nameKey: 'skinSunset',
        price: 600,
        rarity: 'rare',
        colors: { skin: 0xff6347, belly: 0xffd700, scale: 0xff4500 }
    },
    toxic: {
        id: 'toxic',
        nameKey: 'skinToxic',
        price: 750,
        rarity: 'rare',
        colors: { skin: 0x00ff00, belly: 0xadff2f, scale: 0x32cd32, emissive: 0x00ff00 }
    },
    neon: {
        id: 'neon',
        nameKey: 'skinNeon',
        price: 1000,
        rarity: 'rare',
        colors: { skin: 0x39ff14, belly: 0x00ff00, scale: 0x32cd32, emissive: 0x39ff14 }
    },
    midnight: {
        id: 'midnight',
        nameKey: 'skinMidnight',
        price: 1200,
        rarity: 'rare',
        colors: { skin: 0x191970, belly: 0x483d8b, scale: 0x0d0d30 }
    },
    candy: {
        id: 'candy',
        nameKey: 'skinCandy',
        price: 1500,
        rarity: 'rare',
        colors: { skin: 0xff69b4, belly: 0xffc0cb, scale: 0xff1493 }
    },
    stealth: {
        id: 'stealth',
        nameKey: 'skinStealth',
        price: 2000,
        rarity: 'rare',
        colors: { skin: 0x2f2f2f, belly: 0x4a4a4a, scale: 0x1a1a1a }
    },
    rainbow: {
        id: 'rainbow',
        nameKey: 'skinRainbow',
        price: 2500,
        rarity: 'mythic',
        colors: { skin: 0xff69b4, belly: 0x87ceeb, scale: 0x9370db, special: 'rainbow' }
    },
    diamond: {
        id: 'diamond',
        nameKey: 'skinDiamond',
        price: 3500,
        rarity: 'mythic',
        colors: { skin: 0xb9f2ff, belly: 0xe0ffff, scale: 0x87ceeb, emissive: 0xb9f2ff }
    },
    monkey: {
        id: 'monkey',
        nameKey: 'skinMonkey',
        icon: '🐵',
        price: 4500,
        rarity: 'mythic',
        colors: { skin: 0x8B4513, belly: 0xDEB887, scale: 0x654321 }
    },
    fish: {
        id: 'fish',
        nameKey: 'skinFish',
        icon: '🐟',
        price: 4500,
        rarity: 'mythic',
        colors: { skin: 0x1E90FF, belly: 0x87CEEB, scale: 0x4169E1, emissive: 0x00BFFF }
    },
    classic: {
        id: 'classic',
        nameKey: 'skinClassic',
        price: 7500, // The original simple lizard!
        rarity: 'mythic',
        colors: { skin: 0x00aa00, belly: 0x88ff88, scale: 0x006600, special: 'classic' }
    },
    // ============ +20 NEW SKINS (v2) ============
    desert: { id: 'desert', name: 'Aavikko', nameKey: 'skinDesert', price: 280, rarity: 'common',
        colors: { skin: 0xc8a878, belly: 0xe6cb96, scale: 0x9c7e50 } },
    forest: { id: 'forest', name: 'Metsä', nameKey: 'skinForest', price: 320, rarity: 'common',
        colors: { skin: 0x2c5e1e, belly: 0x6a9955, scale: 0x1a3d11 } },
    mint: { id: 'mint', name: 'Minttu', nameKey: 'skinMint', price: 380, rarity: 'common',
        colors: { skin: 0x9aedbf, belly: 0xc8f5d7, scale: 0x66cb95 } },
    lava: { id: 'lava', name: 'Laava', nameKey: 'skinLava', price: 400, rarity: 'common',
        colors: { skin: 0xff5500, belly: 0xffaa44, scale: 0xaa2200, emissive: 0xff3300 } },
    coral: { id: 'coral', name: 'Koralli', nameKey: 'skinCoral', price: 420, rarity: 'common',
        colors: { skin: 0xff7f50, belly: 0xffa07a, scale: 0xe66a3c } },
    emerald: { id: 'emerald', name: 'Smaragdi', nameKey: 'skinEmerald', price: 450, rarity: 'common',
        colors: { skin: 0x10c050, belly: 0x60ff90, scale: 0x009030 } },
    ruby: { id: 'ruby', name: 'Rubiini', nameKey: 'skinRuby', price: 550, rarity: 'rare',
        colors: { skin: 0xe0115f, belly: 0xff6090, scale: 0x9b0c3f } },
    sapphire: { id: 'sapphire', name: 'Safiiri', nameKey: 'skinSapphire', price: 600, rarity: 'rare',
        colors: { skin: 0x0f52ba, belly: 0x4a8de0, scale: 0x0a3a82 } },
    bee: { id: 'bee', name: 'Mehiläinen', nameKey: 'skinBee', icon: '🐝', price: 700, rarity: 'rare',
        colors: { skin: 0xffc107, belly: 0x000000, scale: 0xb8860b } },
    shadow: { id: 'shadow', name: 'Varjo', nameKey: 'skinShadow', price: 800, rarity: 'rare',
        colors: { skin: 0x2c2c2c, belly: 0x505050, scale: 0x0a0a0a } },
    lightning: { id: 'lightning', name: 'Salama', nameKey: 'skinLightning', icon: '⚡', price: 900, rarity: 'rare',
        colors: { skin: 0xffe600, belly: 0xa855f7, scale: 0xfacc15, emissive: 0xffe600 } },
    magma: { id: 'magma', name: 'Magma', nameKey: 'skinMagma', price: 1100, rarity: 'rare',
        colors: { skin: 0xb91c1c, belly: 0xff5500, scale: 0x451a03, emissive: 0xff2200 } },
    royal: { id: 'royal', name: 'Kuninkaallinen', nameKey: 'skinRoyal', icon: '👑', price: 1300, rarity: 'rare',
        colors: { skin: 0x1e3a8a, belly: 0xfacc15, scale: 0x0c2466 } },
    autumn: { id: 'autumn', name: 'Syksy', nameKey: 'skinAutumn', icon: '🍂', price: 1400, rarity: 'rare',
        colors: { skin: 0xc2410c, belly: 0xfb923c, scale: 0x7c2d12 } },
    metallic: { id: 'metallic', name: 'Metalli', nameKey: 'skinMetallic', price: 1700, rarity: 'rare',
        colors: { skin: 0xc0c0c0, belly: 0xe8e8e8, scale: 0x808080 } },
    cyber: { id: 'cyber', name: 'Kyberi', nameKey: 'skinCyber', price: 1900, rarity: 'rare',
        colors: { skin: 0x06ffff, belly: 0xff00ff, scale: 0x0080ff, emissive: 0x06ffff } },
    ghost: { id: 'ghost', name: 'Aave', nameKey: 'skinGhost', icon: '👻', price: 2200, rarity: 'mythic',
        colors: { skin: 0xf0f0f0, belly: 0xffffff, scale: 0xc8c8c8, emissive: 0xffffff } },
    crystal: { id: 'crystal', name: 'Kristalli', nameKey: 'skinCrystal', icon: '💎', price: 2800, rarity: 'mythic',
        colors: { skin: 0xc4b5fd, belly: 0xede9fe, scale: 0xa78bfa, emissive: 0xc4b5fd } },
    galaxy: { id: 'galaxy', name: 'Galaksi', nameKey: 'skinGalaxy', icon: '🌌', price: 3000, rarity: 'mythic',
        colors: { skin: 0x4c1d95, belly: 0xc084fc, scale: 0x1e1b4b, emissive: 0x9333ea } },
    cosmic: { id: 'cosmic', name: 'Kosminen', nameKey: 'skinCosmic', icon: '✨', price: 4000, rarity: 'mythic',
        colors: { skin: 0x0a0a40, belly: 0x4040a0, scale: 0x000020, emissive: 0x4040ff } },
    // ============ +45 NEW SKINS (v2 batch 2) ============
    // Common (15)
    sand: { id: 'sand', name: 'Hiekka', nameKey: 'skinSand', price: 290, rarity: 'common',
        colors: { skin: 0xddc89a, belly: 0xf2deba, scale: 0xb39c70 } },
    moss: { id: 'moss', name: 'Sammal', nameKey: 'skinMoss', price: 310, rarity: 'common',
        colors: { skin: 0x4a6b3a, belly: 0x6b8a4a, scale: 0x365028 } },
    lemon: { id: 'lemon', name: 'Sitruuna', nameKey: 'skinLemon', price: 330, rarity: 'common',
        colors: { skin: 0xffe066, belly: 0xfff5b3, scale: 0xd9b833 } },
    peach: { id: 'peach', name: 'Persikka', nameKey: 'skinPeach', price: 350, rarity: 'common',
        colors: { skin: 0xffcba4, belly: 0xffe0c8, scale: 0xe09b6b } },
    lime2: { id: 'lime2', name: 'Lime', nameKey: 'skinLime', price: 370, rarity: 'common',
        colors: { skin: 0x9aff66, belly: 0xc5ffa1, scale: 0x66cc33 } },
    rose: { id: 'rose', name: 'Ruusu', nameKey: 'skinRose', price: 390, rarity: 'common',
        colors: { skin: 0xff66a8, belly: 0xffa3c4, scale: 0xcc4080 } },
    olive: { id: 'olive', name: 'Oliivi', nameKey: 'skinOlive', price: 410, rarity: 'common',
        colors: { skin: 0x6b8e23, belly: 0x8fa84a, scale: 0x4a6b14 } },
    teal: { id: 'teal', name: 'Sinivihreä', nameKey: 'skinTeal', price: 430, rarity: 'common',
        colors: { skin: 0x008080, belly: 0x40b0b0, scale: 0x005a5a } },
    amber: { id: 'amber', name: 'Meripihka', nameKey: 'skinAmber', price: 450, rarity: 'common',
        colors: { skin: 0xffbf00, belly: 0xffd966, scale: 0xb38900 } },
    lavender: { id: 'lavender', name: 'Laventeli', nameKey: 'skinLavender', price: 470, rarity: 'common',
        colors: { skin: 0xb19cd9, belly: 0xd9c8ec, scale: 0x8870b3 } },
    plum: { id: 'plum', name: 'Luumu', nameKey: 'skinPlum', price: 490, rarity: 'common',
        colors: { skin: 0x8e4585, belly: 0xb478ad, scale: 0x5e2a59 } },
    apricot: { id: 'apricot', name: 'Aprikoosi', nameKey: 'skinApricot', price: 510, rarity: 'common',
        colors: { skin: 0xfbceb1, belly: 0xfde2c6, scale: 0xd9966b } },
    pearl: { id: 'pearl', name: 'Helmi', nameKey: 'skinPearl', price: 530, rarity: 'common',
        colors: { skin: 0xeae0c8, belly: 0xfffaef, scale: 0xc8b894 } },
    cherry: { id: 'cherry', name: 'Kirsikka', nameKey: 'skinCherry', price: 550, rarity: 'common',
        colors: { skin: 0xc8102e, belly: 0xff5566, scale: 0x800015 } },
    copper: { id: 'copper', name: 'Kupari', nameKey: 'skinCopper', price: 570, rarity: 'common',
        colors: { skin: 0xb87333, belly: 0xd99a55, scale: 0x6e4521 } },
    // Rare (20)
    obsidian: { id: 'obsidian', name: 'Obsidiaani', nameKey: 'skinObsidian', price: 650, rarity: 'rare',
        colors: { skin: 0x0a0a0a, belly: 0x303030, scale: 0x000000 } },
    midnightBlue: { id: 'midnightBlue', name: 'Yösininen', nameKey: 'skinMidnightBlue', price: 700, rarity: 'rare',
        colors: { skin: 0x191970, belly: 0x4d4d99, scale: 0x0c0c40 } },
    oceanDeep: { id: 'oceanDeep', name: 'Syvämeri', nameKey: 'skinOceanDeep', price: 750, rarity: 'rare',
        colors: { skin: 0x002b5b, belly: 0x004080, scale: 0x001533 } },
    neonPink: { id: 'neonPink', name: 'Neonipinkki', nameKey: 'skinNeonPink', price: 800, rarity: 'rare',
        colors: { skin: 0xff0080, belly: 0xff66b3, scale: 0xcc0066, emissive: 0xff0080 } },
    nightshade: { id: 'nightshade', name: 'Yövarjo', nameKey: 'skinNightshade', price: 850, rarity: 'rare',
        colors: { skin: 0x301934, belly: 0x583158, scale: 0x180a20 } },
    icefire: { id: 'icefire', name: 'Jääliekki', nameKey: 'skinIcefire', price: 900, rarity: 'rare',
        colors: { skin: 0xff7700, belly: 0x88ddff, scale: 0xcc4400, emissive: 0xff7700 } },
    zebra: { id: 'zebra', name: 'Seepra', nameKey: 'skinZebra', icon: '🦓', price: 950, rarity: 'rare',
        colors: { skin: 0xffffff, belly: 0x000000, scale: 0xeeeeee } },
    tiger: { id: 'tiger', name: 'Tiikeri', nameKey: 'skinTiger', icon: '🐯', price: 1000, rarity: 'rare',
        colors: { skin: 0xff6600, belly: 0xffffff, scale: 0x000000 } },
    leopard: { id: 'leopard', name: 'Leopardi', nameKey: 'skinLeopard', icon: '🐆', price: 1050, rarity: 'rare',
        colors: { skin: 0xc8a45a, belly: 0xfff0c0, scale: 0x654321 } },
    dalmatian: { id: 'dalmatian', name: 'Dalmatialainen', nameKey: 'skinDalmatian', icon: '🐶', price: 1100, rarity: 'rare',
        colors: { skin: 0xffffff, belly: 0xeeeeee, scale: 0x111111 } },
    samurai: { id: 'samurai', name: 'Samurai', nameKey: 'skinSamurai', icon: '🗡️', price: 1150, rarity: 'rare',
        colors: { skin: 0xc8102e, belly: 0xffffff, scale: 0x000000 } },
    ninja: { id: 'ninja', name: 'Ninja', nameKey: 'skinNinja', icon: '🥷', price: 1200, rarity: 'rare',
        colors: { skin: 0x1a1a1a, belly: 0x333333, scale: 0x000000 } },
    pirate: { id: 'pirate', name: 'Merirosvo', nameKey: 'skinPirate', icon: '🏴‍☠️', price: 1250, rarity: 'rare',
        colors: { skin: 0x654321, belly: 0xddc99a, scale: 0x3a2515 } },
    wizard: { id: 'wizard', name: 'Velho', nameKey: 'skinWizard', icon: '🧙', price: 1300, rarity: 'rare',
        colors: { skin: 0x4b0082, belly: 0x9333ea, scale: 0x2a004a, emissive: 0x6b00b8 } },
    knight: { id: 'knight', name: 'Ritari', nameKey: 'skinKnight', icon: '⚔️', price: 1350, rarity: 'rare',
        colors: { skin: 0xc0c0c0, belly: 0xe8e8e8, scale: 0x808080 } },
    astronaut: { id: 'astronaut', name: 'Astronautti', nameKey: 'skinAstronaut', icon: '🚀', price: 1400, rarity: 'rare',
        colors: { skin: 0xffffff, belly: 0xc0c0c0, scale: 0x4a90e2 } },
    werewolf: { id: 'werewolf', name: 'Ihmissusi', nameKey: 'skinWerewolf', icon: '🐺', price: 1450, rarity: 'rare',
        colors: { skin: 0x4a3520, belly: 0x664d33, scale: 0x2a1810 } },
    zombie: { id: 'zombie', name: 'Zombie', nameKey: 'skinZombie', icon: '🧟', price: 1500, rarity: 'rare',
        colors: { skin: 0x6b8e4a, belly: 0x4a6b30, scale: 0x3a4a25 } },
    vampire: { id: 'vampire', name: 'Vampyyri', nameKey: 'skinVampire', icon: '🧛', price: 1550, rarity: 'rare',
        colors: { skin: 0x300010, belly: 0x600028, scale: 0x100008, emissive: 0x550000 } },
    mermaid: { id: 'mermaid', name: 'Merenneito', nameKey: 'skinMermaid', icon: '🧜', price: 1600, rarity: 'rare',
        colors: { skin: 0x00bcd4, belly: 0x80deea, scale: 0x006978 } },
    // Mythic (10)
    unicorn: { id: 'unicorn', name: 'Yksisarvinen', nameKey: 'skinUnicorn', icon: '🦄', price: 2000, rarity: 'mythic',
        colors: { skin: 0xffe0f0, belly: 0xffffff, scale: 0xffd6e8, emissive: 0xff80c0 } },
    dragon: { id: 'dragon', name: 'Lohikäärme', nameKey: 'skinDragon', icon: '🐉', price: 2500, rarity: 'mythic',
        colors: { skin: 0xb91c1c, belly: 0xffe066, scale: 0x650000, emissive: 0xff3300 } },
    phoenix: { id: 'phoenix', name: 'Feeniks', nameKey: 'skinPhoenix', icon: '🔥', price: 3000, rarity: 'mythic',
        colors: { skin: 0xff4500, belly: 0xffd700, scale: 0x8b0000, emissive: 0xff7711 } },
    hydra: { id: 'hydra', name: 'Hydra', nameKey: 'skinHydra', icon: '🐍', price: 3500, rarity: 'mythic',
        colors: { skin: 0x008b8b, belly: 0x40e0d0, scale: 0x004d4d, emissive: 0x00aaaa } },
    kraken: { id: 'kraken', name: 'Kraken', nameKey: 'skinKraken', icon: '🐙', price: 4000, rarity: 'mythic',
        colors: { skin: 0x2f4f4f, belly: 0x556b6b, scale: 0x1a2f2f, emissive: 0x004d33 } },
    mecha: { id: 'mecha', name: 'Mecha', nameKey: 'skinMecha', icon: '🤖', price: 4500, rarity: 'mythic',
        colors: { skin: 0x5a5a5a, belly: 0x808080, scale: 0x303030, emissive: 0x00ddff } },
    holographic: { id: 'holographic', name: 'Hologrammi', nameKey: 'skinHolographic', price: 5000, rarity: 'mythic',
        colors: { skin: 0xff00ff, belly: 0x00ffff, scale: 0xffff00, emissive: 0xff00ff } },
    voidSkin: { id: 'voidSkin', name: 'Tyhjyys', nameKey: 'skinVoid', price: 5500, rarity: 'mythic',
        colors: { skin: 0x000000, belly: 0x1a0033, scale: 0x000000, emissive: 0x4d00b3 } },
    nebula: { id: 'nebula', name: 'Nebula', nameKey: 'skinNebula', icon: '🌌', price: 6000, rarity: 'mythic',
        colors: { skin: 0x4b0082, belly: 0xff66ff, scale: 0x000033, emissive: 0xa033ff } },
    aurora: { id: 'aurora', name: 'Revontulet', nameKey: 'skinAurora', icon: '🌠', price: 7000, rarity: 'mythic',
        colors: { skin: 0x00ff80, belly: 0x80ffff, scale: 0x008080, emissive: 0x00ffaa } },
    // ============ +32 NEW SKINS (v2 batch 3) ============
    // Common (12)
    bronze: { id: 'bronze', name: 'Pronssi', nameKey: 'skinBronze', icon: '🥉', price: 280, rarity: 'common',
        colors: { skin: 0xcd7f32, belly: 0xe6a85a, scale: 0x8a5520 } },
    silver: { id: 'silver', name: 'Hopea', nameKey: 'skinSilver', icon: '🥈', price: 310, rarity: 'common',
        colors: { skin: 0xb8b8c0, belly: 0xddddee, scale: 0x70707a } },
    charcoal: { id: 'charcoal', name: 'Hiili', nameKey: 'skinCharcoal', price: 340, rarity: 'common',
        colors: { skin: 0x36454f, belly: 0x4a5560, scale: 0x1a2228 } },
    frost: { id: 'frost', name: 'Kuura', nameKey: 'skinFrost', icon: '❄️', price: 370, rarity: 'common',
        colors: { skin: 0xddeeff, belly: 0xeef8ff, scale: 0xb0c8e0, emissive: 0x88aacc } },
    citrine: { id: 'citrine', name: 'Sitriini', nameKey: 'skinCitrine', price: 400, rarity: 'common',
        colors: { skin: 0xe4d00a, belly: 0xfff0a0, scale: 0xa89000 } },
    jade: { id: 'jade', name: 'Jade', nameKey: 'skinJade', price: 430, rarity: 'common',
        colors: { skin: 0x00a86b, belly: 0x66dca6, scale: 0x006a40 } },
    topaz: { id: 'topaz', name: 'Topaasi', nameKey: 'skinTopaz', price: 460, rarity: 'common',
        colors: { skin: 0xffc87c, belly: 0xffe0a8, scale: 0xc89055 } },
    opal: { id: 'opal', name: 'Opaali', nameKey: 'skinOpal', price: 490, rarity: 'common',
        colors: { skin: 0xa8c3bc, belly: 0xe0f0ec, scale: 0x66a092 } },
    glacier: { id: 'glacier', name: 'Jäätikkö', nameKey: 'skinGlacier', price: 520, rarity: 'common',
        colors: { skin: 0xa8d8e8, belly: 0xddf2f8, scale: 0x6090a8 } },
    comet: { id: 'comet', name: 'Komeetta', nameKey: 'skinComet', icon: '☄️', price: 550, rarity: 'common',
        colors: { skin: 0x88aaff, belly: 0xddeeff, scale: 0x4466bb } },
    fairy: { id: 'fairy', name: 'Keiju', nameKey: 'skinFairy', icon: '🧚', price: 580, rarity: 'common',
        colors: { skin: 0xffd0ee, belly: 0xffeefa, scale: 0xff80c0, emissive: 0xff80cc } },
    sunstone: { id: 'sunstone', name: 'Aurinkokivi', nameKey: 'skinSunstone', price: 610, rarity: 'common',
        colors: { skin: 0xffaa44, belly: 0xffdd99, scale: 0xc8772a } },
    // Rare (15)
    platinum: { id: 'platinum', name: 'Platina', nameKey: 'skinPlatinum', icon: '⭐', price: 680, rarity: 'rare',
        colors: { skin: 0xe5e4e2, belly: 0xfafafa, scale: 0xa8a8a8 } },
    steel: { id: 'steel', name: 'Teräs', nameKey: 'skinSteel', price: 750, rarity: 'rare',
        colors: { skin: 0x4682b4, belly: 0x8aa8c8, scale: 0x1f4060 } },
    onyx: { id: 'onyx', name: 'Onyks', nameKey: 'skinOnyx', price: 820, rarity: 'rare',
        colors: { skin: 0x0e0e1a, belly: 0x252535, scale: 0x000005 } },
    aquamarine: { id: 'aquamarine', name: 'Akvamariini', nameKey: 'skinAquamarine', price: 890, rarity: 'rare',
        colors: { skin: 0x7fffd4, belly: 0xc0ffee, scale: 0x40b08a } },
    garnet: { id: 'garnet', name: 'Granaatti', nameKey: 'skinGarnet', price: 960, rarity: 'rare',
        colors: { skin: 0x733635, belly: 0xa05055, scale: 0x401a1a } },
    moonstone: { id: 'moonstone', name: 'Kuukivi', nameKey: 'skinMoonstone', price: 1030, rarity: 'rare',
        colors: { skin: 0xc8c0d8, belly: 0xeae0f0, scale: 0x808898, emissive: 0xa098b8 } },
    tornado: { id: 'tornado', name: 'Tornado', nameKey: 'skinTornado', icon: '🌪️', price: 1100, rarity: 'rare',
        colors: { skin: 0x808890, belly: 0xaab0b8, scale: 0x4a5560 } },
    thunder: { id: 'thunder', name: 'Ukkonen', nameKey: 'skinThunder', icon: '⚡', price: 1170, rarity: 'rare',
        colors: { skin: 0xffe066, belly: 0xfff5b3, scale: 0xa855f7, emissive: 0xffe600 } },
    inferno: { id: 'inferno', name: 'Inferno', nameKey: 'skinInferno', icon: '🔥', price: 1240, rarity: 'rare',
        colors: { skin: 0xff2a00, belly: 0xff6633, scale: 0x800000, emissive: 0xff5500 } },
    pulsar: { id: 'pulsar', name: 'Pulsari', nameKey: 'skinPulsar', icon: '💫', price: 1310, rarity: 'rare',
        colors: { skin: 0xaa55ff, belly: 0xddaaff, scale: 0x4a0a8a, emissive: 0xaa55ff } },
    wraith: { id: 'wraith', name: 'Henki', nameKey: 'skinWraith', price: 1380, rarity: 'rare',
        colors: { skin: 0x4a4a55, belly: 0x6a6a78, scale: 0x202028, emissive: 0x6655aa } },
    demon: { id: 'demon', name: 'Demoni', nameKey: 'skinDemon', icon: '😈', price: 1450, rarity: 'rare',
        colors: { skin: 0x9c0000, belly: 0xc00000, scale: 0x300000, emissive: 0xff0000 } },
    cowboy: { id: 'cowboy', name: 'Karjapaimen', nameKey: 'skinCowboy', icon: '🤠', price: 1520, rarity: 'rare',
        colors: { skin: 0x8b6f4a, belly: 0xc8a576, scale: 0x4a3220 } },
    viking: { id: 'viking', name: 'Viikinki', nameKey: 'skinViking', price: 1590, rarity: 'rare',
        colors: { skin: 0x6b4a25, belly: 0x9c7240, scale: 0x3a2515 } },
    mummy: { id: 'mummy', name: 'Muumio', nameKey: 'skinMummy', icon: '📿', price: 1660, rarity: 'rare',
        colors: { skin: 0xe8d8b8, belly: 0xf2e8c8, scale: 0xa8956a } },
    // Mythic (5)
    eclipse: { id: 'eclipse', name: 'Pimennys', nameKey: 'skinEclipse', icon: '🌑', price: 3500, rarity: 'mythic',
        colors: { skin: 0x000000, belly: 0xffd700, scale: 0xff5500, emissive: 0xff8800 } },
    angel: { id: 'angel', name: 'Enkeli', nameKey: 'skinAngel', icon: '😇', price: 4500, rarity: 'mythic',
        colors: { skin: 0xfff8e0, belly: 0xffffff, scale: 0xffd700, emissive: 0xffeebb } },
    pixel: { id: 'pixel', name: 'Pikseli', nameKey: 'skinPixel', icon: '🎮', price: 5500, rarity: 'mythic',
        colors: { skin: 0x00ff00, belly: 0xffff00, scale: 0xff00ff } },
    matrix: { id: 'matrix', name: 'Matriisi', nameKey: 'skinMatrix', price: 6500, rarity: 'mythic',
        colors: { skin: 0x000000, belly: 0x00ff00, scale: 0x008800, emissive: 0x00ff00 } },
    disco: { id: 'disco', name: 'Disko', nameKey: 'skinDisco', icon: '🪩', price: 7500, rarity: 'mythic',
        colors: { skin: 0xffd700, belly: 0xff00ff, scale: 0x00ffff, emissive: 0xffaa00 } }
};

// Shop state
let shopData = {
    totalFlies: 0,
    ownedSkins: ['default'],
    equippedSkin: 'default',
    bossModeUnlocked: false,   // Jättikärpäs-moodi (10 000 kärpästä)
    lukitarUnlocked: false,    // Lukitar-moodi (15 000 kärpästä)
    jattiLiskoUnlocked: false, // Jätti-Lisko (20 000 kärpästä) — kielihyökkäys
    ownedMusic: ['klassinen'], // Owned music track ids
    equippedMusic: 'klassinen',
    superPowers: { shield: 0, magnet: 0, slowmo: 0, doubleScore: 0, turbo: 0, lure: 0 } // 0 = locked, 1-3 = level
};

// Super-power tuning per level
const SUPER_POWER_DEFS = {
    shield: {
        name: 'Kilpi', icon: '🛡️', key: 'Q',
        levels: [
            { duration: 5, uses: 2 },
            { duration: 8, uses: 2 },
            { duration: 12, uses: 3 }
        ]
    },
    magnet: {
        name: 'Magneetti', icon: '🧲', key: 'E',
        levels: [
            { duration: 8, radius: 8, uses: 2 },
            { duration: 8, radius: 12, uses: 2 },
            { duration: 8, radius: 16, uses: 3 }
        ]
    },
    slowmo: {
        name: 'Hidastus', icon: '🐌', key: 'R',
        levels: [
            { duration: 5, factor: 0.7, uses: 2 },
            { duration: 5, factor: 0.5, uses: 2 },
            { duration: 5, factor: 0.3, uses: 3 }
        ]
    },
    doubleScore: {
        name: 'Tuplapisteet', icon: '✖️2', key: 'T',
        levels: [
            { duration: 8, multiplier: 2, uses: 2 },
            { duration: 12, multiplier: 2, uses: 2 },
            { duration: 16, multiplier: 2, uses: 3 }
        ]
    },
    turbo: {
        name: 'Turbo', icon: '🚀', key: 'G',
        levels: [
            { duration: 4, speed: 1.5, uses: 2 },
            { duration: 6, speed: 1.7, uses: 2 },
            { duration: 8, speed: 2.0, uses: 3 }
        ]
    },
    lure: {
        name: 'Houkutus', icon: '🎺', key: 'V',
        levels: [
            { duration: 8, flyChance: 0.7, uses: 2 },
            { duration: 12, flyChance: 0.8, uses: 2 },
            { duration: 16, flyChance: 0.9, uses: 3 }
        ]
    }
};

// Load shop data - Firebase is the source of truth
async function loadShopData() {
    // Default state
    shopData = {
        totalFlies: 0,
        ownedSkins: ['default'],
        equippedSkin: 'default'
    };

    if (!currentPlayerName) {
        renderShopUI();
        updateCoinsDisplay();
        return;
    }

    const playerId = getPlayerId(currentPlayerName);

    // Try to load from Firebase (source of truth)
    try {
        const response = await fetch(`${FIREBASE_DB_URL}/players/${playerId}/shop.json`);
        const data = await response.json();

        if (data && data.totalFlies !== undefined) {
            // Firebase has data - restore all persisted fields (not just flies/skins)
            shopData.totalFlies        = data.totalFlies;
            shopData.ownedSkins        = data.ownedSkins        || ['default'];
            shopData.equippedSkin      = data.equippedSkin      || 'default';
            shopData.bossModeUnlocked  = data.bossModeUnlocked  || false;
            shopData.lukitarUnlocked   = data.lukitarUnlocked   || false;
            shopData.jattiLiskoUnlocked = data.jattiLiskoUnlocked || false;
            shopData.ownedMusic        = data.ownedMusic        || ['klassinen'];
            shopData.equippedMusic     = data.equippedMusic     || 'klassinen';
            shopData.superPowers       = data.superPowers       || { shield: 0, magnet: 0, slowmo: 0, doubleScore: 0, turbo: 0, lure: 0 };

            // Update localStorage cache
            const userKey = `${SHOP_DATA_KEY}_${playerId}`;
            localStorage.setItem(userKey, JSON.stringify(shopData));
        } else {
            // No Firebase data - check for existing localStorage to migrate
            const userKey = `${SHOP_DATA_KEY}_${playerId}`;
            const localSaved = localStorage.getItem(userKey);

            if (localSaved) {
                const parsed = JSON.parse(localSaved);
                shopData = { ...shopData, ...parsed };
                // Push to Firebase
                await saveShopData();
                showCheatNotification(`☁️ Data synkronoitu pilveen!`);
            } else {
                // Check for legacy data
                const globalSaved = localStorage.getItem(SHOP_DATA_KEY);
                if (globalSaved) {
                    const parsed = JSON.parse(globalSaved);
                    shopData = { ...shopData, ...parsed };
                    await saveShopData();
                    showCheatNotification(`🎉 Vanha data siirretty! ${shopData.totalFlies} kärpästä!`);
                }
            }
        }
    } catch (e) {
        console.log('Firebase error, using localStorage:', e);
        // Offline fallback - use localStorage
        try {
            const userKey = `${SHOP_DATA_KEY}_${playerId}`;
            const localSaved = localStorage.getItem(userKey);
            if (localSaved) {
                const parsed = JSON.parse(localSaved);
                shopData = { ...shopData, ...parsed };
            }
        } catch (e2) { }
    }

    renderShopUI();
    updateCoinsDisplay();
}

// Save shop data to localStorage AND Firebase (User Specific)
async function saveShopData() {
    if (!currentPlayerName) return;

    try {
        const playerId = getPlayerId(currentPlayerName);
        const userKey = `${SHOP_DATA_KEY}_${playerId}`;
        localStorage.setItem(userKey, JSON.stringify(shopData));

        // Also save to Firebase for cross-device sync
        await fetch(`${FIREBASE_DB_URL}/players/${playerId}/shop.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shopData)
        });
    } catch (e) {
        console.log('Could not save/sync shop data:', e);
    }
}

// Manual sync function - forces upload to Firebase
async function syncToCloud() {
    if (!currentPlayerName) {
        showCheatNotification('Kirjaudu ensin sisään!');
        return;
    }

    showCheatNotification('☁️ Synkronoidaan...');

    try {
        const playerId = getPlayerId(currentPlayerName);
        await fetch(`${FIREBASE_DB_URL}/players/${playerId}/shop.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shopData)
        });
        showCheatNotification(`☁️ Synkronoitu! ${shopData.totalFlies} kärpästä pilvessä!`);
    } catch (e) {
        showCheatNotification('❌ Synkronointi epäonnistui!');
        console.error(e);
    }
}

// Add flies (called after each game)
function addFlies(amount) {
    shopData.totalFlies += amount;
    saveShopData();
    updateCoinsDisplay();
}

// Buy a skin
function buySkin(skinId) {
    const skin = SKINS[skinId];
    if (!skin) return;

    if (shopData.ownedSkins.includes(skinId)) {
        // Already owned, equip it
        equipSkin(skinId);
        return;
    }

    if (shopData.totalFlies < skin.price) {
        showCheatNotification(t('notEnough'));
        return;
    }

    // Purchase!
    shopData.totalFlies -= skin.price;
    shopData.ownedSkins.push(skinId);
    shopData.equippedSkin = skinId;
    saveShopData();

    showCheatNotification(`${t('purchased')} ${t(skin.nameKey)}! 🎉`);
    applySkin(skinId);
    renderShopUI();
    updateCoinsDisplay();

    trackEvent('item_purchased', {
        type: 'skin',
        itemId: skinId,
        price: skin.price,
        fliesAfter: shopData.totalFlies
    });
}

// Equip a skin
function equipSkin(skinId) {
    if (!shopData.ownedSkins.includes(skinId)) return;

    shopData.equippedSkin = skinId;
    saveShopData();
    applySkin(skinId);
    renderShopUI();
}

// Apply skin colors to lizard (will be connected to lizard materials later)
// Monkey parts storage for toggling
let monkeyParts = [];
let snoutVisible = true;

function applySkin(skinId) {
    const skin = SKINS[skinId];
    if (!skin || typeof scaleMaterial === 'undefined') return;

    // Apply colors to lizard materials
    if (scaleMaterial) scaleMaterial.color.setHex(skin.colors.scale);
    if (typeof bellyMaterial !== 'undefined' && bellyMaterial) bellyMaterial.color.setHex(skin.colors.belly);

    // Special emissive for neon skin
    if (skin.colors.emissive) {
        scaleMaterial.emissive.setHex(skin.colors.emissive);
        scaleMaterial.emissiveIntensity = 0.3;
    } else if (!state.isInvincible) {
        scaleMaterial.emissive.setHex(0x000000);
        scaleMaterial.emissiveIntensity = 0;
    }

    // Remove old monkey parts if any
    monkeyParts.forEach(part => {
        if (part.parent) part.parent.remove(part);
    });
    monkeyParts = [];

    // Control visibility of ALL lizard parts
    const isMonkey = (skinId === 'monkey');

    // Hide/show lizard specific parts
    if (typeof snoutMesh !== 'undefined' && snoutMesh) snoutMesh.visible = !isMonkey;
    if (typeof jawMesh !== 'undefined' && jawMesh) jawMesh.visible = !isMonkey;
    if (typeof tail !== 'undefined' && tail) tail.visible = !isMonkey;
    if (typeof tailSegments !== 'undefined') {
        tailSegments.forEach(seg => { if (seg) seg.visible = !isMonkey; });
    }
    // Hide lizard head parts
    if (typeof headGroup !== 'undefined') {
        headGroup.children.forEach(child => {
            // Only hide default lizard parts, not our monkey parts
            if (!monkeyParts.includes(child)) {
                child.visible = !isMonkey;
            }
        });
    }
    // Hide/restore legs
    if (typeof legs !== 'undefined') {
        legs.forEach(leg => { if (leg) leg.visible = !isMonkey; });
    }

    // Restore body scale for non-monkey
    if (!isMonkey) {
        if (typeof hips !== 'undefined' && hips) hips.scale.set(1, 1, 1);
        if (typeof chest !== 'undefined' && chest) chest.scale.set(1, 1, 1);
    }

    // Special features for monkey skin
    if (isMonkey && typeof lizardGroup !== 'undefined') {
        // CARTOONISH MONKEY - Curious George style!
        const furColor = 0xA0522D; // Sienna brown
        const faceColor = 0xFFDFC4; // Peach
        const pinkColor = 0xFFB6C1; // Pink

        const furMat = new THREE.MeshStandardMaterial({ color: furColor, roughness: 0.9 });
        const faceMat = new THREE.MeshStandardMaterial({ color: faceColor, roughness: 0.6 });
        const pinkMat = new THREE.MeshStandardMaterial({ color: pinkColor, roughness: 0.7 });
        const blackMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const whiteMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });

        const monkey = new THREE.Group();

        // ===== REFINED HEAD =====
        const headSize = 0.4; // Smaller head

        // Main head sphere (fur)
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(headSize, 24, 24),
            furMat
        );
        head.position.set(0, 0.85, 0.12);
        head.scale.set(1, 0.95, 0.9);
        monkey.add(head);

        // Face area (heart-shape, lighter)
        const face = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 20, 20),
            faceMat
        );
        face.position.set(0, 0.78, 0.28);
        face.scale.set(1, 0.95, 0.45);
        monkey.add(face);

        // ===== EARS (Mickey Mouse style - big round) =====
        [1, -1].forEach(side => {
            // Big outer ear
            const ear = new THREE.Mesh(
                new THREE.SphereGeometry(0.2, 18, 18),
                furMat
            );
            ear.position.set(side * 0.42, 0.88, -0.1);
            ear.scale.set(0.25, 0.9, 0.7);
            monkey.add(ear);

            // Pink inner ear
            const innerEar = new THREE.Mesh(
                new THREE.SphereGeometry(0.14, 16, 16),
                pinkMat
            );
            innerEar.position.set(side * 0.44, 0.88, -0.04);
            innerEar.scale.set(0.18, 0.65, 0.5);
            monkey.add(innerEar);
        });

        // ===== EYES =====
        [1, -1].forEach(side => {
            // Eye socket
            const eyeSocket = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 12, 12),
                new THREE.MeshStandardMaterial({ color: 0x8B7355, roughness: 0.9 })
            );
            eyeSocket.position.set(side * 0.16, 0.98, 0.42);
            eyeSocket.scale.set(1.1, 1.2, 0.4);
            monkey.add(eyeSocket);

            // Eye white
            const eyeWhite = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 14, 14),
                whiteMat
            );
            eyeWhite.position.set(side * 0.16, 0.98, 0.45);
            eyeWhite.scale.set(1, 1.1, 0.5);
            monkey.add(eyeWhite);

            // Iris
            const iris = new THREE.Mesh(
                new THREE.SphereGeometry(0.045, 12, 12),
                new THREE.MeshStandardMaterial({ color: 0x4A3728 })
            );
            iris.position.set(side * 0.16, 0.98, 0.5);
            monkey.add(iris);

            // Pupil
            const pupil = new THREE.Mesh(
                new THREE.SphereGeometry(0.025, 10, 10),
                blackMat
            );
            pupil.position.set(side * 0.16, 0.98, 0.52);
            monkey.add(pupil);

            // Eye shine
            const shine = new THREE.Mesh(
                new THREE.SphereGeometry(0.012, 8, 8),
                whiteMat
            );
            shine.position.set(side * 0.14, 1.0, 0.53);
            monkey.add(shine);

            // Eyelid
            const eyelid = new THREE.Mesh(
                new THREE.SphereGeometry(0.09, 12, 12, 0, Math.PI * 2, 0, Math.PI / 3),
                faceMat
            );
            eyelid.position.set(side * 0.16, 1.04, 0.43);
            eyelid.rotation.x = -0.2;
            eyelid.scale.set(1, 0.5, 0.4);
            monkey.add(eyelid);
        });

        // Muzzle/snout
        const muzzle = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 14, 14),
            faceMat
        );
        muzzle.position.set(0, 0.72, 0.5);
        muzzle.scale.set(1.1, 0.75, 0.75);
        monkey.add(muzzle);

        // Nose
        const nose = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 10, 10),
            pinkMat
        );
        nose.position.set(0, 0.76, 0.68);
        nose.scale.set(1.2, 0.75, 0.55);
        monkey.add(nose);

        // Nostrils
        [1, -1].forEach(side => {
            const nostril = new THREE.Mesh(
                new THREE.SphereGeometry(0.025, 8, 8),
                blackMat
            );
            nostril.position.set(side * 0.05, 0.77, 0.87);
            monkey.add(nostril);
        });

        // Smile
        const smile = new THREE.Mesh(
            new THREE.TorusGeometry(0.12, 0.02, 8, 16, Math.PI),
            blackMat
        );
        smile.rotation.x = Math.PI / 2;
        smile.rotation.z = Math.PI;
        smile.position.set(0, 0.62, 0.7);
        monkey.add(smile);

        // ===== SMALL BODY =====
        const bodyG = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 14, 14),
            furMat
        );
        bodyG.position.set(0, 0.25, 0);
        bodyG.scale.set(1, 1.1, 0.9);
        monkey.add(bodyG);

        // Belly
        const belly = new THREE.Mesh(
            new THREE.SphereGeometry(0.28, 12, 12),
            faceMat
        );
        belly.position.set(0, 0.22, 0.12);
        belly.scale.set(0.9, 1, 0.7);
        monkey.add(belly);

        // ===== LONG ARMS =====
        [1, -1].forEach(side => {
            // Arm
            const arm = new THREE.Mesh(
                new THREE.CylinderGeometry(0.06, 0.05, 0.6, 8),
                furMat
            );
            arm.position.set(side * 0.4, 0.1, 0.1);
            arm.rotation.z = side * 0.6;
            monkey.add(arm);

            // Hand
            const hand = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 10, 10),
                faceMat
            );
            hand.position.set(side * 0.6, -0.15, 0.15);
            monkey.add(hand);
        });

        // ===== SHORT LEGS =====
        [1, -1].forEach(side => {
            const leg = new THREE.Mesh(
                new THREE.CylinderGeometry(0.07, 0.06, 0.3, 8),
                furMat
            );
            leg.position.set(side * 0.18, -0.1, 0);
            monkey.add(leg);

            const foot = new THREE.Mesh(
                new THREE.SphereGeometry(0.07, 10, 10),
                faceMat
            );
            foot.position.set(side * 0.18, -0.28, 0.05);
            foot.scale.set(0.8, 0.5, 1.3);
            monkey.add(foot);
        });

        // ===== CURLY TAIL =====
        for (let i = 0; i < 10; i++) {
            const seg = new THREE.Mesh(
                new THREE.SphereGeometry(0.04 - i * 0.003, 8, 8),
                furMat
            );
            const angle = i * 0.5;
            seg.position.set(
                Math.sin(angle) * 0.12,
                0.2 - i * 0.03,
                -0.35 - i * 0.04 + Math.cos(angle) * 0.06
            );
            monkey.add(seg);
        }

        // Position and scale monkey - raised up from ground
        monkey.position.set(0, 0.3, 0.15);
        monkey.scale.set(1.0, 1.0, 1.0);
        lizardGroup.add(monkey);
        monkeyParts.push(monkey);

        // Hide ALL lizard parts
        if (typeof hips !== 'undefined' && hips) hips.visible = false;
        if (typeof chest !== 'undefined' && chest) chest.visible = false;
        if (typeof headGroup !== 'undefined') headGroup.visible = false;
    } else if (skinId === 'classic' && typeof lizardGroup !== 'undefined') {
        // CLASSIC SKIN - Matches patukka lisko.jpeg exactly
        const mainGreen = 0x2ECC40; // Bright lime green
        const mainMat = new THREE.MeshStandardMaterial({
            color: mainGreen,
            roughness: 0.4,
            metalness: 0.1
        });
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
        const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111111 });

        const stickLizard = new THREE.Group();

        // BODY - cylinder shape (compatible with all THREE.js versions)
        const body = new THREE.Mesh(
            new THREE.CylinderGeometry(0.28, 0.28, 1.2, 16),
            mainMat
        );
        body.rotation.x = Math.PI / 2;
        body.position.set(0, 0.55, 0);
        stickLizard.add(body);

        // HEAD - large sphere slightly in front
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            mainMat
        );
        head.position.set(0, 0.58, 0.7);
        stickLizard.add(head);

        // EYES - big round eyes on sides (like image)
        [1, -1].forEach(side => {
            // White eye
            const eye = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 12, 12),
                eyeMat
            );
            eye.position.set(side * 0.2, 0.7, 0.85);
            stickLizard.add(eye);

            // Black pupil
            const pupil = new THREE.Mesh(
                new THREE.SphereGeometry(0.05, 10, 10),
                pupilMat
            );
            pupil.position.set(side * 0.22, 0.7, 0.93);
            stickLizard.add(pupil);
        });

        // TAIL - long tapered (like image)
        const tail = new THREE.Mesh(
            new THREE.ConeGeometry(0.15, 1.5, 8),
            mainMat
        );
        tail.rotation.x = -Math.PI / 2;
        tail.position.set(0, 0.52, -1.2);
        stickLizard.add(tail);

        // LEGS - 4 short stubby legs (like image)
        // Front legs
        [1, -1].forEach(side => {
            const frontLeg = new THREE.Mesh(
                new THREE.CylinderGeometry(0.06, 0.05, 0.35, 8),
                mainMat
            );
            frontLeg.position.set(side * 0.25, 0.3, 0.25);
            frontLeg.rotation.z = side * 0.6;
            stickLizard.add(frontLeg);
        });

        // Back legs
        [1, -1].forEach(side => {
            const backLeg = new THREE.Mesh(
                new THREE.CylinderGeometry(0.06, 0.05, 0.35, 8),
                mainMat
            );
            backLeg.position.set(side * 0.25, 0.3, -0.3);
            backLeg.rotation.z = side * 0.5;
            stickLizard.add(backLeg);
        });

        stickLizard.position.set(0, 0, 0);
        lizardGroup.add(stickLizard);
        monkeyParts.push(stickLizard);

        // Hide realistic lizard
        if (typeof hips !== 'undefined' && hips) hips.visible = false;
        if (typeof chest !== 'undefined' && chest) chest.visible = false;
        if (typeof headGroup !== 'undefined') headGroup.visible = false;
        if (typeof tailSegments !== 'undefined') {
            tailSegments.forEach(seg => { if (seg) seg.visible = false; });
        }
    } else if (skinId === 'fish' && typeof lizardGroup !== 'undefined') {
        // FISH SKIN - Matches kala.jpg from specs
        const fishBlue = 0x3498DB; // Nice blue
        const fishLight = 0x85C1E9; // Light blue belly
        const fishOrange = 0xE67E22; // Orange fins

        const fishMat = new THREE.MeshStandardMaterial({ color: fishBlue, roughness: 0.4, metalness: 0.2 });
        const bellyMat = new THREE.MeshStandardMaterial({ color: fishLight, roughness: 0.5 });
        const finMat = new THREE.MeshStandardMaterial({ color: fishOrange, roughness: 0.6, side: THREE.DoubleSide });
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
        const pupilMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

        const fish = new THREE.Group();

        // BODY - oval fish shape
        const body = new THREE.Mesh(
            new THREE.SphereGeometry(0.4, 20, 16),
            fishMat
        );
        body.position.set(0, 0.6, 0);
        body.scale.set(0.8, 0.7, 1.5);
        fish.add(body);

        // BELLY - lighter underside
        const belly = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 16, 12),
            bellyMat
        );
        belly.position.set(0, 0.52, 0);
        belly.scale.set(0.7, 0.5, 1.3);
        fish.add(belly);

        // HEAD area (front of fish)
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 14, 14),
            fishMat
        );
        head.position.set(0, 0.62, 0.55);
        head.scale.set(0.9, 0.85, 0.8);
        fish.add(head);

        // EYES
        [1, -1].forEach(side => {
            const eye = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 12, 12),
                eyeMat
            );
            eye.position.set(side * 0.18, 0.7, 0.65);
            fish.add(eye);

            const pupil = new THREE.Mesh(
                new THREE.SphereGeometry(0.04, 10, 10),
                pupilMat
            );
            pupil.position.set(side * 0.2, 0.7, 0.71);
            fish.add(pupil);
        });

        // MOUTH
        const mouth = new THREE.Mesh(
            new THREE.TorusGeometry(0.06, 0.015, 8, 16, Math.PI),
            pupilMat
        );
        mouth.rotation.x = Math.PI / 2;
        mouth.rotation.z = Math.PI;
        mouth.position.set(0, 0.55, 0.78);
        fish.add(mouth);

        // TAIL FIN - Two lobes (V-shape like real fish)
        // Tail base
        const tailBase = new THREE.Mesh(
            new THREE.CylinderGeometry(0.12, 0.08, 0.3, 8),
            fishMat
        );
        tailBase.rotation.x = Math.PI / 2;
        tailBase.position.set(0, 0.58, -0.55);
        fish.add(tailBase);

        // Upper tail lobe
        const tailUpper = new THREE.Mesh(
            new THREE.ConeGeometry(0.18, 0.45, 6),
            finMat
        );
        tailUpper.rotation.x = Math.PI / 2 + 0.5;
        tailUpper.position.set(0, 0.75, -0.85);
        tailUpper.scale.set(0.25, 1, 0.8);
        fish.add(tailUpper);

        // Lower tail lobe
        const tailLower = new THREE.Mesh(
            new THREE.ConeGeometry(0.18, 0.45, 6),
            finMat
        );
        tailLower.rotation.x = Math.PI / 2 - 0.5;
        tailLower.position.set(0, 0.42, -0.85);
        tailLower.scale.set(0.25, 1, 0.8);
        fish.add(tailLower);

        // DORSAL FIN (top)
        const dorsalFin = new THREE.Mesh(
            new THREE.ConeGeometry(0.15, 0.4, 4),
            finMat
        );
        dorsalFin.position.set(0, 1.0, 0);
        dorsalFin.rotation.z = 0;
        dorsalFin.scale.set(0.3, 1, 1.5);
        fish.add(dorsalFin);

        // SIDE FINS (pectoral)
        [1, -1].forEach(side => {
            const sideFin = new THREE.Mesh(
                new THREE.ConeGeometry(0.12, 0.25, 4),
                finMat
            );
            sideFin.position.set(side * 0.3, 0.5, 0.2);
            sideFin.rotation.z = side * -0.8;
            sideFin.rotation.x = 0.3;
            sideFin.scale.set(0.4, 1, 1);
            fish.add(sideFin);
        });

        // SCALES pattern (decorative stripes)
        for (let i = 0; i < 3; i++) {
            const stripe = new THREE.Mesh(
                new THREE.BoxGeometry(0.5, 0.02, 0.08),
                bellyMat
            );
            stripe.position.set(0, 0.65, -0.2 + i * 0.25);
            fish.add(stripe);
        }

        fish.position.set(0, 0, 0.1);
        lizardGroup.add(fish);
        monkeyParts.push(fish);

        // Hide lizard
        if (typeof hips !== 'undefined' && hips) hips.visible = false;
        if (typeof chest !== 'undefined' && chest) chest.visible = false;
        if (typeof headGroup !== 'undefined') headGroup.visible = false;
        if (typeof tailSegments !== 'undefined') {
            tailSegments.forEach(seg => { if (seg) seg.visible = false; });
        }
    } else if (skinId === 'bee' && typeof lizardGroup !== 'undefined') {
        // BEE SKIN — chubby black-and-yellow bee with wings, antennae, stinger
        const yellowMat = new THREE.MeshStandardMaterial({ color: 0xffc107, roughness: 0.5 });
        const blackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6 });
        const wingMat = new THREE.MeshStandardMaterial({
            color: 0xeaf6ff, transparent: true, opacity: 0.45, roughness: 0.2, side: THREE.DoubleSide
        });
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
        const eyeShineMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

        const bee = new THREE.Group();

        // ===== BODY (segmented stripes) =====
        // Three segments, alternating yellow/black, slightly tapered toward back
        const segments = [
            { y: 0.65, z: 0.35, r: 0.32, color: yellowMat, sy: 0.95 },
            { y: 0.65, z: 0.05, r: 0.36, color: blackMat, sy: 1.0 },
            { y: 0.65, z: -0.25, r: 0.34, color: yellowMat, sy: 0.95 },
            { y: 0.65, z: -0.55, r: 0.28, color: blackMat, sy: 0.9 },
            { y: 0.65, z: -0.8, r: 0.2, color: yellowMat, sy: 0.85 }
        ];
        segments.forEach(s => {
            const seg = new THREE.Mesh(new THREE.SphereGeometry(s.r, 18, 14), s.color);
            seg.position.set(0, s.y, s.z);
            seg.scale.set(1, s.sy, 1);
            bee.add(seg);
        });

        // ===== HEAD (round black) =====
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 18), blackMat);
        head.position.set(0, 0.7, 0.65);
        head.scale.set(1, 0.95, 0.95);
        bee.add(head);

        // Eyes — large compound (dark with shine)
        [1, -1].forEach(side => {
            const eye = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 14), eyeMat);
            eye.position.set(side * 0.16, 0.78, 0.85);
            eye.scale.set(0.9, 1.1, 0.6);
            bee.add(eye);

            const shine = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), eyeShineMat);
            shine.position.set(side * 0.18, 0.85, 0.93);
            bee.add(shine);
        });

        // Smile — small curved torus
        const smile = new THREE.Mesh(
            new THREE.TorusGeometry(0.08, 0.018, 8, 16, Math.PI),
            blackMat
        );
        smile.rotation.x = Math.PI / 2;
        smile.rotation.z = Math.PI;
        smile.position.set(0, 0.62, 0.94);
        bee.add(smile);

        // ===== ANTENNAE (two thin sticks with bulb tips) =====
        [1, -1].forEach(side => {
            const stalk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.015, 0.015, 0.32, 6),
                blackMat
            );
            stalk.position.set(side * 0.08, 0.95, 0.7);
            stalk.rotation.z = side * -0.25;
            stalk.rotation.x = -0.25;
            bee.add(stalk);

            const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), blackMat);
            bulb.position.set(side * 0.13, 1.1, 0.62);
            bee.add(bulb);
        });

        // ===== WINGS (two pairs, translucent) =====
        [1, -1].forEach(side => {
            // Upper (larger) wing
            const upperWing = new THREE.Mesh(
                new THREE.SphereGeometry(0.32, 14, 10),
                wingMat
            );
            upperWing.position.set(side * 0.35, 1.0, 0.0);
            upperWing.rotation.z = side * 0.4;
            upperWing.scale.set(1.2, 0.08, 0.7);
            bee.add(upperWing);

            // Lower (smaller) wing
            const lowerWing = new THREE.Mesh(
                new THREE.SphereGeometry(0.22, 12, 10),
                wingMat
            );
            lowerWing.position.set(side * 0.32, 0.95, -0.18);
            lowerWing.rotation.z = side * 0.35;
            lowerWing.scale.set(1.0, 0.08, 0.6);
            bee.add(lowerWing);
        });

        // ===== STINGER (small black cone at the back) =====
        const stinger = new THREE.Mesh(
            new THREE.ConeGeometry(0.08, 0.22, 8),
            blackMat
        );
        stinger.rotation.x = Math.PI / 2;
        stinger.position.set(0, 0.65, -1.02);
        bee.add(stinger);

        // ===== TINY LEGS (3 pairs of short stubby black legs) =====
        const legZs = [0.25, 0.0, -0.25];
        legZs.forEach(z => {
            [1, -1].forEach(side => {
                const leg = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.025, 0.02, 0.22, 6),
                    blackMat
                );
                leg.position.set(side * 0.32, 0.42, z);
                leg.rotation.z = side * 0.6;
                bee.add(leg);
            });
        });

        bee.position.set(0, 0, 0.05);
        lizardGroup.add(bee);
        monkeyParts.push(bee);

        // Hide lizard parts
        if (typeof hips !== 'undefined' && hips) hips.visible = false;
        if (typeof chest !== 'undefined' && chest) chest.visible = false;
        if (typeof headGroup !== 'undefined') headGroup.visible = false;
        if (typeof tailSegments !== 'undefined') {
            tailSegments.forEach(seg => { if (seg) seg.visible = false; });
        }
        if (typeof legs !== 'undefined') {
            legs.forEach(leg => { if (leg) leg.visible = false; });
        }
    } else if (skinId === 'ghost' && typeof lizardGroup !== 'undefined') {
        // GHOST SKIN — translucent white spectre with rounded top, wavy hem, hollow eyes
        const ghostMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0xccccff,
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0.82,
            roughness: 0.35,
            metalness: 0.0
        });
        const innerMat = new THREE.MeshStandardMaterial({ color: 0x111122 });

        const ghost = new THREE.Group();

        // Rounded head/top dome
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 24), ghostMat);
        head.position.set(0, 1.05, 0);
        head.scale.set(1.0, 1.05, 0.95);
        ghost.add(head);

        // Body cylinder (the "sheet") fading down
        const body = new THREE.Mesh(
            new THREE.CylinderGeometry(0.55, 0.55, 0.85, 24, 1, true),
            ghostMat
        );
        body.position.set(0, 0.6, 0);
        body.material.side = THREE.DoubleSide;
        ghost.add(body);

        // Wavy hem — 5 round bumps around the bottom front + 3 back
        const frontAngles = [-1.0, -0.5, 0, 0.5, 1.0];
        frontAngles.forEach(a => {
            const bump = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), ghostMat);
            bump.position.set(Math.sin(a) * 0.46, 0.18, Math.cos(a) * 0.46 - 0.02);
            ghost.add(bump);
        });
        [-0.42, 0, 0.42].forEach(x => {
            const back = new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 10), ghostMat);
            back.position.set(x, 0.18, -0.42);
            ghost.add(back);
        });

        // Cap the top of the cylinder visually with another small sphere (so head & body blend)
        const collar = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), ghostMat);
        collar.position.set(0, 1.05, 0);
        collar.scale.set(1.0, 0.4, 0.95);
        ghost.add(collar);

        // Big hollow oval eyes (black)
        [1, -1].forEach(side => {
            const eye = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), innerMat);
            eye.position.set(side * 0.2, 1.1, 0.45);
            eye.scale.set(1.0, 1.4, 0.55);
            ghost.add(eye);
        });

        // Open "Boo" mouth
        const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), innerMat);
        mouth.position.set(0, 0.82, 0.5);
        mouth.scale.set(1.1, 1.3, 0.55);
        ghost.add(mouth);

        // Soft glow halo (slightly larger transparent sphere around head)
        const haloMat = new THREE.MeshBasicMaterial({
            color: 0xb0c8ff, transparent: true, opacity: 0.18, side: THREE.BackSide
        });
        const halo = new THREE.Mesh(new THREE.SphereGeometry(0.7, 20, 16), haloMat);
        halo.position.set(0, 1.0, 0);
        ghost.add(halo);

        // Slight float offset (so it hovers above the ground)
        ghost.position.set(0, 0.15, 0.1);
        lizardGroup.add(ghost);
        monkeyParts.push(ghost);

        // Hide lizard parts
        if (typeof hips !== 'undefined' && hips) hips.visible = false;
        if (typeof chest !== 'undefined' && chest) chest.visible = false;
        if (typeof headGroup !== 'undefined') headGroup.visible = false;
        if (typeof tailSegments !== 'undefined') {
            tailSegments.forEach(seg => { if (seg) seg.visible = false; });
        }
        if (typeof legs !== 'undefined') {
            legs.forEach(leg => { if (leg) leg.visible = false; });
        }
    } else if (SPECIAL_SKIN_BUILDERS[skinId] && typeof lizardGroup !== 'undefined') {
        const part = SPECIAL_SKIN_BUILDERS[skinId]();
        lizardGroup.add(part);
        monkeyParts.push(part);
        hideLizardForCustom();
    } else {
        // Show lizard parts for normal skins
        if (typeof hips !== 'undefined' && hips) hips.visible = true;
        if (typeof chest !== 'undefined' && chest) chest.visible = true;
        if (typeof headGroup !== 'undefined') headGroup.visible = true;
        if (typeof tail !== 'undefined' && tail) tail.visible = true;
        if (typeof tailSegments !== 'undefined') {
            tailSegments.forEach(seg => { if (seg) seg.visible = true; });
        }
    }
}

// ============ CUSTOM SKIN BUILDERS (themed creatures) ============
function hideLizardForCustom() {
    if (typeof hips !== 'undefined' && hips) hips.visible = false;
    if (typeof chest !== 'undefined' && chest) chest.visible = false;
    if (typeof headGroup !== 'undefined') headGroup.visible = false;
    if (typeof tail !== 'undefined' && tail) tail.visible = false;
    if (typeof tailSegments !== 'undefined') tailSegments.forEach(s => { if (s) s.visible = false; });
    if (typeof legs !== 'undefined') legs.forEach(l => { if (l) l.visible = false; });
    if (typeof snoutMesh !== 'undefined' && snoutMesh) snoutMesh.visible = false;
    if (typeof jawMesh !== 'undefined' && jawMesh) jawMesh.visible = false;
}

function buildQuadruped(opts) {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: opts.bodyColor, roughness: 0.7 });
    const bellyMat = new THREE.MeshStandardMaterial({ color: opts.bellyColor, roughness: 0.7 });
    const patMat = opts.pattern ? new THREE.MeshStandardMaterial({ color: opts.patternColor, roughness: 0.6 }) : null;
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    // Body
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), bodyMat);
    body.position.set(0, 0.6, 0); body.scale.set(0.85, 0.7, 1.4); g.add(body);
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 10), bellyMat);
    belly.position.set(0, 0.5, 0); belly.scale.set(0.7, 0.4, 1.3); g.add(belly);
    // Head
    let head;
    if (opts.headType === 'horse') {
        head = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.55, 12), bodyMat);
        head.rotation.x = -Math.PI / 2.5; head.position.set(0, 0.95, 0.85);
    } else {
        head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), bodyMat);
        head.position.set(0, 0.78, 0.78); head.scale.set(1, 0.95, 1.1);
    }
    g.add(head);
    // Ears
    if (opts.headType === 'cat') {
        [1, -1].forEach(side => {
            const ear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.25, 4), bodyMat);
            ear.position.set(side * 0.13, 1.0, 0.7); g.add(ear);
        });
    } else if (opts.headType === 'dog' || opts.headType === 'wolf') {
        [1, -1].forEach(side => {
            const ear = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), bodyMat);
            ear.position.set(side * 0.18, 0.98, 0.65); ear.scale.set(0.4, 0.9, 0.7); g.add(ear);
        });
    } else if (opts.headType === 'horse') {
        [1, -1].forEach(side => {
            const ear = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.18, 6), bodyMat);
            ear.position.set(side * 0.1, 1.18, 0.78); g.add(ear);
        });
    }
    // Snout
    const snout = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), bellyMat);
    snout.position.set(0, 0.7, 1.0); snout.scale.set(0.9, 0.7, 0.9); g.add(snout);
    // Nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), blackMat);
    nose.position.set(0, 0.72, 1.1); g.add(nose);
    // Eyes
    [1, -1].forEach(side => {
        const ew = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), whiteMat);
        ew.position.set(side * 0.13, 0.86, 0.95); g.add(ew);
        const pup = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), blackMat);
        pup.position.set(side * 0.13, 0.86, 1.0); g.add(pup);
    });
    // Legs
    [[0.25, 0.5], [0.25, -0.5], [-0.25, 0.5], [-0.25, -0.5]].forEach(([x, z]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), bodyMat);
        leg.position.set(x, 0.25, z); g.add(leg);
    });
    // Tail
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.1, opts.headType === 'horse' ? 0.7 : 0.5, 8), bodyMat);
    tail.rotation.x = -Math.PI / 6; tail.position.set(0, 0.6, -0.85); g.add(tail);
    if (opts.headType === 'horse' || opts.headType === 'wolf') {
        for (let i = 0; i < 3; i++) {
            const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), bodyMat);
            tuft.position.set(0, 0.45 - i * 0.1, -1.05 - i * 0.05); g.add(tuft);
        }
    }
    // Pattern
    if (opts.pattern === 'spots' && patMat) {
        for (let i = 0; i < 14; i++) {
            const r = 0.04 + Math.random() * 0.03;
            const sp = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), patMat);
            const a = Math.random() * Math.PI * 2;
            sp.position.set(Math.cos(a) * 0.43 * (0.7 + Math.random() * 0.3),
                0.5 + Math.random() * 0.4,
                -0.7 + Math.random() * 1.4);
            sp.scale.set(1, 0.3, 1); g.add(sp);
        }
    } else if (opts.pattern === 'stripes' && patMat) {
        for (let i = 0; i < 8; i++) {
            const st = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.04, 0.07), patMat);
            st.position.set(0, 0.55, -0.65 + i * 0.18); g.add(st);
        }
    } else if (opts.pattern === 'spotsLarge' && patMat) {
        for (let i = 0; i < 9; i++) {
            const sp = new THREE.Mesh(new THREE.SphereGeometry(0.07 + Math.random() * 0.03, 10, 6), patMat);
            const a = Math.random() * Math.PI * 2;
            sp.position.set(Math.cos(a) * 0.43 * (0.7 + Math.random() * 0.3),
                0.5 + Math.random() * 0.4,
                -0.7 + Math.random() * 1.4);
            sp.scale.set(1, 0.35, 1); g.add(sp);
        }
    }
    return g;
}

function buildTiger() { return buildQuadruped({ bodyColor: 0xff6600, bellyColor: 0xffffff, headType: 'cat', pattern: 'stripes', patternColor: 0x000000 }); }
function buildLeopard() { return buildQuadruped({ bodyColor: 0xc8a45a, bellyColor: 0xfff0c0, headType: 'cat', pattern: 'spots', patternColor: 0x3a2511 }); }
function buildZebra() { return buildQuadruped({ bodyColor: 0xffffff, bellyColor: 0xeeeeee, headType: 'horse', pattern: 'stripes', patternColor: 0x000000 }); }
function buildDalmatian() { return buildQuadruped({ bodyColor: 0xffffff, bellyColor: 0xeeeeee, headType: 'dog', pattern: 'spotsLarge', patternColor: 0x111111 }); }
function buildWerewolf() { return buildQuadruped({ bodyColor: 0x4a3520, bellyColor: 0x664d33, headType: 'wolf', pattern: null }); }

function buildMecha() {
    const g = new THREE.Group();
    const grayMat = new THREE.MeshStandardMaterial({ color: 0x6a6a6a, roughness: 0.4, metalness: 0.7 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x303030, roughness: 0.5, metalness: 0.6 });
    const cyanMat = new THREE.MeshStandardMaterial({ color: 0x00ddff, emissive: 0x00ddff, emissiveIntensity: 1.2 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 1.0 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.5), grayMat);
    torso.position.y = 0.7; g.add(torso);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 0.4), darkMat);
    head.position.set(0, 1.2, 0); g.add(head);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.05), cyanMat);
    visor.position.set(0, 1.22, 0.21); g.add(visor);
    [1, -1].forEach(side => {
        const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.25, 6), darkMat);
        ant.position.set(side * 0.15, 1.5, -0.05); g.add(ant);
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), redMat);
        tip.position.set(side * 0.15, 1.65, -0.05); g.add(tip);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.5, 0.2), darkMat);
        arm.position.set(side * 0.45, 0.7, 0); g.add(arm);
        const fist = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), grayMat);
        fist.position.set(side * 0.45, 0.4, 0); g.add(fist);
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.5, 0.2), darkMat);
        leg.position.set(side * 0.18, 0.25, 0); g.add(leg);
    });
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.2), darkMat);
    pack.position.set(0, 0.7, -0.3); g.add(pack);
    const chestLight = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), cyanMat);
    chestLight.position.set(0, 0.85, 0.26); g.add(chestLight);
    return g;
}

function buildKraken() {
    const g = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x4a1f5a, roughness: 0.5 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xff8800, emissiveIntensity: 0.5 });
    const pupMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.55, 22, 18), skinMat);
    head.position.set(0, 0.85, 0); head.scale.set(1, 1.15, 1); g.add(head);
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 14), eyeMat);
        eye.position.set(side * 0.22, 0.95, 0.4); g.add(eye);
        const pup = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), pupMat);
        pup.position.set(side * 0.22, 0.95, 0.5); g.add(pup);
    });
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const baseX = Math.cos(angle) * 0.42;
        const baseZ = Math.sin(angle) * 0.42;
        for (let j = 0; j < 5; j++) {
            const seg = new THREE.Mesh(new THREE.SphereGeometry(0.13 - j * 0.018, 10, 8), skinMat);
            const sway = Math.sin(j * 0.4) * 0.18;
            seg.position.set(
                baseX * (1 + j * 0.18) + sway * Math.cos(angle + Math.PI / 2),
                0.45 - j * 0.1,
                baseZ * (1 + j * 0.18) + sway * Math.sin(angle + Math.PI / 2)
            );
            g.add(seg);
        }
    }
    return g;
}

function buildHydra() {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x008b8b, roughness: 0.5 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xff6600, emissiveIntensity: 0.6 });
    const fangMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 16), bodyMat);
    body.position.set(0, 0.5, 0); body.scale.set(1, 0.85, 1.1); g.add(body);
    for (let i = 0; i < 5; i++) {
        const seg = new THREE.Mesh(new THREE.SphereGeometry(0.18 - i * 0.025, 10, 8), bodyMat);
        seg.position.set(0, 0.45 - i * 0.05, -0.5 - i * 0.18); g.add(seg);
    }
    const necks = [[0, 1.55, 0.35], [-0.5, 1.35, 0.35], [0.5, 1.35, 0.35]];
    necks.forEach(([dx, hy, dz]) => {
        for (let i = 0; i < 5; i++) {
            const t = i / 4;
            const seg = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), bodyMat);
            seg.position.set(dx * t, 0.55 + (hy - 0.55) * t, dz * t);
            g.add(seg);
        }
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 12), bodyMat);
        head.position.set(dx, hy, dz); g.add(head);
        const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), eyeMat);
        e1.position.set(dx + 0.07, hy + 0.06, dz + 0.13); g.add(e1);
        const e2 = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), eyeMat);
        e2.position.set(dx - 0.07, hy + 0.06, dz + 0.13); g.add(e2);
        const fang = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 6), fangMat);
        fang.rotation.x = Math.PI; fang.position.set(dx, hy - 0.13, dz + 0.13); g.add(fang);
    });
    return g;
}

function buildPhoenix() {
    const g = new THREE.Group();
    const fireMat = new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff5511, emissiveIntensity: 0.6, roughness: 0.4 });
    const yelMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffaa00, emissiveIntensity: 0.5 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 18, 14), fireMat);
    body.position.set(0, 0.7, 0); body.scale.set(1, 1.2, 0.9); g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), fireMat);
    head.position.set(0, 1.1, 0.18); g.add(head);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 8), yelMat);
    beak.rotation.x = Math.PI / 2; beak.position.set(0, 1.05, 0.45); g.add(beak);
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), blackMat);
        eye.position.set(side * 0.12, 1.15, 0.32); g.add(eye);
        const w = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), fireMat);
        w.position.set(side * 0.45, 0.85, -0.05); w.scale.set(1.6, 0.08, 1.2); w.rotation.z = side * 0.5; g.add(w);
        const tip = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 6), yelMat);
        tip.position.set(side * 0.95, 1.05, -0.05); tip.rotation.z = side * Math.PI / 2; g.add(tip);
    });
    for (let i = -2; i <= 2; i++) {
        const tf = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.6 + Math.abs(i) * 0.05, 6), i % 2 === 0 ? fireMat : yelMat);
        tf.position.set(i * 0.12, 0.5, -0.5);
        tf.rotation.x = Math.PI - 0.3; tf.rotation.z = i * 0.15; g.add(tf);
    }
    for (let i = -1; i <= 1; i++) {
        const c = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 6), yelMat);
        c.position.set(i * 0.1, 1.4, 0.15); g.add(c);
    }
    return g;
}

function buildDragon() {
    const g = new THREE.Group();
    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x8b1a1a, roughness: 0.55, metalness: 0.15
    });
    const darkBodyMat = new THREE.MeshStandardMaterial({
        color: 0x4a0a0a, roughness: 0.7, metalness: 0.1, flatShading: true
    });
    const bellyMat = new THREE.MeshStandardMaterial({
        color: 0xffd700, roughness: 0.5, metalness: 0.2
    });
    const wingMembraneMat = new THREE.MeshStandardMaterial({
        color: 0x5a0a0a, roughness: 0.6, side: THREE.DoubleSide, metalness: 0.05
    });
    const wingBoneMat = new THREE.MeshStandardMaterial({
        color: 0x2a0606, roughness: 0.7
    });
    const hornMat = new THREE.MeshStandardMaterial({
        color: 0xefe2c0, roughness: 0.4, metalness: 0.2, flatShading: true
    });
    const clawMat = new THREE.MeshStandardMaterial({
        color: 0x1a0606, roughness: 0.4, metalness: 0.3
    });
    const eyeMat = new THREE.MeshStandardMaterial({
        color: 0xffe600, emissive: 0xff5500, emissiveIntensity: 1.4, roughness: 0.2
    });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x110000 });
    const fireMat = new THREE.MeshStandardMaterial({
        color: 0xff7a00, emissive: 0xff3300, emissiveIntensity: 1.8,
        roughness: 0.3, transparent: true, opacity: 0.85
    });
    const tongueMat = new THREE.MeshStandardMaterial({
        color: 0xb91c1c, roughness: 0.6
    });

    // ===== TORSO (long sinuous body — 6 segments) =====
    const torsoSegs = [
        { y: 0.55, z:  0.10, r: 0.42, sc: [1.0, 0.90, 1.3] },  // chest
        { y: 0.55, z: -0.20, r: 0.45, sc: [1.0, 0.92, 1.3] },  // upper-body
        { y: 0.55, z: -0.55, r: 0.46, sc: [1.0, 0.90, 1.3] },  // mid
        { y: 0.55, z: -0.90, r: 0.42, sc: [0.95, 0.88, 1.3] },
        { y: 0.55, z: -1.25, r: 0.36, sc: [0.90, 0.85, 1.3] },
        { y: 0.55, z: -1.60, r: 0.28, sc: [0.85, 0.80, 1.3] }
    ];
    torsoSegs.forEach(s => {
        const seg = new THREE.Mesh(new THREE.SphereGeometry(s.r, 20, 14), bodyMat);
        seg.position.set(0, s.y, s.z);
        seg.scale.set(s.sc[0], s.sc[1], s.sc[2]);
        g.add(seg);
    });

    // Belly plates (cross-hatched golden segments)
    for (let i = 0; i < 7; i++) {
        const plate = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.06, 0.22), bellyMat);
        plate.position.set(0, 0.28, 0.1 - i * 0.28);
        g.add(plate);
        // Center accent line
        const acc = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.22), darkBodyMat);
        acc.position.set(0, 0.30, 0.1 - i * 0.28);
        g.add(acc);
    }

    // ===== NECK (arching forward and slightly up) =====
    const neckSegs = [
        { y: 0.62, z: 0.40, r: 0.34 },
        { y: 0.72, z: 0.62, r: 0.30 },
        { y: 0.84, z: 0.82, r: 0.27 },
        { y: 0.95, z: 1.00, r: 0.26 }
    ];
    neckSegs.forEach(s => {
        const ns = new THREE.Mesh(new THREE.SphereGeometry(s.r, 16, 12), bodyMat);
        ns.position.set(0, s.y, s.z);
        ns.scale.set(1, 0.95, 1.1);
        g.add(ns);
    });

    // ===== HEAD =====
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), bodyMat);
    skull.position.set(0, 1.05, 1.25);
    skull.scale.set(1.15, 0.9, 1.35);
    g.add(skull);

    // Brow ridge (over the eyes)
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 0.22), darkBodyMat);
    brow.position.set(0, 1.20, 1.30);
    brow.rotation.x = -0.2;
    g.add(brow);

    // Snout (tapered cone forward)
    const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 0.55, 16), bodyMat);
    snout.rotation.x = Math.PI / 2;
    snout.position.set(0, 0.98, 1.65);
    snout.scale.set(1.1, 1.0, 1.0);
    g.add(snout);
    const snoutTip = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), bodyMat);
    snoutTip.position.set(0, 0.98, 1.94);
    snoutTip.scale.set(1.1, 0.9, 1.0);
    g.add(snoutTip);

    // Lower jaw
    const jaw = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.18, 0.50, 14), darkBodyMat);
    jaw.rotation.x = Math.PI / 2;
    jaw.position.set(0, 0.83, 1.62);
    g.add(jaw);

    // Teeth — 6 small white cones on upper jaw
    for (let i = 0; i < 6; i++) {
        const side = (i % 2 === 0) ? -1 : 1;
        const t = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.10, 5), hornMat);
        t.rotation.x = Math.PI;
        t.position.set(side * (0.06 + Math.floor(i/2) * 0.05), 0.88, 1.78 - Math.floor(i/2) * 0.03);
        g.add(t);
    }

    // Eyes (glowing yellow with dark vertical slit pupils)
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 12), eyeMat);
        eye.position.set(side * 0.20, 1.13, 1.45);
        g.add(eye);
        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.040, 8, 8), pupilMat);
        pupil.scale.set(0.4, 1.4, 0.5);
        pupil.position.set(side * 0.23, 1.13, 1.52);
        g.add(pupil);
        // White highlight
        const hl = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        hl.position.set(side * 0.22, 1.16, 1.53);
        g.add(hl);
    });

    // Nostrils (small dark dots on snout tip)
    [1, -1].forEach(side => {
        const n = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), darkBodyMat);
        n.position.set(side * 0.06, 1.02, 1.95);
        g.add(n);
    });

    // ===== HORNS — 2 big curved + 2 small =====
    [1, -1].forEach(side => {
        // Big upper horn (long, swept back, curves outward)
        const big = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.085, 0.75, 12), hornMat);
        big.geometry.translate(0, 0.375, 0);
        big.position.set(side * 0.18, 1.30, 1.10);
        big.rotation.x = -0.75;        // angle back
        big.rotation.z = side * -0.45; // splay outward
        g.add(big);
        // Big horn tip (sharper point)
        const bigTip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.20, 8), hornMat);
        bigTip.position.set(side * 0.32, 1.85, 0.65);
        bigTip.rotation.x = -0.75;
        bigTip.rotation.z = side * -0.45;
        g.add(bigTip);

        // Small secondary horn (lower side)
        const small = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.30, 8), hornMat);
        small.position.set(side * 0.28, 1.05, 1.20);
        small.rotation.z = side * -1.2;
        g.add(small);

        // Cheek frill / spike
        const frill = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.20, 6), hornMat);
        frill.position.set(side * 0.30, 0.85, 1.30);
        frill.rotation.z = side * -1.4;
        g.add(frill);
    });

    // ===== WHISKERS (Chinese-dragon style barbels) =====
    [1, -1].forEach(side => {
        const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.005, 0.55, 6), bodyMat);
        wh.position.set(side * 0.10, 0.82, 1.85);
        wh.rotation.x = 0.4;
        wh.rotation.z = side * 0.4;
        g.add(wh);
    });

    // ===== TONGUE (forked, slightly extended) =====
    const tBase = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.18, 6), tongueMat);
    tBase.rotation.x = Math.PI / 2;
    tBase.position.set(0, 0.84, 1.95);
    g.add(tBase);
    [1, -1].forEach(side => {
        const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.008, 0.16, 5), tongueMat);
        fork.rotation.x = Math.PI / 2;
        fork.rotation.y = side * 0.35;
        fork.position.set(side * 0.025, 0.84, 2.07);
        g.add(fork);
    });

    // ===== FLAME PUFF in front of mouth (small) =====
    {
        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.10, 0.30, 8), fireMat);
        flame.rotation.x = Math.PI / 2;
        flame.position.set(0, 0.92, 2.20);
        g.add(flame);
    }

    // ===== WINGS — bat-style with bones + membrane =====
    [1, -1].forEach(side => {
        // Wing arm (humerus)
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.70, 8), wingBoneMat);
        arm.geometry.translate(0, 0.35, 0);
        arm.position.set(side * 0.20, 1.00, -0.20);
        arm.rotation.z = side * 1.30;   // swept out
        arm.rotation.x = -0.20;
        g.add(arm);

        // Wing finger bones (3 ribs)
        for (let i = 0; i < 3; i++) {
            const finger = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.012, 0.95, 6), wingBoneMat);
            finger.geometry.translate(0, 0.475, 0);
            finger.position.set(side * 0.85, 1.10, -0.20);
            finger.rotation.z = side * (1.55 + i * 0.10);
            finger.rotation.x = -0.10 + i * 0.20;
            g.add(finger);
        }

        // Membrane — 3 leaf-shaped panels between fingers (flattened spheres)
        for (let i = 0; i < 3; i++) {
            const mem = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), wingMembraneMat);
            mem.position.set(side * 0.95, 0.85, -0.30 - i * 0.35);
            mem.scale.set(0.9, 0.04, 0.5);
            mem.rotation.z = side * 0.45;
            mem.rotation.x = -0.15;
            g.add(mem);
        }

        // Wing claw at top of wing fold
        const wclaw = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.18, 6), clawMat);
        wclaw.position.set(side * 0.35, 1.30, -0.10);
        wclaw.rotation.z = side * 0.4;
        g.add(wclaw);
    });

    // ===== LEGS — 4 muscular legs with clawed feet =====
    const legSpecs = [
        { x:  0.30, z:  0.20 },  // FR
        { x: -0.30, z:  0.20 },  // FL
        { x:  0.30, z: -1.05 },  // BR
        { x: -0.30, z: -1.05 }   // BL
    ];
    legSpecs.forEach(spec => {
        // Upper leg (thigh)
        const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.10, 0.40, 12), bodyMat);
        thigh.position.set(spec.x, 0.35, spec.z);
        thigh.rotation.z = Math.sign(spec.x) * -0.15;
        g.add(thigh);
        // Lower leg (shin)
        const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.30, 10), bodyMat);
        shin.position.set(spec.x * 1.08, 0.12, spec.z + 0.04);
        g.add(shin);
        // Foot
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.10, 10, 8), bodyMat);
        foot.scale.set(1.3, 0.5, 1.6);
        foot.position.set(spec.x * 1.08, 0.00, spec.z + 0.08);
        g.add(foot);
        // 3 claws per foot
        for (let i = -1; i <= 1; i++) {
            const claw = new THREE.Mesh(new THREE.ConeGeometry(0.030, 0.13, 5), clawMat);
            claw.rotation.x = -1.4;
            claw.position.set(spec.x * 1.08 + i * 0.05, -0.01, spec.z + 0.20);
            g.add(claw);
        }
    });

    // ===== DORSAL SPIKES — saw-blade row down the back from head to tail =====
    const spikeZs = [
        0.95, 0.70, 0.45, 0.20, -0.05, -0.30, -0.55, -0.80, -1.05, -1.30, -1.55, -1.78, -1.96
    ];
    spikeZs.forEach((z, i) => {
        const size = 0.30 - Math.abs(i - 4) * 0.018;
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.065, Math.max(0.10, size), 5), hornMat);
        // Slight back-lean
        sp.rotation.x = -0.2;
        // Height varies: highest near shoulders, smaller at head and tail tip
        const yLift = 0.95 - Math.abs(i - 4) * 0.04;
        sp.position.set(0, yLift, z);
        g.add(sp);
    });

    // ===== TAIL — chain of tapering segments leading to a spiked tip =====
    const tailSegs = [
        { y: 0.52, z: -1.95, r: 0.20 },
        { y: 0.50, z: -2.20, r: 0.16 },
        { y: 0.48, z: -2.45, r: 0.13 },
        { y: 0.46, z: -2.70, r: 0.10 }
    ];
    tailSegs.forEach(s => {
        const ts = new THREE.Mesh(new THREE.SphereGeometry(s.r, 14, 10), bodyMat);
        ts.position.set(0, s.y, s.z);
        ts.scale.set(1, 0.9, 1.2);
        g.add(ts);
    });
    // Spiked tail tip — fan of 3 cones
    [0, -0.4, 0.4].forEach(zaw => {
        const tip = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.30, 6), hornMat);
        tip.position.set(Math.sin(zaw) * 0.10, 0.46, -2.90 - Math.cos(zaw) * 0.05);
        tip.rotation.x = Math.PI / 2;
        tip.rotation.z = zaw;
        g.add(tip);
    });

    return g;
}

function buildUnicorn() {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffe0f0, roughness: 0.5 });
    const maneMat = new THREE.MeshStandardMaterial({ color: 0xff80c0, emissive: 0xff66aa, emissiveIntensity: 0.4 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff8d6, emissiveIntensity: 0.7 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x6633cc });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), bodyMat);
    body.position.set(0, 0.7, 0); body.scale.set(0.9, 0.85, 1.5); g.add(body);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.6, 12), bodyMat);
    neck.position.set(0, 1.0, 0.65); neck.rotation.x = -Math.PI / 4; g.add(neck);
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.45, 12), bodyMat);
    head.position.set(0, 1.2, 0.95); head.rotation.x = Math.PI / 2.5; g.add(head);
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.45, 8), hornMat);
    horn.position.set(0, 1.5, 1.0); horn.rotation.x = -0.3; g.add(horn);
    [1, -1].forEach(side => {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.18, 6), bodyMat);
        ear.position.set(side * 0.1, 1.4, 0.92); g.add(ear);
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), eyeMat);
        eye.position.set(side * 0.12, 1.18, 1.05); g.add(eye);
        const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.55, 8), bodyMat);
        leg1.position.set(side * 0.22, 0.27, 0.4); g.add(leg1);
        const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.55, 8), bodyMat);
        leg2.position.set(side * 0.22, 0.27, -0.5); g.add(leg2);
    });
    for (let i = 0; i < 4; i++) {
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), maneMat);
        m.position.set(0, 1.3 - i * 0.18, 0.7 - i * 0.08); g.add(m);
    }
    for (let i = 0; i < 3; i++) {
        const t = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), maneMat);
        t.position.set(0, 0.5 - i * 0.1, -0.85 - i * 0.1); g.add(t);
    }
    return g;
}

function buildMermaid() {
    const g = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffcba4, roughness: 0.6 });
    const tailMat = new THREE.MeshStandardMaterial({ color: 0x00bcd4, roughness: 0.5, metalness: 0.3 });
    const finMat = new THREE.MeshStandardMaterial({ color: 0x80deea, roughness: 0.4, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0xff5599, roughness: 0.5 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const torso = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), skinMat);
    torso.position.set(0, 1.1, 0); torso.scale.set(0.85, 0.9, 0.7); g.add(torso);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 12), skinMat);
    head.position.set(0, 1.55, 0); g.add(head);
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), eyeMat);
        eye.position.set(side * 0.08, 1.55, 0.22); g.add(eye);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.45, 8), skinMat);
        arm.position.set(side * 0.3, 1.0, 0); arm.rotation.z = side * 0.4; g.add(arm);
    });
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const h = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), hairMat);
        h.position.set(Math.cos(angle) * 0.18, 1.55 + Math.random() * 0.08, -0.1 + Math.sin(angle) * 0.18);
        h.scale.set(1, 1.4, 1); g.add(h);
    }
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.05, 1.0, 12), tailMat);
    tail.position.set(0, 0.45, 0); g.add(tail);
    [1, -1].forEach(side => {
        const fin = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 6), finMat);
        fin.rotation.z = side * Math.PI / 2 + side * 0.4;
        fin.position.set(side * 0.18, -0.1, 0); g.add(fin);
    });
    return g;
}

function buildVampire() {
    const g = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x300010, roughness: 0.5 });
    const capeMat = new THREE.MeshStandardMaterial({ color: 0x100008, roughness: 0.4, side: THREE.DoubleSide });
    const innerCapeMat = new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.4, side: THREE.DoubleSide });
    const fangMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.6 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), skinMat);
    body.position.set(0, 0.7, 0); body.scale.set(0.9, 1, 0.8); g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), skinMat);
    head.position.set(0, 1.15, 0); g.add(head);
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), eyeMat);
        eye.position.set(side * 0.13, 1.18, 0.22); g.add(eye);
        const fang = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.13, 6), fangMat);
        fang.rotation.x = Math.PI; fang.position.set(side * 0.06, 1.0, 0.25); g.add(fang);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.4, 8), skinMat);
        leg.position.set(side * 0.13, 0.2, 0); g.add(leg);
    });
    const cape = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 12, 0, Math.PI, 0, Math.PI),
        capeMat
    );
    cape.rotation.y = Math.PI; cape.position.set(0, 0.85, -0.1);
    cape.scale.set(1.0, 1.2, 0.5); g.add(cape);
    const collar = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.3, 6), innerCapeMat);
    collar.position.set(0, 1.4, -0.15); collar.rotation.x = -0.4; g.add(collar);
    return g;
}

function buildZombie() {
    const g = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x6b8e4a, roughness: 0.9 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x3a4a25, roughness: 0.95 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0x880000 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffaa00, emissiveIntensity: 0.5 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), skinMat);
    body.position.set(0, 0.6, 0); body.scale.set(0.85, 1, 1.2); g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 12), skinMat);
    head.position.set(0.05, 1.05, 0.1); head.rotation.z = -0.2; g.add(head);
    const eye1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), eyeMat);
    eye1.position.set(-0.08, 1.1, 0.32); g.add(eye1);
    const eye2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), eyeMat);
    eye2.position.set(0.18, 0.9, 0.3); g.add(eye2);
    const dangle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 6), redMat);
    dangle.position.set(0.18, 1.0, 0.28); g.add(dangle);
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.05), blackMat);
    mouth.position.set(0, 0.95, 0.32); g.add(mouth);
    [1, -1].forEach(side => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.5, 8), skinMat);
        arm.position.set(side * 0.35, 0.55, 0.2); arm.rotation.z = side * 0.6; g.add(arm);
        const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), skinMat);
        hand.position.set(side * 0.55, 0.35, 0.4); g.add(hand);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8), darkMat);
        leg.position.set(side * 0.13, 0.2, 0); g.add(leg);
    });
    for (let i = 0; i < 5; i++) {
        const patch = new THREE.Mesh(new THREE.SphereGeometry(0.06 + Math.random() * 0.04, 8, 6), darkMat);
        patch.position.set((Math.random() - 0.5) * 0.6, 0.5 + Math.random() * 0.5, (Math.random() - 0.5) * 0.6);
        patch.scale.set(1, 0.3, 1); g.add(patch);
    }
    return g;
}

function buildAstronaut() {
    const g = new THREE.Group();
    const suitMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0x1a1a40, transparent: true, opacity: 0.6, roughness: 0.05, metalness: 0.7 });
    const visorMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, emissive: 0x4477aa, emissiveIntensity: 0.4 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const flagMat = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 14), suitMat);
    body.position.set(0, 0.7, 0); body.scale.set(1, 1.1, 0.95); g.add(body);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), helmetMat);
    helmet.position.set(0, 1.2, 0); g.add(helmet);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 10, 0, Math.PI, Math.PI * 0.3, Math.PI * 0.4), visorMat);
    visor.position.set(0, 1.2, 0); visor.rotation.y = Math.PI / 2; g.add(visor);
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.5, 0.2), darkMat);
    pack.position.set(0, 0.7, -0.35); g.add(pack);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3, 6), darkMat);
    ant.position.set(0, 1.55, -0.2); g.add(ant);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000 }));
    tip.position.set(0, 1.7, -0.2); g.add(tip);
    [1, -1].forEach(side => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.5, 8), suitMat);
        arm.position.set(side * 0.4, 0.65, 0); arm.rotation.z = side * 0.3; g.add(arm);
        const glove = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), darkMat);
        glove.position.set(side * 0.5, 0.4, 0); g.add(glove);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.45, 8), suitMat);
        leg.position.set(side * 0.15, 0.22, 0); g.add(leg);
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.25), darkMat);
        boot.position.set(side * 0.15, 0.05, 0.05); g.add(boot);
    });
    const flag = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.08, 0.02), flagMat);
    flag.position.set(0.18, 0.85, 0.35); g.add(flag);
    return g;
}

function buildKnight() {
    const g = new THREE.Group();
    const armorMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, roughness: 0.3, metalness: 0.85 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5, metalness: 0.7 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.3, metalness: 0.9 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xc8102e });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.8, 12), armorMat);
    torso.position.set(0, 0.7, 0); g.add(torso);
    const helmet = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.4, 10), armorMat);
    helmet.position.set(0, 1.25, 0); g.add(helmet);
    const helmetTop = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10, 0, Math.PI * 2, 0, Math.PI / 2), armorMat);
    helmetTop.position.set(0, 1.45, 0); g.add(helmetTop);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.05), darkMat);
    visor.position.set(0, 1.27, 0.27); g.add(visor);
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.4, 8), redMat);
    plume.position.set(0, 1.65, 0); g.add(plume);
    [1, -1].forEach(side => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8), armorMat);
        arm.position.set(side * 0.45, 0.7, 0); g.add(arm);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.4, 8), armorMat);
        leg.position.set(side * 0.18, 0.2, 0); g.add(leg);
    });
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.7, 0.1), armorMat);
    sword.position.set(0.55, 0.85, 0.1); g.add(sword);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.06), goldMat);
    guard.position.set(0.55, 0.5, 0.1); g.add(guard);
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 12), redMat);
    shield.rotation.x = Math.PI / 2; shield.position.set(-0.55, 0.7, 0.1); g.add(shield);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.04), goldMat);
    cross.position.set(-0.55, 0.7, 0.13); g.add(cross);
    return g;
}

function buildWizard() {
    const g = new THREE.Group();
    const robeMat = new THREE.MeshStandardMaterial({ color: 0x4b0082, roughness: 0.5 });
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x2a004a, roughness: 0.5 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfde0bd, roughness: 0.6 });
    const beardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const orbMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x9333ea, emissiveIntensity: 1.0 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000033 });
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.25, 0.9, 12), robeMat);
    robe.position.set(0, 0.45, 0); g.add(robe);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 12), skinMat);
    head.position.set(0, 1.1, 0); g.add(head);
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 12), hatMat);
    hat.position.set(0, 1.55, 0); g.add(hat);
    const starMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffaa00, emissiveIntensity: 0.6 });
    for (let i = 0; i < 5; i++) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), starMat);
        const a = (i / 5) * Math.PI * 2;
        s.position.set(Math.cos(a) * 0.18, 1.4 + Math.random() * 0.3, Math.sin(a) * 0.18);
        g.add(s);
    }
    for (let i = 0; i < 4; i++) {
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), beardMat);
        b.position.set(0, 1.0 - i * 0.12, 0.18); b.scale.set(1, 1, 0.7); g.add(b);
    }
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), eyeMat);
        eye.position.set(side * 0.08, 1.13, 0.2); g.add(eye);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.4, 8), robeMat);
        arm.position.set(side * 0.35, 0.75, 0); arm.rotation.z = side * 0.4; g.add(arm);
    });
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.4, 8), hatMat);
    staff.position.set(0.5, 0.85, 0); g.add(staff);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), orbMat);
    orb.position.set(0.5, 1.55, 0); g.add(orb);
    return g;
}

function buildPirate() {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.6 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xddc99a, roughness: 0.5 });
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.6 });
    const skullMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), shirtMat);
    body.position.set(0, 0.7, 0); body.scale.set(0.9, 1, 0.85); g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 12), shirtMat);
    head.position.set(0, 1.15, 0); g.add(head);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), eyeMat);
    eye.position.set(-0.1, 1.18, 0.22); g.add(eye);
    const patch = new THREE.Mesh(new THREE.CircleGeometry(0.07, 12), hatMat);
    patch.position.set(0.1, 1.18, 0.24); g.add(patch);
    const strap = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.5, 6), hatMat);
    strap.position.set(0.1, 1.2, 0.05); strap.rotation.x = Math.PI / 2; g.add(strap);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.05, 12), hatMat);
    brim.position.set(0, 1.4, 0); g.add(brim);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.18, 12), hatMat);
    top.position.set(0, 1.5, 0); g.add(top);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), skullMat);
    skull.position.set(0, 1.5, 0.22); g.add(skull);
    const beard = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), bodyMat);
    beard.position.set(0, 0.95, 0.18); beard.scale.set(1, 0.6, 0.7); g.add(beard);
    [1, -1].forEach(side => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 8), shirtMat);
        arm.position.set(side * 0.35, 0.7, 0); arm.rotation.z = side * 0.3; g.add(arm);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.4, 8), bodyMat);
        leg.position.set(side * 0.15, 0.2, 0); g.add(leg);
    });
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.6, 0.05),
        new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.9 }));
    sword.position.set(0.5, 0.7, 0.1); sword.rotation.z = -0.3; g.add(sword);
    return g;
}

function buildNinja() {
    const g = new THREE.Group();
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.7 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.5 });
    const swordMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.95, roughness: 0.2 });
    const bandMat = new THREE.MeshStandardMaterial({ color: 0xc81020 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), blackMat);
    body.position.set(0, 0.7, 0); body.scale.set(0.85, 1.05, 0.9); g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.27, 14, 12), blackMat);
    head.position.set(0, 1.15, 0); g.add(head);
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.04), eyeMat);
        eye.position.set(side * 0.1, 1.2, 0.24); g.add(eye);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.5, 8), blackMat);
        arm.position.set(side * 0.4, 0.7, 0); arm.rotation.z = side * 0.3; g.add(arm);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.45, 8), blackMat);
        leg.position.set(side * 0.15, 0.22, 0); g.add(leg);
    });
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 14, 1, true), bandMat);
    band.position.set(0, 1.32, 0); g.add(band);
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.8, 0.04), swordMat);
    sword.position.set(0, 1.0, -0.3); sword.rotation.z = 0.2; g.add(sword);
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.06), darkMat);
    handle.position.set(0.05, 0.55, -0.3); g.add(handle);
    return g;
}

function buildSamurai() {
    const g = new THREE.Group();
    const armorMat = new THREE.MeshStandardMaterial({ color: 0xc8102e, roughness: 0.4, metalness: 0.5 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.3 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffe0bd });
    const swordMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.9, roughness: 0.15 });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.45, 0.7, 12), armorMat);
    torso.position.set(0, 0.7, 0); g.add(torso);
    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.08, 12), goldMat);
    belt.position.set(0, 0.4, 0); g.add(belt);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 12), skinMat);
    head.position.set(0, 1.15, 0); g.add(head);
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), armorMat);
    helm.position.set(0, 1.25, 0); g.add(helm);
    [1, -1].forEach(side => {
        const horn = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 6, 12, Math.PI), goldMat);
        horn.position.set(side * 0.18, 1.45, 0); horn.rotation.z = side * Math.PI / 2; g.add(horn);
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), blackMat);
        eye.position.set(side * 0.1, 1.18, 0.22); g.add(eye);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8), armorMat);
        arm.position.set(side * 0.45, 0.7, 0); g.add(arm);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.12, 0.4, 8), blackMat);
        leg.position.set(side * 0.2, 0.2, 0); g.add(leg);
    });
    const katana = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.0, 0.05), swordMat);
    katana.position.set(0.5, 0.55, -0.1); katana.rotation.z = 0.4; g.add(katana);
    const tsuba = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.12), goldMat);
    tsuba.position.set(0.62, 0.1, -0.1); g.add(tsuba);
    const sun = new THREE.Mesh(new THREE.CircleGeometry(0.08, 12), goldMat);
    sun.position.set(0, 0.8, 0.43); g.add(sun);
    return g;
}

function buildPixel() {
    const g = new THREE.Group();
    const PX = 0.2; // pixel cube size
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, flatShading: true, roughness: 0.95 });
    const bellyMat = new THREE.MeshStandardMaterial({ color: 0xffff00, flatShading: true, roughness: 0.95 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x008800, flatShading: true, roughness: 0.95 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xff00ff, flatShading: true, roughness: 0.95 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true });
    const cubeGeom = new THREE.BoxGeometry(PX, PX, PX);

    function p(x, y, z, mat) {
        const c = new THREE.Mesh(cubeGeom, mat);
        c.position.set(x * PX, y * PX, z * PX);
        g.add(c);
    }

    // Body — 3 wide × 2 tall × 4 long (yellow belly bottom row)
    for (let z = -2; z <= 1; z++) {
        for (let x = -1; x <= 1; x++) {
            p(x, 4, z, bodyMat);
            p(x, 3, z, bodyMat);
            p(x, 2, z, bellyMat);
        }
    }
    // Magenta back-stripe (8-bit accent)
    p(0, 5, -1, accentMat);
    p(0, 5, 0, accentMat);

    // Head — 3 × 2 × 2 in front
    for (let z = 2; z <= 3; z++) {
        for (let x = -1; x <= 1; x++) {
            p(x, 4, z, bodyMat);
            p(x, 3, z, bodyMat);
            p(x, 2, z, bellyMat);
        }
    }

    // Eyes — white pixel + smaller black pupil
    const pupilGeom = new THREE.BoxGeometry(PX * 0.5, PX * 0.5, PX * 0.4);
    [1, -1].forEach(side => {
        p(side, 4, 3, whiteMat); // white "pixel" eye block (overwrites green)
        const pup = new THREE.Mesh(pupilGeom, blackMat);
        pup.position.set(side * PX, 4 * PX, 3 * PX + PX * 0.45);
        g.add(pup);
    });

    // Tail — tapering single-cube column
    p(0, 3, -3, bodyMat);
    p(0, 3, -4, darkMat);
    p(0, 3, -5, darkMat);

    // Legs — 4 corners, 2 cubes tall each
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([x, z]) => {
        p(x, 1, z, darkMat);
        p(x, 0, z, darkMat);
    });

    // Lift entire pixel lizard so it sits on the ground
    g.position.set(0, 0, 0);
    return g;
}

function buildCowboy() {
    const g = new THREE.Group();
    const shirtMat   = new THREE.MeshStandardMaterial({ color: 0xc0473a, roughness: 0.75 }); // red plaid shirt
    const vestMat    = new THREE.MeshStandardMaterial({ color: 0x6b4a2a, roughness: 0.7 });   // leather vest
    const hatMat     = new THREE.MeshStandardMaterial({ color: 0x9c7b50, roughness: 0.6 });   // tan hat
    const hatBandMat = new THREE.MeshStandardMaterial({ color: 0x3a2515, roughness: 0.6 });
    const skinMat    = new THREE.MeshStandardMaterial({ color: 0xe8b88a, roughness: 0.6 });
    const jeansMat   = new THREE.MeshStandardMaterial({ color: 0x2a4a7a, roughness: 0.85 });
    const bootMat    = new THREE.MeshStandardMaterial({ color: 0x4a2f1a, roughness: 0.6 });
    const bandanaMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.75 });
    const ropeMat    = new THREE.MeshStandardMaterial({ color: 0xd9c08a, roughness: 0.85 });
    const goldMat    = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.3 });
    const blackMat   = new THREE.MeshStandardMaterial({ color: 0x111111 });

    // Body (shirt)
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), shirtMat);
    body.position.set(0, 0.7, 0); body.scale.set(0.9, 1, 0.85); g.add(body);

    // Open leather vest — two side panels on the chest
    [1, -1].forEach(side => {
        const panel = new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 10, 0, Math.PI), vestMat);
        panel.position.set(side * 0.13, 0.72, 0.0);
        panel.scale.set(0.5, 1.05, 0.95);
        panel.rotation.y = side > 0 ? -0.35 : Math.PI + 0.35;
        g.add(panel);
    });

    // Sheriff star on the chest
    const star = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 5), goldMat);
    star.rotation.x = Math.PI / 2; star.position.set(0.14, 0.8, 0.34); g.add(star);

    // Belt + buckle
    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.07, 14), bootMat);
    belt.position.set(0, 0.42, 0); g.add(belt);
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.04), goldMat);
    buckle.position.set(0, 0.42, 0.36); g.add(buckle);

    // Bandana / neckerchief
    const bandana = new THREE.Mesh(new THREE.ConeGeometry(0.21, 0.2, 14), bandanaMat);
    bandana.position.set(0, 0.96, 0.07); bandana.rotation.x = -0.3; g.add(bandana);
    const knot = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), bandanaMat);
    knot.position.set(0, 1.02, 0.17); g.add(knot);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.27, 14, 12), skinMat);
    head.position.set(0, 1.18, 0); g.add(head);

    // Eyes
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), blackMat);
        eye.position.set(side * 0.1, 1.22, 0.22); g.add(eye);
    });

    // Mustache
    const mustache = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.045, 0.06), vestMat);
    mustache.position.set(0, 1.12, 0.24); g.add(mustache);

    // ===== Cowboy hat =====
    // Wide brim
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.045, 18), hatMat);
    brim.position.set(0, 1.39, 0); g.add(brim);
    // Slight upward curl on the sides
    [1, -1].forEach(side => {
        const curl = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.05, 6, 12, Math.PI), hatMat);
        curl.position.set(side * 0.34, 1.41, 0);
        curl.rotation.set(Math.PI / 2, 0, side > 0 ? 0 : Math.PI);
        g.add(curl);
    });
    // Crown (tapered)
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.32, 16), hatMat);
    crown.position.set(0, 1.55, 0); g.add(crown);
    // Crown dome
    const crownTop = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), hatMat);
    crownTop.position.set(0, 1.71, 0); crownTop.scale.set(1, 0.5, 1); g.add(crownTop);
    // Hat band
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.252, 0.252, 0.07, 16), hatBandMat);
    band.position.set(0, 1.42, 0); g.add(band);

    // Arms, hands, legs (jeans), boots
    [1, -1].forEach(side => {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 8), shirtMat);
        arm.position.set(side * 0.36, 0.7, 0); arm.rotation.z = side * 0.3; g.add(arm);
        const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), skinMat);
        hand.position.set(side * 0.5, 0.5, 0); g.add(hand);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.4, 8), jeansMat);
        leg.position.set(side * 0.15, 0.2, 0); g.add(leg);
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.13, 0.26), bootMat);
        boot.position.set(side * 0.15, 0.05, 0.05); g.add(boot);
    });

    // Lasso hanging at the hip
    const lasso = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 6, 18), ropeMat);
    lasso.position.set(-0.46, 0.55, 0.05); lasso.rotation.y = Math.PI / 4; g.add(lasso);

    return g;
}

const SPECIAL_SKIN_BUILDERS = {
    mecha: buildMecha,
    pixel: buildPixel,
    kraken: buildKraken,
    hydra: buildHydra,
    phoenix: buildPhoenix,
    dragon: buildDragon,
    unicorn: buildUnicorn,
    mermaid: buildMermaid,
    vampire: buildVampire,
    zombie: buildZombie,
    werewolf: buildWerewolf,
    astronaut: buildAstronaut,
    knight: buildKnight,
    wizard: buildWizard,
    pirate: buildPirate,
    ninja: buildNinja,
    samurai: buildSamurai,
    cowboy: buildCowboy,
    dalmatian: buildDalmatian,
    leopard: buildLeopard,
    tiger: buildTiger,
    zebra: buildZebra
};


// Update coins display in UI
function updateCoinsDisplay() {
    const coinsEl = document.getElementById('total-coins');
    if (coinsEl) {
        coinsEl.textContent = shopData.totalFlies;
    }
}

// Render shop UI
function renderShopUI() {
    const container = document.getElementById('shop-section');
    if (!container) return;

    // Get rarity translation key
    const getRarityKey = (rarity) => {
        switch (rarity) {
            case 'common': return 'rarityCommon';
            case 'rare': return 'rarityRare';
            case 'mythic': return 'rarityMythic';
            default: return 'rarityCommon';
        }
    };

    let html = `
        <h2>${t('shopTitle')}</h2>
        <p class="coins-display">🪰 ${t('yourCoins')} <strong id="total-coins">${shopData.totalFlies}</strong></p>
        <div class="skins-grid">
    `;

    const RARITY_ORDER = { common: 0, rare: 1, mythic: 2 };
    const sortedSkins = Object.values(SKINS).slice().sort((a, b) => {
        const ra = RARITY_ORDER[a.rarity] ?? 0;
        const rb = RARITY_ORDER[b.rarity] ?? 0;
        if (ra !== rb) return ra - rb;
        return (a.price || 0) - (b.price || 0);
    });
    sortedSkins.forEach(skin => {
        const isOwned = shopData.ownedSkins.includes(skin.id);
        const isEquipped = shopData.equippedSkin === skin.id;
        const canAfford = shopData.totalFlies >= skin.price;

        let buttonText, buttonClass, buttonAction;
        if (isEquipped) {
            buttonText = t('equipped');
            buttonClass = 'equipped-btn';
            buttonAction = '';
        } else if (isOwned) {
            buttonText = t('equip');
            buttonClass = 'equip-btn';
            buttonAction = `onclick="equipSkin('${skin.id}')"`;
        } else if (canAfford) {
            buttonText = `${t('buy')} (${skin.price} 🪰)`;
            buttonClass = 'buy-btn';
            buttonAction = `onclick="buySkin('${skin.id}')"`;
        } else {
            buttonText = `${skin.price} 🪰`;
            buttonClass = 'locked-btn';
            buttonAction = '';
        }

        const skinColor = `#${skin.colors.skin.toString(16).padStart(6, '0')}`;
        const bellyColor = `#${skin.colors.belly.toString(16).padStart(6, '0')}`;
        const skinIcon = skin.icon || '🦎';
        const rarityClass = `rarity-${skin.rarity || 'common'}`;

        // Prefer translated name; fall back to skin.name (Finnish) when no translation exists
        const translated = t(skin.nameKey);
        const displayName = (translated === skin.nameKey && skin.name) ? skin.name : translated;

        html += `
            <div class="skin-card ${isEquipped ? 'equipped' : ''} ${isOwned ? 'owned' : ''} ${rarityClass}">
                <span class="rarity-badge ${rarityClass}">${t(getRarityKey(skin.rarity))}</span>
                <div class="skin-preview" style="background: linear-gradient(135deg, ${skinColor}, ${bellyColor});">
                    <span class="skin-icon">${skinIcon}</span>
                </div>
                <h4>${displayName}</h4>
                <button class="${buttonClass}" ${buttonAction}>${buttonText}</button>
            </div>
        `;
    });

    html += '</div>';

    // Skin counter — owned / total
    const totalSkins = Object.keys(SKINS).length;
    const ownedSkins = shopData.ownedSkins.filter(id => SKINS[id]).length;
    html += `<p class="skin-counter">🦎 Skinit: <strong>${ownedSkins}/${totalSkins}</strong></p>`;

    // Boss-mode unlock cards — always clickable so user sees missing-fly count on click
    const bossOwned = !!shopData.bossModeUnlocked;
    const canAffordBoss = shopData.totalFlies >= 10000;
    const bossBtn = bossOwned
        ? `<button class="equipped-btn">✅ Avattu</button>`
        : (canAffordBoss
            ? `<button class="buy-btn" onclick="buyBossMode()">Osta (10 000 🪰)</button>`
            : `<button class="locked-btn" onclick="buyBossMode()">${shopData.totalFlies}/10 000 🪰</button>`);

    const lukitarOwned = !!shopData.lukitarUnlocked;
    const canAffordLukitar = shopData.totalFlies >= 15000;
    const lukitarBtn = lukitarOwned
        ? `<button class="equipped-btn">✅ Avattu</button>`
        : (canAffordLukitar
            ? `<button class="buy-btn" onclick="buyLukitar()">Osta (15 000 🪰)</button>`
            : `<button class="locked-btn" onclick="buyLukitar()">${shopData.totalFlies}/15 000 🪰</button>`);

    html += `
        <div class="boss-mode-card">
            <h3>⚔️ Pelimuodot</h3>
            <div class="skin-card mythic ${bossOwned ? 'owned equipped' : ''}">
                <span class="rarity-badge mythic">LOPPUVASTUS</span>
                <div class="skin-preview" style="background: linear-gradient(135deg, #4a0000, #ff2222);">
                    <span class="skin-icon">🪰</span>
                </div>
                <h4>Jättikärpäs-moodi</h4>
                ${bossBtn}
            </div>
            <div class="skin-card mythic ${lukitarOwned ? 'owned equipped' : ''}">
                <span class="rarity-badge mythic">FINAL BOSS</span>
                <div class="skin-preview" style="background: linear-gradient(135deg, #0a0604, #6a1010);">
                    <span class="skin-icon">🕷️</span>
                </div>
                <h4>Lukitar</h4>
                <p style="font-size:0.78rem;color:#ffb3b3;margin:0.2rem 0;">
                    Syöksee seittiä pelaajaa kohti.<br>
                    Voitto: <strong>+1000 🪰</strong> · Häviö: <strong>−1000 🪰</strong>
                </p>
                ${lukitarBtn}
            </div>
            ${(() => {
                const jOwned = !!shopData.jattiLiskoUnlocked;
                const canAffJ = shopData.totalFlies >= 20000;
                const jBtn = jOwned
                    ? `<button class="equipped-btn">✅ Avattu</button>`
                    : (canAffJ
                        ? `<button class="buy-btn" onclick="buyJattiLisko()">Osta (20 000 🪰)</button>`
                        : `<button class="locked-btn" onclick="buyJattiLisko()">${shopData.totalFlies}/20 000 🪰</button>`);
                return `
                    <div class="skin-card mythic ${jOwned ? 'owned equipped' : ''}">
                        <span class="rarity-badge mythic">FINAL BOSS</span>
                        <div class="skin-preview" style="background: linear-gradient(135deg, #1a4720, #6dd55a);">
                            <span class="skin-icon">🦎</span>
                        </div>
                        <h4>Jätti-Lisko</h4>
                        <p style="font-size:0.78rem;color:#caffb3;margin:0.2rem 0;">
                            Ampuu pitkällä kielellä pelaajaa kohti. 25 kielihyökkäystä.<br>
                            Voitto: <strong>+2000 🪰</strong> · Häviö: <strong>−2500 🪰</strong>
                        </p>
                        ${jBtn}
                    </div>
                `;
            })()}
        </div>
    `;

    // Music shop section
    html += `<div class="music-section"><h3>🎵 Soittolista</h3><div class="music-grid">`;
    const owned = shopData.ownedMusic || ['klassinen'];
    const equipped = shopData.equippedMusic || 'klassinen';
    Object.values(MUSIC_TRACKS).forEach(t => {
        const isOwned = owned.includes(t.id);
        const isEquipped = equipped === t.id;
        const canAfford = shopData.totalFlies >= t.price;
        let btn;
        if (isEquipped) {
            btn = `<button class="equipped-btn">▶ Soittolistalla</button>`;
        } else if (isOwned) {
            btn = `<button class="buy-btn" onclick="equipMusic('${t.id}')">🎵 Aseta soittoon</button>`;
        } else if (t.price === 0) {
            btn = `<button class="buy-btn" onclick="equipMusic('${t.id}')">🎵 Aseta soittoon</button>`;
        } else if (canAfford) {
            btn = `<button class="buy-btn" onclick="buyMusic('${t.id}')">Osta (${t.price} 🪰)</button>`;
        } else {
            btn = `<button class="locked-btn" onclick="buyMusic('${t.id}')">${shopData.totalFlies}/${t.price} 🪰</button>`;
        }
        html += `
            <div class="music-card ${isEquipped ? 'equipped' : ''} ${isOwned ? 'owned' : ''}">
                <div class="music-icon">🎶</div>
                <h4>${t.name}</h4>
                <p style="font-size:0.75rem;opacity:0.75;margin:0.15rem 0;">
                    ${t.wave} · ${(t.tempo * 1000).toFixed(0)} ms/nuotti
                </p>
                <button class="small-btn" onclick="previewMusic('${t.id}')" title="Esikuuntele 4 nuottia">🔊 Esikuuntele</button>
                ${btn}
            </div>
        `;
    });
    html += `</div></div>`;

    // Super powers section
    const sp = shopData.superPowers || {};
    html += `<div class="superpowers-section"><h3>💪 Supervoimat</h3><div class="powers-grid">`;
    Object.entries(SUPER_POWER_DEFS).forEach(([id, def]) => {
        const lvl = sp[id] || 0;
        const maxLvl = def.levels.length;
        const isMax = lvl >= maxLvl;
        const canAfford = shopData.totalFlies >= 5000;
        const tier = lvl > 0 ? def.levels[lvl - 1] : null;
        let tierInfo = '';
        if (tier) {
            if (id === 'shield') tierInfo = `${tier.duration}s · ${tier.uses} käyt.`;
            else if (id === 'magnet') tierInfo = `${tier.duration}s · ${tier.radius}u · ${tier.uses} käyt.`;
            else if (id === 'slowmo') tierInfo = `${tier.duration}s · ${Math.round((1 - tier.factor) * 100)}% · ${tier.uses} käyt.`;
            else if (id === 'doubleScore') tierInfo = `${tier.duration}s · ${tier.multiplier}× pisteet · ${tier.uses} käyt.`;
            else if (id === 'turbo') tierInfo = `${tier.duration}s · ${tier.speed}× nopeus · ${tier.uses} käyt.`;
            else if (id === 'lure') tierInfo = `${tier.duration}s · ${Math.round(tier.flyChance * 100)}% kärpäsiä · ${tier.uses} käyt.`;
        }
        let btn;
        if (isMax) {
            btn = `<button class="equipped-btn">Max ${maxLvl}/${maxLvl}</button>`;
        } else if (canAfford) {
            btn = `<button class="buy-btn" onclick="upgradePower('${id}')">${lvl === 0 ? 'Osta' : 'Päivitä'} (5 000 🪰)</button>`;
        } else {
            btn = `<button class="locked-btn" onclick="upgradePower('${id}')">${shopData.totalFlies}/5 000 🪰</button>`;
        }
        html += `
            <div class="power-card">
                <div class="power-icon">${def.icon}</div>
                <h4>${def.name}</h4>
                <p>Taso: ${lvl}/${maxLvl} · Näpp: ${def.key}</p>
                ${tier ? `<p style="font-size:0.8rem;color:#c084fc;">${tierInfo}</p>` : ''}
                ${btn}
            </div>
        `;
    });
    html += `</div></div>`;

    container.innerHTML = html;

    // Keep boss-fight start button in sync with unlock state
    updateBossButton();
}

// ============ CONSTANTS ============
const LANE_WIDTH = 4;
const LANES = [-LANE_WIDTH, 0, LANE_WIDTH];
const SPAWN_DISTANCE = 160;
const DESPAWN_DISTANCE = -15;
const GROUND_LENGTH = 40;
const NUM_GROUND_TILES = 7;
const FLIGHT_ALTITUDE = 24; // how high the lizard + airplane (and flies) rise during flight — way up among the clouds, far above the trees

// ============ LEADERBOARD SYSTEM (Firebase) ============
// Firebase Realtime Database URL
const FIREBASE_DB_URL = 'https://lisko-racing-default-rtdb.europe-west1.firebasedatabase.app';

const LEADERBOARD_CACHE_KEY = 'lisko_racing_leaderboard_cache';
const OLD_LEADERBOARD_KEY = 'lisko_racing_leaderboard'; // Old key to migrate from
const AUTH_KEY = 'lisko_racing_auth_session'; // Stores { username, token }
// Google Sign-In: liitä tähän Google Cloud Consolen "OAuth 2.0 Client ID" (tyyppi: Web application).
// Esim. '1234567890-abcdefg.apps.googleusercontent.com'
const GOOGLE_CLIENT_ID = '605639423178-ragqp24d247a85n81t0me6eskbe6fpau.apps.googleusercontent.com';
// Sovelluksen versio — käytetään virhelokituksessa ja näytetään valikossa.
// PublishAndroid.MD nostaa tämän samalla kuin android/app/build.gradle:n.
const APP_VERSION = '1.0.4';

// ============ KILL SWITCH ============
// Ennen kuin sovellus käynnistyy täysillä, haetaan studios-sivulta pieni
// JSON joka kertoo onko TÄMÄ sovellusversio yhä tuettu. Tarkoitus: kun
// taustajärjestelmä (Firebase) joskus tulevaisuudessa korvataan, tämä
// flagi käännetään päälle → kaikki vanhat asennetut appit näyttävät
// blokkaavan päivitysruudun. Yksityiskohdat: RetireFirebase.MD.
//
// Pidetään riippumattomana Firebasesta — endpoint on GitHub Pagesilla
// jonka pitää toimia myös sen jälkeen kun Firebase suljetaan.
const KILL_SWITCH_URL = 'https://longshoreforrest.github.io/studios/api/lisko-racing.json';
let currentPlayerName = ''; // Set via auth system
let isGuest = false;
let leaderboardData = [];
let isLoadingLeaderboard = false;
let totalGamesPlayed = 0;

// ============ ANALYTICS ============
// Kirjoittaa tapahtumat /analytics/events polkuun (auto-id per tapahtuma).
// Luku rajattu RTDB security rules -tasolla admin-sähköposteihin
// (longshoreforrest@gmail.com, matias.onni.pitkaranta@gmail.com).
// Fire-and-forget: virheet vaietaan jotta peli ei kaadu jos verkko on poikki.
function trackEvent(name, props) {
    if (!name) return;
    let googleSub = null;
    try {
        const raw = localStorage.getItem(AUTH_KEY);
        if (raw) {
            const auth = JSON.parse(raw);
            if (auth && auth.googleSub) googleSub = auth.googleSub;
        }
    } catch (e) {}
    const event = {
        name,
        ts: Date.now(),
        userId: currentPlayerName || 'anonymous',
        googleSub,
        props: props || {}
    };
    try {
        fetch(`${FIREBASE_DB_URL}/analytics/events.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        }).catch(() => {});
    } catch (e) {}
}

// ============ LOGIN ERROR LOGGING ============
// Joka kerta kun kirjautuminen (Google native / browser GIS / nickname / verkko)
// epäonnistuu, kutsutaan tästä:
//   - näytetään käyttäjälle todellinen virhekoodi (showCheatNotification)
//   - kirjoitetaan fire-and-forget /loginErrors-haaraan Firebaseen jotta
//     adminit voivat tarkastella vianetsintätietoja jälkikäteen.
// Capacitor Google Auth -plugin heittää virheitä joiden code-kenttä on usein
// silminnähtävän numeerinen (10 = DEVELOPER_ERROR / SHA-1 mismatch, 12501 =
// käyttäjä peruutti, 7 = NETWORK_ERROR). Browser-GIS heittää tyypillisiä
// JS-virheitä.
function logLoginError(stage, err, extra) {
    const code = (err && (err.code !== undefined ? String(err.code) : null)) || null;
    const message = (err && (err.message || err.error || String(err))) || 'unknown';
    const isCancel = code === '12501' || /cancel/i.test(message);
    // Käyttäjä-UI: peruutus on hiljainen, muut näytetään selkeästi.
    if (!isCancel) {
        const codePart = code ? ` [${code}]` : '';
        try { showCheatNotification(`Login error${codePart}: ${message}`); } catch (e) {}
    }
    // Firebase-loki (sama fire-and-forget -malli kuin trackEvent).
    let googleSub = null;
    let username = currentPlayerName || null;
    try {
        const raw = localStorage.getItem(AUTH_KEY);
        if (raw) {
            const auth = JSON.parse(raw);
            if (auth && auth.googleSub) googleSub = auth.googleSub;
            if (auth && auth.username) username = username || auth.username;
        }
    } catch (e) {}
    const isNative = (function () { try { return isNativeApp(); } catch (e) { return false; } })();
    const payload = {
        ts: Date.now(),
        stage: String(stage || 'unknown').slice(0, 60),
        code: code,
        message: String(message).slice(0, 500),
        cancelled: isCancel,
        platform: isNative ? 'android' : 'browser',
        appVersion: APP_VERSION,
        userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) ? navigator.userAgent.slice(0, 200) : null,
        username: username,
        googleSub: googleSub,
        extra: extra || null
    };
    try {
        fetch(`${FIREBASE_DB_URL}/loginErrors.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(() => {});
    } catch (e) {}
    // Aina myös console.warn — debug-konsolissa ja adb logcatissa näkyvä.
    try { console.warn('[login-error]', stage, payload); } catch (e) {}
}

// ============ KILL SWITCH CHECK ============
// Semver-vertailu: palauttaa -1 jos a < b, 0 jos sama, 1 jos a > b.
// Sietää lyhyemmät versiot ("1.0" === "1.0.0") ja epäkokonaisuudet.
function compareSemver(a, b) {
    const pa = String(a || '').split('.').map(s => parseInt(s, 10) || 0);
    const pb = String(b || '').split('.').map(s => parseInt(s, 10) || 0);
    const n = Math.max(pa.length, pb.length);
    for (let i = 0; i < n; i++) {
        const ai = pa[i] || 0;
        const bi = pb[i] || 0;
        if (ai < bi) return -1;
        if (ai > bi) return 1;
    }
    return 0;
}

// Hakee kill-switch JSON:n GitHub Pagesilta. Jos vastaus sanoo että tämä
// versio on vanhentunut (deprecated tai minVersion > APP_VERSION), näytetään
// blokkaava modal. Verkkovika ei blokkaa — käyttäjä saa pelata vaikka
// varsinainen backend olisi rikki (silloin yksittäiset Firebase-kutsut
// hoitavat omat virheilmoituksensa).
async function checkAppDeprecation() {
    // Web-julkaisu (selain) tarjoillaan aina uusimpana versiona suoraan
    // studios-sivulta, joten sitä ei koskaan vanhenneta itseään vastaan —
    // kill switch koskee vain asennettuja natiiviappeja (Android), jotka
    // eivät päivity automaattisesti. Ks. PublishWeb.MD ja RetireFirebase.MD.
    if (!isNativeApp()) return;
    let data;
    try {
        const resp = await fetch(KILL_SWITCH_URL, { cache: 'no-store' });
        if (!resp.ok) return; // 404/500 → ei tulkita deprekaatioksi
        data = await resp.json();
    } catch (e) {
        // Verkkokatkos — ei tulkita deprekaatioksi.
        try { console.warn('Kill-switch check failed (network):', e); } catch (_) {}
        return;
    }
    if (!data || typeof data !== 'object') return;
    const minVer = data.minVersion || '0.0.0';
    const deprecated = data.deprecated === true || compareSemver(APP_VERSION, minVer) < 0;
    if (deprecated) {
        showDeprecationModal(data);
    }
}

function showDeprecationModal(data) {
    const modal = document.getElementById('deprecation-modal');
    if (!modal) return;
    const lang = (typeof currentLanguage !== 'undefined' && currentLanguage) || 'fi';
    const fallback = lang === 'fi'
        ? 'Tämä Lisko Racing -versio ei enää toimi. Lataa uusin versio sivuiltamme.'
        : 'This Lisko Racing version no longer works. Please download the latest version from our website.';
    const msg = (lang === 'fi' ? data.messageFi : data.messageEn) || data.messageEn || data.messageFi || fallback;
    const url = data.updateUrl || 'https://longshoreforrest.github.io/studios/';
    const msgEl = modal.querySelector('.deprecation-message');
    const linkEl = modal.querySelector('.deprecation-link');
    if (msgEl) msgEl.textContent = msg;
    if (linkEl) {
        linkEl.setAttribute('href', url);
        // Capacitor-WebView avaa target="_blank" järjestelmän selaimessa oletuksena.
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'noopener');
    }
    modal.classList.add('visible');
    // Yritetään myös pysäyttää pelin animaatio jos käynnistyt jatkossa siitä.
    try { if (state && state.isRunning) pauseGame(); } catch (e) {}
}

// Load and increment total games counter from Firebase
async function loadGamesCounter() {
    try {
        const response = await fetch(`${FIREBASE_DB_URL}/stats/totalGames.json`);
        if (response.ok) {
            const data = await response.json();
            totalGamesPlayed = data || 0;
            updateGamesCounter();
        }
    } catch (e) {
        console.log('Could not load games counter:', e);
    }
}

// Increment games counter
async function incrementGamesCounter() {
    try {
        totalGamesPlayed++;
        updateGamesCounter();
        await fetch(`${FIREBASE_DB_URL}/stats/totalGames.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(totalGamesPlayed)
        });
    } catch (e) {
        console.log('Could not increment games counter:', e);
    }
}

// Update games counter display
function updateGamesCounter() {
    const counterEl = document.getElementById('games-counter');
    if (counterEl) {
        counterEl.textContent = totalGamesPlayed.toLocaleString();
    }
}

// Migrate old local leaderboard data to Firebase (one-time)
async function migrateOldLeaderboard() {
    const migrationKey = 'lisko_racing_migrated_v1';
    if (localStorage.getItem(migrationKey)) return; // Already migrated

    try {
        const oldData = localStorage.getItem(OLD_LEADERBOARD_KEY);
        if (oldData) {
            const entries = JSON.parse(oldData);
            console.log(`Migrating ${entries.length} old scores to Firebase...`);

            // Upload each old score to Firebase
            for (const entry of entries) {
                if (entry.name && entry.score) {
                    await fetch(`${FIREBASE_DB_URL}/leaderboard.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: entry.name,
                            score: entry.score,
                            date: entry.date || new Date().toISOString()
                        })
                    });
                }
            }
            console.log('Migration complete!');
        }

        // Mark as migrated and clear old data
        localStorage.setItem(migrationKey, 'true');
        localStorage.removeItem(OLD_LEADERBOARD_KEY);
        localStorage.removeItem(LEADERBOARD_CACHE_KEY); // Clear cache to force fresh load
    } catch (e) {
        console.log('Migration error:', e);
    }
}

// Load leaderboard from Firebase (with localStorage cache as fallback)
async function loadLeaderboard() {
    // First, try to migrate old data (one-time)
    await migrateOldLeaderboard();

    // Show loading state initially if no cache
    const cached = localStorage.getItem(LEADERBOARD_CACHE_KEY);
    if (cached) {
        try {
            leaderboardData = JSON.parse(cached);
            renderLeaderboard('leaderboard-list');
        } catch (e) {
            console.log('Could not parse cached leaderboard:', e);
        }
    }

    // Fetch from Firebase (always, to get latest data)
    if (isLoadingLeaderboard) return leaderboardData;
    isLoadingLeaderboard = true;

    try {
        // No orderBy — Firebase rejects with "Index not defined" without server-side rules.
        // Fetch full set; sort + slice client-side below.
        const response = await fetch(`${FIREBASE_DB_URL}/leaderboard.json`);
        if (response.ok) {
            const data = await response.json();
            if (data) {
                // Convert Firebase object to array
                leaderboardData = Object.values(data);
                // Sort by score (highest first)
                leaderboardData.sort((a, b) => b.score - a.score);
                // Keep only top 100
                leaderboardData = leaderboardData.slice(0, 100);
                // Cache locally
                localStorage.setItem(LEADERBOARD_CACHE_KEY, JSON.stringify(leaderboardData));
                // Update display
                renderLeaderboard('leaderboard-list');
                console.log(`Loaded ${leaderboardData.length} scores from Firebase`);
            } else {
                // No data in Firebase yet
                leaderboardData = [];
                renderLeaderboard('leaderboard-list');
            }
        }
    } catch (e) {
        console.log('Could not fetch leaderboard from Firebase:', e);
    }

    isLoadingLeaderboard = false;
    return leaderboardData;
}

// Save score to Firebase
async function saveScoreToFirebase(entry) {
    try {
        const response = await fetch(`${FIREBASE_DB_URL}/leaderboard.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entry)
        });
        if (response.ok) {
            console.log('Score saved to Firebase');
            // Refresh leaderboard to get updated rankings
            loadLeaderboard();
        }
    } catch (e) {
        console.log('Could not save score to Firebase:', e);
    }
}

// Add score to leaderboard
function addScore(name, score) {
    if (!name || name.trim() === '') {
        name = t('unknown');
    }

    const entry = {
        name: name.trim().substring(0, 15),
        score: score,
        date: new Date().toISOString()
    };

    // Add to local data immediately for instant feedback
    leaderboardData.push(entry);
    leaderboardData.sort((a, b) => b.score - a.score);
    leaderboardData = leaderboardData.slice(0, 100);

    // Cache locally
    try {
        localStorage.setItem(LEADERBOARD_CACHE_KEY, JSON.stringify(leaderboardData));
    } catch (e) {
        console.log('Could not cache leaderboard:', e);
    }

    // Save to Firebase (async, non-blocking)
    saveScoreToFirebase(entry);

    // Return rank (1-indexed)
    return leaderboardData.findIndex(e =>
        e.name === entry.name && e.score === entry.score
    ) + 1;
}

// Leaderboard pagination state
const ITEMS_PER_PAGE = 50; // Show 50 entries per page
let leaderboardPage = 0; // 0 = first page (1-50), 1 = second page (51-100), etc.

// Render leaderboard to an element with pagination
function renderLeaderboard(elementId, highlightName = null, highlightScore = null) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const totalItems = leaderboardData.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Ensure page is within bounds
    if (leaderboardPage >= totalPages) leaderboardPage = Math.max(0, totalPages - 1);
    if (leaderboardPage < 0) leaderboardPage = 0;

    const startIndex = leaderboardPage * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const pageItems = leaderboardData.slice(startIndex, endIndex);

    if (totalItems === 0) {
        container.innerHTML = `<p class="loading">${t('noScores')}</p>`;
        return;
    }

    let html = '';

    // Render entries for current page
    pageItems.forEach((entry, i) => {
        const rank = startIndex + i + 1;
        const isCurrentPlayer = highlightName && highlightScore &&
            entry.name === highlightName && entry.score === highlightScore;

        let classes = 'leaderboard-entry';
        if (rank === 1) classes += ' top-1';
        else if (rank === 2) classes += ' top-2';
        else if (rank === 3) classes += ' top-3';
        if (isCurrentPlayer) classes += ' current-player';

        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;

        html += `
            <div class="${classes}">
                <span class="leaderboard-rank">${medal}</span>
                <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
                <span class="leaderboard-score">🪰 ${entry.score}</span>
            </div>
        `;
    });

    // Add pagination controls if more than one page
    if (totalPages > 1) {
        const pageStart = startIndex + 1;
        const pageEnd = endIndex;

        html += `
            <div class="leaderboard-pagination">
                <button class="page-btn" onclick="changePage(-1)" ${leaderboardPage === 0 ? 'disabled' : ''}>◀</button>
                <span class="page-info">${pageStart}-${pageEnd} / ${totalItems}</span>
                <button class="page-btn" onclick="changePage(1)" ${leaderboardPage >= totalPages - 1 ? 'disabled' : ''}>▶</button>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Change leaderboard page
function changePage(delta) {
    const totalPages = Math.ceil(leaderboardData.length / ITEMS_PER_PAGE);
    leaderboardPage += delta;

    if (leaderboardPage < 0) leaderboardPage = 0;
    if (leaderboardPage >= totalPages) leaderboardPage = totalPages - 1;

    renderLeaderboard('leaderboard-list');
}

// Reset pagination when loading new data
function resetLeaderboardPage() {
    leaderboardPage = 0;
}

// ============ FRIEND SYSTEM (Firebase) ============
let friendsList = [];
let pendingRequests = [];
let friendsCache = {};

// Get player's unique ID (based on name, normalized)
function getPlayerId(name) {
    return name.trim().toLowerCase().replace(/[^a-z0-9äöåÄÖÅ]/gi, '_');
}

// Register player in Firebase (so they can be found by friends).
// Uses PATCH so sibling fields under /players/{id} — like /shop — are NOT erased.
async function registerPlayer(name) {
    if (!name || !name.trim()) return;

    const playerId = getPlayerId(name);

    try {
        await fetch(`${FIREBASE_DB_URL}/players/${playerId}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.trim(),
                lastSeen: new Date().toISOString()
            })
        });
        console.log('Player registered:', name);
    } catch (e) {
        console.log('Could not register player:', e);
    }
}

// Load friends list from Firebase
async function loadFriends() {
    if (!currentPlayerName) return;
    const playerId = getPlayerId(currentPlayerName);

    try {
        // Load accepted friends
        const friendsResponse = await fetch(`${FIREBASE_DB_URL}/friends/${playerId}/accepted.json`);
        if (friendsResponse.ok) {
            const data = await friendsResponse.json();
            friendsList = data ? Object.values(data) : [];
        }

        // Load pending requests (requests TO this player)
        const pendingResponse = await fetch(`${FIREBASE_DB_URL}/friends/${playerId}/pending.json`);
        if (pendingResponse.ok) {
            const data = await pendingResponse.json();
            pendingRequests = data ? Object.entries(data).map(([key, val]) => ({ ...val, requestId: key })) : [];
        }

        renderFriendsUI();
    } catch (e) {
        console.log('Could not load friends:', e);
    }
}

// Send friend request
async function sendFriendRequest(friendName) {
    if (!currentPlayerName || currentPlayerName.trim() === '') {
        showCheatNotification(t('enterYourName'));
        return;
    }

    if (!friendName || friendName.trim() === '') {
        return;
    }

    const myId = getPlayerId(currentPlayerName);
    const friendId = getPlayerId(friendName.trim());

    if (myId === friendId) {
        showCheatNotification('❌'); // Can't friend yourself
        return;
    }

    // Check if already friends
    const alreadyFriend = friendsList.some(f => getPlayerId(f) === friendId);
    if (alreadyFriend) {
        showCheatNotification(t('alreadyFriends'));
        return;
    }

    try {
        // Send request directly to Firebase - no existence check needed
        const response = await fetch(`${FIREBASE_DB_URL}/friends/${friendId}/pending.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from: currentPlayerName.trim(),
                fromId: myId,
                date: new Date().toISOString()
            })
        });

        if (response.ok) {
            showCheatNotification(t('friendAdded'));
            // Clear input field
            const input = document.getElementById('friend-name-input');
            if (input) input.value = '';
            trackEvent('friend_invite_sent', { targetUserId: friendId });
        } else {
            console.error('Friend request failed:', response.status, await response.text());
            showCheatNotification('❌ Firebase virhe!');
        }
    } catch (e) {
        console.error('Could not send friend request:', e);
        showCheatNotification('❌ Yhteysvirhe!');
    }
}

// Accept friend request
async function acceptFriendRequest(request) {
    if (!currentPlayerName) return;

    const myId = getPlayerId(currentPlayerName);
    const friendId = request.fromId;
    const friendName = request.from;

    try {
        // Add to my accepted friends (using friendId as key)
        await fetch(`${FIREBASE_DB_URL}/friends/${myId}/accepted/${friendId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(friendName)
        });

        // Add me to their accepted friends (using myId as key)
        await fetch(`${FIREBASE_DB_URL}/friends/${friendId}/accepted/${myId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentPlayerName)
        });

        // Remove from pending
        await fetch(`${FIREBASE_DB_URL}/friends/${myId}/pending/${request.requestId}.json`, {
            method: 'DELETE'
        });

        showCheatNotification(t('friendAccepted'));
        loadFriends(); // Refresh
        trackEvent('friend_request_accepted', { friendId, friendName });

    } catch (e) {
        console.log('Could not accept friend request:', e);
    }
}

// Reject friend request
async function rejectFriendRequest(request) {
    if (!currentPlayerName) return;

    const myId = getPlayerId(currentPlayerName);

    try {
        await fetch(`${FIREBASE_DB_URL}/friends/${myId}/pending/${request.requestId}.json`, {
            method: 'DELETE'
        });

        showCheatNotification(t('friendRejected'));
        loadFriends(); // Refresh

    } catch (e) {
        console.log('Could not reject friend request:', e);
    }
}

// Remove friend
async function removeFriend(friendName) {
    if (!currentPlayerName || !friendName) return;

    const myId = getPlayerId(currentPlayerName);
    const friendId = getPlayerId(friendName);

    try {
        // First, get my friends list to find the correct key
        const myFriendsResponse = await fetch(`${FIREBASE_DB_URL}/friends/${myId}/accepted.json`);
        if (myFriendsResponse.ok) {
            const myFriends = await myFriendsResponse.json();
            if (myFriends) {
                // Find the key for this friend (could be friendId or a random POST key)
                for (const [key, value] of Object.entries(myFriends)) {
                    if (value === friendName || key === friendId) {
                        await fetch(`${FIREBASE_DB_URL}/friends/${myId}/accepted/${key}.json`, {
                            method: 'DELETE'
                        });
                        break;
                    }
                }
            }
        }

        // Also remove me from friend's list
        const friendFriendsResponse = await fetch(`${FIREBASE_DB_URL}/friends/${friendId}/accepted.json`);
        if (friendFriendsResponse.ok) {
            const friendFriends = await friendFriendsResponse.json();
            if (friendFriends) {
                for (const [key, value] of Object.entries(friendFriends)) {
                    if (value === currentPlayerName || key === myId) {
                        await fetch(`${FIREBASE_DB_URL}/friends/${friendId}/accepted/${key}.json`, {
                            method: 'DELETE'
                        });
                        break;
                    }
                }
            }
        }

        showCheatNotification(`❌ ${friendName} poistettu kavereista`);
        loadFriends(); // Refresh

    } catch (e) {
        console.log('Could not remove friend:', e);
    }
}

// Gift flies to a friend — opens a prompt and transfers via Firebase
async function giftFlies(friendName) {
    if (!currentPlayerName) {
        showCheatNotification('🚫 Kirjaudu sisään ensin');
        return;
    }
    if (friendName === currentPlayerName) {
        showCheatNotification('🚫 Et voi lahjoittaa itsellesi');
        return;
    }
    if (shopData.totalFlies <= 0) {
        showCheatNotification('🚫 Ei kärpäsiä lahjoitettavaksi');
        return;
    }

    const inputRaw = window.prompt(
        `🎁 Lahjoita kärpäsiä kaverille ${friendName}\nSinulla: ${shopData.totalFlies} 🪰\n\nMonta annat? (1–${shopData.totalFlies})`,
        '100'
    );
    if (inputRaw === null) return; // cancelled
    const amount = parseInt(inputRaw.trim(), 10);
    if (!Number.isFinite(amount) || amount <= 0) {
        showCheatNotification('🚫 Anna positiivinen luku');
        return;
    }
    if (amount > shopData.totalFlies) {
        showCheatNotification(`🚫 Sinulla on vain ${shopData.totalFlies} 🪰`);
        return;
    }

    const friendId = getPlayerId(friendName);
    // Firebase rules only allow writes under a small set of top-level paths.
    // /gifts and /giftLog are NOT in that whitelist (HTTP 401). /friends/{anyone}/...
    // IS allowed (used by friend requests), so we piggyback there.
    try {
        const resp = await fetch(`${FIREBASE_DB_URL}/friends/${friendId}/incomingGifts.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from: currentPlayerName,
                fromId: getPlayerId(currentPlayerName),
                amount: amount,
                date: new Date().toISOString()
            })
        });
        if (!resp.ok) {
            const txt = await resp.text().catch(() => '');
            throw new Error(`HTTP ${resp.status} ${resp.statusText} — ${txt.slice(0, 120)}`);
        }

        // Deduct from sender locally and sync
        shopData.totalFlies -= amount;
        await saveShopData();
        updateCoinsDisplay();
        renderShopUI();
        renderFriendsUI();
        showCheatNotification(`🎁 Lahjoitit ${amount} 🪰 kaverille ${friendName}!`);
    } catch (e) {
        console.error('Gift transfer failed:', e);
        const msg = (e && e.message) ? e.message : String(e);
        showCheatNotification(`❌ Lahjoitus epäonnistui: ${msg}`);
    }
}

// Check for incoming gifts — credits them to local total + saves, then clears the log.
// Reads BOTH the legacy /giftLog/{id} path AND the new /userData/{id}/incomingGifts path.
async function claimIncomingGifts() {
    if (!currentPlayerName) return;
    const myId = getPlayerId(currentPlayerName);

    const sources = [
        { url: `${FIREBASE_DB_URL}/friends/${myId}/incomingGifts.json`,
          delBase: `${FIREBASE_DB_URL}/friends/${myId}/incomingGifts` },
        { url: `${FIREBASE_DB_URL}/gifts/${myId}.json`,
          delBase: `${FIREBASE_DB_URL}/gifts/${myId}` },
        { url: `${FIREBASE_DB_URL}/userData/${myId}/incomingGifts.json`,
          delBase: `${FIREBASE_DB_URL}/userData/${myId}/incomingGifts` },
        { url: `${FIREBASE_DB_URL}/giftLog/${myId}.json`,
          delBase: `${FIREBASE_DB_URL}/giftLog/${myId}` }
    ];

    let total = 0;
    const senders = [];
    const toDelete = []; // [{ url }, ...]

    for (const src of sources) {
        try {
            const resp = await fetch(src.url);
            if (!resp.ok) continue;
            const log = await resp.json();
            if (!log) continue;
            for (const [key, gift] of Object.entries(log)) {
                if (!gift || typeof gift.amount !== 'number' || gift.amount <= 0) continue;
                total += gift.amount;
                if (gift.from) senders.push(gift.from);
                toDelete.push({ url: `${src.delBase}/${key}.json` });
            }
        } catch (e) {
            console.log('Could not read gift source:', src.url, e);
        }
    }

    if (total <= 0) return;

    // Credit locally and persist to cloud BEFORE deleting the log
    shopData.totalFlies = (shopData.totalFlies || 0) + total;
    try {
        await saveShopData();
    } catch (e) {
        console.error('Save after gift claim failed', e);
        return; // Don't delete log if we couldn't save — retry next tick
    }
    updateCoinsDisplay();
    renderShopUI();
    const senderList = [...new Set(senders)].join(', ');
    showCheatNotification(`🎁 Sait ${total} 🪰 lahjaksi! (${senderList})`);

    // Now safe to clear claimed entries
    for (const item of toDelete) {
        try {
            await fetch(item.url, { method: 'DELETE' });
        } catch (e) { /* ignore */ }
    }
}

// Get friends' best scores
function getFriendsScores() {
    const friendScores = [];

    // Include every friend on the list — even ones without a leaderboard entry yet.
    friendsList.forEach(name => {
        const friendId = getPlayerId(name);
        const entries = leaderboardData.filter(e => getPlayerId(e.name) === friendId);
        if (entries.length > 0) {
            const best = entries.reduce((a, b) => a.score > b.score ? a : b);
            friendScores.push({ ...best, hasScore: true });
        } else {
            friendScores.push({ name, score: 0, hasScore: false });
        }
    });

    // Add current player's best score
    if (currentPlayerName) {
        const myEntries = leaderboardData.filter(e => getPlayerId(e.name) === getPlayerId(currentPlayerName));
        if (myEntries.length > 0) {
            const myBest = myEntries.reduce((a, b) => a.score > b.score ? a : b);
            friendScores.push({ ...myBest, isMe: true, hasScore: true });
        } else {
            friendScores.push({ name: currentPlayerName, score: 0, isMe: true, hasScore: false });
        }
    }

    // Sort: scored entries first by score desc, unscored entries alphabetically at the end.
    friendScores.sort((a, b) => {
        if (a.hasScore !== b.hasScore) return a.hasScore ? -1 : 1;
        if (a.hasScore) return b.score - a.score;
        return a.name.localeCompare(b.name);
    });
    return friendScores;
}

// Render friends UI
function renderFriendsUI() {
    const container = document.getElementById('friends-section');
    if (!container) return;

    const friendCount = friendsList.length;
    let html = `<h2>${t('friendsTitle')} <span class="friend-count">(${friendCount})</span></h2>`;

    // Add friend form
    html += `
        <div class="add-friend-form">
            <input type="text" id="friend-name-input" placeholder="${t('friendNamePlaceholder')}" maxlength="15">
            <button onclick="sendFriendRequest(document.getElementById('friend-name-input').value)" class="small-btn">${t('sendRequest')}</button>
        </div>
    `;

    // Pending requests
    if (pendingRequests.length > 0) {
        html += `<h3>${t('pendingRequests')}</h3>`;
        html += '<div class="pending-requests">';
        pendingRequests.forEach(req => {
            html += `
                <div class="pending-request">
                    <span class="request-from">${escapeHtml(req.from)}</span>
                    <button onclick="acceptFriendRequest(${JSON.stringify(req).replace(/"/g, '&quot;')})" class="accept-btn">${t('accept')}</button>
                    <button onclick="rejectFriendRequest(${JSON.stringify(req).replace(/"/g, '&quot;')})" class="reject-btn">${t('reject')}</button>
                </div>
            `;
        });
        html += '</div>';
    }

    // Pending challenges (haasteet)
    if (pendingChallenges.length > 0) {
        html += `<h3>⚔️ Haasteet (${pendingChallenges.length})</h3>`;
        html += '<div class="pending-requests">';
        pendingChallenges.forEach((ch, idx) => {
            html += `
                <div class="pending-request challenge">
                    <span class="request-from">${escapeHtml(ch.from)}: <strong>${ch.score}</strong> 🪰</span>
                    <button onclick="acceptChallengeByIndex(${idx})" class="accept-btn">Pelaa!</button>
                    <button onclick="declineChallengeByIndex(${idx})" class="reject-btn">❌</button>
                </div>
            `;
        });
        html += '</div>';
    }

    // Friends leaderboard — shows ALL friends (scored + unscored)
    const friendScores = getFriendsScores();
    if (friendScores.length > 0) {
        html += `<h3>${t('friendsLeaderboard')}</h3>`;
        html += '<div class="friends-leaderboard">';
        let scoredRank = 0;
        friendScores.forEach((entry) => {
            const isMe = entry.isMe;
            let label;
            if (entry.hasScore) {
                scoredRank++;
                label = scoredRank === 1 ? '🥇'
                      : scoredRank === 2 ? '🥈'
                      : scoredRank === 3 ? '🥉'
                      : `${scoredRank}.`;
            } else {
                label = '—';
            }
            const scoreCell = entry.hasScore
                ? `🪰 ${entry.score}`
                : `<span class="no-score">${t('noFriendScores') ? '—' : '—'}</span>`;
            const friendActions = isMe ? '' : `
                <button class="gift-friend-btn" onclick="giftFlies('${escapeHtml(entry.name)}')" title="Lahjoita kärpäsiä">🎁</button>
                <button class="remove-friend-btn" onclick="removeFriend('${escapeHtml(entry.name)}')" title="Poista kaveri">❌</button>
            `;
            html += `
                <div class="leaderboard-entry ${isMe ? 'current-player' : ''} ${entry.hasScore ? '' : 'unscored'}">
                    <span class="leaderboard-rank">${label}</span>
                    <span class="leaderboard-name">${escapeHtml(entry.name)} ${isMe ? `(${t('vsYou')})` : ''}</span>
                    <span class="leaderboard-score">${scoreCell}</span>
                    ${friendActions}
                </div>
            `;
        });
        html += '</div>';
    } else if (friendsList.length === 0) {
        html += `<p class="no-friends">${t('noFriends')}</p>`;
    } else {
        html += `<p class="no-friends">${t('noFriendScores')}</p>`;
    }

    container.innerHTML = html;
}

// ============ MULTIPLAYER SYSTEM ============
let multiplayerState = {
    isMultiplayer: false,
    roomId: null,
    opponentName: '',
    opponentScore: 0,
    opponentAlive: true,
    isHost: false,
    challengeScore: 0 // For challenge mode
};
let pendingChallenges = [];
let syncInterval = null;

// Load pending challenges
async function loadChallenges() {
    if (!currentPlayerName) return;
    const myId = getPlayerId(currentPlayerName);

    try {
        const response = await fetch(`${FIREBASE_DB_URL}/challenges/${myId}.json`);
        if (response.ok) {
            const data = await response.json();
            pendingChallenges = data ? Object.entries(data).map(([key, val]) => ({ ...val, challengeId: key })) : [];
            // Re-render friends UI to show challenges
            renderFriendsUI();
        }
    } catch (e) {
        console.log('Could not load challenges:', e);
    }
}

// Send challenge to friend
async function sendChallenge(friendName, score) {
    if (!currentPlayerName || !friendName) return;

    const friendId = getPlayerId(friendName);

    try {
        await fetch(`${FIREBASE_DB_URL}/challenges/${friendId}.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from: currentPlayerName,
                fromId: getPlayerId(currentPlayerName),
                score: score,
                date: new Date().toISOString()
            })
        });
        showCheatNotification(`⚔️ Haaste lähetetty: ${score} kärpästä!`);
        trackEvent('challenge_sent', { targetUserId: friendId, score });
    } catch (e) {
        console.log('Could not send challenge:', e);
    }
}

// Accept challenge and start game
async function acceptChallenge(challenge) {
    multiplayerState.isMultiplayer = true;
    multiplayerState.challengeScore = challenge.score;
    multiplayerState.opponentName = challenge.from;
    multiplayerState.opponentScore = challenge.score;

    // Delete the challenge
    const myId = getPlayerId(currentPlayerName);
    try {
        await fetch(`${FIREBASE_DB_URL}/challenges/${myId}/${challenge.challengeId}.json`, {
            method: 'DELETE'
        });
    } catch (e) { }

    trackEvent('challenge_accepted', {
        challengeId: challenge.challengeId || null,
        opponent: challenge.from,
        targetScore: challenge.score
    });

    // Start the game!
    startGame();
}

// Decline challenge
async function declineChallenge(challenge) {
    const myId = getPlayerId(currentPlayerName);
    try {
        await fetch(`${FIREBASE_DB_URL}/challenges/${myId}/${challenge.challengeId}.json`, {
            method: 'DELETE'
        });
        loadChallenges();
    } catch (e) { }
}

// Helper functions for UI buttons (using index)
function acceptChallengeByIndex(index) {
    if (pendingChallenges[index]) {
        acceptChallenge(pendingChallenges[index]);
    }
}

function declineChallengeByIndex(index) {
    if (pendingChallenges[index]) {
        declineChallenge(pendingChallenges[index]);
    }
}

// Start real-time multiplayer room
async function startMultiplayerRoom(friendName) {
    if (!currentPlayerName) return;

    const roomId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const friendId = getPlayerId(friendName);

    multiplayerState.isMultiplayer = true;
    multiplayerState.roomId = roomId;
    multiplayerState.opponentName = friendName;
    multiplayerState.isHost = true;
    multiplayerState.opponentScore = 0;
    multiplayerState.opponentAlive = true;

    // Create room in Firebase
    try {
        await fetch(`${FIREBASE_DB_URL}/rooms/${roomId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host: currentPlayerName,
                hostId: getPlayerId(currentPlayerName),
                guest: friendName,
                guestId: friendId,
                hostScore: 0,
                guestScore: 0,
                hostAlive: true,
                guestAlive: true,
                status: 'waiting',
                created: new Date().toISOString()
            })
        });

        // Send invite to friend
        await fetch(`${FIREBASE_DB_URL}/invites/${friendId}.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roomId: roomId,
                from: currentPlayerName,
                date: new Date().toISOString()
            })
        });

        showCheatNotification(t('waitingForOpponent'));

        // Wait for guest to join
        waitForOpponent(roomId);

    } catch (e) {
        console.log('Could not create room:', e);
        multiplayerState.isMultiplayer = false;
    }
}

// Wait for opponent to join
function waitForOpponent(roomId) {
    const checkInterval = setInterval(async () => {
        try {
            const response = await fetch(`${FIREBASE_DB_URL}/rooms/${roomId}/status.json`);
            if (response.ok) {
                const status = await response.json();
                if (status === 'ready') {
                    clearInterval(checkInterval);
                    startMultiplayerGame();
                }
            }
        } catch (e) { }
    }, 1000);

    // Timeout after 60 seconds
    setTimeout(() => {
        clearInterval(checkInterval);
        if (multiplayerState.roomId === roomId && !state.isRunning) {
            showCheatNotification(t('opponentLeft'));
            multiplayerState.isMultiplayer = false;
        }
    }, 60000);
}

// Start multiplayer game with countdown
function startMultiplayerGame() {
    showCountdown(() => {
        startGame();
        startScoreSync();
    });
}

// Show countdown before game
function showCountdown(callback) {
    const overlay = document.createElement('div');
    overlay.id = 'countdown-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        font-size: 120px;
        color: #4ade80;
        font-weight: bold;
    `;
    document.body.appendChild(overlay);

    let count = 3;
    overlay.textContent = count;

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            overlay.textContent = count;
        } else if (count === 0) {
            overlay.textContent = t('go');
            overlay.style.color = '#ffd700';
        } else {
            clearInterval(interval);
            overlay.remove();
            callback();
        }
    }, 1000);
}

// Sync score during multiplayer game
function startScoreSync() {
    if (!multiplayerState.roomId) return;

    syncInterval = setInterval(async () => {
        if (!state.isRunning) {
            clearInterval(syncInterval);
            return;
        }

        const roomId = multiplayerState.roomId;
        const isHost = multiplayerState.isHost;
        const scoreKey = isHost ? 'hostScore' : 'guestScore';
        const aliveKey = isHost ? 'hostAlive' : 'guestAlive';

        try {
            // Update my score
            await fetch(`${FIREBASE_DB_URL}/rooms/${roomId}/${scoreKey}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state.score)
            });

            // Get opponent's score
            const opponentScoreKey = isHost ? 'guestScore' : 'hostScore';
            const opponentAliveKey = isHost ? 'guestAlive' : 'hostAlive';

            const scoreRes = await fetch(`${FIREBASE_DB_URL}/rooms/${roomId}/${opponentScoreKey}.json`);
            const aliveRes = await fetch(`${FIREBASE_DB_URL}/rooms/${roomId}/${opponentAliveKey}.json`);

            if (scoreRes.ok) {
                multiplayerState.opponentScore = await scoreRes.json() || 0;
            }
            if (aliveRes.ok) {
                multiplayerState.opponentAlive = await aliveRes.json();
            }

            updateMultiplayerHUD();

        } catch (e) { }
    }, 500);
}

// Update HUD with opponent score
function updateMultiplayerHUD() {
    let opponentHUD = document.getElementById('opponent-hud');

    if (!opponentHUD && multiplayerState.isMultiplayer) {
        opponentHUD = document.createElement('div');
        opponentHUD.id = 'opponent-hud';
        opponentHUD.style.cssText = `
            position: fixed;
            top: 60px;
            left: 20px;
            background: rgba(0,0,0,0.7);
            color: #ff6b6b;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 18px;
            z-index: 1000;
        `;
        document.body.appendChild(opponentHUD);
    }

    if (opponentHUD) {
        const status = multiplayerState.opponentAlive ? '' : ' 💀';
        opponentHUD.innerHTML = `${t('opponentScore')} ${multiplayerState.opponentName}: 🪰 ${multiplayerState.opponentScore}${status}`;
    }
}

// End multiplayer session
function endMultiplayerGame() {
    if (!multiplayerState.isMultiplayer) return;

    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }

    // Mark as dead in room
    if (multiplayerState.roomId) {
        const aliveKey = multiplayerState.isHost ? 'hostAlive' : 'guestAlive';
        fetch(`${FIREBASE_DB_URL}/rooms/${multiplayerState.roomId}/${aliveKey}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(false)
        });
    }

    // Show result
    setTimeout(() => {
        let result = '';
        if (state.score > multiplayerState.opponentScore) {
            result = t('youWin');
        } else if (state.score < multiplayerState.opponentScore) {
            result = t('youLose');
        } else {
            result = t('tie');
        }

        const resultMessage = document.getElementById('rank-message');
        if (resultMessage) {
            resultMessage.innerHTML = `${result}<br>${t('opponentScore')} ${multiplayerState.opponentScore}`;
        }

        // Clean up HUD
        const opponentHUD = document.getElementById('opponent-hud');
        if (opponentHUD) opponentHUD.remove();

        // Reset state
        multiplayerState.isMultiplayer = false;
        multiplayerState.roomId = null;
    }, 1000);
}

// Render challenges UI
function renderChallengesUI() {
    if (pendingChallenges.length === 0) return;

    const container = document.getElementById('friends-section');
    if (!container) return;

    let html = container.innerHTML;
    html += `<h3>⚔️ Haasteet</h3><div class="pending-requests">`;

    pendingChallenges.forEach(ch => {
        html += `
            <div class="pending-request challenge">
                <span class="request-from">${escapeHtml(ch.from)}: ${ch.score} 🪰</span>
                <button onclick='acceptChallenge(${JSON.stringify(ch).replace(/'/g, "\\'")})'  class="accept-btn">Pelaa!</button>
                <button onclick='declineChallenge(${JSON.stringify(ch).replace(/'/g, "\\'")})' class="reject-btn">❌</button>
            </div>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
}

// ============ FEATURE REQUEST SYSTEM ============
let featureRequests = [];

// Load feature requests from Firebase
async function loadFeatureRequests() {
    try {
        const response = await fetch(`${FIREBASE_DB_URL}/featureRequests.json`);
        if (response.ok) {
            const data = await response.json();
            if (data) {
                featureRequests = Object.entries(data).map(([key, val]) => ({
                    ...val,
                    id: key
                })).sort((a, b) => (b.votes || 0) - (a.votes || 0)); // Sort by votes
            } else {
                featureRequests = [];
            }
            renderFeatureRequestsUI();
        }
    } catch (e) {
        console.log('Could not load feature requests:', e);
    }
}

// Submit a new feature request
async function submitFeatureRequest() {
    const input = document.getElementById('feature-request-input');
    const text = input ? input.value.trim() : '';

    if (!text) {
        showCheatNotification('Kirjoita ehdotus ensin!');
        return;
    }

    if (text.length < 5) {
        showCheatNotification('Ehdotus on liian lyhyt!');
        return;
    }

    const authorName = currentPlayerName || 'Anonyymi';

    try {
        await fetch(`${FIREBASE_DB_URL}/featureRequests.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: text,
                author: authorName,
                date: new Date().toISOString(),
                votes: 0,
                voters: {}
            })
        });

        input.value = '';
        showCheatNotification('💡 Ehdotus lähetetty!');
        loadFeatureRequests();

    } catch (e) {
        console.log('Could not submit feature request:', e);
    }
}

// Vote for a feature request
async function voteFeatureRequest(requestId) {
    const voterId = currentPlayerName ? getPlayerId(currentPlayerName) : 'anon_' + Math.random().toString(36).substr(2, 9);

    try {
        // Check if already voted
        const request = featureRequests.find(r => r.id === requestId);
        if (request && request.voters && request.voters[voterId]) {
            showCheatNotification('Olet jo äänestänyt tätä!');
            return;
        }

        // Increment vote count
        const newVotes = (request?.votes || 0) + 1;

        await fetch(`${FIREBASE_DB_URL}/featureRequests/${requestId}/votes.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVotes)
        });

        // Mark as voted
        await fetch(`${FIREBASE_DB_URL}/featureRequests/${requestId}/voters/${voterId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(true)
        });

        showCheatNotification('👍 Ääni annettu!');
        loadFeatureRequests();

    } catch (e) {
        console.log('Could not vote:', e);
    }
}

// Render feature requests UI
function renderFeatureRequestsUI() {
    const container = document.getElementById('requests-section');
    if (!container) return;

    let html = `
        <h2>💡 EHDOTUKSET</h2>
        <p class="requests-info">Ehdota uusia ominaisuuksia peliin!</p>
        
        <div class="submit-request-form">
            <textarea id="feature-request-input" placeholder="Kirjoita ehdotuksesi..." maxlength="200" rows="2"></textarea>
            <button onclick="submitFeatureRequest()" class="submit-request-btn">📤 Lähetä ehdotus</button>
        </div>
        
        <h3>📋 Ehdotukset (${featureRequests.length})</h3>
        <div class="requests-list">
    `;

    if (featureRequests.length === 0) {
        html += '<p class="no-requests">Ei ehdotuksia vielä - ole ensimmäinen!</p>';
    } else {
        featureRequests.forEach(req => {
            const date = new Date(req.date).toLocaleDateString('fi-FI');
            const voterId = currentPlayerName ? getPlayerId(currentPlayerName) : '';
            const hasVoted = req.voters && req.voters[voterId];

            html += `
                <div class="request-card">
                    <div class="request-content">
                        <p class="request-text">${escapeHtml(req.text)}</p>
                        <span class="request-meta">— ${escapeHtml(req.author)}, ${date}</span>
                    </div>
                    <div class="request-votes">
                        <button onclick="voteFeatureRequest('${req.id}')" class="vote-btn ${hasVoted ? 'voted' : ''}" ${hasVoted ? 'disabled' : ''}>
                            👍 ${req.votes || 0}
                        </button>
                    </div>
                </div>
            `;
        });
    }

    html += '</div>';
    container.innerHTML = html;
}

// Helper to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize game UI on page load
function initGameUI() {
    trackEvent('app_opened', {
        userAgent: (navigator && navigator.userAgent) ? navigator.userAgent.slice(0, 200) : '',
        language: (navigator && navigator.language) ? navigator.language : ''
    });
    loadLeaderboard();
    renderLeaderboard('leaderboard-list');

    // Initialize language selector
    initLanguageSelector();

    // Initialize shop
    loadShopData();
    renderShopUI();

    // Load saved player name
    const nameInput = document.getElementById('player-name');
    if (nameInput && currentPlayerName) {
        nameInput.value = currentPlayerName;
    }

    // Save name on input change (with debounce)
    let saveTimeout = null;
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            currentPlayerName = e.target.value;
            localStorage.setItem(PLAYER_NAME_KEY, currentPlayerName);

            // Debounce Firebase save (wait 500ms after last keystroke)
            if (saveTimeout) clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                if (currentPlayerName.trim()) {
                    // Register player in Firebase for friend system
                    registerPlayer(currentPlayerName);
                    // Show save confirmation
                    nameInput.style.borderColor = '#4ade80';
                    setTimeout(() => {
                        nameInput.style.borderColor = '';
                    }, 1000);
                }
                // Reload friends when name changes
                loadFriends();
            }, 500);
        });
    }

    // Load friends list
    loadFriends();

    // Claim any pending gifts (totalFlies already updated server-side by sender;
    // this just shows a notification of recent gifts)
    claimIncomingGifts();

    // Load pending challenges
    loadChallenges();

    // Load games counter
    loadGamesCounter();

    // Load feature requests
    loadFeatureRequests();

    // Auto-refresh challenges + friend requests every 10 seconds while idle
    setInterval(() => {
        if (!state.isRunning) {
            loadChallenges();
            loadFriends();
            claimIncomingGifts();
        }
    }, 10000);

    // Difficulty buttons handling
    const diffButtons = document.querySelectorAll('.diff-btn');
    diffButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selected from all
            diffButtons.forEach(b => b.classList.remove('selected'));
            // Add to clicked
            btn.classList.add('selected');
            // Set state
            state.difficulty = btn.dataset.diff;

            // Optional: Play click sound if available logic exists, or just valid JS
        });
    });

    // Biome / map buttons handling
    const biomeButtons = document.querySelectorAll('.biome-btn');
    biomeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            biomeButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            state.currentBiome = btn.dataset.biome;
        });
    });

    // Quality buttons handling
    const qualityButtons = document.querySelectorAll('.quality-btn');
    qualityButtons.forEach(btn => {
        if (btn.dataset.quality === QUALITY_NAME) btn.classList.add('selected');
        btn.addEventListener('click', () => {
            const next = btn.dataset.quality;
            if (next === QUALITY_NAME) return;
            localStorage.setItem(QUALITY_KEY, next);
            location.reload();
        });
    });
}

// Call init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGameUI);
} else {
    initGameUI();
}


// ============ AUDIO/MUSIC SYSTEM ============
let audioContext = null;
let musicPlaying = false;
let musicNodes = [];

// ============ MUSIC TRACKS — purchasable in the shop ============
// Each track defines a melody + bass + tempo (and an oscillator wave for character).
// playMusic() picks the track id from shopData.equippedMusic.
const MUSIC_TRACKS = {
    klassinen: {
        id: 'klassinen', name: 'Klassinen', price: 0, wave: 'square', tempo: 0.15,
        melody: [
            392, 440, 494, 523, 587, 523, 494, 440,
            392, 330, 349, 392, 440, 392, 349, 330,
            294, 330, 349, 392, 440, 494, 523, 587,
            523, 494, 440, 392, 349, 330, 294, 330
        ],
        bass: [
            196, 196, 220, 220, 247, 247, 262, 262,
            196, 165, 175, 196, 220, 196, 175, 165,
            147, 165, 175, 196, 220, 247, 262, 294,
            262, 247, 220, 196, 175, 165, 147, 165
        ]
    },
    chiptune: {
        id: 'chiptune', name: 'Chiptune', price: 500, wave: 'square', tempo: 0.11,
        melody: [
            659, 622, 659, 622, 659, 494, 587, 523,
            440, 0,   262, 330, 440, 0,   494, 523,
            440, 0,   262, 330, 440, 494, 523, 440,
            659, 622, 659, 622, 659, 494, 587, 523
        ],
        bass: [
            220, 220, 220, 220, 165, 165, 196, 196,
            147, 147, 147, 147, 165, 165, 220, 220,
            147, 147, 165, 165, 196, 196, 220, 220,
            220, 220, 220, 220, 165, 165, 196, 196
        ]
    },
    discoteca: {
        id: 'discoteca', name: 'Discoteca', price: 1500, wave: 'sawtooth', tempo: 0.13,
        melody: [
            523, 0,   523, 587, 0,   523, 466, 0,
            440, 0,   440, 523, 0,   440, 392, 0,
            349, 0,   349, 440, 0,   349, 330, 0,
            392, 0,   440, 523, 0,   587, 523, 0
        ],
        bass: [
            131, 131, 131, 131, 131, 131, 131, 131,
            110, 110, 110, 110, 110, 110, 110, 110,
            87,  87,  87,  87,  87,  87,  87,  87,
            98,  98,  98,  98,  131, 131, 131, 131
        ]
    },
    jungle: {
        id: 'jungle', name: 'Jungle Beat', price: 2500, wave: 'triangle', tempo: 0.12,
        melody: [
            330, 392, 440, 392, 330, 0,   294, 330,
            262, 294, 330, 392, 440, 0,   392, 330,
            330, 392, 440, 494, 523, 0,   494, 440,
            392, 0,   392, 330, 294, 0,   262, 0
        ],
        bass: [
            82,  98,  110, 98,  82,  82,  73,  82,
            65,  73,  82,  98,  110, 98,  98,  82,
            82,  98,  110, 123, 131, 131, 123, 110,
            98,  98,  98,  82,  73,  73,  65,  65
        ]
    },
    nokia: {
        id: 'nokia', name: 'Nokian Soitto', price: 4000, wave: 'square', tempo: 0.16,
        // Famous mobile-phone ringtone melody (E)
        melody: [
            659, 587, 370, 415, 554, 494, 294, 330,
            494, 440, 277, 330, 440, 392, 0,   0,
            659, 587, 370, 415, 554, 494, 294, 330,
            494, 440, 277, 330, 440, 0,   0,   0
        ],
        bass: [
            110, 110, 110, 110, 147, 147, 147, 147,
            110, 110, 110, 110, 98,  98,  98,  98,
            110, 110, 110, 110, 147, 147, 147, 147,
            110, 110, 110, 110, 98,  98,  98,  98
        ]
    },
    cosmic: {
        id: 'cosmic', name: 'Cosmic Drift', price: 7500, wave: 'sine', tempo: 0.20,
        melody: [
            523, 659, 784, 988, 880, 784, 659, 523,
            494, 587, 698, 880, 784, 698, 587, 494,
            440, 523, 659, 784, 698, 659, 587, 523,
            494, 440, 392, 440, 494, 587, 659, 784
        ],
        bass: [
            87,  87,  98,  98,  131, 131, 87,  87,
            73,  73,  98,  98,  117, 117, 73,  73,
            55,  55,  87,  87,  98,  98,  65,  65,
            73,  73,  82,  82,  98,  98,  131, 131
        ]
    }
};

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playNote(frequency, startTime, duration, type = 'square') {
    const ctx = audioContext;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);

    gainNode.gain.setValueAtTime(0.08, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.9);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);

    musicNodes.push(oscillator);
}

function playBass(frequency, startTime, duration) {
    const ctx = audioContext;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    gainNode.gain.setValueAtTime(0.12, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.8);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);

    musicNodes.push(oscillator);
}

function startMusic() {
    if (musicPlaying) return;
    initAudio();
    musicPlaying = true;

    // Pick the track the player has equipped (falls back to default if missing)
    const trackId = (shopData && shopData.equippedMusic) || 'klassinen';
    const track = MUSIC_TRACKS[trackId] || MUSIC_TRACKS.klassinen;
    const melody = track.melody;
    const bass = track.bass;
    const tempo = track.tempo;
    const wave = track.wave;

    function playLoop() {
        if (!musicPlaying) return;

        const ctx = audioContext;
        const now = ctx.currentTime;

        melody.forEach((freq, i) => {
            if (freq > 0) playNote(freq, now + i * tempo, tempo * 0.9, wave);
        });

        bass.forEach((freq, i) => {
            if (i % 2 === 0 && freq > 0) {
                playBass(freq / 2, now + i * tempo, tempo * 1.8);
            }
        });

        // Schedule next loop
        const loopDuration = melody.length * tempo * 1000;
        setTimeout(playLoop, loopDuration - 50);
    }

    playLoop();
}

function stopMusic() {
    musicPlaying = false;
    musicNodes.forEach(node => {
        try { node.stop(); } catch (e) { }
    });
    musicNodes = [];
}

function playCollectSound() {
    if (!audioContext) return;
    const ctx = audioContext;
    const now = ctx.currentTime;

    // Happy ding sound
    [880, 1108, 1318].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.15, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.2);
    });
}

function playCrashSound() {
    if (!audioContext) return;
    const ctx = audioContext;
    const now = ctx.currentTime;

    // Crash/boom sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
}

function playTongueCatchSound() {
    if (!audioContext) return;
    const ctx = audioContext;
    const now = ctx.currentTime;

    // Tongue slurp sound - quick ascending then descending
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(800, now + 0.05);
    osc.frequency.linearRampToValueAtTime(400, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
}

// ============ QUALITY SETTINGS (mobile performance) ============
const QUALITY_KEY = 'lisko_quality_v1';
const QUALITY_PRESETS = {
    low:  { name: 'low',  antialias: false, pixelRatio: 1.0, shadows: false, shadowMapSize: 512,  softShadows: false, fogFarMul: 0.55, cameraFar: 130 },
    med:  { name: 'med',  antialias: false, pixelRatio: 1.0, shadows: true,  shadowMapSize: 1024, softShadows: false, fogFarMul: 0.85, cameraFar: 180 },
    high: { name: 'high', antialias: true,  pixelRatio: 2.0, shadows: true,  shadowMapSize: 2048, softShadows: true,  fogFarMul: 1.0,  cameraFar: 200 }
};
const _isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const QUALITY_NAME = localStorage.getItem(QUALITY_KEY) || (_isMobile ? 'low' : 'high');
const QUALITY = QUALITY_PRESETS[QUALITY_NAME] || QUALITY_PRESETS.high;

// ============ THREE.JS SETUP ============
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: QUALITY.antialias, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY.pixelRatio));
renderer.shadowMap.enabled = QUALITY.shadows;
renderer.shadowMap.type = QUALITY.softShadows ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;

function makeSkyGradient(topHex, bottomHex) {
    const c = document.createElement('canvas');
    c.width = 4;
    c.height = 256;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    const toCss = h => '#' + h.toString(16).padStart(6, '0');
    grad.addColorStop(0, toCss(topHex));
    grad.addColorStop(1, toCss(bottomHex));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 4, 256);
    const tex = new THREE.CanvasTexture(c);
    if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

const scene = new THREE.Scene();
scene.background = makeSkyGradient(0x6b9bc3, 0x8fa87a); // jungle defaults; applyBiome swaps per biome
scene.fog = new THREE.Fog(0x7a9a6a, 60, 190 * QUALITY.fogFarMul);  // Realistic depth fog

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, QUALITY.cameraFar);
camera.position.set(0, 8, -12);
camera.lookAt(0, 2, 10);

// ============ REALISTIC SKY BACKGROUND ============
// Create layered background for depth

// Distant mountains/hills
const hillMaterial = new THREE.MeshBasicMaterial({ color: 0x4a6a4a, fog: true });
let _biomeDecorStart = scene.children.length;
for (let i = 0; i < 8; i++) {
    const hillGeom = new THREE.ConeGeometry(15 + Math.random() * 20, 20 + Math.random() * 15, 6);
    const hill = new THREE.Mesh(hillGeom, hillMaterial);
    const side = i < 4 ? -1 : 1;
    hill.position.set(
        side * (35 + Math.random() * 30),
        -5,
        50 + i * 15 + Math.random() * 10
    );
    scene.add(hill);
}
for (let i = _biomeDecorStart; i < scene.children.length; i++) { scene.children[i].userData.biomeDecor = true; state.biomeDecor.push(scene.children[i]); }

// Distant tree line (silhouettes)
const distantTreeMaterial = new THREE.MeshBasicMaterial({ color: 0x3d5a3d, fog: true });
_biomeDecorStart = scene.children.length;
for (let z = 60; z < 250; z += 8) {
    for (let side = -1; side <= 1; side += 2) {
        const x = side * (25 + Math.random() * 15);

        // Tree trunk silhouette
        const trunkGeom = new THREE.CylinderGeometry(0.3, 0.5, 10 + Math.random() * 8, 6);
        const trunk = new THREE.Mesh(trunkGeom, distantTreeMaterial);
        trunk.position.set(x, 5, z + Math.random() * 5);
        scene.add(trunk);

        // Canopy silhouette
        const canopyGeom = new THREE.SphereGeometry(4 + Math.random() * 3, 6, 4);
        const canopy = new THREE.Mesh(canopyGeom, distantTreeMaterial);
        canopy.position.set(x, 12 + Math.random() * 4, z + Math.random() * 5);
        canopy.scale.y = 0.7;
        scene.add(canopy);
    }
}
for (let i = _biomeDecorStart; i < scene.children.length; i++) { scene.children[i].userData.biomeDecor = true; state.biomeDecor.push(scene.children[i]); }

// ============ CLOUDS (high in the sky — visible especially during airplane flight) ============
state.clouds = [];
const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.92, fog: true });
for (let i = 0; i < 22; i++) {
    const cloud = new THREE.Group();
    const puffs = 3 + Math.floor(Math.random() * 4);
    for (let p = 0; p < puffs; p++) {
        const r = 1.6 + Math.random() * 2.2;
        const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 5), cloudMaterial);
        puff.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 4);
        puff.scale.y = 0.55;
        cloud.add(puff);
    }
    cloud.position.set(
        (Math.random() - 0.5) * 70,        // x spread
        17 + Math.random() * 12,           // altitude 17–29 (above the trees)
        -10 + Math.random() * 280           // z spread along the track
    );
    const s = 0.8 + Math.random() * 1.4;
    cloud.scale.multiplyScalar(s);
    scene.add(cloud);
    state.clouds.push(cloud);
}

// Sky gradient effect - large background plane
const skyGeom = new THREE.PlaneGeometry(300, 100);
const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
        topColor: { value: new THREE.Color(0x6b9bc3) },     // Blue sky
        bottomColor: { value: new THREE.Color(0x8fa87a) },  // Misty green
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec2 vUv;
        void main() {
            gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0);
        }
    `,
    side: THREE.BackSide,
    fog: false
});
const sky = new THREE.Mesh(skyGeom, skyMaterial);
sky.position.set(0, 30, 100);
scene.add(sky);

// ============ LIGHTING (Realistic Rainforest) ============
const ambientLight = new THREE.AmbientLight(0x7a9a7a, 0.6);  // Natural ambient
scene.add(ambientLight);

// Filtered sunlight through canopy
const sunLight = new THREE.DirectionalLight(0xfff8e7, 0.9);  // Warm sunlight
sunLight.position.set(30, 60, 20);
sunLight.castShadow = QUALITY.shadows;
sunLight.shadow.mapSize.width = QUALITY.shadowMapSize;
sunLight.shadow.mapSize.height = QUALITY.shadowMapSize;
sunLight.shadow.camera.left = -50;
sunLight.shadow.camera.right = 50;
sunLight.shadow.camera.top = 50;
sunLight.shadow.camera.bottom = -50;
scene.add(sunLight);

// Soft fill light (sky reflection)
const fillLight = new THREE.DirectionalLight(0x8ab5cf, 0.25);
fillLight.position.set(-20, 30, -10);
scene.add(fillLight);

// ============ LIZARD MODEL (REALISTIC SEGMENTED) ============
const lizardGroup = new THREE.Group();

// Materials — Gemini reference with smoother realistic shading
const skinColor = 0x3aa84a; // Bright iguana green (Gemini concept art)
const bellyColor = 0xb9e08c; // Pale chartreuse belly
const scaleMaterial = new THREE.MeshStandardMaterial({
    color: skinColor,
    roughness: 0.45,
    metalness: 0.15
});
const bellyMaterial = new THREE.MeshStandardMaterial({
    color: bellyColor,
    roughness: 0.75
});
// Dark armor plates — keep faceted for visible plate edges
const darkScaleMaterial = new THREE.MeshStandardMaterial({
    color: 0x1f3a22,
    roughness: 0.65,
    metalness: 0.1,
    flatShading: true
});
// Mid-tone scale tile (between body and dark armor)
const midScaleMaterial = new THREE.MeshStandardMaterial({
    color: 0x276c2a,
    roughness: 0.55,
    metalness: 0.1,
    flatShading: true
});
// Glowing rune/spine pattern (cyan, as in Gemini reference)
const runeMaterial = new THREE.MeshStandardMaterial({
    color: 0x4dd9ff,
    emissive: 0x2bc2ff,
    emissiveIntensity: 1.4,
    roughness: 0.3,
    metalness: 0.2
});
// Tail-tip crystal (blue diamond glow)
const crystalMaterial = new THREE.MeshStandardMaterial({
    color: 0x6ab8ff,
    emissive: 0x3a7eff,
    emissiveIntensity: 1.2,
    roughness: 0.15,
    metalness: 0.4,
    flatShading: true
});

// Body Segments for S-Curve Animation
const hips = new THREE.Group();
const chest = new THREE.Group();
const headGroup = new THREE.Group();

// Linking geometry to groups — narrower, lower, more lizard-like
// HIPS (narrower than before, extends forward to bridge the waist)
const hipsGeom = new THREE.SphereGeometry(0.35, 32, 24);
const hipsMesh = new THREE.Mesh(hipsGeom, scaleMaterial);
hipsMesh.scale.set(0.82, 0.65, 1.85);
hips.add(hipsMesh);
const hipsBelly = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 24), bellyMaterial);
hipsBelly.position.y = -0.10;
hipsBelly.scale.set(0.78, 0.38, 1.70);
hips.add(hipsBelly);

// Dark armor plates flanking the spine (Gemini concept's plated scales)
{
    const plateGeom = new THREE.BoxGeometry(0.12, 0.03, 0.14);
    for (let i = -1; i <= 1; i += 2) {
        for (let j = 0; j < 2; j++) {
            const plate = new THREE.Mesh(plateGeom, darkScaleMaterial);
            plate.position.set(i * 0.16, 0.27, -0.08 + j * 0.18);
            plate.rotation.y = i * 0.25;
            hips.add(plate);
        }
    }
}
// Glowing cyan rune (diamond + bar) on hips back
{
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.22), runeMaterial);
    bar.position.set(0, 0.30, 0);
    hips.add(bar);
    const diamond = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.02, 0.10), runeMaterial);
    diamond.rotation.y = Math.PI / 4;
    diamond.position.set(0, 0.30, 0.05);
    hips.add(diamond);
}
// Dorsal ridge spikes on hips (saw-blade spine)
{
    const ridgeGeom = new THREE.ConeGeometry(0.035, 0.10, 4);
    [-0.20, -0.12, 0.13, 0.20].forEach(z => {
        const spike = new THREE.Mesh(ridgeGeom, darkScaleMaterial);
        spike.position.set(0, 0.33, z);
        hips.add(spike);
    });
}
// Hip side spikes (sticking out laterally)
{
    const hipSpikeGeom = new THREE.ConeGeometry(0.05, 0.18, 4);
    [1, -1].forEach(side => {
        const spike = new THREE.Mesh(hipSpikeGeom, darkScaleMaterial);
        spike.rotation.z = side * Math.PI / 2;
        spike.rotation.y = side * -0.1;
        spike.position.set(side * 0.30, 0.12, 0.00);
        hips.add(spike);
    });
}

// CHEST (broader at shoulders, narrower at waist)
const chestGeom = new THREE.SphereGeometry(0.38, 32, 24);
const chestMesh = new THREE.Mesh(chestGeom, scaleMaterial);
chestMesh.scale.set(0.88, 0.72, 1.65);
chest.add(chestMesh);
const chestBelly = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 24), bellyMaterial);
chestBelly.position.y = -0.10;
chestBelly.scale.set(0.85, 0.40, 1.55);
chest.add(chestBelly);

// NECK (tapered cylinder bridging chest → head)
const neckGeom = new THREE.CylinderGeometry(0.18, 0.24, 0.40, 18);
const neck = new THREE.Mesh(neckGeom, scaleMaterial);
neck.rotation.x = Math.PI / 2;
neck.position.set(0, 0.04, 0.55);
chest.add(neck);
const neckBelly = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.18, 0.36, 18), bellyMaterial);
neckBelly.rotation.x = Math.PI / 2;
neckBelly.position.set(0, -0.08, 0.55);
chest.add(neckBelly);

// Dark armor plates along the chest spine
{
    const plateGeom = new THREE.BoxGeometry(0.13, 0.03, 0.16);
    for (let i = -1; i <= 1; i += 2) {
        for (let j = 0; j < 2; j++) {
            const plate = new THREE.Mesh(plateGeom, darkScaleMaterial);
            plate.position.set(i * 0.17, 0.29, -0.12 + j * 0.22);
            plate.rotation.y = i * 0.22;
            chest.add(plate);
        }
    }
}
// Glowing cyan rune chain along spine (longer, multi-segment)
{
    const segmentGeom = new THREE.BoxGeometry(0.07, 0.02, 0.10);
    for (let j = 0; j < 3; j++) {
        const seg = new THREE.Mesh(segmentGeom, runeMaterial);
        seg.position.set(0, 0.32, -0.13 + j * 0.13);
        chest.add(seg);
    }
    // Connector bar
    const connector = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.34), runeMaterial);
    connector.position.set(0, 0.31, 0);
    chest.add(connector);
    // Side chevrons (small V-shaped glyphs flanking the chain)
    const chevGeom = new THREE.BoxGeometry(0.03, 0.02, 0.08);
    [-1, 1].forEach(i => {
        for (let k = 0; k < 2; k++) {
            const chev = new THREE.Mesh(chevGeom, runeMaterial);
            chev.rotation.y = i * Math.PI / 6;
            chev.position.set(i * 0.06, 0.32, -0.07 + k * 0.14);
            chest.add(chev);
        }
    });
}
// Dorsal ridge spikes on chest (saw-blade spine)
{
    const bigRidgeGeom = new THREE.ConeGeometry(0.04, 0.13, 4);
    const smallRidgeGeom = new THREE.ConeGeometry(0.03, 0.09, 4);
    [
        { z: -0.20, geom: smallRidgeGeom },
        { z: -0.07, geom: bigRidgeGeom },
        { z:  0.07, geom: bigRidgeGeom },
        { z:  0.20, geom: smallRidgeGeom }
    ].forEach(s => {
        const spike = new THREE.Mesh(s.geom, darkScaleMaterial);
        spike.position.set(0, 0.34, s.z);
        chest.add(spike);
    });
}
// Shoulder side spikes (sticking out laterally, like reference)
{
    const shoulderSpikeGeom = new THREE.ConeGeometry(0.055, 0.22, 4);
    [1, -1].forEach(side => {
        // Forward shoulder spike
        const front = new THREE.Mesh(shoulderSpikeGeom, darkScaleMaterial);
        front.rotation.z = side * Math.PI / 2;
        front.rotation.y = side * 0.3;
        front.position.set(side * 0.30, 0.18, 0.18);
        chest.add(front);
        // Rear shoulder spike (smaller)
        const rear = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.18, 4), darkScaleMaterial);
        rear.rotation.z = side * Math.PI / 2;
        rear.rotation.y = side * -0.2;
        rear.position.set(side * 0.28, 0.15, -0.05);
        chest.add(rear);
    });
}

// Position segments — lower body, slightly more spaced for elongated look
hips.position.set(0, 0.42, -0.50);
chest.position.set(0, 0.42, 0.55);

lizardGroup.add(hips);
lizardGroup.add(chest);

// Use a dummy "body" for legacy reference if needed
const body = chestMesh; // Alias for compatibility with simple bounce animations

// HEAD
// HEAD (Detailed)
// Skull (Back of head)
const skullGeom = new THREE.BoxGeometry(0.4, 0.3, 0.35);
// Round the box slightly by using a subdivision modifier concept or just scaling a sphere/box combo
// Let's use a Sphere for the main skull slightly flattened
// Skull — wider at the back, slightly flattened, tapers toward snout
const skullMesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 24), scaleMaterial);
skullMesh.scale.set(1.25, 0.75, 1.05);
skullMesh.position.set(0, 0, -0.05);
headGroup.add(skullMesh);

// Cheek bulges (wider jaw line)
[1, -1].forEach(side => {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 16), scaleMaterial);
    cheek.scale.set(0.85, 0.7, 1.2);
    cheek.position.set(side * 0.16, -0.04, 0.15);
    headGroup.add(cheek);
});

// Snout — sharply tapered cone (wider base near skull, narrower tip)
const snoutGeom = new THREE.CylinderGeometry(0.06, 0.20, 0.55, 24);
const snoutMesh = new THREE.Mesh(snoutGeom, scaleMaterial);
snoutMesh.rotation.x = -Math.PI / 2;
snoutMesh.position.set(0, -0.03, 0.48);
snoutMesh.scale.set(1.1, 0.85, 1.0);
headGroup.add(snoutMesh);

// Snout tip (rounded button so the cone tip isn't a sharp polygon)
const snoutTip = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), scaleMaterial);
snoutTip.scale.set(1.1, 0.85, 0.9);
snoutTip.position.set(0, -0.03, 0.74);
headGroup.add(snoutTip);

// Jaw (Lower jaw) — paler, slightly recessed
const jawMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.16, 0.50, 24), new THREE.MeshStandardMaterial({ color: 0x8fbc8f, roughness: 0.8 }));
jawMesh.rotation.x = -Math.PI / 2;
jawMesh.scale.set(1.0, 0.7, 1.0);
jawMesh.position.set(0, -0.13, 0.43);
headGroup.add(jawMesh);
const jawTip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12), new THREE.MeshStandardMaterial({ color: 0x8fbc8f, roughness: 0.8 }));
jawTip.scale.set(1.0, 0.7, 0.9);
jawTip.position.set(0, -0.13, 0.68);
headGroup.add(jawTip);

// Nostrils
const nostrilGeom = new THREE.SphereGeometry(0.02, 6, 6);
const nostrilMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
[1, -1].forEach(side => {
    const n = new THREE.Mesh(nostrilGeom, nostrilMat);
    n.position.set(side * 0.08, 0.05, 0.7); // On tip of snout
    headGroup.add(n);
});

// Eyes — glowing yellow as in Gemini reference
const eyeGeom = new THREE.SphereGeometry(0.09, 24, 24);
const pupilGeom = new THREE.SphereGeometry(0.045, 16, 16);
const eyeMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xffaa00,
    emissiveIntensity: 1.2,
    roughness: 0.3
});
const pupilMat = new THREE.MeshBasicMaterial({ color: 0x111111 }); // Dark slit on the yellow eye

[1, -1].forEach(side => {
    // Eye Ridge/Socket (brow)
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), scaleMaterial);
    socket.position.set(side * 0.2, 0.12, 0.1);
    socket.scale.set(1, 0.8, 1.1);
    headGroup.add(socket);

    // Eye (glowing yellow)
    const eye = new THREE.Mesh(eyeGeom, eyeMat);
    eye.position.set(side * 0.24, 0.12, 0.15);
    headGroup.add(eye);

    // Dark vertical pupil slit
    const pupil = new THREE.Mesh(pupilGeom, pupilMat);
    pupil.scale.set(0.4, 1.5, 0.4);
    pupil.rotation.y = side * 0.3;
    pupil.position.set(side * 0.28, 0.12, 0.22);
    headGroup.add(pupil);
});

// CROWN OF SPIKES (radiating from back of skull, Gemini reference)
{
    const bigSpikeGeom = new THREE.ConeGeometry(0.065, 0.36, 4);
    const midSpikeGeom = new THREE.ConeGeometry(0.055, 0.28, 4);
    const smallSpikeGeom = new THREE.ConeGeometry(0.045, 0.22, 4);
    // Big center back spike + symmetric fan of 4 mid + 4 small spikes
    const spikeAngles = [
        // Center back (largest)
        { geom: bigSpikeGeom, yaw: 0,     pitch: -0.30, pos: [ 0.00, 0.22, -0.18] },
        // First ring (mid size)
        { geom: midSpikeGeom, yaw:  0.50, pitch: -0.20, pos: [ 0.12, 0.18, -0.15] },
        { geom: midSpikeGeom, yaw: -0.50, pitch: -0.20, pos: [-0.12, 0.18, -0.15] },
        { geom: midSpikeGeom, yaw:  0.90, pitch: -0.05, pos: [ 0.20, 0.10, -0.08] },
        { geom: midSpikeGeom, yaw: -0.90, pitch: -0.05, pos: [-0.20, 0.10, -0.08] },
        // Outer ring (small, swept further back/down)
        { geom: smallSpikeGeom, yaw:  1.25, pitch:  0.10, pos: [ 0.22, 0.02,  0.00] },
        { geom: smallSpikeGeom, yaw: -1.25, pitch:  0.10, pos: [-0.22, 0.02,  0.00] },
        { geom: smallSpikeGeom, yaw:  1.55, pitch:  0.20, pos: [ 0.20,-0.02,  0.10] },
        { geom: smallSpikeGeom, yaw: -1.55, pitch:  0.20, pos: [-0.20,-0.02,  0.10] },
        // Small forehead crest (forward-leaning)
        { geom: smallSpikeGeom, yaw: 0, pitch: 0.25, pos: [ 0.00, 0.20, 0.10] }
    ];
    spikeAngles.forEach(s => {
        const spike = new THREE.Mesh(s.geom, darkScaleMaterial);
        spike.position.set(s.pos[0], s.pos[1], s.pos[2]);
        spike.rotation.set(s.pitch, s.yaw, 0);
        headGroup.add(spike);
    });
}

// Hexagonal scale plates on top of the head (subtle, between spikes)
{
    const plateGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.015, 6);
    [
        { x:  0.08, z: 0.00 },
        { x: -0.08, z: 0.00 },
        { x:  0.00, z: 0.08 },
        { x:  0.13, z: 0.10 },
        { x: -0.13, z: 0.10 }
    ].forEach(p => {
        const plate = new THREE.Mesh(plateGeom, darkScaleMaterial);
        plate.position.set(p.x, 0.18, p.z);
        headGroup.add(plate);
    });
}

headGroup.position.set(0, 0.65, 1.4); // slightly above chest

// TONGUE (for jättikieli power)
const tongueMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6b8a, // Pink tongue
    roughness: 0.8
});
const tongueGeometry = new THREE.CylinderGeometry(0.025, 0.015, 1, 8);
tongueGeometry.translate(0, 0.5, 0); // Pivot at base (so it extends from mouth)
const tongueMesh = new THREE.Mesh(tongueGeometry, tongueMaterial);
tongueMesh.rotation.x = Math.PI / 2; // Point FORWARD (z direction)
tongueMesh.position.set(0, -0.08, 0.75); // At front of snout/mouth
tongueMesh.scale.set(1, 0.01, 1); // Very small by default
tongueMesh.visible = false; // HIDDEN by default
headGroup.add(tongueMesh);

// Tongue tip (sticky ball)
const tongueTipGeom = new THREE.SphereGeometry(0.05, 8, 8);
const tongueTip = new THREE.Mesh(tongueTipGeom, tongueMaterial);
tongueTip.position.y = 1; // At end of tongue cylinder
tongueMesh.add(tongueTip);

// Track tongue animation state
let tongueAnimating = false;
let tonguePhase = 0; // 0 = idle, 0-1 = extending, 1-2 = retracting
let tongueMaxReach = 15;

function animateTongue(targetZ) {
    if (tongueAnimating) return;
    tongueAnimating = true;
    tonguePhase = 0;
    tongueMaxReach = Math.min(Math.max(targetZ, 5), 20); // Clamp reach
    tongueMesh.visible = true; // Show tongue!
}

function updateTongueAnimation(delta) {
    if (!tongueAnimating) {
        tongueMesh.visible = false; // Keep hidden
        tongueMesh.scale.y = 0.01;
        return;
    }

    tonguePhase += delta * 6; // Animation speed

    if (tonguePhase < 1) {
        // Extend phase (0 to 1)
        tongueMesh.scale.y = tonguePhase * tongueMaxReach;
    } else if (tonguePhase < 2) {
        // Retract phase (1 to 2)
        const retractProgress = tonguePhase - 1;
        tongueMesh.scale.y = (1 - retractProgress) * tongueMaxReach;
    } else {
        // Done - hide tongue
        tongueAnimating = false;
        tonguePhase = 0;
        tongueMesh.scale.y = 0.01;
        tongueMesh.visible = false;
    }
}

lizardGroup.add(headGroup);

// TAIL
const tail = new THREE.Group();
const tailSegments = [];
const numTailSegs = 14; // Smoother flowing tail
for (let i = 0; i < numTailSegs; i++) {
    const s = 1 - (i / numTailSegs);
    const segGeom = new THREE.CylinderGeometry(0.25 * s, 0.15 * s, 0.32, 20);
    const seg = new THREE.Mesh(segGeom, scaleMaterial);
    seg.rotation.x = Math.PI / 2;
    seg.position.z = -0.2 - (i * 0.25);
    seg.position.y = 0.5 - (i * 0.014);

    // Glowing rune cross on top of each tail segment (fades toward tip).
    // Seg is rotated PI/2 around X, so its local +Y maps to world +Z (length axis)
    // and local -Z maps to world +Y (on top of the cylinder).
    if (i < numTailSegs - 1) {
        const tailRune = new THREE.Mesh(
            new THREE.BoxGeometry(0.08 * s, 0.28, 0.015),
            runeMaterial
        );
        tailRune.position.set(0, 0, -0.25 * s);
        seg.add(tailRune);

        // Cross bar (chevron pattern)
        if (i % 2 === 0 && i < numTailSegs - 2) {
            const crossBar = new THREE.Mesh(
                new THREE.BoxGeometry(0.13 * s, 0.04, 0.015),
                runeMaterial
            );
            crossBar.position.set(0, 0, -0.25 * s);
            seg.add(crossBar);
        }

        // Dorsal spike on top of segment (saw-blade tail)
        if (i < numTailSegs - 2) {
            const tailSpike = new THREE.Mesh(
                new THREE.ConeGeometry(0.035 * s, 0.12 * s, 4),
                darkScaleMaterial
            );
            // Local -Z is world +Y (the top). Rotate cone so its tip aligns with -Z.
            tailSpike.rotation.x = Math.PI / 2;
            tailSpike.position.set(0, 0, -0.28 * s);
            seg.add(tailSpike);
        }
    }

    tail.add(seg);
    tailSegments.push(seg);
}

// CRYSTAL TIP at end of tail (blue diamond, Gemini reference)
{
    const lastSeg = tailSegments[numTailSegs - 1];
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), crystalMaterial);
    crystal.position.set(0, -0.32, 0);
    crystal.rotation.x = Math.PI / 2;
    crystal.scale.set(0.7, 1.4, 0.7);
    lastSeg.add(crystal);
}

lizardGroup.add(tail);

// LEGS
var legs = [];
const legPos = [
    { x: -0.4, z: 0.6, group: chest, side: -1 }, // Front Left
    { x: 0.4, z: 0.6, group: chest, side: 1 },   // Front Right
    { x: -0.4, z: -0.4, group: hips, side: -1 }, // Back Left
    { x: 0.4, z: -0.4, group: hips, side: 1 }    // Back Right
];

legPos.forEach(data => {
    // Construct hierarchy
    // Pivot joint attached to body
    const shoulder = new THREE.Group();
    shoulder.position.set(data.side * 0.3, 0, 0); // Relative to body part center

    data.group.add(shoulder);

    // Leg parts
    const upperLen = 0.35;
    const lowerLen = 0.35;

    const upperLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.06, upperLen, 16), scaleMaterial);
    upperLeg.geometry.translate(0, -upperLen / 2, 0); // Pivot at top

    const lowerLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, lowerLen, 14), scaleMaterial);
    lowerLeg.geometry.translate(0, -lowerLen / 2, 0); // Pivot at top

    // Foot — flat wider lizard paw (sphere scaled to a disc)
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), scaleMaterial);
    foot.scale.set(1.4, 0.30, 1.3);

    shoulder.add(upperLeg);
    upperLeg.add(lowerLeg);
    lowerLeg.position.y = -upperLen;
    lowerLeg.add(foot);
    foot.position.y = -lowerLen;
    foot.position.z = 0.05;

    // Fingers/Claws — 5 splayed digits matching reference
    const clawMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const digitSplays = [
        { x: -0.08, z: 0.08, yaw: -0.6 },
        { x: -0.05, z: 0.12, yaw: -0.25 },
        { x:  0.00, z: 0.13, yaw:  0.0 },
        { x:  0.05, z: 0.12, yaw:  0.25 },
        { x:  0.08, z: 0.08, yaw:  0.6 }
    ];
    digitSplays.forEach(d => {
        // Small finger/toe bone (cylinder) — green like body
        const digit = new THREE.Mesh(
            new THREE.CylinderGeometry(0.015, 0.012, 0.08, 5),
            scaleMaterial
        );
        digit.rotation.x = Math.PI / 2;
        digit.rotation.y = d.yaw;
        digit.position.set(d.x, 0, d.z);
        foot.add(digit);

        // Dark pointed claw at the tip of each digit
        const claw = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.09, 4), clawMat);
        claw.rotation.x = -1.0;
        claw.rotation.y = d.yaw;
        claw.position.set(d.x + Math.sin(d.yaw) * 0.04, 0, d.z + Math.cos(d.yaw) * 0.04);
        foot.add(claw);
    });

    legs.push({
        shoulder: shoulder,
        upper: upperLeg,
        lower: lowerLeg,
        foot: foot,
        side: data.side,
        isFront: data.z > 0
    });
});

// ============ HIGH-DETAIL DECORATION PASS ============
// Hex scale tiles, belly rings, joint armor, cheek scales, lateral spines,
// extra rune dots, throat pouch — adds 100+ small detail meshes to match
// the Gemini reference's plated low-poly look.
{
    // Shared geometries (re-used → cheap)
    const hexTileGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.02, 6);
    const smallHexGeom = new THREE.CylinderGeometry(0.030, 0.030, 0.015, 6);
    const tinyDotGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.012, 6);
    const beltRingGeom = new THREE.TorusGeometry(0.20, 0.015, 4, 16);
    const jointPlateGeom = new THREE.SphereGeometry(0.06, 6, 6);
    const lateralSpikeGeom = new THREE.ConeGeometry(0.025, 0.08, 4);

    // ---- CHEST: hexagonal scale tile grid on top (paneling) ----
    const chestTiles = [
        // Row 1 (front)
        { x:  0.00, z:  0.30 }, { x: -0.10, z:  0.28 }, { x:  0.10, z:  0.28 },
        // Row 2
        { x: -0.18, z:  0.18 }, { x:  0.18, z:  0.18 }, { x: -0.22, z:  0.05 }, { x:  0.22, z:  0.05 },
        // Row 3 (flanks)
        { x: -0.25, z: -0.10 }, { x:  0.25, z: -0.10 }, { x: -0.20, z: -0.22 }, { x:  0.20, z: -0.22 },
        // Row 4 (rear)
        { x: -0.10, z: -0.28 }, { x:  0.10, z: -0.28 }
    ];
    chestTiles.forEach(t => {
        const tile = new THREE.Mesh(hexTileGeom, darkScaleMaterial);
        tile.position.set(t.x, 0.27, t.z);
        chest.add(tile);
    });

    // ---- CHEST: tiny cyan rune dots scattered on the plates ----
    [
        [-0.18, 0.18], [0.18, 0.18], [-0.22, 0.05], [0.22, 0.05],
        [-0.25, -0.10], [0.25, -0.10], [-0.10, -0.28], [0.10, -0.28]
    ].forEach(([x, z]) => {
        const dot = new THREE.Mesh(tinyDotGeom, runeMaterial);
        dot.position.set(x, 0.285, z);
        chest.add(dot);
    });

    // ---- CHEST: belly rings (segmentation underside) ----
    [-0.25, -0.10, 0.05, 0.20].forEach(z => {
        const ring = new THREE.Mesh(beltRingGeom, darkScaleMaterial);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(0, -0.14, z);
        ring.scale.set(0.85, 1, 1);
        chest.add(ring);
    });

    // ---- HIPS: hexagonal scale tile grid ----
    const hipTiles = [
        { x:  0.00, z:  0.20 }, { x: -0.10, z:  0.20 }, { x:  0.10, z:  0.20 },
        { x: -0.18, z:  0.05 }, { x:  0.18, z:  0.05 },
        { x: -0.22, z: -0.10 }, { x:  0.22, z: -0.10 },
        { x: -0.18, z: -0.22 }, { x:  0.18, z: -0.22 },
        { x:  0.00, z: -0.28 }
    ];
    hipTiles.forEach(t => {
        const tile = new THREE.Mesh(hexTileGeom, darkScaleMaterial);
        tile.position.set(t.x, 0.26, t.z);
        hips.add(tile);
    });

    // ---- HIPS: small cyan rune dots ----
    [
        [-0.18, 0.05], [0.18, 0.05], [-0.22, -0.10], [0.22, -0.10],
        [-0.18, -0.22], [0.18, -0.22]
    ].forEach(([x, z]) => {
        const dot = new THREE.Mesh(tinyDotGeom, runeMaterial);
        dot.position.set(x, 0.275, z);
        hips.add(dot);
    });

    // ---- HIPS: belly rings ----
    [-0.25, -0.10, 0.05, 0.20].forEach(z => {
        const ring = new THREE.Mesh(beltRingGeom, darkScaleMaterial);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(0, -0.12, z);
        ring.scale.set(0.80, 1, 1);
        hips.add(ring);
    });

    // ---- HEAD: cheek scales (4 each side) ----
    [1, -1].forEach(side => {
        for (let i = 0; i < 4; i++) {
            const scale = new THREE.Mesh(smallHexGeom, darkScaleMaterial);
            scale.position.set(side * (0.16 + (i % 2) * 0.04), -0.02 + Math.floor(i / 2) * 0.06, 0.20 + i * 0.05);
            scale.rotation.z = side * 0.3;
            headGroup.add(scale);
        }
    });

    // ---- HEAD: brow ridges (above eyes) ----
    [1, -1].forEach(side => {
        const brow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.06), darkScaleMaterial);
        brow.rotation.z = side * 0.3;
        brow.position.set(side * 0.20, 0.22, 0.12);
        headGroup.add(brow);
    });

    // ---- HEAD: jaw + lip line segments ----
    [-0.2, -0.1, 0.0, 0.1, 0.2].forEach(z => {
        const segL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.04), darkScaleMaterial);
        segL.position.set(-0.13, -0.10, 0.45 + z * 0.1);
        headGroup.add(segL);
        const segR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.04), darkScaleMaterial);
        segR.position.set(0.13, -0.10, 0.45 + z * 0.1);
        headGroup.add(segR);
    });

    // ---- HEAD: small teeth peeking from jaw line ----
    for (let i = 0; i < 6; i++) {
        const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.04, 3), new THREE.MeshStandardMaterial({ color: 0xfff5d6 }));
        tooth.rotation.x = Math.PI;
        tooth.position.set(-0.10 + i * 0.04, -0.08, 0.65);
        headGroup.add(tooth);
    }

    // ---- HEAD: nostril rim ridges ----
    [1, -1].forEach(side => {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.006, 4, 8), darkScaleMaterial);
        rim.rotation.x = Math.PI / 2;
        rim.position.set(side * 0.08, 0.06, 0.71);
        headGroup.add(rim);
    });

    // ---- HEAD: throat pouch (under jaw) ----
    {
        const pouch = new THREE.Mesh(new THREE.SphereGeometry(0.10, 8, 8), bellyMaterial);
        pouch.scale.set(1, 0.5, 1.3);
        pouch.position.set(0, -0.20, 0.25);
        headGroup.add(pouch);
        // Pouch stripe accents
        for (let k = 0; k < 3; k++) {
            const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.005, 0.015), darkScaleMaterial);
            stripe.position.set(0, -0.16, 0.18 + k * 0.05);
            headGroup.add(stripe);
        }
    }

    // ---- HEAD: small cyan rune dots on top of head ----
    [
        [0, 0.20, 0.15], [-0.05, 0.20, 0.05], [0.05, 0.20, 0.05]
    ].forEach(([x, y, z]) => {
        const dot = new THREE.Mesh(tinyDotGeom, runeMaterial);
        dot.position.set(x, y, z);
        headGroup.add(dot);
    });

    // ---- TAIL: lateral spines + side runes + segment bands on first 6 segments ----
    for (let i = 0; i < 6; i++) {
        const seg = tailSegments[i];
        const s = 1 - (i / numTailSegs);

        // Two lateral spines pointing sideways (left/right of seg)
        [1, -1].forEach(side => {
            const spine = new THREE.Mesh(lateralSpikeGeom, darkScaleMaterial);
            // Seg's local X is world ±X; rotate so the cone tips outward
            spine.rotation.z = side * Math.PI / 2;
            spine.position.set(side * 0.20 * s, 0, 0);
            seg.add(spine);
        });

        // Segment band ring (around the cylinder)
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.21 * s, 0.012, 4, 12), darkScaleMaterial);
        ring.position.set(0, 0.15, 0);
        seg.add(ring);

        // Small cyan rune dot above
        if (i < 5) {
            const dot = new THREE.Mesh(tinyDotGeom, runeMaterial);
            dot.position.set(0, 0, -0.18 * s);
            seg.add(dot);
        }
    }

    // ---- LEGS: shoulder/knee armor on each leg ----
    legs.forEach(leg => {
        // Shoulder cap (on upper leg, near pivot)
        const cap = new THREE.Mesh(jointPlateGeom, darkScaleMaterial);
        cap.position.set(0, -0.02, 0);
        cap.scale.set(1.1, 0.8, 1.1);
        leg.upper.add(cap);

        // Mid-thigh plate
        const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.06, 0.10), darkScaleMaterial);
        thigh.position.set(0, -0.18, 0.04);
        leg.upper.add(thigh);

        // Knee armor (between upper & lower)
        const knee = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), darkScaleMaterial);
        knee.position.set(0, 0, 0.02);
        leg.lower.add(knee);

        // Shin scale plate
        const shin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.06), darkScaleMaterial);
        shin.position.set(0, -0.20, 0.03);
        leg.lower.add(shin);

        // Ankle band
        const ankle = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 4, 10), darkScaleMaterial);
        ankle.rotation.x = Math.PI / 2;
        ankle.position.set(0, -0.32, 0);
        leg.lower.add(ankle);
    });
}

// ============ MASSIVE INSTANCED DETAIL PASS (1000+ scale tiles) ============
// Uses InstancedMesh so 1000+ tiles cost only a handful of draw calls.
{
    const Y_AXIS = new THREE.Vector3(0, 1, 0);
    const _m4 = new THREE.Matrix4();
    const _pos = new THREE.Vector3();
    const _norm = new THREE.Vector3();
    const _q = new THREE.Quaternion();
    const _scl = new THREE.Vector3(1, 1, 1);

    // Single tiny hex tile geometry shared by all instanced shells
    const hexBig   = new THREE.CylinderGeometry(0.045, 0.045, 0.015, 6);
    const hexMed   = new THREE.CylinderGeometry(0.032, 0.032, 0.012, 6);
    const hexSmall = new THREE.CylinderGeometry(0.022, 0.022, 0.010, 6);
    const dotGeom  = new THREE.SphereGeometry(0.012, 6, 6);

    function instanceShell({ parent, count, geom, material, sampler, jitter = 0 }) {
        const inst = new THREE.InstancedMesh(geom, material, count);
        inst.frustumCulled = false;
        for (let i = 0; i < count; i++) {
            const s = sampler(i, count);
            _pos.set(s.x, s.y, s.z);
            if (jitter) {
                _pos.x += (Math.random() - 0.5) * jitter;
                _pos.y += (Math.random() - 0.5) * jitter;
                _pos.z += (Math.random() - 0.5) * jitter;
            }
            _norm.set(s.nx, s.ny, s.nz);
            if (_norm.lengthSq() < 1e-6) _norm.set(0, 1, 0);
            else _norm.normalize();
            _q.setFromUnitVectors(Y_AXIS, _norm);
            _scl.set(s.scale || 1, s.scale || 1, s.scale || 1);
            _m4.compose(_pos, _q, _scl);
            inst.setMatrixAt(i, _m4);
        }
        inst.instanceMatrix.needsUpdate = true;
        parent.add(inst);
        return inst;
    }

    // Sample point on an ellipsoid surface (upper hemisphere or full)
    function ellipsoidSample(theta, phi, rx, ry, rz, yOffset = 0) {
        const x = rx * Math.sin(phi) * Math.cos(theta);
        const y = ry * Math.cos(phi) + yOffset;
        const z = rz * Math.sin(phi) * Math.sin(theta);
        // Approx normal: gradient of x²/rx² + y²/ry² + z²/rz²
        const nx = x / (rx * rx);
        const ny = (y - yOffset) / (ry * ry);
        const nz = z / (rz * rz);
        return { x, y, z, nx, ny, nz };
    }

    // ------------------- CHEST TOP SHELL ------------------- (≈140 tiles)
    instanceShell({
        parent: chest,
        count: 140,
        geom: hexBig,
        material: darkScaleMaterial,
        sampler: (i, n) => {
            // 14 cols (theta), 10 rows (phi)
            const col = i % 14, row = Math.floor(i / 14);
            const theta = (col / 14) * Math.PI * 2;
            const phi = 0.05 + (row / 10) * (Math.PI * 0.45);
            const s = ellipsoidSample(theta, phi, 0.42, 0.34, 0.55, 0);
            s.scale = 0.85 + (1 - row / 10) * 0.3;
            return s;
        },
        jitter: 0.005
    });

    // ------------------- CHEST FLANK SHELL (mid-tone) ------------------- (≈100)
    instanceShell({
        parent: chest,
        count: 100,
        geom: hexMed,
        material: midScaleMaterial,
        sampler: (i, n) => {
            const col = i % 10, row = Math.floor(i / 10);
            const theta = (col / 10) * Math.PI * 2;
            const phi = Math.PI * 0.5 + (row / 10) * (Math.PI * 0.30); // equator → lower
            const s = ellipsoidSample(theta, phi, 0.42, 0.34, 0.55, 0);
            s.scale = 0.7;
            return s;
        }
    });

    // ------------------- CHEST BELLY DOTS ------------------- (≈60)
    instanceShell({
        parent: chest,
        count: 60,
        geom: hexSmall,
        material: bellyMaterial,
        sampler: (i, n) => {
            const col = i % 8, row = Math.floor(i / 8);
            const theta = Math.PI + (col / 8 - 0.5) * 1.2; // bottom arc
            const phi = Math.PI * 0.78 + (row / 8) * 0.18;
            const s = ellipsoidSample(theta, phi, 0.42, 0.34, 0.55, 0);
            s.scale = 0.6;
            return s;
        }
    });

    // ------------------- HIPS TOP SHELL ------------------- (≈110)
    instanceShell({
        parent: hips,
        count: 110,
        geom: hexBig,
        material: darkScaleMaterial,
        sampler: (i, n) => {
            const col = i % 11, row = Math.floor(i / 11);
            const theta = (col / 11) * Math.PI * 2;
            const phi = 0.05 + (row / 10) * (Math.PI * 0.45);
            const s = ellipsoidSample(theta, phi, 0.40, 0.32, 0.50, 0);
            s.scale = 0.85 + (1 - row / 10) * 0.25;
            return s;
        },
        jitter: 0.005
    });

    // ------------------- HIPS FLANK SHELL (mid-tone) ------------------- (≈80)
    instanceShell({
        parent: hips,
        count: 80,
        geom: hexMed,
        material: midScaleMaterial,
        sampler: (i, n) => {
            const col = i % 10, row = Math.floor(i / 10);
            const theta = (col / 10) * Math.PI * 2;
            const phi = Math.PI * 0.5 + (row / 8) * (Math.PI * 0.30);
            const s = ellipsoidSample(theta, phi, 0.40, 0.32, 0.50, 0);
            s.scale = 0.7;
            return s;
        }
    });

    // ------------------- HIPS BELLY DOTS ------------------- (≈50)
    instanceShell({
        parent: hips,
        count: 50,
        geom: hexSmall,
        material: bellyMaterial,
        sampler: (i, n) => {
            const col = i % 7, row = Math.floor(i / 7);
            const theta = Math.PI + (col / 7 - 0.5) * 1.2;
            const phi = Math.PI * 0.78 + (row / 8) * 0.18;
            const s = ellipsoidSample(theta, phi, 0.40, 0.32, 0.50, 0);
            s.scale = 0.6;
            return s;
        }
    });

    // ------------------- HEAD TOP/SIDE SHELL ------------------- (≈70)
    instanceShell({
        parent: headGroup,
        count: 70,
        geom: hexMed,
        material: darkScaleMaterial,
        sampler: (i, n) => {
            const col = i % 10, row = Math.floor(i / 10);
            const theta = (col / 10) * Math.PI * 2;
            const phi = 0.10 + (row / 7) * (Math.PI * 0.55);
            const s = ellipsoidSample(theta, phi, 0.28, 0.22, 0.28, 0);
            s.scale = 0.75 + (1 - row / 7) * 0.2;
            return s;
        }
    });

    // ------------------- HEAD SNOUT SCALES ------------------- (≈50)
    instanceShell({
        parent: headGroup,
        count: 50,
        geom: hexSmall,
        material: midScaleMaterial,
        sampler: (i, n) => {
            const col = i % 10, row = Math.floor(i / 10);
            const theta = (col / 10) * Math.PI * 2;
            const phi = 0.10 + (row / 5) * (Math.PI * 0.50);
            // Snout is at z=0.45 offset, smaller radius
            const s = ellipsoidSample(theta, phi, 0.18, 0.15, 0.30, -0.05);
            s.z += 0.45;
            s.scale = 0.6;
            return s;
        }
    });

    // ------------------- CYAN RUNE DOTS (scattered around body) ------------------- (≈90)
    instanceShell({
        parent: chest,
        count: 30,
        geom: dotGeom,
        material: runeMaterial,
        sampler: (i, n) => {
            const theta = (i / n) * Math.PI * 6; // spiral pattern
            const phi = 0.25 + (i / n) * 0.6;
            return ellipsoidSample(theta, phi, 0.43, 0.36, 0.56, 0);
        }
    });
    instanceShell({
        parent: hips,
        count: 30,
        geom: dotGeom,
        material: runeMaterial,
        sampler: (i, n) => {
            const theta = (i / n) * Math.PI * 6;
            const phi = 0.25 + (i / n) * 0.6;
            return ellipsoidSample(theta, phi, 0.41, 0.34, 0.51, 0);
        }
    });
    instanceShell({
        parent: headGroup,
        count: 30,
        geom: dotGeom,
        material: runeMaterial,
        sampler: (i, n) => {
            const theta = (i / n) * Math.PI * 4;
            const phi = 0.2 + (i / n) * 0.4;
            return ellipsoidSample(theta, phi, 0.29, 0.23, 0.29, 0);
        }
    });

    // ------------------- TAIL SEGMENT SCALE BANDS ------------------- (≈14 × 12 = 168)
    tailSegments.forEach((seg, segIdx) => {
        const s = 1 - (segIdx / numTailSegs);
        if (s < 0.15) return; // skip very tip
        // Wrap a ring of scale tiles around the cylinder, 2 rings per segment
        instanceShell({
            parent: seg,
            count: 12,
            geom: hexSmall,
            material: darkScaleMaterial,
            sampler: (i, n) => {
                const theta = (i / n) * Math.PI * 2;
                // seg cylinder is along seg local +Y after rotation; cylinder geom is along +Y in local space
                // Wrap around the cylinder lateral surface
                const r = 0.24 * s;
                const x = r * Math.cos(theta);
                const z = r * Math.sin(theta);
                // Place near front and back of cylinder
                const y = (i < n / 2) ? 0.12 : -0.05;
                // Normal points outward radially (perpendicular to cylinder axis)
                return { x, y, z, nx: Math.cos(theta), ny: 0, nz: Math.sin(theta), scale: 0.8 };
            }
        });
        // Cyan rune dot ring on top of segment
        instanceShell({
            parent: seg,
            count: 4,
            geom: dotGeom,
            material: runeMaterial,
            sampler: (i, n) => {
                const r = 0.22 * s;
                const theta = -Math.PI / 2 + (i - n / 2) * 0.2; // top arc
                return {
                    x: r * Math.cos(theta),
                    y: (i - 1.5) * 0.06,
                    z: r * Math.sin(theta),
                    nx: Math.cos(theta), ny: 0, nz: Math.sin(theta),
                    scale: 0.7
                };
            }
        });
    });

    // ------------------- LEG SCALES (per leg) ------------------- (≈4 × 30 = 120)
    legs.forEach(leg => {
        // Upper leg scales
        instanceShell({
            parent: leg.upper,
            count: 18,
            geom: hexSmall,
            material: darkScaleMaterial,
            sampler: (i, n) => {
                const ring = Math.floor(i / 6);
                const pos = i % 6;
                const theta = (pos / 6) * Math.PI * 2;
                const r = 0.10 - ring * 0.012;
                return {
                    x: r * Math.cos(theta),
                    y: -0.05 - ring * 0.10,
                    z: r * Math.sin(theta),
                    nx: Math.cos(theta), ny: 0, nz: Math.sin(theta),
                    scale: 0.8
                };
            }
        });
        // Lower leg scales
        instanceShell({
            parent: leg.lower,
            count: 12,
            geom: hexSmall,
            material: darkScaleMaterial,
            sampler: (i, n) => {
                const ring = Math.floor(i / 6);
                const pos = i % 6;
                const theta = (pos / 6) * Math.PI * 2;
                const r = 0.05 - ring * 0.005;
                return {
                    x: r * Math.cos(theta),
                    y: -0.10 - ring * 0.12,
                    z: r * Math.sin(theta),
                    nx: Math.cos(theta), ny: 0, nz: Math.sin(theta),
                    scale: 0.7
                };
            }
        });
    });
}

scene.add(lizardGroup);

// ============ GROUND (Realistic Colorful Rainforest Floor) ============
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x3a4a28,  // Rich forest floor
    roughness: 0.95
});

// Various ground cover materials
const groundMaterials = {
    moss1: new THREE.MeshStandardMaterial({ color: 0x5a8a4a, roughness: 0.85 }),  // Bright green moss
    moss2: new THREE.MeshStandardMaterial({ color: 0x6a9a3a, roughness: 0.85 }),  // Yellow-green moss
    moss3: new THREE.MeshStandardMaterial({ color: 0x4a7a5a, roughness: 0.85 }),  // Blue-green moss
    wetSoil: new THREE.MeshStandardMaterial({ color: 0x2a3a1a, roughness: 0.95 }),  // Dark wet soil
    fallenLeaf1: new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 0.8 }),  // Brown leaf
    fallenLeaf2: new THREE.MeshStandardMaterial({ color: 0xb8860b, roughness: 0.8 }),  // Golden leaf
    fallenLeaf3: new THREE.MeshStandardMaterial({ color: 0xa0522d, roughness: 0.8 }),  // Sienna leaf
    fallenLeaf4: new THREE.MeshStandardMaterial({ color: 0xcd853f, roughness: 0.8 }),  // Peru/tan leaf
    flower1: new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.6 }),  // Red fallen petals
    flower2: new THREE.MeshStandardMaterial({ color: 0xffd93d, roughness: 0.6 }),  // Yellow petals
    flower3: new THREE.MeshStandardMaterial({ color: 0xc084fc, roughness: 0.6 }),  // Purple petals
    flower4: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }),  // White petals
};

function createGroundTile(zPosition) {
    const groundGeom = new THREE.PlaneGeometry(160, GROUND_LENGTH);
    const ground = new THREE.Mesh(groundGeom, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, zPosition);
    ground.receiveShadow = true;
    scene.add(ground);

    ground.userData.lines = [];

    // Just a few moss patches - not too many!
    const mossMats = [groundMaterials.moss1, groundMaterials.moss2, groundMaterials.moss3];
    for (let j = 0; j < 3; j++) {
        const mossGeom = new THREE.CircleGeometry(0.6 + Math.random() * 0.8, 8);
        const moss = new THREE.Mesh(mossGeom, mossMats[Math.floor(Math.random() * mossMats.length)]);
        moss.rotation.x = -Math.PI / 2;
        moss.position.set(
            (Math.random() - 0.5) * 10,
            0.02,
            zPosition + (Math.random() - 0.5) * GROUND_LENGTH
        );
        scene.add(moss);
        ground.userData.lines.push(moss);
    }

    // Just a few fallen leaves
    const leafMats = [groundMaterials.fallenLeaf1, groundMaterials.fallenLeaf2, groundMaterials.fallenLeaf3, groundMaterials.fallenLeaf4];
    for (let j = 0; j < 5; j++) {
        const leafGeom = new THREE.CircleGeometry(0.12 + Math.random() * 0.1, 6);
        const leaf = new THREE.Mesh(leafGeom, leafMats[Math.floor(Math.random() * leafMats.length)]);
        leaf.rotation.x = -Math.PI / 2;
        leaf.rotation.z = Math.random() * Math.PI * 2;
        leaf.position.set(
            (Math.random() - 0.5) * 12,
            0.03,
            zPosition + (Math.random() - 0.5) * GROUND_LENGTH
        );
        scene.add(leaf);
        ground.userData.lines.push(leaf);
    }

    // Just a couple of flower petals
    const flowerMats = [groundMaterials.flower1, groundMaterials.flower2, groundMaterials.flower3, groundMaterials.flower4];
    for (let j = 0; j < 2; j++) {
        const petalGeom = new THREE.CircleGeometry(0.06 + Math.random() * 0.06, 5);
        const petal = new THREE.Mesh(petalGeom, flowerMats[Math.floor(Math.random() * flowerMats.length)]);
        petal.rotation.x = -Math.PI / 2;
        petal.rotation.z = Math.random() * Math.PI * 2;
        petal.position.set(
            (Math.random() - 0.5) * 10,
            0.035,
            zPosition + (Math.random() - 0.5) * GROUND_LENGTH
        );
        scene.add(petal);
        ground.userData.lines.push(petal);
    }

    // One wet patch per tile
    if (Math.random() < 0.7) {
        const wetGeom = new THREE.CircleGeometry(0.8 + Math.random() * 0.6, 8);
        const wet = new THREE.Mesh(wetGeom, groundMaterials.wetSoil);
        wet.rotation.x = -Math.PI / 2;
        wet.position.set(
            (Math.random() - 0.5) * 10,
            0.015,
            zPosition + (Math.random() - 0.5) * GROUND_LENGTH
        );
        scene.add(wet);
        ground.userData.lines.push(wet);
    }

    return ground;
}

// Initialize ground tiles
for (let i = 0; i < NUM_GROUND_TILES; i++) {
    state.groundTiles.push(createGroundTile(i * GROUND_LENGTH));
}

// ============ RAINFOREST VEGETATION ============
// Materials for tropical plants - REALISTIC NATURAL COLORS

// Tree trunk materials - natural bark colors
const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.95 });  // Natural brown bark
const darkTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.9 });  // Dark wet bark
const mossyTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x4a5c3d, roughness: 0.85 });  // Mossy bark

// Realistic leaf colors - natural variation found in rainforests
const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x2e5a1c, roughness: 0.75 });  // Deep forest green
const darkLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x1e3d14, roughness: 0.8 });  // Shaded leaf
const limeLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x4a7c34, roughness: 0.7 });  // New growth lime
const emeraldLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x3a6b4a, roughness: 0.75 });  // Emerald tone
const tealLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x2f5a4a, roughness: 0.75 });  // Blue-green shade
const yellowGreenLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x5a7a2a, roughness: 0.7 });  // Sunlit leaf

const vineMaterial = new THREE.MeshStandardMaterial({ color: 0x3d5a2e, roughness: 0.85 });  // Natural vine green
const fernMaterial = new THREE.MeshStandardMaterial({ color: 0x4a6a3a, roughness: 0.75 });  // Fern green

// Realistic tropical flower colors - actual rainforest flowers
const flowerColors = [
    { color: 0xc71585, emissive: 0x000000 },  // Orchid magenta
    { color: 0xff6b4a, emissive: 0x000000 },  // Heliconia orange-red
    { color: 0xe35a5a, emissive: 0x000000 },  // Hibiscus red
    { color: 0xffb347, emissive: 0x000000 },  // Bird of paradise orange
    { color: 0xda70d6, emissive: 0x000000 },  // Orchid lavender
    { color: 0xf08080, emissive: 0x000000 },  // Light coral
    { color: 0xff7f7f, emissive: 0x000000 },  // Soft red
    { color: 0xe6a8d7, emissive: 0x000000 },  // Pink orchid
    { color: 0xffd700, emissive: 0x000000 },  // Golden yellow
    { color: 0xffffff, emissive: 0x000000 },  // White orchid
];

function getRandomFlowerMaterial() {
    const fc = flowerColors[Math.floor(Math.random() * flowerColors.length)];
    return new THREE.MeshStandardMaterial({
        color: fc.color,
        emissive: fc.emissive,
        emissiveIntensity: 0.05,
        roughness: 0.6
    });
}

// Realistic mushroom colors - actual rainforest fungi
const mushroomColors = [
    { color: 0xd2691e, emissive: 0x000000 },  // Brown bracket fungus
    { color: 0xf5deb3, emissive: 0x000000 },  // Cream/tan
    { color: 0xcd853f, emissive: 0x000000 },  // Peru/tan
    { color: 0x8b4513, emissive: 0x000000 },  // Saddle brown
    { color: 0xdaa520, emissive: 0x000000 },  // Goldenrod
    { color: 0xffe4c4, emissive: 0x000000 },  // Bisque
    { color: 0x87ceeb, emissive: 0x4a6a8a },  // Rare bioluminescent blue (subtle glow)
];

function getRandomMushroomMaterial() {
    const mc = mushroomColors[Math.floor(Math.random() * mushroomColors.length)];
    return new THREE.MeshStandardMaterial({
        color: mc.color,
        emissive: mc.emissive,
        emissiveIntensity: mc.emissive ? 0.15 : 0,
        roughness: 0.7
    });
}

// Realistic tropical fruit colors
const fruitColors = [0xcc4400, 0xe6b800, 0xcc3333, 0xd98000, 0x8b0000, 0x556b2f];

// Create tropical palm tree
function createPalmTree(x, z) {
    const group = new THREE.Group();

    // Curved trunk
    const trunkHeight = 6 + Math.random() * 4;
    const trunkCurve = (Math.random() - 0.5) * 2;

    for (let i = 0; i < 8; i++) {
        const segHeight = trunkHeight / 8;
        const segGeom = new THREE.CylinderGeometry(0.25 - i * 0.02, 0.3 - i * 0.02, segHeight, 8);
        const seg = new THREE.Mesh(segGeom, trunkMaterial);
        seg.position.set(
            trunkCurve * Math.sin(i * 0.3),
            segHeight / 2 + i * segHeight,
            0
        );
        seg.rotation.z = Math.sin(i * 0.3) * 0.1;
        seg.castShadow = true;
        group.add(seg);
    }

    // Palm fronds
    const frondCount = 7 + Math.floor(Math.random() * 4);
    for (let i = 0; i < frondCount; i++) {
        const frondGroup = new THREE.Group();
        const angle = (i / frondCount) * Math.PI * 2;

        // Main frond stem
        const stemGeom = new THREE.CylinderGeometry(0.03, 0.05, 3, 6);
        const stem = new THREE.Mesh(stemGeom, leafMaterial);
        stem.position.y = 1.5;
        stem.rotation.z = Math.PI / 4;
        frondGroup.add(stem);

        // Leaflets
        for (let j = 0; j < 12; j++) {
            const leafGeom = new THREE.PlaneGeometry(0.15, 0.6 + Math.random() * 0.3);
            const leaf = new THREE.Mesh(leafGeom, j % 2 === 0 ? leafMaterial : darkLeafMaterial);
            leaf.position.set(0, 0.5 + j * 0.2, 0);
            leaf.rotation.x = -0.3;
            leaf.rotation.z = (j % 2 === 0 ? 1 : -1) * 0.4;
            frondGroup.add(leaf);
        }

        frondGroup.position.set(trunkCurve * 0.8, trunkHeight, 0);
        frondGroup.rotation.y = angle;
        frondGroup.rotation.x = 0.6 + Math.random() * 0.3;
        group.add(frondGroup);
    }

    group.position.set(x, 0, z);
    return group;
}

// Create jungle tree with vines
function createJungleTree(x, z) {
    const group = new THREE.Group();

    // Thick trunk with buttress roots
    const trunkGeom = new THREE.CylinderGeometry(0.5, 0.8, 8, 10);
    const trunk = new THREE.Mesh(trunkGeom, darkTrunkMaterial);
    trunk.position.y = 4;
    trunk.castShadow = true;
    group.add(trunk);

    // Buttress roots
    for (let i = 0; i < 4; i++) {
        const rootGeom = new THREE.ConeGeometry(0.4, 2, 4);
        const root = new THREE.Mesh(rootGeom, darkTrunkMaterial);
        root.position.set(
            Math.cos(i * Math.PI / 2) * 0.6,
            0.8,
            Math.sin(i * Math.PI / 2) * 0.6
        );
        root.rotation.z = Math.cos(i * Math.PI / 2) * 0.5;
        root.rotation.x = Math.sin(i * Math.PI / 2) * 0.5;
        group.add(root);
    }

    // Dense canopy with VARIED COLORS!
    const canopyMaterials = [leafMaterial, darkLeafMaterial, limeLeafMaterial, emeraldLeafMaterial, tealLeafMaterial, yellowGreenLeafMaterial];
    for (let i = 0; i < 5; i++) {
        const canopyGeom = new THREE.SphereGeometry(2 + Math.random(), 8, 6);
        const canopyMat = canopyMaterials[Math.floor(Math.random() * canopyMaterials.length)];
        const canopy = new THREE.Mesh(canopyGeom, canopyMat);
        canopy.position.set(
            (Math.random() - 0.5) * 2,
            8 + Math.random() * 2,
            (Math.random() - 0.5) * 2
        );
        canopy.scale.y = 0.6;
        canopy.castShadow = true;
        group.add(canopy);
    }

    // Colorful tropical fruits!
    for (let i = 0; i < 3; i++) {
        const fruitColor = fruitColors[Math.floor(Math.random() * fruitColors.length)];
        const fruitGeom = new THREE.SphereGeometry(0.1 + Math.random() * 0.1, 8, 8);
        const fruitMat = new THREE.MeshStandardMaterial({
            color: fruitColor,
            emissive: fruitColor,
            emissiveIntensity: 0.2
        });
        const fruit = new THREE.Mesh(fruitGeom, fruitMat);
        fruit.position.set(
            (Math.random() - 0.5) * 2,
            6 + Math.random() * 2,
            (Math.random() - 0.5) * 2
        );
        group.add(fruit);
    }

    // Hanging vines
    for (let i = 0; i < 6; i++) {
        const vineLength = 3 + Math.random() * 4;
        const vineGeom = new THREE.CylinderGeometry(0.02, 0.02, vineLength, 4);
        const vine = new THREE.Mesh(vineGeom, vineMaterial);
        vine.position.set(
            (Math.random() - 0.5) * 3,
            8 - vineLength / 2,
            (Math.random() - 0.5) * 3
        );
        vine.rotation.z = (Math.random() - 0.5) * 0.3;
        group.add(vine);
    }

    group.position.set(x, 0, z);
    return group;
}

// Create fern cluster
function createFern(x, z) {
    const group = new THREE.Group();
    const frondCount = 5 + Math.floor(Math.random() * 4);

    for (let i = 0; i < frondCount; i++) {
        const frondGeom = new THREE.ConeGeometry(0.3, 1.5, 4);
        const frond = new THREE.Mesh(frondGeom, fernMaterial);
        const angle = (i / frondCount) * Math.PI * 2;
        frond.position.set(
            Math.cos(angle) * 0.3,
            0.5,
            Math.sin(angle) * 0.3
        );
        frond.rotation.x = 0.8;
        frond.rotation.y = angle;
        group.add(frond);
    }

    group.position.set(x, 0, z);
    return group;
}

// Create glowing mushroom cluster - with random colors!
function createMushrooms(x, z) {
    const group = new THREE.Group();
    const count = 3 + Math.floor(Math.random() * 4);
    const mushroomMat = getRandomMushroomMaterial();  // Random color for this cluster

    for (let i = 0; i < count; i++) {
        const stemGeom = new THREE.CylinderGeometry(0.05, 0.07, 0.2 + Math.random() * 0.3, 6);
        const stem = new THREE.Mesh(stemGeom, new THREE.MeshStandardMaterial({ color: 0xf5f5dc }));
        const capGeom = new THREE.SphereGeometry(0.12 + Math.random() * 0.1, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2);
        const cap = new THREE.Mesh(capGeom, mushroomMat);

        const mx = (Math.random() - 0.5) * 0.5;
        const mz = (Math.random() - 0.5) * 0.5;
        stem.position.set(mx, 0.1, mz);
        cap.position.set(mx, 0.25 + Math.random() * 0.15, mz);
        cap.rotation.x = Math.PI;

        group.add(stem);
        group.add(cap);
    }

    group.position.set(x, 0, z);
    return group;
}

// Create exotic flower - with random vivid colors!
function createFlower(x, z) {
    const group = new THREE.Group();
    const flowerMat = getRandomFlowerMaterial();  // Random color!

    // Stem
    const stemGeom = new THREE.CylinderGeometry(0.03, 0.04, 0.8, 6);
    const stem = new THREE.Mesh(stemGeom, vineMaterial);
    stem.position.y = 0.4;
    group.add(stem);

    // Petals - colorful!
    for (let i = 0; i < 5; i++) {
        const petalGeom = new THREE.SphereGeometry(0.15, 6, 4);
        const petal = new THREE.Mesh(petalGeom, flowerMat);
        const angle = (i / 5) * Math.PI * 2;
        petal.position.set(
            Math.cos(angle) * 0.12,
            0.85,
            Math.sin(angle) * 0.12
        );
        petal.scale.set(1, 0.3, 0.5);
        group.add(petal);
    }

    // Center
    const centerGeom = new THREE.SphereGeometry(0.08, 8, 8);
    const centerMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffaa00, emissiveIntensity: 0.4 });
    const center = new THREE.Mesh(centerGeom, centerMat);
    center.position.y = 0.85;
    group.add(center);

    group.position.set(x, 0, z);
    return group;
}

// Create colorful tropical butterfly
function createButterfly(x, y, z) {
    const group = new THREE.Group();

    // Random bright color
    const colors = [0xff1493, 0x00bfff, 0xffa500, 0x9932cc, 0x00ff00, 0xff4500, 0xffff00];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const wingMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.3,
        side: THREE.DoubleSide
    });

    // Body
    const bodyGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.15, 6);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.rotation.x = Math.PI / 2;
    group.add(body);

    // Wings
    const wingGeom = new THREE.CircleGeometry(0.12, 8);
    const leftWing = new THREE.Mesh(wingGeom, wingMat);
    leftWing.position.set(-0.08, 0, 0);
    leftWing.rotation.y = -0.5;
    group.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeom, wingMat);
    rightWing.position.set(0.08, 0, 0);
    rightWing.rotation.y = 0.5;
    group.add(rightWing);

    group.position.set(x, y, z);
    group.userData.leftWing = leftWing;
    group.userData.rightWing = rightWing;
    group.userData.baseY = y;

    return group;
}

// Create colorful parrot
function createParrot(x, y, z) {
    const group = new THREE.Group();

    // Random parrot colors: scarlet macaw, blue-gold, green
    const parrotTypes = [
        { body: 0xff0000, wing: 0x0000ff, head: 0xffff00 },  // Scarlet macaw
        { body: 0x0066ff, wing: 0xffcc00, head: 0x0066ff },  // Blue-gold macaw
        { body: 0x00aa00, wing: 0xff0000, head: 0x00cc00 },  // Green parrot
        { body: 0xff6600, wing: 0x00ffff, head: 0xffff00 },  // Orange tropical
    ];
    const ptype = parrotTypes[Math.floor(Math.random() * parrotTypes.length)];

    const bodyMat = new THREE.MeshStandardMaterial({ color: ptype.body, roughness: 0.6 });
    const wingMat = new THREE.MeshStandardMaterial({ color: ptype.wing, roughness: 0.6 });
    const headMat = new THREE.MeshStandardMaterial({ color: ptype.head, roughness: 0.6 });

    // Body
    const bodyGeom = new THREE.SphereGeometry(0.15, 8, 8);
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.scale.set(0.8, 1, 1.2);
    group.add(body);

    // Head
    const headGeom = new THREE.SphereGeometry(0.1, 8, 8);
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.set(0, 0.1, 0.12);
    group.add(head);

    // Beak
    const beakGeom = new THREE.ConeGeometry(0.03, 0.08, 6);
    const beakMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const beak = new THREE.Mesh(beakGeom, beakMat);
    beak.position.set(0, 0.08, 0.2);
    beak.rotation.x = Math.PI / 2;
    group.add(beak);

    // Wings
    const wingGeom = new THREE.SphereGeometry(0.1, 6, 6);
    const leftWing = new THREE.Mesh(wingGeom, wingMat);
    leftWing.scale.set(0.3, 0.8, 1);
    leftWing.position.set(-0.12, 0, -0.05);
    group.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeom, wingMat);
    rightWing.scale.set(0.3, 0.8, 1);
    rightWing.position.set(0.12, 0, -0.05);
    group.add(rightWing);

    // Tail
    const tailGeom = new THREE.ConeGeometry(0.05, 0.3, 4);
    const tail = new THREE.Mesh(tailGeom, bodyMat);
    tail.position.set(0, -0.05, -0.25);
    tail.rotation.x = -Math.PI / 6;
    group.add(tail);

    group.position.set(x, y, z);
    group.userData.baseY = y;

    return group;
}

// Add rainforest decorations along the sides - EXTRA COLORFUL!
_biomeDecorStart = scene.children.length;
for (let z = 0; z < 250; z += 8) {
    // Left side vegetation
    const leftX = -10 - Math.random() * 6;
    if (Math.random() < 0.4) {
        scene.add(createPalmTree(leftX, z + Math.random() * 6));
    } else if (Math.random() < 0.6) {
        scene.add(createJungleTree(leftX - 2, z + Math.random() * 6));
    }

    // Understory plants - MORE COLORS!
    scene.add(createFern(-8 - Math.random() * 2, z + Math.random() * 6));

    // More mushrooms and flowers for color
    if (Math.random() < 0.5) {  // Increased from 0.3
        scene.add(createMushrooms(-7 - Math.random() * 3, z + Math.random() * 6));
    }
    if (Math.random() < 0.6) {  // Increased from 0.2 - LOTS OF FLOWERS!
        scene.add(createFlower(-6 - Math.random() * 2, z + Math.random() * 6));
    }
    if (Math.random() < 0.4) {  // Extra flowers!
        scene.add(createFlower(-7 - Math.random() * 2, z + Math.random() * 6));
    }

    // Colorful butterflies flying around!
    if (Math.random() < 0.4) {
        scene.add(createButterfly(
            -6 - Math.random() * 4,
            1.5 + Math.random() * 3,
            z + Math.random() * 6
        ));
    }

    // Colorful parrots in trees!
    if (Math.random() < 0.25) {
        scene.add(createParrot(
            leftX + Math.random() * 2,
            5 + Math.random() * 4,
            z + Math.random() * 6
        ));
    }

    // Right side vegetation
    const rightX = 10 + Math.random() * 6;
    if (Math.random() < 0.4) {
        scene.add(createPalmTree(rightX, z + Math.random() * 6));
    } else if (Math.random() < 0.6) {
        scene.add(createJungleTree(rightX + 2, z + Math.random() * 6));
    }

    // Right understory - MORE COLORS!
    scene.add(createFern(8 + Math.random() * 2, z + Math.random() * 6));

    if (Math.random() < 0.5) {  // Increased
        scene.add(createMushrooms(7 + Math.random() * 3, z + Math.random() * 6));
    }
    if (Math.random() < 0.6) {  // LOTS OF FLOWERS!
        scene.add(createFlower(6 + Math.random() * 2, z + Math.random() * 6));
    }
    if (Math.random() < 0.4) {  // Extra flowers!
        scene.add(createFlower(7 + Math.random() * 2, z + Math.random() * 6));
    }

    // Right side butterflies
    if (Math.random() < 0.4) {
        scene.add(createButterfly(
            6 + Math.random() * 4,
            1.5 + Math.random() * 3,
            z + Math.random() * 6
        ));
    }

    // Right side parrots
    if (Math.random() < 0.25) {
        scene.add(createParrot(
            rightX - Math.random() * 2,
            5 + Math.random() * 4,
            z + Math.random() * 6
        ));
    }
}
for (let i = _biomeDecorStart; i < scene.children.length; i++) { scene.children[i].userData.biomeDecor = true; state.biomeDecor.push(scene.children[i]); }

// ============ BIOME / MAP SYSTEM ============
function _addDecor(obj) {
    obj.userData.biomeDecor = true;
    scene.add(obj);
    state.biomeDecor.push(obj);
    return obj;
}

function createPineTree(x, z) {
    const group = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a2c14, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1f4a2a, roughness: 0.85 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 4, 6), trunkMat);
    trunk.position.y = 2;
    group.add(trunk);
    for (let i = 0; i < 4; i++) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(2.2 - i * 0.4, 1.6, 8), leafMat);
        cone.position.y = 3 + i * 1.1;
        group.add(cone);
    }
    group.position.set(x, 0, z);
    return group;
}

function createDeadTree(x, z) {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 1 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 5, 6), mat);
    trunk.position.y = 2.5;
    group.add(trunk);
    for (let i = 0; i < 4; i++) {
        const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.15, 1.5 + Math.random(), 5), mat);
        branch.position.set((Math.random() - 0.5) * 1.2, 3 + Math.random() * 2, 0);
        branch.rotation.z = (Math.random() - 0.5) * 1.6;
        branch.rotation.x = (Math.random() - 0.5) * 0.6;
        group.add(branch);
    }
    group.position.set(x, 0, z);
    return group;
}

function createLavaRock(x, z) {
    const group = new THREE.Group();
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x1a0f0a, roughness: 0.95 });
    const lavaMat = new THREE.MeshStandardMaterial({
        color: 0xff5511, emissive: 0xff3300, emissiveIntensity: 1.2, roughness: 0.7
    });
    const r = 0.7 + Math.random() * 0.6;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), rockMat);
    rock.position.y = r * 0.5;
    group.add(rock);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(r * 0.35, 8, 6), lavaMat);
    glow.position.set(0, r * 0.7, 0);
    group.add(glow);
    group.position.set(x, 0, z);
    return group;
}

function createSnowMound(x, z) {
    const mat = new THREE.MeshStandardMaterial({ color: 0xf5f8ff, roughness: 0.4 });
    const r = 0.8 + Math.random() * 1.2;
    const mound = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), mat);
    mound.position.set(x, r * 0.4, z);
    mound.scale.y = 0.55;
    return mound;
}

function createStalagmite(x, z, pointDown) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a3a3a, roughness: 0.85 });
    const h = 2.5 + Math.random() * 3.5;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5 + Math.random() * 0.4, h, 6), mat);
    if (pointDown) {
        cone.rotation.z = Math.PI;
        cone.position.set(x, 14 - h * 0.5, z);
    } else {
        cone.position.set(x, h * 0.5, z);
    }
    return cone;
}

function createGlowMushroom(x, z) {
    const group = new THREE.Group();
    const stemMat = new THREE.MeshStandardMaterial({ color: 0xddccaa, roughness: 0.7 });
    const capMat = new THREE.MeshStandardMaterial({
        color: 0x44ddff, emissive: 0x22aacc, emissiveIntensity: 1.3, roughness: 0.5
    });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.7, 6), stemMat);
    stem.position.y = 0.35;
    group.add(stem);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.4, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), capMat);
    cap.position.y = 0.7;
    group.add(cap);
    group.position.set(x, 0, z);
    return group;
}

// Per-biome scenery builders
function buildJungleScenery() {
    // Hills
    for (let i = 0; i < 8; i++) {
        const hillGeom = new THREE.ConeGeometry(15 + Math.random() * 20, 20 + Math.random() * 15, 6);
        const hill = new THREE.Mesh(hillGeom, hillMaterial);
        const side = i < 4 ? -1 : 1;
        hill.position.set(side * (35 + Math.random() * 30), -5, 50 + i * 15 + Math.random() * 10);
        _addDecor(hill);
    }
    // Distant trees
    for (let z = 60; z < 250; z += 8) {
        for (let side = -1; side <= 1; side += 2) {
            const x = side * (25 + Math.random() * 15);
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 10 + Math.random() * 8, 6), distantTreeMaterial);
            trunk.position.set(x, 5, z + Math.random() * 5);
            _addDecor(trunk);
            const canopy = new THREE.Mesh(new THREE.SphereGeometry(4 + Math.random() * 3, 6, 4), distantTreeMaterial);
            canopy.position.set(x, 12 + Math.random() * 4, z + Math.random() * 5);
            canopy.scale.y = 0.7;
            _addDecor(canopy);
        }
    }
    // Wider forest — sparse trees filling the bigger ground out to ±55
    for (let z = 0; z < 250; z += 10) {
        for (let side = -1; side <= 1; side += 2) {
            if (Math.random() < 0.7) {
                const x = side * (18 + Math.random() * 37);
                _addDecor(Math.random() < 0.5
                    ? createJungleTree(x, z + Math.random() * 8)
                    : createPalmTree(x, z + Math.random() * 8));
            }
        }
    }
    // Side decor (palm + jungle trees, ferns, mushrooms, flowers, butterflies, parrots)
    for (let z = 0; z < 250; z += 8) {
        const leftX = -10 - Math.random() * 6;
        if (Math.random() < 0.4) _addDecor(createPalmTree(leftX, z + Math.random() * 6));
        else if (Math.random() < 0.6) _addDecor(createJungleTree(leftX - 2, z + Math.random() * 6));
        _addDecor(createFern(-8 - Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.5) _addDecor(createMushrooms(-7 - Math.random() * 3, z + Math.random() * 6));
        if (Math.random() < 0.6) _addDecor(createFlower(-6 - Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.4) _addDecor(createFlower(-7 - Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.4) _addDecor(createButterfly(-6 - Math.random() * 4, 1.5 + Math.random() * 3, z + Math.random() * 6));
        if (Math.random() < 0.25) _addDecor(createParrot(leftX + Math.random() * 2, 5 + Math.random() * 4, z + Math.random() * 6));

        const rightX = 10 + Math.random() * 6;
        if (Math.random() < 0.4) _addDecor(createPalmTree(rightX, z + Math.random() * 6));
        else if (Math.random() < 0.6) _addDecor(createJungleTree(rightX + 2, z + Math.random() * 6));
        _addDecor(createFern(8 + Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.5) _addDecor(createMushrooms(7 + Math.random() * 3, z + Math.random() * 6));
        if (Math.random() < 0.6) _addDecor(createFlower(6 + Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.4) _addDecor(createFlower(7 + Math.random() * 2, z + Math.random() * 6));
        if (Math.random() < 0.4) _addDecor(createButterfly(6 + Math.random() * 4, 1.5 + Math.random() * 3, z + Math.random() * 6));
        if (Math.random() < 0.25) _addDecor(createParrot(rightX - Math.random() * 2, 5 + Math.random() * 4, z + Math.random() * 6));
    }
}

function buildBeachScenery() {
    // Low dunes as hills (yellow-tan)
    for (let i = 0; i < 6; i++) {
        const dune = new THREE.Mesh(
            new THREE.SphereGeometry(12 + Math.random() * 10, 8, 6),
            hillMaterial
        );
        const side = i < 3 ? -1 : 1;
        dune.position.set(side * (40 + Math.random() * 20), -8, 50 + i * 22);
        dune.scale.y = 0.4;
        _addDecor(dune);
    }
    // Sparse palms only
    for (let z = 0; z < 250; z += 12) {
        if (Math.random() < 0.7) _addDecor(createPalmTree(-10 - Math.random() * 5, z + Math.random() * 8));
        if (Math.random() < 0.7) _addDecor(createPalmTree(10 + Math.random() * 5, z + Math.random() * 8));
        if (Math.random() < 0.3) _addDecor(createButterfly(-6 - Math.random() * 4, 1.5 + Math.random() * 2, z));
        if (Math.random() < 0.3) _addDecor(createButterfly(6 + Math.random() * 4, 1.5 + Math.random() * 2, z));
    }
}

function buildVolcanoScenery() {
    // Jagged dark cones
    for (let i = 0; i < 10; i++) {
        const cone = new THREE.Mesh(
            new THREE.ConeGeometry(10 + Math.random() * 18, 25 + Math.random() * 20, 5),
            hillMaterial
        );
        const side = i < 5 ? -1 : 1;
        cone.position.set(side * (30 + Math.random() * 30), -3, 40 + i * 18 + Math.random() * 8);
        _addDecor(cone);
    }
    // Side decor: dead trees + lava rocks
    for (let z = 0; z < 250; z += 7) {
        if (Math.random() < 0.5) _addDecor(createDeadTree(-9 - Math.random() * 5, z + Math.random() * 5));
        if (Math.random() < 0.6) _addDecor(createLavaRock(-7 - Math.random() * 3, z + Math.random() * 5));
        if (Math.random() < 0.5) _addDecor(createDeadTree(9 + Math.random() * 5, z + Math.random() * 5));
        if (Math.random() < 0.6) _addDecor(createLavaRock(7 + Math.random() * 3, z + Math.random() * 5));
    }
}

function buildMountainsScenery() {
    // Big snow-capped peaks
    for (let i = 0; i < 8; i++) {
        const peak = new THREE.Mesh(
            new THREE.ConeGeometry(14 + Math.random() * 16, 30 + Math.random() * 20, 5),
            hillMaterial
        );
        const side = i < 4 ? -1 : 1;
        peak.position.set(side * (35 + Math.random() * 25), 0, 60 + i * 22 + Math.random() * 8);
        _addDecor(peak);
        // Snow cap
        const cap = new THREE.Mesh(
            new THREE.ConeGeometry(8 + Math.random() * 4, 8 + Math.random() * 4, 5),
            new THREE.MeshBasicMaterial({ color: 0xffffff, fog: true })
        );
        cap.position.set(peak.position.x, peak.position.y + 18, peak.position.z);
        _addDecor(cap);
    }
    // Pine trees + snow mounds + occasional rocks
    for (let z = 0; z < 250; z += 7) {
        if (Math.random() < 0.6) _addDecor(createPineTree(-9 - Math.random() * 5, z + Math.random() * 5));
        if (Math.random() < 0.4) _addDecor(createSnowMound(-7 - Math.random() * 3, z + Math.random() * 5));
        if (Math.random() < 0.6) _addDecor(createPineTree(9 + Math.random() * 5, z + Math.random() * 5));
        if (Math.random() < 0.4) _addDecor(createSnowMound(7 + Math.random() * 3, z + Math.random() * 5));
    }
}

function buildCavesScenery() {
    // Dark walls as low jagged hills very close
    for (let i = 0; i < 14; i++) {
        const wall = new THREE.Mesh(
            new THREE.ConeGeometry(8 + Math.random() * 8, 18 + Math.random() * 8, 5),
            hillMaterial
        );
        const side = i < 7 ? -1 : 1;
        wall.position.set(side * (22 + Math.random() * 8), -2, 30 + i * 14);
        _addDecor(wall);
    }
    // Stalagmites + stalactites + glowing mushrooms
    for (let z = 0; z < 250; z += 5) {
        if (Math.random() < 0.5) _addDecor(createStalagmite(-9 - Math.random() * 4, z + Math.random() * 4, false));
        if (Math.random() < 0.4) _addDecor(createStalagmite(-8 - Math.random() * 4, z + Math.random() * 4, true));
        if (Math.random() < 0.5) _addDecor(createGlowMushroom(-6 - Math.random() * 2, z + Math.random() * 4));
        if (Math.random() < 0.5) _addDecor(createStalagmite(9 + Math.random() * 4, z + Math.random() * 4, false));
        if (Math.random() < 0.4) _addDecor(createStalagmite(8 + Math.random() * 4, z + Math.random() * 4, true));
        if (Math.random() < 0.5) _addDecor(createGlowMushroom(6 + Math.random() * 2, z + Math.random() * 4));
    }
}

const BIOMES = {
    jungle: {
        bgColor: 0x87a56e, fogColor: 0x7a9a6a, fogNear: 60, fogFar: 190,
        groundColor: 0x3a4a28,
        skyTop: 0x6b9bc3, skyBottom: 0x8fa87a,
        ambientColor: 0x7a9a7a, ambientIntensity: 0.6,
        sunColor: 0xfff8e7, sunIntensity: 0.9,
        fillColor: 0x8ab5cf,
        hillColor: 0x4a6a4a, distantTreeColor: 0x3d5a3d,
        tileDecor: {
            moss1: 0x5a8a4a, moss2: 0x6a9a3a, moss3: 0x4a7a5a,
            wetSoil: 0x2a3a1a,
            fallenLeaf1: 0x8b6914, fallenLeaf2: 0xb8860b, fallenLeaf3: 0xa0522d, fallenLeaf4: 0xcd853f,
            flower1: 0xff6b6b, flower2: 0xffd93d, flower3: 0xc084fc, flower4: 0xffffff
        },
        build: buildJungleScenery
    },
    beach: {
        bgColor: 0xb8e0f0, fogColor: 0xfff2b8, fogNear: 70, fogFar: 220,
        groundColor: 0xfdd96a, // bright yellow sand
        skyTop: 0x4ea8e0, skyBottom: 0xffe88a,
        ambientColor: 0xfff5d6, ambientIntensity: 0.95,
        sunColor: 0xfff2cc, sunIntensity: 1.2,
        fillColor: 0x9fc8e8,
        hillColor: 0xf2cc55, distantTreeColor: 0x6b8c4a,
        tileDecor: {
            moss1: 0xffe066, moss2: 0xfde047, moss3: 0xf5c842,
            wetSoil: 0xc89c2a,
            fallenLeaf1: 0xfff5b3, fallenLeaf2: 0xffd966, fallenLeaf3: 0xffe680, fallenLeaf4: 0xfdca4a,
            flower1: 0xff9999, flower2: 0xffffff, flower3: 0xff66aa, flower4: 0xffd599
        },
        build: buildBeachScenery
    },
    volcano: {
        bgColor: 0x3a1a0e, fogColor: 0x5a1f10, fogNear: 30, fogFar: 130,
        groundColor: 0x1a0a06,
        skyTop: 0x5a0a0a, skyBottom: 0xff4400,
        ambientColor: 0x8a3320, ambientIntensity: 0.55,
        sunColor: 0xff6633, sunIntensity: 0.8,
        fillColor: 0x801a0a,
        hillColor: 0x2a1208, distantTreeColor: 0x1a0a05,
        tileDecor: {
            moss1: 0x402015, moss2: 0x5a2010, moss3: 0x301508,
            wetSoil: 0x1a0805,
            fallenLeaf1: 0xff4422, fallenLeaf2: 0xff7a22, fallenLeaf3: 0xcc3311, fallenLeaf4: 0xffaa44,
            flower1: 0xff3300, flower2: 0xff8800, flower3: 0xffcc33, flower4: 0xff5511
        },
        build: buildVolcanoScenery
    },
    mountains: {
        bgColor: 0xc8d8e8, fogColor: 0xd8e2ee, fogNear: 50, fogFar: 200,
        groundColor: 0x8a8a8a,
        skyTop: 0x6b8db5, skyBottom: 0xe6ecf2,
        ambientColor: 0xc8d6e6, ambientIntensity: 0.75,
        sunColor: 0xfffaf0, sunIntensity: 1.0,
        fillColor: 0xa0c0e0,
        hillColor: 0x6e7884, distantTreeColor: 0x3a4a4a,
        tileDecor: {
            moss1: 0x9aa0a8, moss2: 0xa8b0b8, moss3: 0x808890,
            wetSoil: 0x606870,
            fallenLeaf1: 0xc8c8d0, fallenLeaf2: 0xe0e0e8, fallenLeaf3: 0xb0b0b8, fallenLeaf4: 0xffffff,
            flower1: 0xeeeeff, flower2: 0xc8d8ee, flower3: 0xffffff, flower4: 0xddddee
        },
        build: buildMountainsScenery
    },
    caves: {
        bgColor: 0x0a0612, fogColor: 0x150a1a, fogNear: 18, fogFar: 90,
        groundColor: 0x1a1318,
        skyTop: 0x080410, skyBottom: 0x1a0e22,
        ambientColor: 0x4a3a6a, ambientIntensity: 0.45,
        sunColor: 0x7a6aaa, sunIntensity: 0.35,
        fillColor: 0x3a2a55,
        hillColor: 0x1a1018, distantTreeColor: 0x0a0612,
        tileDecor: {
            moss1: 0x2a1a3a, moss2: 0x351c44, moss3: 0x1f1230,
            wetSoil: 0x0e0815,
            fallenLeaf1: 0x4a3a55, fallenLeaf2: 0x55426a, fallenLeaf3: 0x3a2a45, fallenLeaf4: 0x6a55a5,
            flower1: 0x44ddff, flower2: 0xaa66ff, flower3: 0x66ffaa, flower4: 0x4488ff
        },
        build: buildCavesScenery
    }
};

function applyBiome(name) {
    const biome = BIOMES[name] || BIOMES.jungle;
    state.currentBiome = name;

    if (scene.background && scene.background.dispose) scene.background.dispose();
    scene.background = makeSkyGradient(biome.skyTop, biome.skyBottom);
    scene.fog.color.setHex(biome.fogColor);
    scene.fog.near = biome.fogNear;
    scene.fog.far = biome.fogFar * QUALITY.fogFarMul;

    groundMaterial.color.setHex(biome.groundColor);
    Object.entries(biome.tileDecor).forEach(([key, hex]) => {
        if (groundMaterials[key]) groundMaterials[key].color.setHex(hex);
    });

    hillMaterial.color.setHex(biome.hillColor);
    distantTreeMaterial.color.setHex(biome.distantTreeColor);

    skyMaterial.uniforms.topColor.value.setHex(biome.skyTop);
    skyMaterial.uniforms.bottomColor.value.setHex(biome.skyBottom);

    ambientLight.color.setHex(biome.ambientColor);
    ambientLight.intensity = biome.ambientIntensity;
    sunLight.color.setHex(biome.sunColor);
    sunLight.intensity = biome.sunIntensity;
    fillLight.color.setHex(biome.fillColor);

    // Wipe & rebuild biome decor
    state.biomeDecor.forEach(obj => scene.remove(obj));
    state.biomeDecor = [];
    biome.build();
}

// ============ BOSS — JÄTTIKÄRPÄNEN ============
function createGiantFly() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x222222, emissive: 0x550000, emissiveIntensity: 0.3, roughness: 0.6
    });
    const wingMat = new THREE.MeshStandardMaterial({
        color: 0xaaddff, transparent: true, opacity: 0.45, roughness: 0.2, side: THREE.DoubleSide
    });
    const eyeMat = new THREE.MeshStandardMaterial({
        color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 1.2
    });

    // Body (thorax + abdomen)
    const thorax = new THREE.Mesh(new THREE.SphereGeometry(2.0, 24, 18), bodyMat);
    thorax.position.set(0, 0, 0);
    thorax.scale.set(1, 0.85, 1.4);
    group.add(thorax);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(1.5, 20, 16), bodyMat);
    head.position.set(0, 0.3, 2.5);
    group.add(head);

    // Eyes — large compound red glowing
    [1, -1].forEach(side => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 14), eyeMat);
        eye.position.set(side * 1.0, 0.7, 3.0);
        group.add(eye);
    });

    // Mandibles
    [1, -1].forEach(side => {
        const mand = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.7, 8), bodyMat);
        mand.position.set(side * 0.4, -0.4, 3.6);
        mand.rotation.x = Math.PI / 2;
        mand.rotation.z = side * 0.3;
        group.add(mand);
    });

    // Wings (4 transparent, animated)
    const wings = [];
    [1, -1].forEach(side => {
        const upper = new THREE.Mesh(new THREE.SphereGeometry(2.6, 16, 10), wingMat);
        upper.position.set(side * 1.7, 1.4, 0.4);
        upper.scale.set(1.6, 0.06, 1.0);
        upper.rotation.z = side * 0.2;
        group.add(upper);
        wings.push(upper);

        const lower = new THREE.Mesh(new THREE.SphereGeometry(1.9, 14, 10), wingMat);
        lower.position.set(side * 1.5, 1.0, -0.6);
        lower.scale.set(1.3, 0.06, 0.9);
        lower.rotation.z = side * 0.18;
        group.add(lower);
        wings.push(lower);
    });
    group.userData.wings = wings;

    // Stinger
    const stinger = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.4, 10), bodyMat);
    stinger.rotation.x = -Math.PI / 2;
    stinger.position.set(0, 0, -2.6);
    group.add(stinger);

    // Legs (3 pairs of dark spindly cylinders)
    [-0.6, 0, 0.6].forEach(z => {
        [1, -1].forEach(side => {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.05, 1.5, 6), bodyMat);
            leg.position.set(side * 1.5, -0.8, z);
            leg.rotation.z = side * 0.7;
            group.add(leg);
        });
    });

    return group;
}

// ============ BOSS — LUKITAR (TARUSORMUSTEN HERRA: hämähäkki) ============
function createLukitar() {
    const group = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1a0f08, roughness: 0.95, metalness: 0.05
    });
    const bellyMat = new THREE.MeshStandardMaterial({
        color: 0x3a1a0e, roughness: 0.9
    });
    const eyeMat = new THREE.MeshStandardMaterial({
        color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 2.0, roughness: 0.15
    });
    const fangMat = new THREE.MeshStandardMaterial({
        color: 0xf6f1e3, emissive: 0x442211, emissiveIntensity: 0.35,
        roughness: 0.25, metalness: 0.15
    });
    const hairMat = new THREE.MeshStandardMaterial({
        color: 0x0a0604, roughness: 1.0, flatShading: true
    });
    const markingMat = new THREE.MeshStandardMaterial({
        color: 0x880000, emissive: 0x440000, emissiveIntensity: 0.3, roughness: 0.7
    });
    const silkMat = new THREE.MeshStandardMaterial({
        color: 0xdcdcdc, transparent: true, opacity: 0.55, roughness: 0.4
    });

    // ABDOMEN — large bulbous body, slightly bigger
    const abdomen = new THREE.Mesh(new THREE.SphereGeometry(2.8, 32, 24), bodyMat);
    abdomen.position.set(0, 0, -1.5);
    abdomen.scale.set(1.05, 0.92, 1.30);
    group.add(abdomen);
    // Abdomen underside (lighter)
    const abdomenBelly = new THREE.Mesh(new THREE.SphereGeometry(2.45, 28, 20), bellyMat);
    abdomenBelly.position.set(0, -0.65, -1.5);
    abdomenBelly.scale.set(0.95, 0.45, 1.10);
    group.add(abdomenBelly);

    // RED HOURGLASS MARKING on top of abdomen (black-widow style)
    {
        const top = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.55, 3), markingMat);
        top.rotation.x = Math.PI;       // tip pointing down
        top.position.set(0, 1.85, -1.5);
        top.scale.set(1, 0.4, 1);
        group.add(top);
        const bottom = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.55, 3), markingMat);
        bottom.position.set(0, 1.85, -2.4);
        bottom.scale.set(1, 0.4, 1);
        group.add(bottom);
    }
    // Pale lateral bands across abdomen
    for (let i = 0; i < 4; i++) {
        const band = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.04, 4, 24), markingMat);
        band.rotation.x = Math.PI / 2;
        band.position.set(0, 0.2 - i * 0.45, -1.5 - i * 0.25);
        band.scale.set(1, 1 + i * 0.05, 1);
        group.add(band);
    }

    // Hair tufts — denser, longer
    for (let i = 0; i < 110; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const r = 2.7;
        const x = r * Math.sin(phi) * Math.cos(theta) * 1.05;
        const y = r * Math.cos(phi) * 0.92;
        const z = r * Math.sin(phi) * Math.sin(theta) * 1.30 - 1.5;
        if (y < -0.6) continue;
        const hairLen = 0.30 + Math.random() * 0.30;
        const hair = new THREE.Mesh(new THREE.ConeGeometry(0.07, hairLen, 4), hairMat);
        hair.position.set(x, y, z);
        const n = new THREE.Vector3(x, y + 0.6, z + 1.5).normalize();
        hair.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
        group.add(hair);
    }

    // SILK STRANDS hanging from underside (visible web producer / spinnerets)
    for (let i = 0; i < 6; i++) {
        const len = 1.0 + Math.random() * 0.8;
        const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.015, len, 5), silkMat);
        strand.position.set(
            (Math.random() - 0.5) * 0.8,
            -1.0 - len * 0.5,
            -2.6 + (Math.random() - 0.5) * 0.4
        );
        group.add(strand);
    }

    // SPINNERETS at rear of abdomen (small dark nubs that produce silk)
    [-0.20, 0, 0.20].forEach(x => {
        const spin = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.30, 6), bodyMat);
        spin.rotation.x = Math.PI / 2;
        spin.position.set(x, -0.6, -3.6);
        group.add(spin);
    });

    // CEPHALOTHORAX (head + thorax — the front bulb)
    const cephal = new THREE.Mesh(new THREE.SphereGeometry(1.6, 28, 22), bodyMat);
    cephal.position.set(0, 0.1, 1.0);
    cephal.scale.set(1.15, 0.85, 1.15);
    group.add(cephal);

    // EYE RIDGE / BROW (dark forehead plate covering top of head)
    const brow = new THREE.Mesh(new THREE.SphereGeometry(1.3, 18, 12), bodyMat);
    brow.position.set(0, 0.55, 1.45);
    brow.scale.set(1.1, 0.35, 0.7);
    group.add(brow);

    // EYES — 8 glowing red eyes, slightly bigger and with white halos for menace
    const eyePositions = [
        { x: -0.75, y: 0.55, z: 1.85 }, { x: -0.30, y: 0.78, z: 2.00 },
        { x:  0.30, y: 0.78, z: 2.00 }, { x:  0.75, y: 0.55, z: 1.85 },
        { x: -0.60, y: 0.25, z: 2.00 }, { x: -0.22, y: 0.38, z: 2.12 },
        { x:  0.22, y: 0.38, z: 2.12 }, { x:  0.60, y: 0.25, z: 2.00 }
    ];
    eyePositions.forEach((p, i) => {
        const eyeSize = i < 4 ? 0.22 : 0.16;
        const eye = new THREE.Mesh(new THREE.SphereGeometry(eyeSize, 14, 12), eyeMat);
        eye.position.set(p.x, p.y, p.z);
        group.add(eye);
        // Dark eye socket rim
        const socket = new THREE.Mesh(new THREE.TorusGeometry(eyeSize * 1.05, 0.04, 4, 12), bodyMat);
        socket.rotation.y = Math.PI / 2;
        socket.position.set(p.x, p.y, p.z - 0.02);
        group.add(socket);
    });

    // CHELICERAE (mouthparts/fangs)
    [1, -1].forEach(side => {
        const base = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), bodyMat);
        base.position.set(side * 0.42, -0.10, 2.05);
        base.scale.set(1, 1.1, 0.9);
        group.add(base);
        // Curved fang — longer and glowing
        const fang = new THREE.Mesh(new THREE.ConeGeometry(0.12, 1.05, 12), fangMat);
        fang.position.set(side * 0.32, -0.68, 2.25);
        fang.rotation.x = Math.PI * 0.10;
        fang.rotation.z = side * -0.25;
        group.add(fang);
    });

    // PEDIPALPS (small arms in front)
    [1, -1].forEach(side => {
        const palp = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.06, 1.0, 10), bodyMat);
        palp.position.set(side * 0.60, -0.10, 2.45);
        palp.rotation.x = -Math.PI / 4;
        palp.rotation.z = side * -0.30;
        group.add(palp);
    });

    // 8 LEGS — long jointed spider legs (each = upper + lower segment)
    // Rest pose tuned so feet reach ground when body sits at y ≈ 1.6
    const legGroups = [];
    const legSpec = [
        { z:  0.9, spread: 1.15, fwd:  0.55 },  // Front
        { z:  0.4, spread: 1.20, fwd:  0.18 },
        { z: -0.4, spread: 1.20, fwd: -0.18 },
        { z: -1.2, spread: 1.15, fwd: -0.55 }   // Back
    ];
    legSpec.forEach((spec, pairIdx) => {
        [1, -1].forEach(side => {
            const root = new THREE.Group();
            root.position.set(side * 0.95, 0.20, spec.z);
            root.userData = {
                restY: 0.20,
                spec: spec,
                side: side,
                pairIdx: pairIdx
            };
            group.add(root);

            // Upper "femur"
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.09, 1.9, 10), bodyMat);
            upper.geometry.translate(0, -0.95, 0);
            // Rest pose — sprawled outward + slight fore/aft tilt
            const restZ = side * (Math.PI / 2.7);   // more horizontal sprawl
            const restX = spec.fwd * 0.4;
            upper.rotation.z = restZ;
            upper.rotation.x = restX;
            upper.userData = { restX, restZ };
            root.add(upper);

            // Knee joint sphere
            const knee = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), bodyMat);
            knee.position.set(0, -1.9, 0);
            upper.add(knee);

            // Lower "tibia" — bends back down toward ground
            const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.04, 2.2, 10), bodyMat);
            lower.geometry.translate(0, -1.1, 0);
            lower.position.set(0, -1.9, 0);
            const lowerRestZ = side * (-Math.PI / 2.0);
            const lowerRestX = spec.fwd * -0.25;
            lower.rotation.z = lowerRestZ;
            lower.rotation.x = lowerRestX;
            lower.userData = { restX: lowerRestX, restZ: lowerRestZ };
            upper.add(lower);

            // Foot tip
            const foot = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.30, 6), bodyMat);
            foot.rotation.x = Math.PI;
            foot.position.set(0, -2.2, 0);
            lower.add(foot);

            legGroups.push({ root, upper, lower, side, pairIdx });
        });
    });
    group.userData.legs = legGroups;

    return group;
}

// Web projectile mesh (sticky silk ball)
function createWebProjectile() {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
        color: 0xeaeaea, emissive: 0x444444, emissiveIntensity: 0.4,
        roughness: 0.4, metalness: 0.05, transparent: true, opacity: 0.85
    });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 10), mat);
    group.add(core);
    // Silken trails / strands
    for (let i = 0; i < 8; i++) {
        const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 1.2, 5), mat);
        strand.position.z = -0.55 + i * 0.05;
        strand.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
        strand.rotation.z = (Math.random() - 0.5) * 0.5;
        group.add(strand);
    }
    return group;
}

function spawnBoss() {
    if (state.bossEntity) scene.remove(state.bossEntity);
    // Clear any leftover projectiles
    (state.bossProjectiles || []).forEach(p => scene.remove(p));
    state.bossProjectiles = [];

    let boss;
    if (state.bossType === 'lukitar') {
        boss = createLukitar();
        boss.position.set(0, 1.6, 22);
        boss.rotation.y = Math.PI;
    } else if (state.bossType === 'jattilisko') {
        boss = createGiantLizard();
        boss.position.set(0, 0, 23);
        boss.rotation.y = Math.PI;
    } else {
        boss = createGiantFly();
        boss.position.set(0, 6, 30);
    }
    scene.add(boss);
    state.bossEntity = boss;
}

function updateBoss(delta) {
    if (!state.bossMode || !state.bossEntity) return;

    if (state.bossType === 'lukitar') {
        updateLukitar(delta);
    } else if (state.bossType === 'jattilisko') {
        updateGiantLizard(delta);
    } else {
        updateGiantFly(delta);
    }
}

function updateGiantFly(delta) {
    const boss = state.bossEntity;
    const ud = boss.userData;

    if (!ud.phase) {
        ud.phase = 'hover';
        ud.nextAttackTime = state.time + 5 + Math.random() * 3;
    }

    // Wing flap (always animates)
    if (ud.wings) {
        const flap = Math.sin(state.time * 35) * 0.4;
        ud.wings.forEach((w, i) => { w.rotation.x = flap * (i % 2 === 0 ? 1 : -1); });
    }

    if (ud.phase === 'hover') {
        boss.position.x = Math.sin(state.time * 1.4) * 4;
        boss.position.y = 6 + Math.sin(state.time * 3) * 0.7;
        boss.position.z = 28 + Math.sin(state.time * 0.7) * 5;
        boss.rotation.y = Math.sin(state.time * 1.6) * 0.4;
        boss.rotation.x = 0;

        if (state.time >= ud.nextAttackTime) {
            ud.phase = 'dive';
            ud.phaseStart = state.time;
            ud.startX = boss.position.x;
            ud.startY = boss.position.y;
            ud.startZ = boss.position.z;
            ud.targetX = -5 + Math.random() * 10;
        }
    } else if (ud.phase === 'dive') {
        const t = Math.min(1, (state.time - ud.phaseStart) / 1.0);
        boss.position.x = ud.startX + (ud.targetX - ud.startX) * t;
        boss.position.y = ud.startY + (0.6 - ud.startY) * t;
        boss.position.z = ud.startZ + (0.5 - ud.startZ) * t;
        boss.rotation.x = -t * 0.6;

        if (typeof lizardGroup !== 'undefined') {
            const dx = Math.abs(boss.position.x - lizardGroup.position.x);
            const dz = Math.abs(boss.position.z - lizardGroup.position.z);
            if (dx < 2.2 && dz < 3.2) {
                gameOver();
                return;
            }
        }

        if (t >= 1) {
            ud.phase = 'return';
            ud.phaseStart = state.time;
            ud.returnFromX = boss.position.x;
            ud.returnFromY = boss.position.y;
            ud.returnFromZ = boss.position.z;
        }
    } else if (ud.phase === 'return') {
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.9);
        boss.position.x = ud.returnFromX + (0 - ud.returnFromX) * t;
        boss.position.y = ud.returnFromY + (6 - ud.returnFromY) * t;
        boss.position.z = ud.returnFromZ + (28 - ud.returnFromZ) * t;
        boss.rotation.x = -0.6 * (1 - t);

        if (t >= 1) {
            state.bossHealth--;
            updateBossHP();
            if (state.bossHealth <= 0) {
                ud.phase = 'dying';
                ud.phaseStart = state.time;
                ud.deathStartY = boss.position.y;
                ud.deathStartX = boss.position.x;
                ud.deathStartZ = boss.position.z;
                ud.deathRotX = boss.rotation.x;
                ud.deathRotZ = boss.rotation.z;
                showCheatNotification('💥 JÄTTIKÄRPÄNEN PUTOAA!');
                return;
            }
            ud.phase = 'hover';
            ud.nextAttackTime = state.time + 3 + Math.random() * 2;
        }
    } else if (ud.phase === 'dying') {
        const t = state.time - ud.phaseStart;
        const dur = 2.6;
        // Wings flop limp downward
        if (ud.wings) {
            const droop = Math.min(1, t / 0.5);
            ud.wings.forEach((w, i) => {
                w.rotation.x = -Math.PI * 0.32 * droop * (i % 2 === 0 ? 1 : -1);
                w.rotation.z = (i % 2 === 0 ? 1 : -1) * (0.4 + droop * 0.6);
            });
        }
        // Tumble out of the sky
        boss.rotation.x = ud.deathRotX + t * 4.5;
        boss.rotation.z = ud.deathRotZ + Math.sin(t * 7) * 0.6 + t * 2.0;
        // Free-fall with slight forward drift toward where player can see it
        const fall = 0.5 * 14 * t * t; // y = 0.5 * g * t²
        boss.position.y = Math.max(0.4, ud.deathStartY - fall);
        boss.position.x = ud.deathStartX + Math.sin(t * 3) * 0.5;
        boss.position.z = ud.deathStartZ - t * 2.0; // drifts toward player slightly
        // Final impact + brief settle then end the run
        if (t >= dur) {
            gameOver();
            return;
        }
    }
}

function updateLukitar(delta) {
    const boss = state.bossEntity;
    const ud = boss.userData;

    if (!ud.phase) {
        ud.phase = 'stalk';
        ud.nextAttackTime = state.time + 3.0;
    }

    // ---- DYING ANIMATION — legs curl up, body tips, sinks, shrinks ----
    if (ud.phase === 'dying') {
        const t = state.time - ud.phaseStart;
        const dur = 2.8;

        // Legs curl inward (death curl, as real spiders do)
        if (ud.legs) {
            const curl = Math.min(1, t / 0.8);
            ud.legs.forEach((leg) => {
                // Upper rotates upward (knee draws toward body)
                const upX = leg.upper.userData.restX;
                const upZ = leg.upper.userData.restZ;
                const tgtUpX = upX + curl * 1.1;
                const tgtUpZ = upZ * (1 - curl * 0.55);
                leg.upper.rotation.x += (tgtUpX - leg.upper.rotation.x) * 0.18;
                leg.upper.rotation.z += (tgtUpZ - leg.upper.rotation.z) * 0.18;
                // Lower curls under (tibia closes in)
                const lowX = leg.lower.userData.restX;
                const lowZ = leg.lower.userData.restZ;
                const tgtLowX = lowX - curl * 0.9;
                const tgtLowZ = lowZ * (1 - curl * 0.30);
                leg.lower.rotation.x += (tgtLowX - leg.lower.rotation.x) * 0.18;
                leg.lower.rotation.z += (tgtLowZ - leg.lower.rotation.z) * 0.18;
                // Root drops onto the body
                leg.root.position.y = leg.root.userData.restY - curl * 0.25;
            });
        }

        // Body tips onto its side, sinks toward the ground
        boss.rotation.z = Math.min(Math.PI * 0.45, t * 1.2);
        boss.rotation.x = Math.sin(t * 5) * 0.15 * (1 - Math.min(1, t / 1.5));
        const sinkBase = ud.deathStartY !== undefined ? ud.deathStartY : 1.6;
        const sink = Math.min(1.0, t / 1.4) * 0.8;
        boss.position.y = Math.max(0.4, sinkBase - sink);

        // Shrink at the end before disappearing
        if (t > 1.6) {
            const sh = Math.max(0.05, 1 - (t - 1.6) / 1.0);
            boss.scale.set(sh, sh, sh);
        }

        // Tick any web projectiles still in flight so they don't hang
        updateBossProjectiles(delta);

        if (t >= dur) {
            gameOver();
        }
        return; // Skip normal walking + attack logic while dying
    }

    // ---- WALKING LEG ANIMATION (alternating tetrapod gait) ----
    // Legs 0,3,4,7 in group A; legs 1,2,5,6 in group B. Each group is in opposite phase.
    // Phases: group A=0, group B=π. Within a phase, slight per-pair lag for organic flow.
    if (ud.legs) {
        const stepFreq = 7.5; // step cycles / sec (fast, scuttling)
        const cycle0 = state.time * stepFreq;
        ud.legs.forEach((leg, idx) => {
            // Group A: legs where (idx % 4) is 0 or 3; Group B: 1 or 2 → alternating tetrapod
            const inGroupA = (idx % 4 === 0 || idx % 4 === 3);
            const phase = inGroupA ? 0 : Math.PI;
            // Tiny lag per pair index so back legs land slightly after front
            const c = cycle0 + phase + leg.pairIdx * 0.18;
            const swing = Math.sin(c);            // >0 = leg lifted/swinging
            const fwd   = -Math.cos(c);           // foot fore/aft (+ = forward)

            // SWING: lift the root and yaw forward; STANCE: plant and drag back
            const rootData = leg.root.userData;
            // Yaw the root group (whole leg sweeps fore/aft)
            leg.root.rotation.y = fwd * 0.45;
            // Lift the root.y during swing (foot leaves ground)
            leg.root.position.y = rootData.restY + Math.max(0, swing) * 0.55;

            // Upper segment lifts up during swing (knee draws up)
            const upRest = leg.upper.userData.restX;
            const targetUpX = upRest + Math.max(0, swing) * 0.55;
            leg.upper.rotation.x += (targetUpX - leg.upper.rotation.x) * 0.30;

            // Lower segment kicks back at end of swing (foot reaches forward)
            const lowRest = leg.lower.userData.restX;
            const targetLowX = lowRest - Math.max(0, swing) * 0.35;
            leg.lower.rotation.x += (targetLowX - leg.lower.rotation.x) * 0.30;
        });
    }

    // ---- BODY BOB synced to leg cycle (one bob per gait half-cycle) ----
    const bodyBob = Math.abs(Math.sin(state.time * 7.5)) * 0.15;
    const baseY = 1.6;

    if (ud.phase === 'stalk') {
        // Ground-stalk: weaves left/right & forward/back, but stays low
        const targetX = Math.sin(state.time * 0.8) * 3.5;
        boss.position.x += (targetX - boss.position.x) * 0.06;
        boss.position.y = baseY + bodyBob;
        boss.position.z = 21 + Math.sin(state.time * 0.6) * 2.5;
        // Body rotates to face player + slight scuttle wobble
        boss.rotation.y = Math.PI + Math.sin(state.time * 2.5) * 0.08;
        boss.rotation.z = Math.sin(state.time * 5) * 0.04; // subtle body sway from leg cycle

        if (state.time >= ud.nextAttackTime) {
            // Lukitar refuses to fire while the player is flying — wait until they land
            if (state.isFlying) {
                ud.nextAttackTime = state.time + 0.5;
            } else {
                ud.phase = 'spit';
                ud.phaseStart = state.time;
                ud.spitFlashEnd = state.time + 0.35;
            }
        }
    } else if (ud.phase === 'spit') {
        // Brief windup — lean forward
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.40);
        boss.rotation.x = -t * 0.4;
        // Flash eyes / pose hold
        if (state.time >= ud.spitFlashEnd) {
            fireLukitarWeb();
            ud.phase = 'recover';
            ud.phaseStart = state.time;
            showCheatNotification('🕸️ LUKITAR SYÖKSEE SEITTIÄ!');
        }
    } else if (ud.phase === 'recover') {
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.40);
        boss.rotation.x = -0.4 * (1 - t);
        if (t >= 1) {
            ud.phase = 'stalk';
            ud.nextAttackTime = state.time + 2.4 + Math.random() * 1.2; // 2.4–3.6s next shot
        }
    }

    // Update active web projectiles
    updateBossProjectiles(delta);
}

function fireLukitarWeb() {
    if (typeof lizardGroup === 'undefined') return;
    const boss = state.bossEntity;
    const web = createWebProjectile();
    // Spawn from Lukitar's fangs/mouth area
    web.position.set(boss.position.x, boss.position.y - 0.4, boss.position.z - 1.6);
    // Aim at player's CURRENT position (locked at firing time — player can still dodge by moving)
    const tx = lizardGroup.position.x;
    const ty = lizardGroup.position.y + 0.6;
    const tz = lizardGroup.position.z;
    const dx = tx - web.position.x;
    const dy = ty - web.position.y;
    const dz = tz - web.position.z;
    const dist = Math.hypot(dx, dy, dz);
    const speed = 95; // units / second — extremely fast, leaves only a moment to dodge
    web.userData = {
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        vz: (dz / dist) * speed,
        life: 0,
        maxLife: 3.0
    };
    // Orient projectile so its long axis points along velocity
    const yAxis = new THREE.Vector3(0, 1, 0);
    const dir = new THREE.Vector3(dx, dy, dz).normalize();
    web.quaternion.setFromUnitVectors(yAxis, dir);
    scene.add(web);
    state.bossProjectiles.push(web);
    playWebShootSound();
}

function updateBossProjectiles(delta) {
    const projs = state.bossProjectiles;
    if (!projs || projs.length === 0) return;

    for (let i = projs.length - 1; i >= 0; i--) {
        const web = projs[i];
        const ud = web.userData;
        web.position.x += ud.vx * delta;
        web.position.y += ud.vy * delta;
        web.position.z += ud.vz * delta;
        // Spin the silken strands for visual flair
        web.rotation.z += delta * 6;
        ud.life += delta;

        // Collision with player (sphere vs sphere, 2.2u tolerance)
        if (typeof lizardGroup !== 'undefined') {
            const dx = web.position.x - lizardGroup.position.x;
            const dy = web.position.y - (lizardGroup.position.y + 0.6);
            const dz = web.position.z - lizardGroup.position.z;
            const distSq = dx * dx + dy * dy + dz * dz;
            if (distSq < 2.2 * 2.2) {
                scene.remove(web);
                projs.splice(i, 1);
                gameOver();
                return;
            }
        }

        // Web destroys any obstacle it passes through (clears the lane)
        if (state.obstacles && state.obstacles.length > 0) {
            for (let oi = state.obstacles.length - 1; oi >= 0; oi--) {
                const obs = state.obstacles[oi];
                const odx = web.position.x - obs.position.x;
                const ody = web.position.y - (obs.position.y + 0.5);
                const odz = web.position.z - obs.position.z;
                if (odx * odx + ody * ody + odz * odz < 2.0 * 2.0) {
                    // Small puff / shrink effect by hiding immediately
                    scene.remove(obs);
                    state.obstacles.splice(oi, 1);
                    // Don't consume the web — it keeps travelling through obstacles
                }
            }
        }

        // Expire if it overshoots / falls below ground / lives too long
        if (ud.life > ud.maxLife || web.position.y < -1 || web.position.z < -20) {
            scene.remove(web);
            projs.splice(i, 1);
            // Successful dodge → counts as one Lukitar attack survived
            state.bossHealth--;
            updateBossHP();
            if (state.bossHealth <= 0) {
                // Trigger boss death animation — only the first time
                if (state.bossEntity) {
                    const buData = state.bossEntity.userData;
                    if (buData.phase !== 'dying') {
                        buData.phase = 'dying';
                        buData.phaseStart = state.time;
                        buData.deathStartY = state.bossEntity.position.y;
                        buData.deathStartZ = state.bossEntity.position.z;
                        if (state.bossType === 'jattilisko') {
                            showCheatNotification('💥 JÄTTI-LISKO ROMAHTAA!');
                        } else {
                            showCheatNotification('💥 LUKITAR ROMAHTAA!');
                        }
                    }
                }
                return;
            }
        }
    }
}

function playWebShootSound() {
    try {
        const ctx = window._audioCtx || (window._audioCtx = new (window.AudioContext || window.webkitAudioContext)());
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sawtooth';
        o.frequency.value = 480;
        o.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);
        g.gain.value = 0.18;
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        o.connect(g).connect(ctx.destination);
        o.start();
        o.stop(ctx.currentTime + 0.27);
    } catch (e) {}
}

// ============ BOSS — JÄTTI-LISKO (giant classic lizard with tongue attack) ============
function createGiantLizard() {
    const group = new THREE.Group();
    // Realistic palette — muted earthy greens with a touch of warmth (komodo/iguana ref)
    const bodyMat   = new THREE.MeshStandardMaterial({ color: 0x3d6e44, roughness: 0.70, metalness: 0.03 });
    const bellyMat  = new THREE.MeshStandardMaterial({ color: 0xc6c882, roughness: 0.75 });
    const darkMat   = new THREE.MeshStandardMaterial({ color: 0x1f3a1f, roughness: 0.70, metalness: 0.05 });
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0x2a4d2a, roughness: 0.70 });
    const scaleMat  = new THREE.MeshStandardMaterial({ color: 0x2c5a34, roughness: 0.55 });
    // Amber/golden eye — realistic monitor-lizard iris, low emissive
    const eyeMat    = new THREE.MeshStandardMaterial({ color: 0xc89020, emissive: 0x583000, emissiveIntensity: 0.35, roughness: 0.25, metalness: 0.40 });
    const pupilMat  = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const tongueMat = new THREE.MeshStandardMaterial({ color: 0xb53843, roughness: 0.50 });
    const clawMat   = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.45, metalness: 0.30 });
    const toothMat  = new THREE.MeshStandardMaterial({ color: 0xece2bd, roughness: 0.30 });

    // === BODY — clean elongated capsule using overlapping ellipsoids that BLEND seamlessly ===
    // The trick to "not lumpy": every adjacent sphere overlaps its neighbour by >30% in z.
    const segs = [
        // z      radius   sx     sy     sz
        [  2.55,  0.78,   1.02,  0.88,  1.15 ], // base of neck (after head)
        [  1.65,  1.05,   1.10,  0.92,  1.40 ], // shoulders
        [  0.55,  1.22,   1.18,  0.94,  1.70 ], // chest
        [ -0.55,  1.25,   1.20,  0.93,  1.75 ], // mid (widest)
        [ -1.70,  1.10,   1.12,  0.90,  1.65 ], // hips
        [ -2.80,  0.85,   1.00,  0.85,  1.45 ]  // tail base
    ];
    segs.forEach(s => {
        const seg = new THREE.Mesh(new THREE.SphereGeometry(s[1], 28, 22), bodyMat);
        seg.position.set(0, 1.05, s[0]);
        seg.scale.set(s[2], s[3], s[4]);
        group.add(seg);
    });

    // Continuous flat belly — one long ellipsoid covering shoulders to hips
    const belly = new THREE.Mesh(new THREE.SphereGeometry(1.10, 26, 18), bellyMat);
    belly.position.set(0, 0.55, -0.4);
    belly.scale.set(1.05, 0.32, 4.10);
    group.add(belly);

    // === REALISTIC SCALE TEXTURE — InstancedMesh of small bumps over the dorsal half ===
    {
        const scaleGeom = new THREE.SphereGeometry(0.075, 6, 5);
        const scaleCount = 360;
        const inst = new THREE.InstancedMesh(scaleGeom, scaleMat, scaleCount);
        const m4 = new THREE.Matrix4();
        const _p = new THREE.Vector3();
        const _q = new THREE.Quaternion();
        const _s = new THREE.Vector3();
        // Sample scale positions on the body segments listed above
        for (let i = 0; i < scaleCount; i++) {
            const seg = segs[Math.floor(Math.random() * segs.length)];
            const phi = Math.acos(2 * Math.random() - 1) * 0.5; // upper hemisphere only
            const theta = Math.random() * Math.PI * 2;
            const rx = seg[1] * seg[2];
            const ry = seg[1] * seg[3];
            const rz = seg[1] * seg[4];
            _p.set(
                rx * Math.sin(phi) * Math.cos(theta),
                1.05 + ry * Math.cos(phi),
                seg[0] + rz * Math.sin(phi) * Math.sin(theta)
            );
            const sz = 0.6 + Math.random() * 0.7;
            _s.set(sz, sz * 0.4, sz); // flatter scales
            m4.compose(_p, _q, _s);
            inst.setMatrixAt(i, m4);
        }
        inst.instanceMatrix.needsUpdate = true;
        group.add(inst);

        // A few darker spots on the dorsal area (pattern)
        const spotGeom = new THREE.SphereGeometry(0.20, 8, 6);
        for (let i = 0; i < 18; i++) {
            const seg = segs[1 + Math.floor(Math.random() * 4)]; // shoulders..hips
            const phi = Math.acos(2 * Math.random() - 1) * 0.3;
            const theta = Math.random() * Math.PI * 2;
            const rx = seg[1] * seg[2];
            const ry = seg[1] * seg[3];
            const rz = seg[1] * seg[4];
            const spot = new THREE.Mesh(spotGeom, darkMat);
            spot.position.set(
                rx * Math.sin(phi) * Math.cos(theta),
                1.06 + ry * Math.cos(phi),
                seg[0] + rz * Math.sin(phi) * Math.sin(theta)
            );
            spot.scale.set(1 + Math.random() * 0.4, 0.10, 1 + Math.random() * 0.4);
            group.add(spot);
        }
    }

    // === HEAD — ONE Lathe-revolution mesh, EXTREMELY long snout, no mouth bar, no whiskers ===
    {
        const profile = [
            new THREE.Vector2(0.00, 0.00),
            new THREE.Vector2(0.45, 0.05),
            new THREE.Vector2(0.62, 0.30),  // widest (back of skull)
            new THREE.Vector2(0.66, 0.55),
            new THREE.Vector2(0.60, 0.85),
            new THREE.Vector2(0.52, 1.20),
            new THREE.Vector2(0.45, 1.60),
            new THREE.Vector2(0.38, 2.05),
            new THREE.Vector2(0.32, 2.55),
            new THREE.Vector2(0.27, 3.10),
            new THREE.Vector2(0.22, 3.70),
            new THREE.Vector2(0.18, 4.30),
            new THREE.Vector2(0.14, 4.90),
            new THREE.Vector2(0.10, 5.40),
            new THREE.Vector2(0.06, 5.80),
            new THREE.Vector2(0.03, 6.00),
            new THREE.Vector2(0.00, 6.00)
        ];
        const headGeom = new THREE.LatheGeometry(profile, 40);
        const head = new THREE.Mesh(headGeom, bodyMat);
        head.rotation.x = -Math.PI / 2;
        head.position.set(0, 1.18, 3.05);
        head.scale.set(1.0, 1.0, 0.78);
        group.add(head);

        // Lower jaw, matching the very long snout
        const jawProfile = [
            new THREE.Vector2(0.00, 0.20),
            new THREE.Vector2(0.40, 0.30),
            new THREE.Vector2(0.45, 0.60),
            new THREE.Vector2(0.40, 1.00),
            new THREE.Vector2(0.34, 1.45),
            new THREE.Vector2(0.28, 1.95),
            new THREE.Vector2(0.23, 2.50),
            new THREE.Vector2(0.18, 3.10),
            new THREE.Vector2(0.14, 3.75),
            new THREE.Vector2(0.10, 4.40),
            new THREE.Vector2(0.06, 5.00),
            new THREE.Vector2(0.03, 5.55),
            new THREE.Vector2(0.01, 5.80),
            new THREE.Vector2(0.00, 5.80)
        ];
        const jawGeom = new THREE.LatheGeometry(jawProfile, 24);
        const jaw = new THREE.Mesh(jawGeom, bellyMat);
        jaw.rotation.x = -Math.PI / 2;
        jaw.position.set(0, 0.92, 3.20);
        jaw.scale.set(0.92, 1.0, 0.42);
        group.add(jaw);

        // (No mouth line — the dark arch was reading as a black bar on top of the snout)

        // Nostrils on top of the snout, near the very tip
        [1, -1].forEach(side => {
            const n = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), darkMat);
            n.position.set(side * 0.06, 1.20, 8.55);
            n.scale.set(0.55, 0.45, 1.50);
            group.add(n);
        });

        // === EYES — properly framed, bulging from the sides of the skull ===
        // Place them at the WIDEST part of the head (around z=3.05+0.55=3.60).
        // Eyeball, dark socket rim, eyelid hood above, slit pupil aligned with eye center,
        // tiny catchlight at upper-front of the eye for life.
        [1, -1].forEach(side => {
            const eyeZ = 3.60;
            const eyeY = 1.50;
            const eyeX = side * 0.62; // slightly outside the head radius → eye bulges

            // Dark socket rim — anchors the eye into the skull
            const socket = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), darkMat);
            socket.position.set(eyeX - side * 0.05, eyeY, eyeZ);
            socket.scale.set(0.55, 0.95, 1.05);
            group.add(socket);

            // Eyeball — round amber
            const eye = new THREE.Mesh(new THREE.SphereGeometry(0.30, 32, 24), eyeMat);
            eye.position.set(eyeX, eyeY, eyeZ);
            group.add(eye);

            // Vertical slit pupil — placed at the outermost point of the eye so it faces the camera
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 12), pupilMat);
            pupil.scale.set(0.16, 1.40, 0.50);
            pupil.position.set(eyeX + side * 0.16, eyeY, eyeZ);
            pupil.rotation.y = side * 0.18;
            group.add(pupil);

            // Upper eyelid — scaly hood that arches over the top of the eye
            const lid = new THREE.Mesh(
                new THREE.SphereGeometry(0.34, 18, 14, 0, Math.PI * 2, 0, Math.PI / 2),
                bodyMat
            );
            lid.position.set(eyeX, eyeY + 0.02, eyeZ);
            lid.scale.set(1.05, 0.55, 1.05);
            group.add(lid);

            // Lower eyelid — paler skin pouch under the eye
            const lower = new THREE.Mesh(new THREE.SphereGeometry(0.30, 14, 10), bellyMat);
            lower.position.set(eyeX, eyeY - 0.20, eyeZ);
            lower.scale.set(1.0, 0.30, 0.95);
            group.add(lower);

            // White catchlight (sparkle) on the upper-front of the eye
            const hi = new THREE.Mesh(
                new THREE.SphereGeometry(0.05, 10, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            hi.position.set(eyeX + side * 0.14, eyeY + 0.12, eyeZ + 0.05);
            group.add(hi);
        });
    }

    // === DORSAL CREST — fewer, bigger iguana-style triangular spines ===
    // Tall over neck and shoulders, shrinks toward the tail base.
    const crestSpec = [
        { z:  2.00, h: 0.55 },
        { z:  1.50, h: 0.80 },
        { z:  1.00, h: 0.95 },  // tallest, behind shoulders
        { z:  0.40, h: 0.85 },
        { z: -0.20, h: 0.75 },
        { z: -0.80, h: 0.65 },
        { z: -1.40, h: 0.55 },
        { z: -1.90, h: 0.42 }
    ];
    crestSpec.forEach(s => {
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.13, s.h, 5), darkMat);
        sp.position.set(0, 1.95, s.z);
        sp.rotation.x = -0.18;
        group.add(sp);
    });

    // === TAIL — one long continuous smooth taper. NO spikes, NO stripes — just clean lines ===
    const tailSegs = [];
    const numTailSegs = 14;
    for (let i = 0; i < numTailSegs; i++) {
        const s = 1 - i / numTailSegs;
        const r = 0.95 * Math.pow(s, 1.15) + 0.06; // smoother stronger taper
        const seg = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), bodyMat);
        seg.position.set(0, 1.00 - i * 0.025, -2.6 - i * 0.55);
        seg.scale.set(1.0, 0.85, 1.65);
        group.add(seg);
        tailSegs.push(seg);
        // Three subtle dark bands across the tail (only 3 — not on every segment)
        if (i === 2 || i === 6 || i === 10) {
            const band = new THREE.Mesh(new THREE.TorusGeometry(r * 0.95, 0.06, 4, 14), stripeMat);
            band.rotation.y = Math.PI / 2;
            band.position.set(0, 1.00 - i * 0.025, -2.6 - i * 0.55);
            band.scale.set(0.85, 1.0, 1.3);
            group.add(band);
        }
    }
    group.userData.tailSegs = tailSegs;

    // === LEGS — anatomically realistic sprawled lizard legs ===
    // Each leg: shoulder mass + 2-segment limb (thigh + shin) with proper joints,
    // foot with sole + 5 toes (each toe is 2 phalanges + claw, splayed naturally).
    const legGroups = [];
    const legSpec = [
        { x:  1.05, z:  1.20, isFront: true  }, // FR
        { x: -1.05, z:  1.20, isFront: true  }, // FL
        { x:  1.05, z: -1.40, isFront: false }, // BR
        { x: -1.05, z: -1.40, isFront: false }  // BL
    ];
    legSpec.forEach(spec => {
        const root = new THREE.Group();
        root.position.set(spec.x, 1.00, spec.z);
        root.userData = { restY: 1.00 };
        group.add(root);

        // Shoulder/hip muscle bulge — chunky muscle mass where leg meets body
        const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.46, 20, 16), bodyMat);
        shoulder.position.set(0, 0.05, 0);
        shoulder.scale.set(1.05, 1.00, 1.10);
        root.add(shoulder);

        // Thigh — fat upper limb, gentle outward sprawl
        const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.22, 0.90, 20), bodyMat);
        upper.geometry.translate(0, -0.45, 0);
        upper.rotation.z = Math.sign(spec.x) * 0.45;       // ~26° sprawl (less spider-y)
        upper.rotation.x = spec.isFront ? 0.18 : -0.12;
        upper.userData = { restX: upper.rotation.x, restZ: upper.rotation.z };
        root.add(upper);

        // Knee
        const knee = new THREE.Mesh(new THREE.SphereGeometry(0.23, 16, 12), bodyMat);
        knee.position.set(0, -0.90, 0);
        upper.add(knee);

        // Shin — bends back so the foot sits directly under the shoulder (proper lizard pose)
        const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.13, 0.90, 16), bodyMat);
        lower.geometry.translate(0, -0.45, 0);
        lower.position.set(0, -0.90, 0);
        lower.rotation.z = Math.sign(spec.x) * -0.45;      // mirror the thigh → shin returns vertical
        lower.rotation.x = 0.05;
        lower.userData = { restX: lower.rotation.x };
        upper.add(lower);

        // === FOOT — a flat oval "paw" with claws built into the front rim.
        // No separate toes/phalanges/claws floating off — this is one cohesive shape.
        const footGroup = new THREE.Group();
        footGroup.position.set(0, -0.92, 0.06);
        lower.add(footGroup);

        // The paw itself — wide, flat, slightly elongated
        const paw = new THREE.Mesh(new THREE.SphereGeometry(0.24, 18, 14), bodyMat);
        paw.scale.set(1.45, 0.35, 1.65);
        footGroup.add(paw);

        // Toe-blob bulges along the front edge of the paw — implied toes (no sticks)
        for (let ti = -2; ti <= 2; ti++) {
            const bump = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), bodyMat);
            bump.position.set(ti * 0.085, -0.03, 0.30);
            bump.scale.set(1.0, 0.55, 1.10);
            footGroup.add(bump);
            // Small claw poking out of each bump
            const claw = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.13, 5), clawMat);
            claw.rotation.x = Math.PI / 2 - 0.2;       // slight downward curl
            claw.position.set(ti * 0.085, -0.05, 0.40);
            footGroup.add(claw);
        }

        // Soft paler pad under the paw
        const pad = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), bellyMat);
        pad.scale.set(1.40, 0.15, 1.55);
        pad.position.set(0, -0.08, 0.05);
        footGroup.add(pad);

        legGroups.push({ root, upper, lower, foot: footGroup, side: Math.sign(spec.x), isFront: spec.isFront });
    });
    group.userData.legs = legGroups;

    // === TONGUE — long thin cylinder, hidden initially, extends from snout tip ===
    const tongueGeom = new THREE.CylinderGeometry(0.09, 0.07, 1.0, 8);
    tongueGeom.translate(0, 0.5, 0); // pivot at base
    const tongue = new THREE.Mesh(tongueGeom, tongueMat);
    tongue.rotation.x = Math.PI / 2;
    tongue.scale.y = 0.05;
    tongue.position.set(0, 0.99, 8.85);
    group.add(tongue);
    const tongueTip = new THREE.Mesh(new THREE.ConeGeometry(0.10, 0.25, 6), tongueMat);
    tongueTip.rotation.x = -Math.PI / 2;
    tongueTip.position.set(0, 0.99, 8.90);
    tongueTip.visible = false;
    group.add(tongueTip);

    group.userData.tongue = tongue;
    group.userData.tongueTip = tongueTip;

    return group;
}

// Pink tongue-tip projectile (visually distinct from Lukitar's web ball)
function createTongueProjectile() {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
        color: 0xff3a5a, emissive: 0x9a0030, emissiveIntensity: 0.6, roughness: 0.5
    });
    // Forked tongue tip (Y-shape)
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.08, 0.8, 8), mat);
    stem.rotation.x = Math.PI / 2;
    group.add(stem);
    [1, -1].forEach(side => {
        const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.04, 0.45, 6), mat);
        fork.rotation.x = Math.PI / 2;
        fork.rotation.y = side * 0.4;
        fork.position.set(side * 0.10, 0, 0.50);
        group.add(fork);
    });
    return group;
}

function fireJattiLiskoTongue() {
    if (typeof lizardGroup === 'undefined') return;
    const boss = state.bossEntity;
    const proj = createTongueProjectile();
    // Spawn from giant lizard's mouth (z=+5.36 in its local space; rotated to face -Z player direction)
    // boss.rotation.y = Math.PI (faces -Z toward player), so mouth in world = boss.position - (0, 0, 5.36)
    const mouthLocal = new THREE.Vector3(0, 1.55, 5.36);
    mouthLocal.applyEuler(boss.rotation);
    proj.position.set(
        boss.position.x + mouthLocal.x,
        boss.position.y + mouthLocal.y - boss.position.y, // y in local already absolute-ish
        boss.position.z + mouthLocal.z
    );
    // Easier: project mouth via boss's matrix world
    boss.updateMatrixWorld(true);
    const worldMouth = new THREE.Vector3(0, 0.99, 8.90).applyMatrix4(boss.matrixWorld);
    proj.position.copy(worldMouth);
    // Aim at player's CURRENT position at firing time
    const tx = lizardGroup.position.x;
    const ty = lizardGroup.position.y + 0.6;
    const tz = lizardGroup.position.z;
    const dx = tx - proj.position.x;
    const dy = ty - proj.position.y;
    const dz = tz - proj.position.z;
    const dist = Math.hypot(dx, dy, dz);
    const speed = 95;
    proj.userData = {
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        vz: (dz / dist) * speed,
        life: 0,
        maxLife: 3.0
    };
    // Orient projectile along velocity
    const yAxis = new THREE.Vector3(0, 1, 0);
    const dir = new THREE.Vector3(dx, dy, dz).normalize();
    proj.quaternion.setFromUnitVectors(yAxis, dir);
    scene.add(proj);
    state.bossProjectiles.push(proj);
    playWebShootSound();
}

function updateGiantLizard(delta) {
    const boss = state.bossEntity;
    const ud = boss.userData;

    if (!ud.phase) {
        ud.phase = 'stalk';
        ud.nextAttackTime = state.time + 3.0;
    }

    // ---- DYING ANIMATION ----
    if (ud.phase === 'dying') {
        const t = state.time - ud.phaseStart;
        const dur = 2.8;

        // Tongue droops out (full length, hanging)
        if (ud.tongue) {
            const droop = Math.min(1, t / 0.8);
            ud.tongue.scale.y = 0.05 + droop * 1.4;
            ud.tongue.rotation.x = Math.PI / 2 + droop * 0.5; // bends down
        }
        if (ud.tongueTip) ud.tongueTip.visible = false;

        // Legs collapse outward
        if (ud.legs) {
            const curl = Math.min(1, t / 1.0);
            ud.legs.forEach(leg => {
                leg.upper.rotation.x += (curl * 0.6 - leg.upper.rotation.x) * 0.15;
                leg.lower.rotation.x += (curl * 0.4 - 0.5 - leg.lower.rotation.x) * 0.15;
                leg.root.position.y = leg.root.userData.restY - curl * 0.3;
            });
        }

        // Body tips forward, sinks, then shrinks
        boss.rotation.x = Math.min(0.7, t * 0.6);
        boss.position.y = Math.max(0.4, (ud.deathStartY || 0) - Math.min(1.0, t / 1.4) * 1.0);
        if (t > 1.6) {
            const sh = Math.max(0.05, 1 - (t - 1.6) / 1.0);
            boss.scale.set(sh, sh, sh);
        }

        updateBossProjectiles(delta);
        if (t >= dur) gameOver();
        return;
    }

    // ---- WALK ANIMATION (trot-like) ----
    if (ud.legs) {
        const stepFreq = 4.5;
        const cycle0 = state.time * stepFreq;
        ud.legs.forEach((leg) => {
            // Diagonal pairs: FL+BR vs FR+BL
            const isPairA = (leg.isFront && leg.side === -1) || (!leg.isFront && leg.side === 1);
            const phase = isPairA ? 0 : Math.PI;
            const c = cycle0 + phase;
            const swing = Math.sin(c);
            const fwd = -Math.cos(c);

            // Sweep leg fore/aft
            leg.root.rotation.y = fwd * 0.35;
            // Lift root.y during swing phase
            leg.root.position.y = leg.root.userData.restY + Math.max(0, swing) * 0.30;
            // Upper leg pitch
            const upRest = leg.upper.userData.restX;
            const upTarget = upRest + Math.max(0, swing) * 0.45;
            leg.upper.rotation.x += (upTarget - leg.upper.rotation.x) * 0.25;
            // Knee bend
            const lowRest = leg.lower.userData.restX;
            const lowTarget = lowRest - Math.max(0, swing) * 0.35;
            leg.lower.rotation.x += (lowTarget - leg.lower.rotation.x) * 0.25;
        });
    }

    // Subtle body bob synced to footfall (one bounce per gait half-cycle)
    const bodyBob = Math.abs(Math.sin(state.time * 4.5)) * 0.20;
    const baseY = 0;

    // Tail follows body sway
    if (ud.tailSegs) {
        const swayBase = Math.sin(state.time * 1.5) * 0.25;
        ud.tailSegs.forEach((seg, i) => {
            const lag = i * 0.20;
            seg.position.x = swayBase * (i / 8) * 1.4 * Math.cos(lag);
        });
    }

    if (ud.phase === 'stalk') {
        // Walk around in front of player, weaving sideways
        const targetX = Math.sin(state.time * 0.6) * 3.5;
        boss.position.x += (targetX - boss.position.x) * 0.04;
        boss.position.y = baseY + bodyBob;
        boss.position.z = 23 + Math.sin(state.time * 0.45) * 2.5;
        boss.rotation.y = Math.PI + Math.sin(state.time * 1.0) * 0.08;
        boss.rotation.z = 0;

        // Keep tongue hidden during stalk
        if (ud.tongue) ud.tongue.scale.y = 0.05;
        if (ud.tongueTip) ud.tongueTip.visible = false;

        if (state.time >= ud.nextAttackTime) {
            if (state.isFlying) {
                ud.nextAttackTime = state.time + 0.5; // wait while player flies
            } else {
                ud.phase = 'windup';
                ud.phaseStart = state.time;
            }
        }
    } else if (ud.phase === 'windup') {
        // Rears head back briefly
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.40);
        boss.rotation.x = -t * 0.25;
        if (t >= 1) {
            fireJattiLiskoTongue();
            ud.phase = 'shoot';
            ud.phaseStart = state.time;
        }
    } else if (ud.phase === 'shoot') {
        // Tongue stays out for a brief moment (visual flair)
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.20);
        boss.rotation.x = -0.25 + t * 0.10;
        if (ud.tongue) ud.tongue.scale.y = 0.05 + t * 4.5;
        if (t >= 1) {
            ud.phase = 'retract';
            ud.phaseStart = state.time;
        }
    } else if (ud.phase === 'retract') {
        const t = Math.min(1, (state.time - ud.phaseStart) / 0.35);
        boss.rotation.x = -0.15 * (1 - t);
        if (ud.tongue) ud.tongue.scale.y = 4.55 * (1 - t) + 0.05;
        if (t >= 1) {
            ud.phase = 'stalk';
            ud.nextAttackTime = state.time + 1.8 + Math.random() * 0.8;
        }
    }

    updateBossProjectiles(delta);
}

function updateFlyHUD() {
    const el = document.getElementById('fly-hud');
    const btn = document.getElementById('fly-btn');
    const showInGame = state.isRunning;
    if (el) {
        el.style.display = showInGame ? '' : 'none';
        if (state.isFlying) {
            const remaining = Math.max(0, state.flyEndTime - state.time);
            el.classList.add('flying');
            el.innerHTML = `✈️ LENTO ${remaining.toFixed(1)}s`;
        } else {
            el.classList.remove('flying');
            el.innerHTML = `✈️ Lento (F): <span id="fly-uses">${state.flyUsesLeft}</span>/3`;
        }
    }
    if (btn) {
        btn.style.display = showInGame ? '' : 'none';
        if (state.isFlying) {
            const remaining = Math.max(0, state.flyEndTime - state.time);
            btn.classList.add('flying');
            btn.classList.remove('disabled');
            btn.textContent = `✈️ ${remaining.toFixed(1)}s`;
        } else if (state.flyUsesLeft <= 0) {
            btn.classList.remove('flying');
            btn.classList.add('disabled');
            btn.textContent = '✈️ Käytetty';
        } else {
            btn.classList.remove('flying', 'disabled');
            btn.textContent = `✈️ LENTO (${state.flyUsesLeft})`;
        }
    }
}

// Lazy-built airplane mesh attached to lizardGroup; toggled visible during flight
let airplaneGroup = null;
function buildAirplane() {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xdcdfe6, roughness: 0.3, metalness: 0.4 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const propMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const cockpitMat = new THREE.MeshStandardMaterial({
        color: 0x66ccff, transparent: true, opacity: 0.5, roughness: 0.1, metalness: 0.3
    });

    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.45, 3.6, 16), bodyMat);
    fuselage.rotation.x = Math.PI / 2;
    fuselage.position.set(0, 0.0, 0);
    g.add(fuselage);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.6, 14), bodyMat);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, 0.0, 2.1);
    g.add(nose);

    const wings = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 1.0), bodyMat);
    wings.position.set(0, -0.15, 0);
    g.add(wings);

    [1, -1].forEach(side => {
        const tip = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.13, 1.05), accentMat);
        tip.position.set(side * 2.07, -0.15, 0); g.add(tip);
        const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 6), bodyMat);
        strut.position.set(side * 0.7, -0.55, 0.3); g.add(strut);
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 12), propMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(side * 0.7, -0.85, 0.3); g.add(wheel);
    });

    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.7), accentMat);
    tailFin.position.set(0, 0.55, -1.5); g.add(tailFin);

    const stab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.45), bodyMat);
    stab.position.set(0, 0.2, -1.6); g.add(stab);

    const cockpit = new THREE.Mesh(
        new THREE.SphereGeometry(0.62, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        cockpitMat
    );
    cockpit.position.set(0, 0.5, 0.2);
    cockpit.scale.set(1, 0.8, 1.4);
    g.add(cockpit);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 3.5), accentMat);
    stripe.position.set(0, 0.05, 0);
    g.add(stripe);

    const propeller = new THREE.Group();
    const blade1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.4, 0.1), propMat);
    propeller.add(blade1);
    const blade2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.1), propMat);
    propeller.add(blade2);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.12, 8), accentMat);
    hub.rotation.x = Math.PI / 2;
    propeller.add(hub);
    propeller.position.set(0, 0.0, 2.45);
    g.add(propeller);
    g.userData.propeller = propeller;

    g.visible = false;
    return g;
}

function updateAirplane() {
    if (!airplaneGroup && typeof lizardGroup !== 'undefined') {
        airplaneGroup = buildAirplane();
        lizardGroup.add(airplaneGroup);
    }
    if (!airplaneGroup) return;
    airplaneGroup.visible = state.isFlying;
    if (state.isFlying && airplaneGroup.userData.propeller) {
        airplaneGroup.userData.propeller.rotation.z += 0.7;
    }
    // Hide the lizard's tail while flying so it doesn't poke through the airplane fuselage
    if (typeof tail !== 'undefined' && tail) {
        if (state.isFlying) {
            if (tail.userData._flyHiddenWas === undefined) tail.userData._flyHiddenWas = tail.visible;
            tail.visible = false;
        } else if (tail.userData._flyHiddenWas !== undefined) {
            tail.visible = tail.userData._flyHiddenWas;
            delete tail.userData._flyHiddenWas;
        }
    }
    if (typeof tailSegments !== 'undefined') {
        tailSegments.forEach(seg => {
            if (!seg) return;
            if (state.isFlying) {
                if (seg.userData._flyHiddenWas === undefined) seg.userData._flyHiddenWas = seg.visible;
                seg.visible = false;
            } else if (seg.userData._flyHiddenWas !== undefined) {
                seg.visible = seg.userData._flyHiddenWas;
                delete seg.userData._flyHiddenWas;
            }
        });
    }
}

function _activateSuperPower(id) {
    if (!state.isRunning) return;
    const lvl = (shopData.superPowers || {})[id] || 0;
    const def = SUPER_POWER_DEFS[id];
    if (lvl === 0) {
        showCheatNotification(`🚫 ${def.name} ei ole avattu`);
        return;
    }
    if (state[`${id}Active`]) return;
    if (state.time < state.superPowerCooldownEnd) {
        const wait = (state.superPowerCooldownEnd - state.time).toFixed(1);
        showCheatNotification(`⏱️ Odota ${wait}s ennen seuraavaa supervoimaa`);
        return;
    }
    if (state[`${id}UsesLeft`] <= 0) {
        showCheatNotification(`🚫 ${def.name}: ei käyttöjä jäljellä`);
        return;
    }
    const tier = def.levels[lvl - 1];
    state[`${id}Active`] = true;
    state[`${id}EndTime`] = state.time + tier.duration;
    state[`${id}UsesLeft`]--;
    state.superPowerCooldownEnd = state.time + SUPER_POWER_COOLDOWN;
    showCheatNotification(`${def.icon} ${def.name.toUpperCase()}! (${tier.duration}s)`);
    playPowerUpSound();
}
function activateShield() { _activateSuperPower('shield'); }
function activateMagnet() { _activateSuperPower('magnet'); }
function activateSlowmo() { _activateSuperPower('slowmo'); }

function upgradePower(id) {
    const def = SUPER_POWER_DEFS[id];
    if (!def) return;
    if (!shopData.superPowers) shopData.superPowers = { shield: 0, magnet: 0, slowmo: 0, doubleScore: 0, turbo: 0, lure: 0 };
    const lvl = shopData.superPowers[id] || 0;
    if (lvl >= def.levels.length) {
        showCheatNotification(`🚫 ${def.name} on jo max-tasolla`);
        return;
    }
    if (shopData.totalFlies < 5000) {
        const missing = 5000 - shopData.totalFlies;
        showCheatNotification(`🚫 Tarvitset vielä ${missing} 🪰`);
        return;
    }
    shopData.totalFlies -= 5000;
    shopData.superPowers[id] = lvl + 1;
    saveShopData();
    showCheatNotification(`${def.icon} ${def.name} ${lvl === 0 ? 'avattu' : 'päivitetty'} tasolle ${lvl + 1}!`);
    renderShopUI();
    updateCoinsDisplay();
}

function updateSuperPowerTimers() {
    Object.keys(SUPER_POWER_DEFS).forEach(id => {
        if (state[`${id}Active`] && state.time >= state[`${id}EndTime`]) {
            state[`${id}Active`] = false;
            showCheatNotification(`${SUPER_POWER_DEFS[id].icon} ${SUPER_POWER_DEFS[id].name} päättyi`);
        }
    });
}

function updatePowersHUD() {
    const sp = shopData.superPowers || {};
    Object.keys(SUPER_POWER_DEFS).forEach(id => {
        const el = document.getElementById(`${id}-hud`);
        if (!el) return;
        const lvl = sp[id] || 0;
        const showInGame = state.isRunning && lvl > 0;
        el.style.display = showInGame ? '' : 'none';
        if (!showInGame) return;
        const usesEl = document.getElementById(`${id}-uses`);
        const usesLeft = state[`${id}UsesLeft`] || 0;
        if (usesEl) usesEl.textContent = usesLeft;
        const isActive = state[`${id}Active`];
        el.classList.toggle('active', isActive);
        if (isActive) {
            const remaining = Math.max(0, state[`${id}EndTime`] - state.time);
            el.querySelector('.power-label').textContent = `${SUPER_POWER_DEFS[id].icon} ${remaining.toFixed(1)}s`;
        } else {
            const def = SUPER_POWER_DEFS[id];
            el.querySelector('.power-label').textContent = `${def.icon} ${def.key}`;
        }
    });
}

function activateFlight() {
    if (!state.isRunning) return;
    if (state.isFlying) return;
    if (state.time < state.superPowerCooldownEnd) {
        const wait = (state.superPowerCooldownEnd - state.time).toFixed(1);
        showCheatNotification(`⏱️ Odota ${wait}s ennen seuraavaa supervoimaa`);
        return;
    }
    if (state.flyUsesLeft <= 0) {
        showCheatNotification('🚫 Ei lentoja jäljellä!');
        return;
    }
    state.isFlying = true;
    state.flyEndTime = state.time + 15;
    state.flyUsesLeft--;
    state.superPowerCooldownEnd = state.time + SUPER_POWER_COOLDOWN;
    showCheatNotification(`✈️ LENTO! (15s) - ${state.flyUsesLeft} käyttöä jäljellä`);
    playPowerUpSound();
    updateFlyHUD();

    trackEvent('fly_used', {
        usesRemaining: state.flyUsesLeft,
        scoreAtUse: state.score,
        timeInGame: Math.round(state.time * 10) / 10
    });
}

function updateBossHP() {
    const el = document.getElementById('boss-hp');
    if (!el) return;
    if (state.bossMode) {
        el.classList.remove('hidden');
        const valEl = document.getElementById('boss-hp-value');
        const maxEl = document.getElementById('boss-hp-max');
        const iconEl = document.getElementById('boss-hp-icon');
        const labelEl = document.getElementById('boss-hp-label');
        if (valEl) valEl.textContent = Math.max(0, state.bossHealth);
        if (maxEl) maxEl.textContent = state.bossMaxHealth;
        if (state.bossType === 'lukitar') {
            if (iconEl) iconEl.textContent = '🕷️';
            if (labelEl) labelEl.textContent = 'ammusta';
        } else if (state.bossType === 'jattilisko') {
            if (iconEl) iconEl.textContent = '🦎';
            if (labelEl) labelEl.textContent = 'kielihyökkäystä';
        } else {
            if (iconEl) iconEl.textContent = '🪰';
            if (labelEl) labelEl.textContent = 'syöksyä';
        }
    } else {
        el.classList.add('hidden');
    }
}

function startBossFight() {
    if (!shopData.bossModeUnlocked) {
        showCheatNotification('🚫 Pomotaistelua ei ole avattu!');
        return;
    }
    pendingBossStart = true;
    pendingBossType = 'fly';
    startGame();
}

function startLukitarFight() {
    if (!shopData.lukitarUnlocked) {
        showCheatNotification('🚫 Lukitar-moodi ei ole avattu!');
        return;
    }
    pendingBossStart = true;
    pendingBossType = 'lukitar';
    startGame();
}

function startJattiLiskoFight() {
    if (!shopData.jattiLiskoUnlocked) {
        showCheatNotification('🚫 Jätti-Lisko-moodi ei ole avattu!');
        return;
    }
    pendingBossStart = true;
    pendingBossType = 'jattilisko';
    startGame();
}

function buyBossMode() {
    if (shopData.bossModeUnlocked) {
        showCheatNotification('🚫 Jättikärpäs-moodi jo ostettu!');
        return;
    }
    if (shopData.totalFlies < 10000) {
        const missing = 10000 - shopData.totalFlies;
        showCheatNotification(`🚫 Tarvitset vielä ${missing} 🪰 (sinulla: ${shopData.totalFlies})`);
        return;
    }
    shopData.totalFlies -= 10000;
    shopData.bossModeUnlocked = true;
    saveShopData();
    showCheatNotification('🪰⚔️ JÄTTIKÄRPÄS-MOODI AVATTU!');
    renderShopUI();
    updateCoinsDisplay();
    updateBossButton();
}

function buyLukitar() {
    if (shopData.lukitarUnlocked) {
        showCheatNotification('🚫 Lukitar-moodi jo ostettu!');
        return;
    }
    if (shopData.totalFlies < 15000) {
        const missing = 15000 - shopData.totalFlies;
        showCheatNotification(`🚫 Tarvitset vielä ${missing} 🪰 (sinulla: ${shopData.totalFlies})`);
        return;
    }
    shopData.totalFlies -= 15000;
    shopData.lukitarUnlocked = true;
    saveShopData();
    showCheatNotification('🕷️⚔️ LUKITAR-MOODI AVATTU!');
    renderShopUI();
    updateCoinsDisplay();
    updateBossButton();
}

function buyJattiLisko() {
    if (shopData.jattiLiskoUnlocked) {
        showCheatNotification('🚫 Jätti-Lisko-moodi jo ostettu!');
        return;
    }
    if (shopData.totalFlies < 20000) {
        const missing = 20000 - shopData.totalFlies;
        showCheatNotification(`🚫 Tarvitset vielä ${missing} 🪰 (sinulla: ${shopData.totalFlies})`);
        return;
    }
    shopData.totalFlies -= 20000;
    shopData.jattiLiskoUnlocked = true;
    saveShopData();
    showCheatNotification('🦎⚔️ JÄTTI-LISKO-MOODI AVATTU!');
    renderShopUI();
    updateCoinsDisplay();
    updateBossButton();
}

// === MUSIC SHOP ===
function buyMusic(trackId) {
    const track = MUSIC_TRACKS[trackId];
    if (!track) return;
    if ((shopData.ownedMusic || []).includes(trackId)) {
        showCheatNotification('🚫 Tämä kappale on jo ostettu!');
        return;
    }
    if (shopData.totalFlies < track.price) {
        const missing = track.price - shopData.totalFlies;
        showCheatNotification(`🚫 Tarvitset vielä ${missing} 🪰`);
        return;
    }
    shopData.totalFlies -= track.price;
    shopData.ownedMusic = (shopData.ownedMusic || ['klassinen']).concat(trackId);
    saveShopData();
    showCheatNotification(`🎵 "${track.name}" lisätty kokoelmaan!`);
    renderShopUI();
    updateCoinsDisplay();
}

function equipMusic(trackId) {
    if (!MUSIC_TRACKS[trackId]) return;
    if (!(shopData.ownedMusic || []).includes(trackId)) {
        showCheatNotification('🚫 Et omista tätä kappaletta');
        return;
    }
    shopData.equippedMusic = trackId;
    saveShopData();
    showCheatNotification(`🎵 Soittolista: "${MUSIC_TRACKS[trackId].name}"`);
    renderShopUI();
    // Restart music with the new track if currently playing
    if (musicPlaying) {
        stopMusic();
        startMusic();
    }
}

function previewMusic(trackId) {
    const track = MUSIC_TRACKS[trackId];
    if (!track) return;
    initAudio();
    const ctx = audioContext;
    const now = ctx.currentTime;
    // Play first 4 notes as a teaser
    const len = Math.min(4, track.melody.length);
    for (let i = 0; i < len; i++) {
        const f = track.melody[i];
        if (f > 0) playNote(f, now + i * track.tempo, track.tempo * 0.9, track.wave);
    }
}

function updateBossButton() {
    const btn = document.getElementById('boss-start-btn');
    if (btn) {
        if (shopData.bossModeUnlocked) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    }
    const lukitarBtn = document.getElementById('lukitar-start-btn');
    if (lukitarBtn) {
        if (shopData.lukitarUnlocked) lukitarBtn.classList.remove('hidden');
        else lukitarBtn.classList.add('hidden');
    }
    const jattiLiskoBtn = document.getElementById('jattilisko-start-btn');
    if (jattiLiskoBtn) {
        if (shopData.jattiLiskoUnlocked) jattiLiskoBtn.classList.remove('hidden');
        else jattiLiskoBtn.classList.add('hidden');
    }
}

// ============ OBSTACLES ============
const rockMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080,
    roughness: 0.8
});

function createRock(lane) {
    const group = new THREE.Group();

    // Main rock
    const geom = new THREE.DodecahedronGeometry(0.8 + Math.random() * 0.4, 0);
    const rock = new THREE.Mesh(geom, rockMaterial);
    rock.position.y = 0.6;
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    rock.scale.y = 0.7;
    rock.castShadow = true;
    group.add(rock);

    // Smaller rock
    const smallGeom = new THREE.DodecahedronGeometry(0.4, 0);
    const smallRock = new THREE.Mesh(smallGeom, rockMaterial);
    smallRock.position.set(0.5, 0.3, 0.3);
    smallRock.castShadow = true;
    group.add(smallRock);

    group.position.set(LANES[lane], 0, SPAWN_DISTANCE);
    group.userData.lane = lane;

    return group;
}

function createLog(lane) {
    const geom = new THREE.CylinderGeometry(0.5, 0.5, 3, 12);
    const material = new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.9
    });
    const log = new THREE.Mesh(geom, material);
    log.rotation.z = Math.PI / 2;
    log.position.set(LANES[lane], 0.5, SPAWN_DISTANCE);
    log.castShadow = true;
    log.userData.lane = lane;

    return log;
}

// ============ FLIES (COLLECTIBLES) ============
function createFly(lane) {
    const group = new THREE.Group();

    // Body
    const bodyGeom = new THREE.SphereGeometry(0.25, 8, 8);
    const flyMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.4
    });
    const body = new THREE.Mesh(bodyGeom, flyMaterial);
    group.add(body);

    // Wings
    const wingGeom = new THREE.CircleGeometry(0.3, 8);
    const wingMaterial = new THREE.MeshStandardMaterial({
        color: 0xaaddff,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
    });

    const leftWing = new THREE.Mesh(wingGeom, wingMaterial);
    leftWing.position.set(-0.2, 0.1, 0);
    leftWing.rotation.y = -0.5;
    group.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeom, wingMaterial);
    rightWing.position.set(0.2, 0.1, 0);
    rightWing.rotation.y = 0.5;
    group.add(rightWing);

    group.position.set(LANES[lane], 1.5, SPAWN_DISTANCE);
    group.userData.lane = lane;
    group.userData.leftWing = leftWing;
    group.userData.rightWing = rightWing;

    return group;
}

// ============ POWER-UPS ============
function createHelmet(lane) {
    const group = new THREE.Group();

    // Helmet dome
    const helmetGeom = new THREE.SphereGeometry(0.5, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const helmetMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        roughness: 0.3,
        metalness: 0.8,
        emissive: 0xffa500,
        emissiveIntensity: 0.3
    });
    const helmet = new THREE.Mesh(helmetGeom, helmetMaterial);
    helmet.rotation.x = Math.PI;
    helmet.position.y = 0.3;
    group.add(helmet);

    // Helmet brim
    const brimGeom = new THREE.CylinderGeometry(0.55, 0.55, 0.1, 16);
    const brim = new THREE.Mesh(brimGeom, helmetMaterial);
    brim.position.y = 0.3;
    group.add(brim);

    // Star on top
    const starGeom = new THREE.OctahedronGeometry(0.15);
    const starMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xffff00,
        emissiveIntensity: 0.5
    });
    const star = new THREE.Mesh(starGeom, starMaterial);
    star.position.y = 0.8;
    group.add(star);

    group.position.set(LANES[lane], 1.2, SPAWN_DISTANCE);
    group.userData.lane = lane;
    group.userData.type = 'helmet';
    group.userData.star = star;

    return group;
}

function playPowerUpSound() {
    if (!audioContext) return;
    const ctx = audioContext;
    const now = ctx.currentTime;

    // Epic power-up sound
    [523, 659, 784, 1047].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.2, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
    });
}

// ============ SPAWNING ============
var lastSpawnZ = 20;

function spawnObjects() {
    if (state.time * state.speed * 10 > lastSpawnZ) {
        const lane = Math.floor(Math.random() * 3);

        // Calculate power-up spawn chance based on difficulty and time
        // On hard/super modes, power-ups become rarer as time goes on
        let powerUpChance = 0.15; // Base 15% chance

        if (state.cheatMode) {
            // Cheat mode: boosted power-ups!
            powerUpChance = 0.35;
        } else if (state.difficulty === 'hard') {
            // Hard mode: decreases from 15% to 5% over 60 seconds
            powerUpChance = Math.max(0.05, 0.15 - (state.time * 0.0017));
        } else if (state.difficulty === 'super') {
            // Super mode: decreases from 10% to 2% over 30 seconds
            powerUpChance = Math.max(0.02, 0.10 - (state.time * 0.0027));
        }

        const _lureLvl = (shopData.superPowers || {}).lure || 0;
        const _obstacleChance = (state.lureActive && _lureLvl > 0)
            ? (1 - SUPER_POWER_DEFS.lure.levels[_lureLvl - 1].flyChance)
            : 0.5;
        if (Math.random() < _obstacleChance) {
            // Spawn obstacle
            const obstacle = Math.random() < 0.5 ? createRock(lane) : createLog(lane);
            scene.add(obstacle);
            state.obstacles.push(obstacle);
        } else if (Math.random() < (1 - powerUpChance)) {
            // Spawn fly
            const fly = createFly(lane);
            scene.add(fly);
            state.flies.push(fly);
        } else {
            // Spawn power-up (helmet)
            const helmet = createHelmet(lane);
            scene.add(helmet);
            state.powerups.push(helmet);
        }

        // Adjust spawn distance based on difficulty
        const diff = DIFFICULTIES[state.difficulty || 'normal'];
        const spawnMulti = diff.spawnIntervalMulti || 1.0;
        lastSpawnZ += (8 + Math.random() * 12) * spawnMulti;
    }
}

// ============ COLLISION DETECTION ============
function checkCollisions(moveSpeed = 0) {
    const lizardX = lizardGroup.position.x;
    const lizardZ = lizardGroup.position.z; // Always 0

    // Check obstacles — skipped entirely while flying (monkey super power)
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
        if (state.isFlying) break;
        const obs = state.obstacles[i];
        const dx = Math.abs(obs.position.x - lizardX);
        // Enhanced Z check to prevent tunneling at high speeds
        const z = obs.position.z;
        const collisionDepth = 1.2;
        const hitZ = z <= collisionDepth && z >= -(collisionDepth + moveSpeed); // Swept collision check

        if (dx < 1.2 && hitZ) {
            // Destroyer mode: destroy obstacle for 5 flies
            if (state.destroyerMode) {
                scene.remove(obs);
                state.obstacles.splice(i, 1);
                state.score += 5;
                playPowerUpSound();
                updateHUD();
                continue;
            }
            // Invincible OR shield active OR turbo active: skip damage
            if (state.isInvincible || state.shieldActive || state.turboActive) {
                continue;
            }
            // Normal: game over
            gameOver();
            return;
        }
    }

    // Check flies
    for (let i = state.flies.length - 1; i >= 0; i--) {
        const fly = state.flies[i];
        const dx = Math.abs(fly.position.x - lizardX);
        // Enhanced Z check for collection
        const z = fly.position.z;
        const collectDepth = 1.5;
        const hitZ = z <= collectDepth && z >= -(collectDepth + moveSpeed);

        // Tongue mode: auto-catch flies from ALL lanes if within Z range
        const tongueActive = state.tongueFliesLeft > 0;
        const tongueRange = 25; // Tongue reaches further ahead
        const tongueHitZ = z <= tongueRange && z >= -2;
        // Flight mode no longer auto-collects — player must fly into each fly to catch it.
        // Magnet super power — wide-radius pull during activation
        const _magLvl = (shopData.superPowers || {}).magnet || 0;
        const _magRadius = (state.magnetActive && _magLvl > 0)
            ? SUPER_POWER_DEFS.magnet.levels[_magLvl - 1].radius : 0;
        const magnetCatch = _magRadius > 0 && z <= _magRadius && z >= -3 && dx <= _magRadius;

        if ((dx < 1.5 && hitZ) || (tongueActive && tongueHitZ) || magnetCatch) {
            scene.remove(fly);
            state.flies.splice(i, 1);
            const _dsLvl = (shopData.superPowers || {}).doubleScore || 0;
            const _scoreMult = (state.doubleScoreActive && _dsLvl > 0)
                ? SUPER_POWER_DEFS.doubleScore.levels[_dsLvl - 1].multiplier : 1;
            state.score += _scoreMult;

            // Boss-mode: collected flies still grow score (and via end-of-game conversion → coins),
            // but boss is defeated by surviving its 7 dives, not by fly damage.

            if (tongueActive && (dx >= 1.5 || !hitZ)) {
                // Caught with tongue from distance!
                state.tongueFliesLeft--;
                animateTongue(z); // Trigger visual tongue animation!
                playTongueCatchSound();
                if (state.tongueFliesLeft <= 0) {
                    showCheatNotification(t('tongueEnded'));
                }
            } else {
                playCollectSound();
            }
            updateHUD();
        }
    }

    // Check power-ups
    for (let i = state.powerups.length - 1; i >= 0; i--) {
        const powerup = state.powerups[i];
        const dx = Math.abs(powerup.position.x - lizardX);
        // Enhanced Z check
        const z = powerup.position.z;
        const collectDepth = 1.5;
        const hitZ = z <= collectDepth && z >= -(collectDepth + moveSpeed);

        if (dx < 1.5 && hitZ) {
            scene.remove(powerup);
            state.powerups.splice(i, 1);
            activateInvincibility();
        }
    }
}

const INVINCIBILITY_DURATION = 5;        // seconds
const INVINCIBILITY_WARNING_TIME = 1.5;  // seconds before end that warning phase begins
const INVINCIBILITY_WARNING_BEEPS = 3;   // beeps fired during the warning phase

function activateInvincibility() {
    state.isInvincible = true;
    state.invincibleEndTime = state.time + INVINCIBILITY_DURATION;
    state.invincibleWarningBeepsPlayed = 0;
    playPowerUpSound();

    // Make lizard glow (gold)
    scaleMaterial.emissive.setHex(0xffd700);
    scaleMaterial.emissiveIntensity = 0.5;

    // Show HUD indicator
    const hud = document.getElementById('invincible-hud');
    if (hud) {
        hud.style.display = 'block';
        hud.classList.remove('warning');
    }
}

function playInvincibilityWarningBeep() {
    if (!audioContext) return;
    const ctx = audioContext;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1320, now);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
}

function updateInvincibility() {
    const hud = document.getElementById('invincible-hud');

    if (state.isInvincible && state.time >= state.invincibleEndTime) {
        state.isInvincible = false;
        scaleMaterial.emissive.setHex(0x000000);
        scaleMaterial.emissiveIntensity = 0;
        if (hud) {
            hud.style.display = 'none';
            hud.classList.remove('warning');
        }
        return;
    }

    if (!state.isInvincible) return;

    const remaining = state.invincibleEndTime - state.time;
    const inWarning = remaining <= INVINCIBILITY_WARNING_TIME;

    // HUD countdown text
    if (hud) {
        const timeSpan = document.getElementById('invincible-time');
        if (timeSpan) timeSpan.textContent = remaining.toFixed(1);
        hud.classList.toggle('warning', inWarning);
    }

    if (inWarning) {
        // Warning phase: fast flash, color shifts toward red
        const fastFlash = Math.sin(state.time * 45) > 0;
        scaleMaterial.emissive.setHex(fastFlash ? 0xff2020 : 0xffa020);
        scaleMaterial.emissiveIntensity = fastFlash ? 0.95 : 0.45;

        // Fire up to N beeps, evenly spaced over the warning window
        const elapsedInWarning = INVINCIBILITY_WARNING_TIME - remaining;
        const beepInterval = INVINCIBILITY_WARNING_TIME / INVINCIBILITY_WARNING_BEEPS;
        const beepsDue = Math.min(
            INVINCIBILITY_WARNING_BEEPS,
            Math.floor(elapsedInWarning / beepInterval) + 1
        );
        while (state.invincibleWarningBeepsPlayed < beepsDue) {
            playInvincibilityWarningBeep();
            state.invincibleWarningBeepsPlayed++;
        }
    } else {
        // Safe phase: rainbow-tinted gold pulse so the player notices it clearly
        const hue = (state.time * 0.6) % 1;
        scaleMaterial.emissive.setHSL(hue, 1, 0.5);
        const pulse = Math.sin(state.time * 20) > 0;
        scaleMaterial.emissiveIntensity = pulse ? 0.85 : 0.45;
    }
}

// ============ GAME CONTROLS ============
function handleInput(e) {
    if (!state.isRunning) return;

    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        state.targetLane = Math.min(1, state.targetLane + 1);
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        state.targetLane = Math.max(-1, state.targetLane - 1);
    } else if (e.key === 'f' || e.key === 'F') {
        // Flight super power — works for any skin
        activateFlight();
    } else if (e.key === 'q' || e.key === 'Q') {
        activateShield();
    } else if (e.key === 'e' || e.key === 'E') {
        activateMagnet();
    } else if (e.key === 'r' || e.key === 'R') {
        activateSlowmo();
    } else if (e.key === 't' || e.key === 'T') {
        _activateSuperPower('doubleScore');
    } else if (e.key === 'g' || e.key === 'G') {
        _activateSuperPower('turbo');
    } else if (e.key === 'v' || e.key === 'V') {
        _activateSuperPower('lure');
    }
}

document.addEventListener('keydown', handleInput);

// Wire fly button (touch + click)
const _flyBtn = document.getElementById('fly-btn');
if (_flyBtn) {
    _flyBtn.addEventListener('click', (e) => { e.preventDefault(); activateFlight(); });
    _flyBtn.addEventListener('touchstart', (e) => { e.preventDefault(); activateFlight(); }, { passive: false });
}

// ============ MOBILE TOUCH CONTROLS ============
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;

function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchStartTime = Date.now();
}

function handleTouchEnd(e) {
    if (!state.isRunning) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const deltaTime = Date.now() - touchStartTime;

    // Minimum swipe distance and maximum time for swipe detection
    const minSwipeDistance = 30;
    const maxSwipeTime = 300;

    if (deltaTime < maxSwipeTime && Math.abs(deltaX) > minSwipeDistance) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0) {
                // Swipe right -> move right
                state.targetLane = Math.max(-1, state.targetLane - 1);
            } else {
                // Swipe left -> move left
                state.targetLane = Math.min(1, state.targetLane + 1);
            }
        }
    }
}

// Touch button handlers for mobile
function moveLeft() {
    if (!state.isRunning) return;
    state.targetLane = Math.min(1, state.targetLane + 1);
}

function moveRight() {
    if (!state.isRunning) return;
    state.targetLane = Math.max(-1, state.targetLane - 1);
}

// Add touch event listeners
document.addEventListener('touchstart', handleTouchStart, { passive: true });
document.addEventListener('touchend', handleTouchEnd, { passive: true });

// Setup mobile button listeners
const leftBtn = document.getElementById('mobile-left-btn');
const rightBtn = document.getElementById('mobile-right-btn');
if (leftBtn) leftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveLeft(); });
if (rightBtn) rightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveRight(); });

// ============ GAME LOOP ============
function updateHUD() {
    document.getElementById('score-value').textContent = state.score;
    document.getElementById('speed-value').textContent = state.speed.toFixed(1);
}

function animateLizard(time) {
    // Slower step cycle so footfalls are visible; clamp min so animation still ticks
    const speed = Math.max(state.speed, 0.7);
    const stride = time * 8.5 * speed;
    const cosStride = Math.cos(stride);
    const sinStride = Math.sin(stride);

    // ---- BODY UNDULATION (traveling sine wave head→tail) ----
    // Hips lead, chest lags ~70° behind, head counter-stabilizes
    const undAmp = 0.22;
    hips.rotation.y      =  sinStride                              * undAmp;
    chest.rotation.y     =  Math.sin(stride + Math.PI * 0.60)      * undAmp * 0.80;
    headGroup.rotation.y =  Math.sin(stride + Math.PI * 1.05)      * undAmp * 0.40;

    // ---- BODY ROLL (counter-balance) + tiny side-shift weight transfer ----
    lizardGroup.rotation.z = sinStride * 0.06;

    // ---- HEAD BOB + LOOKAROUND ----
    headGroup.position.z = 1.4 + Math.sin(stride * 2) * 0.035;
    headGroup.position.y = 0.55 + Math.abs(Math.sin(stride * 2)) * 0.025;
    // Slow occasional head-tilt scan (every ~5 sec a deliberate dart)
    const scan = Math.sin(time * 0.4);
    headGroup.rotation.x = Math.sin(stride * 2) * 0.045 + Math.sin(time * 0.9) * 0.03;
    headGroup.rotation.z = scan * 0.05;

    // ---- TAIL — continuous travelling wave + gravity droop at tip ----
    tailSegments.forEach((seg, i) => {
        const t = i / numTailSegs;
        const lag = i * 0.14;
        const tipFalloff = 1 - Math.pow(t, 2.4) * 0.35;
        const ampGrow    = Math.min(1, 0.35 + i * 0.10);

        const targetRotY = Math.sin(stride - lag - Math.PI * 0.4) * 0.30 * tipFalloff * ampGrow;
        // Tail tip droops a little more toward the ground (gravity) + flick wave on top
        const droop = t * t * 0.18; // quadratic droop toward tip
        const targetRotX = Math.PI / 2 + droop + Math.sin(stride * 2 - lag * 1.5) * 0.07 * t;

        const k = 0.13;
        seg.rotation.y += (targetRotY - seg.rotation.y) * k;
        seg.rotation.x += (targetRotX - seg.rotation.x) * k;
    });

    // ---- LEGS — proper plant-and-drag sprawled gait ----
    legs.forEach(leg => {
        // Diagonal trot pairs: FL+BR together (phase 0), FR+BL together (phase π)
        const phase = (leg.isFront ? (leg.side === -1 ? 0 : Math.PI)
                                   : (leg.side ===  1 ? 0 : Math.PI));
        const cycle = stride + phase;
        const swing = Math.sin(cycle);    //  > 0 → foot off ground (swing phase)
        const cos_c = Math.cos(cycle);

        // FOOT FORE/AFT POSITION (yaw)
        // -cos(cycle) maps: cycle=0 → -max (foot at rear, about to lift),
        //                    cycle=π/2 → 0 (mid swing, foot under shoulder),
        //                    cycle=π   → +max (foot planted FORWARD),
        //                    cycle=3π/2→ 0 (mid stance, drag back),
        //                    cycle=2π  → -max (about to lift again)
        const reachAmp = 0.70;
        leg.shoulder.rotation.y = -cos_c * reachAmp;

        // SHOULDER LIFT (roll) — foot raises off the ground during swing only
        leg.shoulder.rotation.x = Math.max(0, swing) * 0.30;

        // UPPER LEG PITCH — leg extends down in stance, kicks up in swing
        const upperLift = (swing > 0)
            ? 0.20 + swing * 0.85        // lifted during swing (peak at swing midpoint)
            : 0.20 + swing * 0.10;       // stays low during stance
        leg.upper.rotation.x = upperLift;

        // SPRAWL outward (slightly less when swinging through air)
        leg.upper.rotation.z = leg.side * (0.34 - Math.max(0, swing) * 0.16);

        // KNEE — sharp bend during swing, straighter at plant for push-off
        const kneeBend = (swing > 0)
            ? 0.55 + swing * 1.20         // deep bend mid-swing
            : 0.35 + Math.max(0, -cos_c) * 0.35; // semi-bent during stance, straightens at plant
        leg.lower.rotation.x = -kneeBend;

        // ANKLE — toes point down during stance, lift before push-off
        leg.foot.rotation.x = Math.max(0, swing) * 0.95 - Math.max(0, -swing) * 0.18;
    });

    // ---- WHOLE-BODY BOB — twice per stride (trot has 2 footfalls / cycle) ----
    if (!state.isFlying && lizardGroup.position.y < 0.5) {
        // Each diagonal pair planting drops the body a touch
        lizardGroup.position.y = Math.abs(sinStride) * 0.06;
        // Lateral weight-shift (counter to undulation)
        lizardGroup.rotation.x = Math.sin(stride * 2) * 0.020;
    }

    // ---- IDLE BREATHING — chest expansion at slow tempo (only x/y so length doesn't change) ----
    const breath = 1 + Math.sin(time * 1.7) * 0.015;
    chestMesh.scale.set(0.88 * breath, 0.72 * breath, 1.65);
}

function animate() {
    requestAnimationFrame(animate);

    if (!state.isRunning || state.isPaused) {
        renderer.render(scene, camera);
        return;
    }

    const delta = 0.016; // ~60fps
    state.time += delta;

    // Increase speed over time based on difficulty
    const diff = DIFFICULTIES[state.difficulty || 'normal'];
    state.speed = diff.startSpeed + state.time * diff.acceleration;
    if (state.speed > diff.maxSpeed) state.speed = diff.maxSpeed;

    // Move lizard smoothly between lanes
    const targetX = LANES[state.targetLane + 1];
    // Snappier movement for higher speeds
    const lerpFactor = state.difficulty === 'super' ? 0.35 : (state.difficulty === 'hard' ? 0.28 : 0.22);
    lizardGroup.position.x += (targetX - lizardGroup.position.x) * lerpFactor;

    // Animate lizard
    animateLizard(state.time);

    // Update tongue animation (for jättikieli power)
    updateTongueAnimation(delta);

    // Move obstacles and flies toward player (slowmo super power scales speed)
    const _slowmoLvl = (shopData.superPowers || {}).slowmo || 0;
    const _slowFactor = (state.slowmoActive && _slowmoLvl > 0)
        ? SUPER_POWER_DEFS.slowmo.levels[_slowmoLvl - 1].factor : 1.0;
    const _turboLvl = (shopData.superPowers || {}).turbo || 0;
    const _turboFactor = (state.turboActive && _turboLvl > 0)
        ? SUPER_POWER_DEFS.turbo.levels[_turboLvl - 1].speed : 1.0;
    const moveSpeed = 20 * state.speed * delta * _slowFactor * _turboFactor;

    state.obstacles.forEach((obs, i) => {
        obs.position.z -= moveSpeed;
        if (obs.position.z < DESPAWN_DISTANCE) {
            scene.remove(obs);
            state.obstacles.splice(i, 1);
        }
    });

    state.flies.forEach((fly, i) => {
        fly.position.z -= moveSpeed;
        // While flying, the flies rise up to the airplane's altitude so the pilot lizard can scoop them
        const flyBaseTarget = state.isFlying ? FLIGHT_ALTITUDE : 1.5;
        if (fly.userData.baseY === undefined) fly.userData.baseY = 1.5;
        fly.userData.baseY += (flyBaseTarget - fly.userData.baseY) * 0.08;
        fly.position.y = fly.userData.baseY + Math.sin(state.time * 5 + fly.position.z) * 0.3;
        fly.rotation.y += 0.1;

        // Wing flap
        fly.userData.leftWing.rotation.z = Math.sin(state.time * 30) * 0.5;
        fly.userData.rightWing.rotation.z = -Math.sin(state.time * 30) * 0.5;

        if (fly.position.z < DESPAWN_DISTANCE) {
            scene.remove(fly);
            state.flies.splice(i, 1);
        }
    });

    // Move power-ups
    state.powerups.forEach((powerup, i) => {
        powerup.position.z -= moveSpeed;
        powerup.position.y = 1.2 + Math.sin(state.time * 4) * 0.2;
        powerup.rotation.y += 0.05;
        if (powerup.userData.star) {
            powerup.userData.star.rotation.y += 0.15;
        }

        if (powerup.position.z < DESPAWN_DISTANCE) {
            scene.remove(powerup);
            state.powerups.splice(i, 1);
        }
    });

    // Move ground tiles
    state.groundTiles.forEach((tile, i) => {
        tile.position.z -= moveSpeed;
        if (tile.userData.lines) {
            tile.userData.lines.forEach(line => line.position.z -= moveSpeed);
        }

        if (tile.position.z < -GROUND_LENGTH) {
            const maxZ = Math.max(...state.groundTiles.map(t => t.position.z));
            tile.position.z = maxZ + GROUND_LENGTH;
            if (tile.userData.lines) {
                tile.userData.lines.forEach(line => line.position.z = tile.position.z);
            }
        }
    });

    // Move biome decor (trees, hills, distant silhouettes) — same scroll, wraps to far end
    for (let i = 0; i < state.biomeDecor.length; i++) {
        const obj = state.biomeDecor[i];
        obj.position.z -= moveSpeed;
        if (obj.position.z < -20) obj.position.z += 270;
    }

    // Move clouds (high in the sky) — scroll a touch slower for parallax, wrap to the far end
    if (state.clouds) {
        for (let i = 0; i < state.clouds.length; i++) {
            const c = state.clouds[i];
            c.position.z -= moveSpeed * 0.65;
            if (c.position.z < -25) c.position.z += 290;
        }
    }

    // Boss fight per-frame
    updateBoss(delta);
    updateBossHP();
    updateFlyHUD();
    updateSuperPowerTimers();
    updatePowersHUD();

    // Monkey flight power — altitude lerp + auto-end after 15s
    if (state.isFlying && state.time >= state.flyEndTime) {
        state.isFlying = false;
        showCheatNotification('🛬 Lento päättyi!');
    }
    if (typeof lizardGroup !== 'undefined') {
        const targetY = state.isFlying ? FLIGHT_ALTITUDE : 0;
        lizardGroup.position.y += (targetY - lizardGroup.position.y) * 0.07;
        // Gentle bobbing while flying (overrides walk roll only while in flight)
        if (state.isFlying) {
            lizardGroup.position.y += Math.sin(state.time * 3) * 0.4;
            lizardGroup.rotation.z = Math.sin(state.time * 1.5) * 0.12;
        }
        // When grounded, animateLizard owns rotation.z (walk roll) — do not reset
    }
    updateAirplane();

    // During flight the camera rises only a little and pulls back, while the airplane shoots up
    // high — so you clearly see it climb far above the trees into the clouds, still kept in frame.
    {
        const camTargetY  = state.isFlying ? 13 : 8;        // camera barely rises -> big visible climb
        const camTargetZ  = state.isFlying ? -22 : -12;     // pull back so the high plane stays framed
        const lookTargetY = state.isFlying ? 18 : 2;        // tilt up toward the plane
        camera.position.y += (camTargetY - camera.position.y) * 0.07;
        camera.position.z += (camTargetZ - camera.position.z) * 0.07;
        camera.userData.lookY = (camera.userData.lookY ?? 2) + (lookTargetY - (camera.userData.lookY ?? 2)) * 0.07;
        camera.lookAt(0, camera.userData.lookY, 10);
    }

    // Spawn new objects
    spawnObjects();

    // Update invincibility
    updateInvincibility();

    // Check collisions - pass moveSpeed to prevent tunneling
    checkCollisions(moveSpeed);

    // Update HUD
    if (Math.floor(state.time * 10) % 5 === 0) {
        updateHUD();
    }

    renderer.render(scene, camera);
}

// ============ AUTHENTICATION SYSTEM ============
// Simple hash function (always uses same method for consistency)
function hashPassword(password) {
    // Simple deterministic hash that works everywhere
    let hash = 0;
    const salt = 'lisko_racing_2024';
    const salted = salt + password + salt;
    for (let i = 0; i < salted.length; i++) {
        const char = salted.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    // Create longer hash
    let result = Math.abs(hash).toString(16);
    for (let j = 1; j <= 4; j++) {
        let h2 = hash * j;
        for (let i = 0; i < salted.length; i++) {
            const char = salted.charCodeAt(i);
            h2 = ((h2 << 5) - h2) + char * j;
            h2 = h2 & h2;
        }
        result += Math.abs(h2).toString(16);
    }
    return result.padStart(32, '0');
}

async function handleRegister() {
    const usernameInput = document.getElementById('auth-username');
    const passwordInput = document.getElementById('auth-password');
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        showCheatNotification(t('loginError'));
        return;
    }

    if (username.length < 3) {
        showCheatNotification('Min 3 chars!');
        return;
    }

    // Check if user exists
    const userId = getPlayerId(username);
    try {
        showCheatNotification(t('processing'));
        const check = await fetch(`${FIREBASE_DB_URL}/users/${userId}.json`);
        const existing = await check.json();

        if (existing) {
            showCheatNotification(t('registerError'));
            return;
        }

        const hashedPassword = hashPassword(password);

        // Create user account
        await fetch(`${FIREBASE_DB_URL}/users/${userId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: hashedPassword,
                created: new Date().toISOString()
            })
        });

        // NEW: Upload current local shop data to cloud for new account
        // Get any existing local data (from anonymous play)
        let localShop = { totalFlies: 0, ownedSkins: ['default'], equippedSkin: 'default' };
        try {
            const globalSaved = localStorage.getItem(SHOP_DATA_KEY);
            if (globalSaved) {
                const parsed = JSON.parse(globalSaved);
                localShop = { ...localShop, ...parsed };
            }
        } catch (e) { }

        // Upload to cloud
        await fetch(`${FIREBASE_DB_URL}/players/${userId}/shop.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(localShop)
        });

        // Set current player and shop data
        currentPlayerName = username;
        shopData = localShop;
        localStorage.setItem(AUTH_KEY, JSON.stringify({ username: currentPlayerName, loginTime: Date.now() }));

        // Save to user-specific localStorage
        const userKey = `${SHOP_DATA_KEY}_${userId}`;
        localStorage.setItem(userKey, JSON.stringify(shopData));

        updateAuthUI();
        renderShopUI();
        updateCoinsDisplay();
        loadFriends();
        loadChallenges();
        registerPlayer(currentPlayerName);

        trackEvent('register', { method: 'password' });
        showCheatNotification(`✅ Tili luotu! ${shopData.totalFlies} kärpästä tallennettu!`);
    } catch (e) {
        console.error(e);
        showCheatNotification('Error!');
    }
}

async function handleLogin() {
    const usernameInput = document.getElementById('auth-username');
    const passwordInput = document.getElementById('auth-password');
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        showCheatNotification(t('loginError'));
        return;
    }

    showCheatNotification(t('processing'));

    const userId = getPlayerId(username);
    try {
        const response = await fetch(`${FIREBASE_DB_URL}/users/${userId}.json`);
        const userData = await response.json();

        if (!userData) {
            showCheatNotification(t('loginError'));
            return;
        }

        const hashedPassword = hashPassword(password);

        if (userData.password === hashedPassword) {
            // Success - set user
            currentPlayerName = userData.username;
            localStorage.setItem(AUTH_KEY, JSON.stringify({ username: currentPlayerName, loginTime: Date.now() }));

            // Load shop data from cloud (overwriting local)
            const playerId = getPlayerId(currentPlayerName);
            try {
                const shopResponse = await fetch(`${FIREBASE_DB_URL}/players/${playerId}/shop.json`);
                const cloudShop = await shopResponse.json();

                if (cloudShop && cloudShop.totalFlies !== undefined) {
                    // Use cloud data — restore ALL persisted fields
                    shopData.totalFlies        = cloudShop.totalFlies;
                    shopData.ownedSkins        = cloudShop.ownedSkins        || ['default'];
                    shopData.equippedSkin      = cloudShop.equippedSkin      || 'default';
                    shopData.bossModeUnlocked  = cloudShop.bossModeUnlocked  || false;
                    shopData.lukitarUnlocked   = cloudShop.lukitarUnlocked   || false;
                    shopData.jattiLiskoUnlocked = cloudShop.jattiLiskoUnlocked || false;
                    shopData.ownedMusic        = cloudShop.ownedMusic        || ['klassinen'];
                    shopData.equippedMusic     = cloudShop.equippedMusic     || 'klassinen';
                    shopData.superPowers       = cloudShop.superPowers       || { shield: 0, magnet: 0, slowmo: 0, doubleScore: 0, turbo: 0, lure: 0 };
                }
                // Update local cache
                const userKey = `${SHOP_DATA_KEY}_${playerId}`;
                localStorage.setItem(userKey, JSON.stringify(shopData));
            } catch (e) {
                console.log('Could not load cloud shop data:', e);
            }

            updateAuthUI();
            loadFriends();
            loadChallenges();
            renderShopUI();
            updateCoinsDisplay();
            showCheatNotification(`${t('loggedInAs')} ${currentPlayerName}`);

            registerPlayer(currentPlayerName);
            trackEvent('login', { method: 'password' });
        } else {
            showCheatNotification(t('loginError'));
            trackEvent('login_failed', { method: 'password', usernameTried: username });
        }
    } catch (e) {
        logLoginError('password-network', e, { usernameTried: username });
    }
}

// ============ GOOGLE SIGN-IN ============
// Decode the payload (middle part) of a Google ID-token JWT.
function decodeJwtPayload(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const json = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}

// True when running inside the native Android (Capacitor) wrapper.
function isNativeApp() {
    return !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
}

// Build the "Sign in with Google" UI. In the native Android app this is a plain
// button wired to the native Google plugin; in a browser/PWA it is the official
// Google Identity Services button.
function setupGoogleAuthUI() {
    const btnEl = document.getElementById('google-signin-btn');
    const orEl = document.getElementById('auth-or');

    if (isNativeApp()) {
        if (btnEl && !btnEl.dataset.ready) {
            btnEl.dataset.ready = '1';
            const b = document.createElement('button');
            b.type = 'button';
            b.id = 'google-native-btn';
            b.textContent = t('signInWithGoogle');
            b.onclick = signInWithGoogleNative;
            btnEl.appendChild(b);
        }
        return;
    }

    // Browser / PWA: official Google Identity Services button.
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) return; // GIS not loaded yet
    if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.indexOf('YOUR_CLIENT_ID') === 0) {
        console.warn('Google Sign-In: GOOGLE_CLIENT_ID is not configured yet.');
        if (orEl) orEl.classList.add('hidden');
        if (btnEl) btnEl.classList.add('hidden');
        return;
    }
    try {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleCredential,
            auto_select: false
        });
        if (btnEl) {
            google.accounts.id.renderButton(btnEl, {
                theme: 'filled_blue', size: 'large', type: 'standard',
                text: 'signin_with', shape: 'pill', logo_alignment: 'left'
            });
        }
    } catch (e) {
        logLoginError('browser-gis-init', e);
    }
}
window.onGoogleLibraryLoad = setupGoogleAuthUI; // GIS calls this automatically once loaded (browser only)

// Native Android: trigger the Capacitor Google Auth plugin.
let googleAuthNativeReady = false;
async function signInWithGoogleNative() {
    const ga = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.GoogleAuth;
    if (!ga) {
        logLoginError('native-plugin-missing', new Error('Capacitor GoogleAuth plugin not found'));
        return;
    }
    if (!googleAuthNativeReady) {
        try {
            // Build the GoogleSignInClient from capacitor.config.json before the first signIn.
            await ga.initialize();
            googleAuthNativeReady = true;
        } catch (e) {
            logLoginError('native-init', e);
            return;
        }
    }
    let user;
    try {
        user = await ga.signIn();
    } catch (e) {
        // Yleisimmät koodit täällä: 10 = DEVELOPER_ERROR (SHA-1 mismatch
        // Google Cloud Consolen Android-clientin kanssa), 12501 = käyttäjä
        // peruutti, 7 = NETWORK_ERROR.
        logLoginError('native-signin', e);
        return;
    }
    if (!user || !user.id) {
        logLoginError('native-no-user', new Error('signIn returned no user.id'), { user: user || null });
        return;
    }
    try {
        await loginWithGoogleIdentity({
            sub: String(user.id),
            email: user.email || '',
            name: user.name || user.displayName || user.givenName || ''
        });
    } catch (e) {
        logLoginError('native-identity-flow', e);
    }
}

// Ask a new Google user for a unique in-game nickname. Returns null if cancelled.
async function promptForNickname(suggested) {
    let suggestion = (suggested || '').replace(/[^a-zA-Z0-9äöåÄÖÅ_]/g, '').slice(0, 15);
    if (suggestion.length < 3) suggestion = '';
    for (let i = 0; i < 5; i++) {
        const input = window.prompt(t('chooseNickname'), suggestion);
        if (input === null) return null; // cancelled
        const name = input.trim();
        if (name.length < 3 || name.length > 15) {
            alert(t('nicknameLength'));
            continue;
        }
        const userId = getPlayerId(name);
        try {
            const res = await fetch(`${FIREBASE_DB_URL}/users/${userId}.json`);
            const existing = await res.json();
            if (existing) {
                alert(t('registerError'));
                suggestion = '';
                continue;
            }
        } catch (e) {
            // Network problem: allow the name through, Firebase PUT below will still work.
        }
        return name;
    }
    return null;
}

// GIS callback (browser): decode the ID token, then run the shared login flow.
async function handleGoogleCredential(response) {
    const payload = decodeJwtPayload(response && response.credential);
    if (!payload || !payload.sub) {
        logLoginError('browser-bad-credential', new Error('GIS callback gave invalid credential'), {
            hasResponse: !!response,
            hasCredential: !!(response && response.credential)
        });
        return;
    }
    try {
        await loginWithGoogleIdentity({ sub: String(payload.sub), email: payload.email || '', name: payload.name || '' });
    } catch (e) {
        logLoginError('browser-identity-flow', e);
    }
}

// Shared login flow once we have a Google identity (web ID-token or native plugin).
async function loginWithGoogleIdentity({ sub, email, name }) {
    if (!sub) {
        logLoginError('identity-missing-sub', new Error('loginWithGoogleIdentity called without sub'));
        return;
    }
    showCheatNotification(t('processing'));
    const googleName = name || (email ? email.split('@')[0] : 'Lisko');

    try {
        // Have we seen this Google account before?
        const mapRes = await fetch(`${FIREBASE_DB_URL}/googleUsers/${sub}.json`);
        const mapping = await mapRes.json();
        let nickname;

        if (mapping && mapping.nickname) {
            nickname = mapping.nickname;
        } else {
            // First time with this Google account — pick an in-game nickname.
            nickname = await promptForNickname(googleName);
            if (!nickname) {
                showCheatNotification(t('loginError'));
                return;
            }
            const userId = getPlayerId(nickname);

            await fetch(`${FIREBASE_DB_URL}/users/${userId}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: nickname,
                    googleSub: sub,
                    email: email,
                    created: new Date().toISOString()
                })
            });
            await fetch(`${FIREBASE_DB_URL}/googleUsers/${sub}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname: nickname, userId: userId, email: email })
            });

            // Carry over any local (anonymous) shop progress to the new account.
            let localShop = { totalFlies: 0, ownedSkins: ['default'], equippedSkin: 'default' };
            try {
                const globalSaved = localStorage.getItem(SHOP_DATA_KEY);
                if (globalSaved) localShop = { ...localShop, ...JSON.parse(globalSaved) };
            } catch (e) { }
            await fetch(`${FIREBASE_DB_URL}/players/${userId}/shop.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(localShop)
            });
        }

        // Logged in.
        currentPlayerName = nickname;
        localStorage.setItem(AUTH_KEY, JSON.stringify({ username: nickname, googleSub: sub, loginTime: Date.now() }));

        // Pull the cloud shop data for this account.
        const playerId = getPlayerId(nickname);
        try {
            const shopResponse = await fetch(`${FIREBASE_DB_URL}/players/${playerId}/shop.json`);
            const cloudShop = await shopResponse.json();
            if (cloudShop && cloudShop.totalFlies !== undefined) {
                shopData.totalFlies        = cloudShop.totalFlies;
                shopData.ownedSkins        = cloudShop.ownedSkins        || ['default'];
                shopData.equippedSkin      = cloudShop.equippedSkin      || 'default';
                shopData.bossModeUnlocked  = cloudShop.bossModeUnlocked  || false;
                shopData.lukitarUnlocked   = cloudShop.lukitarUnlocked   || false;
                shopData.jattiLiskoUnlocked = cloudShop.jattiLiskoUnlocked || false;
                shopData.ownedMusic        = cloudShop.ownedMusic        || ['klassinen'];
                shopData.equippedMusic     = cloudShop.equippedMusic     || 'klassinen';
                shopData.superPowers       = cloudShop.superPowers       || { shield: 0, magnet: 0, slowmo: 0, doubleScore: 0, turbo: 0, lure: 0 };
            }
            localStorage.setItem(`${SHOP_DATA_KEY}_${playerId}`, JSON.stringify(shopData));
        } catch (e) {
            console.log('Could not load cloud shop data:', e);
        }

        updateAuthUI();
        loadFriends();
        loadChallenges();
        renderShopUI();
        updateCoinsDisplay();
        registerPlayer(currentPlayerName);
        trackEvent('login', { method: 'google', firstTime: !(mapping && mapping.nickname) });
        showCheatNotification(`${t('loggedInAs')} ${currentPlayerName}`);
    } catch (e) {
        logLoginError('identity-flow-network', e);
    }
}

function logoutUser() {
    trackEvent('logout', {});
    currentPlayerName = '';
    localStorage.removeItem(AUTH_KEY);
    if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
        try { google.accounts.id.disableAutoSelect(); } catch (e) { }
    }
    if (isNativeApp() && window.Capacitor.Plugins && window.Capacitor.Plugins.GoogleAuth) {
        try { window.Capacitor.Plugins.GoogleAuth.signOut(); } catch (e) { }
    }
    shopData = { totalFlies: 0, ownedSkins: ['default'], equippedSkin: 'default' }; // Reset shop
    updateAuthUI();
    document.getElementById('auth-password').value = '';
}

// Rename the logged-in player (works for both Google and password accounts).
// Moves the cloud account record + shop data to the new name, and re-points the
// Google sub -> nickname mapping so a future Google login picks up the new name.
async function changeNickname() {
    if (!currentPlayerName) return;
    const oldName = currentPlayerName;
    const newName = await promptForNickname(oldName);
    if (!newName) return; // cancelled
    if (getPlayerId(newName) === getPlayerId(oldName)) {
        showCheatNotification(t('nameUnchanged'));
        return;
    }
    showCheatNotification(t('processing'));
    const oldId = getPlayerId(oldName);
    const newId = getPlayerId(newName);
    try {
        // Copy the user record under the new id (keeps password hash / googleSub etc.).
        let oldUser = {};
        try {
            const r = await fetch(`${FIREBASE_DB_URL}/users/${oldId}.json`);
            oldUser = (await r.json()) || {};
        } catch (e) { }
        await fetch(`${FIREBASE_DB_URL}/users/${newId}.json`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...oldUser, username: newName, renamedFrom: oldName, renamedAt: new Date().toISOString() })
        });
        // Move the shop data.
        try {
            const r = await fetch(`${FIREBASE_DB_URL}/players/${oldId}/shop.json`);
            const oldShop = await r.json();
            if (oldShop) {
                await fetch(`${FIREBASE_DB_URL}/players/${newId}/shop.json`, {
                    method: 'PUT', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(oldShop)
                });
            }
        } catch (e) { }
        // Re-point the Google account -> nickname mapping, if this is a Google login.
        let session = {};
        try { session = JSON.parse(localStorage.getItem(AUTH_KEY) || '{}'); } catch (e) { }
        if (session.googleSub) {
            await fetch(`${FIREBASE_DB_URL}/googleUsers/${session.googleSub}.json`, {
                method: 'PUT', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname: newName, userId: newId, email: oldUser.email || session.email || '' })
            });
        }
        // Free the old name.
        try { await fetch(`${FIREBASE_DB_URL}/users/${oldId}.json`, { method: 'DELETE' }); } catch (e) { }
        try { await fetch(`${FIREBASE_DB_URL}/userData/${oldId}.json`, { method: 'DELETE' }); } catch (e) { }
        try { await fetch(`${FIREBASE_DB_URL}/players/${oldId}/shop.json`, { method: 'DELETE' }); } catch (e) { }

        // Update local state.
        currentPlayerName = newName;
        localStorage.setItem(AUTH_KEY, JSON.stringify({ ...session, username: newName, loginTime: Date.now() }));
        try {
            const cached = localStorage.getItem(`${SHOP_DATA_KEY}_${oldId}`);
            if (cached) {
                localStorage.setItem(`${SHOP_DATA_KEY}_${newId}`, cached);
                localStorage.removeItem(`${SHOP_DATA_KEY}_${oldId}`);
            }
        } catch (e) { }

        updateAuthUI();
        renderShopUI();
        updateCoinsDisplay();
        loadFriends();
        loadChallenges();
        registerPlayer(currentPlayerName);
        showCheatNotification(`${t('nameChanged')} ${newName}`);
    } catch (e) {
        console.error(e);
        showCheatNotification('Error!');
    }
}

function checkAuthSession() {
    const session = localStorage.getItem(AUTH_KEY);
    if (session) {
        try {
            const data = JSON.parse(session);
            // Simple session validity check
            if (data.username) {
                currentPlayerName = data.username;
                updateAuthUI();
                loadFriends();
                loadChallenges();
                registerPlayer(currentPlayerName); // Refresh last seen
            } else {
                updateAuthUI(); // Ensure UI is in correct state (logged out)
            }
        } catch (e) {
            localStorage.removeItem(AUTH_KEY);
            updateAuthUI();
        }
    } else {
        updateAuthUI();
    }
}

function updateAuthUI() {
    const loginForm = document.getElementById('login-form');
    const loggedInState = document.getElementById('logged-in-state');
    const currentUsername = document.getElementById('current-username');
    const startBtn = document.getElementById('start-btn');

    if (currentPlayerName) {
        if (loginForm) loginForm.classList.add('hidden');
        if (loggedInState) loggedInState.classList.remove('hidden');
        if (currentUsername) currentUsername.textContent = currentPlayerName;
        // Enable start button
        if (startBtn) {
            startBtn.style.opacity = '1';
            startBtn.style.cursor = 'pointer';
            startBtn.style.pointerEvents = 'auto'; // Re-enable clicks
            startBtn.textContent = t('startGame');
            startBtn.disabled = false;
        }
    } else {
        if (loginForm) loginForm.classList.remove('hidden');
        if (loggedInState) loggedInState.classList.add('hidden');
        // Disable or change start button text
        if (startBtn) {
            startBtn.style.opacity = '0.5';
            startBtn.style.cursor = 'not-allowed';
            startBtn.style.pointerEvents = 'none'; // Disable clicks effectively
            startBtn.textContent = t('authRequired');
            // startBtn.disabled = true; // Use style disabled to keep it visible but greyed
        }
    }
}

function updateAuthLanguage() {
    const authTitle = document.getElementById('auth-title');
    if (authTitle) authTitle.textContent = t('authTitle');

    const usernameInput = document.getElementById('auth-username');
    if (usernameInput) usernameInput.placeholder = t('username');

    const passwordInput = document.getElementById('auth-password');
    if (passwordInput) passwordInput.placeholder = t('password');

    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) loginBtn.textContent = t('login');

    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) registerBtn.textContent = t('register');

    const loggedInLabel = document.getElementById('logged-in-label');
    if (loggedInLabel) loggedInLabel.textContent = t('loggedInAs');

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.textContent = t('logout');

    const changeNameBtn = document.getElementById('change-name-btn');
    if (changeNameBtn) changeNameBtn.textContent = t('changeName');

    const authOr = document.getElementById('auth-or');
    if (authOr && !authOr.classList.contains('hidden')) authOr.textContent = t('orText');

    updateAuthUI(); // Refresh button text
}

// ============ GAME STATE MANAGEMENT ============
// ============ GAME STATE MANAGEMENT ============
function startGame() {
    if (!currentPlayerName) {
        showCheatNotification(t('authRequired'));
        return;
    }

    // Apply selected biome (rebuilds scenery + colors)
    applyBiome(state.currentBiome);

    // Reset monkey flight power
    state.isFlying = false;
    state.flyEndTime = 0;
    state.flyUsesLeft = 3;
    if (typeof lizardGroup !== 'undefined') lizardGroup.position.y = 0;

    // Reset super-power activations + use counts per game
    const sp = shopData.superPowers || {};
    Object.keys(SUPER_POWER_DEFS).forEach(id => {
        const lvl = sp[id] || 0;
        state[`${id}Active`] = false;
        state[`${id}EndTime`] = 0;
        state[`${id}UsesLeft`] = lvl > 0 ? SUPER_POWER_DEFS[id].levels[lvl - 1].uses : 0;
    });
    state.superPowerCooldownEnd = 0;

    // Reset boss-mode + super-cheat per-game
    state.superKarpanenUsed = false;
    state.bigSuperKarpanenUsed = false;
    if (state.bossEntity) { scene.remove(state.bossEntity); state.bossEntity = null; }
    (state.bossProjectiles || []).forEach(p => scene.remove(p));
    state.bossProjectiles = [];
    state.bossMode = pendingBossStart;
    state.bossType = pendingBossStart ? (pendingBossType || 'fly') : null;
    pendingBossStart = false;
    pendingBossType = null;
    if (state.bossMode) {
        // Lukitar fires 15 webs; Jätti-Lisko fires 25 tongue strikes; Jättikärpänen has 7 dives
        if (state.bossType === 'jattilisko')      state.bossMaxHealth = 25;
        else if (state.bossType === 'lukitar')    state.bossMaxHealth = 15;
        else                                      state.bossMaxHealth = 7;
        state.bossHealth = state.bossMaxHealth;
        state.difficulty = 'hard';
        spawnBoss();
    } else {
        state.bossHealth = 0;
    }

    state.score = 0;

    // Set speed based on difficulty
    const diff = DIFFICULTIES[state.difficulty || 'normal'];
    state.speed = diff.startSpeed;

    state.time = 0;
    state.isRunning = true;
    state.isGameOver = false;
    state.targetLane = 0;
    lastSpawnZ = 20;

    // Clear existing obstacles, flies, and power-ups
    state.obstacles.forEach(obs => scene.remove(obs));
    state.flies.forEach(fly => scene.remove(fly));
    state.powerups.forEach(p => scene.remove(p));
    state.obstacles = [];
    state.flies = [];
    state.powerups = [];

    // Reset invincibility
    state.isInvincible = false;
    state.invincibleEndTime = 0;
    state.invincibleWarningBeepsPlayed = 0;
    scaleMaterial.emissive.setHex(0x000000);
    scaleMaterial.emissiveIntensity = 0;
    const invHud = document.getElementById('invincible-hud');
    if (invHud) {
        invHud.style.display = 'none';
        invHud.classList.remove('warning');
    }

    // Apply equipped skin
    applySkin(shopData.equippedSkin);

    // Reset cheat uses
    cheatUsesLeft = 2;
    state.cheatMode = false;
    state.tongueFliesLeft = 0; // Reset tongue power
    state.isPaused = false; // Reset pause state
    state.destroyerMode = false; // Reset destroyer mode
    destroyerUsesLeft = 2; // Reset destroyer uses
    if (cheatTimer) {
        clearTimeout(cheatTimer);
        cheatTimer = null;
    }
    if (destroyerTimer) {
        clearTimeout(destroyerTimer);
        destroyerTimer = null;
    }

    // Reset lizard position
    lizardGroup.position.set(0, 0, 0);

    // Hide overlays
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('pause-screen').classList.add('hidden');

    // Show challenge target if playing a challenge
    showChallengeHUD();

    updateHUD();
    startMusic();

    // Increment global games counter
    incrementGamesCounter();

    trackEvent('game_started', {
        biome: state.currentBiome,
        difficulty: state.difficulty,
        bossMode: !!state.bossMode,
        bossType: state.bossType || null,
        isChallenge: !!multiplayerState.isMultiplayer,
        equippedSkin: shopData.equippedSkin
    });
}

// Show challenge opponent score during game
function showChallengeHUD() {
    // Remove existing challenge HUD
    const existing = document.getElementById('challenge-hud');
    if (existing) existing.remove();

    // Only show if we're in a challenge
    if (multiplayerState.isMultiplayer && multiplayerState.challengeScore > 0) {
        const challengeHUD = document.createElement('div');
        challengeHUD.id = 'challenge-hud';
        challengeHUD.style.cssText = `
            position: fixed;
            top: 80px;
            left: 20px;
            background: rgba(255, 100, 100, 0.8);
            backdrop-filter: blur(10px);
            padding: 12px 20px;
            border-radius: 12px;
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            z-index: 100;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        `;
        challengeHUD.innerHTML = `⚔️ ${t('opponentScore')} <strong>${multiplayerState.opponentName}</strong>: <span style="color:#ffd700;font-size:1.2rem;">${multiplayerState.challengeScore} 🪰</span>`;
        document.body.appendChild(challengeHUD);
    }
}

// Hide challenge HUD
function hideChallengeHUD() {
    const challengeHUD = document.getElementById('challenge-hud');
    if (challengeHUD) challengeHUD.remove();
}

function gameOver() {
    state.isRunning = false;
    state.isGameOver = true;

    // Snapshot game context BEFORE bossMode is cleared so analytics records the
    // type of game the player just finished.
    const _analyticsGameCtx = {
        biome: state.currentBiome,
        difficulty: state.difficulty,
        bossMode: !!state.bossMode,
        bossType: state.bossType || null,
        isChallenge: !!multiplayerState.isMultiplayer,
        durationSec: Math.round(state.time * 10) / 10,
        score: state.score
    };

    // Hide challenge HUD
    hideChallengeHUD();

    // Boss-mode outcome — runs before standard score-to-flies conversion
    let bossOutcome = null;
    if (state.bossMode) {
        bossOutcome = state.bossHealth <= 0 ? 'win' : 'lose';
        const finishedType = state.bossType;
        state.bossMode = false;
        state.bossType = null;
        if (state.bossEntity) { scene.remove(state.bossEntity); state.bossEntity = null; }
        (state.bossProjectiles || []).forEach(p => scene.remove(p));
        state.bossProjectiles = [];
        updateBossHP();
        if (finishedType === 'lukitar') {
            // Lukitar: win +1000 / lose -1000
            if (bossOutcome === 'win') {
                addFlies(1000);
                showCheatNotification('🕷️🏆 VOITIT LUKITARIN! +1000 kärpästä!');
            } else {
                const penalty = Math.min(1000, shopData.totalFlies);
                shopData.totalFlies = Math.max(0, shopData.totalFlies - 1000);
                saveShopData();
                updateCoinsDisplay();
                showCheatNotification(`🕸️💀 LUKITAR VOITTI! -${penalty} kärpästä!`);
            }
        } else if (finishedType === 'jattilisko') {
            // Jätti-Lisko: win +2000 / lose -2500
            if (bossOutcome === 'win') {
                addFlies(2000);
                showCheatNotification('🦎🏆 VOITIT JÄTTI-LISKON! +2000 kärpästä!');
            } else {
                const penalty = Math.min(2500, shopData.totalFlies);
                shopData.totalFlies = Math.max(0, shopData.totalFlies - 2500);
                saveShopData();
                updateCoinsDisplay();
                showCheatNotification(`👅💀 JÄTTI-LISKO VOITTI! -${penalty} kärpästä!`);
            }
        } else {
            // Jättikärpänen
            if (bossOutcome === 'win') {
                addFlies(300);
                showCheatNotification('🏆 VOITIT JÄTTIKÄRPÄSEN! +300 kärpästä!');
            } else {
                const penalty = Math.min(500, shopData.totalFlies);
                shopData.totalFlies = Math.max(0, shopData.totalFlies - 500);
                saveShopData();
                updateCoinsDisplay();
                showCheatNotification(`💀 HÄVISIT! -${penalty} kärpästä!`);
            }
        }
    }

    document.getElementById('final-score').textContent = state.score;

    // Update game over screen text with current language
    const gameOverScoreText = document.querySelector('#game-over-screen .overlay-content > p:first-of-type');
    if (gameOverScoreText) {
        gameOverScoreText.innerHTML = `${t('collected')} <span id="final-score">${state.score}</span> ${t('flies')}`;
    }

    // Handle multiplayer end
    if (multiplayerState.isMultiplayer) {
        endMultiplayerGame();
    }

    // Add collected flies to total (for shop)
    if (state.score > 0) {
        addFlies(state.score);
    }

    // Bonus flies for winning a challenge!
    if (multiplayerState.challengeScore > 0 && state.score > multiplayerState.challengeScore) {
        addFlies(25);
        showCheatNotification('🏆 +25 bonuskärpästä voitosta!');
    }
    // Penalty for losing a challenge
    else if (multiplayerState.challengeScore > 0 && state.score <= multiplayerState.challengeScore) {
        const penalty = Math.min(25, shopData.totalFlies); // Don't go below 0
        if (penalty > 0) {
            shopData.totalFlies -= penalty;
            saveShopData();
            showCheatNotification(`😢 -${penalty} kärpästä häviöstä!`);
        }
    }

    // Add score to leaderboard and get rank
    const playerName = currentPlayerName || t('unknown');
    const rank = addScore(playerName, state.score);

    // Show rank message
    const rankMessage = document.getElementById('rank-message');
    if (rankMessage) {
        if (multiplayerState.isMultiplayer) {
            // Multiplayer result will be shown by endMultiplayerGame
        } else if (rank === 1) {
            rankMessage.textContent = t('newRecord');
        } else if (rank <= 10) {
            rankMessage.textContent = `${t('great')} #${rank}`;
        } else {
            rankMessage.textContent = `${t('yourRank')} #${rank}`;
        }
    }

    // Render leaderboard on game over screen
    renderLeaderboard('game-over-leaderboard-list', playerName, state.score);

    // Add challenge friend button if we have friends
    const gameOverContent = document.querySelector('#game-over-screen .overlay-content');
    const existingChallengeSection = document.getElementById('challenge-section');
    if (existingChallengeSection) existingChallengeSection.remove();

    if (friendsList.length > 0 && state.score > 0) {
        const challengeSection = document.createElement('div');
        challengeSection.id = 'challenge-section';
        challengeSection.style.cssText = 'margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2);';
        challengeSection.innerHTML = `
            <p style="margin-bottom: 10px;">⚔️ Haasta kaveri tuloksellasi!</p>
            <select id="challenge-friend-select" style="padding: 8px; border-radius: 5px; margin-right: 10px;">
                ${friendsList.map(f => `<option value="${escapeHtml(f)}">${escapeHtml(f)}</option>`).join('')}
            </select>
            <button onclick="sendChallenge(document.getElementById('challenge-friend-select').value, ${state.score})" class="small-btn">Lähetä haaste!</button>
        `;
        gameOverContent.insertBefore(challengeSection, document.getElementById('restart-btn'));
    }

    document.getElementById('game-over-screen').classList.remove('hidden');
    stopMusic();
    playCrashSound();

    trackEvent('game_ended', Object.assign({}, _analyticsGameCtx, {
        bossOutcome,
        rank: typeof rank === 'number' ? rank : null
    }));
}

// ============ PAUSE SYSTEM ============
function pauseGame() {
    if (!state.isRunning || state.isGameOver || state.isPaused) return;

    state.isPaused = true;
    document.getElementById('pause-screen').classList.remove('hidden');
    document.getElementById('pause-score').textContent = `🪰 ${state.score} ${t('flies')}`;
    stopMusic();
}

function resumeGame() {
    if (!state.isPaused) return;

    state.isPaused = false;
    document.getElementById('pause-screen').classList.add('hidden');
    startMusic();
}

function quitGame() {
    state.isPaused = false;
    state.isRunning = false;
    state.isGameOver = true;

    // Save collected flies
    if (state.score > 0) {
        addFlies(state.score);
    }

    document.getElementById('pause-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    stopMusic();
}

// Go back to main menu from game over
function goToMenu() {
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    // Refresh shop UI
    renderShopUI();
}

// ============ EVENT LISTENERS ============
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('menu-btn').addEventListener('click', goToMenu);
document.getElementById('pause-btn').addEventListener('click', pauseGame);
document.getElementById('resume-btn').addEventListener('click', resumeGame);
document.getElementById('quit-btn').addEventListener('click', quitGame);

document.addEventListener('keydown', (e) => {
    if ((e.key === ' ' || e.key === 'Enter') && !state.isRunning) {
        // Don't start if typing in input
        if (document.activeElement.tagName === 'INPUT') return;

        if (!currentPlayerName) {
            showCheatNotification(t('authRequired'));
            return;
        }
        startGame();
    }
    // Escape to pause/resume
    if (e.key === 'Escape') {
        if (state.isPaused) {
            resumeGame();
        } else if (state.isRunning && !state.isGameOver) {
            pauseGame();
        }
    }
});

// Add Enter key support for login inputs
document.getElementById('auth-password')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLogin();
});
document.getElementById('auth-username')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('auth-password').focus();
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============ START ============
initLanguageSelector(); // Initialize language
checkAuthSession(); // Check login session
setupGoogleAuthUI(); // native: shows the Google button now; browser: waits for GIS via onGoogleLibraryLoad
checkAppDeprecation(); // Fire-and-forget: näyttää blokkaavan modalin jos versio on vanhentunut.
animate();

// Expose auth functions globally for HTML onclick handlers
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.logoutUser = logoutUser;
window.changeNickname = changeNickname;
window.syncToCloud = syncToCloud;
