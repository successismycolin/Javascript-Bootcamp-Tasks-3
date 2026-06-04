document.getElementById('signUpForm').addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("usernameBox");
    const email = document.getElementById("emailBox");
    const password = document.getElementById("passwordBox");
    const terms = document.getElementById("termsBox");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const termsError = document.getElementById("termsError");

    let isValid = true;

    //  Username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } 

    //  Email  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Email address is required.";
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address."
        isValid = false;
    }

    // Password 
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required."
        isvalid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long."
        isValid = false;
    }

    if (isValid) {
        console.log("All inputs are valid.")
    } else {
        console.log("Form submission failed.")
    }
});