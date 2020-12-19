import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FEATURES from './FEATURES.js';
import App from './App';

ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
