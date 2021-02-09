/*
community.js
*/

$(function(){
    $('#community_question').each(function(index){
        $('#community_question').on('click', function () {
                $('#modal2').show();
        }),
        $('#cls_button').on('click', function () {
                $('#modal2').hide();
        });
    });
})
