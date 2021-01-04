import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <div>
    <h3>こんにちは、世界！</h3>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
