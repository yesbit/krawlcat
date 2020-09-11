// FAQ
$('.faq-question').on('click', function(evt) {
    let container = $(this).parent().parent();
    if(container.hasClass('open')) {
        $('#unitrade-faq .faq-answer-content').hide();
        container.removeClass('open');
        return true;
    }
    $('#unitrade-faq ul li').removeClass('open');
    $('#unitrade-faq .faq-answer-content').hide();
    container.addClass('open');
    $(container.children('.faq-answer-content')[0]).fadeIn('0.35s');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});