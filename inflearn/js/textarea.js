/**
* slideShow.js
**/



$(function(){
/****************************텍스트 길이에 따라 textarea 영역 확장***************************/
    $('#community_post_textarea').on('keydown keyup', function () {
      $(this).height(1).height( $(this).prop('scrollHeight')+12 );
    });
    $('#community_post_answer_box textarea').on('keydown keyup', function () {
      $(this).height(1).height( $(this).prop('scrollHeight')+12 );
    });

    /********************************취소버튼 클릭시 textarea 초기화*******************************/

    $('#cls_button').on('click', function (){
      $('#qu_textarea').val('');
      $('#qu_title input').val('');
    });
});