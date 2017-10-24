var offset = $('#MeuMenu').offset().top;
var $meuMenu = $('#MeuMenu');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');
    } else {
        $meuMenu.removeClass('fixar');
    }
});
