// dark_ai.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('⚡️ Quantum Strike Activated!');
    setTimeout(() => {
        document.body.innerHTML += '<div class="dark-overlay">META-STRIKE INITIALIZED</div>';
        playDarkSound();
    }, 5000);
});

function playDarkSound() {
    let audio = new Audio('dark_sound.mp3');
    audio.play();
}
