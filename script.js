//One should not rely only upon JavaScript validation. JavaScript can easily be disabled.
//Server side validation should also be performed.

// Solution 1 - Vanilla JavaScript using regex // Email validation

// // function captureUserInput() {
// //   let userInput = document.getElementById('email').value;
// //   let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// //   let emptyString = /^\s*$/;
// //   let userInputField = document.getElementById('email');
// //   let inputError = document.getElementById('email__error');

// //   if (userInput.match(mailformat)) {
// //     inputError.innerHTML = 'Thank you for registering!';
// //     userInputField.focus();
// //     return true;
// //   } else if (userInput.match(emptyString)) {
// //     inputError.innerHTML = 'Oops! Please add your email';
// //   } else {
// //     inputError.innerHTML = 'Oops! Please check your email';
// //     userInputField.focus();
// //     return false;
// //   }
// // }

// Solution 2 - validator.js !important, validator.js only validates strings, it can also be used for sanitisation

import validator from 'validator';

function captureUserInput() {
  let userInput = document.getElementById('email').value;
  let userInputField = document.getElementById('email');
  let inputError = document.getElementById('email__error');

  // Check if name or about field is empty
  if (validator.isEmpty(userInput)) {
    inputError.innerHTML = 'Oops! Please add your email';
  }

  // Check if email format is correct
  if (!validator.isEmail(userInput)) {
    inputError.innerHTML = 'Oops! Please check your email';
  }
}
