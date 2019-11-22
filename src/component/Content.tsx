import React from 'react';
import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import styled from 'styled-px2vw';
import ExamSchedule from './ExamSchedule';
import ExamGrade from './ExamGrade';

const Wrapper = styled.div`
  top: 310px;
  left: 0;
  right: 0;
  bottom: 60px;
  position: absolute;
  .swiper-container {
    overflow: inherit;
    height: 100%;
  }
  .inner-swiper-container {
    height: 100%;
    overflow: hidden;
    .swiper-slide {
      height: auto;
    }
  }
  .swiper-pagination {
    top: -240px;
    left: 170px !important;
    // 以防下面的被挡住
    height: 0 !important;
  }
  .swiper-pagination-bullet-active {
    background: transparent;
    color: #fff !important;
    &::after {
      content: '';
      position: absolute;
      top: 167px;
      left: 0;
      height: 5px;
      width: 32px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 1px 2px 5px 0;
    }
  }
  .swiper-pagination-bullet {
    position: relative;
    opacity: 1;
    background: transparent;
    font-size: 34px;
    margin: 0 43px !important;
    color: #c3e9fa;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const Content = styled.div`
  min-height: 100%;
`;

const title = ['考试查询', '补考查询', '成绩查询'];

const config: ReactIdSwiperProps = {
  lazy: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${title[index]}</span>`;
    },
  },
};

export default () => (
  <Wrapper>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Swiper {...config}>
      <Content>
        <ExamSchedule isReexam={false} />
      </Content>
      <Content>
        <ExamSchedule isReexam />
      </Content>
      <Content>
        <ExamGrade />
      </Content>
    </Swiper>
  </Wrapper>
);
