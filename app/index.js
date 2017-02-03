import './index.css';
import React from 'react';
import { render } from 'react-dom';

// components
import App from './components/App';

render(<App target={125} max={56}/>,document.getElementById('app'));
