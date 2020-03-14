$(document).ready(function () {
    // Getting references to our form and input
    // const nodemailer = require('nodemailer');

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

                // sendEmail();
                window.location.replace("localhost:8080/");
                console.log(data);// If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);


    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }



    //START LOGIN JS---------------------------------------------------------------


    // Getting references to our form and inputs
    const loginForm = $("#login");
    const emailInputL = $("#inputEmail4");
    const passwordInputL = $("#inputPassword6");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("click", function (event) {
        event.preventDefault();
        // alert("working")
        const userData = {
            email: emailInputL.val().trim(),
            password: passwordInputL.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInputL.val("");
        passwordInputL.val("");



    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function (data) {
                localStorage.setItem("id", data.id)
                alert("Success!")
                window.location.replace("/homebrew");

            })
            .catch(function (err) {
                alert("Oops, something went wrong, please check that you typed your username and password correctly.")
                console.log(err);
            });
    }

    function userData(data) {
        // console.log(data)
        alert("Welcome! " + data.username)
        console.log(data)
        $.get("/api/user_data").then(function (data) {
            $("#userdata").text(data.id);
            console.log(data)
        });
    }










});
