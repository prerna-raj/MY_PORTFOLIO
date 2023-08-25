var tl=gsap.timeline()

//   tl.from(".img ",{
//       x:-100,
//       duration:1,
//       delay:0.5,
//       opacity:0,
//       stagger:0.3
//   })
  tl.to('.img', {
    x: -50,
    duration: 2,
    // delay: 1,
    stagger: 0.2,
    ease: ' Bounce.easeInOut',
   },'a');

tl.from('.content', {
    x:-50,
    stagger: 0.3,
    duration: 2,
    ease: ' Bounce.easeInOut',
},'a');