$(function(){
    //alert('p')
    var $win = $(window)
    var $text = $('.text')
    var $sec1 = $('#sec1')
    var $sec2 = $('#sec2')
    
    $text.click(menu)
    function menu(){
        $(this).find('.list').stop().slideToggle()
        $(this).toggleClass('on')
        
         $(this).siblings().removeClass('on')
        $(this).siblings().find($('.list')).slideUp()
    }
    
    $win.scroll(scrollMove)
    function scrollMove(){
        var nowScroll = $win.scrollTop()
        //alert('p')
        
        var gap = 0.3
         $sec1.find('.bg').css('background-position',"center "+(-(nowScroll*gap))+"px");
        
        var sec2Pos = $sec2.offset().top - 300
        if(nowScroll >= sec2Pos){
            $sec2.find('.con_list li').animate({opacity : 1,top : 0},800)
        } //sec2
        
    }//scrollMove
    

})