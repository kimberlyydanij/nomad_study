
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector("a");


function onLoginSubmit(e) {
  const username = loginInput.value;
  e.preventDefault();
}

function handleLinkClick(e) {
  e.preventDefault();
}

loginForm.addEventListener('submit', onLoginSubmit); 
link.addEventListener('click', handleLinkClick);
