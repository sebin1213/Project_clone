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



/* slideShow.js */


$(function(){
    //이동한 이미지의 index값 저장(현재 보고있는 이미지- 현재위치)
    var movedIndex=0;
    var length=$('#new_lecture_content>div').length; // 나열된 컨텐츠 개수 10개

    // 슬라이드 패널을 움직여주는 함수 - 사용자정의
    function moveSlide(index){
        //전달 받은 index값을 moveIndex에 저장
        movedIndex = index;
        var boxWidth= $('#new_lecture_lecture').width();
        var moveLeft= -(index*boxWidth);
        $('#new_lecture_content').animate({left:moveLeft},'slow');
    };


    //prev 버튼 클릭하면 앞으로 이동
    $('#prev_new_lecture_Btn').on('click',function(){
        moveIndex = moveIndex - 1; //현재 이미지 이전이미지의 인덱스로 바꿈
       //moveSlide() 호출
       moveSlide(moveIndex);
    });
    $('#next_new_lecture_Btn').on('click',function(){
        moveIndex = moveIndex + 1; //현재 이미지 이전이미지의 인덱스로 바꿈
       //moveSlide() 호출

       moveSlide(moveIndex);
    }); //next버튼 종료

})
























/*
ready_lecture.js
*/

$(function(){

    /*** Click Event ***/
    var movedPage=0;
    var length=$('#ready_content>div').length; // 나열된 컨텐츠 개수 8개

    function moveSlide(index){
        movedPage = index;

        var boxWidth= $('#ready_lecture').width();
        var moveLeft= -(index*boxWidth);
        $('#ready_content').animate({left:moveLeft},'slow');
    } // moveSlide function() close

    $('#prevBtn02').on('click',function(){
        if(movedPage != 0){
            movedPage--;
            $(this).prop("disabled", false);
        }
        else
            (this).prop("disabled", true);
        moveSlide(movedPage);
    }); // prevBtn click close

    $('#nextBtn02').on('click',function(){
        if(movedPage != length/4-1){
            movedPage++;
            $(this).prop("disabled", false);
        }else
            $(this).prop("disabled", true);
        moveSlide(movedPage);
    }); // nextBtn click close


}); // function() close


