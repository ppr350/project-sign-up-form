const allRequiredInputs = document.querySelectorAll('#input[required]');
const firstName = document.querySelector('#fname');
const email = document.querySelector('#email');
const password = document.querySelector('#pw');
const confirmPassword = document.querySelector('#confirm-pw');

const firstNameErrorMessage = firstName.nextElementSibling.textContent;
const emailErrorMessage = email.nextElementSibling.textContent;
const passwordErrorMessage = password.nextElementSibling.textContent;
const confirmPasswordErrorMessage = confirmPassword.nextElementSibling.textContent;

function checkFirstName() {
    const firstNameError = document.getElementById('fname-error-message');
    firstName.addEventListener('change', (e) => {
        const isInvalid = !e.target.checkValidity(); //false
        // console.log(isInvalid);
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const firstNameErrorMessage = e.target.validationMessage;
            // console.log(firstNameErrorMessage);
            firstNameError.textContent = firstNameErrorMessage;
        }
    })
    firstName.addEventListener('input', (e) => {
        if (firstNameError.textContent) {
            e.target.removeAttribute('aria-invalid');
            firstNameError.textContent = "";
        }
    })

}
checkFirstName();

function checkEmail() {
    const emailError = document.getElementById('email-error-message');
    email.addEventListener('change', (e) => {
        const isInvalid = !e.target.checkValidity(); //false
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const emailErrorMessage = e.target.validationMessage;
            emailError.textContent = emailErrorMessage;
        }
    })
    email.addEventListener('input', (e) => {
        if (emailError.textContent) {
            e.target.removeAttribute('aria-invalid');
            emailError.textContent = "";
        }
    })
}
checkEmail();

function checkPassword() {
    const passwordError = document.getElementById('password-error-message');
    password.addEventListener('change', (e) => {
        const isInvalid = !e.target.checkValidity(); //false
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const passwordErrorMessage = e.target.validationMessage;
            passwordError.textContent = passwordErrorMessage;
        }
    })
    password.addEventListener('input', (e) => {
        if (passwordError.textContent) {
            e.target.removeAttribute('aria-invalid');
            passwordError.textContent = "";
        }
    })
}
checkPassword();

function checkConfirmPassword() {
    const confirmPasswordError = document.getElementById('confirm-pw-error-message');
    confirmPassword.addEventListener('change', (e) => {
        console.log("change detected")
        // // comparePasswords();
        // if (confirmPassword.textContent !== password.textContent) {
        //     const confirmPasswordErrorMessage = "Password did not match"
        //     console.log("Password did not match")
        //     confirmPasswordError.textContent = confirmPasswordErrorMessage;
        // }
        const isInvalid = !e.target.checkValidity(); //false
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const confirmPasswordErrorMessage = e.target.validationMessage;
            confirmPasswordError.textContent = confirmPasswordErrorMessage;
        }
    })
    confirmPassword.addEventListener('input', (e) => {
        if (confirmPassword.textContent === password.textContent) {
            e.target.removeAttribute('aria-invalid');
            confirmPasswordError.textContent = "";
            // comparePasswords();
        }
    })

}
checkConfirmPassword();

const joinButton = document.querySelector('.button');
joinButton.addEventListener('click', (e) => {
    console.log('click')

})

function comparePasswords() {
    const comparePassword = document.getElementById('pw');
    const compareConfirmPassword = document.getElementById('confirm-pw');
    const passwordError = document.getElementById('password-error-message');
    const confirmPasswordError = document.getElementById('confirm-pw-error-message');
    // console.log(password, confirmPassword)
    confirmPassword.addEventListener('change', (e) => {
        if (compareConfirmPassword.value === comparePassword.value) {
            compareConfirmPassword.setCustomValidity('');
        } else {
            compareConfirmPassword.setCustomValidity('Passwords do not match');
        }

    })

}
comparePasswords()




// function validateFirstName() {
//     const firstNameField = document.getElementById("fname");
//     // firstNameField.nodeValidate = true;
//     firstNameField.setCustomValidity("")
//     if (firstNameField.checkValidity()) {
//         console.log("first name field entry is valid");
//         firstNameField.setCustomValidity("first name field entry is valid")
//     } else {
//         console.log("fist name field entry is invalid");
//         // console.log("Please enter between 2 and 20 characters");
//         // firstNameField.reportValidity();
//         const errorMessage = firstNameField.validateMessage

        
//         // firstNameField.setAttribute("aria-invalid", !isValid);
//     }
// }

// const fName = document.querySelector("#fname");
// const fNameError = document.querySelector(".fname-error");
// fName.addEventListener('change', (e) => {
//     const isInvalid = !e.target.checkValidity();
//     e.target.setAttribute('aria-invalid', isInvalid);
//     if (isInvalid) {
//         const errorMessage = e.target.validationMessage;
//         fNameError.textContent = errorMessage;
//     }
// })

// fName.addEventListener("input", (e) => {
//     if(fNameError.textContent) {
//         e.target.removeAttribute('aria-invalid');
//         fNameError.textContent = '';
//     }
// })

// const allRequiredInputs = document.querySelectorAll("input[required]");

// ['fname', 'email', 'pw', 'confirm-pw'].forEach(id => {
//     let fieldNme = id;
//     let message = document.getElementById(id).nextElementSibling.textContent;
//     console.log(message)
//     fieldNme.addEventListener("change", (e) => {
//         const isInvalid = !e.target.checkValidity(); //false
//         console.log(isInvalid)

//         e.target.setAttribute('aria-invalid', isInvalid);
//         if (isInvalid) {
//             const errorMessage = e.target.validationMessage;
//             errorElements.textContent = errorMessage;

//         }
//     })
//     fieldNme.addEventListener("input", (e) => {
//         if (errorElements.textContent) {
//             e.target.removeAttribute('aria-invalid');
//             errorElements.textContent = "";
//         }
//     })
// })

// const allInputsError = document.querySelectorAll(".error-message")
// allRequiredInputs.forEach(item => {
//     const eachForm = document.querySelector("#signup")
//     const errorElements = eachForm.querySelectorAll('.error-message');
//     console.log(errorElements.textContent)
    

//     // console.log(item.id);
//     item.addEventListener("change", (e) => {
//         const isInvalid = !e.target.checkValidity(); //false
//         console.log(isInvalid)

//         e.target.setAttribute('aria-invalid', isInvalid);
//         if (isInvalid) {
//             const errorMessage = e.target.validationMessage;
//             errorElements.textContent = errorMessage;

//         }
//     })
//     item.addEventListener("input", (e) => {
//         if (errorElements.textContent) {
//             e.target.removeAttribute('aria-invalid');
//             errorElements.textContent = "";
//         }
//     })
// })

// function validateFirstName() {
//     const fNameForm = document.querySelectorAll("input");
//     for (let i = 0; i < fNameForm.length; i++) {
//         const errorMessages = document.querySelectorAll('[class="error-message"]');
//         for (let i = 0; i < errorMessages.length; i++) {
//             console.log(errorMessages[i].textContent)
//         }
//     }
// }

//validateFirstName();

// const usernameEl = document.querySelector('#username');
// const emailEl = document.querySelector("#email")
// const passwordEl = document.querySelector("#pw");
// const confirmPasswordEl = document.querySelector("#confirm-pw");

// const form = document.querySelector("#signup");
// const join = document.querySelector("#join");

// join.addEventListener('submit', function (e) {
//     e.preventDefault();
// })

// const isRequired = value => value === '' ? false : true;
// const isBetween = (length, min, max) => length < min || length > max ? false :true;
// const isEmailValid = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }
// const isPasswordSecure = (password) => {
//     const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return re.test(password);
// }

// const showError = (input, message) => {
//     const formField = input.parentElement;
//     const error = formField.querySelector('span');
//     error.textContent = message;
// }


// const input = document.querySelectorAll("input")
// input.addEventListener('change', (e) => {
//     const wasValidated = e.target.getAttribute('aria-invalid') === 'true';
//     if (wasValidated) {
//         return;
//     }
//     const errorMessage = e.target.validationMessage;
//     const errorElement = document.querySelector('span');
//     e.target.setAttribute('aria-invalid', !!errorMessage);
//     if (errorMessage) {
//         errorElement.textContent = errorMessage;
//         e.target.focus();
//     }
// })

// function validateEmail() {
//     const emailField = document.getElementById("email");
//     emailField.nodeValidate = true;
//     if (emailField.checkValidity()) {
//         console.log("email field entry is valid");
//     } else {
//         console.log("email field entry is invalid");
//         emailField.reportValidity();
//     }
// }

// document.querySelector("button").addEventListener("click", buttonForValidation);

// function buttonForValidation() {
//     console.log("The button is pressed")
//     validateFirstName()
//     validateEmail()
// }


// const nameInput = document.querySelector("#fname");
// nameInput.addEventListener('change', (e) => {
//     const isValid = e.target.checkValidity();
//     console.log(isValid);
//     e.target.setAttribute('Aria-invalid', !isValid);
// })



