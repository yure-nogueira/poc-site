import gsap from 'gsap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slides = document.querySelectorAll('.swiper__slide');
const progress = document.querySelector('.header__progress');

/**
 ** swiper
 **/
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 2,
  freeMode: true,
  loop: true,
  spaceBetween: 80,
  mousewheel: {
    eventsTarget: '.swiper',
    sensitivity: 0.35
  },
  parallax: true,
  speed: 600,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    996: {
      slidesPerView: 4
    }
  }
});

swiper.on('progress', ({ progressLoop }) => {
  progress.textContent = `( ${Math.floor(progressLoop * 100)} )`;
});

/**
 ** animation triggers
 **/
slides.forEach((slide) => {
  const title = slide.querySelector('.swiper__title');

  slide.addEventListener('mouseleave', () => {
    title.style.animationPlayState = 'running';

    setTimeout(() => {
      title.style.animation = 'none';
    }, 600);

    setTimeout(() => {
      title.style.animation = '';
    }, 650);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.swiper__slide');
  slides.forEach((slide) => {
    // const shades = slide.querySelector('.swiper__shades');
    const image = slide.querySelector('.swiper__img');

    // shades.style.animationPlayState = 'running';
    image.style.animationPlayState = 'running';
  });
});

/**
 ** mouse animation
 **/

let xTo = gsap.quickTo('.mouse-cursor', 'x', { duration: 0.6, ease: 'power3' }),
  yTo = gsap.quickTo('.mouse-cursor', 'y', { duration: 0.6, ease: 'power3' });

window.addEventListener('mousemove', (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

slides.forEach((slide) => {
  slide.addEventListener('mouseenter', () => {
    gsap.to('.mouse-cursor', { scale: 0.2, duration: 0.3 });
  });

  slide.addEventListener('mouseleave', () => {
    gsap.to('.mouse-cursor', { scale: 1, duration: 0.3 });
  });
});

// pode ser interessante
//updateonwindowresize
//watchSlidesProgress
