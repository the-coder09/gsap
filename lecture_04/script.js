var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.5
})
tl.from("#nav h1 , #nav h3 , #nav h4 ",{
    y:-80,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.2
})
tl.from(".left h1",{
    x:-200,
    opacity:0,
    stagger:0.2,
})
tl.from(".right img",{
    scale:0.5,
    opacity:0,
        duration:0.5
})


tl.from("#page2 .box,#p21,#p22,#p23",{
    opacity:0,
duration:2,
scale:0,
    scrollTrigger:{
        trigger:"#page2 .box,#p21,#p22,#p23,line",
        scroller:"body",
        scrub:3,
    }
})

