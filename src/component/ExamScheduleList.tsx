import React from 'react';
import styled from 'styled-px2vw';
import { IExamScheduleData } from '../interface/dto';

const Wrapper = styled.div``;
const Content = styled.div`
  padding: 50px 40px;
  color: #8d8d8d;
  .title {
    color: #454545;
    font-size: 35px;
    margin-bottom: 10px;
  }
  .time {
    display: flex;
    margin-bottom: 8px;
    .week {
      margin-right: 60px;
    }
  }
`;

const day = ['一', '二', '三', '四', '五', '六', '天'];

const ExamScheduleList: React.FC<{ item: IExamScheduleData }> = ({
  item: {
    course,
    classroom,
    seat,
    week,
    weekday,
    begin_time: beginTime,
    end_time: endTime,
  },
}) => (
  <Wrapper>
    <Content>
      <div className="title">{course}</div>
      <div className="time">
        <div className="week">
          {week}周 周{day[Number(weekday) - 1]}
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
