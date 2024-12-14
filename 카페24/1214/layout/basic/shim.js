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

// 안마의자
var swiperChair = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

