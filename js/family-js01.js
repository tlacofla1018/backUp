// $(function(){
//     $('#family button').on('click', function(){
//         $(this).toggleClass('hover')
//         $('#family ul').toggleClass('slide')
//     });
// });
document.querySelector('#family button').addEventListener('click', function(){
    this.classList.toggle('hover'),
    document.querySelector('#family ul').classList.toggle('slide')
});