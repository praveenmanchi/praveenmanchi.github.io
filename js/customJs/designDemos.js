(function ($) {
	// 'use strict';

	jQuery(document).ready(function () {

        $('.design-images .image-container').on('click', (event) => {
            const clickedElement = event.currentTarget;
            const clickedTagName = clickedElement.tagName;
            let clickedImgSrc_data = '';
            switch (clickedTagName) {
                case 'SPAN':
                    clickedImgSrc_data = $(clickedElement).parent('img').data('slide');
                    break;
                case 'DIV':
                    clickedImgSrc_data = $(clickedElement).find('img').data('slide');
                    break;
                default:
                    clickedImgSrc_data = $(clickedElement).data('slide');
            }
            const targetImg = $('.design-container').find('.active');
            var active_data = targetImg.data('slide')
            if(active_data !== clickedImgSrc_data){
                targetImg.removeClass('active')
                $('.design-container').find('img[data-slide='+clickedImgSrc_data+']').addClass('active')
            }
        });
	});
})(jQuery);