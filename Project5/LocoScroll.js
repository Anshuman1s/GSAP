gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    delay:1,
    opacity:0,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    delay:1,
    opacity:0,
    rotate:360,
    scrollTrigger:"#page2 #box",
    start:"top 50%",
    marker:true,
})
gsap.from("#page3 #box",{
    scale:0,
    duration:1,
    delay:1,
    opacity:0,
    rotate:360,
    scrollTrigger:"#page3 #box",
    start:"top 50%",
    marker:true,
})
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});