$(function () {
    const progressWrap = $('.chart');
    const animaionOST = $('.skill_bar').offset().top - 600;
    let isAni = false;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= animaionOST && !isAni) {
            progressAnimation();
        }
    });
    function progressAnimation() {
        progressWrap.each(function (i, o) {
            const $this = $(this);
            const progressBar = $this.find('.bar');
            const progressText = $this.find('.rate');
            const progressRate = progressText.attr('data-rate')
            console.log(progressRate);
            progressBar.stop().animate({ width: progressRate + '%' }, 2500);

            const textFn = function () {
                $({ rate: 0 }).stop().animate(
                    { rate: progressRate },
                    {
                        duration: 2000, progress: function () {
                            let now = this.rate;
                            progressText.text(Math.floor(now));
                        },
                        complete: function () {
                            isAni = true;
                        },
                    }
                );
            }; textFn();
        });
    };
});

const pics = $(".pic");
const lightbox = $("#lightbox");
const lightImg = $("#lightImage");
pics.on('click', function () {
    const bigLocation = $(this).attr("data-src");
    lightImg.load(bigLocation);
    lightbox.css('display', 'block');
    $('html').addClass('all_scrollFixed');
});

lightbox.on('click', function () {
    lightbox.css('display', 'none');
    $('html').removeClass('all_scrollFixed');
})

//ani
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('logo'), // Required
    path: './/logo_ani.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})
var animation2 = bodymovin.loadAnimation({
    container: document.querySelector('.logo'), // Required
    path: '../logo_ani.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})

var animation3 = bodymovin.loadAnimation({
    container: document.querySelector('.l_img'), // Required
    path: '../about_ani.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})

var animation4 = bodymovin.loadAnimation({
    container: document.querySelector('.banner_img'), // Required
    path: '../main_ani.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})
