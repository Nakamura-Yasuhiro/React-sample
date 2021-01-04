import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyEvent from './MyEvent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyEvent greet="Hello" />,
  document.getElementById('root')
);
registerServiceWorker();
