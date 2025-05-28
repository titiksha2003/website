const text = `You were so close...

And in that second,
I forgot how to think.

I kissed you.

My heart stopped for a moment...
When my lips touched your cheeks I was so soo shy...

And then... when u gave me the hug with a forehead kiss...aahhhh in those moments...

Everything else disappeared.`;

let i = 0;
function typeWriter() {
  const target = document.getElementById("chapter6-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function goToNext() {
  window.location.href = "chapter7.html"; // placeholder for proposal
}
