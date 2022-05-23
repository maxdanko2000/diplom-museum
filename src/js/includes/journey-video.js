export class JourneyVideo {
  constructor() {
    this.videoPlayer = document.querySelector(".journey-player");
    this.videoEl = document.querySelector(".journey-player__video");

    this.mainPlayBtn = document.querySelector(".journey-player__main-play-btn");
    this.playBtn = document.querySelector(".journey-player__play-btn");
    this.pauseIcon = document.querySelector(".journey-player__pause-icon");
    this.playIcon = document.querySelector(".journey-player__play-icon");
    this.playBar = document.querySelector(".journey-player__play-bar");

    this.volumeToggler = document.querySelector(".journey-player__volume-btn");
    this.volumeIcon = document.querySelector(".journey-player__volume-icon");
    this.volumeMuteIcon = document.querySelector(".journey-player__volume-mute");
    this.volumeBar = document.querySelector(".journey-player__volume-bar");

    this.fullScreenBtn = document.querySelector(".journey-player__fullscreen-btn");
    this.fullScreenIcon = document.querySelector(".journey-player__fullscreen-icon");
    this.unFullScreenIcon = document.querySelector(".journey-player__unfullscreen-icon");
  }

  initVideo() {
    this.videoEl?.addEventListener("canplaythrough", () => {
      this.videoEl.volume = this.volumeBar.value;
    });
  }

  startStopVideo() {
    this.mainPlayBtn?.addEventListener(
      "click",
      () => {
        this.toggleVideo();
      },
      false
    );
    this.playBtn?.addEventListener(
      "click",
      () => {
        this.toggleVideo();
      },
      false
    );
  }

  toggleVideo() {
    let isPlaying =
      this.videoEl.currentTime > 0 &&
      !this.videoEl.paused &&
      !this.videoEl.ended &&
      this.videoEl.readyState > this.videoEl.HAVE_CURRENT_DATA;
    if (!isPlaying) {
      this.videoEl.play();
      this.mainPlayBtn.style.opacity = "0";
      this.playIcon.style.display = "none";
      this.pauseIcon.style.display = "block";
    } else {
      this.videoEl.pause();
      this.mainPlayBtn.style.opacity = "1";
      this.playIcon.style.display = "block";
      this.pauseIcon.style.display = "none";
    }
  }

  toggleVolume() {
    this.volumeToggler?.addEventListener("click", () => {
      if (this.videoEl.volume === 0) {
        this.videoEl.volume = this.volumeBar.value;
        this.volumeIcon.style.display = "block";
        this.volumeMuteIcon.style.display = "none";
      } else {
        this.videoEl.volume = 0;
        this.volumeIcon.style.display = "none";
        this.volumeMuteIcon.style.display = "block";
      }
    });
  }

  moveVolumeThumb() {
    this.volumeBar?.addEventListener("click", () => {
      this.videoEl.volume = this.volumeBar.value;
      if (this.videoEl.volume === 0) {
        this.volumeIcon.style.display = "none";
        this.volumeMuteIcon.style.display = "block";
      } else {
        this.volumeIcon.style.display = "block";
        this.volumeMuteIcon.style.display = "none";
      }
    });
  }

  videoChangeTime() {
    this.playBar?.addEventListener("input", () => {
      const current = (this.playBar.value * this.videoEl.duration) / 100;
      this.videoEl.currentTime = current;
    });
  }

  toggleFullScreen() {
    this.fullScreenBtn?.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        this.videoPlayer.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  progressLoop() {
    setInterval(() => {
      if (this.videoEl) {
        this.playBar.value = Math.round((this.videoEl.currentTime / this?.videoEl.duration) * 100);
      }
    });
  }
}
