import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App'; // Import your root component

ReactDOM.render(
  <Auth0Provider
    domain="dev-aji60kyz78pewz8m.us.auth0.com"
    clientId="cznhz3WW6Wd7qEP1qsR8sHrddP0FjQIl"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App /> {/* Render your root component (App) */}
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
