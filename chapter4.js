const text = `You liked me since first year.

And yet... we never truly talked.

I recommended Haikyuu. You watched it.

Two years later, same day, same show... same theater.

You walked in...

and sat just in front of me.

How can anyone say this wasn’t destiny?`;

let i = 0;
function typeWriter() {
  const target = document.getElementById("chapter4-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function goToNext() {
  window.location.href = "chapter5.html"; // placeholder for next chapter
}
