
$(document).ready(function () {

    $('#submit').on('click', function (event) {
        event.preventDefault()
        const zipcode = $("#zip")
        $('#box').empty()
        let zip = zipcode.val().trim()
        const queryURL = "http://api.brewerydb.com/v2/locations/?key=1a41ec200c7b7f7559d4516b8eb11abc&postalCode=" + zip

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            console.log(res.data)

            for (let i = 0; i < res.data.length; i++) {

                $('#box').append(
                    $('<div/>')
                        .addClass("card-body border")
                );
                $('#box').append(
                    $('<h5/>')
                        .addClass("card-title text-center")
                        .text(res.data[i].brewery.name)
                );
                $('#box').append(
                    $('<img/>')
                        .attr('src', res.data[i].brewery.images.medium)
                    // .width(50)
                )
                $('#box').append(
                    $('<p/>')
                        .addClass("text-center")
                        .text(res.data[i].streetAddress)
                );
            }

        });
    });
})
