$(document).ready(function () {
    // Getting references to our form and input
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const userNameInput = $("#username")

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {

        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            username: userNameInput.val().trim()
        };

        if (!userData.email || !userData.password || !userData.username) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.username);
        emailInput.val("");
        passwordInput.val("");
        userNameInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, username) {

        $.post("/api/signup", {
            email: email,
            password: password,
            username: username
        })
            .then(function (data) {
                window.location.replace("/landing");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(err => console.log(err));
    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
