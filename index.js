var typed = new Typed('#element', {
    strings: ['Coder','Web Designer','Front-End Web Developer' ],
    
    typeSpeed: 100,
  });
  var tl=gsap.timeline()

  tl.from("nav .logo,nav .nav-items",{
      y:-100,
      duration:1,
      delay:0.5,
      opacity:0,
      stagger:0.3
  })
  tl.from(".left h1 , .btn ",{
    x:-100,
    opacity:0,
    stagger:0.3
  })
  tl.from(".right img,.button a",{
      scale:0,
      opacity:0,
      
  })
 tl.from(".scroll",{
  y:30,
  repeat:-1,
  duration:0.6,
  yoyo:true,
  opacity:0
 })
 
  