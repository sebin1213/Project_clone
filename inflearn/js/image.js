

$(document).ready(function() {
  slide();
});


// 슬라이드
function slide() {
  var wid = 0;
  var now_num = 0;
  var slide_length = 0;
  var auto = null;
  var $dotli = $('.dot>li');
  var $panel = $('.panel');
  var $panelLi = $panel.children('li');

  // 변수 초기화
  function init() {
    wid = $('.slide').width();
    now_num = $('.dot>li.on').index();
    slide_length = $dotli.length;
  }

  // 이벤트 묶음
  function slideEvent() {

    // 슬라이드 하단 dot버튼 클릭했을때
    $dotli.click(function() {
      now_num = $(this).index();
      slideMove();
    });

    // 이후 버튼 클릭했을때
    $('.next').click(function() {
      nextChkPlay();
    });

    // 이전 버튼 클릭했을때
    $('.prev').click(function() {
      prevChkPlay();
    });

    resize();

  }
  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
  function prevChkPlay() {
    if (now_num == 0) {
      now_num = slide_length - 1;
    } else {
      now_num--;
    }
    slideMove();
  }

  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
  function nextChkPlay() {
    if (now_num == slide_length - 1) {
      now_num = 0;
    } else {
      now_num++;
    }
    slideMove();
  }

  // 슬라이드 무브
  function slideMove() {
    $panel.stop().animate({
      'margin-left': -wid * now_num
    });
    $dotli.removeClass('on');
    $dotli.eq(now_num).addClass('on');
  }

  // 화면크기 조정시 화면 재설정
  function resize() {
    $(window).resize(function() {
      init();
      $panel.css({
        'margin-left': -wid * now_num
      });
    });
  }
  init();
  slideEvent();
}