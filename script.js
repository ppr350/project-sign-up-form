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
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const firstNameErrorMessage = e.target.validationMessage;
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

function validatePasswords() {
    const checkPassword = document.getElementById('pw');
    const checkPasswordMessage = document.getElementById('password-error-message');
    checkPassword.addEventListener('change', (e) => {
        if (checkPassword.value == "") {
            checkPasswordMessage.textContent = "Please fill in password";
            e.target.setAttribute('aria-invalid', 'true');
        } else if (checkPassword.value.length < 8) {
            checkPasswordMessage.textContent = "Password must be at least 8 characters";
            e.target.setAttribute('aria-invalid', 'true');
        } else if (checkPassword.value.length > 30) {
            checkPasswordMessage.textContent = "Password must be fewer than 30 characters";
            e.target.setAttribute('aria-invalid', 'true');
        } else {
            checkPasswordMessage.textContent = "";
            e.target.removeAttribute('aria-invalid');
        }
    })
    const checkConfirmPassword = document.getElementById('confirm-pw');
    const checkConfirmPasswordMessage = document.getElementById('confirm-pw-error-message');
    checkConfirmPassword.addEventListener('change', (e) => {
        if (checkPassword.value !== checkConfirmPassword.value) {
            checkConfirmPasswordMessage.textContent = "Password are not the same";
            e.target.setAttribute('aria-invalid', 'true');
        } else if (checkPassword.value === checkConfirmPassword.value) {
            checkConfirmPasswordMessage.textContent = "";
            e.target.removeAttribute('aria-invalid');
        }
    })
}
validatePasswords();

document.querySelector("button").addEventListener("click", buttonForValidation);

function buttonForValidation() {
    console.log("The button is pressed")
    const fnameStatus = document.getElementById('fname').aria;
    if (fnameStatus == true) {
        console.log('fname verified')
    }
}



