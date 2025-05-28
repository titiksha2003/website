const storyText = document.getElementById("story-text");

const message = `We knew each other since first year... 
but only started talking in the final year — through Discord.

I was the new member in your group, just trying to make friends.

But never did I expect that your kindness, 
your gentle care, your helping heart...
and the way you look at me...

Would make me fall so hard for you, in just a few months.

And the craziest part?

You liked me since first year.

I suggested Haikyuu to you... and you watched it.

Two years later — fate brought us to the same theater,
on the same day, watching the same movie.

And there you were... sitting just in front of me,
as we watched the Dumpster Battle together.`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    storyText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // speed of typing
  }
}

window.onload = typeWriter;

function goToNext() {
  window.location.href = "chapter2.html"; // placeholder
}
function showThought(who) {
  const bubble = document.getElementById(`${who}-bubble`);
  if (bubble.style.display === "block") {
    bubble.style.display = "none";
  } else {
    bubble.style.display = "block";
    setTimeout(() => {
      bubble.style.display = "none";
    }, 3000);
  }
}
