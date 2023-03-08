$(document).ready(function(){
    //視窗滾度高度 > 300px就顯示回到最上按鈕
    $(window).on("scroll",function(){
        let scrollTopValue = $(window).scrollTop();
        if(scrollTopValue > 300){
            $('.btn-scrollTop').fadeIn();
        }else{
            $('.btn-scrollTop').fadeOut();
        }
    })
    //回到最上按鈕功能
    $('.btn-scrollTop').click(function() {
        $('html').animate({scrollTop: 0});
    })
    //排序的按鈕的(a連結)不要轉頁
    $(".product-list-btn a").click(function(e){
        e.preventDefault();
    })
})
function listText(){
    $(".product-main-list>li").animate({opacity:"0"},0);
    $(".product-main-list>li").addClass('byTexts');
    $(".product-main-list>li").removeClass('byImg'); 
    $(".list-text a").addClass('sparkle-color');
    $(".list-img a").removeClass('sparkle-color');
    $(".product-main-list>li").animate({opacity:"1"});
}
function listImg(){
    $(".product-main-list>li").animate({opacity:"0"},0);
    $(".product-main-list>li").addClass('byImg');
    $(".product-main-list>li").removeClass('byTexts');
    $(".list-img a").addClass('sparkle-color');
    $(".list-text a").removeClass('sparkle-color');
    $(".product-main-list>li").animate({opacity:"1"});
}

//敘述
metaFill();
function metaFill(){
    let title = "";
    let contents = "";
    //thunderbolt
    if($(".product-intro p").length !== 0){
        //console.log('123123');
        contents = $(".product-intro p").text();
        if($(".bread-area ul li").length > 4){
            title = $(".bread-area ul li:nth-child(5)").text();
        }else{
            title = $(".bread-area ul li:nth-child(4)").text()
        };
    //FPGA
    }else if($(".product-content p").length !== 0){
        // if($(".product-content h2").length === 1){
        // }
        title = $(".product-content h2").text();
        contents = $(".product-content p").text();
    //隱私權 法律 最新消息 關於我們 純文字
    }else if($(".content p").length !== 0){
        // if($(".slider-text h2").length === 1){
        // };
        title = $(".slider-text h2").text();
        contents = $(".content p").text();
    }else if($(".product-main-list").length !== 0){
        title = $(".slider-text h2").text();
    }
    else{
        return
    }
    $("meta[name='description'],meta[itemprop='description'], meta[property='og:description'], meta[name='twitter:description']").attr("content",contents.slice(0,200));
    $("title").text(title + ' - SPARKLE');
    $("meta[name='twitter:title'],meta[itemprop='name'],meta[property='og:title']").attr("content",title + ' - SPARKLE');;
}

$(".spec-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".product-spec").offset().top }, {duration: 700,easing: "swing"});
    return false;
  });
  $(".overview-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".main-feature").offset().top }, {duration: 700,easing: "swing"});
    return false;
  });
  $(".pic-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".product-pic").offset().top }, {duration: 700,easing: "swing"});
    return false;
  });
  $(".support-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".btn-download").offset().top }, {duration: 700,easing: "swing"});
    return false;
  });

AOS.init();


