import React, {useEffect, useState} from 'react';
import {useAppBridge} from '@shopify/app-bridge-react';

// ui-components
import {Button} from '@shopify/polaris';

//region Extended Types
type PlainObject = Record<string, any>;

export interface Intent {
  readonly action: string;
  readonly type: string;
  readonly data: {
    [key: string]: any;
  };

  finish(data?: any): void;
}
//endregion

const AppIntent: React.FC<React.PropsWithoutRef<any>> = () => {
  const shopify = useAppBridge();
  const [intent, setIntent] = useState<Intent | PlainObject>({});

  useEffect(() => {
    const cleanup = shopify.intents.register(setIntent);

    return () => cleanup();
  }, [shopify.intents]);

  return (
    <>
      <Button
        onClick={() => {
          intent.finish();
        }}>
        Go back to Flow
      </Button>
    </>
  );
};

export default AppIntent;
