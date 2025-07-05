const body = document.querySelector("body");
const main = document.querySelector("main");

body.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const size = Math.floor(Math.random() * 130);

  const span = document.createElement("span");
  main.appendChild(span);

  span.style.top = `${yPos}px`;
  span.style.left = `${xPos}px`;
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;

  setTimeout(() => {
    span.remove();
  }, 2000);
});
