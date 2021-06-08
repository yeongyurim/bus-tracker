const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__title', {delay:200});
sr.reveal('.home__scroll', {delay: 200});
sr.reveal('.home__map', {origin:'right', delay: 400});
