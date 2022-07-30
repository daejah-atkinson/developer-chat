import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-hzrj9guz6kv0.frontegg.com',
  clientId: '55561a80-f374-4f3f-8303-63621e7433cc'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);