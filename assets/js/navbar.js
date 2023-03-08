(function($) {
    var size;
	$('.menu-item').each(function(index,element){
        if($(this).find("ul").length !== 0){
            $(this).addClass("menu-item-has-children")
        }
    })
    
	//SMALLER HEADER WHEN SCROLL PAGE 向下移動時menu要縮小
    // function smallerMenu() {
    //     var sc = $(window).scrollTop();
    //     var t=0;
    //     if (sc > t) {
    //         $('#header-sroll').addClass('small');
    //     }else {
    //         $('#header-sroll').removeClass('small');
    //     }
    //     setTimeout(function(){ t = sc ; },0)
    // }

    // VERIFY WINDOW SIZE 改變尺寸後要出現漢堡選單
    function windowSize() {
        size = $(document).width();
        if (size >= 991) {
            $('body').removeClass('open-menu');
            $('.hamburger-menu .bar').removeClass('animate');
        }
    };

     // ESC BUTTON ACTION
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
            $('.header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function( index ) {
                $(this).removethisClass('open-sub');
            });
        }
    });

    //移動到爺爺階層的底線
    $('#cd-primary-nav > li').hover(function() {
        $whidt_item = $(this).width();
        $whidt_item = $whidt_item-8;

        $prevEl = $(this).prev('li');
        $preWidth = $(this).prev('li').width();
        var pos = $(this).position();
        pos = pos.left+4;
        $('.header .desk-menu .menu-container .menu>li.line').css({
            width:  $whidt_item,
            left: pos,
            opacity: 1
        });
    });

     // ANIMATE HAMBURGER MENU 漢堡的動畫
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .bar').toggleClass('animate');
        if($('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }else{
            $('body').toggleClass('open-menu');
        }
    });
        //手機版時自動增加back的按鈕
    $('.header .desk-menu .menu-container .menu .menu-item-has-children ul').each(function(index) {
        $(this).append('<li class="back menu-item"><a href="#">back</a></li>');
    });

    // RESPONSIVE MENU NAVIGATION 電腦手機板menu切換
    $('.header .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        if(size <= 991){
            $(this).next('ul').addClass('open-sub');
        }
    });

    // CLICK FUNCTION BACK MENU RESPONSIVE
    $('.header .desk-menu .menu-container .menu .menu-item-has-children ul .back').on('click', function(e) {
        e.preventDefault();
        $(this).parent('ul').removeClass('open-sub');
    });

    $('body .over-menu').on('click', function() {
        $('body').removeClass('open-menu');
        $('.bar').removeClass('animate');
    });

    $(document).ready(function(){
        windowSize();
    });

    // $(window).scroll(function(){
    //     smallerMenu();
    // });

    $(window).resize(function(){
        windowSize();
    });


    //判斷上滾事件
    
    var p=0,
        t=0;

     $(window).scroll(function(){

       p=$(this).scrollTop();
       //確認版型
       if($(".businessTemplate").length >= 1){
           $(".menu-bottom").hide();
           $('.header').attr('style','position: sticky;');
            // if(p > t){
            //     //下滚
            //     // $(".header").animate({height: "0"}, 20, '');
            //     // $('#header-sroll').addClass('nav-down');
            // }else if(p < 40){
            //     //上滚 
            //     // $('header').attr('style','position: fixed;');
            //     // $("header").animate({position:"fixed"});
            //     // $("header").animate({height: 80}, 20, '');
            //     // $(".header").animate({height: "80px"}, 20, '');
            //     // $('#header-sroll').removeClass('nav-down');
            // }
       }
        //    setTimeout(function(){ t = p ; },0)
      })
})(jQuery);