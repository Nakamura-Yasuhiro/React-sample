import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyPool from './MyPool';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyPool />, document.getElementById('root'));
registerServiceWorker();
