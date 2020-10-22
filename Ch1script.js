$(function () {
    //window.location.href = "test.html";
    $(".mainButtons").on('click', function () {
        adresa = $(this).val();
        console.log(adresa)
        window.location.href = adresa;

    })
    $('#findbut').click(function() {
        var ix = $("#trans").prop("selectedIndex");
        console.log(ix);
        $('#DMTdiv').toggle(ix === 0);
        $('#Ayawaskadiv').toggle(ix === 1);



    });
});

