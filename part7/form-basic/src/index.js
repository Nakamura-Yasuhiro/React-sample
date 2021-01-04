import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './MyForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyForm />, document.getElementById('root'));
registerServiceWorker();
