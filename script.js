const connectBtn = document.getElementById('connect-btn');
const discordSound = document.getElementById('discord-sound');
const callScreen = document.getElementById('call-screen');
const videoCallUI = document.getElementById('video-call-ui');

connectBtn.addEventListener('click', () => {
  discordSound.play();
  callScreen.classList.add('hidden');
  videoCallUI.classList.remove('hidden');

  // Wait 3 seconds, then go to Chapter 1
  setTimeout(() => {
    window.location.href = "chapter1.html";
  }, 3000);
});
