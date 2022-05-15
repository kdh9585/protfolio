window.onload = function () {
    const content = "안녕하세요:) \n 프론트엔드 개발자 \n 강동휘 입니다.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 150)
};
// progress Bar
$(document).ready(function () {
    let bar1 = new ProgressBar.Circle(circle1, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#e44d26',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar2 = new ProgressBar.Circle(circle2, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1f62ae',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar3 = new ProgressBar.Circle(circle3, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f0db4f',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar4 = new ProgressBar.Circle(circle4, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar5 = new ProgressBar.Circle(circle5, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#41b883',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar6 = new ProgressBar.Circle(circle6, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar7 = new ProgressBar.Circle(circle7, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ac50c3',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar8 = new ProgressBar.Circle(circle8, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#4fc7ec',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar9 = new ProgressBar.Circle(circle9, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f57c2c',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar10 = new ProgressBar.Circle(circle10, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#cc6699',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    bar1.animate(.9); // Number from 0.0 to 1.0
    bar2.animate(.85); // Number from 0.0 to 1.0
    bar3.animate(.8); // Number from 0.0 to 1.0
    bar4.animate(.7); // Number from 0.0 to 1.0
    bar5.animate(.5); // Number from 0.0 to 1.0
    bar6.animate(.6); // Number from 0.0 to 1.0
    bar7.animate(.6); // Number from 0.0 to 1.0
    bar8.animate(.9); // Number from 0.0 to 1.0
    bar9.animate(.9); // Number from 0.0 to 1.0
    bar10.animate(.9); // Number from 0.0 to 1.0

    // swiper
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // 메뉴클릭 이동
    let gnb_a = $('.gnb a');

    $(gnb_a).click(function (event) {
        event.preventDefault();
        let hash = $(this).attr('href');
        let pos = $(hash).offset().top - 100;
        $('html, body').animate({
            scrollTop: pos
        }, 1000);
    })
    // chart.js
    const red = "rgb(255, 99, 132)";
    const color = Chart.helpers.color;
    const config = {
        type: 'radar',
        data: {
            labels: [
                ['Eating', 'Dinner'],
                ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'
            ],
            datasets: [{
                label: 'My dataset',
                backgroundColor: color(red).alpha(0.2).rgbString(),
                borderColor: red,
                pointBackgroundColor: red,
                data: [
                    80,
                    90,
                    60,
                    65,
                    78,
                    97,
                    55
                ]
            }]
        },
        options: {
            scale: {
                gridLines: {
                    circular: true
                },
                ticks: {
                    beginAtZero: true
                },
            }
        }
    };

    window.onload = function () {
        window.myRadar = new Chart(document.getElementById('chart'), config);
    };
});