
$(document).ready(function () {

    $('#submit').on('click', function (event) {
        event.preventDefault()
        $('#box').empty()
        const apikey = '99e2112fb3d9536b3fcd9d9d41490b3e';
        const queryURL = 'https://sandbox-api.brewerydb.com/v2/beers/?key=' + apikey;


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
                        .text("Name: " + res.data[i].nameDisplay)
                );
                $('#box').append(
                    $('<p/>')
                        .addClass("text-center")
                        .text("ABV: " + res.data[i].abv)
                );
                $('#box').append(
                    $('<h4/>')
                        .addClass("text-center")
                        .text("Description")
                );
                $('#box').append(
                    $('<p/>')
                        .addClass("text-center")
                        .text("IBU (bitterness): " + res.data[i].ibu)
                );
                $('#box').append(
                    $('<h4/>')
                        .addClass("text-center")
                        .text("Description: ")
                );

                $('#box').append(
                    $('<p/>')
                        .addClass("text-center")
                        .text(res.data[i].style.description)
                );
            }

        });
    });
})