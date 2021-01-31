/*
roadmap.js
*/

$(function(){
    /* Button Hover Event 는 ready_lecture.js에 존재 */

    /*** Click Event ***/
    var movedPage=0;
    var length=$('#roadContent>div').length; // 나열된 컨텐츠 개수 8개

    function moveSlide(index){
        movedPage = index;

        var boxWidth= $('#roadmap').width();
        var moveLeft= -(index*boxWidth);
        $('#roadContent').animate({left:moveLeft},'slow');
    } // moveSlide function() close

    $('#prevBtn03').on('click',function(){
        if(movedPage != 0)
            movedPage--;
        moveSlide(movedPage);
    }); // prevBtn click close

    $('#nextBtn03').on('click',function(){
        if(movedPage != length/4-1)
            movedPage++;
        moveSlide(movedPage);
    }); // nextBtn click close

}