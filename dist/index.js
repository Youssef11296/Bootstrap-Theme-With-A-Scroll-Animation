// Scroll Reveal 
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
})
sr.reveal('.left-showcase', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})
sr.reveal('.right-showcase', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
})
sr.reveal('.showcase .anchor', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom',
    distance: '100px'
})
sr.reveal('.testimonial', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: .2
})
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: .2
})
sr.reveal('.left-text', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: .2
})
sr.reveal('.right-text', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: .2
})

// Smooth Scroll By Jquery
$(document).ready(() => {
    $('nav ul li a').on('click', function (e) {
        if (this.hash !== '') {
            const hash = this.hash;
            if (hash === "#home") {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100 + 'px'
                })
            } else {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000)
            }
        }
    })
})