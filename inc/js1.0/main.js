/**
 * Created by Administrator on 2016/6/18.
 */

//tab导航定位显示区
var mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 4.5,
    onTap: function() {
        mySwiper3.slideTo(mySwiper2.clickedIndex)
    }
})

var $wrap = $('#swiper-container3'); //活动对象
var $ullist = $('.tab_box'); //切换的table  
var liheight = $ullist.eq(0).children().outerHeight(); //单个li的高度
var mySwiper3 = new Swiper('#swiper-container3', {
    onSlideChangeStart: function(a, b, c) {
        updateNavPosition()
        setTimeout(function() { //倒计时,保证所有动作完成后执行
            var h = $ullist.eq(a.activeIndex).children().length * liheight; //计算出li的数量 X li的高度
            $wrap.css('height', h);
        }, 0);
    }
})

function updateNavPosition() {
    $('#swiper-container2 .active-nav').removeClass('active-nav');
    var activeNav = $('#swiper-container2 .swiper-slide')
        .eq(mySwiper3.activeIndex).addClass('active-nav');
    if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > mySwiper2.activeIndex) {
            var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
            mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
        } else {
            mySwiper2.slideTo(activeNav.index())
        }

    }
}


//tab导航吸附与懒加载
$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $(".index_top").outerHeight()) {
            $("#nav").css({
                "position": "fixed",
                "top": "0"
            });
        } else {
            $("#nav").css({
                "position": "relative",
                "top": "0",
                "z-index": "2"
            });
        }
    });
    $(".lazyload").lazyload({
        placeholder: "img1.0/yujiazai.png",
        effect: "fadeIn"
    });
});