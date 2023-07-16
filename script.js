const email = document.getElementById("email");
email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address");
    } else {
        email.setCustomValidity("");
    }
})

const fname = document.getElementById("fname");
fname.addEventListener("input", (e) => {
    if (fname.validity.typeMismatch) {
        fname.setCustomValidity("Please enter your first name");
    } else {
        fname.setCustomValidity("");
    }
})

const pw = document.getElementById("pw");
pw.addEventListener("input", (e) => {
    if (pw.validity.typeMismatch) {
        if (pw.innerText.length < 9) {
            pw.setCustomValidity("Minimum 8 characters");
        } else if (pw.innerText.length > 40) {
            pw.setCustomValidity("Maximum 40 characters");
        } else {
            pw.setCustomValidity("");
        }
    }
})

const confirmPw = document.getElementById("confirm-pw");
confirmPw.addEventListener("input", (e) => {
    if (confirmPw.innerText != pw.innerText) {
        confirmPw.setCustomValidity("Passwords do not match");
        pw.setCustomValidity("Passwords do not match");
    } else {
        confirmPw.setCustomValidity("");
    }
})

document.querySelector("button").addEventListener("click", buttonForValidation);

function buttonForValidation() {
    console.log("The button is pressed")
    getFName();
}

function getFName() {
    let fName = document.querySelector("#fname").innerText;
    console.log(fName);
}


function confirmPassword() {

}

