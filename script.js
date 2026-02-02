const noBtn = document.getElementById("noBtn");

const messages = [
  "Really? 😏",
  "Think again 🤨",
  "No chance 😜",
  "You sure? 😳",
  "Try harder 😈",
  "Still NO? 😂",
  "Impossible 😌",
"Khara ka?",
"Ho mn na gaaaa..😌.",
"plz.na Baby.....",
"Majhypeksha Bhari nahi milnar!😜😜."
];

let msgIndex = 0;

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // change text INSIDE button
  noBtn.innerText = messages[msgIndex % messages.length];
  msgIndex++;
}

function yesClicked() {
  window.location.href = "yes.html";
}
