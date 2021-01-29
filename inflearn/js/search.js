/*
search.js
*/

$(function(){
    $('#search_input').each(function(index){
        $(this).hover(
            function(){
                $('#search_input').css('border','1px solid #5f5f5f');
            },
            function(){
                $('#search_input').css('border','1px solid transparent');
            }
        );
    });
})