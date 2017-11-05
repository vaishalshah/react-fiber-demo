import React from 'react';
import { render } from 'react-dom';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
