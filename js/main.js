// ハンバーガーメニュー
$(".hamburger-btn").on("click", function (e) {
    $(".hamburger-nav").slideToggle();
});

$(window).on("resize", function () {
    if ($(window).width() >= 768) {
        $(".hamburger-nav").hide();
    }
});


// カルーセル
$('.hero-slick').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効
    dots: false, // ドットを表示
    fade: true, // フェードで切り替え
});


// タブ
$('#smarttab').smartTab({
    autoAdjustHeight: false,
    enableUrlHash: false 
});


// スワイパー　PC表示
var swiper = new Swiper('.campaign-swiper-pc', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    }
});

// スワイパー　SP表示
var swiperSp = new Swiper('.campaign-swiper-sp', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination-sp',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-btn-next-sp',
        prevEl: '.swiper-btn-prev-sp',
    },
});