window.addEventListener("resize", function () {
  let bodyElement = document.body;

  if (window.innerWidth > 800) {
    bodyElement.classList.remove("purple-background", "skyblue-background");
    bodyElement.classList.add("yellow-background");
  } else if (window.innerWidth > 500 && window.innerWidth < 800) {
    bodyElement.classList.remove("yellow-background", "skyblue-background");
    bodyElement.classList.add("purple-background");
  } else {
    bodyElement.classList.remove("yellow-background", "purple-background");
    bodyElement.classList.add("skyblue-background");
  }
});
