import React from 'react';
import BHeader from './component/BHeader';
import Content from './component/Content';
import Info from './component/Info';
import Copyright from './component/Copyright';

const App: React.FC = () => (
  <>
    <BHeader />
    <Info />
    <Content />
    <Copyright />
  </>
);

export default App;
