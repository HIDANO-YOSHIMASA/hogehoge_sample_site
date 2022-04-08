$('.menu-icon').click(function(){
    $('.nav').toggleClass('active');
    $('.menu-icon').toggleClass('active');
    if($('.menu-icon').hasClass('active')){
        $('.menu-icon').css('position', 'fixed');
        $('.icon').hide();
    }else{
        $('.menu-icon').css('position', 'static');
        $('.icon').show();
    }
});