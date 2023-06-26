$(function () {
    floatDiv();

    //마우스 휠 이벤트
    function floatDiv() {
        var contents = $('#wrap>div');

        //스크롤 이동시 컨텐츠 영역들 탑으로 이동
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            contents.each(function () {
                var tg = $(this);
                var i = tg.index();

                //스트롤탑의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동
                if (tg.offset().top <= sct) {
                    switch (i) {
                        case 0:
                            skillsProgressbar();
                            break;
                    }
                }
            });
        });

        /* 스크롤이벤트 */
        $('div.mn').each(function () {
            $(this).on('mousewheel DOMMouseScroll', function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;

                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120; /* 익스,크롬,오페라 */
                } else if (event.detail) delta = -event.detail / 3;  /* 3대신 -40을 사용하기도함. 사파리 및 크롬에서 wheelDelta는 마우스 휠의 경우 120대신 3을 사용*/

                var moveTop = null;

                //마우스 휠을 위에서 아래로
                if (delta < 0) {
                    if ($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                } else {   //마우스 휠을 아래에서 위로
                    if ($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }
                //화면이동 시간
                $('html,body').stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 500
                });
            });
        });
    };




    /* 슬로건 */
    $('.type').typed({
        strings: ["멈추지 않고 나아가는" + "<br> " + "이민렬 입니다."],
        typeSpeed: 100,
        backDelay: 100,
        loop: true
    })



    /* 탑버튼 */
    $(window).scroll(function () {
        if ($('html,body').scrollTop() > 100) {
            $('#top_btn').fadeIn();
        }
        else {
            $('#top_btn').fadeOut();
        }
    })


    $('#top_btn a').click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: 0 }, 1000);
    });



    /* 네비 변환 */


    $('div #btn01').click(function () {
        $('html,body').animate({ scrollTop: $('#header').offset().top }, 500)
    });

    $('div #btn02').click(function () {
        $('html,body').animate({ scrollTop: $('#profile').offset().top }, 500)
    });

    $('div #btn03').click(function () {
        $('html,body').animate({ scrollTop: $('#contents').offset().top }, 500)
    });

    $('div #btn04').click(function () {
        $('html,body').animate({ scrollTop: $('#contact').offset().top }, 500)
    });



    /* 네비 버튼 활성화 */
    var contBox = $('#wrap>div');
    var btn = $('nav>#nav>.nav>ul>li');
    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        contBox.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                btn.removeClass('on');
                btn.eq(i).addClass('on');
                tg.stop().animate({ opacity: 1 }, 1000);
                tg.children('div').stop().animate({ bottom: 0 }, 1000);
            }

            else {
                tg.stop().animate({ opacity: 0 })
                tg.children('div').stop().animate({ bottom: '-10%' }, 1000);

            }
        });
    });


    /* 스킬 */
    skillsProgressbar();
    function skillsProgressbar() {
        var htmlNum = 90;
        var cssNum = 90;
        var jqueryNum = 80;
        var figmaNum = 80;
        var reactNum = 70;
        var githubNum = 70;
        var phpNum = 60;
        var bootstrapNum = 80;
        var max = 100;
        var duration = 1500;

        //그래프 처음 위치 초기화
        $('.bar').css('right', '100%');


        //html
        $('#html_bar').stop().animate({
            'right': 100 - (htmlNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#html_cnt').text(Math.round(htmlNum * progress)); //반올림
            }
        });

        //css
        $('#css_bar').stop().animate({
            'right': 100 - (cssNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#css_cnt').text(Math.round(cssNum * progress)); //반올림
            }
        });

        $('#jQuery_bar').stop().animate({
            'right': 100 - (jqueryNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#jquery_cnt').text(Math.round(jqueryNum * progress)); //반올림
            }
        });

        $('#figma_bar').stop().animate({
            'right': 100 - (figmaNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#figma_cnt').text(Math.round(figmaNum * progress)); //반올림
            }
        });

        $('#react_bar').stop().animate({
            'right': 100 - (reactNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#react_cnt').text(Math.round(reactNum * progress)); //반올림
            }
        });

        $('#github_bar').stop().animate({
            'right': 100 - (githubNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#github_cnt').text(Math.round(githubNum * progress)); //반올림
            }
        });

        $('#php_bar').stop().animate({
            'right': 100 - (phpNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#php_cnt').text(Math.round(phpNum * progress)); //반올림
            }
        });

        $('#bootstrap_bar').stop().animate({
            'right': 100 - (bootstrapNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animate, progress, msRemaining) {
                $('#bootstrap_cnt').text(Math.round(bootstrapNum * progress)); //반올림
            }
        });

    }



    /* 프로젝트 탭 */
    $('.project').each(function () {
        let tit = $('.project_title ul li a');
        let cont = $('.porject_contents .p_c');
        let lastTit = tit.filter('.active');
        let lastCont = $(lastTit.attr('href'));

        cont.fadeOut(200);
        lastCont.fadeIn(200);

        tit.click(function (e) {
            e.preventDefault();
            let currentTit = $(this);
            let currenCont = $(currentTit.attr('href'));

            if (lastTit.get(0) == currentTit.get(0)) { return }

            lastTit.removeClass('active');
            currentTit.addClass('active');
            lastCont.fadeOut(200);
            currenCont.fadeIn(200);
            currenCont.css('z-index', 10000);

            lastTit = currentTit;
            lastCont = currenCont;
        })

    });

    $('#CSS .projects').find('ul>li.pc:gt(0)').hide();
    var now1 = 0;
    $('#CSS').each(function () {
        let nBtn1 = $(this).find('.next a');
        let pBtn1 = $(this).find('.prev a');
        nBtn1.click(function () {
            let next1 = (now1 + 1) % 3;

            $('#CSS .projects').find('ul>li.pc').eq(now1).fadeOut(1000);
            $('#CSS .projects').find('ul>li.pc').eq(next1).fadeIn(1000);
            now1 = next1;
        });
        pBtn1.click(function () {
            let prev1 = (now1 - 1) % 3;

                $('#CSS .projects').find('ul>li.pc').eq(now1).fadeOut(1000);
                $('#CSS .projects').find('ul>li.pc').eq(prev1).fadeIn(1000);
            now1 = prev1;
        });
    });


    $('#jQuery .projects').find('ul>li.pc:gt(0)').hide();
    var now2 = 0;
    $('#jQuery').each(function () {
        let nBtn2 = $(this).find('.next a');
        let pBtn2 = $(this).find('.prev a');
        nBtn2.click(function () {
            let next2 = (now2 + 1) % 3;

            $('#jQuery .projects').find('ul>li.pc').eq(now2).fadeOut(1000);
            $('#jQuery .projects').find('ul>li.pc').eq(next2).fadeIn(1000);
            now2 = next2;
        });
        pBtn2.click(function () {
            let prev3 = (now2 - 1) % 3;

            $('#jQuery .projects').find('ul>li.pc').eq(now2).fadeOut(1000);
            $('#jQuery .projects').find('ul>li.pc').eq(prev3).fadeIn(1000);
            now2 = prev3;
        });
    });

    $('#responsive .projects').find('ul>li.pc:gt(0)').hide();
    var now3 = 0;
    $('#responsive').each(function () {
        let nBtn3 = $(this).find('.next a');
        let pBtn3 = $(this).find('.prev a');
        nBtn3.click(function () {
            let next3 = (now3 + 1) % 3;

            $('#responsive .projects').find('ul>li.pc').eq(now3).fadeOut(1000);
            $('#responsive .projects').find('ul>li.pc').eq(next3).fadeIn(1000);
            now3 = next3;
        });
        pBtn3.click(function () {
            let prev3 = (now3 - 1) % 3;

            $('#responsive .projects').find('ul>li.pc').eq(now3).fadeOut(1000);
            $('#responsive .projects').find('ul>li.pc').eq(prev3).fadeIn(1000);
            now3 = prev3;
        });
    });



    /* contact */

    $('.contact_txt table td button').click(function () {
        $(this).next('figure').css('display', 'block');
        $(this).next('figure').animate({ opacity: 1 });
    });


    $('.contact').flip({
        axis: 'y',
        reverse: false, //false는 역전환
        trigger: 'hover'
    })


});