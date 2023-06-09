
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //greeting.innerText ="Hello " + username;
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(e) {
  e.preventDefault();
}

loginForm.addEventListener('submit', onLoginSubmit); 

