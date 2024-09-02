(function($) {

    var $window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-preload');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Fade-in effect
    $body.removeClass('fade-in');

})(jQuery);
