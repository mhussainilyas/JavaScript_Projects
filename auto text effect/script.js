let fields = [
  "Web Developer",
  "App Developer",
  "Web Designer",
  "Web Instructor",
];

let autoTextSpan = document.querySelector("span.auto-text");

let fieldIndex = 0;
let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  autoTextSpan.textContent = fields[fieldIndex].slice(0, characterIndex);
  setTimeout(updateText, 300);
  if (characterIndex === fields[fieldIndex].length) {
    fieldIndex++;
    characterIndex = 0;
  }
  if (fieldIndex === fields.length) {
    fieldIndex = 0;
  }
};

updateText();
