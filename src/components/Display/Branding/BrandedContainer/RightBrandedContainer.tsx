import { Stack } from '@fluentui/react/lib/components/Stack';
import Branding from '../Branding';
import './rightBrandedContainerStyles.css';
import React from 'react';

export interface RightBrandedContainerProps {
  menuElement?: React.ReactElement;
  children?: React.ReactElement[] | React.ReactElement;
}

function RightBrandedContainer(props: RightBrandedContainerProps) {
  return (
    <Stack horizontal horizontalAlign='space-between' verticalAlign='center'
           className='rightBrandedContainer'>
      <Stack.Item grow verticalFill className='rightBrandedContainerContent'>
        {props.children}
      </Stack.Item>
      <Stack.Item verticalFill className='rightBrandedContainerBranding'>
        <Branding width={150} menuElement={props.menuElement} />
      </Stack.Item>
    </Stack>
  );
}

export default RightBrandedContainer;