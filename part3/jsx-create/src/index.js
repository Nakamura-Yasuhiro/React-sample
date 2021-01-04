import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const name = 'WINGSプロジェクト'; 
const tag = (
  <div className="main">
    <h1>ようこそ、{name}へ！</h1>
    <img src="http://www.wings.msn.to/image/wings.jpg" />
    こんにちは、世界！
  </div>
);

// const name = 'WINGSプロジェクト'; 
// const tag = React.createElement(
//   'div',
//   { className: 'main' },
// React.createElement(
//   'h1',
//   null,
//   `ようこそ、${name}へ`
// ),
// React.createElement(
//   'img',
//   { src: 'http://www.wings.msn.to/image/wings.jpg' }
// ),
// 'こんにちは、世界！'
// );

ReactDOM.render(
  <div>{tag}</div>,
  document.getElementById('root')
);
registerServiceWorker();
