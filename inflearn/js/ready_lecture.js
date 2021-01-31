/*
ready_lecture.js
*/

$(function(){


    /************************ Content Hover ************************/

    $('.contents').hover(
        function(){ // 마우스 올렸을 때
            index = $(this).attr('id');
            $('#'+index+'>.hoverBox').css('display','block');
        },
        function(){ // 마우스 내렸을 때
            $('#'+index+'>.hoverBox').css('display','none');
        }
    ); // content hover close

    /************************ ICON Hover ************************/
    $('.hoverMenu img').hover(
        function(){
            icon_class=$(this).attr('class');
            if(icon_class=='addCart'){
                $('.'+icon_class).attr('src','image/cart02.png')
                $('.'+icon_class).before( '<p>바구니에 추가하기</p>' )
            }else if(icon_class=='addHeart'){
                $('.'+icon_class).attr('src','image/heart02.png')
                $('.'+icon_class).before( '<p>위시리스트에 추가하기</p>' )
            }else{
                $('.'+icon_class).before( '<p>내 목록에 추가</p>' )
            }
           $('.hoverMenu>div>p').addClass('arrow_box');
        },
        function(){
            if(icon_class=='addCart'){
                $('.'+icon_class).attr('src','image/cart.png')
            }else if(icon_class=='addHeart'){
                $('.'+icon_class).attr('src','image/heart.png')
            }
            $('.hoverMenu>div>p').remove(); // hover 시 생성된 <p> 제거
        }
    ); // icon hover close

}); // function() close