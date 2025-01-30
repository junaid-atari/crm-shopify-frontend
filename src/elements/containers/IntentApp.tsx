import React from 'react';
import {AppProvider, Page} from '@shopify/polaris';

// transitions
import enTranslations from '@shopify/polaris/locales/en.json';

const IntentApp: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <AppProvider i18n={enTranslations}>
      <Page>
        {props.children}
      </Page>
    </AppProvider>
  );
};

export default IntentApp;
