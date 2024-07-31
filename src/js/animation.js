import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import $ from "jquery"
import "slick-carousel"
gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin) 

export const mapAnim = gsap.timeline()
  export function mapAnimation () {
    
    mapAnim.timeScale(1.5)
    for(let i = 1; i <= 5 ; i++){
        mapAnim.from(`.dot-loc-${i}`, {scale: 0, duration: 1})
        if(i === 5) {
            mapAnim.fromTo('.map-road', {strokeDasharray: 600, strokeDashoffset: 600}, {repeat: -1, repeatDelay: 3 ,duration: 5 ,strokeDashoffset: 1,})
        }
    }
  }
  mapAnimation()
  
  

  export function holderTimeline (section, currentSlide) {
      const holderTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=800",
          toggleActions: "play reverse play reverse",
        }
      })

    holderTl.timeScale(1)
    holderTl.from(currentSlide.querySelectorAll('.holder-slider__info-item'), {
      autoAlpha: 0,
      yPercent: -5,
      stagger: 0.1,
    })
    holderTl.from(currentSlide.querySelectorAll(".headline-right, .description__head"), {
      autoAlpha: 0,
      xPercent: -5,
    }, )
    holderTl.from(currentSlide.querySelectorAll(".description__head > ul > li"), {
      autoAlpha: 0,
      stagger: 0.2,
    }, ) 
    holderTl.from(currentSlide.querySelectorAll(".holder-slider__description"), {
      backgroundPositionX: "200%",
    }, ) 
  }

  const mobileMenuTl = gsap.timeline({paused: true, reversed: true})

  mobileMenuTl.to(".logo", {x: -200} )
  .to(".menu__list", {top: 0})
  
  const toogleAnimMobileMenu = () => {
    if(mobileMenuTl.reversed()){
      mobileMenuTl.play();
    } else {
      mobileMenuTl.reverse()
    }
  }
  const mobileBtn = document.querySelector(".header-menu__mobile-btn")
  mobileBtn.addEventListener("click", toogleAnimMobileMenu)

  document.querySelectorAll('section').forEach(section => {

    gsap.from(section.querySelector('.title'), {
      scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "+=600",
          toggleActions: "play reverse play reverse",
          
      }, 
      autoAlpha: 0,
      xPercent: -5,
    });
  })

    gsap.from(".subtitle", {
        scrollTrigger: {
            trigger: ".surf",
            start: "top 300",
            end: "+=600",            
            toggleActions: "play reverse play reverse"
        }, 
        autoAlpha: 0,
        xPercent: 5,
      });
      
      gsap.from(".slider-map", {
        scrollTrigger: {
            trigger: ".surf",
            start: "top 100",
            end: "+=1400",
            //scrub: 1,
            //markers: 1,
            //pin: true,
            toggleActions: "play reverse play reverse"
        }, 
        scale: 0,
      });

      gsap.from(".surf-box", {
        yPercent: 50,
        autoAlpha: 0,
        stagger: 0.2,
        // xPercent: -100,
        // x: () => innerWidth * 2,
        scrollTrigger: {
            trigger: ".surf-slider",
            start: "top center",
        }, 

      });
      const shopTl = gsap.timeline({    
        scrollTrigger: {
          trigger: ".shop",
          start: "200 center",
          toggleActions: "play reverse play reverse"
        }
      })
      shopTl.timeScale(0.4)
      shopTl.fromTo(".surfboard", {
        opacity: 0.2,
        x: "100vh",
        rotation: -90,
        scale: 0.1,
      }, {
        x: "200",
        rotation: -70,
        scale: 0.3,
        opacity: 0.7,
        ease: "power1.in",
      })
      shopTl.to(".surfboard", {
        opacity: 1,
        x: '0',
        rotation: 0,
        scale: 1,
        position: "center"
      })


