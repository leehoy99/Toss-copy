$(function() {
    setTimeout(() => {
        $('.section1 .paragraph-box').addClass('on');
        $('.section1 .app-button').addClass('on');
        $('.section1 .down-arrow').addClass('on');
    }, 1300);
    $(window).scroll(function () {         
        
        // nav-fix

        const sct = $(window).scrollTop();
        let calc;
        if(sct > 1) {
            $('.nav').addClass('fixed');
        } else if (sct <= 1) {
            $('.nav').removeClass('fixed');
        }

        // section scroll action

        
        function sectionOffset(section) {
            var secOff = $(section).offset();
            return secOff.top;
        }

        //section3
        
        if (sct >= sectionOffset('.section3') - 700) {
            $('.section3 .contents .main-paragraph').addClass('ani');
            $('.section3 .contents .sub-paragraph').addClass('ani');
            $('.section3 .contents .section-img-1-box .phone-img').addClass('ani');
            $('.section3 .contents .section-img-1-box .inner-img').addClass('ani');
            $('.section3 .contents .section-img-2-box .phone-img').addClass('ani');
            $('.section3 .contents .section-img-2-box .inner-img').addClass('ani');
        }

        //section4

        if (sct >= sectionOffset('.section4') - 700) {
            $('.section4 .contents .main-paragraph').addClass('ani');
            $('.section4 .contents-box .contents-paragraph-box').addClass('ani');
            $('.section4 .contents-box .contents-card').addClass('ani');
        }

        //section5

        if (sct >= sectionOffset('.section5') - 700) {
            $('.section5 .contents .main-paragraph').addClass('ani');
            $('.section5 .contents .img-box').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .sub-paragraph').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-1').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-2').addClass('ani');
            $('.section5 .contents .paragraph-box .paragraph-text-box .paragraph-text-3').addClass('ani');
        }


        // section5-gallery
        function gallery () {
            let count = 1;
            setInterval(() => {
                const timeCalc = count++ %3
                console.log(timeCalc);
            
                switch (timeCalc) {
                    case 0 : {
                        $('.section5 .contents .img-box .inner-img-1').addClass('on');
                        $('.section5 .contents .img-box .inner-img-2').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-3').removeClass('on');
                    }
                        break;
                    case 1 : {
                        $('.section5 .contents .img-box .inner-img-1').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-2').addClass('on');
                        $('.section5 .contents .img-box .inner-img-3').removeClass('on');
                    }
                        break;
                    case 2 : {
                        $('.section5 .contents .img-box .inner-img-1').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-2').removeClass('on');
                        $('.section5 .contents .img-box .inner-img-3').addClass('on');
                    }
                        break;
                    default: return;
                }
            }, 3000);
        }

        //section6

        if (sct >= sectionOffset('.section6') - 700) {
            $('.section6 .contents .main-paragraph').addClass('ani');
            $('.section6 .contents .contents-grid .grid .grid-text').addClass('ani');
            $('.section6 .contents .contents-grid .grid .grid-img').addClass('ani');
        }

        //section7
        
        if (sct >= sectionOffset('.section7') - 700) {
            $('.section7 .contents .main-paragraph').addClass('ani');
            $('.section7 .contents .img-box .img-text-center .img-text-L').addClass('ani');
            $('.section7 .contents .img-box .img-text-center .img-text-R').addClass('ani');
            $('.section7 .contents .img-box .img-text-bottom').addClass('ani');
        }

        // section7 - chart
        const chartOpacity = () => {
            $('.section7 .contents .img-box .inner-img .chart .chart-box').css({'opacity': 0})
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(3).css({'opacity': 1 })
            
        if (sct >= sectionOffset('.section7') + 200 ){
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(2).css({'opacity': 1 }
            );
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(4).css({'opacity': 1 }
            );
        }
        if (sct >= sectionOffset('.section7') + 300 ){
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(1).css({'opacity': 1 }
            );
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(5).css({'opacity': 1 }
            );
        }
        if (sct >= sectionOffset('.section7') + 400 ){
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(0).css({'opacity': 1 }
            );
            $('.section7 .contents .img-box .inner-img .chart .chart-box').eq(6).css({'opacity': 1 }
            );
        }
        }
        chartOpacity();


        // section8-width
        if (sct > 9470) {
            calc = (sct - 9000)*2.0;
            // console.log(calc)
            if (calc < 2100 ) {
                $('.section8 .contents').css({'width': calc});
                // console.log('this is calc' + calc)
            }
        }

        const section9Opacity = () => {

            if(sct < sectionOffset('.section9-contents-1')-1200) {
                $('.section9-contents-1').css({'opacity': 0});
                $('.section9-contents-2').css({'opacity': 0});
                $('.section9-contents-3').css({'opacity': 0});
            }
            if (sct >= sectionOffset('.section9-contents-1')-1200) {
                calc = (sct-10000)/1000 - 1;
                $('.section9-contents-1').css({'opacity': calc});
            }
            if (sct >= sectionOffset('.section9-contents-2')-1200) {
                calc = (sct-10000)/1000 - 2;
                $('.section9-contents-2').css({'opacity': calc});
            }
            if (sct >= sectionOffset('.section9-contents-3') -1200) {
                calc = (sct-10000)/1000 - 3.3;
                $('.section9-contents-3').css({'opacity': calc});
            }
        }
        section9Opacity()

        //section10

        if (sct >= sectionOffset('.section10') - 700) {
            $('.section10 .contents .main-paragraph').addClass('ani');
            $('.section10 .contents-box .inner-contents').addClass('ani');
        }

        //section11

        if (sct >= sectionOffset('.section11') - 700) {
            $('.section11 .contents .main').addClass('ani');
            $('.section11 .contents .sub').addClass('ani');
        }
    });
})