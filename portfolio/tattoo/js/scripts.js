$(".menu-button").click(function() {
  $(this).toggleClass("on");
  $(".nav").slideToggle();
  return false;
});

$("a").click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(target).offset().top - 45 }, 1300);
  return false;
});