const firstName = document.querySelector('#fname');
const email = document.querySelector('#email');
const password = document.querySelector('#pw');
const confirmPassword = document.querySelector('#confirm-pw');


let conditions = [false, false, false, false];


function checkFirstName() {
    const firstNameError = document.getElementById('fname-error-message');
    firstName.addEventListener('change', (e) => {
        const isInvalid = !e.target.checkValidity(); //false
        e.target.setAttribute('aria-invalid', isInvalid);
        if (isInvalid) {
            const firstNameErrorMessage = e.target.validationMessage;
            firstNameError.textContent = firstNameErrorMessage;
            conditions[0] = false;
            console.log(conditions);
        }
    })
    firstName.addEventListener('input', (e) => {
        if (firstNameError.textContent) {
            e.target.removeAttribute('aria-invalid');
            firstNameError.textContent = "";
            conditions[0] = true;
            console.log(conditions);
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
            conditions[1] = false;
            console.log(conditions);
        }
    })
    email.addEventListener('input', (e) => {
        if (emailError.textContent) {
            e.target.removeAttribute('aria-invalid');
            emailError.textContent = "";
            conditions[1] = true;
            console.log(conditions);
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
            conditions[2] = false;
            conditions[3] = false;
            console.log(conditions);
        } else if (checkPassword.value.length < 8) {
            checkPasswordMessage.textContent = "Password must be at least 8 characters";
            e.target.setAttribute('aria-invalid', 'true');
            conditions[2] = false;
            conditions[3] = false;
            console.log(conditions);
        } else if (checkPassword.value.length > 30) {
            checkPasswordMessage.textContent = "Password must be fewer than 30 characters";
            e.target.setAttribute('aria-invalid', 'true');
            conditions[2] = false;
            conditions[3] = false;
            console.log(conditions);
        } else {
            checkPasswordMessage.textContent = "";
            e.target.removeAttribute('aria-invalid');
            conditions[2] = true;
            console.log(conditions);
        }
    })
    const checkConfirmPassword = document.getElementById('confirm-pw');
    const checkConfirmPasswordMessage = document.getElementById('confirm-pw-error-message');
    checkConfirmPassword.addEventListener('change', (e) => {
        if (checkPassword.value !== checkConfirmPassword.value) {
            checkConfirmPasswordMessage.textContent = "Password are not the same";
            e.target.setAttribute('aria-invalid', 'true');
            conditions[3] = false;
            console.log(conditions);
        } else if (checkPassword.value === checkConfirmPassword.value) {
            checkConfirmPasswordMessage.textContent = "";
            e.target.removeAttribute('aria-invalid');
            conditions[3] = true;
            console.log(conditions);
        }
    })
}
validatePasswords();


document.querySelector("button").addEventListener("click", buttonForValidation);


function buttonForValidation() {
    const allConditionsMet = conditions.every(condition => condition);
    console.log(allConditionsMet);
    if (allConditionsMet) {
        console.log("Congratulations!!")
        alert("Successful!")
    } else {
        console.log("Not quite there yet!")
    }

}



