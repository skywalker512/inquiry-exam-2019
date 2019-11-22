import React, { useEffect } from 'react';
import styled from 'styled-px2vw';
import Swiper, { ReactIdSwiperProps, SwiperInstance } from 'react-id-swiper';
import useStuNum from '../hook/useStuNum';
import { useExamGrade } from '../hook/useFetch';
import BWarn from './BWarn';
import ExamGradeList from './ExamGradeList';
import Config from '../config';

const Wrapper = styled.div`
  width: 100%;
  & > div:nth-child(2n - 1) {
    background-color: #f5faff;
  }
`;

let swiperInstance: SwiperInstance;

const config: ReactIdSwiperProps = {
  ...Config.subSwiperConfig,
  getSwiper: swiper => {
    swiperInstance = swiper;
  },
};

export default () => {
  const stuNum = useStuNum();
  const { data, error } = useExamGrade(stuNum);

  useEffect(() => {
    if (swiperInstance) swiperInstance.update();
  }, [data]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Swiper {...config}>
      <Wrapper>
        {error && <BWarn massage="出现错误..." isError />}
        {!data && <BWarn massage="加载中..." />}
        {data && !data.data.length && (
          <BWarn massage="没有找到你的信息" isError />
        )}
        {data &&
          data.data.map(item => (
            <ExamGradeList key={item.course + item.grade} item={item} />
          ))}
      </Wrapper>
    </Swiper>
  );
};
