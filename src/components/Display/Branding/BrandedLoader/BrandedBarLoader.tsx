import { ProgressIndicator } from '@fluentui/react/lib/components/ProgressIndicator';
import { Stack } from '@fluentui/react/lib/components/Stack';
import Branding from '../Branding';

export interface BrandedBarLoaderProps {
  title: string;
  description: string;
  percentComplete: number;
}

function BrandedBarLoader(props: BrandedBarLoaderProps) {
  return (
    <Stack verticalAlign={'center'} horizontalAlign={'center'} tokens={{ childrenGap: 40 }}>
      <Stack.Item>
        <Branding width={240} />
      </Stack.Item>
      <Stack.Item>
        <ProgressIndicator label={props.title} description={props.description}
                           percentComplete={props.percentComplete} />
      </Stack.Item>
    </Stack>
  );
}

export default BrandedBarLoader;