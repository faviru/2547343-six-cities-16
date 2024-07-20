import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { data } from './components/settings/settings';
import { offerMocks } from './mocks/offer';
import { favoritesMocks } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cities={data.cities}
      offersData={offerMocks}
      favoritesData={favoritesMocks}
    />
  </React.StrictMode>
);
