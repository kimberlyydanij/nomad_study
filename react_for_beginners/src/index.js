document.body.style.backgroundColor = 'purple';

function windowSize(event) {
  const size = window.innerWidth;
  if (size >= 900) {
    document.body.style.backgroundColor = 'yellow';
  } else if (size <= 600) {
    document.body.style.backgroundColor = 'blue';
  } else document.body.style.backgroundColor = 'purple';
}

window.addEventListener('resize', windowSize);
