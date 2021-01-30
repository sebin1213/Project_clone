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
    ); // hover close



}); // function() close