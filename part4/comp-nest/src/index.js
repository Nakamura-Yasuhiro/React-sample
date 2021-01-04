import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyBook from './MyBook';
import registerServiceWorker from './registerServiceWorker';

const book = {
  isbn: 'WGS-JST-001',
  title: '速習 webpack',
  price: 454,
  published: 'WINGSプロジェクト'
};

ReactDOM.render(
  <MyBook info={book} />,
  document.getElementById('root')
);
registerServiceWorker();
