import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyProp, { Member } from './MyProp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyProp prop1={new Member()} />,
  // <MyProp prop1="hoge" />,

  // <MyProp prop2="男" />,
  // // <MyProp prop2="hoge" />,

  //<MyProp prop3="山田太郎" />,
  //  // <MyProp prop3={new Member()} />,

  // <MyProp prop4={[10, 20]} />,
  //  // <MyProp prop4={[1000, '梅']} />,

  // <MyProp prop5={{name: '山田', age: 40, sex: '男'}} />,
  //  // <MyProp prop5={{age: 40, sex: '男'}} />,
  document.getElementById('root')
);
registerServiceWorker();
