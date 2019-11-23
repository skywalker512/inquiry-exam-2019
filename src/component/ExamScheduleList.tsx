import React from 'react';
import styled from 'styled-px2vw';
import { IExamScheduleData } from '../interface/dto';
import iconTimePng from '../assets/img/iconTime.png';
import iconClassroomPng from '../assets/img/iconClassroom.png';
import iconSitePng from '../assets/img/iconSite.png';

const Wrapper = styled.div`
  height: 163px;
  display: flex;
  align-items: center;
`;

const Split = styled.div`
  width: 4px;
  height: 80px;
  background-color: #d9e4ed;
  margin-right: 60px;
`;

const Content = styled.div`
  margin-left: 45px;
  color: #666666;
  font-size: 24px;
  .title {
    color: #232323;
    font-size: 34px;
    margin-bottom: 25px;
    width: 490px;
  }
  .time {
    display: flex;
    line-height: 25px;
    .week {
      margin-right: 60px;
    }
    &::before {
      content: '';
      background-image: url(${iconTimePng});
      height: 25px;
      width: 25px;
      background-size: 100%;
      margin-right: 15px;
    }
  }
`;

const Location = styled.div`
  color: #666666;
  font-size: 26px;
  .classroom {
    margin-bottom: 30px;
    line-height: 32px;
    position: relative;
    margin-left: 40px;
    &::before {
      content: '';
      position: absolute;
      right: 74px;
      background-image: url(${iconClassroomPng});
      height: 32px;
      width: 24px;
      background-size: 100%;
    }
  }
  .seat {
    line-height: 23px;
    position: relative;
    margin-left: 40px;
    &::before {
      content: '';
      position: absolute;
      right: 74px;
      background-image: url(${iconSitePng});
      height: 23px;
      width: 24px;
      background-size: 100%;
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
    </Content>
    <Split />
    <Location>
      <div className="classroom">{classroom}</div>
      <div className="seat">{seat}</div>
    </Location>
  </Wrapper>
);

export default ExamScheduleList;
