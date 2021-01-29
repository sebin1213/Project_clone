/*
subM.js
*/

$(function(){
    $('#mainMenu1').each(function(index){
        $(this).hover(
            function(){
                $(this).css('color','#24c27c');
                $('#subMenuItem1').css('visibility','visible');
            },
            function(){
                $(this).css('color','#616161');
                $('#subMenuItem1').css('visibility','hidden');
            }
        );
    });
    $('#mainMenu2').each(function(index){
        $(this).hover(
            function(){// 마우스 올렸을때 이미지 변경
                $(this).css('color','#24c27c');
            },
            function(){// 마우스 뗐을때 이미지
                $(this).css('color','#616161');
            }
        );
    });//each 함수 종료
    $('#mainMenu3').each(function(index){
        $(this).hover(
            function(){// 마우스 올렸을때 이미지 변경
                $(this).css('color','#24c27c');
                $('#subMenuItem2').css('visibility','visible');
            },
            function(){// 마우스 뗐을때 이미지
                $(this).css('color','#616161');
                $('#subMenuItem2').css('visibility','hidden');
            }
        );
    });//each 함수 종료

    $('#knowledge').each(function(index){
        $(this).hover(
            function(){// 마우스 올렸을때 이미지 변경
                $(this).css('color','#24c27c');
            },
            function(){// 마우스 뗐을때 이미지
                $(this).css('color','#616161');
            }
        );
    });//each 함수 종료
})
