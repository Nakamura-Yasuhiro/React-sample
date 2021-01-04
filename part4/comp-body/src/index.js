import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyHelloContent from './MyHelloContent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyHelloContent>
    <b>山田</b>
  </MyHelloContent>, 
  document.getElementById('root')
);
registerServiceWorker();
