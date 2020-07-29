import React, { useState } from 'react';
import { SFC } from 'react';
import style from './index.less';

type Props = {
    list?:String[],
    activeComponent?:String
    changePage?:Function
}

const SearchIndex:SFC<Props> = ({list,activeComponent,changePage}) => {
    const [ searchWord, setSearchWord ] = useState('');
    return (
        <div className={style.search_index}>
            <style>{searchWord?`
                .${style.search_index} ul li:not([data-index*="${searchWord}"]){display:none}
                .${style.search_index} ul li[data-index="${activeComponent}"]{color:#1890ff}
            `:`.${style.search_index} ul li[data-index="${activeComponent}"]{color:#1890ff}`}</style>
            <input type="search" onChange={(e) => {
                setSearchWord(e.target.value);
            }}/>
            <ul>
                {
                    list.map(item => (
                        <li data-index={item} onClick={() => changePage(item)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchIndex;