const text = `I know this might seem a little sudden and maybe even a bit cringy to hear out of nowhere, but there’s something I’ve been holding close to my heart for a while now, something that’s grown stronger with every passing day we’ve spent together. I’ve thought about the future countless times, and no matter how far I let my imagination wander, it always brings me back to you—your smile, your laughter, your quiet strength. So today, I just want to ask something deeply meaningful, something that comes from the most sincere part of me, hoping you’ll understand the depth of what I truly mean.`;

let i = 0;
function typeWriter() {
  const target = document.getElementById("chapter2-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function triggerPrank() {
  document.getElementById("prank-popup").classList.remove("hidden");
}

function goToNext() {
  window.location.href = "chapter3.html"; // placeholder for next chapter
}
