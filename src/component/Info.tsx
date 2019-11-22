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
  font-size: 20px;
  color: #fff;
`;

const StudentNum = styled(Text)`
  font-size: 33px;
  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 60px;
    margin-top: 15px;
    margin-bottom: 18px;
    background-color: #81bbf1;
  }
`;

const { term, stuNum } = getInfo;

export default () => (
  <Wrapper>
    <Content>
      <StudentNum>{stuNum}</StudentNum>
      <Text>{term}</Text>
    </Content>
  </Wrapper>
);
