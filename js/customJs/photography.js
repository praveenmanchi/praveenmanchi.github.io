(function ($) {
    'use strict';
    
    jQuery(window).on('load', () => {
        $('.photography-main-section').height($('.photography-main-section').height() + ($('.photography-main-section .images-container').height() / 2))
    })
})(jQuery);