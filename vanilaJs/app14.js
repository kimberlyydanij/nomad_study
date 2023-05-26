const title = document.querySelector('h2');
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerHTML = 'The mouse is here';
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerHTML = 'The mouse is gone';
    title.style.color = colors[1];
  },
  handleWindowResize: function () {
    title.innerHTML = 'You just resized';
    title.style.color = colors[2];
  },
  handleRightClick: function (event) {
    event.preventDefault();
    title.innerHTML = 'You was a right click';
    title.style.color = colors[3];
  },
};

title.addEventListener('mouseover', superEventHandler.handleMouseEnter);
title.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
window.addEventListener('resize', superEventHandler.handleWindowResize);
title.addEventListener('contextmenu', superEventHandler.handleRightClick);
