function validateFirstName() {
    const firstNameField = document.getElementById("fname");
    firstNameField.nodeValidate = true;
    firstNameField.setCustomValidity("")
    firstNameField.checkValidity();
    console.log(firstNameField.checkValidity());

    firstNameField.addEventListener("input", (event) => {
        if (firstNameField.validity.tooShort) {
            firstNameField.setCustomValidity("Name too short")
        } if (firstNameField.validity.tooLong) {
            firstNameField.setCustomValidity("Name too long")
        }
    })
}

document.querySelector("button").addEventListener("click", buttonForValidation);

function buttonForValidation() {
    console.log("The button is pressed")
    validateFirstName()
}


