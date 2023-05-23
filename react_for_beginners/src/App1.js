//const loginForm = document.getElementById('login-Form');
//const loginInput = loginForm.querySelector('input');
//const loginButton = loginForm.querySelector('button');

const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function handleLoginBtnClick(e) {
  const username = loginInput.value;

  console.log(username);
  e.preventDefault();
  /*
  if(username === "")  {
    alert('please write your name');
  } else if(username.length > 15) {
    alert('your name is too long');
  } else {
    console.log('your name is' ,username);
  } */
  

}

loginButton.addEventListener('click', handleLoginBtnClick); 
