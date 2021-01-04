import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const name  = '山田';

ReactDOM.render(
  <p>こんにちは、{name}さん！</p>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <div>
//     <p>名前は、{ '$' + name + '$' }です。</p>
//     <p>現在の日時は、{ new Date().toLocaleString() }です。</p>
//     <p>2の3乗は、{ 2 ** 3 }です。</p>
//   </div>,
//   document.getElementById('root')
// );

// const str = 'こんにちは、世界！<br />さようなら、私';

// ReactDOM.render(
//   // <p>{ str }</p>,
//   <p dangerouslySetInnerHTML={{__html: str}}></p>,
//   document.getElementById('root')
// );

// const url = 'https://wings.msn.to/';

// ReactDOM.render(
//   <a href={url}>サポートサイト</a>,
//   document.getElementById('root')
// );

// const style = { color: 'Red', backgroundColor: 'Yellow' };

// ReactDOM.render(
//   <p style={style}>WINGSプロジェクト</p>,
//   document.getElementById('root')
// );

// const attrs = {
//   src: 'http://www.wings.msn.to/image/wings.jpg',
//   alt: '',
//   title: 'WINGSプロジェクト'
// };

// ReactDOM.render(
//   <img {...attrs} />,
//   document.getElementById('root')
// );
registerServiceWorker();
