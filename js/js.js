/**
 * Created by ���� on 2017/9/19.
 */
$(function(){
    $("#hide").tap(function(){
        $(".hide").toggle();
        $(this).toggleClass("pic");
    });
    $("#color>div").tap(function(){
        var i=$(this).index()-1;
        var src=$(this).attr("src");
        for(var a=0;a<5;a++){
            $(".banner img").eq(a).attr("src","images/"+src+(a+1)+".jpg");
        }
      });
    $(".color>div").tap(function(){
        $(this).children("div").toggleClass("height");
        $(this).siblings().children(".boi").toggleClass("height");
        $(this).toggleClass("border").siblings().removeClass("border");
    });


    $(window).scroll(
        function(){
            //��ֱ�����������ľ���
            var a=$(window).scrollTop();

            console.log(a)
            //�жϹ����������ľ���
            if(a>=1250){
                $(".footer_top").addClass("fixed");
            }else{
                $(".footer_top").removeClass("fixed");
            }
        }
    );
    $(".footer_top span").tap(function(){
        var i=$(this).index();
        $(this).addClass("border1").siblings().removeClass("border1");
        var a=-100*i;
        $(".pi").css("margin-left",a+"%");
    })

});