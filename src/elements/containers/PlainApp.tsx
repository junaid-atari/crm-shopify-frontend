import React from 'react';

const App: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default App;
