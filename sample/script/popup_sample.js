// 본 파일은 웹디자인 기능사 시험을 위한 자료입니다.




// ---------- 팝업 ----------
// 모달 팝업과 레이어 팝업을 혼동하지 않도록 주의해야 합니다.
// 시험지의 와이어프레임에서 팝업의 위치를 잘 확인하셔야 합니다.

// 모달 팝업
$(function(){
    $('.modal_open').on('click', function(){
        $('.modal_popup').addClass('show');
    });
    $('.modal_close').on('click', function(){
        $('.modal_popup').removeClass('show');
    });
});

// 레이어 팝업
$(function(){
    $('.layer_open').on('click', function(){
        $('.layer_popup').addClass('show');
    });
    $('.layer_close').on('click', function(){
        $('.layer_popup').removeClass('show');
    });
});