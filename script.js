const noBtn = document.getElementById("noBtn");

const messages = [
  "Really? 😏",
  "Think again 🤨",
  "No chance 😜",
  "You sure? 😳",
  "Try harder 😈",
  "Still NO? 😂",
  "Impossible 😌",
  "Khara ka? 😜",
  "Ho mn na gaaaa..😌",
  "Plz na Baby 🥺",
  "Majhypeksha bhari nahi milnar! 😜😜"
];

let msgIndex = 0;

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width - 20;
  const maxY = window.innerHeight - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // IMPORTANT: use fixed positioning
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // update text inside button
  noBtn.innerText = messages[msgIndex % messages.length];
  msgIndex++;
}

function yesClicked() {
  window.location.href = "yes.html";
}
