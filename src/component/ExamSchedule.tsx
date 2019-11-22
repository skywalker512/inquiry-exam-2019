import React from 'react';
import styled from 'styled-px2vw';
import useStuNum from '../hook/useStuNum';
import { useExamSchedule } from '../hook/useFetch';
import BWarn from './BWarn';
import ExamScheduleList from './ExamScheduleList';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => {
  const stuNum = useStuNum();
  const { data } = useExamSchedule(stuNum);

  return (
    <Wrapper>
      {!data && <BWarn massage="加载中..." />}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {data && data.data.map(item => <ExamScheduleList {...item} />)}
    </Wrapper>
  );
};
