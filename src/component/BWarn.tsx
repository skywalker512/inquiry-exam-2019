import React from 'react';
import styled from 'styled-px2vw';
import errorPng from '../assets/img/error.png';
import happyPng from '../assets/img/happy.png';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 345px;
  height: 271px;
`;

const Text = styled.div`
  margin-top: 40px;
`;

export default ({ isError = false, massage = '' }) => (
  <Wrapper>
    <Image src={isError ? errorPng : happyPng} />
    <Text>{massage}</Text>
  </Wrapper>
);
