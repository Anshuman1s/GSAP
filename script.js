// Initial to final position we will use gsap.to
/* gsap.to("#box",{
    x:1000,
    duration:2, //kitni der tak chale ga animation
    delay:1, //Kitni der baad suru hoga animation
    rotate:360,
    backgroundColor:"yellow"
    // y:1000
}) //initial

*/

// final to initial we will use gsap.from
/*
gsap.from("#box",{
    x:1000,
    duration:2, //kitni der tak chale ga animation
    delay:1, //Kitni der baad suru hoga animation
    rotate:360,
    backgroundColor:"yellow"
})
*/

gsap.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
})
gsap.to("#box2",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:3
})
gsap.to("#box3",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:5
})