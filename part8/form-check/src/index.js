import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyCheck from './MyCheck';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyCheck />, document.getElementById('root'));
registerServiceWorker();
