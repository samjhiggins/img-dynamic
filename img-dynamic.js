/*
description:
looks for img-dynamic images and sets them to the appropriate image src depending on screen width
hides the image if no appropriate image found
fires on resize as well as on load of the script

usage:
<img src="http://example.net/xs.jpg" class="img-dynamic"
    data-xs-src="http://example.net/xs.jpg"
    data-sm-src="http://example.net/sm.jpg"
    data-md-src="http://example.net/md.jpg"
    data-lg-src="http://example.net/lg.jpg"/>

*/

$(function () {

    /*
    look for the images and set the appropriate src
    */
    function imgDynamicSetImages() {
        $('.img-dynamic').each(function () {
            var width = window.innerWidth;

            // default to mobile
            var src = $(this).data('xs-src');

            // small device breakpoint
            if (width > 768) {
                src = $(this).data('sm-src');
            }

            // medium device breakpoint
            if (width > 992) {
                src = $(this).data('md-src');
            }

            // large device breakpoint
            if (width > 1200) {
                src = $(this).data('lg-src');
            }

            // set the source, otherwise hide the image
            if (src) {
                $(this).show();
                $(this).attr('src', src);
            }
            else {
                $(this).hide();
            }

        })
    }

    // event handler for window resize
    $(window).on('resize', function () {
        imgDynamicSetImages()
    });

    imgDynamicSetImages();
});
