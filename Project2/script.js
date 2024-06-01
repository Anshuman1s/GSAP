var tl = gsap.timeline();

tl.from('#nav h1',{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.32,
    
})
tl.from('#nav h2',{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.32,

})
tl.from('#main #first',{
    x:-500,
    opacity:0,
    duration:0.9,
    stragger:0.8,
})
tl.from('#main #second',{
    x:-500,
    opacity:0,
    duration:0.9,
    stragger:0.8,
})
tl.from("#main p",{
    x:-500,
    opacity:0,
    duration:1,
    
})