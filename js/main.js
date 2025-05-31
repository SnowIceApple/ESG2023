$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);


    gsap.to("#content_box", {
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

    $('.header').on('mouseenter focus', function(){
        $('#header').addClass('active');
    });
    $('.header').on('mouseleave blur', function(){
        $('#header').removeClass('active');
    });

});