import React, { useMemo } from 'react';
import styled from 'styled-px2vw';
import { IExamGradeData } from '../interface/dto';

const Wrapper = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
`;

const Course = styled.div`
  color: #000000;
  font-size: 30px;
  padding: 0 40px;
  width: 420px;
`;
const Split = styled.div`
  width: 4px;
  height: 50px;
  background-color: #e2e6ea;
`;
const Grade = styled.div`
  font-size: 30px;
  margin: 0 40px;
`;
const Types = styled.div`
  width: 85px;
  border-radius: 85px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  color: #fff;
`;

const ExamGradeList: React.FC<{ item: IExamGradeData }> = ({
  item: { course, grade, property },
}) => {
  const color = useMemo(() => (property === '理论' ? '#ff9eaf' : '#73c2f8'), [
    property,
  ]);
  return (
    <Wrapper>
      <Course>{course}</Course>
      <Split />
      <Grade style={{ color }}>{grade}</Grade>
      <Types style={{ backgroundColor: color }}>{property.slice(0, 2)}</Types>
    </Wrapper>
  );
};

export default ExamGradeList;
