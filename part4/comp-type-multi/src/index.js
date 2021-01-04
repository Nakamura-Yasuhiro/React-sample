import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyAttrMulti from './MyAttrMulti';
import registerServiceWorker from './registerServiceWorker';

const data = {
  name: '山田権左衛門',
  age: 18,
  sex: '男',
};

ReactDOM.render(
  <MyAttrMulti {...data} />,
  document.getElementById('root')
);
registerServiceWorker();
