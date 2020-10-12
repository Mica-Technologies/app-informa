import { Stack } from '@fluentui/react/lib/components/Stack';
import Branding from '../Branding';
import './leftBrandedContainerStyles.css';
import React from 'react';

export interface LeftBrandedContainerProps {
  menuElement?: React.ReactElement;
  children?: React.ReactElement[] | React.ReactElement;
}

function LeftBrandedContainer(props: LeftBrandedContainerProps) {
  return (
    <Stack horizontal horizontalAlign='space-between' verticalAlign='center'
           className='leftBrandedContainer'>
      <Stack.Item verticalFill className='leftBrandedContainerBranding'>
        <Branding width={150} menuElement={props.menuElement} />
      </Stack.Item>
      <Stack.Item grow verticalFill className='leftBrandedContainerContent'>
        {props.children}
      </Stack.Item>
    </Stack>
  );
}

export default LeftBrandedContainer;