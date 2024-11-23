$(document).ready(function() {
    const $title = $(".loading_page_container .title");
    const listHTML = $title.html(); // HTML 가져오기
    const listItems = listHTML.split("<br>"); // <br> 기준으로 나누기
    $title.empty(); // 기존 내용 초기화

    // 각 항목을 감싸서 .title에 추가
    listItems.forEach(item => {
        const newItem = `
            <div class="title_mask">
                <span class="title_line">${item}</span>
            </div>`;
        $title.append(newItem);
    });

    // 모든 항목을 추가한 후 .title과 #loading_page를 서서히 사라지게 함
    setTimeout(() => {
        $(".title, #loading_page").fadeOut(1000); // 1초 동안 서서히 사라짐
    }, 3000); // 3초 기다린 후 실행
});