$(function(){
    var $header = $('#header')
    var $gnb = $header.find('.gnb')
    var $sMenuWrap = $header.find('.smenu_wrap')
    var $lang = $gnb.find('.lang')
    var $langBtn = $lang.find('.lang_btn')
            // alert('p')
            
    
     $(window).resize(function(){
                
               
                var myWinWidth = $(window).width()


                if(myWinWidth >= 360 && myWinWidth < 769) { // 768이하
                        $gnb.hover(gnbOn,gnbOut)
                        function gnbOn(){
                            $header.removeClass('on')
                            $lang.removeClass('on')
                            $langBtn.removeClass('on')
                        }
                        function gnbOut(){
                            $header.removeClass('on')
                            $lang.removeClass('on')
                            $langBtn.removeClass('on')
                            }  


                }

                
            }).resize()
                
            
})