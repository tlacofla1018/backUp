// $(document).ready(function(){
//     $('dl dt').click(function(){
//         $('+dd', this).slideDown(800).siblings('dd').slideUp(800);
//     })
//     $('dl dd').click(function(){
//         $(this).slideUp(800);
//     })
// });
// document는 html문서를 의미함
// $(document).ready(함수); 문서가 준비되면 함수를 실행할거야(터뜨릴거야)
// 함수이름(매개변수){실행문}
// 제이쿼리에서 주어(실행당하는 애)를 부를 땐 항상 달러싸인 $(""또는'')로 부른다
// 마우스 click, hover, on, remove 등등 어떠한 행동들이 터지는 걸 이벤트가 발생했다
// $('+dd', this) 여기서 this란 방금 이벤트 터뜨린 놈을 뜻함. 이 경우 dt를 뜻함
// 방금 전에 이벤트 터뜨린 놈의 바로 밑의 동생 dd야
// slideUp(ms) 즉 800이면 0.8초 slideUp하면 display: none; 상태가 됨
// 행위를 메써드라 하고 .찍고 행위를 이어 나가는 게 메써드 체인이라고 함
// siblings('') 그 외 형제들 중에 누구야

$(function(){
    $('dl dt').on('click', function(){
        $('+dd', this).slideDown(800).siblings('dd').slideUp(800);
    })
    $('dl dd').on('click', function(){
        $(this).slideUp(800);
    })
});
// $(function(){});는 $(document).ready(function(){});의 축약 버전
// 함수는 순차적 프로세스. 즉, 실행들이 묶여있는 덩어리를 의미함
// function(){}가 나오면 실행을 할 차례구나 하고 실행문 위치로 들어가면 됨
// 정적개체: 태그판에 실제로 존재하는 애들
// 동적개체: 태그판에 실제로 존재하지 않는 애들. 예를 들어 가상선택자
// 제이쿼리나 자바스크립트에서도 태그를 가상으로 만들어서 쓸 수 있음
// $('동적개체').click(function(){})형태의 클릭함수는 동적개체를 인식 못함
// 그래서 주어가 뭐가 들어올지 모르니 on이라는 매써드를 주로 사용함 .on('click', function(){}) 

// 똑같이 작동하지만 축약과 기능차이가 좀 있음