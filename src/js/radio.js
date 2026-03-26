const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");
const playIcon = document.querySelector("#playBtn svg path");

const volumeControl = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");

// SVG paths
const playPath = "M8 5v14l11-7z";
const pausePath = "M6 5h4v14H6zm8 0h4v14h-4z";

// ---------------- PLAY / PAUSE ----------------
playBtn.addEventListener("click", () => {
  if (radio.paused) {
    radio.play().catch(err => console.log(err));
    playIcon.setAttribute("d", pausePath);
  } else {
    radio.pause();
    playIcon.setAttribute("d", playPath);
  }
});

// ---------------- VOLUME ----------------
radio.volume = volumeControl.value;

volumeControl.addEventListener("input", () => {
  const vol = volumeControl.value;
  radio.volume = vol;
  volumeValue.textContent = Math.round(vol * 100) + "%";
});