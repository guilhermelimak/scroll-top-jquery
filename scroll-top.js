(function($) {
  var scrollTop = {

    init: function  (selector, props) {
      selector = selector || '.scroll-top';
      var defaultProps = {
        offset: 220,
        duration: 500
      };
      props = Object.assign(defaultProps, props);

      $(window).scroll(function () {
        ($(this).scrollTop() > props.offset) : $(selector).fadeIn(props.duration) : $(selector).fadeOut(props.duration)
      });

      $(selector).click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, props.duration);
        return false;
      });

    }

  };
})(jQuery);
