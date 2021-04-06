$(document).ready(function() {
    $('.link-contact').click(function(e){
        e.preventDefault();
        let id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 110
        }, 1200);
    });

    $('.link-service').click(function(e){
        e.preventDefault();
        let id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 110
        }, 1200);
    });

    $('.link-about').click(function(e){
        e.preventDefault();
        let id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 110
        }, 1200);
    });
});  