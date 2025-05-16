function playSound(soundId) {
    let audioElement = document.getElementById(soundId);
    if (audioElement) {
        let audio = new Audio(audioElement.src);
        audio.play();
    }
}

// pemanggil
function sound() {
    playSound("sound");
}

function sound1() {
    playSound("sound1");
}

function sound2() {
    playSound("sound2");
}