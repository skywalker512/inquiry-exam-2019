import { createGlobalStyle } from 'styled-components';
import 'swiper/css/swiper.min.css';

export const Theme = {
  color: {
    mainFontColor: '#B1CEDF',
  },
};
export const PositionAll = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
export const GlobalStyle = createGlobalStyle`
  a { text-decoration: none; }
  html, body {
     position: absolute;
     ${PositionAll};
     overflow: hidden;
     color: ${Theme.color.mainFontColor};
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
