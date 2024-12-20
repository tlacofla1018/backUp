// 제이쿼리
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
    $('.search-btn').on('click', function(){
        $('.search-popup').addClass('show');
    });
    $('.search-bar .close-btn').on('click', function(){
        $('.search-popup').removeClass('show');
    });

    //---------- 로그인/로그아웃 메뉴 ----------
    // 로그인 메뉴
    toggleMenu('.login-menu', '.login-menu-btn');
    // 로그아웃 메뉴
    toggleMenu('.logoff-menu', '.logoff-menu-btn');

    function toggleMenu(menuSelector, buttonSelector) {
        const $menu = $(menuSelector);
        const $button = $(buttonSelector);
    
        // 버튼 클릭 시 메뉴 토글
        $button.on('click', function (e) {
            e.stopPropagation();
            $menu.toggleClass('show');
        });
    
        // 메뉴 영역 밖 클릭 시 닫기
        $(document).on('click', function (e) {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$button.is(e.target)) {
                $menu.removeClass('show');
            }
        });
    
        // 메뉴에서 마우스 벗어나면 닫기
        $menu.on('mouseleave', function () {
            $menu.removeClass('show');
        });
    }

    //---------- [슬릭] 퀵버튼 최근 본 상품 ----------
    $('.productrecent').slick({
        infinite: true,       // 무한 스크롤
        slidesToShow: 1,      // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,    // 한 번에 스크롤할 슬라이드 개수
        autoplay: true,       // 자동 재생
        autoplaySpeed: 2000,  // 2초마다 슬라이드 전환
        arrows: true,        // 화살표
        prevArrow: '<button class="slick-prev"><img src="/img/prevIcon.svg" alt="이전 상품"></button>', // 커스텀 화살표 버튼
        nextArrow: '<button class="slick-next"><img src="/img/nextIcon.svg" alt="다음 상품"></button>', // 커스텀 화살표 버튼
        dots: true,          // 점 네비게이션
        customPaging: function (slider, i) {
            return `<img src="/img/dotOff.svg" alt="${i + 1}번째 상품" class="custom-dot">`;
        }
    });
});


// $(function() {
//     $('#tab-1').show();
//     $('.BTN01').click(function() {
//         $('#tab-1').show();
//         $('#tab-2').hide();
//         $('#tab-3').hide();
//         $('.tabBTN').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.BTN02').click(function() {
//         $('#tab-2').show();
//         $('#tab-1').hide();
//         $('#tab-3').hide();
//         $('.tabBTN').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.BTN03').click(function() {
//         $('#tab-3').show();
//         $('#tab-1').hide();
//         $('#tab-2').hide();
//         $('.tabBTN').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// [호버] 아이콘 변경
// qbtn에 호버 이벤트 추가
document.querySelectorAll('.qbtn').forEach(qbtn => {
    const basketIcon = qbtn.querySelector('.basketIcon'); // basketIcon 선택
    const tellIcon = qbtn.querySelector('.tellIcon');     // tellIcon 선택

    qbtn.addEventListener('mouseenter', () => {
        if (basketIcon) basketIcon.src = '/img/basketIcon-hover.svg'; // 호버 시 변경
        if (tellIcon) tellIcon.src = '/img/tellIcon-hover.svg';
    });
    qbtn.addEventListener('mouseleave', () => {
        if (basketIcon) basketIcon.src = '/img/basketIcon.svg'; // 원래 이미지 복원
        if (tellIcon) tellIcon.src = '/img/tellIcon.svg';
    });
});

// 안마의자
var swiperChair = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

