const words = ["portfolio", "studio", "agency", ]

let click = gsap.to('.click1', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: 0})
// let boxTl = gsap.timeline()

// boxTl.to('.line', {duration:1, width:"22vw", delay: 0.5, ease: "power4.inOut"})
// .from('.static', {duration:1, y:"7vh", ease: "power3.out"})
// .to('.line', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
// .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
    tl.to('.dynamic1', {duration: 1, text: word})
    masterTl.add(tl)
    
    
  })

  masterTl.add(gsap.to('.dynamic1', {duration: 1, text: "creative"}))



  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-125px";
    }


  }



  const scrollContainer = document.querySelector(".cardss");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY / 2;

  });
  const swiper = new Swiper(".swiper-container", {
    
    slidesPerView: 2,
    spaceBetween: 35        ,
    navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
},


  });
let lineTl = gsap.timeline()
let arrTl = gsap.timeline()

const morph = document.querySelector(".wrap")
morph.onmouseenter = function() {
  lineTl.to(".line1",{width:"100%" , duration:0.5 })
  arrTl.to(".arro",{rotation:-45,duration:0.5})
        
}
morph.onmouseleave = function() {
  lineTl.to(".line1",{width:0 , duration:0.5})
  arrTl.to(".arro",{rotation:0,duration:0.5})
        
}
var rule = CSSRulePlugin.getRule(".waphead1 li::after")
gsap.to(rule, {duration: 5, cssRule: {background:"white"}});

