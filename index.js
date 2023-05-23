const guess = document.querySelector("#guess_number");
const guessNumber = document.querySelector("#guess_number input");
const input = document.querySelector("#input_number input");
const inner = document.querySelector("#inner");

function onBtnSubmit(event) {
  event.preventDefault();
  localStorage.setItem("input", input.value);
  if (input.value === "" || guessNumber.value === "") {
    alert("Please input a Number");
  } else if (parseInt(guessNumber.value) > parseInt(input.value)) {
    alert("Guess Number cannot be larger than the generated number");
  } else {
    const randomNumber = Math.floor(Math.random() * parseInt(input.value)) + 1;
    console.log(guessNumber.value, randomNumber);
    if (parseInt(guessNumber.value) !== randomNumber)
      inner.innerText = `You chose: ${guessNumber.value}, the machine chose: ${randomNumber}. \n You Lost!`;
    else
      inner.innerText = `You chose: ${guessNumber.value}, the machine chose: ${randomNumber}. \n You Win!`;
  }
}

guess.addEventListener("submit", onBtnSubmit);
