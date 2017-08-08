'use strict';

$('.btr-nav > li').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

var footHeight = $('.btr-foot-row .math-heigth').height()
$('.footer .col-sm-3').height(footHeight)

/* 返回顶部 js start */
$.fn.gotop = function() {
  var $backTop = this.$backTop = $('<div class="gotop"><div class="iconfont icon-icon-arrow-left"></div>TOP</div>');
  $('body').append($backTop);

  $backTop.on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
  });

  var timmer = null;
  $(window).on("scroll touchmove", function() {
    var d = $(window).scrollTop(),
      e = $(window).height();
      e < d ? $backTop.css("display", "block") : $backTop.css("display", "none");
  });
};
$.fn.gotop();
/* 返回顶部js end */

if ($(document.body).outerHeight(true) < $(window).height()) {
  $('.footer').css({
    position: 'fixed',
    width: '100%',
    bottom: 0
  }).before('<div style="height: '+ $('.footer').height() +'px"></div>')
}
