$(function(){
    $("#openBtn").on('click', function(){
        $('#popupBox').addClass('show');
    });
    $("#closeBtn").on('click', function(){
        $('#popupBox').removeClass('show');
    });
});