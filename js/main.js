$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);


    const horizontalScroll = gsap.to("#content_box", {
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

        gsap.to(sectionTitBg,{
            scaleX: 1,
            duration: 0.6,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: sta.querySelector('.section_tit_bg'),
                start: 'left 65%',
                markers: true,
                invalidateOnRefresh: true,
                containerAnimation: horizontalScroll,
            }
        });
    });


});