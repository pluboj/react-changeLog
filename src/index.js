import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = 'Change Log';
const headings = ['Updated', 'Member', 'Description'];
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
    ];


ReactDOM.render(
	<App 
		title={title}
		headings={headings}
		data={data}
	/>, document.getElementById('root'));
registerServiceWorker();
