import './index.scss';

(function($) {
  $('.scrollTop').on('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
})(jQuery);
