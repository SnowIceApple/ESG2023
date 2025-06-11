$(document).ready(function(){

    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    var sectionTitArea = document.querySelectorAll('.section_tit_area');
    var sectionPic = document.querySelectorAll('.section_pic');
    var graphBox = document.querySelectorAll('.graph_box');
    var infoBox = document.querySelectorAll('.infoBox');
    var topicMainTit = document.querySelectorAll('.topic_main_tit');
    var sections = gsap.utils.toArray('section');


    
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    ScrollTrigger.matchMedia({
        "(min-width: 912px)": function(){
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
        }
    });


    sectionTitArea.forEach((sta, i) => {

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: sta.querySelector('.section_tit_bg'),
                start: 'left 70%',
                containerAnimation: horizontalScroll,
                onEnter: () => sta.classList.add('active'),
            }
        });

    });


    sectionPic.forEach((sPi, i) => {

        gsap.to(sPi, {
            scrollTrigger: {
                trigger: sPi,
                start: '80% right',
                containerAnimation: horizontalScroll,
                onEnter: () => sPi.classList.add('active'),
            }
        });

    });


    graphBox.forEach((gpB, i) => {

        gsap.to(gpB, {
            scrollTrigger: {
                trigger: gpB,
                start: '80% right',
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


    infoBox.forEach((ifB, i) => {
        gsap.to(ifB, {
            scrollTrigger: {
                trigger: ifB,
                start: '100% right',
                containerAnimation: horizontalScroll,
                onEnter: () => ifB.classList.add('active'),
            }
        });

    });



    topicMainTit.forEach((tMT, i) => {
        var topicMainTrack = tMT.querySelector('.topic_main_tit_track');
        var topicMainMovTxt = topicMainTrack.querySelector('h3');


        gsap.to((topicMainMovTxt), {
            x: () => (tMT.scrollWidth - topicMainMovTxt.scrollWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: topicMainTrack,
                start: - vh(20) + 'left',
                end: () => "+=" + (topicMainTrack.offsetWidth - topicMainMovTxt.scrollWidth),
                containerAnimation: horizontalScroll,
                scrub: 1,
            }
        }); 
    });
    

document.querySelectorAll('#header a, .section_topic_nav a, .footerNav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetHref = this.getAttribute('href').split('#')[1];
        const targetId = document.getElementById(targetHref);
        console.log(targetId);
        const navBar = document.querySelector('.header');
        const scrollToHere = (targetId.offsetLeft - navBar.offsetWidth);
        gsap.to(window, {
            scrollTo: scrollToHere,
            duration: 1,
        });
    });
});


sections.forEach((section, i) => {
    let relatedLink = document.querySelector(`[data-section="${section.id}"]`)
    
    ScrollTrigger.create({
        trigger: section,
        start: - vh(20) + 'left',
        end: () => "+=" + (section.offsetWidth - vh(0.001)),
        containerAnimation: horizontalScroll,
        id: `section-${i+1}`,
        onToggle: () => {
            relatedLink.classList.toggle('active')
        },
    });
    
  });

        }, 
    "(max-width: 911px)": function(){

    sectionTitArea.forEach((sta, i) => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: sta.querySelector('.section_tit_bg'),
                start: '50% bottom',
                onEnter: () => sta.classList.add('active'),
            }
        });
    });

        sectionPic.forEach((sPi, i) => {

        gsap.to(sPi, {
            scrollTrigger: {
                trigger: sPi,
                start: '50% bottom',
                onEnter: () => sPi.classList.add('active'),
            }
        });

        });

        graphBox.forEach((gpB, i) => {

        gsap.to(gpB, {
            scrollTrigger: {
                trigger: gpB,
                start: '80% bottom',
                onEnter: () => gpB.classList.add('active'),
            }
        }); 
    });
    }
    });

     window.addEventListener("resize", ScrollTrigger.update);
    
    $('.header, #nav ul li').on('mouseenter focusin', function(){
        $('#header').addClass('active');
    });

    $('.header').on('mouseleave focusout', function(){
        $('#header').removeClass('active');
    });
    
   





});