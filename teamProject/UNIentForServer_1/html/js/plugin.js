
// 메인 배너 슬라이드
var mainSwiper = new Swiper("#main-banner.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    speed:800,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
    nextEl: "#main-banner .swiper-button-next",
    prevEl: "#main-banner .swiper-button-prev",
    },
    pagination: {
    el: "#main-banner .swiper-pagination",
    clickable: true,
    },
});



// 아티스트 슬라이드
var artistSwiper = new Swiper("#artist-slide", {
    initialSlide: 2,
    spaceBetween: -80,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: "#artist-slide .swiper-pagination",
        clickable: true,
    },
    loop: true,
});



// 스케줄 캘린더 변우석 1번
// document.addEventListener('DOMContentLoaded', function() {
//     var today01 = new Date();
//     var calendar01 = new FullCalendar.Calendar(document.getElementById('calendar01'), {
//         headerToolbar: { center: 'title' },
//         locale: 'ko',
//         initialView: 'dayGridWeek',
//         initialDate: today01.toISOString().split('T')[0],
//         events: [
//             { 
//                 title: 'test1', 
//                 start: new Date(today01.setDate(today01.getDate() - 3)).toISOString().split('T')[0], 
//                 allDay: true 
//             },
//             { 
//                 title: 'test2', 
//                 start: new Date(today01.setDate(today01.getDate() - 2)).toISOString().split('T')[0], 
//                 allDay: true 
//             }
//         ],
//         eventDidMount: function(event) {
//             let dayNumber = event.el.closest('#calendar01 .fc-daygrid-day').querySelector('#calendar01 .fc-daygrid-day-number').classList.add('test');

//             if (dayNumber) { 
//                 dayNumber.style.color = '#ff0000'; 
//                 dayNumber.style.fontWeight = 'bold'; 
//             }
//         },
//         views: {
//             dayGridWeek: {
//                 dayHeaderContent: function(arg){
//                     const dayNames = ['일','월','화','수','목','금','토'];
//                     return dayNames[arg.date.getDay()];
//                 }
//             }
//         },
//         fixedWeekCount: true,
//         contentHeight: 250,
//         dayCellDidMount: function(info){ 
//             let dateTextContent = info.el.querySelector('#calendar01 .fc-daygrid-day-number').textContent;
//             info.el.querySelector('#calendar01 .fc-daygrid-day-number').textContent = dateTextContent.replace('일', '');
//             let dayNumberElem = info.el.querySelector('#calendar01 .fc-daygrid-day-number');
//             let dateText = dayNumberElem.textContent.trim();
//             if (dateText) {
//                 let paddedDate = dateText.padStart(2, '0'); 
//                 dayNumberElem.textContent = paddedDate;
//             }
//         }
//     });
//     calendar01.render();
// });
document.addEventListener('DOMContentLoaded', function() {
    var today01 = new Date();
    var calendar01 = new FullCalendar.Calendar(document.getElementById('calendar01'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today01.toISOString().split('T')[0],
        events: [
            { 
                title: 'test1', 
                start: new Date(today01.setDate(today01.getDate() - 3)).toISOString().split('T')[0], 
                allDay: true 
            },
            { 
                title: 'test2', 
                start: new Date(today01.setDate(today01.getDate() - 2)).toISOString().split('T')[0], 
                allDay: true 
            }
        ],
        eventDidMount: function(event) {
            console.log('Event Mounted:', event.event.title);
            
            let dayGridDay = event.el.closest('#calendar01 .fc-daygrid-day');
            if (dayGridDay) {
                let dayNumberElem = dayGridDay.querySelector('.fc-daygrid-day-number');
                
                if (dayNumberElem) {
                    console.log('Day Number Element Found:', dayNumberElem.textContent);
                    
                    // 숫자 스타일 적용
                    dayNumberElem.classList.add('test');
                    dayNumberElem.style.color = '#ff0000';
                    dayNumberElem.style.fontWeight = 'bold';
                } else {
                    console.log('Day Number Element Not Found for event:', event.event.title);
                }
            }
        },
        views: {
            dayGridWeek: {
                dayHeaderContent: function(arg) {
                    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
                    console.log('Day Header:', dayNames[arg.date.getDay()]);
                    return dayNames[arg.date.getDay()];
                }
            }
        },
        fixedWeekCount: true,
        contentHeight: 250,
        dayCellDidMount: function(info) { 
            // 날짜 셀이 렌더링된 후 실행되는 코드
            let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
            if (dayNumberElem) {
                // 날짜 텍스트에서 숫자만 남기고 월은 제거
                console.log('Original Day Number Text:', dayNumberElem.textContent);
                
                // 날짜 텍스트에서 일자만 남기기
                let date = new Date(info.date);
                let day = date.getDate().toString().padStart(2, '0'); // 일자를 01, 02 형식으로 변환
                console.log('Processed Day Number:', day);

                dayNumberElem.textContent = day; // 일자만 표시
            } else {
                console.log('Day Number Element Not Found in Day Cell');
            }
        }
    });
    calendar01.render();
});



// // 스케줄 캘린더 변우석 2번
// document.addEventListener('DOMContentLoaded', function() {
//     var today02 = new Date();
//     var calendar02 = new FullCalendar.Calendar(document.getElementById('calendar02'), {
//         headerToolbar: { center: 'title' },
//         locale: 'ko',
//         initialView: 'dayGridWeek',
//         initialDate: today02.toISOString().split('T')[0],
//         events: [
//             { 
//                 title: 'test1', 
//                 start: new Date(new Date(today02).setDate(today02.getDate() - 3)).toISOString().split('T')[0], 
//                 allDay: true 
//             },
//             { 
//                 title: 'test2', 
//                 start: new Date(new Date(today02).setDate(today02.getDate() - 2)).toISOString().split('T')[0], 
//                 allDay: true 
//             }
//         ],
//         eventDidMount: function(event) {
//             let dayGridDay = event.el.closest('.fc-daygrid-day');
//             if (dayGridDay) {
//                 let dayNumber = dayGridDay.querySelector('.fc-daygrid-day-number');
//                 if (dayNumber) {
//                     dayNumber.style.color = '#ff0000'; 
//                     dayNumber.style.fontWeight = 'bold'; 
//                 }
//             }
//         },
//         views: {
//             dayGridWeek: {
//                 dayHeaderContent: function(arg){
//                     const dayNames = ['일','월','화','수','목','금','토'];
//                     return dayNames[arg.date.getDay()];
//                 }
//             }
//         },
//         fixedWeekCount: true,
//         contentHeight: 250,
//         dayCellDidMount: function(info){ 
//             let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
//             if (dayNumberElem) {
//                 let dateText = dayNumberElem.textContent.trim().replace('일', '');
//                 let paddedDate = dateText.padStart(2, '0'); 
//                 dayNumberElem.textContent = paddedDate;
//             }
//         }
//     });
//     calendar02.render();
// });





// 릴리즈 슬라이드
// var releaseSwiper = new Swiper("#release-slide.mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true, 
//     coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//     },
//     pagination: {
//     el: "#release-slide .swiper-pagination",
//     },
//     loop: true,
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
//     slidesPerView: 3,
// });
var releaseSwiper = new Swiper("#release-slide.mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: "#release-slide .swiper-pagination",
    },
  });