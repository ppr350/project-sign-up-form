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

const fName = document.querySelector("#fname");
const fNameError = document.querySelector("#fname-error");
fName.addEventListener('change', (e) => {
    const isInvalid = !e.target.checkValidity();
    e.target.setAttribute('aria-invalid', isInvalid);
    if (isInvalid) {
        const errorMessage = e.target.validationMessage;
        fNameError.textContent = errorMessage;
    }
})

fName.addEventListener("input", (e) => {
    if(fNameError.textContent) {
        e.target.removeAttribute('aria-invalid');
        fNameError.textContent = '';
    }
})

const allInputs = document.querySelectorAll("input");
const allInputsError = document.querySelectorAll
for (i = 0; i < allInputs.length; i++) {
    allInputs.forEach(element => console.log(element));

}

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



