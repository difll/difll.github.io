function showMenu(toggleId, menuId) {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        })
    }
}
showMenu('burger', 'menu');


const heroSlider = new Swiper('.hero_container', {
    autoplay: {
        delay: 10000,
        disableOnInterction: false,
    },
    loop: true,
    grabCursor: true,

    effect: 'cube',

    navigation: {
        nextEl:".arrow-right",
        prevEl:".arrow-left"
    },

    keybord: {
        enable: true,
    },

    cubeEffect: {
        shadow: true,
        slideShadows: 20,
        shadowScale: 0.9,
    }
});

const brawlStars = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
})

brawlStars.reveal('.item-shop', {
    origin: 'left',
    interval: 200,
})