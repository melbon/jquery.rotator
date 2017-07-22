/*
 * February 2013
 * rotator 2.1.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.fn.rotator = function(options) {

    var settings = $.extend({
        delay: 5000,
        fadeSpeed: "slow"
    }, options);

    return this.each(function() {
        var self = this,
            selector = $(this),
            elements = $(selector).children();

        $(elements).hide().eq(Math.floor(Math.random() * $(elements).length)).show();

        this.rotateElements = function() {
            $(selector).children(":visible").delay(settings.delay).fadeOut(settings.fadeSpeed, function() {
                $(this).appendTo(selector);
                $(selector).children(":first").fadeIn(settings.fadeSpeed, self.rotateElements);
            });
        };
        self.rotateElements();
    });
};