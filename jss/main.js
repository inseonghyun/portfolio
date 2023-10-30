var charts = $('.charts');
var chart = $('.chart');
var chartOST = chart.offset().top - 700;
// var excuted = false;
// console.log(excuted);

$(window).scroll(function () {
    var currentSCT = $(this).scrollTop();
    if (currentSCT >= chartOST) {
        if (!charts.hasClass('active')) {
            animateChart();
            charts.addClass('active');
        }
    }
});
function animateChart() {
    chart.each(function () {
        var item = $(this);
        var title = item.find('h2');
        var targetNum = title.attr('data-num');
        var circle = item.find('line');

        $({ rate: 0 }).animate(
            { rate: targetNum },
            {
                duration: 1500,
                progress: function () {
                    var now = this.rate;
                    var amount = 300 - (300 * now) / 100;

                    title.text(Math.floor(now));
                    circle.css({ strokeDashoffset: amount });
                },
            }
        );
    }); //chart each
}