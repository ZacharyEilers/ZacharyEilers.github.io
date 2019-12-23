//changing showcase text
const iAmNoun = document.querySelector("#iAmNoun");
const nouns = ["high school student", "swimmer", "developer", "problem solver"];
var index = 0;

setInterval(() => {
  iAmNoun.innerHTML = nouns[index];

  index++;
  if (index == nouns.length) {
    index = 0;
  }
}, 1000);
