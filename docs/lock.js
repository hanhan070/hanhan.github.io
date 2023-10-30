// Rest of your code
const scrollButton = document.getElementById("scrollButton");
const backgroundMusic = document.getElementById("backgroundMusic");

scrollButton.addEventListener("click", () => {
  const targetElement = document.getElementById("yoga");
  if (targetElement) {
    document.body.style.overflow = "auto";
    playBackgroundMusic();
    scrollToElement(targetElement, 1000); // 2000 milliseconds (2 seconds) duration
  }
});

function playBackgroundMusic() {
  backgroundMusic.currentTime = 80;
  backgroundMusic.volume = 0;
  backgroundMusic.play();

  var volume = 0;
  var fadeInterval = setInterval(function () {
    if (volume < 1) {
      volume += 0.1; // Menambah volume secara bertahap
      backgroundMusic.volume = volume;
    } else {
      clearInterval(fadeInterval); // Hentikan interval saat mencapai volume maksimal
    }
  }, 200); // Interval setiap 200ms (perubahan volume)
}

function scrollToElement(element, duration) {
  const targetPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    window.scrollTo(0, startPosition + targetPosition * progress);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}
