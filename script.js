document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".circle-button");
  const nextButton = document.querySelector(".circle-button.right");
  const videoCardsContainer = document.querySelector(".video-cards");
  const videoCards = document.querySelectorAll(".video-card");

  let currentIndex = 0;
  const visibleCards = 3; // Кількість видимих карток

  function updateCards() {
    const cardWidth = videoCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(videoCardsContainer).gap);
    const containerWidth = videoCardsContainer.offsetWidth;
    const totalWidth = (cardWidth + gap) * videoCards.length;
    const maxIndex = Math.max(
      0,
      Math.ceil((totalWidth - containerWidth) / (cardWidth + gap))
    );

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const offset = -currentIndex * (cardWidth + gap);
    videoCardsContainer.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCards();
    }
  });

  nextButton.addEventListener("click", function () {
    const cardWidth = videoCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(videoCardsContainer).gap);
    const maxIndex = Math.max(
      0,
      Math.ceil(
        (videoCardsContainer.scrollWidth - videoCardsContainer.offsetWidth) /
          (cardWidth + gap)
      )
    );

    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCards();
    }
  });

  // Initial setup
  updateCards();
});
