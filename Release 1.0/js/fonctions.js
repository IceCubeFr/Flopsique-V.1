//------------------------------------------------------------------ Gestion de la musique

let audio = new Audio();

function lancer2() {
    var boutonjouerbarre = document.getElementById("boutonPlayBarre");
    var boutonstopbarre = document.getElementById("boutonPauseBarre");
    boutonjouerbarre.style.display = "none";
    boutonstopbarre.style.display = "block";
    audio.play();
}

function lancer(source) {
    var boutonjouer = document.getElementById("boutonPlay");
    var boutonstop = document.getElementById("boutonPause");
    var boutonjouerbarre = document.getElementById("boutonPlayBarre");
    var boutonstopbarre = document.getElementById("boutonPauseBarre");
    audio.src = source;
    barreProgression();
    boutonjouerbarre.style.display = "none";
    boutonstopbarre.style.display = "block";
    if (audio.src == "") {
        boutonstop.style.display = "none";
        boutonjouer.style.display = "block";
    }
    audio.play();
    categorie.selectedIndex = 0;
    categorie.value = select1.options[0].value;
}

function stop() {
    var boutonjouerbarre = document.getElementById("boutonPlayBarre");
    var boutonstopbarre = document.getElementById("boutonPauseBarre");
    boutonjouerbarre.style.display = "block";
    boutonstopbarre.style.display = "none";
    audio.pause();
}

function volume() {
    var volume = document.getElementById("volume");
    audio.volume = volume.value / 100;
}


//------------------------------------------------------------------ Changement affichage musiques

function wii() {
    var wii = document.getElementById("musiqueWii");
    var lol = document.getElementById("musiqueLol");
    var rap = document.getElementById("musiqueRap");
    wii.style.display = "block";
    wii.style.animation = "wipe 1s ease forwards";
    lol.style.display = "none";
    rap.style.display = "none";
}

function lol() {
    var wii = document.getElementById("musiqueWii");
    var lol = document.getElementById("musiqueLol");
    var rap = document.getElementById("musiqueRap");
    wii.style.display = "none";
    lol.style.display = "block";
    lol.style.animation = "wipe 1s ease forwards";
    rap.style.display = "none";
}

function rap() {
    var wii = document.getElementById("musiqueWii");
    var lol = document.getElementById("musiqueLol");
    var rap = document.getElementById("musiqueRap");
    wii.style.display = "none";
    lol.style.display = "none";
    rap.style.display = "block";
    rap.style.animation = "wipe 1s ease forwards";
}

//------------------------------------------------------------------ ProgressBar Musique

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function barreProgression() {
    const progressBar = document.querySelector('.progress');
    const currentTimeElement = document.querySelector('.current-time');
    const durationElement = document.querySelector('.duration');

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if (duration > 0) {
            const progress = (currentTime / duration) * 100;
            progressBar.style.width = progress + '%';
        }
        if (currentTime == duration) {
            lancer(audio.src)
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });
}