    
$(function(){
        
    var $header = $('#header')
    var $gnb = $header.find('.gnb')
    var $sMenuWrap = $header.find('.smenu_wrap')
    var $lang = $gnb.find('.lang')
    var $langBtn = $lang.find('.lang_btn')
    var $footer = $('#footer')
    var $family = $footer.find('.family')
    var $familyBtn = $family.find('.btn')
    
    var $mobile = $('.mobile_menu')
    var $mobileTit = $mobile.find('.tit')
    var $mobileWrap = $mobile.find('.menu_wrap')
    var $mobileList = $mobileWrap.find('.menu_list')
    var $mobileBg = $('.mobile_bg')
    var $menubar = $header.find('.menubar')
    var $close = $mobile.find('.top .close')

    $gnb.hover(gnbOn,gnbOut)
    function gnbOn(){
        $sMenuWrap.stop().slideDown()
        $header.addClass('on')
        $lang.addClass('on')
        $langBtn.addClass('on')
    }
    function gnbOut(){
        $sMenuWrap.stop().slideUp(function(){
        $header.removeClass('on')
        $lang.removeClass('on')
        $langBtn.removeClass('on')
        })      
    }// header
    
    $langBtn.click(lang)
    function lang(){
        $lang.toggleClass('active')
        
        if(!$lang.hasClass('active')){
            $lang.find('.lang_list').slideUp(function(){
                $lang.removeClass('over')
            })
            $langBtn.removeClass('over')
        }else {
            $lang.find('.lang_list').slideDown()
            $lang.addClass('over')
            $langBtn.addClass('over')
        }
    }
    
    $familyBtn.click(family)
    function family(){
        
        $family.toggleClass('active')
        
        if(!$family.hasClass('active')){
            $family.find('.btn_list').slideUp(function(){
                $family.removeClass('on')
        })   
            $familyBtn.removeClass('on') 
        }else {
            $family.find('.btn_list').slideDown()
            $family.addClass('on')
            $familyBtn.addClass('on')
        }              
    }// family
    
    $mobileTit.click(mobile)
    function mobile(){
        var target = $(this).siblings().find($mobileList);
        $(target).slideToggle()
        $(this).toggleClass('on')
        
        $(this).parent().siblings().find($mobileTit).removeClass('on')
        $(this).parent().siblings().find($mobileList).slideUp()
    }
    $close.click(close)
    function close(){
        $mobile.animate({
            left : '-100%'
        })
        $mobileBg.fadeOut(100)
    }
    $menubar.click(menubar)
    function menubar(){
        $mobile.animate({ 
            left : 0
        })
        $mobileBg.fadeIn(100)
    }
        
})