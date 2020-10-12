import { Stack } from '@fluentui/react/lib/components/Stack';
import './brandingStyles.css';
import Logo from './logo.png';
import React from 'react';

export interface BrandingProps {
  width: number;
  menuElement?: React.ReactElement;
}

export default function Branding(props: BrandingProps) {
  const fontWidth = props.width / 5.74;
  return (
    <Stack verticalFill verticalAlign={props.menuElement ? 'space-between' : 'center'} horizontalAlign={'center'}>
      <Stack.Item className={props.menuElement ? 'titleBarMargin' : ''}>
        <img
          className='logoImage'
          src={Logo}
          alt='Mica Technologies Logo'
          width={props.width}
        />
        <p className='logoText' style={{ fontSize: fontWidth }}>
          Informa
        </p>
      </Stack.Item>
      {
        props.menuElement &&
        <Stack.Item className='logoMenuElement'>
          {props.menuElement}
        </Stack.Item>
      }
    </Stack>
  );
}