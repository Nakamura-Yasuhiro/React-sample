import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTextarea from './MyTextarea';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyTextarea />, document.getElementById('root'));
registerServiceWorker();
