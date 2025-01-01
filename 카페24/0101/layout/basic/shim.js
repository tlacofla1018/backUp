// -------------------- jQuery --------------------

$(document).ready(function () {
    //---------- [슬릭] 헤더 검색순위 ----------
    $('.search-rank-slider').slick({
        infinite: true,       // 무한 스크롤
        slidesToShow: 1,      // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,    // 한 번에 스크롤할 슬라이드 개수
        autoplay: true,       // 자동 재생
        autoplaySpeed: 2000,  // 2초마다 슬라이드 전환
        arrows: false,        // 화살표 비활성화
        dots: false,          // 점 네비게이션 비활성화
        vertical: true,       // 세로 방향 슬라이드
    });

    //---------- 검색창 팝업 ----------
    $('.search-btn').on('click', function () {
        $('.search-popup').addClass('show');
    });
    $('.search-bar .close-btn').on('click', function () {
        $('.search-popup').removeClass('show');
    });

    //---------- 로그인/로그아웃 메뉴 ----------
    toggleMenu('.login-menu', '.login-menu-btn');
    toggleMenu('.logoff-menu', '.logoff-menu-btn');

    function toggleMenu(menuSelector, buttonSelector) {
        const $menu = $(menuSelector);
        const $button = $(buttonSelector);

        $button.on('click', function (e) {
            e.stopPropagation();
            $menu.toggleClass('show');
        });

        $(document).on('click', function (e) {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$button.is(e.target)) {
                $menu.removeClass('show');
            }
        });

        $menu.on('mouseleave', function () {
            $menu.removeClass('show');
        });
    }

    //---------- [슬릭] 퀵버튼 최근 본 상품 ----------
    $('.productrecent').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="slick-prev"><img src="/img/icon/prevIcon.svg" alt="이전 상품"></button>',
        nextArrow: '<button class="slick-next"><img src="/img/icon/nextIcon.svg" alt="다음 상품"></button>',
        dots: true,
        customPaging: function (slider, i) {
            return `<img src="/img/icon/dotOff.svg" alt="${i + 1}번째 상품" class="custom-dot">`;
        }
    });
});





// -------------------- Java Script --------------------

// ---------- [호버] 아이콘 변경 ----------
document.querySelectorAll('.qbtn').forEach(qbtn => {
    const basketIcon = qbtn.querySelector('.basketIcon');
    const tellIcon = qbtn.querySelector('.tellIcon');

    qbtn.addEventListener('mouseenter', () => {
        if (basketIcon) basketIcon.src = '/img/icon/basketIcon-hover.svg';
        if (tellIcon) tellIcon.src = '/img/icon/tellIcon-hover.svg';
    });

    qbtn.addEventListener('mouseleave', () => {
        if (basketIcon) basketIcon.src = '/img/icon/basketIcon.svg';
        if (tellIcon) tellIcon.src = '/img/icon/tellIcon.svg';
    });
});



// ---------- [메인] 메인배너 ----------

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



// ---------- [메인] 신제품 내부 슬라이드 ----------

// li 너비 및 gap 총합 계산 후 swiper-slide에 적용하는 함수
function calculateSlideWidth(slideClass, scrollbarClass) {
    const swiperSlide = document.querySelector(`${slideClass} .swiper-slide`);
    const listItems = swiperSlide.querySelectorAll("li");
    const computedStyle = getComputedStyle(swiperSlide);
    const gap = parseInt(computedStyle.gap) || 0; // gap 값 가져오기

    let totalWidth = 0;

    listItems.forEach((li) => {
        totalWidth += li.offsetWidth; // 각 li의 너비값 합산
    });

    // li의 gap 포함한 총합 계산
    totalWidth += gap * (listItems.length - 1);

    swiperSlide.style.width = `${totalWidth}px`; // swiper-slide에 총합 너비 적용

    // Swiper 초기화
    new Swiper(slideClass, {
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: scrollbarClass,
            draggable: true,
        },
        mousewheel: true,
    });
}

// 슬라이드 각각 호출
calculateSlideWidth(".new-swiper1", ".new-scrollbar1");
calculateSlideWidth(".new-swiper2", ".new-scrollbar2");
calculateSlideWidth(".new-swiper3", ".new-scrollbar3");
calculateSlideWidth(".new-swiper4", ".new-scrollbar4");
calculateSlideWidth(".new-swiper5", ".new-scrollbar5");