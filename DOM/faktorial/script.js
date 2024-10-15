const inputNum = document.querySelector('.addNum');
const displayResult = document.querySelector('.display');
const errorMessage = document.querySelector('.result');

inputNum.addEventListener('input', calculateFactorial);

function calculateFactorial() {
  const num = inputNum.value;
  let factorial = 1;

  if (num < 0) {
    errorMessage.innerHTML = `<h1>Eleme qaqa</h1>`;
  } else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
  }

  displayResult.value = factorial;
}