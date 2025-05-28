const text = `It was supposed to be just fun...
just friendly chats, late-night jokes, tiny moments.

But it turned into something deeper...

The way you remembered small things about me...
The way you encouraged me when I doubted myself...

That’s when I knew —
you weren’t just someone I liked...

You were someone I felt safe with.`;

let i = 0;
function typeWriter() {
  const target = document.getElementById("chapter3-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function goToNext() {
  window.location.href = "chapter4.html"; // Next chapter placeholder
}
