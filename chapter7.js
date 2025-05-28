function heartExplosion() {
  const heartContainer = document.getElementById("heart-container");

  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart-burst";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heartContainer.appendChild(heart);

    // Auto remove after animation
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
