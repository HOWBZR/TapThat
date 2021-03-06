
$(document).ready(function () {

    $('#submit').on('click', function (event) {
        event.preventDefault()
        const zipcode = $("#zip")
        $('#box').empty()
        let zip = zipcode.val().trim()
        const apikey2 = ""
        const queryURL = "https://api.brewerydb.com/v2/locations/?key=" + apikey2 + "&postalCode=" + zip

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

                    "<a class='text-center' href='" + res.data[i].website + "'>"


                    + res.data[i].website + "</a>"
                );
                // console.log(res.data[i].website)
            }

        });
    });
})
