import { ReactIdSwiperProps } from 'react-id-swiper';

export default {
  beUrl: process.env.REACT_APP_BE_URL,
  subSwiperConfig: {
    containerClass: 'inner-swiper-container',
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
  } as ReactIdSwiperProps,
};
