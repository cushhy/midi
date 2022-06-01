$(document).ready(function () {

    $('.preview__slider').slick({
        dots: true,
    });

    $('.item__more').click(function () {
        $('.benefits__more').toggleClass('active');
    });

    $('.question__title').click(function () {
        if ($('.questions__list').hasClass('one')) {
            $('.question__title').not($(this)).removeClass('active')
            $('.question__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('#nav_toggle').removeClass('active');
        $('nav').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 90)
    })

});