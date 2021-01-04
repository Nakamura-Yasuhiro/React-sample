import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyType from './MyType';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <MyType value="山田" />
    <MyType value={ '鈴木' } />
    <MyType value={ 108 } />
    <MyType value={ true } />
    <MyType value={ ['うめ', 'もも', 'さくら'] } />
    <MyType value={ {name: "山田太郎", age: 40} } />
    <MyType value={() => console.log('Hoge') } />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
