'use strict';

{
  var swiper1 = new Swiper('#swiperSlide', {
    loop: true,
    grabCursor: true,
    roundLengths: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      autoHeight: true
      /* bulletClass : 'my-bullet' */
    }
  });
  for (var i = 0; i < swiper1.pagination.bullets.length; i++) {
    swiper1.pagination.bullets[i].onmouseover = function () {
      this.click();
    };
  }
}