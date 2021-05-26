// @@include('slick.min.js');



$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    draggable: true,
    waitForAnimate: true,
    // touchThreshold: 10,
    // centerMode: true,
    // variableWidth: true,
    // slidesPerRow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 9000,
  });
});