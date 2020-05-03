'use strict';

$(document).ready(function () {
  $('.VivaTimeline').vivaTimeline({
    carousel: true,
    carouselTime: 3000,
  });
});
(function () {
  var mySwiper1 = new Swiper('#swiper1', {
    navigation: {
      prevEl: '.sl1',
      nextEl: '.sr1',
    },
  });
  var mySwiper2 = new Swiper('#swiper2', {
    navigation: {
      nextEl: '.sr2',
      prevEl: '.sl2',
    },
  });
  var mySwiper3 = new Swiper('#swiperSlide', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  new Swiper('#swiper4', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
  $('#notice .fa-chevron-left').click(function () {
    mySwiper1.slidePrev();
  });
  $('#notice .fa-chevron-right').click(function () {
    mySwiper1.slideNext();
  });
  $('#news .fa-chevron-left').click(function () {
    mySwiper2.slidePrev();
  });
  $('#news .fa-chevron-right').click(function () {
    mySwiper2.slideNext();
  });
  mySwiper3.el.onmouseover = function () {
    mySwiper3.autoplay.stop();
  };
  mySwiper3.el.onmouseout = function () {
    mySwiper3.autoplay.start();
  };
  if ($('.card')) {
    $('.card').addClass('shadow');
  }
  if ($('header')) {
    $('header').removeClass('container').addClass('container-fluid');
  }
  function border_bottom(el, parentEl) {
    var wScroll = window.scrollY;
    var creen = window.innerHeight;
    var elScroll = $(parentEl).offset().top - creen + 150;
    if (wScroll > elScroll) {
      $(el).addClass('orangeBorderBottom');
    }
  }
  function animateCss(elm, css) {
    var el = $(elm);
    el.children().each((index, el) => {
      var wScroll = window.scrollY;
      var innerH = window.innerHeight;
      var $el = $(el);
      var elScroll = $el.offset().top;
      if (wScroll + innerH - $el.height() > elScroll) {
        $el.addClass(css);
      }
    });
  }
  function animateCss2(elm, css1, css2) {
    var el = $(elm);
    el.children().each((index, el) => {
      var wScroll = window.scrollY;
      var innerH = window.innerHeight;
      var $el = $(el);
      var elScroll = $el.offset().top;
      if (wScroll + innerH - $el.height() > elScroll) {
        if (index == 0 || index==1) {
          $el.addClass(css1);
        } else {
          $el.addClass(css2);
        }
      }
    });
  }
  function animateItem($el, index) {
    let el = $($el);
    return new Promise((resolve) => {
      let css = '';
      if (index % 2 == 0) {
        css = 'animated fadeInLeft visible';
      } else {
        css = 'animated fadeInRight visible';
      }
      el.addClass(css).on('animationend', resolve);
    });
  }
  async function animateList(elm) {
    var el = $(elm);
    var wScroll = window.scrollY;
    var innerH = window.innerHeight;
    var elHeight = el.height();
    var elScroll = el.offset().top;
    if (wScroll + innerH - elHeight > elScroll) {
      for (let i = 0; i < $(el).children().length; i++) {
        await animateItem($(el).children()[i], i);
      }
    }
  }
  function isMobile(){
    let mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    return mobile != null;
  }
  $(window).on('scroll', () => {
    let mobile = isMobile()
    if(!mobile){
      border_bottom('#news2>div>div>div>h2>span', '#news2');
      border_bottom('#advantage>div:first-child>div:first-child>h2>span', '#advantage');
      animateCss('.VivaTimeline>dl', 'animated flipInX visible');
      animateCss2('#business>ul', 'animated fadeInDown visible', 'animated fadeInUp visible');
      animateList('#news2>div>div:nth-child(2)');
    }
    
  });
  $(window).on('load',()=>{
    let mobile = isMobile()
    if (!mobile) {
      $('#business>ul>li').css({opacity: 0});
      $('.VivaTimeline>dl>dd').css({visible: 'hidden'});
      $('#news2>div>div:nth-child(2)>div').css({opacity:0})
    }
  })
})();
