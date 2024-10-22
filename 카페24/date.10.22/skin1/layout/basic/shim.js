// -------------------- 카테고리 탭 ------------------------
$(function() {
    $('#tab-1').show();
    $('.BTN01').click(function() {
        $('#tab-1').show();
        $('#tab-2').hide();
        $('#tab-3').hide();
        $('.tabBTN').removeClass('active');
        $(this).addClass('active');
    });
    $('.BTN02').click(function() {
        $('#tab-2').show();
        $('#tab-1').hide();
        $('#tab-3').hide();
        $('.tabBTN').removeClass('active');
        $(this).addClass('active');
    });
    $('.BTN03').click(function() {
        $('#tab-3').show();
        $('#tab-1').hide();
        $('#tab-2').hide();
        $('.tabBTN').removeClass('active');
        $(this).addClass('active');
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

