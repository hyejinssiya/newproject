$(function(){
    var $win = $(window)
    var $con = $('#con')
    var $con2 = $con.find('.con2')
    
    var $sec1 = $('#sec1')
    var $sec2 = $('#sec2')
    var $sec3 = $('#sec3')
    var $sec4 = $('#sec4')

    
    var $tit = $('.tit')
    var $desc = $('.desc')
    var $con2BoxLi = $con2.find('.box li')
    
    var $con4 = $('.con4')
    var $con4Li = $con4.find('.list li')
    
    
    $con2BoxLi.hover(mouseOn,mouseOut)
    function mouseOn(){
        $(this).find('img').css('transform','scale(1.2)')
    }
    function mouseOut(){
         $(this).find('img').css('transform','scale(1)')
    }
    
    
    $win.scroll(scrollMove)
    function scrollMove(){
        var nowScroll = $win.scrollTop()
        //alert('p')
        
        var sec1Pos = $sec1.offset().top - 300
        if(nowScroll >= sec1Pos){
            $sec1.find($tit).animate({opacity : 1,top : 0},800)
            $sec1.find($desc).delay(500).animate({opacity : 1,top : 0},800)
        } //sec1
        
        var sec2Pos = $sec2.offset().top - 300
        if(nowScroll >= sec2Pos){
            $sec2.find($tit).animate({opacity : 1,top : 0},800)
            $sec2.find($desc).delay(500).animate({opacity : 1,top : 0},800)
        } //sec2
        
        var sec3Pos = $sec3.offset().top - 300
        if(nowScroll >= sec3Pos){
            $sec3.find($tit).animate({opacity : 1,top : 0},800)
            $sec3.find($desc).delay(500).animate({opacity : 1,top : 0},800)
        } //sec3
        
        var sec4Pos = $sec4.offset().top - 300
        if(nowScroll >= sec4Pos){
            $sec4.find($tit).animate({opacity : 1,top : 0},800)
            
            $sec4.find($con4Li).each(conLi)
            function conLi(index){
            $(this).delay(index*100).animate({opacity: 1, top: 0}, 1000)
            }
        } //sec4
        
    }//scrollMove
    
    
    
    
    
    $('#visual .owl-carousel').owlCarousel({
    items : 1, 
    autoplay : true,
    autoplayTimeout : 5000,
    loop : true, 
    onInitialize : load, 
    onTranslate : before,
    onTranslated : after,
    })
    
    function load(){
        $('.slider p').animate({
            top: 0, 'opacity': 1
        })
    }//load
    function before(){
        //alert('before')
         $('.slider p').css({
            top: 50, 'opacity': 0
        })
    }//before
    function after(event){
        //alert('after')
        var page = event.page.index; 
        if(page == 0){
            $('.slider1 p').animate({
                top: 0, 'opacity': 1
            },700)
        }else if(page == 1){
            $('.slider2 p').animate({
                top: 0, 'opacity': 1
            },700)
        }else if(page == 2){
            $('.slider3 p').animate({
                top: 0, 'opacity': 1
            },700)
        }else if(page == 3){
            $('.slider4 p').animate({
                top: 0, 'opacity': 1
            },700)
        }
    }
    

    $('#con .con1 .box .owl-carousel').owlCarousel({
        items : 1,
        nav : true,
        loop : true,
    })

     
})