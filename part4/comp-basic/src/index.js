import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyHello from './MyHello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyHello name="山田" />, 
  document.getElementById('root')
);
registerServiceWorker();
