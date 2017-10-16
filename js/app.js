(function(){
    //Typing effect
    var typed = new Typed($('#dinamic-type').text('').get(0), {
        strings: ['.NET CORE?', 'NoSQL?', 'gente boa?', 'autonomia?', 'squads?', 'flexibilidade?'],
        typeSpeed: 140,
        loop: true,
        backDelay: 1500,
        cursorChar: '_'
    });
})();