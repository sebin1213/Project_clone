/**
* new_lecture.js
**/

/*******일단 보류....너무 어렵다......이것만 4시간한거같다...*******/
/** $(function(){

    $('#new_lecture .new_lecture_list').each(function(index){
        $(this).hover(
            function(){
                $('#new_lecture_detail .new_lecture_detail_list').eq(index).show();
            },
            function(){
                $('#new_lecture_detail .new_lecture_detail_list').eq(index).hide();
            }
        );
    });

}); // function() 종료 **/

$(function(){
    // 이동한 이미지의 index 값 저장 (현재 보고 있는 이미지-현재위치)
    var movedIndex=0;

    // 슬라이드 패널을 움직여주는 함수
    function moveSlide(index){
        // 전달받은 index 값을 movedIndex 에 저장
        movedIndex = index; // 전역변수

        var boxWidth= $('#new_lecture_slide').width();
        // 슬라이드 이동
        var moveLeft= -(index*boxWidth);
        $('#new_lecture_list').animate({left:moveLeft},'slow');

    }

    var length=$('.slideImage').length;
    // prevButton 클릭시 앞으로 이동
    $('#new_lecture_prevBtn').on('click',function(){
        // 버튼 클릭시 보여줘야 할 이미지 index 결정해서
        movedIndex -= 1; // 현재 이미지 이전 이미지의 인덱스로 설정

        if(movedIndex<0)
            movedIndex=length-1;


        // moveSlide() 호출
        moveSlide(movedIndex);
    }); // prevBtn close

    // nextButton 클릭시 뒤로 이동
    $('#new_lecture_nextBtn').on('click',function(){
        // 버튼 클릭시 보여줘야 할 이미지 index 결정해서
        movedIndex += 1; // 다음 이미지의 인덱스

        if(movedIndex>=length)
            movedIndex=0;

        // moveSlide() 호출
        moveSlide(movedIndex);
    }); // nextBtn close

});