import * as React from 'react';
import SearchIndex from './component/searchIndex';
import listStyle from './list.less';
import DemoControl, { MenuList } from './demo';

const MenuListStr = MenuList.map(item => item.name);

class List extends React.Component<any, any> {
    state = {
        activeComponent: MenuListStr[0]||''
    }
    changePage = (pageName:string) => {
        this.setState({
            activeComponent: pageName
        })
    }
    render() {
        const { activeComponent } = this.state;
        return(
            <section className={listStyle.list_page}>
                <header>CSS Lib</header>
                <main>
                    <menu>
                        <SearchIndex list={MenuListStr} activeComponent={activeComponent} changePage={this.changePage}/>
                    </menu>
                    <article>
                        <DemoControl activeComponent={activeComponent}/>
                    </article>
                </main>
            </section>
        )
    }
}

export default List;