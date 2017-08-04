import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {
      'time':'2 minutes ago',
      'member':'Jerry',
      'desc':'Created new account'
    },
    {
      'time':'12 minutes ago',
      'member':'Linda',
      'desc':'Added comment'
    },
    {
      'time':'1 hour ago',
      'member':'Mike',
      'desc':'Created new account'
    },
    {
      'time':'2 hours ago',
      'member':'Jenna',
      'desc':'Updated title'
    },
    ];


ReactDOM.render(
	<App 
	/>, document.getElementById('root'));
registerServiceWorker();
