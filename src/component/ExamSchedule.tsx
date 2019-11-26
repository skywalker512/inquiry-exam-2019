import React, { useEffect, useState } from 'react';
import styled from 'styled-px2vw';
import Swiper, { ReactIdSwiperProps, SwiperInstance } from 'react-id-swiper';
import { useExamSchedule } from '../hook/useFetch';
import BWarn from './BWarn';
import ExamScheduleList from './ExamScheduleList';
import Config from '../config';
import getInfo from '../hook/getInfo';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  & > div:nth-child(2n - 1) {
    background-color: #f5faff;
  }
`;

const { stuNum } = getInfo;

export default ({ isReexam = false }) => {
  const { data, error } = useExamSchedule(
    stuNum,
    isReexam ? 'examReexam' : 'examSchedule',
  );
  if (data && data.nowWeek) {
    sessionStorage.setItem('nowWeek', data.nowWeek.toString());
  }
  // 避免两次 render 拿到同样的实例
  const [swiperInstance, SetSwiperInstance] = useState<SwiperInstance>();

  const config: ReactIdSwiperProps = {
    ...Config.subSwiperConfig,
    getSwiper: swiper => {
      SetSwiperInstance(swiper);
    },
  };

  useEffect(() => {
    if (swiperInstance) swiperInstance.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <ExamScheduleList key={item.course + item.seat} item={item} />
          ))}
      </Wrapper>
    </Swiper>
  );
};
