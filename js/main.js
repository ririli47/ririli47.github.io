$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function() {
  $(window).scroll(function () {
      if ($(this).scrollTop() > $('#front').offset().top -500) {
        $('#front').stop().animate({ backgroundColor: "#ffcc00" }, 400);
        //$('.skills').css('background-color','orange');
      } else {
        $('#front').stop().animate({ backgroundColor: "#ffffff" }, 400);
      }
      if ($(this).scrollTop() > $('#back').offset().top -500) {
        $('#back').stop().animate({ backgroundColor: "#ccff00" }, 400);
        //$('.skills').css('background-color','orange');
      } else {
        $('#back').stop().animate({ backgroundColor: "#ffffff" }, 400);
      }
  });
})
