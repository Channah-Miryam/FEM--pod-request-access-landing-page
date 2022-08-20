//One should not rely only upon JavaScript validation. JavaScript can easily be disabled.
//Server side validation should also be performed.

// Solution 1 - Vanilla JavaScript using regex // Email validation

let emailButton = document.getElementById('email__button');
emailButton.addEventListener('click', captureUserInput);

function captureUserInput() {
  let userInput = document.getElementById('email').value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emptyString = /^\s*$/;
  let userInputField = document.getElementById('email');
  let inputError = document.getElementById('email__error');

  if (userInput.match(mailformat)) {
    inputError.innerHTML = 'Thank you for registering!';
    userInputField.focus();
    return true;
  } else if (userInput.match(emptyString)) {
    inputError.innerHTML = 'Oops! Please add your email';
  } else {
    inputError.innerHTML = 'Oops! Please check your email';
    userInputField.focus();
    return false;
  }
}
