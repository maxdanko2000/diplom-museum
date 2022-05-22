const videoPlayer = document.querySelector(".journey-player");
const videoEl = document.querySelector(".journey-player__video");
const mainPlayBtn = document.querySelector(".journey-player__main-play-btn");
const playBtn = document.querySelector(".journey-player__play-btn");
const pauseIcon = document.querySelector(".journey-player__pause-icon");
const playIcon = document.querySelector(".journey-player__play-icon");

const volumeToggler = document.querySelector(".journey-player__volume-btn");
const volumeIcon = document.querySelector(".journey-player__volume-icon");
const volumeMuteIcon = document.querySelector(".journey-player__volume-mute");
const volumeBar = document.querySelector(".journey-player__volume-bar");

const playBar = document.querySelector(".journey-player__play-bar");
const fullScreenBtn = document.querySelector(".journey-player__fullscreen-btn");

const fullScreenIcon = document.querySelector(".journey-player__fullscreen-icon");
const unFullScreenIcon = document.querySelector(".journey-player__unfullscreen-icon");

function initVideo() {
  videoEl.volume = volumeBar.value;
}

function toggleVideo() {
  if (videoEl.paused) {
    videoEl.play();
    mainPlayBtn.style.opacity = "0";
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    videoEl.pause();
    mainPlayBtn.style.opacity = "1";
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}

function toggleVolume() {
  if (videoEl.volume === 0) {
    videoEl.volume = volumeBar.value;
    volumeIcon.style.display = "block";
    volumeMuteIcon.style.display = "none";
  } else {
    videoEl.volume = 0;
    volumeIcon.style.display = "none";
    volumeMuteIcon.style.display = "block";
  }
}

function moveVolumeThumb() {
  videoEl.volume = volumeBar.value;
  volumeIcon.style.display = "block";
  volumeMuteIcon.style.display = "none";
}

function videoChangeTime(e) {
  let mouseX = Math.floor(e.pageX - playBar.offsetLeft);
  let progress = mouseX / (playBar.offsetWidth / 100);
  videoEl.currentTime = videoEl.duration * (progress / 100);
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

fullScreenBtn.addEventListener("click", toggleFullScreen);

volumeBar.addEventListener("input", moveVolumeThumb);
volumeToggler.addEventListener("click", toggleVolume);
playBar.addEventListener("click", videoChangeTime);
mainPlayBtn.addEventListener("click", toggleVideo);
playBtn.addEventListener("click", toggleVideo);
videoEl.addEventListener("canplaythrough", initVideo);
