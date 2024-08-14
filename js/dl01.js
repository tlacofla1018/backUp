// $(document).ready(function(){
//     $('dl dt').click(function(){
//         $('+dd', this).slideDown(800).siblings('dd').slideUp(800);
//     })
//     $('dl dd').click(function(){
//         $(this).slideUp(800);
//     })
// });
$(function(){
    $('dl dt').on('click', function(){
        $('+dd', this).slideDown(800).siblings('dd').slideUp(800);
    })
    $('dl dd').on('click', function(){
        $(this).slideUp(800);
    })
});