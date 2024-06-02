gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:body,
        markers:true,
        start:"top 0"
    }
})