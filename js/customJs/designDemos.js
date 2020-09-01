(function ($) {
	'use strict';

	jQuery(document).ready(function () {

        $('.design-images .image-container').on('click', (event) => {
            const clickedElement = event.target;
            const clickedTagName = clickedElement.tagName;
            let clickedImgSrc = '';
            switch (clickedTagName) {
                case 'SPAN':
                    clickedImgSrc = clickedElement.parentElement.querySelector('img').src;
                    break;
                case 'DIV':
                    clickedImgSrc = clickedElement.querySelector('img').src;
                    break;
                default:
                    clickedImgSrc = clickedElement.src;
            }
            const targetImg = $('.design-container').find('img');
            if (targetImg.attr('src') !== clickedImgSrc)
                targetImg.attr('src', clickedImgSrc);
        });
	});
})(jQuery);