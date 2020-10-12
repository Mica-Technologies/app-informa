import React from 'react';
import SystemAwareBrandedContainer from "../Display/Branding/BrandedContainer/SystemAwareBrandedContainer";

export interface ContentRouterProps {
    path: String;
    setPath: React.Dispatch<React.SetStateAction<string>>;
}

function ContentRouter(props: ContentRouterProps) {
    let content: React.ReactElement;
    if (props.path === 'root') {
        content = (<SystemAwareBrandedContainer>
            <p>Main Page!</p>
        </SystemAwareBrandedContainer>);
    } else {
        content = (<p>Unknown Page!</p>);
    }

    return content;
}

export default ContentRouter;