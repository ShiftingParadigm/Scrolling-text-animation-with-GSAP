function marqueeAnimation() {
    window.addEventListener("wheel",function(dets){
        if (dets.deltaY > 0) {
         gsap.to(".marquee",{
             transform : "translateX(-200%)",
             duration : 2,
             repeat : -1,
             ease : "none"
         })
     
         gsap.to(".marquee>img",{
             rotate:180,
         })
     
        }
     
     
        
        if (dets.deltaY < 0) {
         gsap.to(".marquee",{
             transform : "translateX(0%)",
             duration : 2,
             repeat : -1,
             ease : "none"
         })
     
         gsap.to(".marquee>img",{
             rotate:0,
         })
     
        }
     
     })
}

marqueeAnimation()