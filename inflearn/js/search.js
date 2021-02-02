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

/********************************* search 커서 변경 **************************************/

     $('#search').each(function(index){
        $(this).hover(
            function(){
                $('#search').css('cursor' , 'text');
            },
            function(){
                $('#search').css('cursor' , 'pointer');
            }
        );
    });


/********************************* search 클릭시 이동 **************************************/

    $('#search').on('click',function(){
        if($(document).scrollTop()>=$('#headerBox').height()){
            var location = document.querySelector("#search_main").offsetTop;
            var menuHeight = document.querySelector("#headerBox").offsetHeight;
            s_location= location -menuHeight;
            window.scrollTo({top:s_location, behavior:'smooth'});

            }
        else{
            var location = document.querySelector("#search_main").offsetTop;
            var menuHeight = document.querySelector("#headerBox").offsetHeight;
            s_location= location -menuHeight-70;
            window.scrollTo({top:s_location, behavior:'smooth'});
            }
    });

})