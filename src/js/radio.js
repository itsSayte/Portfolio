const playIcon = `
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path fill="white" d="M187.2 100.9 ..."/>
</svg>`;

const pauseIcon = `
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
  <path fill="white" d="M48 64 ..."/>
</svg>`;

const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");

playBtn.innerHTML = playIcon;

playBtn.addEventListener("click", () => {
  if (radio.paused) {
    radio.play();
    playBtn.innerHTML = pauseIcon;
  } else {
    radio.pause();
    playBtn.innerHTML = playIcon;
  }
});
