import React from 'react';
import ReactDOM from 'react-dom/client';

// containers
import IntentContainer from './elements/containers/IntentApp';
import PlainContainer from './elements/containers/PlainApp';

// app-core-components
import App from './App';
import AppIntent from './AppIntent';

// styles
import '@shopify/polaris/build/esm/styles.css';

const isIntentApp = process.env?.REACT_APP_SHOPIFY_INTENT === 'true';

var Container = isIntentApp
  ? PlainContainer
  : IntentContainer;

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <Container>
    {isIntentApp ? <AppIntent/> : <App/>}
  </Container>,
);
