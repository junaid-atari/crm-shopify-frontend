import React from 'react';

// ui-components
import {Button} from '@shopify/polaris';

const App: React.FC<React.PropsWithoutRef<any>> = () => (
  <>
    <Button
      onClick={() => {
        console.log("Clicked, See. I do nothing");
      }}>
      Go back to Flow
    </Button>
  </>
);

export default App;
