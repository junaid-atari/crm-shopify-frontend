import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppIntent from './AppIntent';

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page} from '@shopify/polaris';

import '@shopify/polaris/build/esm/styles.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <AppProvider i18n={enTranslations}>
    <Page>
      <AppIntent/>
    </Page>
  </AppProvider>,
);
