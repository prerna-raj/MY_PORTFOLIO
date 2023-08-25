var typed = new Typed('#element', {
    strings: ['Coder','Student','Web Designer','Front-End Web Developer' ],
    
    typeSpeed: 100,
  });
  var tl=gsap.timeline( )

  tl.from("nav .logo,nav .nav-items",{
      y:-100,
      duration:1,
      delay:0.5,
      opacity:0,
      stagger:0.3
  })  
  tl.from(".hero , .left , .right",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.2   
})
 tl.from(".scroll",{
  y:30,
  repeat:-1,
  duration:0.6,
  yoyo:true,
  opacity:0
 })
 tl.to('.about_img', {
  x: -90,  
  stagger: 0.2,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".about_img",
    scroller:"body",
    start:"-70% 70%",
    scrub:2,
    // pin:true
  }
 },'a');

tl.from('.about_content', {
  y:90,
  stagger: 0.3,
  opacity:0,
  ease: "back.out(1.7)",
  scrollTrigger:{
    trigger:".about_content",
    scroller:"body",
    start:"-50% 50%",
    scrub:2,
  }
},'a');
 tl.from(" .heading , .skills",{
  scale:0,
  rotate:360,
  x:100,
  ease:"linear",
  scrollTrigger:{
    trigger:".heading",
    scroller:"body",
    start:"top center",
    end:"50% 90%",
    scrub:2,
  }
})

  