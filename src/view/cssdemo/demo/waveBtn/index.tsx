import React, {useState} from 'react';
import { SFC } from 'react';

import style from './index.less';

const WaveBtn:SFC = () => {
    const [wavePos, setWavePos] = useState({
        x: '0',
        y: '0'
    })
    let wavestyle:any = {};
    wavestyle['--btnx'] = wavePos.x;
    wavestyle['--btny'] = wavePos.y;
    return(
        <figure>
            <button className={style.wave_btn} style={wavestyle} onClick={(e) => {
                setWavePos({
                    x: e.nativeEvent.offsetX + 'px',
                    y: e.nativeEvent.offsetY + 'px'
                });
            }}>Wave</button>
        </figure>
    )
}

export default WaveBtn;