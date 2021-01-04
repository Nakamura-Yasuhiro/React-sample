import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyParent from './MyParent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyParent />, document.getElementById('root'));
registerServiceWorker();
