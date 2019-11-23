import React from 'react';
import styled from 'styled-px2vw';
import getInfo from '../hook/getInfo';

const Wrapper = styled.div`
  height: 310px;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 50px;
`;

const Text = styled.div`
  font-size: 28px;
  color: #dcf6ff;
`;

const StudentNum = styled(Text)`
  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 60px;
    margin: 11px 0;
    background-color: #81bbf1;
  }
`;

const StudentName = styled(Text)`
  color: #ffffff;
  font-size: 60px;
  margin-bottom: 13px;
`;

const { term, stuNum, stuName } = getInfo;

export default () => (
  <Wrapper>
    <Content>
      <StudentName>{stuName}</StudentName>
      <StudentNum>{stuNum}</StudentNum>
      <Text>{term}</Text>
    </Content>
  </Wrapper>
);
