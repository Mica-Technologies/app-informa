import React from 'react';
import LeftBrandedContainer from "./LeftBrandedContainer";
import RightBrandedContainer from "./RightBrandedContainer";

export interface SystemAwareBrandedContainerProps {
    menuElement?: React.ReactElement;
    children?: React.ReactElement[] | React.ReactElement;
}

function SystemAwareBrandedContainer(props: SystemAwareBrandedContainerProps) {
    const isMac = process.platform === "darwin";
    return isMac ? (<LeftBrandedContainer menuElement={props.menuElement} children={props.children}/>) : (
        <RightBrandedContainer menuElement={props.menuElement} children={props.children}/>);
}

export default SystemAwareBrandedContainer;