import React, { SFC, useState, MouseEvent } from 'react';
import style from './index.less';

const Tabs:SFC = () => {
    const position:any = {};
    const [pos, setPos] = useState({
        width: 77,
        left: 0
    })
    const changeFuc = (e:MouseEvent) => {
        if (e.target) {
            setPos({
                width: (e.target as HTMLBaseElement).offsetWidth,
                left: (e.target as HTMLBaseElement).offsetLeft
            })
        }
    }
    position['--activewidth'] = `${pos.width}px`;
    position['--activeLeft'] = `${pos.left}px`;
    return (
        <figure>
            <div className={style.tabs_container} style={position}>
                <div className={style.tabs_item} onClick={changeFuc}>
                    Tag 1
                </div>
                <div className={style.tabs_item} onClick={changeFuc}>
                    Tagzzzzzzzzzzzz 2
                </div>
                <div className={style.tabs_item} onClick={changeFuc}>
                    Tag 3
                </div>
            </div>
        </figure>
    )
}

export default Tabs;