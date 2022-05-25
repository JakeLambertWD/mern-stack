// external
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { Provider } from 'react-redux';

// internal
import { App } from './App';
import store from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
