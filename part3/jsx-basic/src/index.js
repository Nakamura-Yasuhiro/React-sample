import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <p>Reactをはじめよう！</p>
    <p>JSXの基本</p>
  </div>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.Fragment>
//     <p>Reactをはじめよう！</p>
//     <p>JSXの基本</p>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// const tag = <img src={logo} />;

// const tag = (
//   <label htmlFor="name" className="sky">
//     <input id="name" type="text" tabIndex="0" /></label>
//   );

// const tag = (
//   <div>
//     {/* コメントです */}
//     <p
//       // コメントです。
//       /* コメントです。
//       コメントです */
//     >こんにちは、世界！</p>
//   </div>
//   );

// ReactDOM.render(
//   <div>{tag}</div>,
//   document.getElementById('root')
// );

registerServiceWorker();
