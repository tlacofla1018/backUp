$(function(){
    $('#stop-btn').on('click', function(){
        $('.any').css('background-color', '#fff');
    });
    $('#start-btn').on('click', function(){
        $('.any').css({'background-color' : '#333', 'border-radius' : '40px'});
    });
});
// 복수로 들어갈 때는 제이슨 형태로 들어간다