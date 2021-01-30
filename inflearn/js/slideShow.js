/**
* slideShow.js
**/

$(function(){

    // 이동한 이미지의 index 값 저장 (현재 보고 있는 이미지-현재위치)
    var movedIndex=0;

    // 슬라이드 패널을 움직여주는 함수
    function moveSlide(index){
        // 전달받은 index 값을 movedIndex 에 저장
        movedIndex = index; // 전역변수
        var boxWidth= $('#slideShowBox img').width();
        // 슬라이드 이동
        var moveLeft= -(index*boxWidth);
        $('#slidePanel').animate({left:moveLeft},'slow');
    }

    // prevButton 클릭시 앞으로 이동
    $('#prevBtn').on('click',function(){
        // 버튼 클릭시 보여줘야 할 이미지 index 결정해서
        if(movedIndex != 0) // 첫 번째 이미지가 아니라면
            movedIndex -= 1; // 현재 이미지 이전 이미지의 인덱스로 설정

        // moveSlide() 호출
        moveSlide(movedIndex);
    }); // prevBtn close

    // nextButton 클릭시 뒤로 이동
    $('#nextBtn').on('click',function(){
        // 버튼 클릭시 보여줘야 할 이미지 index 결정해서
        if(movedIndex != 8) // 마지막 이미지가 아니라면
            movedIndex += 1; // 다음 이미지의 인덱스

        // moveSlide() 호출
        moveSlide(movedIndex);
    }); // nextBtn close


    // slideMenu 클릭시 css 변경
    $('.slideMenu').each(function(index){
			// 클릭했을 때 현재 인덱스 값을 moveSlide() 함수에게 전달
			$('#controlPanel li:first-child').css({'color':'#24c27c','border':'solid 1px #24c27c'});
			$('#subControl li:first-child').css({'color':'#24c27c','border':'solid 1px #24c27c'});

            $(this).on('click', function(){
                moveSlide(index);
                $('.slideMenu').css({'color':'black','border':'solid 1px #ccc'});
                $('.slideMenu').eq(index).css({'color':'#24c27c','border':'solid 1px #24c27c'});
                $('.slideMenu02').css({'color':'black','border':'solid 1px #ccc'});
                $('.slideMenu02').eq(index).css({'color':'#24c27c','border':'solid 1px #24c27c'});

            }); // on close
    });

    /********************* SubMenu *********************/

    // subMenu 버튼 클릭시 버튼모양 변경
    $('#listBtn').on('click',function(){
        $('#subControlBox').toggle(0,'linear');
        var status = $('#subControlBox').css('display');
        if(status=='block'){
            $('#listBtn img').attr('src','image/up-arrow-green.png');
            $('#listBtn').css('border','solid 1px #24c27c');
        }else{
            $('#listBtn img').attr('src','image/down-arrow.png');
            $('#listBtn').css('border','solid 1px #dee2e6');
        }
    });

    // subMenu 안의 [닫기] 버튼 눌렀을 때
    $('#closeBox').on('click',function(){
        $('#listBtn img').attr('src','image/down-arrow.png');
        $('#listBtn').css('border','solid 1px #dee2e6');
        $('#subControlBox').css('display','none');
    });

    // item 클릭시 slide 이미지 변경
     $('.slideMenu02').each(function(index){
        // 클릭했을 때 현재 인덱스 값을 moveSlide() 함수에게 전달
        $('#controlPanel li:first-child').css({'color':'#24c27c','border':'solid 1px #24c27c'});
        $('#subControl li:first-child').css({'color':'#24c27c','border':'solid 1px #24c27c'});

        $(this).on('click', function(){
            moveSlide(index);
            $('.slideMenu').css({'color':'black','border':'solid 1px #ccc'});
            $('.slideMenu').eq(index).css({'color':'#24c27c','border':'solid 1px #24c27c'});
            $('.slideMenu02').css({'color':'black','border':'solid 1px #ccc'});
            $('.slideMenu02').eq(index).css({'color':'#24c27c','border':'solid 1px #24c27c'});

        }); // on close

    });


}); // function() 종료