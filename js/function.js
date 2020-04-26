$(document).ready(function () {
    $(".submitBg").mouseover(function () {
        $(".submitBg").css("background-color", "white");
        $(".submitText").css("color", "#0086ca");
    });
    $(".submitBg").mouseout(function () {
        $(".submitBg").css("background-color", "#0086ca");
        $(".submitText").css("color", "white");
    });
});