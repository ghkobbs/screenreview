
window.setTimeout(preloaderhide,7000);

function preloaderhide() {
    $('body').css("overflow","auto");
    $('.spinner').fadeOut(600);
}

$(document).ready(function() {
    $('body').css("overflow","hidden");
});

$(window).load(function () {
   preloaderhide();
});

