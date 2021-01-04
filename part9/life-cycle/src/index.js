import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyLife from './MyLife';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyLife />, document.getElementById('root'));
registerServiceWorker();
