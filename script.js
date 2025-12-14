const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")


function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true

    if (usernameVal === "") {
        success = false
        setError(username, "Username is required")
    }
    else {
        setSuccess(username)
    }

    if (emailVal === "") {
        success = false
        setError(email, "Email is required")
    }
    else if (!validateEmail(emailVal)) {
        success = false
        setError(email, "Please enter a valid email")
    }
    else {
        setSuccess(email)
    }
    if (passwordVal === "") {
        success = false
        setError(password, "Password is required")
    }
    else if (passwordVal.length < 8) {
        success = false
        setError(password, "Password must be atleast 8 charcters long")
    }
    else {
        setSuccess(password)
    }
    if (cpasswordVal === "") {
        success = false
        setError(cpassword, "Confrim Password is required")
    }
    else if (cpasswordVal !== passwordVal) {
        success = false
        setError(cpassword, "Passowrd does not match")
    }
    else {
        setSuccess(cpassword)
    }

    return success

}

function setError(element, message) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = message
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")

}

function setSuccess(element) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = ""
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")

}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )

}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (validateInputs()) {
        alert("Form submitted successfully ✅");
        form.submit(); 
    } 
});