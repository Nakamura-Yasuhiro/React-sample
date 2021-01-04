import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyHelloDef from './MyHelloDef';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyHelloDef />,
  document.getElementById('root')
);
registerServiceWorker();
