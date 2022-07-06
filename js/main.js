$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave',(function(aa){
    if($(window).width() > 1169 ){      //pc(데스크탑) 상태

            if( aa.type == 'mouseenter'){   //데스크탑상태에서 마우스를 올려놨을때
                $('.sub').stop().slideDown();
                $('.sub_shadow').stop().fadeIn();
            } else {
                $('.sub').stop().slideUp(250,function(){                    
                    $('.sub').removeAttr('style');    //slideUp실행뒤(콜백함수) 남아있는 style을 없애준다
                });
                $('.sub_shadow').stop().fadeOut(250,function(){
                    $(this).removeAttr('style');
                });
            }

        } else {                        //모바일 상태

        }

    })
);  //mouseenter mouseleave 부분 끝


const $mainBtn = $(".navbar .navbar_gnb > li > a");     //메인 메뉴


$mainBtn.click(function(){
    if($(window).width() < 1170 ){      //모바일 상태에서만 실행_서브메뉴 슬라이드
        if( !$(this).parents('li').hasClass('on') ){   //클릭한 a의 부모li에 on클라스가 없을때
            $('.sub').slideUp(100);
            $('.navbar .navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown();
            $(this).parents('li').addClass('on');
        } 
        else {                                          //클릭한 부분 sub가 열려있을때
            $(this).siblings('.sub').slideUp(100,function(){});
            $(this).parents('li').removeClass('on');
        } 
    }
});

//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},500);
        $('header').animate({left:-250},500);  
    } else {
        $('.gnb').animate({right:-250},300);
        $('header').animate({left:0},300); 
    }   

});

//모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그대로 보이고,li에 on 클라스가 계속 있는 상태 해결
$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $(".navbar .navbar_gnb > li").removeClass('on');
    }
});


