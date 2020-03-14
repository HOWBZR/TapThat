
$(document).ready(function () {


    $('#submit').on('click', function (event) {
        event.preventDefault()
        const beer = $("#beer")
        const style = $("#style")
        const category = $("#category")
        const abv = $("#abv")
        const description = $("#description")
        alert("working")


        const brewPost = {
            beer: beer.val().trim(),
            style: style.val().trim(),
            category: category.val().trim(),
            abv: abv.val().trim(),
            description: description.val().trim()
        };

        if (!brewPost.beer || !brewPost.style || !brewPost.category || !brewPost.abv || !brewPost.description) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        postBrew(brewPost.beer, brewPost.style, brewPost.category, brewPost.abv, brewPost.description);
        beer.val("");
        style.val("");
        category.val("");
        abv.val("");
        description.val("");
    })

    function postBrew(beer, style, category, abv, description) {

        $.post("/api/brewpost", {
            beer: beer,
            style: style,
            category: category,
            abv: abv,
            description: description
        })
            .then(function (data) {

                // sendEmail();
                window.location.replace("localhost:8080/");
                console.log(data);// If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch((err) => console.log(err));


    }

})
