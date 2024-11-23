document.addEventListener('DOMContentLoaded', function() {
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
});