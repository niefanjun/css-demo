import React, { ComponentType, SFC, FunctionComponent } from 'react';
import WaveBtn from './waveBtn';
import Process from './process';

interface MenuListType {
    name: string,
    Component: ComponentType
}

export const MenuList:MenuListType[] = [
    {
        name: 'waveBtn',
        Component: WaveBtn
    }, {
        name: 'process',
        Component: Process
    }
]

const DemoControl:SFC<{activeComponent:string}> = (props) => {
    const active = MenuList.find(item => item.name === props.activeComponent)
    return (
        <div>
            {active?<active.Component />:''}
        </div>
    )
}

export default DemoControl;


// interface mysfc<T> {
//     (props: T,children?: ComponentType):FunctionComponent
// }

// declare type myfunccom<T> = (
//     props: T,
//     children?: ComponentType
// ) => FunctionComponent