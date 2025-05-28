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
    text.innerHTML = "📜 Reading your letter... my heart fluttered with a thousand emotions 🌸.I felt nervous, yet so incredibly happy — like a thousand little stars bursting into light within me ✨.I felt so loved, so valued, so seen...I was crying inside out of pure joy, my soul dancing in silent tears of happiness 🌧️💖.In that moment, I became so shy —I couldn’t bring myself to give you a kiss or a hug in front of so many people,but oh, how my heart longed to do just that 💌🤍.I LOVE YOU TOO...Just the way the Earth loves the Moon 🌍🌕,Just like the fishes love the water 🐠💦,Just as Jitta, the minute hand, endlessly loves the hour hand, circling it with every passing moment 🕰️❤️ —I love you too, Ayush... more than words could ever truly say. 💞";
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
