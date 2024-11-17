// 본 파일은 웹디자인 기능사 시험을 위한 자료입니다.



// ---------- 슬라이드 ----------
// 탭키로 이동시 다음 이미지가 제대로 불러와지지 않는 오류가 있습니다.
// [Tip] 좌우는 width와 margin-left, 상하는 height와 margin-top

// 좌우 슬라이드
$(function(){
    let slideWidth = $('.slide_banner_lr ul li').width();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slide_banner_lr ul').animate({'marginLeft' : dir + slideWidth}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-left', 0);
        });
    }
});

// 상하 슬라이드
$(function(){
    let slideHeight = $('.slide_banner_tb ul li').height();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slide_banner_tb ul').animate({'marginTop' : dir + slideHeight}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-top', 0);
        });
    }
});



// ---------- 페이드 인아웃 ----------
// 탭키로 이동시 다음 이미지가 제대로 불러와지지 않는 오류가 있습니다.
$(function(){
    let count = 0;
    $('.fade_banner ul li').eq(count).fadeIn(300);

    setInterval(function(){
        count++;
        count %= $('.fade_banner ul li').length;
        $('.fade_banner ul li').eq(count).fadeIn(500).siblings().fadeOut(500);
    }, 3000);
});