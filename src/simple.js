(function($) {
    $.fn.blink = function(options) {

        options = $.extend(
            {"class": "blink"},
            options
        );

        return this.each(function(key, value) {
            $(value).addClass(options.class);
        });
    };
}(jQuery));

jQuery('[data-role="blink"]').blink();
