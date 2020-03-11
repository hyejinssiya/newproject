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
        
        
        var sec1Pos = $sec1.offset().top - 300
        if(nowScroll >= sec1Pos){
            $sec1.find('.list li').animate({opacity : 1, top : 0},800)
        } //sec1
        
        var sec2Pos = $sec2.offset().top - 300
        if(nowScroll >= sec2Pos){
            $sec2.find($('.con_list li')).each(conLi)
            function conLi(index){
            $(this).delay(index*100).animate({opacity: 1, top: 0}, 1000)
            }
        } //sec2
/*        
        var gap = 0.2
         $sec1.find('.bg').css('background-position',"center "+(-(nowScroll*gap))+"px");
        
        $(window).resize(function(){
                
                var myWinWidth = $(window).width()


                if(myWinWidth >= 360 && myWinWidth < 769) { // 768이하
                    var gap = 0.06
                    $sec1.find('.bg').css('background-position',"center "+(-(nowScroll*gap))+"px");
                }
                
            }).resize()
        */
    }//scrollMove
    

})