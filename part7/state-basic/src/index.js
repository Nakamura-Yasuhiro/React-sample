import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyState from './MyState';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyState />, document.getElementById('root'));
registerServiceWorker();
