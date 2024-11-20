const listHTML = $(".Title").html();
const listItems = listHTML.split("<br>");
$(".Title").html("");

// 각 항목을 감싸서 .Title에 추가
$.each(listItems, function(i, v) {
    const item =
        '<div class="Title-mask"><span class="Title-line">' + v + "</span></div>";
    $(".Title").append(item);
});

// 모든 항목을 추가한 후 .Title과 .landingPage를 동시에 서서히 사라지게 함
setTimeout(() => {
    $(".Title, .landingPage").fadeOut(1000); // 1000ms = 1초 동안 서서히 사라짐, 원하는 시간으로 조정 가능
}, 3000); // 효과 시작 후 3초 기다린 후 실행
