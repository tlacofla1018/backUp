$(function(){
    $("#openBtn").on('click', function(){
        $('#popupBox').addClass('show');
    });
    $("#closeBtn").on('click', function(){
        $('#popupBox').removeClass('show');
    });
});

// 함수설정 맛보기
function goToPage (){                           // 함수를 선언할건데 그 이름은 goToPage야
    let name = prompt('성함을 입력해주세요');

    // 옛날 방법
    alert('안녕하세요' + name + '님 환영합니다.')     // 문자열과 변수를 연산할 수 있음
    // 요즘 방법
    alert(`안녕하세요 ${name}님 환영합니다!`) // 이때 ${변수네임}을 placeholder라고 부름
}

// ``(백틱) 사용법 shift키 없이 ~키 누르기