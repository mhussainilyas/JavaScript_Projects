let randomBtn = document.querySelector(".random-btn");
let applyBtn = document.querySelector(".apply-btn");
let colorInput = document.getElementById("color-input");
let currentColor = document.querySelector(".current-color");
let container = document.querySelector(".container");

const HandleColorChange = (color) => {
  container.style.backgroundColor = color;
  currentColor.innerText = color;
};

const generateRandomColor = () => {
  let color = "#";
  let hexStr = "0123456789abcdef";
  for (let i = 1; i <= 6; i++) {
    let c = Math.floor(Math.random() * hexStr.length);
    color += hexStr[c];
  }
  return color;
};

const handleRandomButtonClick = () => {
  HandleColorChange(generateRandomColor());
};

const handleApplyButtonClick = () => {
  const color = colorInput.value;
  HandleColorChange(color);
  colorInput.value = "";
};

randomBtn.addEventListener("click", handleRandomButtonClick);
applyBtn.addEventListener("click", handleApplyButtonClick);
