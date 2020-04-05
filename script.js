$(function(){
    const headerHeight = $('.header').height();

    $('.course').click(function(){
        const $course__lngs = $(this).find('.course__lngs');

        if ($course__lngs.hasClass('couse__open')){
            $course__lngs.removeClass('couse__open');
            $course__lngs.hide();
        } else {
            $course__lngs.addClass('couse__open');
            $course__lngs.show();
        }
    });
    const topbtn = $('#page-top');

    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            topbtn.fadeIn();
        } else {
            topbtn.fadeOut();
        }
    })
    topbtn.click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 'slow');
    });

    $('#header__navLink1').click(function() {
        // スクロールの速度
        var speed = 'slow'; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - headerHeight;
        // スムーススクロール
        $('body, html').animate({'scrollTop': position}, 'slow');
        return false;
     });
    $('#header__navLink2').click(function() {
        // スクロールの速度
        var speed = 'slow'; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - headerHeight;
        // スムーススクロール
        $('body, html').animate({'scrollTop': position}, 'slow');
        return false;
     });
    $('#header__navLink3').click(function() {
        // スクロールの速度
        var speed = 'slow'; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - headerHeight;
        // スムーススクロール
        $('body, html').animate({'scrollTop': position}, 'slow');
        return false;
     });

});