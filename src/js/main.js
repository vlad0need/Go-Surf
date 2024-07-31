import $ from "jquery"
import "slick-carousel"
import "../scss/main.scss";
import "./animation"
import { mapAnim, holderTimeline } from "./animation";


$(function(){
    $('.header__slider').slick({
        fade: true,
        infinite: true,
        prevArrow: `<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="image arrow">`,
        nextArrow: `<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="image arrow">,`,
        asNavFor: `.slider-dots-head`,
        
    })
    $('.slider-dots-head').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: `.header__slider`,
    })
    $('.surf-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="image arrow">`,
        nextArrow: `<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="image arrow">,`,
        asNavFor: '.slider-map',
        responsive: [
            {
              breakpoint: 1215,
              settings: {
                slidesToShow: 3,
                centerMode: true,
              }
            },
            {
                breakpoint: 820,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                }
              },
        ]
    })
    $('.slider-map').slick({
        centerMode: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        
    })
    $('.holder__slider, .shop__slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="image arrow">`,
        nextArrow: `<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="image arrow">,`,
    })

    $('.header__slider').on('afterChange', function(event, slick){
        var currentSlideContent = $('.header__slider').find('.slick-current').find(".header__slider-item").addClass("JOPA");
        console.log(currentSlideContent);
        console.log(document.querySelectorAll(".JOPA"))
      });

      
      
})

$('.header__slider').on('beforeChange', function(event, slick, direction){
    mapAnim.restart()
  });

  
  document.querySelectorAll('.holder').forEach((section, i) => {
    $('.holder__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var currentSlideElement = $('.slick-slide[data-slick-index="' + nextSlide + '"]');
        var slideToAnimate = currentSlideElement.find('.holder__slider-item').get(i);
        holderTimeline(section, slideToAnimate)
      })
    holderTimeline(section, section.querySelector(".holder__slider-item:first-of-type"))
  })



$('.surfboard-box-circle').on('click', function() {
    $(this).toggleClass('active')
})

$('.holder-slider__info-booking').each( (i, el) => { 
    calcutePriceBooking(i ,el)
} )

function calcutePriceBooking (i ,index) {
    const nights = index.querySelector('.holder-slider__info-nights')
    const guests = index.querySelector('.holder-slider__info-guests')
    const price = index.querySelector('.holder-slider__info-price')

    const plusGuestBtn = index.querySelector('.btn-plus-guest')
    const minusGuestBtn = index.querySelector('.btn-minus-guest')

    const plusNightBtn = index.querySelector('.btn-plus-night')
    const minusNightBtn = index.querySelector('.btn-minus-night')

    const pricePerNight = [20, 44, 60, 35, 25, 50, 70, 100,];
    let valueForNight = 5;
    let valueForGuest = 4;
    let totalPrice = 399


function addNigth () {
    if(valueForNight === 21){
        return
    }
    valueForNight++;
    nights.innerText = `${valueForNight} NIGHTS`;
    updatPrice()
}
function minusNigth () {
    if(valueForNight === 1){
        return
    }
    valueForNight--;
    nights.innerText = `${valueForNight} NIGHTS`;
    updatPrice()
}
function plusGuest () {
    if(valueForGuest === 12){
        return
    } 
    valueForGuest++;
    guests.innerText = `${valueForGuest} GUESTS`
    updatPrice()
}
function minusGuest () {
    if(valueForGuest === 1){
        return
    }
    valueForGuest--;
    guests.innerText = `${valueForGuest} GUESTS`
    updatPrice()
}
function updatPrice () {
    totalPrice = (pricePerNight[i] * valueForNight) * valueForGuest
    return price.innerHTML = `$ ${totalPrice - 1} USD <span>per night</span>`;
}
updatPrice()

plusNightBtn.addEventListener('click', addNigth);
minusNightBtn.addEventListener('click', minusNigth);

plusGuestBtn.addEventListener('click', plusGuest);
minusGuestBtn.addEventListener('click', minusGuest);

}







