document.body.style.backgroundColor = "violet";
document.querySelector("h2").style.color = "white";

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    document.body.style.backgroundColor = "yellow";
  } else if (window.innerWidth > 500 && window.innerWidth < 800) {
    document.body.style.backgroundColor = "violet";
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
});
