// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').show();
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').hide();
//     });
// });
// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').fadeIn(1000);
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').fadeOut(1000);
//     });
// });
// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').slideDown(1000);
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').slideUp(1000);
//     });
// });
// 제이쿼리는 무겁다 가능한 한 css로 처리한다
$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('pop');
    });
    $('#popup-box > span').on('click', function(){
        $('#popup-box').removeClass('pop');
    });
});