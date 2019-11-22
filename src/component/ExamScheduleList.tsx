import React from 'react';
import styled from 'styled-px2vw';
import { IExamScheduleData } from '../interface/dto';

const Wrapper = styled.div``;
const Content = styled.div``;

const ExamScheduleList: React.FC<IExamScheduleData> = ({
  course,
  classroom,
  seat,
  week,
  weekday,
  begin_time: beginTime,
  end_time: endTime,
}) => (
  <Wrapper>
    <Content>
      <div className="title">{course}</div>
      <div className="time">
        <div className="week">
          {week}周周{weekday}
        </div>
        <div className="clock">
          {beginTime} - {endTime}
        </div>
      </div>
      <div className="location">
        {classroom} 场 {seat} 号
      </div>
    </Content>
  </Wrapper>
);

export default ExamScheduleList;
