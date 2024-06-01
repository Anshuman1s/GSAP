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
gsap.from("#box",{
    x:1000,
    duration:2, //kitni der tak chale ga animation
    delay:1, //Kitni der baad suru hoga animation
    rotate:360,
    backgroundColor:"yellow"
})