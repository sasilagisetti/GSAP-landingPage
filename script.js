let tl = gsap.timeline();

gsap.from("#img1",{
    x:-40,
    delay:.2,
    duration:1
})
gsap.from("#nav img",{
    x:-40,
    delay:.4,
    duration:2,
    opacity:0
})
gsap.from("#nav-part-2 a",{
    y:-40,
    delay:.4,
    duration:2,
    opacity:0,
    // stagger:.5
})
gsap.from("#nav-part-3 a",{
    x:25,
    delay:.4,
    duration:2,
    opacity:0,
})
tl.from("#main>h1",{
    y:-200,
    delay:1,
    duration:1.5,
    opacity:0,
    stagger:0.5
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    x:-100,
    duration:1,
    delay:.2,
    stagger:0.2
})
tl.from("h5",{
    scale:0,
    opacity:0,

})
tl.to("h5",{
    y:10,
    repeat:-1,
    duration:.5,
    yoyo:true
})