function captureUserInput() {
  let userInput = document.getElementById('email').value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emptyString = /^\s*$/;
  let userInputField = document.getElementById('email');
  let inputError = document.getElementById('email__error');

  console.log(userInput);

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
