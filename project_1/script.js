var tl=gsap.timeline();
tl.from(".navpart1 i,h3",{
    y:-100,
    duration:1,
    delay:0.5,
    stagger:0.2,
    opacity:0,
})
tl.from(".navpart2",{
    x:300,
    duration:1,
    delay:0.5,
    opacity:0,
  
})
tl.from(".content h1",{
    opacity:0,
    stagger:0.3,
    x:-300,
    duration:1,
    
})
tl.from(".content button",{
    opacity:0,
    
    duration:1,
  y:300,
})
tl.from("#page2 .main",{
y:200,
opacity:0,
duration:1,
scrollTrigger:{
    trigger:"#page2 .main",
    scrub:1,
    
    end:"top 75%"
}
})
tl.from("#page2 h2",{
  x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        scrub:2,
        
      end:"top 40%",
      start:"top 60%"

      
      
    }
    })
    tl.from("#page2 h4",{
        x:-200,
          opacity:0,
          duration:1,
          scrollTrigger:{
              trigger:"#page2 h4",
              scroller:"body",
              scrub:2,
       
      
       end:"top 36%",
       start:"top 70%"
 
            
          }
          })
      






    tl.from("#page3 h2",{
        x:-200,
        duration:4,
        opacity:0,
        stagger:0.5,
        scrollTrigger:{
          scroller:"body",
          trigger:"#page3 h2",
          scrub:2,
      
          end:"top 50%",
          start:"top 80%",
        }
    
    })
    
    tl.from("#page3 h4",{
        scale:0.1,
        duration:2,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
          scroller:"body",
          trigger:"#page3 h4",
          scrub:2,
        
          end:"top 50%",
          start:"top 80%",
        }
    })
        
    tl.from("#page3 p",{
  scale:0,
        duration:2,
        opacity:0,
       
        scrollTrigger:{
          scroller:"body",
          trigger:"#page3 p",
          scrub:2,
        
          end:"top 70%"
        }
    })
    tl.to("#page3 img",{
        y:-30,
        repeat:-1,
        yoyo:true,
        duration:1,

    })
    tl.from("#page3 img",{
        y:10,
    })
  