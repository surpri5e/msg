setTimeout(() => {
  setTimeout(() => {
    const card = document.getElementById("flip-card-inner");
    card.style.transform = "rotateY(180deg)";
  }, 500);
}, 4000); //bilis ng pagflip ata

setTimeout(() => {
  setTimeout(openEnvelope, 800);
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const heartContainer = document.getElementById("heart-container");
  for (let i = 0; i < 150; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 150 + "vw";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heartContainer.appendChild(heart);
  }
  setTimeout(() => {
    heartContainer.style.display = "none";
    document.getElementById("flip-card").style.display = "block";
  }, 3000);
});

function openEnvelope() {
  setInterval(() => {
    document.getElementById("one").style.transform = "rotate(180deg)";
    document.getElementById("companyName").style.display = "none";
  }, 2000);

  setTimeout(letterUp, 4000);
}

function letterUp() {
  const letter = document.getElementById("letter");
  const one = document.getElementById("one");

  one.style.zIndex = 1;
  letter.style.zIndex = 2;
  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 500) {
      clearInterval(id);
    } else {
      letter.style.top = -i + "px";
      i++;
    }
  }, 2); //pagtaas

  setTimeout(letterDown, 3000);
}

function letterDown() {
  const letter = document.getElementById("letter");
  const card = document.getElementById("flip-card");

  letter.style.top = -500 + "px";
  letter.style.zIndex = 4;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 100) {
      clearInterval(id);
    } else {
      letter.style.top = -500 + i * 5 + "px";
      letter.style.transform = "rotate(" + -i / 18 + "deg)";

      card.style.transform = "rotate(" + i / 18 + "deg)";

      i++;
    }
  }, 5); //pagbaba ng letter

  setTimeout(() => {
    const popUp = document.getElementById("popUp");
    popUp.style.display = "block";
    popUp.style.zIndex = 5;
  }, 2000);
}
