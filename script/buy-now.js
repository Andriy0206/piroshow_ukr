// 🎨 Кольори для плавного фону
const colors = [
  "#fde2e2", "#f9c6c9", "#f6d6ad", "#d0e6a5", "#b8e0d2",
  "#b4d4ee", "#c2c2f0", "#d9b8ff", "#e7c6ff", "#ffc9de",
  "#f3d9dc", "#f8e1f4", "#f9f1c0", "#d7f9f1", "#b5ead7",
  "#b2f7ef", "#bae1ff", "#d3c0eb", "#fcd5ce", "#e2ece9"
];
let colorIndex = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 100); // кожні 0.1 секунди
setInterval(() => {
  // 💬 Текст
  const message = document.createElement("div");
  message.classList.add("buy-message");
  message.textContent = "Купуй кольоровий дим!";

  // 🔘 Кнопка
  const button = document.createElement("button");
  button.classList.add("buy-button-pop");
  button.textContent = "Купити зараз";
  button.onclick = () => {
    window.location.href = "index.html#buy"; // змінюй за потреби
  };

  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);

  message.style.left = `${x}px`;
  message.style.top = `${y}px`;

  button.style.left = `${x + 40}px`;
  button.style.top = `${y + 40}px`;

  document.body.appendChild(message);
  document.body.appendChild(button);

  setTimeout(() => {
    message.remove();
    button.remove();
  }, 2000);
}, 500);
