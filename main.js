import gsap from 'gsap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

const progress = document.querySelector('.header__progress');
swiper.on('progress', ({ progressLoop }) => {
  progress.textContent = `( ${Math.floor(progressLoop * 100)} )`;
});

const slides = document.querySelectorAll('.swiper__slide');
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

// pode ser interessante
//updateonwindowresize
//watchSlidesProgress
