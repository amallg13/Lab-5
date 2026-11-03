const audio = document.getElementById("natureSound");
const video = document.getElementById("waterfall");

const soundButton = document.getElementById("soundButton");
const modeButton = document.getElementById("modeButton");
const motionButton = document.getElementById("motionButton");

const volume = document.getElementById("volume");
const status = document.getElementById("status");

// Set starting volume
audio.volume = 0.5;

// 1. Play and pause sound
soundButton.addEventListener("click", async function () {
    if (audio.paused) {
        try {
            await audio.play();
            soundButton.textContent = "Pause Sound";
            status.textContent = "Listen to the sounds of nature";
        } catch (error) {
            status.textContent = "Sound could not be played. Try again.";
        }
    } else {
        audio.pause();
        soundButton.textContent = "Play Sound";
        status.textContent = "Sound is paused";
    }
});

// 2. Volume control
volume.addEventListener("input", function () {
    audio.volume = volume.value;
});

// 3. Switch between day and night mode
modeButton.addEventListener("click", function () {
    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {
        modeButton.textContent = "Day Mode";
    } else {
        modeButton.textContent = "Night Mode";
    }
});

// 4. Zoom in on the waterfall
const focusButton = document.getElementById("focusButton");

focusButton.addEventListener("click", function () {
    document.body.classList.toggle("focus");

    if (document.body.classList.contains("focus")) {
        focusButton.textContent = "Return to View";
    } else {
        focusButton.textContent = "Focus on Waterfall";
    }
});