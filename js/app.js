(($) => {
    //Typing effect
    new Typed($('#dinamic-type').text('').get(0), {
        strings: ['.NET CORE?', 'NoSQL?', 'gente boa?', 'autonomia?', 'squads?', 'flexibilidade?'],
        typeSpeed: 140,
        loop: true,
        backDelay: 1500,
        cursorChar: '_'
    });

    //Opened jobs
    $('.section-open-jobs-menu-item','.section-open-jobs-menu').each(function() {
        $(this).on('click', function(event) {
            $(
                $(this)
                .addClass('section-open-jobs-menu-item-selected')
                .siblings()
                .removeClass('section-open-jobs-menu-item-selected')
                .end()
                .find('.section-open-jobs-menu-item-link').attr('href')
            )
            .show().siblings().hide();

            event.preventDefault();
        });
    }).first().trigger('click');
})(jQuery);