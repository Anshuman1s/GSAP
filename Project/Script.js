var tl = gsap.timeline();
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.32,
})
tl.from("#image",{
    x:-500,
    opacity:0,
    duration:0.5,



})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.9,
})