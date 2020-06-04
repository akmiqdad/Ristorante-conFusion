
$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

$(document).ready(function () {

    $("#loginpop").click(function () {
        $("#loginModal").modal();
    });
    $(".close").click(function () {
        $("#loginModal").modal('hide');
    });
    $("#logincancel").click(function () {
        $("#loginModal").modal('hide');
    });
    $("#reserveButton").click(function () {
        $("#reserveModal").modal();
    });
    $(".close").click(function () {
        $("#reserveModal").modal('hide');
    });
    $("#reserveCancel").click(function () {
        $("#reserveModal").modal('hide');
    });

});
