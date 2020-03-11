$(function(){
    //alert('p')
    var $win = $(window)
    var $sec1 = $('#sec1')
    var $sec2 = $('#sec2')
    var $sec3 = $('#sec3')
    var $sec4 = $('#sec4')
    var $sec5 = $('#sec5')
    
    var $text = $('.text')
    var $tabMenu = $('.tab_menu')
    var $tabMenuLi = $tabMenu.find('li')
    var $tabCon = $('.tab_con .con')

    
    $text.click(menu)
    function menu(){
        $(this).find('.list').stop().slideToggle()
        $(this).toggleClass('on')
        
         $(this).siblings().removeClass('on')
        $(this).siblings().find($('.list')).slideUp()
    }
    
    $tabMenuLi.click(show)
    function show(){
        $tabMenuLi.removeClass('on')
        $(this).addClass('on')
        var index = $(this).index()
        $tabCon.hide()
        $tabCon.eq(index).fadeIn()
    }
    $tabMenuLi.eq(0).trigger('click') 
    
    $win.scroll(scrollMove)
    function scrollMove(){
        var nowScroll = $win.scrollTop()
        /*console.log(nowScroll)*/
        
        if($tabMenuLi.eq(0).hasClass('on')){
            var sec1Pos = $sec1.offset().top - 1000
            if(nowScroll >= sec1Pos){
                $sec1.find('.con1 li').each(con1Li)
                function con1Li(index){
                $(this).delay(index*50).animate({opacity: 1}, 500)
                }
            } //sec1 hrd
            var sec11Pos = $sec1.offset().top - 1200
            if(nowScroll >= sec11Pos){
                $sec1.find('.m_con1 li').each(mcon1Li)
                function mcon1Li(index){
                $(this).delay(index*100).animate({opacity: 1}, 100)
                }
            } //sec1 hrd
            var sec2Pos = $sec2.offset().top - 500
            if(nowScroll >= sec2Pos){
                $sec2.find('.round li').each(con2Li)
                function con2Li(index){
                $(this).delay(index*100).animate({opacity: 0.6, top: 0}, 500)
                }
            } //sec2 hrd
            var sec3Pos = $sec3.offset().top - 500
            if(nowScroll >= sec3Pos){
                $sec3.find('.con3_con li').each(con3Li)
                function con3Li(index){
                $(this).delay(index*300).animate({opacity: 1, top: 0}, 500)
                }
            } //sec3 hrd
        }else if($tabMenuLi.eq(1).hasClass('on')){
            var sec4Pos = $sec4.offset().top - 800
            if(nowScroll >= sec4Pos){
                $sec4.find('li').each(con4Li)
                function con4Li(index){
                $(this).delay(index*300).animate({opacity: 1, top: 0}, 500)
                }
            } //sec4 benefit

        }else if($tabMenuLi.eq(2).hasClass('on')){
            var sec5Pos = $sec5.offset().top - 800
            if(nowScroll >= sec5Pos){
                $sec5.find('li').each(con5Li)
                function con5Li(index){
                $(this).delay(index*300).animate({opacity: 1, top: 0}, 500)
                }
            } //sec5 edu

        } //tab
        
    }//scrollMove    
    
}) //ready