$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.slider').slick({
    /*  здесь пишем уже параметры слайдера */
    adaptiveHeight: true,
    slidesToShow: 1,
    draggable: true,
    // centerMode: true,
    variableWidth: true,
  });
});