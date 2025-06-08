$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);


    var horizontalScroll = gsap.to("#content_box", {
        x: () => -(document.querySelector('#content_box').scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#scroll_box", 
            start: "top top", 
            end: () => "+=" + (document.querySelector('#content_box').scrollWidth - window.innerWidth),
            scrub: true, 
            pin: true, 
            anticipatePin: 1,
            // markers: true,
            invalidateOnRefresh: true,
        }
    });

    $('.header, #nav ul li').on('mouseenter focusin', function(){
        $('#header').addClass('active');
    });

    $('.header').on('mouseleave focusout', function(){
        $('#header').removeClass('active');
    });
    
    var sectionTitArea = document.querySelectorAll('.section_tit_area');

    sectionTitArea.forEach((sta, i) => {

        var sectionTitBg = sta.querySelector('.section_tit_bg');

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: sta.querySelector('.section_tit_bg'),
                start: 'left 70%',
                invalidateOnRefresh: true,
                containerAnimation: horizontalScroll,
                onEnter: () => sta.classList.add('active'),
            }
        });

    });

    var sectionPic = document.querySelectorAll('.section_pic');

    sectionPic.forEach((sPi, i) => {

        gsap.to(sPi, {
            scrollTrigger: {
                trigger: sPi,
                start: '80% right',
                invalidateOnRefresh: true,
                containerAnimation: horizontalScroll,
                onEnter: () => sPi.classList.add('active'),
            }
        });

    });

    var graphBox = document.querySelectorAll('.graph_box');

    graphBox.forEach((gpB, i) => {

        gsap.to(gpB, {
            scrollTrigger: {
                trigger: gpB,
                start: '80% right',
                invalidateOnRefresh: true,
                containerAnimation: horizontalScroll,
                onEnter: () => gpB.classList.add('active'),
            }
        }); 
    });

    // $('.graph_box ul li').each(function(){
    //     var idx = $(this).index();
    //     $(this).children('.graph_line').css({
    //         'transition-delay': 0.2 * idx + 's',
    //     }
    //     );
    // });

    var infoBox = document.querySelectorAll('.infoBox');

    infoBox.forEach((ifB, i) => {
        gsap.to(ifB, {
            scrollTrigger: {
                trigger: ifB,
                start: '100% right',
                invalidateOnRefresh: true,
                containerAnimation: horizontalScroll,
                onEnter: () => ifB.classList.add('active'),
            }
        });

    });

});