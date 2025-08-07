const body = document.body;

// 💡 ЕФЕКТ ТРЯСКИ
let shaking = false;
setInterval(() => {
  if (!shaking) {
    body.classList.add("shake");
    shaking = true;
    setTimeout(() => {
      body.classList.remove("shake");
      shaking = false;
    }, 300);
  }
}, 500); // кожні півсекунди

// 🎨 МИГОТІННЯ ФОНУ
setInterval(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 100);

// 💬 РАНДОМНІ ТЕКСТИ "Купи"
setInterval(() => {
  const message = document.createElement("div");
  message.classList.add("buy-message");
  message.textContent = "Купи, купи, купи!";

  message.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
  message.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

  body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}, 250);
