const body = document.body;

// Частіше змінюємо фон
setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 100); // ще швидше

// Створення повідомлення "Купи!"
setInterval(() => {
  const message = document.createElement("div");
  message.classList.add("buy-message");
  message.textContent = "Купи, купи, купи!";

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  message.style.left = `${x}px`;
  message.style.top = `${y}px`;

  body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000); // зникає через 2 секунди
}, 200); // ще частіше
