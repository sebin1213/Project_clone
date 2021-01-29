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

        // 슬라이드 이동
        var moveLeft= -(index*1280);
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

    $('#controlItem>li').each(function(index){
        $(this).attr('menu-index',index);
        // 클릭했을 때 현재 인덱스 값을 moveSlide() 함수에게 전달
        $(this).on('click', function(){
            moveSlide(index);
        }); // on close
    }).click(function(){  // each close
        var index = $(this).attr('menu-index');
        /* 클릭한 div에 clickMenu 클래스 추가 */
        $('.slideMenu[menu-index='+index+']').addClass('clickMenu');
        /* 그 외 div는 clickMenu 클래스 삭제 */
        $('.slideMenu[menu-index='+index+']').removeClass('clickMenu');
    }); // click close

}); // function() 종료
