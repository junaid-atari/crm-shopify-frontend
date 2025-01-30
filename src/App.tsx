import React from 'react';

import {Button} from '@shopify/polaris';

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
         console.log("Clicked button");
        }}>
        Go back to Flow
      </Button>
    </div>
  );
}

export default App;
