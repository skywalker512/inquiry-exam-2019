import React from 'react';
import styled from 'styled-px2vw';
import HeaderBgPng from '../assets/img/headerbg.png';

const Wrapper = styled.img`
  width: 100%;
  height: 310px;
  position: absolute;
`;

export default () => <Wrapper src={HeaderBgPng} />;
