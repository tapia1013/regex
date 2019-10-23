// Form Blur Event Listener
document.getElementById('name').addEventListener('blur', validateName);
// zipcode
document.getElementById('zip').addEventListener('blur', validateZip);
// email
document.getElementById('email').addEventListener('blur', validateEmail);
// phone
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  // get value of name field
  const name = document.getElementById('name')
  // variable for RegEx that we wanna match. lettrs a-z
  const re = /^[a-zA-Z]{2,10}$/;

  // to evaluate
  if (!re.test(name.value)) { // if not re.test(name.value)
    // if its invalid turn red
    name.classList.add('is-invalid')
  } else {
    // remove
    name.classList.remove('is-invalid')
  }

}

function validateZip() {
  // get value of zip field
  const zip = document.getElementById('zip')
  //0-9 with 5 numbers group together option(-[0-9]{4}) 4+
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  // to evaluate
  if (!re.test(zip.value)) { // if not re.test(zip.value)
    // if its invalid turn red
    zip.classList.add('is-invalid')
  } else {
    // remove
    zip.classList.remove('is-invalid')
  }
}

function validateEmail() {
  // get value of email field
  const email = document.getElementById('email')
  // group () = together
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // to evaluate
  if (!re.test(email.value)) { // if not re.test(email.value)
    // if its invalid turn red
    email.classList.add('is-invalid')
  } else {
    // remove
    email.classList.remove('is-invalid')
  }
}

function validatePhone() {
  // get value of name field
  const emil = document.getElementById('phone')
  // 
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  // to evaluate
  if (!re.test(phone.value)) { // if not re.test(phone.value)
    // if its invalid turn red
    phone.classList.add('is-invalid')
  } else {
    // remove
    phone.classList.remove('is-invalid')
  }
}