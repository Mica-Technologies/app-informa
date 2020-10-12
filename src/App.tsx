import {Stack} from '@fluentui/react/lib/components/Stack';
import './styles/global.css';
import {useState} from 'react';
import ContentRouter from './components/Routing/ContentRouter';

export function App() {
    const [path, setPath] = useState(window.location.href.split('#')[1] || 'root');

    return (
        <>
            <Stack className='appStack'>
                <Stack.Item className='appStackContent' grow verticalFill>
                    <ContentRouter path={path} setPath={setPath}/>
                </Stack.Item>
            </Stack>
        </>
    );
}