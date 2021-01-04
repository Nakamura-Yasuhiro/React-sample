import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFile from './MyFile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyFile />, document.getElementById('root'));
registerServiceWorker();
