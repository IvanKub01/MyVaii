$(function () {
    //window.location.href = "test.html";
    $(".mainButtons").on('click', function () {
        adresa = $(this).val();
        console.log(adresa)
        window.location.href = adresa;

    })

});

