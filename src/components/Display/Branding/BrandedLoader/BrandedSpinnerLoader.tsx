import { Stack } from '@fluentui/react/lib/components/Stack';
import Branding from '../Branding';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/components/Spinner';

export interface BrandedSpinnerLoaderProps {
  size: SpinnerSize;
}

function BrandedSpinnerLoader(props: BrandedSpinnerLoaderProps) {
  return (
    <Stack verticalAlign={'center'} horizontalAlign={'center'} tokens={{ childrenGap: 40 }}>
      <Stack.Item>
        <Branding width={240} />
      </Stack.Item>
      <Stack.Item>
        <Spinner size={props.size} />
      </Stack.Item>
    </Stack>
  );
}

export default BrandedSpinnerLoader;