
// sub-artist 슬라이드----- 
var subArtistMainswiper = new Swiper("#sub-artist-main-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: "#sub-artist-main-swiper .swiper-pagination",
        clickable: true,
    },
});

function changeImage(clickedFrameId) {
    const largeFrame = document.getElementById('sub-artist-frame1');
    const frame2 = document.getElementById('sub-artist-frame2');
    const frame3 = document.getElementById('sub-artist-frame3');

    // 현재 이미지 저장
    const largeImageSrc = largeFrame.querySelector('img').src;
    const frame2ImageSrc = frame2.querySelector('img').src;
    const frame3ImageSrc = frame3.querySelector('img').src;

    // 클릭된 프레임에 따라 이미지 교환
    if (clickedFrameId === 'sub-artist-frame2') {
        largeFrame.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = largeImageSrc;
    } else if (clickedFrameId === 'sub-artist-frame3') {
        largeFrame.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = largeImageSrc;
    }
}

var subArtistDiscoswiper = new Swiper("#sub-artist-disco-swiper", {
    slidesPerView: 3,
    slidesPerGroup : 1,
    centeredSlides: false, 
    spaceBetween: 22,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".sub-artist-info-3 .swiper-button-next",
        prevEl: ".sub-artist-info-3 .swiper-button-prev",
    },
});

// sub-artist 슬라이드-----