$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu, .header__nav-right').toggleClass('active');
    $('body').toggleClass('lock');
  });
});