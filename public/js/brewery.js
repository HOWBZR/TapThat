
$(document).ready(function () {

    $('#submit').on('click', function (event) {
        event.preventDefault()
        const zipcode = $("#zip")
        $('#box').empty()
        let zip = zipcode.val().trim()
        const apikey2 = "1a41ec200c7b7f7559d4516b8eb11abc"
        const queryURL = "http://api.brewerydb.com/v2/locations/?key=" + apikey2 + "&postalCode=" + zip

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            console.log(res.data)

            for (let i = 0; i < res.data.length; i++) {

                $('#box').append(
                    $('<div/>')
                        .addClass("card-body opct opacity-60")
                );
                $('#box').append(
                    $('<h5/>')
                        .addClass("card-title text-center opct opacity-60")
                        .text(res.data[i].brewery.name)
                );
                $('#box').append(
                    $('<img/>')
                        .attr('src', res.data[i].brewery.images.medium)

                )
                $('#box').append(
                    $('<p/>')
                        .addClass("text-center")
                        .text(res.data[i].streetAddress)
                );
                $('#box').append(
<<<<<<< HEAD
                    "<a class='text-center' href='"+ res.data[i].website +"'>" 
=======

                    "<a class='text-center' href='"+ res.data[i].website +"'>" 


>>>>>>> 7a1df76312f6aebeac61e5ee03ca39efe6d40c3b
                    + res.data[i].website + "</a>"
                );
                // console.log(res.data[i].website)
            }

        });
    });
})
