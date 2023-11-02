$(function () {
    const progressWrap = $('.chart');
    const animaionOST = $('.skill_bar').offset().top - 600;
    let isAni = false;
    $(window).on('scroll', function () {
        //윈도우의 스크롤 탑값이 animaionOST값보다 크거나 같고 isAni의 값이 false 면 조건문 실행 => 윈도우의 스크롤바가 스킬바섹션 안으로 진입했고 애니메이션은 미실행 상태
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
                            //progressText.text(Math.floor(now) + '%');
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
}); // jQuery

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
