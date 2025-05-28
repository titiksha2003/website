const text = `These aren't just emojis...

They’re memories. Moments.

That time when i named u pineapple ehh 🍍 
All the sweet things you said when I felt low 💖  

And maybe, just maybe... can we have both dogs and cats in future? 🐾`;

let i = 0;
function typeWriter() {
  const target = document.getElementById("chapter5-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function showMemory(type) {
  const popup = document.getElementById("memory-popup");
  const text = document.getElementById("memory-text");

  if (type === "pineapple") {
    text.innerHTML = "🍍 Good Morning pineapple, looking very good very nice.";
  } else if (type === "scroll") {
    text.innerHTML = "📜 You watched Haikyuu because I asked... and somehow it became our thing.";
  } else if (type === "heart") {
    text.innerHTML = "💖 The way you made me feel special... even when I didn’t believe in myself.";
  } else if (type === "nakama") {
    text.innerHTML = "🐾 Yes... I’ll be your nakame forever. 🥹";
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("memory-popup").classList.add("hidden");
}

function goToNext() {
  window.location.href = "chapter6.html"; // placeholder
}
