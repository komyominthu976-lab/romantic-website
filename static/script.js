function openLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "flex";
    letter.setAttribute("aria-hidden", "false");
}

function closeLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "none";
    letter.setAttribute("aria-hidden", "true");
}

const letter = document.getElementById("letter");
letter.setAttribute("aria-hidden", "true");
letter.addEventListener("click", function(event) {
    if (event.target === this) closeLetter();
});

const heartContainer = document.getElementById("heart-container");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function createLoveParticle() {
    if (prefersReducedMotion.matches) return;

    const particle = document.createElement("span");
    const type = Math.random();

    if (type < 0.72) {
        particle.className = "heart-particle";
        particle.textContent = "♥";
    } else if (type < 0.90) {
        particle.className = "sparkle-particle";
        particle.textContent = "✦";
    } else {
        particle.className = "petal-particle";
        particle.textContent = "❀";
    }

    const duration = Math.random() * 6 + 8;
    const size = Math.random() * 13 + 10;
    const sway = Math.round(Math.random() * 180 - 90);

    particle.style.left = Math.random() * 100 + "%";
    particle.style.fontSize = size + "px";
    particle.style.setProperty("--sway", sway + "px");
    particle.style.animationDuration = duration + "s";
    particle.style.animationDelay = Math.random() * 1.5 + "s";

    heartContainer.appendChild(particle);
    setTimeout(() => particle.remove(), (duration + 2) * 1000);
}

for (let i = 0; i < 9; i++) setTimeout(createLoveParticle, i * 180);
setInterval(createLoveParticle, prefersReducedMotion.matches ? 10000 : 520);