$(function(){
    $('#openBtn').on('click', function(){
        $('#popupBox').addClass('pop');
    });
});
$(function(){
    $('#popupBox > span').on('click', function(){
        $('#popupBox').removeClass('pop');
    });
});