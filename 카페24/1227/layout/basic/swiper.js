let mainSwiper = new Swiper('.mainB-swiper', {
    effect: "fade", // 페이드 효과
    loop: true, // 무한 루프
    autoplay: {
        delay: 2500, // 자동 재생 시간 설정
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
    },
    speed: 1000, // 페이드 속도 (1초)
    fadeEffect: {
        crossFade: true // 슬라이드 교차 시 부드럽게 페이드
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    }
});

let fakeSwiper = new Swiper('.fake-swiper', {
    effect: "fade", // 페이드 효과
    loop: true, // 무한 루프
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 1000,
    fadeEffect: {
        crossFade: true
    }
});