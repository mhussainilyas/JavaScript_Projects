const btns = document.querySelectorAll(".btn");
const fan = document.getElementById("fan");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let targetBtn = e.target;
    let targetBtnClass = targetBtn.classList;
    if (targetBtnClass.contains("btn-on")) {
      fan.style.animationPlayState = "running";
      fan.style.animationDuration = `${2}s`;
    } else if (targetBtnClass.contains("btn-off")) {
      fan.style.animationPlayState = "paused";
    } else if (targetBtnClass.contains("btn-1")) {
      fan.style.animationDuration = `${1}s`;
    } else if (targetBtnClass.contains("btn-2")) {
      fan.style.animationDuration = `${0.5}s`;
    } else {
      fan.style.animationDuration = `${0.2}s`;
    }
  });
});
