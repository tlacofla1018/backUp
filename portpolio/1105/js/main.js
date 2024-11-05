document.addEventListener('DOMContentLoaded', function() {
    const listHTML = $(".title").html();
    const listItems = listHTML.split("<br>");
    $(".title").html("");

    // 각 항목을 감싸서 .Title에 추가
    $.each(listItems, function(i, v) {
        const item =
            '<div class="Title-mask"><span class="Title-line">' + v + "</span></div>";
        $(".Title").append(item);
    });

    // 모든 항목을 추가한 후 .Title과 #loading_page를 동시에 서서히 사라지게 함
    setTimeout(() => {
        $(".Title, #loading_page").fadeOut(1000); // 1000ms = 1초 동안 서서히 사라짐, 원하는 시간으로 조정 가능
    }, 3000); // 효과 시작 후 3초 기다린 후 실행

    var mouseX, mouseY;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var traX, traY;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 350) + 10;
        traY = ((4 * mouseY) / 350) + 20;
    
        var elements = document.querySelectorAll('.title, .title.lg, .line');
        elements.forEach(function(element) {
            if (element.classList.contains('line')) {
                element.style.backgroundPosition = `center, ${traX}% ${traY}%`;
            } else {
                element.style.backgroundPosition = traX + "% " + traY + "%";
            }
        });
    
        var titleSpans = document.querySelectorAll('.title span, .title.lg span');
        titleSpans.forEach(function(span) {
            span.style.backgroundPosition = traY + "% " + traX + "%";
        });
    });

    const slider = document.querySelector('.slider');

    function activate(e) {
        const items = document.querySelectorAll('.item');
        e.target.matches('.next') && slider.append(items[0])
        e.target.matches('.prev') && slider.prepend(items[items.length-1]);
    }

    document.addEventListener('click',activate,false);

    document.querySelector(".progress-bar-one").style.width = "0%";

    window.addEventListener("scroll", function () {
        
        const scrollTop = document.querySelector("html").scrollTop;
        const scrollHeight = document.querySelector("html").scrollHeight;
        const clientHeight = document.querySelector("html").clientHeight;

        console.log("scrollTop: ", scrollTop);
        console.log("clientHeight: ", clientHeight);
        console.log("scrollHeight: ", scrollHeight);

        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
        document.querySelector(".progress-bar-one").style.width = progress + "%";
    });
});