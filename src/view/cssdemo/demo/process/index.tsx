import React, {useState} from 'react';
import { SFC } from 'react';

import style from './index.less';

const Progress:SFC = () => {
    const [progress, setProgress] = useState('0');
    const processStyle:any = {};
    processStyle['--progress'] = progress;
    return(
        <figure>
            <div className={style.process_show} style={processStyle}></div>
            <input type="range" min="0" max="100" value={progress} onChange={(e) => {
                setProgress(e.target.value);
            }}/>
        </figure>
    )
}

export default Progress;