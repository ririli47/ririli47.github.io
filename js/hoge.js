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
    console.log(href);
    var target = $(href == "#" || href == "" ? 'html' : href);
    console.log(target);
    var position = target.offset();
    console.log(target.offset());
    $('html, body').animate({scrollTop:position.top}, speed, 'swing');
    return false;
  });
});
