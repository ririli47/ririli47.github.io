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
      //FRONTEND works
      if ($(this).scrollTop() > $('#front').offset().top -500) {
        $('#front').stop().animate({ backgroundColor: "#ffe993" }, 400);
      } else {
        $('#front').stop().animate({ backgroundColor: "#ffffff" }, 400);
      }
      //BACKEND SKILL
      if ($(this).scrollTop() > $('#back').offset().top -500) {
        $('#back').stop().animate({ backgroundColor: "#eeffab" }, 400);
      } else {
        $('#back').stop().animate({ backgroundColor: "#ffffff" }, 400);
      }
      //TECS
      if ($(this).scrollTop() > $('#tecs').offset().top -500) {
        $('#tecs').stop().animate({ backgroundColor: "#abfff2" }, 400);
      } else {
        $('#tecs').stop().animate({ backgroundColor: "#ffffff" }, 400);
      }
  });
});

//swiper初期化
$(function() {
  var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
  slidesPerView: 2,
	spaceBetween: 10,
	centeredSlides : true,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev'
  });
});



$(function() {
  var $allMsg = $('#title');
  var $wordList = $('#title').html().split("");
  $('#title').html("");
  $.each($wordList, function(idx, elem) {
    var newEL = $("<span/>").text(elem).css({ opacity: 0 });
    newEL.appendTo($allMsg);
    newEL.delay(idx * 70);
    newEL.animate({ opacity: 1 }, 1100);
  });
});
